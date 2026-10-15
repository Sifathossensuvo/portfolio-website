import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const hackerCommandsQueue = [
  { type: 'command', text: '$ whoami' },
  { type: 'output', text: '> Mern-stack developer. Curious by default.' },
  { type: 'command', text: '$ cat mission.txt' },
  { type: 'output', text: '> Build useful things. Keep the system simple.' },
  { type: 'command', text: '$ status' },
  { type: 'output', text: '> Ready for your next challenge.' },
  { type: 'command', text: '$ ping shuvo.dev -c 1' },
  { type: 'output', text: '> 64 bytes from 127.0.0.1: icmp_seq=1 ttl=64 time=0.042 ms' },
  { type: 'command', text: '$ security --audit' },
  { type: 'output', text: '> All systems operational. Zero vulnerabilities detected.' },
  { type: 'command', text: '$ git status' },
  { type: 'output', text: '> On branch main. Your branch is up to date.' },
  { type: 'command', text: '$ docker ps --active' },
  { type: 'output', text: '> CONTAINER ID   IMAGE          STATUS' },
  { type: 'output', text: '> 4a9f8b1c2d3e   shuvo-core    Up 42 days (healthy)' }
];

export default function ConsoleSection() {
  const [lines, setLines] = useState([]);
  const [queueIndex, setQueueIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [cursorBlink, setCursorBlink] = useState(true);
  
  const terminalEndRef = useRef(null);

  // Optimized typing loop engine to prevent any lag
  useEffect(() => {
    const currentItem = hackerCommandsQueue[queueIndex];
    
    if (charIndex <= currentItem.text.length) {
      const typingTimer = setTimeout(() => {
        setLines((prev) => {
          const newLines = [...prev];
          if (newLines.length === 0 || newLines[newLines.length - 1].isComplete) {
            newLines.push({
              type: currentItem.type,
              text: currentItem.text.substring(0, charIndex),
              isComplete: charIndex === currentItem.text.length
            });
          } else {
            newLines[newLines.length - 1] = {
              type: currentItem.type,
              text: currentItem.text.substring(0, charIndex),
              isComplete: charIndex === currentItem.text.length
            };
          }
          return newLines;
        });
        setCharIndex(charIndex + 1);
      }, 25);

      return () => clearTimeout(typingTimer);
    } else {
      const pauseTimer = setTimeout(() => {
        setQueueIndex((prev) => (prev + 1) % hackerCommandsQueue.length);
        setCharIndex(0);
      }, 800);

      return () => clearTimeout(pauseTimer);
    }
  }, [queueIndex, charIndex]);

  // Smooth auto-scroll inside the terminal container
  useEffect(() => {
    if (terminalEndRef.current) {
      terminalEndRef.current.scrollTop = terminalEndRef.current.scrollHeight;
    }
  }, [lines]);

  // Optimized blinking cursor effect
  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setCursorBlink((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorTimer);
  }, []);

  const stats = [
    { number: '01', label: 'MERNSTACK / END-TO-END' },
    { number: '26', label: 'PROJECTS TO EXPLORE' },
    { number: '06', label: 'STACK DISCIPLINES' },
    { number: '∞', label: 'CURIOSITY / ALWAYS ON' }
  ];

  return (
    <section className="w-full  mx-auto pt-[30px] mb-[56px]">
      {/* Console Box with No Horizontal Scrollbar */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full bg-[#0F1713] border border-[#294535] rounded-[6px] overflow-hidden mb-[52px]"
      >
        {/* Terminal Header Bar */}
        <div className="flex items-center justify-between px-5 py-3.5 bg-[#0D1511] border-b border-[#16291F]">
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 rounded-full bg-[#FF5F56] inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-[#FFBD2E] inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-[#27C93F] inline-block"></span>
          </div>
          <div className="font-mono text-xs text-[#6B7280] tracking-wider">
            sifat@shuvo: ~/portfolio
          </div>
          <div className="w-12"></div>
        </div>

        {/* Terminal Body with hidden horizontal scroll & clean vertical scroll */}
        <div 
          ref={terminalEndRef}
          className="p-6 md:p-8 font-mono text-xs md:text-sm leading-relaxed h-[215px] overflow-y-auto overflow-x-hidden flex flex-col justify-start space-y-2.5 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {lines.map((line, index) => (
            <div
              key={index}
              className={`break-all ${line.type === 'command' ? 'text-[#00FF88] font-semibold' : 'text-[#9CA3AF] pl-4'}`}
            >
              {line.text}
              {!line.isComplete && index === lines.length - 1 && (
                <span className={`inline-block w-2 h-4 bg-[#00FF88] ml-1 align-middle ${cursorBlink ? 'opacity-100' : 'opacity-0'}`}></span>
              )}
            </div>
          ))}

          {lines.length > 0 && lines[lines.length - 1]?.isComplete && (
            <div className="flex items-center">
              <span className={`w-2 h-4 bg-[#00FF88] ${cursorBlink ? 'opacity-100' : 'opacity-0'} transition-opacity`}></span>
            </div>
          )}
        </div>
      </motion.div>

      {/* Metric Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="bg-[#0F1713] border border-[#294535] rounded-[6px] p-5 flex flex-col gap-[15px] h-[121px] group hover:border-[#00FF88]/40 transition-all"
          >
            <div className="font-mono text-[40px] md:text-4xl font-bold text-[#00FF88] tracking-tight">
              {stat.number}
            </div>
            <div className="font-mono text-[12px] text-[#9BAFA2] tracking-[-0.24px] font-medium group-hover:text-[#9CA3AF] transition-colors">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
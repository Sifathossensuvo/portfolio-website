import React from 'react';
import { motion } from 'framer-motion';
import { MatrixRain } from './ui/matrix-rain';

export default function Hero() {
  return (
    <section className="relative w-full pt-[54px]  overflow-hidden">

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <MatrixRain />
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 ">
        
        {/* Left Content Column */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="lg:col-span-7 flex flex-col items-start"
        >
          {/* Status Text (No background box/border, exact match) */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="flex items-center gap-2.5 mb-[45px]"
          >
            <span className="w-[10px] h-[10px] rounded-full bg-[#00FF88] animate-pulse shadow-[0_0_8px_#00FF88] items-center" />
            <span className="font-mono font-normal text-[12px] text-[#00FF88] tracking-[-0.24px] font-medium">
              AVAILABLE FOR SELECT COLLABORATIONS / 2026
            </span>
          </motion.div>

          {/* Main Heading */}
<motion.h1
  initial={{ opacity: 0, y: 15 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 0.2 }}
  className="
    text-4xl
    sm:text-6xl
    lg:w-[602px]
    lg:h-[160px]
    lg:text-[78px]
    lg:leading-[79.56px]
    lg:tracking-[-3.12px]
    lg:font-medium
    font-['Space_Grotesk']
    text-[#E8F3EC]
    mb-[23px]
  "
>
  Human thinking. <br />
  Production code.
</motion.h1>

          {/* Paragraph */}
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="main-paragraph mb-[23px]"
          >
            I’m Sifat Hossen, a mern-stack developer turning complex <br /> ideas into fast interfaces and dependable systems.
          </motion.p>

          {/* Action Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap items-center gap-4 mb-[23px]"
          >
            <a
              href="#projects"
              className="bg-[#00FF88] text-[#070B09] font-bold text-[13px] px-5 py-[14px] rounded-[4px] flex items-center gap-1 hover:bg-[#00e078] transition-all "
            >
              Explore my work <span className="text-xs font-bold">↓</span>
            </a>
            <a
              href="#contact"
              className="bg-[#0E1511] border border-[#1C2C23] text-[#E8F3EC] font-bold text-[13px] px-[20px] py-[14px] rounded-[4px] flex items-center gap-1 hover:bg-[#152219] hover:border-[#00FF88]/40 transition-all"
            >
              Start a conversation <span className="text-xs text-[#9CA3AF]">↗</span>
            </a>
          </motion.div>

          {/* Location / Meta info */}
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5, delay: 0.5 }}
  className="fontt font-normal text-[12px] leading-[19.2px] tracking-[-0.24px] text-[#9BAFA2] flex flex-wrap items-center gap-3"
>
  <span>BANGLADESH</span>
  <span className="">/</span>
  <span>REMOTE WORLDWIDE</span>
  <span className="">/</span>
  <span>UTC+6</span>
</motion.div>
        </motion.div>

        {/* Right Image Card Column */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="lg:col-span-5 items-end flex justify-center lg:justify-end"
        >
          <div className=" w-[360px] h-[380px] bg-[#0A100D] border border-[#294535] rounded-[6px] p-[10px] shadow-2xl relative group">
            {/* Image Wrapper */}
            <div className="w-full h-[310px] rounded-[3px] overflow-hidden bg-[#050806] border border-[#131F18] relative">
              <img
                src="assets/profile.png" 
                alt="Sifat Hossen"
                className="w-full h-full object-cover  group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070B09] via-transparent to-transparent opacity-70" />
            </div>

            {/* Card Footer Info */}
            <div className=" mt-[10px] px-1 ">
              <h3 className="font-mono text-[12px] font-normal text-[#00FF88] tracking-[-0.24px]">
                SIFAT HOSSEN / MERN-STACK ENGINEER
              </h3>
              <p className="font-mono text-[12px] font-normal text-[#9BAFA2] tracking-[-0.24px]">
                PRODUCT MINDSET. AI SPECIALIST.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
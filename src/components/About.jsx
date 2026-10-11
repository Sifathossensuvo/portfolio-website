import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  const principles = [
    { num: '01', text: 'CLARITY BEFORE COMPLEXITY' },
    { num: '02', text: 'ACCESSIBILITY IS PART OF QUALITY' },
    { num: '03', text: 'MEASURE, THEN OPTIMIZE' },
    { num: '04', text: 'LEAVE THE CODE BETTER' }
  ];

  return (
    <section id="about" className="w-full mx-auto   relative">
      {/* Top Border Line */}
      <div className="w-full h-[1px] bg-[#294535] mb-[62px]"></div>

      {/* Section Tag Badge */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="font-mono text-xs text-[#00FF88] tracking-[0.18em] mb-[26px] flex items-center gap-2"
      >
        <span>[ 01 / ABOUT ]</span>
      </motion.div>

      {/* Section Heading */}
      <motion.h2 
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="main-heading mb-[28px]"
      >
        A person behind the terminal.
      </motion.h2>

      {/* Grid Layout: Left Paragraphs & Right Principles Box */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-[24px] items-start">
        
        {/* Left Column: Descriptive Paragraphs */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:col-span-6 flex flex-col space-y-4 font-['Space_Grotesk'] text-[#9BAFA2] text-base leading-[1.7] text-[16px] font-medium"
        >
          <p>
            I work where product thinking meets engineering. I like <br /> clear requirements, small pull requests, and interfaces <br /> that feel effortless. From the first wireframe to the <br /> deployment pipeline, I make the 
            pieces work together.
          </p>
          <p className="text-[#9BAFA2] text-[16px]">
            Away from the keyboard: street photography, slow coffee, and finding the simplest route through a complicated problem.
          </p>
        </motion.div>

        {/* Right Column: Principles Card */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="lg:col-span-6"
        >
<div className="w-full md:h-[204px] bg-[#0F1713] border border-[#294535] rounded-[6px] p-6 md:p-8 flex flex-col space-y-4">
  {principles.map((item, idx) => (
    <div 
      key={idx}
      className="flex items-center space-x-4 font-mono text-xs md:text-sm tracking-widest text-[#9CA3AF] hover:text-[#00FF88] transition-colors group"
    >
      <span className="text-[#00FF88] font-semibold relative h-[20px] w-[20px] overflow-hidden">
        <span
          className="absolute inset-0 flex items-center justify-center animate-number-roll"
        >
          {item.num}
        </span>
      </span>

      <span className="text-[#3B4E43]">/</span>

      <span className="group-hover:text-white transition-colors">
        {item.text}
      </span>
    </div>
  ))}
</div>
        </motion.div>

      </div>

      {/* Bottom Border Line */}

    </section>
  );
}
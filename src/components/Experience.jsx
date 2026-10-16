import React from 'react';
import { motion } from 'framer-motion';

export default function Experience() {
 const experiences = [
  {
    period: '2026 — NOW',
    title: 'Independent / Full-Stack Developer',
    description: (
      <>
        Building modern web applications, AI-powered tools, and digital
        <br />
        products. Focused on clean code and real-world impact.
      </>
    ),
  },
  {
    period: '2024 — 2025',
    title: 'Full-Stack Development / Product Building',
    description: (
      <>
Built full-stack apps, REST APIs, real-time features, and responsive UIs through practical projects.
      </>
    ),
  },
  {
    period: '2023 — 2024',
    title: 'MERN Stack / AI Integration',
    description: (
      <>
        React, Node.js, databases, and intelligent application workflows.
        <br />
        Continuously learning through practical, user-focused builds.
      </>
    ),
  },
];

  return (
    <section id="experience" className="w-full max-w-[1120px] mx-auto   relative">
      {/* Top Border Line */}
      <div className="w-full h-[1px] bg-[#294535] mb-[64px]"></div>

      {/* Section Tag Badge */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="font-mono text-xs text-[#00FF88] tracking-[0.18em] mb-[27px] flex items-center gap-2"
      >
        <span>[ 03 / EXPERIENCE ]</span>
      </motion.div>

      {/* Section Heading */}
      <motion.h2 
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="main-heading mb-[27px]"
      >
        Experience, without the noise.
      </motion.h2>

      {/* Experience Cards Stack */}
      <div className="flex flex-col space-y-[27px]">
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="bg-[#0F1713] border border-[#294535] rounded-[6px] p-[22px] flex flex-col md:flex-row  hover:border-[#00FF88]/40 hover:shadow-[0_0_25px_rgba(0,255,136,0.07)] transition-all group"
          >
            <div className="md:w-1/6 mb-4 md:mb-0">
              <span className="font-mono text-xs text-[#00FF88] tracking-[-0.24px] font-medium items-start">
                {exp.period}
              </span>
            </div>
            <div className="md:w-3/4 flex flex-col space-y-[15px]">
              <h3 className="sub-heading group-hover:text-[#00FF88] transition-colors">
                {exp.title}
              </h3>
              <p className="main-paragraph">
                {exp.description}
              </p>
            </div>
          </motion.div>
        ))}

        {/* Credentials & Continuous Learning Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-[#0F1713] border border-[#294535] rounded-[6px] p-[24px] flex flex-col space-y-[15px] hover:border-[#00FF88]/40 hover:shadow-[0_0_25px_rgba(0,255,136,0.07)] transition-all group"
        >
          <h3 className="sub-heading group-hover:text-[#00FF88] transition-colors">
            Technical Skills & Continuous Learning
          </h3>
          <p className="main-paragraph">
           Full-stack development · AI integration · API design · modern UI/UX
          </p>
          <div className=" font-mono text-[12px] text-[#9BAFA2] tracking-[-0.24px] flex flex-wrap items-center gap-2">
            <span className=" ">BUILD</span>
            <span>/</span>
            <span>INTEGRATE</span>
            <span>·</span>
            <span>IMPROVE</span>
            <span>·</span>
            <span>INNOVATE</span>
          </div>


        </motion.div>
      </div>

      {/* Bottom Border Line */}
      <div className="w-full h-[1px] bg-[#16291F] mt-20"></div>
    </section>
  );
}


import { FiArrowUpRight } from 'react-icons/fi';
import React, { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

export default function Projects() {
  const projects = [
    {
      id: 'cal',
      badge: '~/builds/cal.com',
      category: 'SCHEDULING INFRASTRUCTURE',
      title: 'Cal.com',
      description: 'An open-source scheduling platform: calendars, booking flows, and team availability.',
      stack: 'Next.js / TypeScript / Prisma',
      liveUrl: 'https://cal.com',
      githubUrl: 'https://github.com/calcom/cal.com',
      mockupType: 'calendar'
    },
    {
      id: 'medusa',
      badge: '~/builds/medusa',
      category: 'COMPOSABLE COMMERCE',
      title: 'Medusa',
      description: 'A modular commerce platform built around flexible APIs and merchant workflows.',
      stack: 'Node.js / TypeScript / PostgreSQL',
      liveUrl: 'https://medusajs.com',
      githubUrl: 'https://github.com/medusajs/medusa',
      mockupType: 'commerce'
    },
    {
      id: 'excalidraw',
      badge: '~/builds/excalidraw',
      category: 'COLLABORATIVE CANVAS',
      title: 'Excalidraw',
      description: 'A lightweight sketching canvas with a clear interface and local-first interaction.',
      stack: 'React / TypeScript / Canvas',
      liveUrl: 'https://excalidraw.com',
      githubUrl: 'https://github.com/excalidraw/excalidraw',
      mockupType: 'canvas'
    }
  ];

  return (
    <section id="projects" className="w-full max-w-[1120px] mx-auto  relative">
      {/* Top Border Line */}
      <div className="w-full h-[1px] bg-[#294535] mb-[64px]"></div>

      {/* Section Tag Badge */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="font-mono text-xs text-[#00FF88] tracking-[0.18em] mb-[27px] flex items-center gap-2"
      >
        <span>[ 04 / PROJECTS ]</span>
      </motion.div>

      {/* Section Heading */}
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        className="main-heading mb-[27px]"
      >
        Open the build. Read the source.
      </motion.h2>

      {/* Subtitle */}
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
        className="main-paragraph mb-[27px]"
      >
        Three open-source projects to explore: interfaces, commerce, and developer workflows.
      </motion.p>

      {/* Projects Grid */}

<div className="grid grid-cols-1 lg:grid-cols-3 gap-[18px] mb-[27px]">
  {projects.map((project, idx) => {
    const ProjectCard = () => {
      const cardRef = useRef(null);
      const mouseX = useMotionValue(0);
      const mouseY = useMotionValue(0);

      const smoothX = useSpring(mouseX, {
        stiffness: 160,
        damping: 24,
      });

      const smoothY = useSpring(mouseY, {
        stiffness: 160,
        damping: 24,
      });

      const glowX = useTransform(smoothX, (value) => `${value}px`);
      const glowY = useTransform(smoothY, (value) => `${value}px`);

      const handleMouseMove = (event) => {
        if (!cardRef.current) return;

        const rect = cardRef.current.getBoundingClientRect();

        mouseX.set(event.clientX - rect.left);
        mouseY.set(event.clientY - rect.top);
      };

      const handleMouseLeave = () => {
        if (!cardRef.current) return;

        const rect = cardRef.current.getBoundingClientRect();

        mouseX.set(rect.width / 2);
        mouseY.set(rect.height / 2);
      };

      return (
        <motion.div
          ref={cardRef}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: idx * 0.15, ease: "easeOut" }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          whileHover={{ y: -5, transition: { duration: 0.2 } }}
          className="bg-[#0F1713] border border-[#294535] rounded-[6px] p-[24px] flex flex-col justify-between hover:border-[#00FF88]/40 hover:shadow-[0_0_30px_rgba(0,255,136,0.08)] transition-all group relative overflow-hidden"
        >
          <motion.div
            className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
            style={{
              background: useTransform(
                [glowX, glowY],
                ([x, y]) =>
                  `radial-gradient(250px circle at ${x} ${y}, rgba(0,255,136,0.09), transparent 70%)`
              ),
            }}
          />

          <div className="relative z-10 flex flex-col justify-between flex-1">
            <div>
              {/* Project Top Mockup Display Box */}
              <div className="w-full h-[162px] bg-[#17261E]  rounded-[3px] p-4 mb-[14px] relative overflow-hidden flex flex-col items-center justify-center">
                {/* File path badge inside mockup */}
                <span className=" text-[12px] text-[#00FF88] tracking-[-0.24px] mb-[12px] font-normal">
                  {project.badge}
                </span>

                {/* Dynamic Mockup Content */}
                {project.mockupType === 'calendar' && (
                  <div className="w-full max-w-[200px] font-mono text-[10px] text-[#9CA3AF] space-y-2">
                    <div className="flex justify-between text-[#E8F3EC] border-b border-[#16291F] pb-1">
                      <span>[ MON</span>
                      <span>TUE</span>
                      <span>WED</span>
                      <span>THU ]</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>09:00</span>
                      <span className="w-3 h-3 bg-[#00FF88]/30 rounded-[2px] animate-pulse"></span>
                      <span>10:30</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>11:00</span>
                      <span className="w-3 h-3 bg-[#00FF88]/60 rounded-[2px]"></span>
                      <span>14:00</span>
                    </div>
                  </div>
                )}

                {project.mockupType === 'commerce' && (
                  <div className="w-full max-w-[210px] font-mono text-[10px] text-[#9CA3AF] text-center space-y-2">
                    <div className="text-[#E8F3EC] tracking-widest font-semibold">STORE / API</div>
                    <div>products → cart → order</div>
                    <div className="inline-block px-3 py-1 bg-[#00FF88]/10 border border-[#00FF88]/30 text-[#00FF88] rounded mt-1 font-bold tracking-wider">
                      [ READY ]
                    </div>
                  </div>
                )}

                {project.mockupType === 'canvas' && (
                  <div className="w-full max-w-[180px] h-[60px] border border-dashed border-[#00FF88]/40 rounded-lg flex items-center justify-center font-mono text-xs text-[#E8F3EC] tracking-widest relative">
                    <span>| IDEA | → | SHIP |</span>
                  </div>
                )}
              </div>

              {/* Category */}
              <div className="font-normal text-[12px] text-[#00FF88] tracking-[0.11em] mb-[15px]">
                {project.category}
              </div>

              {/* Title */}
              <h3 className="sub-heading group-hover:text-[#00FF88] transition-colors mb-[15px]">
                {project.title}
              </h3>

              {/* Description */}
              <p className="main-paragraph mb-[15px]">
                {project.description}
              </p>
            </div>

            {/* Bottom Stack & Action Buttons */}
            <div>
              <div className=" text-[12px] text-[#9BAFA2] tracking-wider mb-[15px] font-normal">
                {project.stack}
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-[#00FF88] text-[#070B09] font-bold text-[13px] py-[14px] px-5 rounded-[4px] flex items-center justify-center gap-1 hover:bg-[#00e078] transition-all shadow-[0_0_20px_rgba(0,255,136,0.2)]"
                >
                  Live preview <FiArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
                </a>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#0E1511] border border-[#294535] text-[#E8F3EC] font-bold text-[13px] py-[14px] px-[20px] rounded-lg flex items-center justify-center gap-1 hover:bg-[#152219] hover:border-[#00FF88]/40 transition-all"
                >
                  GitHub <FiArrowUpRight className="w-3.5 h-3.5 text-[#9CA3AF]" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      );
    };

    return <ProjectCard key={project.id} />;
  })}
</div>




      {/* Footer Disclaimer */}
      <div className=" text-[12px] text-[#9BAFA2] tracking-[0.11em]">
        OPEN-SOURCE SPOTLIGHT / CREDIT BELONGS TO THE ORIGINAL MAINTAINERS.
      </div>

    </section>
  );
}

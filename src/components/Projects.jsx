import { FiArrowUpRight, FiX, FiLayers, FiCpu, FiCheckCircle } from 'react-icons/fi';
import React, { useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

import { Link } from "react-router-dom";

import { ArrowUpRight } from "lucide-react";

export default function Projects() {
  const projects = [
{
  id: 'hishabflow',
  badge: '~/products/hishabflow',
  category: 'BUSINESS MANAGEMENT SOFTWARE',
  title: 'HishabFlow',
  description: 'An AI-powered business management platform for handling inventory, sales, customers, expenses, invoices, and business operations in one place.',
  stack: 'React / Node.js / Express.js / MongoDB',
  liveUrl: 'https://hishabflow.vercel.app/',
  githubUrl: 'https://github.com/Sifathossensuvo/hishabflow-software',
  mockupType: 'hishabflow',
  fullDetails: 'HishabFlow is a full-stack business management software featuring inventory tracking, sales management, customer and supplier records, due payments, expense tracking, invoices, business reports, and business insights. Built with React, Node.js, Express.js, and MongoDB, it brings essential business operations together in one platform.'
},


    {
      id: 'md-younus-portfolio',
      badge: '~/builds/md-younus-portfolio',
      category: 'UI/UX DESIGN PORTFOLIO',
      title: 'Md Younus Portfolio',
      description: 'A visually immersive portfolio for a UI/UX designer, featuring elegant interfaces, fluid animations, and a premium interactive experience.',
      stack: 'React / Node.js / Tailwind CSS / Framer Motion',
      liveUrl: 'https://younus-uiux.vercel.app',
      githubUrl: 'https://github.com/Sifathossensuvo/md-younus',
      mockupType: 'younus-portfolio',
      fullDetails: 'A complete, highly animated portfolio website designed for UI/UX designer Md Younus. Built with React, Node.js, Tailwind CSS, Framer Motion, and additional technologies, the project focuses on visual storytelling, polished interactions, smooth transitions, and a memorable user experience.'
    },

{
  id: 'murmur-messenger',
  badge: '~/builds/murmur-messenger',
  category: 'REAL-TIME MESSAGING PLATFORM',
  title: 'Murmur Messenger',
  description: 'A full-stack real-time messaging platform featuring personal chats, group conversations, media sharing, emoji reactions, active status, and customizable profiles.',
  stack: 'React / Node.js / Express.js / Socket.IO / MongoDB',
  liveUrl: 'https://murmur-messenger.vercel.app/',
  githubUrl: 'https://github.com/Sifathossensuvo/murmur-messenger',
  mockupType: 'murmur-messenger',
  fullDetails: 'Murmur Messenger is a full-stack real-time communication platform built to deliver a rich, interactive messaging experience. Developed with React, Node.js, Express.js, Socket.IO, MongoDB, and additional technologies, it supports account creation, personalized profiles, direct messaging, real-time message delivery, emoji interactions, media sharing, online and active status, group conversations, and group settings. The project focuses on responsive interactions, seamless communication, and a modern user experience.'
},
  ];

  const [selectedProject, setSelectedProject] = useState(null);

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
          onClick={() => setSelectedProject(project)}
          whileHover={{ y: -5, transition: { duration: 0.2 } }}
          className="bg-[#0F1713] border border-[#294535] rounded-[6px] p-[24px] flex flex-col justify-between hover:border-[#00FF88]/40 hover:shadow-[0_0_30px_rgba(0,255,136,0.08)] transition-all group relative overflow-hidden cursor-pointer"
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


{project.mockupType === 'hishabflow' && (
  <div className="w-full font-mono text-[10px] text-center space-y-2">
    <div className="text-[#E8F3EC] font-semibold tracking-wider">
      HISHABFLOW / ERP
    </div>
    <div className="text-[#9CA3AF]">
      business → finance → insights
    </div>
    <div className="inline-block px-3 py-1 bg-[#00FF88]/10 border border-[#00FF88]/30 text-[#00FF88] rounded font-bold tracking-wider">
      [ SYSTEM ACTIVE ]
    </div>
  </div>
)}



{project.mockupType === 'younus-portfolio' && (
  <div className="w-full font-mono text-[10px] text-center space-y-2">
    <div className="text-[#E8F3EC] font-semibold tracking-wider">
      YOUNUS / DESIGN
    </div>

    <div className="text-[#9CA3AF]">
      design → animate → create
    </div>

    <div className="inline-block px-3 py-1 bg-[#00FF88]/10 border border-[#00FF88]/30 text-[#00FF88] rounded font-bold tracking-wider">
      [ EXPLORE ]
    </div>
  </div>
)}


{project.mockupType === 'murmur-messenger' && (
  <div className="w-full font-mono text-[10px] text-center space-y-2">
    <div className="text-[#E8F3EC] font-semibold tracking-wider">MURMUR / CHAT</div>
    <div className="text-[#9CA3AF]">connect → message → share</div>
    <div className="inline-block px-3 py-1 bg-[#00FF88]/10 border border-[#00FF88]/30 text-[#00FF88] rounded font-bold tracking-wider">[ LIVE / CONNECTED ]</div>
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

              <div className="flex items-center gap-3" onClick={(e) => e.stopPropagation()}>
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
<div className="flex flex-wrap items-center gap-3 text-[12px] text-[#9BAFA2] tracking-[0.11em]">
  <span>
    MY ALL WORLD CLASS PROJECTS / READY TO VIEW MY ALL PROJECTS?
  </span>

  <Link
    to="/projects"
    className="group inline-flex items-center gap-1.5 text-[#00FF88] transition-opacity duration-300 hover:opacity-80"
  >
    <span className="underline underline-offset-4 decoration-transparent transition-all duration-300 group-hover:decoration-[#00FF88]">
      VIEW MORE
    </span>

    <ArrowUpRight
      size={14}
      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
    />
  </Link>
</div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0A100E] border border-[#294535] rounded-xl p-6 sm:p-8 max-w-2xl w-full relative shadow-[0_0_50px_rgba(0,255,136,0.15)] max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 text-[#9CA3AF] hover:text-[#00FF88] transition-colors p-1"
              >
                <FiX className="w-6 h-6" />
              </button>

              {/* Modal Header Badge */}
              <div className="font-mono text-xs text-[#00FF88] tracking-widest mb-2 flex items-center gap-2">
                <FiLayers className="w-4 h-4" />
                <span>{selectedProject.badge}</span>
              </div>

              {/* Title */}
              <h2 className="text-2xl sm:text-3xl font-bold text-[#E8F3EC] mb-3">
                {selectedProject.title}
              </h2>

              {/* Category */}
              <div className="font-mono text-xs text-[#9CA3AF] tracking-wider mb-6 pb-4 border-b border-[#16291F]">
                CATEGORY: <span className="text-[#00FF88]">{selectedProject.category}</span>
              </div>

              {/* Detailed Description */}
              <div className="space-y-4 mb-8">
                <h4 className="font-mono text-xs text-[#00FF88] tracking-widest uppercase flex items-center gap-2">
                  <FiCpu className="w-4 h-4" /> Architecture & Implementation
                </h4>
                <p className="text-[#9CA3AF] text-sm sm:text-base leading-[1.7]">
                  {selectedProject.fullDetails}
                </p>
              </div>

              {/* Tech Stack */}
              <div className="mb-8 p-4 rounded-lg bg-[#050806] border border-[#16291F]">
                <div className="font-mono text-xs text-[#00FF88] tracking-wider mb-2 flex items-center gap-2">
                  <FiCheckCircle className="w-4 h-4" /> Tech Stack & Tools
                </div>
                <div className="text-sm font-mono text-[#E8F3EC]">
                  {selectedProject.stack}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-4">
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-[#00FF88] text-[#070B09] font-bold text-sm py-3 px-6 rounded-lg flex items-center justify-center gap-2 hover:bg-[#00e078] transition-all shadow-[0_0_20px_rgba(0,255,136,0.2)]"
                >
                  Live preview <FiArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                </a>

                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#0E1511] border border-[#294535] text-[#E8F3EC] font-bold text-sm py-3 px-6 rounded-lg flex items-center justify-center gap-2 hover:bg-[#152219] hover:border-[#00FF88]/40 transition-all"
                >
                  GitHub repository <FiArrowUpRight className="w-4 h-4 text-[#9CA3AF]" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
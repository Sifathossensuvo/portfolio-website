import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FiArrowUpRight, FiArrowLeft, FiX, FiLayers, FiCpu, FiCheckCircle } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export default function AllProjects() {
  // Extended dummy project pool to demonstrate Load More functionality (total 18 items)
  const masterProjects = [
{
  id: 'code-ninja-ai',
  badge: '~/builds/code-ninja-ai',
  category: 'AI CODING AGENT',
  title: 'CODE NINJA AI',
  description: 'A next-generation AI coding agent wrapped in an immersive hacker console, built for intelligent coding assistance and developer workflows.',
  stack: 'TypeScript / React / Supabase / AI APIs',
  liveUrl: 'https://code-ninja-ai.vercel.app',
  githubUrl: 'https://github.com/Sifathossensuvo/code-ninja-ai',
  mockupType: 'code-ninja-ai',
  fullDetails: 'CODE NINJA AI is a hacker-console-inspired AI coding agent designed to deliver a powerful developer experience. Combining a terminal aesthetic, intelligent AI assistance, and a modern TypeScript-based architecture with Supabase integration, it brings coding workflows into a futuristic, developer-focused environment.'
},

{
  id: 'md-younus-portfolio',
  badge: '~/builds/md-younus-portfolio',
  category: 'UI/UX DESIGN PORTFOLIO',
  title: 'Md YOUNUS PORTFOLIO',
  description: 'A visually immersive portfolio for a UI/UX designer, featuring elegant interfaces, fluid animations, and a premium interactive experience.',
  stack: 'React / Node.js / Tailwind CSS / Framer Motion',
  liveUrl: 'https://younus-uiux.vercel.app',
  githubUrl: 'https://github.com/Sifathossensuvo/md-younus',
  mockupType: 'younus-portfolio',
  fullDetails: 'A complete, highly animated portfolio website designed for UI/UX designer Md Younus. Built with React, Node.js, Tailwind CSS, Framer Motion, and additional technologies, the project focuses on visual storytelling, polished interactions, smooth transitions, and a memorable user experience.'
},

{
  id: 'code-ninja-player',
  badge: '~/builds/code-ninja-player',
  category: 'HACKER-STYLE MEDIA PLAYER',
  title: 'CODE NINJA PLAYER',
  description: 'A futuristic hacker-style media player for immersive movies, music, and detailed media exploration.',
  stack: 'React / JavaScript / Tailwind CSS / Media APIs',
  liveUrl: 'https://code-ninja-player.vercel.app',
  githubUrl: 'https://github.com/Sifathossensuvo/code-ninja-ai',
  mockupType: 'code-ninja-player',
  fullDetails: 'CODE NINJA PLAYER is a hacker-console-inspired web media player designed to transform the way users experience movies and music. It combines immersive playback, media information, and a futuristic interface into one unified experience, with a focus on visual polish, intuitive controls, and an engaging media discovery experience.'
},


{
  id: 'error-shuvo',
  badge: '~/builds/error-shuvo',
  category: 'CREATIVE DEVELOPER PORTFOLIO',
  title: 'Error Shuvo',
  description: 'A world-class motivational portfolio featuring immersive 3D visuals, cinematic animations, and a stunning interactive experience.',
  stack: 'React / Tailwind CSS / Framer Motion / Three.js',
  liveUrl: 'https://error-shuvo.vercel.appL',
  githubUrl: 'https://github.com/Sifathossensuvo/error-shuvo',
  mockupType: 'error-shuvo',
  fullDetails: 'Error Shuvo is a visually immersive personal portfolio designed to inspire through bold creative direction, stunning 3D visuals, and cinematic motion. Built with React, Tailwind CSS, Framer Motion, Three.js, and additional technologies, it combines motivational storytelling with an engaging, premium interactive experience.'
},

{
  id: 'novaluna-sh',
  badge: '~/builds/novaluna-sh',
  category: 'DIGITAL AGENCY WEBSITE',
  title: 'Novaluna',
  description: 'A modern digital agency website built to showcase creative services, premium design, and an engaging brand experience.',
  stack: 'React / Tailwind CSS / Framer Motion',
  liveUrl: 'https://novaluna-sh.vercel.app/',
  githubUrl: 'https://github.com/Sifathossensuvo/novaluna-sh',
  mockupType: 'novaluna-sh',
  fullDetails: 'Novaluna is a digital agency website designed to present a creative brand through polished visuals, modern layouts, and smooth animations. Built with React, Tailwind CSS, Framer Motion, and additional web technologies, it focuses on premium presentation, engaging interactions, and a cohesive digital agency experience.'
},

{
  id: 'codespace',
  badge: '~/builds/codespace',
  category: 'DEVELOPER SOCIAL PLATFORM',
  title: 'CodeSpace',
  description: 'An all-in-one developer platform to showcase portfolios, organize code projects, customize profiles, and connect with other developers.',
  stack: 'React / Tailwind CSS / Node.js / Express.js',
  liveUrl: 'https://codespace-1-6xev.onrender.com/',
  githubUrl: 'https://github.com/Sifathossensuvo/codespace',
  mockupType: 'codespace',
  fullDetails: 'CodeSpace is a full-stack developer community platform that combines code project organization, customizable developer profiles, portfolio building, and social networking. Built with React, Tailwind CSS, Node.js, Express.js, and additional technologies, it allows developers to showcase their work, explore other profiles, and follow fellow creators in one place.'
},

{
  id: 'elecar-homepage',
  badge: '~/builds/elecar-homepage',
  category: 'ELECTRIC VEHICLE SHOWCASE',
  title: 'ELECAR',
  description: 'A futuristic electric car showcase featuring interactive vehicle carousels, brand filtering, live stats, and fluid animations.',
  stack: 'React / Tailwind CSS / Framer Motion / Vite',
  liveUrl: 'https://elecar-homepage.vercel.app/',
  githubUrl: 'https://github.com/Sifathossensuvo/elecar-homepage',
  mockupType: 'elecar-homepage',
  fullDetails: 'ELECAR is a futuristic, fully responsive electric vehicle showcase built with React, Tailwind CSS, Framer Motion, Vite, and Lucide React. It features an interactive car carousel, dynamic Tesla, Audi, and Porsche brand filtering, vehicle specifications, performance highlights, glassmorphism, neon lighting, and smooth motion effects.'
},
{
  id: 'ninja-portfolio',
  badge: '~/builds/ninja-portfolio',
  category: 'NINJA-STYLE PORTFOLIO',
  title: 'Ninja Portfolio',
  description: 'A striking red-themed ninja portfolio featuring cinematic animations, immersive visuals, and a bold creative experience.',
  stack: 'HTML / CSS / JavaScript / Animation Libraries',
  liveUrl: 'https://shuvodev.netlify.app',
  githubUrl: 'https://github.com/Sifathossensuvo/ninja-portfolio',
  mockupType: 'ninja-portfolio',
  fullDetails: 'A highly animated, ninja-inspired personal portfolio featuring a bold red visual identity, immersive interactions, and cinematic motion effects. Built with HTML, CSS, JavaScript, and additional web technologies, the project combines creative storytelling with a distinctive visual experience.'
},


    {
      id: 'nexus-proxy',
      badge: '~/builds/nexus-proxy',
      category: 'NETWORKING',
      title: 'Nexus API Gateway',
      description: 'High-throughput reverse proxy with rate limiting, JWT validation, and load balancing.',
      stack: 'Go / Redis / Docker',
      liveUrl: 'https://github.com',
      githubUrl: 'https://github.com',
      mockupType: 'terminal',
      fullDetails: 'Handles over 100k requests/sec with minimal memory footprint. Features dynamic upstream routing, circuit breaking, and Prometheus telemetry built-in.'
    },
    {
      id: 'quantum-auth',
      badge: '~/builds/quantum-auth',
      category: 'SECURITY',
      title: 'QuantumAuth',
      description: 'Passwordless cryptographic authentication flow using WebAuthn and passkeys.',
      stack: 'TypeScript / WebCrypto / Node.js',
      liveUrl: 'https://github.com',
      githubUrl: 'https://github.com',
      mockupType: 'ai',
      fullDetails: 'Secure biometric authentication wrapper providing frictionless login experiences across mobile and desktop browsers without storing server-side password hashes.'
    },
    {
      id: 'orbit-cms',
      badge: '~/builds/orbit-cms',
      category: 'CONTENT MANAGEMENT',
      title: 'Orbit Headless CMS',
      description: 'Blazing fast content repository with GraphQL API and real-time collaboration.',
      stack: 'Next.js / PostgreSQL / Prisma',
      liveUrl: 'https://github.com',
      githubUrl: 'https://github.com',
      mockupType: 'commerce',
      fullDetails: 'Designed for editorial speed with version-controlled content blocks, asset optimization pipelines, and role-based access control workflows.'
    },
    {
      id: 'vector-search',
      badge: '~/builds/vector-search',
      category: 'DATA SCIENCE',
      title: 'VectorEngine',
      description: 'Embedding similarity search engine for semantic document retrieval.',
      stack: 'Python / NumPy / FastAPI',
      liveUrl: 'https://github.com',
      githubUrl: 'https://github.com',
      mockupType: 'database',
      fullDetails: 'Optimized vector similarity index capable of querying millions of high-dimensional embeddings with sub-10ms latency.'
    },
    {
      id: 'pulse-monitor',
      badge: '~/builds/pulse-monitor',
      category: 'DEV_OPS',
      title: 'Pulse Uptime',
      description: 'Distributed server health checker with automated Discord/Telegram alerts.',
      stack: 'Node.js / SQLite / Tailwind',
      liveUrl: 'https://github.com',
      githubUrl: 'https://github.com',
      mockupType: 'terminal',
      fullDetails: 'Lightweight monitoring agent that pings endpoint health across multiple geographic regions and logs response latency trends.'
    },
    {
      id: 'stream-hub',
      badge: '~/builds/stream-hub',
      category: 'MEDIA & STREAMING',
      title: 'StreamHub',
      description: 'WebRTC based peer-to-peer live broadcasting and chat platform.',
      stack: 'WebRTC / Socket.io / React',
      liveUrl: 'https://github.com',
      githubUrl: 'https://github.com',
      mockupType: 'canvas',
      fullDetails: 'Low-latency video streaming architecture designed for interactive workshops, virtual classrooms, and community hangouts.'
    },
    {
      id: 'frost-ui',
      badge: '~/builds/frost-ui',
      category: 'DESIGN SYSTEM',
      title: 'Frost Design System',
      description: 'Accessible dark-mode component library built with Tailwind and Radix primitives.',
      stack: 'React / Tailwind / Radix UI',
      liveUrl: 'https://github.com',
      githubUrl: 'https://github.com',
      mockupType: 'ai',
      fullDetails: 'Fully WCAG AA compliant component suite optimized for developer productivity, custom theming, and keyboard navigation.'
    },
    {
      id: 'apex-metrics',
      badge: '~/builds/apex-metrics',
      category: 'ANALYTICS',
      title: 'Apex Metrics',
      description: 'Privacy-first web analytics platform without cookies or intrusive trackers.',
      stack: 'Go / ClickHouse / Vue.js',
      liveUrl: 'https://github.com',
      githubUrl: 'https://github.com',
      mockupType: 'database',
      fullDetails: 'Aggregates page views and user flows anonymously while maintaining absolute compliance with GDPR and CCPA privacy standards.'
    }
  ];

  // Pagination state: display 12 items initially, load 12 more on click
  const [visibleCount, setVisibleCount] = useState(12);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 12, masterProjects.length));
  };

  const displayedProjects = masterProjects.slice(0, visibleCount);
  const hasMore = visibleCount < masterProjects.length;

  return (
    <div className="w-full py-12 relative">
      {/* Top Back To Home Navigation Button */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mb-8"
      >
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 font-mono text-xs text-[#00FF88] hover:text-[#00e078] transition-all group"
        >
          <FiArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span className="tracking-[0.15em] font-semibold">[ BACK TO HOME ]</span>
        </Link>
      </motion.div>

      {/* Page Header Badge */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
        className="font-mono text-xs text-[#00FF88] tracking-[0.18em] mb-4 flex items-center gap-2"
      >
        <span>[ ARCHIVE / ALL PROJECTS ]</span>
      </motion.div>

      {/* Main Title */}
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
        className="text-3xl sm:text-4xl lg:text-[48px] font-semibold text-[#E8F3EC] tracking-tight mb-3"
      >
        Complete build archive.
      </motion.h1>

      {/* Subtitle */}
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        className="text-[#9CA3AF] text-base mb-16 max-w-2xl leading-[1.6]"
      >
        A comprehensive list of all production systems, open-source contributions, developer tools, and experimental interfaces I've engineered. Click any card to inspect details.
      </motion.p>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {displayedProjects.map((project, idx) => {
          const ProjectCard = () => {
            const cardRef = useRef(null);
            const mouseX = useMotionValue(0);
            const mouseY = useMotionValue(0);

            const smoothX = useSpring(mouseX, { stiffness: 160, damping: 24 });
            const smoothY = useSpring(mouseY, { stiffness: 160, damping: 24 });

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
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: (idx % 12) * 0.05, ease: "easeOut" }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                onClick={() => setSelectedProject(project)}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="bg-[#0F1713] border border-[#294535] rounded-[6px] p-[24px] flex flex-col justify-between hover:border-[#00FF88]/40 hover:shadow-[0_0_30px_rgba(0,255,136,0.08)] transition-all group relative overflow-hidden cursor-pointer"
              >
                {/* Mouse-following Radial Light Glow */}
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
                    <div className="w-full h-[162px] bg-[#17261E] rounded-[3px] p-4 mb-[14px] relative overflow-hidden flex flex-col items-center justify-center">
                      <span className="text-[12px] text-[#00FF88] tracking-[-0.24px] mb-[12px] font-normal">
                        {project.badge}
                      </span>



{project.mockupType === 'code-ninja-ai' && (
  <div className="w-full font-mono text-[10px] text-[#00FF88] text-center space-y-2">
    <div className="font-semibold tracking-wider">
      AI / CODE
    </div>

    <div className="text-[#9CA3AF]">
      prompt → generate → build
    </div>

    <div className="inline-block px-3 py-1 bg-[#00FF88]/10 border border-[#00FF88]/30 text-[#00FF88] rounded font-bold tracking-wider">
      [ ONLINE ]
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

{project.mockupType === 'code-ninja-player' && (
  <div className="w-full font-mono text-[10px] text-center space-y-2">
    <div className="text-[#E8F3EC] font-semibold tracking-wider">
      NINJA / PLAYER
    </div>

    <div className="text-[#9CA3AF]">
      movies → music → explore
    </div>

    <div className="inline-block px-3 py-1 bg-[#00FF88]/10 border border-[#00FF88]/30 text-[#00FF88] rounded font-bold tracking-wider">
      [ NOW PLAYING ]
    </div>
  </div>
)}


{project.mockupType === 'error-shuvo' && (
  <div className="w-full font-mono text-[10px] text-center space-y-2">
    <div className="text-[#E8F3EC] font-semibold tracking-wider">
      ERROR / SHUVO
    </div>

    <div className="text-[#9CA3AF]">
      imagine → create → inspire
    </div>

    <div className="inline-block px-3 py-1 bg-[#00FF88]/10 border border-[#00FF88]/30 text-[#00FF88] rounded font-bold tracking-wider">
      [ EXPLORE ]
    </div>
  </div>
)}

{project.mockupType === 'novaluna-sh' && (
  <div className="w-full font-mono text-[10px] text-center space-y-2">
    <div className="text-[#E8F3EC] font-semibold tracking-wider">NOVALUNA / STUDIO</div>
    <div className="text-[#9CA3AF]">strategy → design → digital</div>
    <div className="inline-block px-3 py-1 bg-[#00FF88]/10 border border-[#00FF88]/30 text-[#00FF88] rounded font-bold tracking-wider">[ OUR SERVICES ]</div>
  </div>
)}

{project.mockupType === 'codespace' && (
  <div className="w-full font-mono text-[10px] text-center space-y-2">
    <div className="text-[#E8F3EC] font-semibold tracking-wider">CODESPACE / DEV</div>
    <div className="text-[#9CA3AF]">code → showcase → connect</div>
    <div className="inline-block px-3 py-1 bg-[#00FF88]/10 border border-[#00FF88]/30 text-[#00FF88] rounded font-bold tracking-wider">[ EXPLORE DEVELOPERS ]</div>
  </div>
)}

{project.mockupType === 'elecar-homepage' && (
  <div className="w-full font-mono text-[10px] text-center space-y-2">
    <div className="text-[#E8F3EC] font-semibold tracking-wider">ELECAR / EV</div>
    <div className="text-[#9CA3AF]">electric → performance → future</div>
    <div className="inline-block px-3 py-1 bg-[#00FF88]/10 border border-[#00FF88]/30 text-[#00FF88] rounded font-bold tracking-wider">[ EXPLORE CARS ]</div>
  </div>
)}


{project.mockupType === 'ninja-portfolio' && (
  <div className="w-full font-mono text-[10px] text-center space-y-2">
    <div className="text-[#E8F3EC] font-semibold tracking-wider">NINJA / SHUVO</div>
    <div className="text-[#9CA3AF]">focus → evolve → conquer</div>
    <div className="inline-block px-3 py-1 bg-[#00FF88]/10 border border-[#00FF88]/30 text-[#00FF88] rounded font-bold tracking-wider">[ ENTER THE SHADOW ]</div>
  </div>
)}


                      {project.mockupType === 'database' && (
                        <div className="w-full font-mono text-[10px] text-[#00FF88] text-center space-y-1">
                          <div>[ ETHER_DB : ACTIVE ]</div>
                          <div className="text-[#9CA3AF] text-[9px]">latency: 0.4ms (edge)</div>
                        </div>
                      )}
                    </div>

                    {/* Category */}
                    <div className="font-normal text-[12px] text-[#00FF88] tracking-[0.11em] mb-[15px]">
                      {project.category}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-semibold text-[#E8F3EC] group-hover:text-[#00FF88] transition-colors mb-[15px]">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[#9CA3AF] text-sm leading-[1.6] mb-[15px]">
                      {project.description}
                    </p>
                  </div>

                  {/* Bottom Stack & Action Buttons (stopPropagation ensures clicking buttons doesn't trigger modal) */}
                  <div>
                    <div className="text-[12px] text-[#9BAFA2] tracking-wider mb-[15px] font-normal">
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

      {/* Load More Button */}
      {hasMore && (
        <div className="flex justify-center mb-20">
          <button
            onClick={handleLoadMore}
            className="bg-[#0F1713] border border-[#294535] text-[#00FF88] font-mono text-xs tracking-[0.18em] py-3.5 px-8 rounded-lg hover:bg-[#17261E] hover:border-[#00FF88]/50 transition-all shadow-[0_0_20px_rgba(0,255,136,0.05)] cursor-pointer"
          >
            [ LOAD MORE PROJECTS ({masterProjects.length - visibleCount} REMAINING) ]
          </button>
        </div>
      )}

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
    </div>
  );
}
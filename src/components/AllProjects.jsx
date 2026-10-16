import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FiArrowUpRight, FiArrowLeft, FiX, FiLayers, FiCpu, FiCheckCircle } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export default function AllProjects() {
  // Extended dummy project pool to demonstrate Load More functionality (total 18 items)
  const masterProjects = [

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
  id: 'code-ninja-ai',
  badge: '~/builds/code-ninja-ai',
  category: 'AI CODING AGENT',
  title: 'Code Ninja Ai',
  description: 'A next-generation AI coding agent wrapped in an immersive hacker console, built for intelligent coding assistance and developer workflows.',
  stack: 'TypeScript / React / Supabase / AI APIs',
  liveUrl: 'https://code-ninja-ai.vercel.app',
  githubUrl: 'https://github.com/Sifathossensuvo/code-ninja-ai',
  mockupType: 'code-ninja-ai',
  fullDetails: 'CODE NINJA AI is a hacker-console-inspired AI coding agent designed to deliver a powerful developer experience. Combining a terminal aesthetic, intelligent AI assistance, and a modern TypeScript-based architecture with Supabase integration, it brings coding workflows into a futuristic, developer-focused environment.'
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
  id: 'careerhub-bd',
  badge: '~/builds/careerhub',
  category: 'FULL-STACK JOB PORTAL',
  title: 'CareerHub BD',
  description: 'A full-stack recruitment platform connecting job seekers and companies through job postings, online applications, and personalized profiles.',
  stack: 'React / Node.js / Express.js / MongoDB',
  liveUrl: 'https://careerhub-shuvo.onrender.com',
  githubUrl: 'https://github.com/Sifathossensuvo/careerhub',
  mockupType: 'careerhub-bd',
  fullDetails: 'CareerHub BD is a full-stack job portal designed to connect job seekers with employers in one platform. Built with React, Node.js, Express.js, MongoDB, and additional technologies, it enables users to create profiles, explore job opportunities, publish job listings, and apply for positions. The platform brings job discovery and recruitment workflows together in a single experience.'
},
{
  id: 'devhub',
  badge: '~/builds/devhub',
  category: 'DEVELOPER RESOURCE PLATFORM',
  title: 'DevHub',
  description: 'An all-in-one developer platform offering error solutions, articles, roadmaps, cheat sheets, code snippets, and curated learning resources.',
  stack: 'React / Node.js / Express.js / Tailwind CSS',
  liveUrl: 'https://dev-hub-shuvo.netlify.app/',
  githubUrl: 'https://github.com/Sifathossensuvo/DevUndifind',
  mockupType: 'devhub',
  fullDetails: 'DevHub is a developer-focused resource platform built to make programming easier and more accessible. Developed with React, Node.js, Express.js, Tailwind CSS, and additional technologies, it brings together error-solving resources, technical articles, learning roadmaps, cheat sheets, reusable code snippets, and useful developer tools in one clean interface.'
},
{
  id: 'movie-explorer',
  badge: '~/builds/movie-explorer',
  category: 'ANIMATED MOVIE DISCOVERY',
  title: 'Movie Explorer',
  description: 'An anime-inspired movie discovery experience with a stunning interface, smooth animations, movie search, and detailed movie information.',
  stack: 'React / Tailwind CSS / TVMaze API',
  liveUrl: 'https://movie-explorer-eta-orpin.vercel.app/',
  githubUrl: 'https://github.com/Sifathossensuvo/movie-explorer',
  mockupType: 'movie-explorer',
  fullDetails: 'Movie Explorer is a visually engaging movie discovery application featuring an anime-inspired design, beautiful animations, and a responsive interface. Built with React, Tailwind CSS, and the TVMaze API, it allows users to search for movies and shows, explore available titles, and view detailed information through an immersive browsing experience.'
},
{
  id: 'legendary-shuvo',
  badge: '~/builds/legendary-shuvo',
  category: 'ANIME-INSPIRED CREATIVE PORTFOLIO',
  title: 'Legendary Shuvo',
  description: 'An anime-inspired personal portfolio featuring cinematic animations, immersive visuals, and a bold, world-class creative experience.',
  stack: 'React / Tailwind CSS / Animation Libraries',
  liveUrl: 'https://shuvo-on-top.vercel.app/',
  githubUrl: 'https://github.com/Sifathossensuvo/legendary-portfolio',
  mockupType: 'legendary-shuvo',
  fullDetails: 'Legendary Shuvo is an anime-inspired personal portfolio built around bold visual storytelling, immersive animations, and a distinctive creative identity. Developed with React, Tailwind CSS, animation libraries, and additional web technologies, it focuses on cinematic transitions, engaging interactions, and a polished, memorable user experience.'
},
{
  id: 'shuvo-meet',
  badge: '~/builds/shuvo-meet',
  category: 'REAL-TIME MEETING PLATFORM',
  title: 'Shuvo Meet',
  description: 'A modern video meeting platform featuring real-time communication, screen sharing, and a seamless, user-friendly meeting experience.',
  stack: 'React / Node.js / Express.js / WebRTC',
  liveUrl: 'https://shuvo-meet.vercel.app/',
  githubUrl: 'https://github.com/Sifathossensuvo/shuvo-meet',
  mockupType: 'shuvo-meet',
  fullDetails: 'Shuvo Meet is a full-stack meeting platform designed to deliver a smooth and engaging online communication experience. Built with React, Node.js, Express.js, WebRTC, and additional technologies, it supports real-time meetings and screen sharing through a modern, user-focused interface.'
},
   {
  id: 'zeryxa-team',
  badge: '~/builds/zeryxa-team',
  category: 'DIGITAL AGENCY PORTFOLIO',
  title: 'Zeryxa Team',
  description: 'A modern demo website for a digital agency, featuring polished visuals, responsive layouts, and engaging animations.',
  stack: 'React / Tailwind CSS / Node.js',
  liveUrl: 'https://zeryxateam.netlify.app/',
  githubUrl: 'https://github.com/Sifathossensuvo/zeryxa-team-portfolio',
  mockupType: 'zeryxa-team',
  fullDetails: 'Zeryxa Team is a demo digital agency portfolio created to showcase a modern agency brand through polished UI design, responsive layouts, and engaging visual interactions. Built with React, Tailwind CSS, Node.js, and additional technologies, the project also incorporates AI tools into the development workflow to support the creative and implementation process.'
},

{
  id: 'mr-shuvo-portfolio',
  badge: '~/builds/mr-shuvo-portfolio',
  category: 'PERSONAL PORTFOLIO',
  title: 'Mr. Shuvo',
  description: 'An early personal portfolio project featuring beautiful animations, smooth transitions, and a visually engaging design.',
  stack: 'React / Tailwind CSS / Framer Motion',
  liveUrl: 'https://mrshuvo.netlify.app/',
  githubUrl: 'https://github.com/Sifathossensuvo',
  mockupType: 'mr-shuvo-portfolio',
  fullDetails: 'Mr. Shuvo is an earlier personal portfolio website created as a practice project to explore modern frontend development and animation. Built with React, Tailwind CSS, and Framer Motion, it focuses on visually engaging layouts, smooth transitions, and interactive motion effects.'
},
{
  id: 'sh-homepage',
  badge: '~/builds/sh-homepage',
  category: 'CUSTOM BROWSER HOMEPAGE',
  title: 'SH Homepage',
  description: 'A personalized browser homepage with quick search, handy resources, and a convenient starting point for everyday browsing.',
  stack: 'React / Tailwind CSS / Framer Motion',
  liveUrl: 'https://shhomepage.netlify.app/',
  githubUrl: 'https://github.com/Sifathossensuvo',
  mockupType: 'sh-homepage',
  fullDetails: 'SH Homepage is a custom browser homepage designed to make everyday browsing more convenient. It provides quick search access and useful resources in one place, helping users get started quickly. Users can also set it as their browser homepage or startup page for a more personalized browsing experience.'
},

{
  id: 'shn-shuvo',
  badge: '~/builds/shn-shuvo',
  category: 'PERSONAL PORTFOLIO',
  title: 'Simple Portfolio',
  description: 'A simple personal portfolio created for practice, featuring animated elements, a clean layout, and a smooth browsing experience.',
  stack: 'HTML5 / CSS3 / JavaScript',
  liveUrl: 'https://shn-shuvo.netlify.app/',
  githubUrl: 'https://github.com/Sifathossensuvo/',
  mockupType: 'shn-shuvo',
  fullDetails: 'SHN Shuvo is a personal portfolio website created as a practice project while exploring web development. Built with HTML, CSS, and JavaScript, it combines a simple layout with animated elements and interactive details. The project represents an early step in developing frontend skills and experimenting with motion and personal website design.'
},

{
  id: 'select-xi',
  badge: '~/builds/select-xi',
  category: 'CRICKET TEAM MANAGEMENT',
  title: 'Select XI',
  description: 'An interactive cricket team management app where users can earn coins, hire cricket players, manage their squad, and remove players.',
  stack: 'React / Tailwind CSS / API Integration',
  liveUrl: 'https://coherent-children.surge.sh/',
  githubUrl: 'https://github.com/Sifathossensuvo/select-xi',
  mockupType: 'select-xi',
  fullDetails: 'Select XI is a cricket team management practice project built with React, Tailwind CSS, and API integration. Users can explore available cricket players, manage their coin balance, hire players, build a squad, and remove players as needed. The project helped develop practical skills in interactive UI design, state management, and working with API data.'
},

{
  id: 'assignment-one',
  badge: '~/builds/assignment-one',
  category: 'FIRST WEB DEVELOPMENT PROJECT',
  title: 'My First Website',
  description: 'A motivational website built with HTML and CSS that marks the beginning of my web development journey.',
  stack: 'HTML5 / CSS3',
  liveUrl: 'https://sifathossensuvo.github.io/assignment-one/',
  githubUrl: 'https://github.com/Sifathossensuvo/assignment-one',
  mockupType: 'assignment-one',
  fullDetails: 'My First Website is a motivational project created during my web development course. Built with HTML and CSS, it represents the starting point of my journey as a developer. More than a simple practice project, it reflects the curiosity, determination, and first steps that began my path toward building larger and more ambitious web experiences.'
},

{
  id: 'book-vibe',
  badge: '~/builds/book-vibe',
  category: 'BOOK DISCOVERY PLATFORM',
  title: 'Book Vibe',
  description: 'A responsive book discovery platform where readers can explore books, view details, manage reading lists, and save wishlist favorites.',
  stack: 'React / Tailwind CSS / React Router',
  liveUrl: 'https://book-vibe-poka.netlify.app/',
  githubUrl: 'https://github.com/Sifathossensuvo/book-vibe',
  mockupType: 'book-vibe',
  fullDetails: 'Book Vibe is a responsive book discovery application built with React, Tailwind CSS, and React Router. Users can browse a collection of books, explore detailed book information, add titles to their Read List or Wishlist, and avoid duplicate entries. It also features React Toastify notifications and Local Storage persistence to keep saved book data available between visits.'
},

{
  id: 'rinterio',
  badge: '~/builds/rinterio',
  category: 'ARCHITECTURE & INTERIOR DESIGN',
  title: 'Rinterio',
  description: 'A modern architecture website showcasing elegant design concepts, architectural projects, and contemporary living spaces.',
  stack: 'HTML5 / Tailwind CSS',
  liveUrl: 'https://resilient-cannoli-1ac0c0.netlify.app/',
  githubUrl: 'https://github.com/Sifathossensuvo/assignment-three',
  mockupType: 'rinterio',
  fullDetails: 'Rinterio is an architecture-focused website designed to present contemporary architectural concepts and stylish living spaces through a clean, modern layout. Built with HTML and Tailwind CSS, the project emphasizes visual presentation, responsive design, and an elegant user experience.'
},

{
  id: 'expense-tracker',
  badge: '~/builds/expense-tracker',
  category: 'PERSONAL FINANCE DASHBOARD',
  title: 'Expense Tracker',
  description: 'A personal finance management tool for tracking expenses, organizing financial records, and visualizing spending through interactive charts.',
  stack: 'HTML5 / CSS3 / JavaScript',
  liveUrl: 'https://et-1.netlify.app/',
  githubUrl: 'https://github.com/Sifathossensuvo/expense-tracker',
  mockupType: 'expense-tracker',
  fullDetails: 'Expense Tracker is a personal finance application built with HTML, CSS, and JavaScript. It helps users manage expenses, organize financial records, review spending patterns, and understand their finances through charts, diagrams, and visual summaries. The project focuses on making everyday expense tracking and financial overview simple and accessible.'
},

{
  id: 'renu-pet-care',
  badge: '~/builds/renu-pet-care',
  category: 'PET CARE WEBSITE',
  title: 'Renu',
  description: 'A friendly pet care website featuring a clean interface and a welcoming experience for pet lovers.',
  stack: 'HTML5 / Tailwind CSS / JavaScript',
  liveUrl: 'https://renu-sh.netlify.app/',
  githubUrl: 'https://github.com/Sifathossensuvo/',
  mockupType: 'renu-pet-care',
  fullDetails: 'Renu is a pet care website designed to provide a welcoming online experience for pet lovers. Built with HTML, Tailwind CSS, and JavaScript, it focuses on clean layouts, responsive design, and an approachable interface for presenting pet care-related content and services.'
},

{
  id: 'knowledge-cafe',
  badge: '~/builds/knowledge-cafe',
  category: 'ARTICLE & READING PLATFORM',
  title: 'Knowledge Cafe',
  description:
    'A practice project for discovering and reading articles, with a bookmark feature to save articles for later.',
  stack: ['React', 'React Router', 'API Fetch'],
  liveUrl: 'https://kcafe1.netlify.app/',
  githubUrl: '',
  mockupType: 'knowledge-cafe',
  fullDetails:
    'A simple article-reading website built for practice using React, React Router, and API fetching. Users can read articles and bookmark their favorites for later.',
},


{
  id: 'ultra-phone',
  badge: '~/builds/ultra-phone',
  category: 'ANIMATED PHONE SHOWCASE',
  title: 'Ultra Phone',
  description:
    'An animated phone showcase website where users can explore smartphones and add their favorite devices to the cart.',
  stack: ['HTML5', 'Tailwind CSS', 'JavaScript'],
  liveUrl: 'https://ultra-phone.netlify.app/',
  githubUrl: '',
  mockupType: 'ultra-phone',
  fullDetails:
    'A practice project focused on animated UI and interactive shopping experiences. Users can explore phone products and add items to their cart, built with HTML, Tailwind CSS, and JavaScript.',
},


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
          <FiArrowLeft className="w-3 h-3 transition-transform group-hover:-translate-x-1" />
          <span className="tracking-[0.15em] font-semibold">BACK TO HOME</span>
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

{project.mockupType === 'careerhub-bd' && (
  <div className="w-full font-mono text-[10px] text-center space-y-2">
    <div className="text-[#E8F3EC] font-semibold tracking-wider">CAREERHUB / BD</div>
    <div className="text-[#9CA3AF]">discover → apply → grow</div>
    <div className="inline-block px-3 py-1 bg-[#00FF88]/10 border border-[#00FF88]/30 text-[#00FF88] rounded font-bold tracking-wider">[ FIND OPPORTUNITIES ]</div>
  </div>
)}

{project.mockupType === 'devhub' && (
  <div className="w-full font-mono text-[10px] text-center space-y-2">
    <div className="text-[#E8F3EC] font-semibold tracking-wider">DEVHUB / RESOURCES</div>
    <div className="text-[#9CA3AF]">debug → learn → build</div>
    <div className="inline-block px-3 py-1 bg-[#00FF88]/10 border border-[#00FF88]/30 text-[#00FF88] rounded font-bold tracking-wider">[ SOLVE & GROW ]</div>
  </div>
)}

{project.mockupType === 'movie-explorer' && (
  <div className="w-full font-mono text-[10px] text-center space-y-2">
    <div className="text-[#E8F3EC] font-semibold tracking-wider">MOVIE / EXPLORER</div>
    <div className="text-[#9CA3AF]">search → discover → explore</div>
    <div className="inline-block px-3 py-1 bg-[#00FF88]/10 border border-[#00FF88]/30 text-[#00FF88] rounded font-bold tracking-wider">[ START EXPLORING ]</div>
  </div>
)}

{project.mockupType === 'legendary-shuvo' && (
  <div className="w-full font-mono text-[10px] text-center space-y-2">
    <div className="text-[#E8F3EC] font-semibold tracking-wider">LEGENDARY / SHUVO</div>
    <div className="text-[#9CA3AF]">dream → evolve → become legendary</div>
    <div className="inline-block px-3 py-1 bg-[#00FF88]/10 border border-[#00FF88]/30 text-[#00FF88] rounded font-bold tracking-wider">[ ENTER THE WORLD ]</div>
  </div>
)}

{project.mockupType === 'shuvo-meet' && (
  <div className="w-full font-mono text-[10px] text-center space-y-2">
    <div className="text-[#E8F3EC] font-semibold tracking-wider">SHUVO / MEET</div>
    <div className="text-[#9CA3AF]">connect → collaborate → share</div>
    <div className="inline-block px-3 py-1 bg-[#00FF88]/10 border border-[#00FF88]/30 text-[#00FF88] rounded font-bold tracking-wider">[ JOIN MEETING ]</div>
  </div>
)}

{project.mockupType === 'zeryxa-team' && (
  <div className="w-full font-mono text-[10px] text-center space-y-2">
    <div className="text-[#E8F3EC] font-semibold tracking-wider">ZERYXA / STUDIO</div>
    <div className="text-[#9CA3AF]">design → develop → deliver</div>
    <div className="inline-block px-3 py-1 bg-[#00FF88]/10 border border-[#00FF88]/30 text-[#00FF88] rounded font-bold tracking-wider">[ EXPLORE AGENCY ]</div>
  </div>
)}

{project.mockupType === 'mr-shuvo-portfolio' && (
  <div className="w-full font-mono text-[10px] text-center space-y-2">
    <div className="text-[#E8F3EC] font-semibold tracking-wider">MR / SHUVO</div>
    <div className="text-[#9CA3AF]">explore → create → evolve</div>
    <div className="inline-block px-3 py-1 bg-[#00FF88]/10 border border-[#00FF88]/30 text-[#00FF88] rounded font-bold tracking-wider">[ VIEW PORTFOLIO ]</div>
  </div>
)}

{project.mockupType === 'sh-homepage' && (
  <div className="w-full font-mono text-[10px] text-center space-y-2">
    <div className="text-[#E8F3EC] font-semibold tracking-wider">SH / HOMEPAGE</div>
    <div className="text-[#9CA3AF]">search → discover → access</div>
    <div className="inline-block px-3 py-1 bg-[#00FF88]/10 border border-[#00FF88]/30 text-[#00FF88] rounded font-bold tracking-wider">[ QUICK ACCESS ]</div>
  </div>
)}

{project.mockupType === 'select-xi' && (
  <div className="w-full font-mono text-[10px] text-center space-y-2">
    <div className="text-[#E8F3EC] font-semibold tracking-wider">SELECT / XI</div>
    <div className="text-[#9CA3AF]">earn coins → hire → build squad</div>
    <div className="inline-block px-3 py-1 bg-[#00FF88]/10 border border-[#00FF88]/30 text-[#00FF88] rounded font-bold tracking-wider">[ MANAGE TEAM ]</div>
  </div>
)}

{project.mockupType === 'assignment-one' && (
  <div className="w-full font-mono text-[10px] text-center space-y-2">
    <div className="text-[#E8F3EC] font-semibold tracking-wider">THE BEGINNING / 01</div>
    <div className="text-[#9CA3AF]">learn → build → grow</div>
    <div className="inline-block px-3 py-1 bg-[#00FF88]/10 border border-[#00FF88]/30 text-[#00FF88] rounded font-bold tracking-wider">[ JOURNEY STARTED ]</div>
  </div>
)}

{project.mockupType === 'book-vibe' && (
  <div className="w-full font-mono text-[10px] text-center space-y-2">
    <div className="text-[#E8F3EC] font-semibold tracking-wider">BOOK / VIBE</div>
    <div className="text-[#9CA3AF]">discover → read → wishlist</div>
    <div className="inline-block px-3 py-1 bg-[#00FF88]/10 border border-[#00FF88]/30 text-[#00FF88] rounded font-bold tracking-wider">[ EXPLORE BOOKS ]</div>
  </div>
)}

{project.mockupType === 'rinterio' && (
  <div className="w-full font-mono text-[10px] text-center space-y-2">
    <div className="text-[#E8F3EC] font-semibold tracking-wider">RINTERIO / DESIGN</div>
    <div className="text-[#9CA3AF]">space → structure → style</div>
    <div className="inline-block px-3 py-1 bg-[#00FF88]/10 border border-[#00FF88]/30 text-[#00FF88] rounded font-bold tracking-wider">[ EXPLORE DESIGNS ]</div>
  </div>
)}

{project.mockupType === 'murmur-messenger' && (
  <div className="w-full font-mono text-[10px] text-center space-y-2">
    <div className="text-[#E8F3EC] font-semibold tracking-wider">MURMUR / CHAT</div>
    <div className="text-[#9CA3AF]">connect → message → share</div>
    <div className="inline-block px-3 py-1 bg-[#00FF88]/10 border border-[#00FF88]/30 text-[#00FF88] rounded font-bold tracking-wider">[ LIVE / CONNECTED ]</div>
  </div>
)}

{project.mockupType === 'expense-tracker' && (
  <div className="w-full font-mono text-[10px] text-center space-y-2">
    <div className="text-[#E8F3EC] font-semibold tracking-wider">EXPENSE / TRACKER</div>
    <div className="text-[#9CA3AF]">track → analyze → manage</div>
    <div className="inline-block px-3 py-1 bg-[#00FF88]/10 border border-[#00FF88]/30 text-[#00FF88] rounded font-bold tracking-wider">[ FINANCES / OVERVIEW ]</div>
  </div>
)}

{project.mockupType === 'shn-shuvo' && (
  <div className="w-full font-mono text-[10px] text-center space-y-2">
    <div className="text-[#E8F3EC] font-semibold tracking-wider">SHN / SHUVO</div>
    <div className="text-[#9CA3AF]">learn → animate → create</div>
    <div className="inline-block px-3 py-1 bg-[#00FF88]/10 border border-[#00FF88]/30 text-[#00FF88] rounded font-bold tracking-wider">[ VIEW PORTFOLIO ]</div>
  </div>
)}

{project.mockupType === 'renu-pet-care' && (
  <div className="w-full font-mono text-[10px] text-center space-y-2">
    <div className="text-[#E8F3EC] font-semibold tracking-wider">RENU / PET CARE</div>
    <div className="text-[#9CA3AF]">care → comfort → happiness</div>
    <div className="inline-block px-3 py-1 bg-[#00FF88]/10 border border-[#00FF88]/30 text-[#00FF88] rounded font-bold tracking-wider">[ HAPPY PAWS ]</div>
  </div>
)}

{project.mockupType === 'knowledge-cafe' && (
  <div className="w-full font-mono text-[10px] text-center space-y-2">
    <div className="text-[#E8F3EC] font-semibold tracking-wider">
      KNOWLEDGE / CAFE
    </div>
    <div className="text-[#9CA3AF]">
      read → learn → bookmark
    </div>
    <div className="inline-block px-3 py-1 bg-[#00FF88]/10 border border-[#00FF88]/30 text-[#00FF88] rounded font-bold tracking-wider">
      [ READ & SAVE ]
    </div>
  </div>
)}


{project.mockupType === 'ultra-phone' && (
  <div className="w-full font-mono text-[10px] text-center space-y-2">
    <div className="text-[#E8F3EC] font-semibold tracking-wider">
      ULTRA / PHONE
    </div>
    <div className="text-[#9CA3AF]">
      discover → explore → add to cart
    </div>
    <div className="inline-block px-3 py-1 bg-[#00FF88]/10 border border-[#00FF88]/30 text-[#00FF88] rounded font-bold tracking-wider">
      [ SHOP DEVICES ]
    </div>
  </div>
)}


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
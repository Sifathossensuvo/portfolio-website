
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from "react-router-dom";
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative mx-auto flex w-full max-w-[1120px] items-center justify-between px-4 pt-[22px] sm:px-6 lg:px-0">
      {/* Logo */}
      <motion.a 
        href="#"
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        className="font-['Space_Grotesk'] font-medium font-[Medium] text-[23px] [leading-trim:NONE] leading-[28.75px] tracking-[-0.46px] align-middle"
      >
        <span className="text-[#00FF88]">&gt;</span> Shuvo.dev
      </motion.a>

      {/* Navigation Links */}
      <motion.nav 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="hidden md:flex items-center gap-8 font-['Space_Grotesk'] text-sm md:text-base font-medium"
      >
        <a href="#about" className="text-[#00FF88] hover:opacity-85 transition-opacity font-normal font-[Regular] text-[14px] [leading-trim:NONE] leading-[19.2px] tracking-[-0.24px]">About</a>
        <a href="#stack" className="text-[#00FF88] hover:opacity-85 transition-opacity font-normal font-[Regular] text-[14px] [leading-trim:NONE] leading-[19.2px] tracking-[-0.24px]">Stack</a>
<Link
  to="/projects"
  onClick={() => setIsMenuOpen(false)}
  className="text-[#00FF88] hover:opacity-85 transition-opacity font-normal font-[Regular] text-[14px] [leading-trim:NONE] leading-[19.2px] tracking-[-0.24px]"
>
  Projects
</Link>
        <a href="#contact" className="text-[#00FF88] hover:opacity-85 transition-opacity font-normal font-[Regular] text-[14px] [leading-trim:NONE] leading-[19.2px] tracking-[-0.24px]">Contact</a>
      </motion.nav>

      {/* Let's talk button */}
      <motion.div
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        className="hidden md:block"
      >
        
        <a
          href="#contact"
          style={{ width: '110px', height: '44px' }}
          className="bg-[#00FF88] text-[#070B09] font-['Space_Grotesk'] font-bold font-[Bold] text-[13px] [leading-trim:NONE] leading-[15.6px] tracking-[-0.26px] align-middle rounded-[4px] flex items-center justify-center gap-1 hover:opacity-90 transition-opacity shadow-[0_0_15px_rgba(0,255,136,0.3)]"
        >
          Let's talk <span className="text-xs">↗</span>
        </a>
      </motion.div>

      {/* Mobile Hamburger Menu */}
      <button
        type="button"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={isMenuOpen}
        className="flex h-[44px] w-[44px] items-center justify-center rounded-[4px] border border-[#00FF88]/30 text-[#00FF88] transition-colors hover:bg-[#00FF88]/10 md:hidden"
      >
        <span className="relative flex h-[18px] w-[22px] flex-col items-center justify-between">
          <motion.span
            animate={isMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.25 }}
            className="h-[2px] w-full rounded-full bg-[#00FF88]"
          />
          <motion.span
            animate={isMenuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.2 }}
            className="h-[2px] w-full rounded-full bg-[#00FF88]"
          />
          <motion.span
            animate={isMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.25 }}
            className="h-[2px] w-full rounded-full bg-[#00FF88]"
          />
        </span>
      </button>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="absolute left-4 right-4 top-[78px] z-[9999] flex flex-col gap-5 rounded-md border border-[#00FF88]/20 bg-[#070B09] p-5 shadow-[0_0_25px_rgba(0,255,136,0.08)] sm:left-6 sm:right-6 md:hidden"
          >
            <a onClick={() => setIsMenuOpen(false)} href="#about" className="text-[#00FF88] hover:opacity-85 transition-opacity font-['Space_Grotesk'] text-[14px] tracking-[-0.24px]">About</a>
            <a onClick={() => setIsMenuOpen(false)} href="#stack" className="text-[#00FF88] hover:opacity-85 transition-opacity font-['Space_Grotesk'] text-[14px] tracking-[-0.24px]">Stack</a>
<Link
  onClick={() => setIsMenuOpen(false)}
  to="/projects"
  className="text-[#00FF88] hover:opacity-85 transition-opacity font-['Space_Grotesk'] text-[14px] tracking-[-0.24px]"
>
  Projects
</Link>
            <a onClick={() => setIsMenuOpen(false)} href="#contact" className="text-[#00FF88] hover:opacity-85 transition-opacity font-['Space_Grotesk'] text-[14px] tracking-[-0.24px]">Contact</a>

            <a
              onClick={() => setIsMenuOpen(false)}
              href="#contact"
              className="mt-1 flex h-[44px] w-full items-center justify-center gap-1 rounded-[4px] bg-[#00FF88] font-['Space_Grotesk'] text-[13px] font-bold tracking-[-0.26px] text-[#070B09] shadow-[0_0_15px_rgba(0,255,136,0.3)] transition-opacity hover:opacity-90"
            >
              Let's talk <span className="text-xs">↗</span>
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

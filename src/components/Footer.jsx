import React from 'react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="w-full mb-[35px] mx-auto  flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-[#9BAFA2]">
      {/* Left Copyright Text */}
      <div className="tracking-[0.15em] mb-4 sm:mb-0">
        © 2026 RYAN REYMER / KERNEL.DEV
      </div>

      {/* Right Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="text-[#00FF88] tracking-[0.18em] hover:underline flex items-center gap-1.5 transition-colors cursor-pointer"
      >
        <span>↑</span> BACK TO TOP
      </button>
    </footer>
  );
}
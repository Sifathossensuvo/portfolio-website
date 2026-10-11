import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Add your form submission logic here (e.g., EmailJS, Formspree, or API endpoint)
  };

  return (
    <section id="contact" className="w-full mx-auto py-[64px] relative">
      {/* Section Tag Badge */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="font-mono text-xs text-[#00FF88] tracking-[0.18em] mb-4 flex items-center gap-2"
      >
        <span>[ 08 / CONTACT ]</span>
      </motion.div>

      {/* Section Heading */}
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        className="main-heading mb-[27px]"
      >
        Your next build starts with a hello.
      </motion.h2>

      {/* Subtitle */}
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
        className="main-paragraph mb-[27px]"
      >
        Tell me what you're building, what's getting in the way, and where you want to go.
      </motion.p>

      {/* Main Grid Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        
        {/* Left Column: Info & Social Links */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col "
        >
          <div>
            <h3 className="sub-heading mb-[14px]">
              Let's find the useful next step.
            </h3>
            <p className="main-paragraph">
              Open to product collaborations, focused <br /> freelance work, and remote engineering roles.
            </p>
          </div>

          {/* Action Button & Socials */}
          <div className="flex flex-col space-y-[18px] pt-[16px]">
            <div>
              <a
                href="mailto:hello@example.com"
                className="inline-flex items-center gap-1 bg-[#00FF88] text-[#070B09] font-bold text-[13px] py-[14px] px-5 rounded-[4px] hover:bg-[#00e078] transition-all "
              >
                Send an email <FiArrowUpRight className="w-3 h-3 stroke-[2.5]" />
              </a>
            </div>

            <div className="flex flex-col space-y-[15px] pt-4 font-mono text-sm">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#00FF88] hover:underline inline-flex items-center gap-1.5 w-fit"
              >
                GitHub <FiArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#00FF88] hover:underline inline-flex items-center gap-1.5 w-fit"
              >
                LinkedIn <FiArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#00FF88] hover:underline inline-flex items-center gap-1.5 w-fit"
              >
                (F) Facebook <FiArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Contact Form Card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="bg-[#0F1713] border border-[#294535] rounded-[6px] p-6 sm:p-8 hover:border-[#00FF88]/30 transition-all relative"
        >
          {submitted ? (
            <div className="py-16 text-center flex flex-col items-center justify-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-[#00FF88]/20 border border-[#00FF88] flex items-center justify-center text-[#00FF88] text-xl font-bold">
                ✓
              </div>
              <h3 className="text-xl font-semibold text-white">Message sent successfully!</h3>
              <p className="text-[#9CA3AF] text-sm">Thanks for reaching out. I'll get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div className="space-y-[10px]">
                <label className="block font-mono text-[12px] text-[#9BAFA2] tracking-wider">
                  Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[#294535] border border-[#16291F] rounded-[4px] p-3 text-[##9BAFA2] placeholder-[#9BAFA2] text-[14px] focus:outline-none focus:border-[#00FF88] transition-colors"
                />
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <label className="block font-mono  text-[12px] text-[#9BAFA2] tracking-wider">
                  Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="you@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[#294535] border border-[#16291F] rounded-[4px] p-3 text-[#9BAFA2] placeholder-[#9BAFA2] text-[14px] focus:outline-none focus:border-[#00FF88] transition-colors"
                />
              </div>

              {/* Message Field */}
              <div className="space-y-2">
                <label className="block font-mono  text-[12px] text-[#9BAFA2] tracking-wider">
                  Message
                </label>
                <textarea
                  rows="4"
                  required
                  placeholder="What are you building?"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-[#294535] border border-[#16291F] rounded-[4px] px-4 py-3 text-[#9BAFA2] placeholder-[#9BAFA2] text-[14px] focus:outline-none focus:border-[#00FF88] transition-colors resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#00FF88] text-[#070B09] font-bold text-[13px] py-3.5 px-6 rounded-[4px] flex items-center justify-center gap-2 hover:bg-[#00e078] transition-all shadow-[0_0_20px_rgba(0,255,136,0.2)]"
              >
                Send message <FiArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </button>
            </form>
          )}
        </motion.div>

      </div>


    </section>
  );
}
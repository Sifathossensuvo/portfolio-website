import React from 'react';
import { motion } from 'framer-motion';

export default function FAQ() {
  const faqList = [
    {
      question: "What kinds of projects are a good fit?",
      answer: "Web products, SaaS interfaces, internal tools, and focused front-end or full-stack improvements."
    },
    {
      question: "Can you work with our existing team?",
      answer: "Yes. I can collaborate with designers and engineers, follow your conventions, and work through reviewable changes."
    },
    {
      question: "How do we scope the work?",
      answer: "Start with the goal, current system, timeline, and constraints. We agree on milestones and deliverables before implementation."
    },
    {
      question: "What happens after launch?",
      answer: "The handoff includes documentation and a walkthrough. Ongoing support can be scoped around your team's needs."
    }
  ];

  return (
    <section id="faq" className="w-full mx-auto mt-[64px] relative">
      {/* Section Tag Badge */}
     {/* Section Tag */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="text-[12px] text-[#00FF88] tracking-[0.18em] mb-[26px] flex items-center gap-2"
      >
        <motion.span
          animate={{ opacity: [1, 0.55, 1] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        >
          [
        </motion.span>

        <span>07 / FAQ</span>

        <motion.span
          animate={{ opacity: [1, 0.55, 1] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        >
          ]
        </motion.span>


      </motion.div>


      {/* Section Heading */}
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        className="main-heading mb-[28px]"
      >
        Before we open a new branch.
      </motion.h2>

      {/* FAQ Cards List */}
      <div className="flex flex-col gap-[28px]">
        {faqList.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
            className="bg-[#0F1713] border border-[#294535] rounded-[6px] p-[22px] sm:p-8 flex flex-col justify-between hover:border-[#00FF88]/40 transition-all group"
          >
            {/* Question */}
            <h3 className="sub-heading mb-[9px]">
              {item.question}
            </h3>

            {/* Answer */}
            <p className="main-paragraph">
              {item.answer}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Bottom Border Line */}
      <div className="w-full h-[1px] bg-[#16291F] mt-[64px]"></div>
    </section>
  );
}
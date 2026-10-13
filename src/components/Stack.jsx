import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export default function Stack() {
const stackCards = [
  {
    num: '01',
    title: 'Front-end',
    description:
      'HTML · CSS · JavaScript · React · Tailwind CSS · NextJS. Responsive UI, reusable components, and animations.'
  },
  {
    num: '02',
    title: 'Back-end',
    description:
      'Node.js · Express.js · MongoDB. REST APIs, CRUD operations, and authentication.'
  },
  {
    num: '03',
    title: 'AI Solutions',
    description:
      'AI API Integration · OpenRouter · Prompt Engineering. Building AI-powered web applications.'
  },
  {
    num: '04',
    title: 'Tools & Technologies',
    description:
      'Git · GitHub · VS Code · Postman · Figma · Vercel. Design, development, and deployment.'
  },
  {
    num: '05',
    title: 'UI/UX & Animation',
    description:
      'Figma · Framer Motion · Three.js. Interactive interfaces, smooth animations, and visual design.'
  },
  {
    num: '06',
    title: 'Engineering',
    description:
      'Clean code · Reusable components · Responsive design. Maintainable and user-focused solutions.'
  }
];

  return (
    <section id="stack" className="w-full  mx-auto  py-[64px] relative">

              <div className="w-full h-[1px] bg-[#294535] mb-[62px]"></div>

    {/* Section Tag Badge */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="font-mono text-xs text-[#00FF88] tracking-[0.18em] mb-[27px] flex items-center gap-2"
      >
        <span>[ 02 / STACK ]</span>
      </motion.div>

      {/* Section Heading */}
      <motion.h2 
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="main-heading mb-[27px]"
      >
        A focused stack. A wider perspective.
      </motion.h2>

      {/* Subtitle */}
      <motion.p 
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="main-paragraph mb-[27px]"
      >
        The right tool for the problem—across the interface, the API, and the infrastructure.
      </motion.p>

      {/* 6-Grid Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[15px]">
        {stackCards.map((card, idx) => {
          const StackCard = () => {
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
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="bg-[#0F1713] border border-[#294535] h-[210px] rounded-[6px] p-[26px] flex flex-col justify-between hover:border-[#00FF88]/40 hover:shadow-[0_0_25px_rgba(0,255,136,0.07)] transition-all group relative overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: useTransform(
                      [glowX, glowY],
                      ([x, y]) =>
                        `radial-gradient(250px circle at ${x} ${y}, rgba(0,255,136,0.09), transparent 70%)`
                    ),
                  }}
                />

                <div>
                  {/* Card Number */}
                  <div className="font-mono text-[12px] h-[19px] text-[#00FF88] tracking-widest font-normal mb-[15px]">
                    {card.num}
                  </div>

                  {/* Card Title */}
                  <h3 className="sub-heading mb-[15px] group-hover:text-[#00FF88] transition-colors">
                    {card.title}
                  </h3>

                  {/* Card Description */}
                  <p className="main-paragraph leading-[1.6]">
                    {card.description}
                  </p>
                </div>
              </motion.div>
            );
          };

          return <StackCard key={idx} />;
        })}
      </div>


    </section>
  );
}
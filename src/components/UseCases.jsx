import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export default function UseCases() {
  const useCasesList = [
    {
      num: '01',
      title: 'Your first product',
      description:
        'A focused MVP with clear user flows, a maintainable foundation, and room to learn.',
    },
    {
      num: '02',
      title: 'A faster experience',
      description:
        'Audit the bottlenecks. Improve loading, interaction, accessibility, and the parts users notice.',
    },
    {
      num: '03',
      title: 'A stronger system',
      description:
        'Reusable UI, dependable APIs, and a release pipeline your team can understand.',
    },
  ];

  return (
    <section
      id="use-cases"
      className="w-full max-w-[1120px] mx-auto mt-[65px] relative isolate"
    >
{/* Top Border Line */}
<div className="w-full h-[1px] bg-[#16291F] mb-16"></div>

      {/* Ambient background glow */}
      <div className="absolute top-[20%] left-[-100px] w-[220px] h-[220px] rounded-full bg-[#00FF88]/[0.035] blur-[100px] pointer-events-none -z-10" />

      <div className="absolute bottom-[15%] right-[-80px] w-[200px] h-[200px] rounded-full bg-[#00FF88]/[0.025] blur-[100px] pointer-events-none -z-10" />

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

        <span>05 / USE-CASES</span>

        <motion.span
          animate={{ opacity: [1, 0.55, 1] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        >
          ]
        </motion.span>


      </motion.div>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="main-heading mb-[28px]"
      >
        What can we build together?
      </motion.h2>

      {/* Use Cases */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-[64px]">
        {useCasesList.map((item, idx) => (
          <AnimatedCard key={item.num} item={item} idx={idx} />
        ))}
      </div>

{/* Bottom Border Line */}
<div className="w-full h-[1px] bg-[#16291F] "></div>
    </section>
  );
}



function AnimatedCard({ item, idx }) {
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
initial={{ opacity: 0, y: 36, scale: 0.97 }}
whileInView={{ opacity: 1, y: 0, scale: 1 }}
viewport={{ once: true, amount: 0.25 }}
transition={{
duration: 0.75,
delay: idx * 0.16,
ease: [0.22, 1, 0.36, 1],
}}
onMouseMove={handleMouseMove}
onMouseLeave={handleMouseLeave}
whileHover={{
y: -6,
transition: { duration: 0.25, ease: 'easeOut' },
}}
className="group relative h-[210px] rounded-2xl"
>
{/* Animated neon outline */} <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[#00FF88]/50 via-[#16291F] to-[#00FF88]/10" />


  {/* Card body */}
  <div className="relative h-[210px] rounded-[6px] border border-[#294535] bg-[#0F1713] p-[26px] flex flex-col justify-between overflow-hidden transition-colors duration-500 group-hover:border-[#00FF88]/40 group-hover:shadow-[0_0_35px_rgba(0,255,136,0.08)]">

    {/* Mouse-following spotlight */}
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

    {/* Subtle scanning light */}
    <motion.div
      className="absolute top-0 left-0 w-full h-px pointer-events-none bg-gradient-to-r from-transparent via-[#00FF88]/50 to-transparent opacity-0 group-hover:opacity-100"
      animate={{ x: ['-100%', '100%'] }}
      transition={{
        duration: 2.2,
        repeat: Infinity,
        ease: 'linear',
        delay: idx * 0.3,
      }}
    />

    {/* Decorative corner brackets */}
    <span className="absolute top-0 left-0 w-5 h-5 border-t border-l border-[#00FF88]/0 rounded-tl-2xl group-hover:border-[#00FF88]/60 transition-all duration-500" />

    <span className="absolute bottom-0 right-0 w-5 h-5 border-b border-r border-[#00FF88]/0 rounded-br-2xl group-hover:border-[#00FF88]/60 transition-all duration-500" />

    {/* Content */}
    <div className="relative z-10">
      {/* Static number — no spinning animation */}
      <div className=" text-[12px] text-[#00FF88] tracking-widest font-normal mb-[15px] h-5 flex items-center gap-2">
        <span>{item.num}</span>

        <span className="h-px w-0 bg-[#00FF88]/60 group-hover:w-8 transition-all duration-500" />
      </div>

      {/* Title */}
      <h3 className="sub-heading mb-[15px] transition-colors duration-300">
        {item.title}
      </h3>

      {/* Description */}
      <p className="main-paragraph group-hover:text-[#C2CCC6] transition-colors duration-300">
        {item.description}
      </p>
    </div>


  </div>
</motion.div>


);

}


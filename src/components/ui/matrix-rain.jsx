import React, { useEffect, useRef } from 'react';

export const MatrixRain = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let animationFrameId;
    let lastTime = 0;
    const fps = 10;
    const interval = 1000 / fps;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const characters = '01{}<>:/\\*#';
    const fontSize = 13;
    const columns = Math.floor(canvas.width / (fontSize * 3.5)); 
    
    const drops = Array.from({ length: columns }).fill(0).map(() => -Math.floor(Math.random() * 50));

    const draw = (currentTime) => {
      animationFrameId = requestAnimationFrame(draw);

      const delta = currentTime - lastTime;
      if (delta < interval) return;
      lastTime = currentTime - (delta % interval);

      ctx.fillStyle = 'rgba(7, 11, 9, 0.12)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Brightness halka barano holo
      ctx.fillStyle = 'rgba(0, 255, 136, 0.42)'; 
      ctx.font = `400 ${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        if (drops[i] >= 0) {
          const text = characters.charAt(Math.floor(Math.random() * characters.length));
          const x = i * fontSize * 3.5;
          const y = drops[i] * fontSize;

          ctx.fillText(text, x, y);
        }

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.92) {
          drops[i] = -Math.floor(Math.random() * 20);
        }
        drops[i]++;
      }
    };

    animationFrameId = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none opacity-30"
    />
  );
};
import { useEffect, useRef, useState } from 'react';
import './CustomCursor.css';

export default function CustomCursor() {
  const [smoke, setSmoke] = useState([]);

  const lastSmokeTime = useRef(0);
  const smokeId = useRef(0);

  useEffect(() => {
    let mounted = true;

    const handleMouseMove = (event) => {
      const now = performance.now();

      // Control smoke generation frequency
      if (now - lastSmokeTime.current < 30) return;

      lastSmokeTime.current = now;

      const id = smokeId.current++;

      const particle = {
        id,
        x: event.clientX,
        y: event.clientY,
        createdAt: now,
        driftX: Math.sin(id * 1.7) * 17,
        driftY: -10 - (id % 5) * 5,
        size: 13 + (id % 4) * 4,
      };

      setSmoke((particles) => [...particles, particle]);
    };

    const cleanupSmoke = window.setInterval(() => {
      if (!mounted) return;

      const now = performance.now();

      setSmoke((particles) =>
        particles.filter(
          (particle) => now - particle.createdAt < 1000
        )
      );
    }, 150);

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      mounted = false;

      window.removeEventListener('mousemove', handleMouseMove);
      window.clearInterval(cleanupSmoke);
    };
  }, []);

  return (
    <>
      {smoke.map((particle) => (
        <span
          key={particle.id}
          className="green-smoke"
          style={{
            left: particle.x,
            top: particle.y,
            width: particle.size,
            height: particle.size,
            '--smoke-x': `${particle.driftX}px`,
            '--smoke-y': `${particle.driftY}px`,
          }}
          aria-hidden="true"
        />
      ))}
    </>
  );
}
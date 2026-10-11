
import { useEffect, useRef, useState } from 'react';
import './CustomCursor.css';

export default function CustomCursor() {
  const [position, setPosition] = useState({
    x: -100,
    y: -100,
    visible: false,
  });

  const [angle, setAngle] = useState(0);
  const [smoke, setSmoke] = useState([]);

  const previousMouse = useRef(null);
  const currentAngle = useRef(0);
  const targetAngle = useRef(0);

  const animationFrame = useRef(null);
  const idleTimeout = useRef(null);
  const lastSmokeTime = useRef(0);
  const smokeId = useRef(0);

  const moving = useRef(false);
  const visible = useRef(false);

  useEffect(() => {
    let mounted = true;

    const shortestAngleDifference = (target, current) =>
      ((target - current + 540) % 360) - 180;

    const startAnimation = () => {
      if (animationFrame.current === null) {
        animationFrame.current =
          window.requestAnimationFrame(animate);
      }
    };

    const animate = () => {
      animationFrame.current = null;

      if (!mounted) return;

      const difference = shortestAngleDifference(
        targetAngle.current,
        currentAngle.current
      );

      currentAngle.current += difference * 0.12;

      if (Math.abs(difference) < 0.08) {
        currentAngle.current = targetAngle.current;
      }

      setAngle(currentAngle.current);

      const now = performance.now();

      if (moving.current && now - lastSmokeTime.current >= 30) {
        lastSmokeTime.current = now;

        const id = smokeId.current++;

        setSmoke((particles) => [
          ...particles,
          {
            id,
            x: mousePosition.current.x,
            y: mousePosition.current.y,
            createdAt: now,
            driftX: Math.sin(id * 1.7) * 17,
            driftY: -10 - (id % 5) * 5,
            size: 13 + (id % 4) * 4,
          },
        ]);
      }

      const angleSettled =
        Math.abs(
          shortestAngleDifference(
            targetAngle.current,
            currentAngle.current
          )
        ) < 0.08;

      if (!angleSettled || moving.current) {
        animationFrame.current =
          window.requestAnimationFrame(animate);
      } else {
        currentAngle.current = targetAngle.current;
        setAngle(targetAngle.current);
      }
    };

    const mousePosition = {
      current: { x: -100, y: -100 },
    };

    const handleMouseMove = (event) => {
      const x = event.clientX;
      const y = event.clientY;

      mousePosition.current = { x, y };

      setPosition({
        x,
        y,
        visible: true,
      });

      visible.current = true;

      const previous = previousMouse.current;

      if (previous) {
        const dx = x - previous.x;
        const dy = y - previous.y;
        const distance = Math.hypot(dx, dy);

        if (distance > 2.5) {
          const desiredAngle =
            Math.atan2(dy, dx) * (180 / Math.PI) - 90;

          targetAngle.current =
            currentAngle.current +
            shortestAngleDifference(
              desiredAngle,
              currentAngle.current
            );

          moving.current = true;

          window.clearTimeout(idleTimeout.current);

          idleTimeout.current = window.setTimeout(() => {
            moving.current = false;

            targetAngle.current =
              currentAngle.current +
              shortestAngleDifference(0, currentAngle.current);

            startAnimation();
          }, 450);

          startAnimation();
        }
      }

      previousMouse.current = { x, y };
    };

    const handleMouseLeave = () => {
      visible.current = false;

      setPosition((previous) => ({
        ...previous,
        visible: false,
      }));
    };

    const handleMouseEnter = () => {
      visible.current = true;

      setPosition((previous) => ({
        ...previous,
        visible: true,
      }));
    };

    const cleanupSmoke = window.setInterval(() => {
      const now = performance.now();

      setSmoke((particles) =>
        particles.filter(
          (particle) => now - particle.createdAt < 1000
        )
      );
    }, 150);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      mounted = false;

      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);

      window.clearTimeout(idleTimeout.current);
      window.clearInterval(cleanupSmoke);

      if (animationFrame.current !== null) {
        window.cancelAnimationFrame(animationFrame.current);
      }
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

      <div
        className="fire-cursor"
        style={{
          left: position.x,
          top: position.y,
          opacity: position.visible ? 1 : 0,
        }}
        aria-hidden="true"
      >
        <span className="fire-glow" />

        <div
          className="fireball-direction"
          style={{
            transform: `rotate(${angle}deg)`,
          }}
        >
          <svg
            className="fireball-svg"
            viewBox="0 0 64 64"
            fill="none"
          >
            <circle
              cx="32"
              cy="32"
              r="23"
              stroke="#00FF88"
              strokeWidth="2.2"
            />

            <path
              d="M32 1V15 M32 49V63 M1 32H15 M49 32H63"
              stroke="#00FF88"
              strokeWidth="2.2"
              strokeLinecap="square"
            />
          </svg>
        </div>
      </div>
    </>
  );
}


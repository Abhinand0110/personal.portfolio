import React, { useEffect, useRef } from 'react';

interface StardustParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  decay: number;
  color: string;
}

interface ClickRipple {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  alpha: number;
}

/**
 * Pure Minimalist Stardust & Water Ripple Mouse Effect:
 * - Completely removes flashlight / spotlight illumination.
 * - Leaves standard cursor 100% clean and unencumbered.
 * - Releases delicate, weightless glowing stardust specks strictly while moving.
 * - Stops completely when the cursor is still.
 * - Gentle, crisp hairline water ripple on click.
 * - Zero impact on clicks, text selection, or performance.
 */
export const MinimalMouseEffect: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const prevPos = useRef({ x: -200, y: -200 });
  const particles = useRef<StardustParticle[]>([]);
  const ripples = useRef<ClickRipple[]>([]);

  useEffect(() => {
    // Disable on touch devices or reduced motion
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isTouch || prefersReducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    let animId: number;

    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;

      const dx = x - prevPos.current.x;
      const dy = y - prevPos.current.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      // Only emit tiny stardust motes if actually moving
      if (dist > 3) {
        const count = Math.min(Math.floor(dist / 6) + 1, 3);
        for (let i = 0; i < count; i++) {
          const angle = Math.random() * Math.PI * 2;
          const speed = Math.random() * 0.7 + 0.2;
          const isWhite = Math.random() > 0.65;

          particles.current.push({
            x: x + (Math.random() - 0.5) * 5,
            y: y + (Math.random() - 0.5) * 5,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed - 0.2, // subtle float
            size: Math.random() * 1.5 + 0.7,
            alpha: Math.random() * 0.4 + 0.5,
            decay: Math.random() * 0.025 + 0.02,
            color: isWhite ? '255, 255, 255' : '0, 229, 255',
          });
        }
      }

      prevPos.current = { x, y };
    };

    const handleMouseDown = (e: MouseEvent) => {
      // Subtle, crisp water ripple
      ripples.current.push({
        x: e.clientX,
        y: e.clientY,
        radius: 2,
        maxRadius: 36,
        alpha: 0.7,
      });

      // Micro burst of 4-6 sparks on click
      for (let i = 0; i < 6; i++) {
        const angle = (Math.PI * 2 * i) / 6 + (Math.random() - 0.5) * 0.4;
        const speed = Math.random() * 1.5 + 0.8;
        particles.current.push({
          x: e.clientX,
          y: e.clientY,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          size: Math.random() * 1.8 + 1,
          alpha: 0.8,
          decay: 0.03,
          color: '0, 229, 255',
        });
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Render Stardust Particles
      for (let i = particles.current.length - 1; i >= 0; i--) {
        const p = particles.current[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.96;
        p.vy *= 0.96;
        p.alpha -= p.decay;

        if (p.alpha <= 0) {
          particles.current.splice(i, 1);
          continue;
        }

        ctx.fillStyle = `rgba(${p.color}, ${p.alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }

      // 2. Render Click Ripples
      for (let i = ripples.current.length - 1; i >= 0; i--) {
        const r = ripples.current[i];
        r.radius += (r.maxRadius - r.radius) * 0.12 + 0.6;
        r.alpha -= 0.035;

        if (r.alpha <= 0) {
          ripples.current.splice(i, 1);
          continue;
        }

        ctx.strokeStyle = `rgba(0, 229, 255, ${r.alpha})`;
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
        ctx.stroke();
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-30 overflow-hidden"
    >
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />
    </div>
  );
};

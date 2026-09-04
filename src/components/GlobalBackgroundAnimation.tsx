import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseAlpha: number;
  pulsePhase: number;
}

export const GlobalBackgroundAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const updateDimensions = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', updateDimensions);

    // Dynamic particle collection
    const count = Math.min(65, Math.max(35, Math.floor((width * height) / 22000)));
    const particles: Particle[] = [];

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        radius: Math.random() * 1.8 + 0.8,
        baseAlpha: Math.random() * 0.35 + 0.15,
        pulsePhase: Math.random() * Math.PI * 2,
      });
    }

    // Global mouse coordinates
    let mouseX = -1000;
    let mouseY = -1000;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleMouseLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Scroll tracking for subtle parallax
    let scrollY = window.pageYOffset;
    let targetScrollOffset = 0;
    let currentScrollOffset = 0;

    const handleScroll = () => {
      const newScroll = window.pageYOffset;
      const delta = newScroll - scrollY;
      scrollY = newScroll;
      targetScrollOffset += delta * 0.15;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    let time = 0;

    const render = () => {
      time += 0.014;

      // Parallax damping
      currentScrollOffset += (targetScrollOffset - currentScrollOffset) * 0.08;
      targetScrollOffset *= 0.92;

      ctx.clearRect(0, 0, width, height);

      // 1. Subtle Cyber Analytics Grid
      const gridSize = 56;
      ctx.strokeStyle = 'rgba(0, 229, 255, 0.035)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      for (let x = 0; x < width; x += gridSize) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
      }
      ctx.stroke();

      // 2. Animated Analytics Splines (Upper Wave & Lower Wave)
      // Wave A (Mid-Upper Spline)
      ctx.save();
      ctx.beginPath();
      const pointsA = 10;
      const stepA = width / (pointsA - 1);
      const baselineYA = height * 0.38 - currentScrollOffset * 0.3;

      for (let i = 0; i < pointsA; i++) {
        const px = i * stepA;
        const py =
          baselineYA +
          Math.sin(time + i * 0.65) * 22 +
          Math.cos(time * 0.5 + i * 0.3) * 14;
        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.strokeStyle = 'rgba(0, 229, 255, 0.16)';
      ctx.lineWidth = 1.2;
      ctx.setLineDash([4, 6]);
      ctx.stroke();
      ctx.setLineDash([]);

      // Pulse nodes on Wave A
      for (let i = 1; i < pointsA - 1; i += 2) {
        const px = i * stepA;
        const py =
          baselineYA +
          Math.sin(time + i * 0.65) * 22 +
          Math.cos(time * 0.5 + i * 0.3) * 14;
        ctx.fillStyle = 'rgba(0, 229, 255, 0.6)';
        ctx.beginPath();
        ctx.arc(px, py, 2.5, 0, Math.PI * 2);
        ctx.fill();

        ctx.strokeStyle = 'rgba(0, 229, 255, 0.05)';
        ctx.beginPath();
        ctx.moveTo(px, py);
        ctx.lineTo(px, height);
        ctx.stroke();
      }

      // Wave B (Lower Spline)
      ctx.beginPath();
      const pointsB = 8;
      const stepB = width / (pointsB - 1);
      const baselineYB = height * 0.76 - currentScrollOffset * 0.5;

      for (let i = 0; i < pointsB; i++) {
        const px = i * stepB;
        const py =
          baselineYB +
          Math.sin(time * 0.8 + i * 0.8) * 28 +
          Math.cos(time * 0.4 + i * 0.4) * 16;
        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.strokeStyle = 'rgba(0, 229, 255, 0.12)';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Nodes on Wave B
      for (let i = 2; i < pointsB - 1; i += 2) {
        const px = i * stepB;
        const py =
          baselineYB +
          Math.sin(time * 0.8 + i * 0.8) * 28 +
          Math.cos(time * 0.4 + i * 0.4) * 16;
        ctx.fillStyle = 'rgba(0, 229, 255, 0.7)';
        ctx.beginPath();
        ctx.arc(px, py, 3, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();

      // 3. Update and draw constellation particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy - currentScrollOffset * 0.05;

        // Wrap around viewport boundaries
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Mouse deflection
        const dx = mouseX - p.x;
        const dy = mouseY - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          const force = (1 - dist / 120) * 0.8;
          p.x -= (dx / dist) * force * 1.5;
          p.y -= (dy / dist) * force * 1.5;
        }

        // Draw particle
        const dynamicAlpha = p.baseAlpha + Math.sin(time * 2 + p.pulsePhase) * 0.08;
        ctx.fillStyle = `rgba(0, 229, 255, ${Math.max(0.08, dynamicAlpha)})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();

        // Connect nearby points
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const distNodes = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (distNodes < 115) {
            const lineAlpha = (1 - distNodes / 115) * 0.14;
            ctx.strokeStyle = `rgba(0, 229, 255, ${lineAlpha})`;
            ctx.lineWidth = 0.75;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', updateDimensions);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden"
    >
      <canvas ref={canvasRef} className="block w-full h-full opacity-85" />
    </div>
  );
};

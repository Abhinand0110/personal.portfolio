import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles } from 'lucide-react';

const MESSAGES = [
  "Hi! 👋 Welcome to the site!",
  "*Beep boop!* Nice to meet you! ✨",
  "Hello! Hope you're having an awesome day! 😊",
  "Bzzzt! Thanks for stopping by! 🚀",
  "*Happy robot noises* ^ _ ^",
  "Enjoy exploring the work below! ↓",
];

export const CyberBotCompanion: React.FC = () => {
  const [messageIndex, setMessageIndex] = useState(0);
  const [isWaving, setIsWaving] = useState(true);
  const [eyeState, setEyeState] = useState<'normal' | 'happy' | 'wink' | 'curious'>('normal');
  const [eyeOffset, setEyeOffset] = useState({ x: 0, y: 0 });
  const [clickCount, setClickCount] = useState(0);
  const botRef = useRef<HTMLDivElement | null>(null);

  // Periodic eye blinking
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setEyeState((prev) => {
        if (prev === 'happy' || prev === 'wink') return prev;
        return 'wink';
      });
      setTimeout(() => {
        setEyeState((prev) => (prev === 'wink' ? 'normal' : prev));
      }, 250);
    }, 4500);

    return () => clearInterval(blinkInterval);
  }, []);

  // Track mouse for dynamic eye gaze tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!botRef.current) return;
      const rect = botRef.current.getBoundingClientRect();
      const botCenterX = rect.left + rect.width / 2;
      const botCenterY = rect.top + rect.height * 0.4;

      const deltaX = e.clientX - botCenterX;
      const deltaY = e.clientY - botCenterY;
      const dist = Math.hypot(deltaX, deltaY);

      if (dist < 800) {
        const angle = Math.atan2(deltaY, deltaX);
        const maxDist = 6;
        setEyeOffset({
          x: Math.cos(angle) * Math.min(maxDist, dist * 0.02),
          y: Math.sin(angle) * Math.min(maxDist, dist * 0.02),
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleClickBot = () => {
    setClickCount((c) => c + 1);
    setMessageIndex((prev) => (prev + 1) % MESSAGES.length);
    setEyeState('happy');
    setIsWaving(true);
    setTimeout(() => {
      setEyeState('normal');
    }, 1800);
  };

  return (
    <div
      ref={botRef}
      className="relative w-full py-4 flex flex-col items-center justify-center select-none"
    >
      {/* Soft Cyan Ambient Glow Behind Robot (blends seamlessly into #0a0a0a) */}
      <div
        aria-hidden="true"
        className="absolute w-72 h-72 rounded-full bg-[#00E5FF]/8 blur-3xl pointer-events-none -z-10 animate-pulse"
      />

      {/* Speech Bubble Floating Above Head */}
      <AnimatePresence mode="wait">
        <motion.div
          key={messageIndex}
          initial={{ opacity: 0, y: 10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.95 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          onClick={handleClickBot}
          className="relative mb-6 px-4 py-2.5 rounded-xl bg-[#121212]/90 border border-[#00E5FF]/30 backdrop-blur-md shadow-lg shadow-[#00E5FF]/10 text-center cursor-pointer group hover:border-[#00E5FF]/60 transition-colors"
        >
          {/* Subtle Cyber Corner Accents */}
          <div className="absolute -top-1 -left-1 w-2 h-2 border-t-2 border-l-2 border-[#00E5FF]" />
          <div className="absolute -top-1 -right-1 w-2 h-2 border-t-2 border-r-2 border-[#00E5FF]" />
          <div className="absolute -bottom-1 -left-1 w-2 h-2 border-b-2 border-l-2 border-[#00E5FF]" />
          <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b-2 border-r-2 border-[#00E5FF]" />

          <p className="text-xs text-gray-200 leading-relaxed font-mono font-medium">
            {MESSAGES[messageIndex]}
          </p>

          {/* Speech Bubble Pointer Arrow */}
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#121212] border-r border-b border-[#00E5FF]/30 rotate-45" />
        </motion.div>
      </AnimatePresence>

      {/* Floating Robot Body with Bobbing Physics */}
      <motion.div
        animate={{
          y: [-8, 8, -8],
          rotate: [-1, 1, -1],
        }}
        transition={{
          repeat: Infinity,
          duration: 3.8,
          ease: 'easeInOut',
        }}
        onClick={handleClickBot}
        className="relative cursor-pointer group flex flex-col items-center"
        title="Hi! Click me!"
      >
        {/* Robot SVG Illustration */}
        <svg
          width="220"
          height="230"
          viewBox="0 0 220 230"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="filter drop-shadow-[0_12px_24px_rgba(0,229,255,0.15)] transition-transform duration-300 group-hover:scale-105"
        >
          {/* Antenna */}
          <g>
            <rect x="107" y="14" width="6" height="24" rx="3" fill="#262626" stroke="#404040" strokeWidth="1.5" />
            <circle cx="110" cy="12" r="7" fill="#121212" stroke="#00E5FF" strokeWidth="2" />
            <circle cx="110" cy="12" r="4" fill="#00E5FF" className="animate-pulse" />
            {/* Holographic antenna waves */}
            <path
              d="M102 6C105 3 115 3 118 6"
              stroke="#00E5FF"
              strokeWidth="1.5"
              strokeLinecap="round"
              opacity="0.6"
            />
          </g>

          {/* Head Outer Shell (Matte dark titanium finish) */}
          <rect
            x="48"
            y="36"
            width="124"
            height="86"
            rx="28"
            fill="#171717"
            stroke="#2e2e2e"
            strokeWidth="2.5"
          />

          {/* Head Metallic Bevel Highlights */}
          <rect
            x="52"
            y="40"
            width="116"
            height="78"
            rx="24"
            fill="url(#headGradient)"
            stroke="rgba(255,255,255,0.06)"
            strokeWidth="1"
          />

          {/* Ear Bolts / Audio Sensors */}
          <rect x="36" y="66" width="14" height="26" rx="5" fill="#262626" stroke="#00E5FF" strokeWidth="1.5" />
          <circle cx="43" cy="79" r="3" fill="#00E5FF" opacity="0.8" />
          <rect x="170" y="66" width="14" height="26" rx="5" fill="#262626" stroke="#00E5FF" strokeWidth="1.5" />
          <circle cx="177" cy="79" r="3" fill="#00E5FF" opacity="0.8" />

          {/* Glossy Black Visor Display */}
          <rect
            x="60"
            y="50"
            width="100"
            height="58"
            rx="18"
            fill="#09090b"
            stroke="#00E5FF"
            strokeWidth="1.8"
            strokeOpacity="0.4"
          />

          {/* Visor Glare & Reflection Line */}
          <path
            d="M66 58C76 53 144 53 154 58"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeOpacity="0.15"
          />

          {/* Interactive Luminous Eyes on Visor */}
          <g transform={`translate(${eyeOffset.x}, ${eyeOffset.y})`}>
            {eyeState === 'normal' && (
              <>
                {/* Left Eye */}
                <circle cx="92" cy="79" r="9" fill="#00E5FF" filter="url(#cyanGlow)" />
                <circle cx="92" cy="79" r="5" fill="#FFFFFF" />
                <circle cx="95" cy="76" r="2.5" fill="#FFFFFF" />

                {/* Right Eye */}
                <circle cx="128" cy="79" r="9" fill="#00E5FF" filter="url(#cyanGlow)" />
                <circle cx="128" cy="79" r="5" fill="#FFFFFF" />
                <circle cx="131" cy="76" r="2.5" fill="#FFFFFF" />
              </>
            )}

            {eyeState === 'happy' && (
              <>
                {/* Happy Crescent Arches ^ ^ */}
                <path
                  d="M84 82C84 73 99 73 99 82"
                  stroke="#00E5FF"
                  strokeWidth="4"
                  strokeLinecap="round"
                  filter="url(#cyanGlow)"
                />
                <path
                  d="M121 82C121 73 136 73 136 82"
                  stroke="#00E5FF"
                  strokeWidth="4"
                  strokeLinecap="round"
                  filter="url(#cyanGlow)"
                />
              </>
            )}

            {eyeState === 'wink' && (
              <>
                {/* Winking: Left Eye Flat / Blink, Right Eye Open */}
                <line
                  x1="84"
                  y1="80"
                  x2="98"
                  y2="80"
                  stroke="#00E5FF"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  filter="url(#cyanGlow)"
                />
                <circle cx="128" cy="79" r="9" fill="#00E5FF" filter="url(#cyanGlow)" />
                <circle cx="128" cy="79" r="4.5" fill="#FFFFFF" />
              </>
            )}

            {/* Cute Rosy Cyan Cheeks */}
            <circle cx="78" cy="94" r="3.5" fill="#00E5FF" opacity="0.35" />
            <circle cx="142" cy="94" r="3.5" fill="#00E5FF" opacity="0.35" />
          </g>

          {/* Neck Joint Connector */}
          <rect x="100" y="120" width="20" height="10" rx="3" fill="#262626" stroke="#404040" strokeWidth="1" />
          <line x1="104" y1="125" x2="116" y2="125" stroke="#00E5FF" strokeWidth="1.5" opacity="0.7" />

          {/* Torso / Body Core */}
          <rect
            x="64"
            y="128"
            width="92"
            height="62"
            rx="20"
            fill="#171717"
            stroke="#2e2e2e"
            strokeWidth="2"
          />
          <rect
            x="68"
            y="132"
            width="84"
            height="54"
            rx="16"
            fill="url(#bodyGradient)"
          />

          {/* Chest Reactor Core / Energy Gauge */}
          <circle cx="110" cy="158" r="14" fill="#0a0a0a" stroke="#00E5FF" strokeWidth="2" />
          <circle cx="110" cy="158" r="8" fill="#00E5FF" filter="url(#cyanGlow)" opacity="0.9" />
          <circle cx="110" cy="158" r="4" fill="#FFFFFF" />

          {/* Chest Tech Circuit Lines */}
          <path d="M80 158H92" stroke="#00E5FF" strokeWidth="1.5" strokeOpacity="0.5" strokeLinecap="round" />
          <path d="M128 158H140" stroke="#00E5FF" strokeWidth="1.5" strokeOpacity="0.5" strokeLinecap="round" />
          <circle cx="80" cy="158" r="2" fill="#00E5FF" />
          <circle cx="140" cy="158" r="2" fill="#00E5FF" />

          {/* Left Arm (Resting gracefully) */}
          <g>
            <circle cx="58" cy="144" r="7" fill="#262626" stroke="#404040" strokeWidth="1.5" />
            <path
              d="M56 148C50 162 48 174 54 182"
              stroke="#262626"
              strokeWidth="9"
              strokeLinecap="round"
            />
            <circle cx="54" cy="182" r="6" fill="#00E5FF" opacity="0.7" />
          </g>

          {/* Right Arm: Animated Waving "Hi" Gesture */}
          <g className="origin-[162px_144px]">
            <circle cx="162" cy="144" r="7" fill="#262626" stroke="#404040" strokeWidth="1.5" />

            {/* Waving Arm Forearm & Hand */}
            <g>
              <animateTransform
                attributeName="transform"
                type="rotate"
                values="0 162 144; -24 162 144; 12 162 144; -24 162 144; 0 162 144"
                dur="1.8s"
                repeatCount="indefinite"
              />
              <path
                d="M164 142C174 126 182 110 178 98"
                stroke="#262626"
                strokeWidth="9"
                strokeLinecap="round"
              />
              {/* Hand with waving fingers */}
              <circle cx="178" cy="96" r="7" fill="#171717" stroke="#00E5FF" strokeWidth="2" />
              <path
                d="M174 92L173 87M178 90L179 84M182 92L184 87"
                stroke="#00E5FF"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </g>
          </g>

          {/* Anti-Gravity Thruster Base (Bottom) */}
          <path
            d="M86 190C94 200 126 200 134 190"
            fill="#121212"
            stroke="#2e2e2e"
            strokeWidth="2"
          />
          {/* Thruster Flame / Energy Wave */}
          <ellipse cx="110" cy="204" rx="20" ry="6" fill="#00E5FF" filter="url(#cyanGlow)" opacity="0.7" />
          <ellipse cx="110" cy="204" rx="10" ry="3" fill="#FFFFFF" />

          {/* Definitions & Gradients */}
          <defs>
            <linearGradient id="headGradient" x1="52" y1="40" x2="168" y2="118" gradientUnits="userSpaceOnUse">
              <stop stopColor="#222222" />
              <stop offset="1" stopColor="#141414" />
            </linearGradient>

            <linearGradient id="bodyGradient" x1="68" y1="132" x2="152" y2="186" gradientUnits="userSpaceOnUse">
              <stop stopColor="#242424" />
              <stop offset="1" stopColor="#121212" />
            </linearGradient>

            <filter id="cyanGlow" x="0" y="0" width="200%" height="200%">
              <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#00E5FF" floodOpacity="0.9" />
            </filter>
          </defs>
        </svg>

        {/* Ambient Hover Shadow Beneath Robot */}
        <motion.div
          animate={{
            scale: [0.85, 1.15, 0.85],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            repeat: Infinity,
            duration: 3.8,
            ease: 'easeInOut',
          }}
          className="w-28 h-4 rounded-full bg-[#00E5FF]/20 blur-md mt-1"
        />

        {/* Playful Interactive Prompt */}
        <div className="mt-3 flex items-center gap-1.5 text-[11px] font-mono text-gray-400 group-hover:text-[#00E5FF] transition-colors">
          <Sparkles className="w-3.5 h-3.5 text-[#00E5FF]" />
          <span>Click me to say hi!</span>
        </div>
      </motion.div>
    </div>
  );
};

'use client';
import { motion } from 'framer-motion';

const AnimatedLoader = () => {
  return (
    <div className="fixed inset-0 z-[9999] bg-[#111] flex items-center justify-center">
      {/* Logo with Heartbeat Animation */}
      <motion.img
        src="/logo.png" // Ensure logo.png is in public/
        alt="Loading logo"
        width={60}
        height={60}
        animate={{
          scale: [1, 1.2, 1], // Heartbeat pulse
        }}
        transition={{
          duration: 0.8, // Heartbeat speed
          ease: 'easeInOut',
          repeat: Infinity,
        }}
        style={{ zIndex: 1000 }}
      />

      {/* Circular Waves */}
      {[0, 0.2, 0.4].map((delay, index) => (
        <motion.div
          key={index}
          className="absolute w-16 h-16 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(125,65,153,0.6), transparent)',
            zIndex: 999,
          }}
          animate={{
            scale: [1, 10], // Expand to cover screen
            opacity: [0.6, 0], // Fade out
          }}
          transition={{
            duration: 2, // Wave expansion speed
            ease: 'easeOut',
            repeat: Infinity,
            delay, // Stagger waves
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedLoader;

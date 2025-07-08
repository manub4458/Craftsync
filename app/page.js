'use client';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import DigitalPartnerSection from './components/aboutus';
import Hero from './components/hero';
import LogoStream from './components/infinitescroller';

import ServicesSection from './components/services';
import TestimonialsSection from './components/testimonials';
import ProfessionalsSection from './components/whyus';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Loader */}
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-[#111] flex items-center justify-center"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.2, transition: { duration: 0.6, ease: 'easeOut' } }}
        >
          {/* Glowing Heartbeat Logo */}
          <motion.img
            src="/logo.png"
            alt="Loading logo"
            width={80}
            height={80}
            animate={{
              scale: [1, 1.3, 1],
              filter: [
                'brightness(1) drop-shadow(0 0 10px rgba(125, 65, 153, 0.8))',
                'brightness(1.5) drop-shadow(0 0 20px rgba(125, 65, 153, 1))',
                'brightness(1) drop-shadow(0 0 10px rgba(125, 65, 153, 0.8))',
              ],
            }}
            transition={{ duration: 0.9, ease: 'easeInOut', repeat: Infinity }}
            style={{ zIndex: 1000 }}
          />
          {/* Layered Neon Waves */}
          {[0, 0.3, 0.6, 0.9].map((delay, index) => (
            <motion.div
              key={index}
              className="absolute rounded-full"
              style={{
                width: '80px',
                height: '80px',
                background: 'radial-gradient(circle, rgba(125,65,153,0.7), transparent 70%)',
                boxShadow: '0 0 15px rgba(125,65,153,0.5), 0 0 30px rgba(210,190,221,0.3)',
                zIndex: 999,
              }}
              animate={{
                scale: [1, 12],
                opacity: [0.7, 0],
                rotate: index % 2 === 0 ? [0, 90] : [0, -90],
              }}
              transition={{
                duration: 2.2,
                ease: 'easeOut',
                repeat: Infinity,
                delay,
              }}
            />
          ))}
          {/* Subtle Background Pulse */}
          <motion.div
            className="absolute inset-0"
            style={{ background: 'radial-gradient(circle, rgba(125,65,153,0.2), transparent)' }}
            animate={{ scale: [1, 1.05], opacity: [0.2, 0.1] }}
            transition={{ duration: 1.5, ease: 'easeInOut', repeat: Infinity }}
          />
        </motion.div>
      )}

      {/* Landing Page Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, filter: 'blur(8px)' }}
        animate={{ 
          opacity: isLoading ? 0 : 1, 
          scale: isLoading ? 0.95 : 1, 
          filter: isLoading ? 'blur(8px)' : 'blur(0px)' 
        }}
        transition={{ 
          duration: 0.8, 
          ease: [0.16, 1, 0.3, 1], // Smooth, elastic easing
          delay: 0.4 
        }}
      >

        <Hero />
        <LogoStream />
        <DigitalPartnerSection />
        <ProfessionalsSection />
        <ServicesSection />
        <TestimonialsSection />
      </motion.div>
    </>
  );
}
'use client';
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
const logos = [
  '/logo1.png', '/logo4.webp', '/logo3.svg', '/logo6.png', '/logo5.png',
];

const LogoStream = () => {
  const rowRef = useRef(null);

  useEffect(() => {
    const row = rowRef.current;
    const logoWidth = 150; // Approximate width of each logo
    const containerWidth = window.innerWidth;
    const clonesNeeded = Math.ceil(containerWidth / logoWidth) + 1;

    // Duplicate logos for infinite loop
    for (let i = 0; i < clonesNeeded; i++) {
      logos.forEach(logo => {
        const img = document.createElement('img');
        img.src = logo;
        img.alt = 'Partner Logo';
        img.className = 'w-24 h-24 object-contain mx-4';
        row.appendChild(img.cloneNode());
      });
    }

    const animation = {
      x: '-100%',
      duration: 30,
      ease: 'linear',
      repeat: Infinity,
      modifiers: {
        x: gsap.utils.unitize(x => parseFloat(x) % -100),
      },
    };

    row.style.width = `${logos.length * logoWidth * clonesNeeded}px`;

    return () => {
      if (row) row.innerHTML = '';
    };
  }, []);

  return (
    <section className="py-10 bg-[#111]">
      <div className="max-w-7xl mx-auto overflow-hidden">
        <motion.div
          ref={rowRef}
          className="flex whitespace-nowrap"
          animate={{
            x: ['0%', '-100%'],
          }}
          transition={{
            duration: 70,
            ease: 'linear',
            repeat: Infinity,
          }}
        >
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Partner Logo ${index + 1}`}
              className="w-24 h-24 object-contain mx-4 flex-shrink-0"
              loading={index < 10 ? 'eager' : 'lazy'} // Optimize loading
              decoding="async" // Async decoding for better performance
              onError={(e) => {
                e.target.style.display = 'none'; // Hide broken images
              }}
              onLoad={(e) => {
                e.target.style.opacity = '1'; // Fade in effect
              }}
              style={{
                opacity: 0,
                transition: 'opacity 0.3s ease'
              }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default LogoStream;
'use client';
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

const logos = [
  { src: '/logo1.png', url: 'https://www.paradiseuttarakhand.com/' },
  { src: '/logo4.webp', url: 'https://avishdynamics.com/' },
  { src: '/logo3.svg', url: 'https://www.barista.co.in/' },
  { src: '/logo6.png', url: 'https://paradiseblisstours.com/' },
  { src: '/logo5.png', url: 'https://example.com/logo5' },
    { src: '/beard.png', url: 'https://beardsnshears.in/' },
];

const LogoStream = () => {
  const rowRef = useRef(null);

  useEffect(() => {
    const row = rowRef.current;
    const logoWidth = 150;
    const containerWidth = window.innerWidth;
    const clonesNeeded = Math.ceil(containerWidth / logoWidth) + 1;

    // Duplicate logos for infinite loop on tablet and desktop
    if (window.innerWidth >= 768) {
      for (let i = 0; i < clonesNeeded; i++) {
        logos.forEach(logo => {
          const link = document.createElement('a');
          link.href = logo.url;
          link.className = 'inline-block mx-4';
          const img = document.createElement('img');
          img.src = logo.src;
          img.alt = 'Partner Logo';
          img.className = 'w-24 h-24 object-contain';
          link.appendChild(img);
          row.appendChild(link.cloneNode(true));
        });
      }
      row.style.width = `${logos.length * logoWidth * clonesNeeded}px`;
    }

    return () => {
      if (row) row.innerHTML = '';
    };
  }, []);
  // Text animation variants
  const textVariants = {
    initial: { 
      opacity: 0, 
      y: 30 
    },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-10 bg-[#111]">
      <motion.h1
        variants={textVariants}
        initial="initial"
        animate="animate"
        className="md:hidden font-heading mt-6 word-subheading uppercase text-5xl sm:text-6xl mb-6 text-center"
      >
        <span className="text-white">OUR <br/> </span>
        <span className="text-white relative inline-block flex items-center justify-center gap-2 lg:gap-4">
          CLIENTS 
         
        </span>
      
 
      </motion.h1>
      <div className="max-w-7xl mx-auto overflow-hidden">
        {/* Mobile view: 2 logos per row */}
        <div className="md:hidden grid grid-cols-2 gap-4 justify-items-center">
          {logos.map((logo, index) => (
            <a key={index} href={logo.url} className="flex justify-center">
              <img
                src={logo.src}
                alt={`Partner Logo ${index + 1}`}
                className="w-24 h-24 object-contain"
                loading={index < 10 ? 'eager' : 'lazy'}
                decoding="async"
  
              />
            </a>
          ))}
        </div>

        {/* Tablet and Desktop view: Infinite scroller */}
        <motion.div
          ref={rowRef}
          className="hidden md:flex whitespace-nowrap"
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
            <a key={index} href={logo.url} className="inline-block mx-4">
              <img
                src={logo.src}
                alt={`Partner Logo ${index + 1}`}
                className="w-24 h-24 object-contain flex-shrink-0"
                loading={index < 10 ? 'eager' : 'lazy'}
                decoding="async"
                onError={(e) => { e.target.style.display = 'none'; }}
                onLoad={(e) => { e.target.style.opacity = '1'; }}
                style={{ opacity: 0, transition: 'opacity 0.3s ease' }}
              />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default LogoStream;
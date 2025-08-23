// components/HeroSection.jsx
'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Link from 'next/link';
const HeroSection = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Animation variants for the floating effect
  const floatingVariants = {
    initial: { 
      y: 0,
      rotate: 0,
      scale: 0.8,
      opacity: 0
    },
    animate: (index) => ({
      y: [0, -15, 0],
      rotate: [-3, 3, -3],
      scale: 1,
      opacity: 1,
      transition: {
        y: {
          duration: 4 + index * 0.3,
          repeat: Infinity,
          ease: "easeInOut"
        },
        rotate: {
          duration: 5 + index * 0.2,
          repeat: Infinity,
          ease: "easeInOut"
        },
        scale: {
          duration: 0.8,
          delay: index * 0.15,
          ease: "backOut"
        },
        opacity: {
          duration: 0.8,
          delay: index * 0.15,
          ease: "easeOut"
        }
      }
    })
  };

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

  const subtextVariants = {
    initial: { 
      opacity: 0, 
      y: 20 
    },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.6,
        ease: "easeOut"
      }
    }
  };

  // Sample images data - replace with your actual images
  const leftImages = [
    {
      src: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop&crop=entropy",
      alt: "Business meeting",
      className: "w-44 h-48 rounded-2xl shadow-2xl"
    },
    {
      src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=350&h=250&fit=crop&crop=entropy",
      alt: "Analytics dashboard",
      className: "w-72 h-52 rounded-xl shadow-xl"
    },
    {
      src: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=300&h=200&fit=crop&crop=entropy",
      alt: "Team collaboration",
      className: "w-56 h-40 rounded-lg shadow-lg"
    }
  ];

  const rightImages = [
    {
      src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=entropy",
      alt: "Data visualization",
      className: "w-30 h-44 rounded-xl shadow-xl"
    },
    {
      src: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=350&h=280&fit=crop&crop=entropy",
      alt: "Mobile interface",
      className: "w-60 h-40 rounded-2xl shadow-2xl"
    },
    {
      src: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=320&h=240&fit=crop&crop=entropy",
      alt: "Digital marketing",
      className: "w-32 h-32 rounded-lg shadow-lg"
    }
  ];

  if (!mounted) return null;

  return (
    <section className="relative h-screen  bg-[#111] overflow-hidden py-20 px-4">
      {/* Background gradient effects */}
      {/* <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div> */}

      <div className="relative max-w-7xl h-screen mx-auto">
        <div className="grid grid-cols-1 h-screen lg:grid-cols-12 gap-8 items-center ">
          
          {/* Left floating images */}
          <div className="hidden lg:block lg:col-span-3 relative">
            <div className="space-y-8">
              {leftImages.map((image, index) => (
                <motion.div
                  key={`left-${index}`}
                  custom={index}
                  variants={floatingVariants}
                  initial="initial"
                  animate="animate"
                  className={`relative ${index === 1 ? '-ml-20' : index === 2 ? 'ml-10' : ''}`}
                  whileHover={{ 
                    scale: 1.05, 
                    rotate: 0,
                    transition: { duration: 1 } 
                  }}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className={`${image.className} object-cover border border-white/10 backdrop-blur-sm`}
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-inherit"></div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Center content */}
 <div className="lg:col-span-6 text-center px-4">
  <motion.h1
    variants={textVariants}
    initial="initial"
    animate="animate"
    className="font-display mt-6 word-wide text-5xl sm:text-8xl md:text-8xl lg:text-7xl xl:text-9xl 2xl:text-[8rem]  mb-6 text-center leading-none"
  >
    <span className="text-white block">EXCEPTIONAL</span>
    <span className="text-[#7D4199]  flex items-center justify-center gap-2 lg:gap-4 z-0">
      DIGITAL
        <svg
        className="  -rotate-30 absolute left-[64%] w-6 h-6 sm:w-8 sm:h-8 lg:w-12 lg:h-12 xl:w-16 xl:h-16 text- z-10 animate-pulse"
         viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 17L3 12L8 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 7L21 12L16 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14 3L10 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
    </span>
    <span className="text-white block">EXPERIENCES</span>
  </motion.h1>

  <motion.p
    variants={subtextVariants}
    initial="initial"
    animate="animate"
    className="text-gray-300 font-paragraph text-lg sm:text-lg max-w-2xl mx-auto leading-relaxed"
  >
 Empowering top brands and organizations with high-impact websites and performance-focused digital marketing strategies.
  </motion.p>
                 <div className="flex justify-center mt-10">
      
      <Link href="/contact">
            <motion.button
        className="  px-8 py-4 border-2 cursor-pointer mb-4 border-[#7D4199] text-white font-heading text-lg rounded-full bg-transparent transition-all duration-300 hover:text-[#7D4199] hover:bg-white"
        whileHover={{ 
          scale: 1.05,
        }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        style={{
          boxShadow: 'none',
          transition: 'all 0.3s ease'
        }}
        onMouseEnter={(e) => {
          e.target.style.boxShadow = '0 0 0 8px rgba(125, 65, 153, 0.2)';
        }}
        onMouseLeave={(e) => {
          e.target.style.boxShadow = 'none';
        }}
      >
        Get Started Now
      </motion.button>
      </Link>
            </div>
</div>


          {/* Right floating images */}
          <div className="hidden lg:block ml-24 lg:col-span-3 relative">
            <div className="space-y-8">
              {rightImages.map((image, index) => (
                <motion.div
                  key={`right-${index}`}
                  custom={index + 3}
                  variants={floatingVariants}
                  initial="initial"
                  animate="animate"
                  className={`relative ${index === 1 ? 'mr-10' : index === 2 ? 'mr-12' : ''}`}
                  whileHover={{ 
                    scale: 1.05, 
                    rotate: 0,
                    transition: { duration: 0.3 } 
                  }}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className={`${image.className} object-cover border border-white/10 backdrop-blur-sm`}
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-inherit"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile floating images */}
        <div className="lg:hidden mt-12">
          <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
            {[...leftImages.slice(0, 2), ...rightImages.slice(0, 2)].map((image, index) => (
              <motion.div
                key={`mobile-${index}`}
                custom={index}
                variants={floatingVariants}
                initial="initial"
                animate="animate"
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.3 } 
                }}
                className="relative"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-32 object-cover rounded-lg shadow-lg border border-white/10"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;
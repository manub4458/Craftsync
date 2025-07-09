'use client';
import React from 'react'
import { motion } from 'framer-motion';
import Image from 'next/image';
import InifiniteScroller from '../components/infinitetext'; // Adjust the import path as necessary
import HeroSection from './component1';
import TeamSection from './team';
import WhatMakesUsDifferent from './whyus2';
const Aboutus = () => {

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
  return (
    <>

    <div className="bg-[#111] mx-auto px-4 sm:px-6 lg:px-8 py-20 flex items-center justify-center">
      <div className="w-full max-w-7xl text-center">
        <motion.div
          variants={textVariants}
          initial="initial"
          animate="animate"
          className="text-center mb-4"
        >
          <div className="w-12 h-12 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 mx-auto  relative opacity-80">
            <Image 
              src="/about.png" 
              alt="Dream icon" 
              fill
              className="object-contain"
            />
          </div>
        </motion.div>
        <motion.h1
          variants={textVariants}
          initial="initial"
          animate="animate"
          className="font-display mt-2 word-paragraph text-7xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[8rem] mb-6 text-center leading-none"
        >
          <span className="text-white block">CRAFTING DREAMS</span>
          <span className="text-[#7D4199] flex items-center justify-center gap-2 lg:gap-4 relative">
            SYNCING REALITY
          </span>
          <span className="text-white block"></span>
        </motion.h1>
          <motion.p
            variants={subtextVariants}
            initial="initial"
            animate="animate"
            className="text-gray-300 font-paragraph text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed text-center mt-8"
          >
Our passionate digital marketing team — who we are, what drives us, and the impact we create.          </motion.p>
      </div>
    </div>
    <WhatMakesUsDifferent />
    <HeroSection />
    <InifiniteScroller />
    <TeamSection />
        </>
  )
}

export default Aboutus
'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
export default function WhatMakesUsDifferent() {
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
    <section className="pb-16 px-4 sm:px-6 lg:px-8 bg-[#111] text-white">
      <div className="max-w-7xl mx-auto">
   <div className="lg:col-span-6 text-center mb-10 px-4">
<motion.h1
  variants={textVariants}
  initial="initial"
  animate="animate"
  className="font-heading pt-1 md:pt-10  word-subheading uppercase text-5xl sm:text-8xl md:text-8xl lg:text-7xl xl:text-7xl 2xl:text-[6rem] mb-6 text-center"
>
  <span className="text-white">Why We're      <motion.img
      src="58621.png" // Replace with your image URL
      alt="transform icon"
      className="w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 inline-block rotate-16"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ 
        duration: 0.5, 
        delay: 1.2, 
        ease: "backOut" 
      }}
      whileHover={{ scale: 1.1, rotate: 10 }}
    /> <br/> </span>
  <span className="text-white relative inline-block flex items-center justify-center gap-2 lg:gap-4">
not Like the Rest

  </span>

  <span className="text-white"></span>
</motion.h1>

  <motion.p
    variants={subtextVariants}
    initial="initial"
    animate="animate"
    className="text-gray-300 font-paragraph text-lg sm:text-lg max-w-2xl mx-auto leading-relaxed"
  >
We focus on precision, honor our commitments, and strive to exceed expectations, which builds the trust our clients rely on.
</motion.p>
</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
          {/* Real-World Mastery */}
          <div className="flex items-center p-6 bg-[#1A1A1A] rounded-xl shadow-lg hover:bg-[#2A2A2A] transition-all duration-300">
            <div className="mr-4 flex-shrink-0">
              <div className="w-12 h-12 bg-[#D2BEDD] rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="font-heading uppercase word-subheading text-xl font-semibold text-[#E0E0E0] mb-2">Real-World Mastery</h3>
              <p className="text-sm text-gray-400">
                3+ years of experience, a portfolio full of successful projects, and industry-recognised achievements—our process works, and so do we.
              </p>
            </div>
          </div>

          {/* Focused Execution */}
          <div className="flex items-center p-6 bg-[#1A1A1A] rounded-xl shadow-lg hover:bg-[#2A2A2A] transition-all duration-300">
            <div className="mr-4 flex-shrink-0">
              <div className="w-12 h-12 bg-[#D2BEDD] rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="font-heading word-subheading uppercase text-xl font-semibold text-[#E0E0E0] mb-2">Focused Execution</h3>
              <p className="text-sm text-gray-400">
                Data guides our every move—so we don’t guess, we plan, act, and refine to deliver real, measurable results.
              </p>
            </div>
          </div>

          {/* Speed Meets Strategy*/}
          <div className="flex items-center p-6 bg-[#1A1A1A] rounded-xl shadow-lg hover:bg-[#2A2A2A] transition-all duration-300">
            <div className="mr-4 flex-shrink-0">
              <div className="w-12 h-12 bg-[#D2BEDD] rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="font-heading uppercase word-subheading text-xl font-semibold text-[#E0E0E0] mb-2">Speed Meets Strategy</h3>
              <p className="text-sm text-gray-400">
              Efficient workflows, collaborative teams, and open communication ensure every project runs smoothly and delivers real results.
              </p>
            </div>
          </div>

          {/* >We Imagine. We Craft. We Expand. */}
          <div className="flex items-center p-6 bg-[#1A1A1A] rounded-xl shadow-lg hover:bg-[#2A2A2A] transition-all duration-300">
            <div className="mr-4 flex-shrink-0">
              <div className="w-12 h-12 bg-[#D2BEDD] rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="font-heading uppercase word-subheading text-xl font-semibold text-[#E0E0E0] mb-2">We Imagine. We Craft. We Expand.</h3>
              <p className="text-sm text-gray-400">
               A comprehensive approach that transforms strategy into results. We design, launch, and optimize digital solutions that drive real impact.
              </p>
            </div>
          </div>

          {/* All Action. No Nonsense. */}
          <div className="flex items-center p-6 bg-[#1A1A1A] rounded-xl shadow-lg hover:bg-[#2A2A2A] transition-all duration-300">
            <div className="mr-4 flex-shrink-0">
              <div className="w-12 h-12 bg-[#D2BEDD] rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="font-heading word-subheading text-xl font-semibold text-[#E0E0E0] mb-2">All Action. No Nonsense.</h3>
              <p className="text-sm text-gray-400">
              Straightforward, reliable professionals dedicated to making digital easy, impactful, and profitable for you.
              </p>
            </div>
          </div>

          {/* Digital Done Right, For You */}
          <div className="flex items-center p-6 bg-[#1A1A1A] rounded-xl shadow-lg hover:bg-[#2A2A2A] transition-all duration-300">
            <div className="mr-4 flex-shrink-0">
              <div className="w-12 h-12 bg-[#D2BEDD] rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="font-heading word-subheading text-xl font-semibold text-[#E0E0E0] mb-2">Digital Done Right, For You</h3>
              <p className="text-sm text-gray-400">
               We’re a united team blending creativity, strategy, and action to create meaningful results. Together, let’s build something impactful.


              </p>
            </div>
          </div>
        </div>
      </div>
               <div className="flex justify-center mt-10">
      
      <Link href="/contact">
            <motion.button
        className="  px-8 py-4 border-2 border-[#7D4199] text-white font-heading text-lg rounded-full bg-transparent transition-all duration-300 hover:text-[#7D4199] hover:bg-white"
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
        Connect with Our Professionals
      </motion.button>
      </Link>
            </div>
    </section>
  );
}
'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const ServicesSection = () => {


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
    <section className=" bg-[#111] mx-auto max-w-full  pt-10 px-4 sm:px-6 lg:px-8">
                  {/* Center content */}
 <div className="lg:col-span-6 text-center mb-10 px-4">
<motion.h1
  variants={textVariants}
  initial="initial"
  animate="animate"
  className="font-heading mt-6 word-subheading uppercase text-5xl sm:text-8xl md:text-8xl lg:text-7xl xl:text-7xl 2xl:text-[6rem] mb-6 text-center"
>
  <span className="text-white">Empowering<br/> </span>
  <span className="text-white relative inline-block flex items-center justify-center gap-2 lg:gap-4">
     your business
    <motion.img
      src="float.png" // Replace with your image URL
      alt="transform icon"
      className="w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 inline-block"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ 
        duration: 0.5, 
        delay: 1.2, 
        ease: "backOut" 
      }}
      whileHover={{ scale: 1.1, rotate: 10 }}
    />
  </span>
    <br/>
  <span className="text-white"> transformation</span>
</motion.h1>

  <motion.p
    variants={subtextVariants}
    initial="initial"
    animate="animate"
    className="text-gray-300 font-paragraph text-lg sm:text-lg max-w-2xl mx-auto leading-relaxed"
  >
Innovative solutions. Strategic brilliance. Unprecedented growth. Let’s amplify your brand and unleash its true power.
</motion.p>
</div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16">
        
               {/* Analytics and Tracking */}
        <div className="inline-flex w-full max-w-[500px] items-center justify-between overflow-hidden rounded-[45px] bg-[#D2BEDD] p-6 md:p-8 shadow-[0px_5px_0px_0px_rgba(25,26,35,1.00)] outline outline-1 outline-offset-[-1px] outline-[#191a23]">
          <div className="inline-flex flex-col items-start justify-center gap-8 md:gap-10">
            <h2 className="flex flex-col items-start justify-start text-xl sm:text-2xl md:text-3xl font-medium text-black">
              <span className="rounded-lg bg-[#f3f3f3] px-2">Analytics and</span>
              <span className="rounded-lg bg-[#f3f3f3] px-2">Tracking</span>
            </h2>
            <div className="inline-flex items-center justify-start gap-2 sm:gap-3 font-['Space_Grotesk']">
              <motion.svg
                width="41"
                height="41"
                viewBox="0 0 41 41"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                whileHover={{ scale: 1.1, rotate: 10 }}
                transition={{ duration: 0.3 }}
              >
                <circle cx="20.5" cy="20.5" r="20.5" fill="white"></circle>
                <path d="M11.25 24.701C10.5326 25.1152 10.2867 26.0326 10.701 26.75C11.1152 27.4674 12.0326 27.7133 12.75 27.299L11.25 24.701ZM30.7694 16.3882C30.9838 15.588 30.5089 14.7655 29.7087 14.5511L16.6687 11.0571C15.8685 10.8426 15.046 11.3175 14.8316 12.1177C14.6172 12.9179 15.0921 13.7404 15.8923 13.9548L27.4834 17.0607L24.3776 28.6518C24.1631 29.452 24.638 30.2745 25.4382 30.4889C26.2384 30.7033 27.0609 30.2284 27.2753 29.4282L30.7694 16.3882ZM12.75 27.299L30.0705 17.299L28.5705 14.701L11.25 24.701L12.75 27.299Z" fill="#000"></path>
              </motion.svg>
              <motion.span
                className="text-base sm:text-lg md:text-xl leading-6 sm:leading-7 font-normal text-white"
                whileHover={{ scale: 1.1, color: '#f3f3f3' }}
                transition={{ duration: 0.3 }}
              >
                Learn more
              </motion.span>
            </div>
          </div>
          <img className="w-[150px] sm:w-[180px] md:w-[210px]" src="analytics.png" alt="Analytics and Tracking" />
        </div>
        {/* Search Engine Optimization */}
        <div className="inline-flex w-full max-w-[500px] items-center justify-between overflow-hidden rounded-[45px] bg-[#f3f3f3] p-6 md:p-8 shadow-[0px_5px_0px_0px_rgba(25,26,35,1.00)] outline outline-1 outline-offset-[-1px] outline-[#191a23]">
          <div className="inline-flex flex-col items-start justify-center gap-8 md:gap-10">
            <h2 className="flex flex-col items-start justify-start text-xl sm:text-2xl md:text-3xl font-medium text-black">
              <span className="rounded-lg bg-[#b9ff66] px-2">Search engine</span>
              <span className="rounded-lg bg-[#b9ff66] px-2">optimization</span>
            </h2>
            <div className="inline-flex items-center justify-start gap-2 sm:gap-3 font-['Space_Grotesk']">
              <motion.svg
                width="41"
                height="41"
                viewBox="0 0 41 41"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                whileHover={{ scale: 1.1, rotate: 10 }}
                transition={{ duration: 0.3 }}
              >
                <circle cx="20.5" cy="20.5" r="20.5" fill="black"></circle>
                <path d="M11.25 24.701C10.5326 25.1152 10.2867 26.0326 10.701 26.75C11.1152 27.4674 12.0326 27.7133 12.75 27.299L11.25 24.701ZM30.7694 16.3882C30.9838 15.588 30.5089 14.7655 29.7087 14.5511L16.6687 11.0571C15.8685 10.8426 15.046 11.3175 14.8316 12.1177C14.6172 12.9179 15.0921 13.7404 15.8923 13.9548L27.4834 17.0607L24.3776 28.6518C24.1631 29.452 24.638 30.2745 25.4382 30.4889C26.2384 30.7033 27.0609 30.2284 27.2753 29.4282L30.7694 16.3882ZM12.75 27.299L30.0705 17.299L28.5705 14.701L11.25 24.701L12.75 27.299Z" fill="#B9FF66"></path>
              </motion.svg>
              <motion.span
                className="text-base sm:text-lg md:text-xl leading-6 sm:leading-7 font-normal text-black"
                whileHover={{ scale: 1.1, color: '#b9ff66' }}
                transition={{ duration: 0.3 }}
              >
                Learn more
              </motion.span>
            </div>
          </div>
          <img className="w-[150px] sm:w-[180px] md:w-[210px]" src="seo.png" alt="Search Engine Optimization" />
        </div>

        {/*Website design */}
        <div className="inline-flex w-full max-w-[500px] items-center justify-between overflow-hidden rounded-[45px] bg-[#b9ff66] p-6 md:p-8 shadow-[0px_5px_0px_0px_rgba(25,26,35,1.00)] outline outline-1 outline-offset-[-1px] outline-[#191a23]">
          <div className="inline-flex flex-col items-start justify-center gap-8 md:gap-10">
            <h2 className="flex flex-col items-start justify-start text-xl sm:text-2xl md:text-3xl font-medium text-black">
              <span className="rounded-lg bg-[#f3f3f3] px-2">Website Design</span>
              <span className="rounded-lg bg-[#f3f3f3] px-2"></span>
            </h2>
            <div className="inline-flex items-center justify-start gap-2 sm:gap-3 font-['Space_Grotesk']">
              <motion.svg
                width="41"
                height="41"
                viewBox="0 0 41 41"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                whileHover={{ scale: 1.1, rotate: 10 }}
                transition={{ duration: 0.3 }}
              >
                <circle cx="20.5" cy="20.5" r="20.5" fill="black"></circle>
                <path d="M11.25 24.701C10.5326 25.1152 10.2867 26.0326 10.701 26.75C11.1152 27.4674 12.0326 27.7133 12.75 27.299L11.25 24.701ZM30.7694 16.3882C30.9838 15.588 30.5089 14.7655 29.7087 14.5511L16.6687 11.0571C15.8685 10.8426 15.046 11.3175 14.8316 12.1177C14.6172 12.9179 15.0921 13.7404 15.8923 13.9548L27.4834 17.0607L24.3776 28.6518C24.1631 29.452 24.638 30.2745 25.4382 30.4889C26.2384 30.7033 27.0609 30.2284 27.2753 29.4282L30.7694 16.3882ZM12.75 27.299L30.0705 17.299L28.5705 14.701L11.25 24.701L12.75 27.299Z" fill="#B9FF66"></path>
              </motion.svg>
              <motion.span
                className="text-base sm:text-lg md:text-xl leading-6 sm:leading-7 font-normal text-black"
                whileHover={{ scale: 1.1, color: '#f3f3f3' }}
                transition={{ duration: 0.3 }}
              >
                Learn more
              </motion.span>
            </div>
          </div>
          <img className="w-[150px] sm:w-[180px] md:w-[210px]" src="website.png" alt="website designing" />
        </div>

       
        {/* UI UX */}
        <div className="inline-flex w-full max-w-[500px] items-center justify-between overflow-hidden rounded-[45px] bg-[#f3f3f3] p-6 md:p-8 shadow-[0px_5px_0px_0px_rgba(25,26,35,1.00)] outline outline-1 outline-offset-[-1px] outline-[#191a23]">
          <div className="inline-flex flex-col items-start justify-center gap-8 md:gap-10">
            <h2 className="flex flex-col items-start justify-start text-xl sm:text-2xl md:text-3xl font-medium text-black">
              <span className="rounded-lg bg-[#b9ff66] px-2">Ui/Ux</span>
              <span className="rounded-lg bg-[#b9ff66] px-2">Designing</span>
            </h2>
            <div className="inline-flex items-center justify-start gap-2 sm:gap-3 font-['Space_Grotesk']">
              <motion.svg
                width="41"
                height="41"
                viewBox="0 0 41 41"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                whileHover={{ scale: 1.1, rotate: 10 }}
                transition={{ duration: 0.3 }}
              >
                <circle cx="20.5" cy="20.5" r="20.5" fill="black"></circle>
                <path d="M11.25 24.701C10.5326 25.1152 10.2867 26.0326 10.701 26.75C11.1152 27.4674 12.0326 27.7133 12.75 27.299L11.25 24.701ZM30.7694 16.3882C30.9838 15.588 30.5089 14.7655 29.7087 14.5511L16.6687 11.0571C15.8685 10.8426 15.046 11.3175 14.8316 12.1177C14.6172 12.9179 15.0921 13.7404 15.8923 13.9548L27.4834 17.0607L24.3776 28.6518C24.1631 29.452 24.638 30.2745 25.4382 30.4889C26.2384 30.7033 27.0609 30.2284 27.2753 29.4282L30.7694 16.3882ZM12.75 27.299L30.0705 17.299L28.5705 14.701L11.25 24.701L12.75 27.299Z" fill="#B9FF66"></path>
              </motion.svg>
              <motion.span
                className="text-base sm:text-lg md:text-xl leading-6 sm:leading-7 font-normal text-black"
                whileHover={{ scale: 1.1, color: '#b9ff66' }}
                transition={{ duration: 0.3 }}
              >
                Learn more
              </motion.span>
            </div>
          </div>
          <img className="w-[150px] sm:w-[180px] md:w-[210px]" src="uiux.png" alt="Ui/Ux" />
        </div>
 {/* Social Media Marketing */}
        <div className="inline-flex w-full max-w-[500px] items-center justify-between overflow-hidden rounded-[45px] bg-[#D2BEDD] p-6 md:p-8 shadow-[0px_5px_0px_0px_rgba(25,26,35,1.00)] outline outline-1 outline-offset-[-1px] outline-[#191a23]">
          <div className="inline-flex flex-col items-start justify-center gap-8 md:gap-10">
            <h2 className="flex flex-col items-start justify-start text-xl sm:text-2xl md:text-3xl font-medium text-black">
              <span className="rounded-lg bg-[#f3f3f3] px-2">Social Media</span>
              <span className="rounded-lg bg-[#f3f3f3] px-2">Marketing</span>
            </h2>
            <div className="inline-flex items-center justify-start gap-2 sm:gap-3 font-['Space_Grotesk']">
              <motion.svg
                width="41"
                height="41"
                viewBox="0 0 41 41"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                whileHover={{ scale: 1.1, rotate: 10 }}
                transition={{ duration: 0.3 }}
              >
                <circle cx="20.5" cy="20.5" r="20.5" fill="white"></circle>
                <path d="M11.25 24.701C10.5326 25.1152 10.2867 26.0326 10.701 26.75C11.1152 27.4674 12.0326 27.7133 12.75 27.299L11.25 24.701ZM30.7694 16.3882C30.9838 15.588 30.5089 14.7655 29.7087 14.5511L16.6687 11.0571C15.8685 10.8426 15.046 11.3175 14.8316 12.1177C14.6172 12.9179 15.0921 13.7404 15.8923 13.9548L27.4834 17.0607L24.3776 28.6518C24.1631 29.452 24.638 30.2745 25.4382 30.4889C26.2384 30.7033 27.0609 30.2284 27.2753 29.4282L30.7694 16.3882ZM12.75 27.299L30.0705 17.299L28.5705 14.701L11.25 24.701L12.75 27.299Z" fill="#000"></path>
              </motion.svg>
              <motion.span
                className="text-base sm:text-lg md:text-xl leading-6 sm:leading-7 font-normal text-white"
                whileHover={{ scale: 1.1, color: '#f3f3f3' }}
                transition={{ duration: 0.3 }}
              >
                Learn more
              </motion.span>
            </div>
          </div>
          <img className="w-[150px] sm:w-[180px] md:w-[210px]" src="social.png" alt="Social Media Marketing" />
        </div>

        {/* Content Creation */}
        <div className="inline-flex w-full max-w-[500px] items-center justify-between overflow-hidden rounded-[45px] bg-[#b9ff66] p-6 md:p-8 shadow-[0px_5px_0px_0px_rgba(25,26,35,1.00)] outline outline-1 outline-offset-[-1px] outline-[#191a23]">
          <div className="inline-flex flex-col items-start justify-center gap-8 md:gap-10">
            <h2 className="flex flex-col items-start justify-start text-xl sm:text-2xl md:text-3xl font-medium text-black">
              <span className="rounded-lg bg-[#f3f3f3] px-2">App</span>
              <span className="rounded-lg bg-[#f3f3f3] px-2">Development</span>
            </h2>
            <div className="inline-flex items-center justify-start gap-2 sm:gap-3 font-['Space_Grotesk']">
              <motion.svg
                width="41"
                height="41"
                viewBox="0 0 41 41"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                whileHover={{ scale: 1.1, rotate: 10 }}
                transition={{ duration: 0.3 }}
              >
                <circle cx="20.5" cy="20.5" r="20.5" fill="black"></circle>
                <path d="M11.25 24.701C10.5326 25.1152 10.2867 26.0326 10.701 26.75C11.1152 27.4674 12.0326 27.7133 12.75 27.299L11.25 24.701ZM30.7694 16.3882C30.9838 15.588 30.5089 14.7655 29.7087 14.5511L16.6687 11.0571C15.8685 10.8426 15.046 11.3175 14.8316 12.1177C14.6172 12.9179 15.0921 13.7404 15.8923 13.9548L27.4834 17.0607L24.3776 28.6518C24.1631 29.452 24.638 30.2745 25.4382 30.4889C26.2384 30.7033 27.0609 30.2284 27.2753 29.4282L30.7694 16.3882ZM12.75 27.299L30.0705 17.299L28.5705 14.701L11.25 24.701L12.75 27.299Z" fill="#B9FF66"></path>
              </motion.svg>
              <motion.span
                className="text-base sm:text-lg md:text-xl leading-6 sm:leading-7 font-normal text-black"
                whileHover={{ scale: 1.1, color: '#f3f3f3' }}
                transition={{ duration: 0.3 }}
              >
                Learn more
              </motion.span>
            </div>
          </div>
          <img className="w-[150px] sm:w-[180px] md:w-[210px]" src="appp.png" alt="App development" />
        </div>
        

 
      </div>
         <div className="flex justify-center mt-10">
      
      <Link href="/services">
            <motion.button
        className="  px-8 mb-6 sm:mb-1 py-4 border-2 cursor-pointer border-[#7D4199] text-white font-heading text-lg rounded-full bg-transparent transition-all duration-300 hover:text-[#7D4199] hover:bg-white"
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
        View All Services
      </motion.button>
      </Link>
            </div>
    </section>
  );
};

export default ServicesSection;
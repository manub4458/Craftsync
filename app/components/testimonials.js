'use client';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Image from 'next/image';
import { motion } from 'framer-motion';
const testimonials = [
  {
    text: "TheCraftsync's social media marketing boosted our engagement. Their expertise in UI/UX made our website stand out!",
    name: "Arjun Sharma",
    position: "Digital Marketing Manager",
    image: "/arjun.webp",
  },
  {
    text: "Exceptional app development by TheCraftsync. Their web design skills are top-notch and professional.",
    name: "Priya Desai",
    position: "CTO",
    image: "/priya.webp",
  },
  {
    text: "Their e-commerce site development exceeded expectations. The team’s attention to UI/UX is remarkable.",
    name: "Rahul Verma",
    position: "E-commerce Head",
    image: "/rahul.webp",
  },
  {
    text: "TheCraftsync’s web development transformed our online presence. Highly recommend their digital services!",
    name: "Neha Gupta",
    position: "Business Owner",
    image: "/neha.webp",
  },
  {
    text: "Amazing website designing by TheCraftsync. Their app development skills are a game-changer for us.",
    name: "Vikram Singh",
    position: "IT Manager",
    image: "/vikram.webp",
  },
];

const TestimonialsSection = () => {
  const row1Ref = useRef(null);
  const row2Ref = useRef(null);

  useEffect(() => {
    const row1 = row1Ref.current;
    const row2 = row2Ref.current;

    row1.innerHTML += row1.innerHTML;
    row2.innerHTML += row2.innerHTML;

    gsap.to(row1, {
      x: '-40%',
      duration: 20,
      repeat: -2,
      ease: 'none',
    });

    gsap.to(row2, {
      x: '40%',
      duration: 20,
      repeat: -2,
      ease: 'none',
    });
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
    <section className="py-20 bg-[#111] relative overflow-hidden">
      <div className="container mx-auto px-4">
   <div className="lg:col-span-6 text-center mb-10 px-4">
<motion.h1
  variants={textVariants}
  initial="initial"
  animate="animate"
  className="font-heading mt-6 word-subheading uppercase text-5xl sm:text-8xl md:text-8xl lg:text-7xl xl:text-7xl 2xl:text-[6rem] mb-6 text-center"
>
  <span className="text-white">DISCOVER WHY OUR <br/> </span>
  <span className="text-white relative inline-block flex items-center justify-center gap-2 lg:gap-4">
    CLIENTS ADORE
    <motion.img
      src="heart.png" // Replace with your image URL
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

  <span className="text-white">US</span>
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

        {/* First Row */}
        <div ref={row1Ref} className="flex space-x-6 mb-8">
          {testimonials.map((testimonial, i) => (
            <div key={i} className="bg-[#1A1A1A] p-6 rounded-2xl shadow-lg min-w-[300px] md:min-w-[350px] max-w-[300px] flex flex-col">
              <p className="text-gray-400 mb-4 text-sm md:text-base">
                {testimonial.text}
              </p>
              <div className="border-t border-gray-600 my-4"></div>
              <div className="flex items-center gap-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={50}
                  height={50}
                  className="rounded-full h-12 w-12 object-cover"
                />
                <div>
                  <p className="text-white font-semibold">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Second Row */}
        <div ref={row2Ref} className="flex space-x-6">
          {testimonials.map((testimonial, i) => (
            <div key={i} className="bg-[#1A1A1A] p-6 rounded-2xl shadow-lg min-w-[300px] md:min-w-[350px] max-w-[300px] flex flex-col">
              <p className="text-gray-400 mb-4 text-sm md:text-base">
                {testimonial.text}
              </p>
              <div className="border-t border-gray-600 my-4"></div>
              <div className="flex items-center gap-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={50}
                  height={50}
                  className="rounded-full h-12 w-12 object-cover"
                />
                <div>
                  <p className="text-white font-semibold">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="hidden md:block absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-[#040404] via-[#040404] to-transparent pointer-events-none"></div>
      <div className="hidden md:block absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-[#040404] via-[#040404] to-transparent pointer-events-none"></div>
      <div className="flex justify-center mt-10">


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
  Read All Reviews
</motion.button>
      </div>
    </section>
  );
};

export default TestimonialsSection;
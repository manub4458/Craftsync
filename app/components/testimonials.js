'use client';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

const testimonials = [
  {
    text: "I have a business of tiles and marbles and had a best experience with The Craft Sync! These guys not just do digital marketing, but also guide like a partner. Gave me free business advice too, which actually helped a lot. Super supportive team, always available, always helpful. My business got good results, more inquiries coming. Highly recommended!",
    name: "Nitin Pal",
    rating: 5,
    image: "/t1.png",
  },
  {
    text: "If you need top-notch digital marketing without spending a fortune, The Craft Sync is the way to go! They've helped my business grow with smart strategies and expert marketing. Feels like having an actual business partner, not just a service provider. Best digital marketing company in Haridwar and Uttarakhand!",
    name: "Manav Tyagi",
    rating: 5,
    image: "/t2.png",
  },
  {
    text: "The Craft Sync might be a small company, but man, they deliver like the big guys! Super fast, super effective, and way more affordable. They handle all my digital stuff—social media, website, marketing—you name it. Feels more like a business partner than just a service. Always there, even late nights, plus they give free advice that actually works! Definitely recommend them!",
    name: "Paradise Uttarakhand",
    rating: 5,
    image: "/t3.png",
  },
  {
    text: "I recently gotta chance to with The Craft Sync, their innovative ideas, technical expertise, and commitment to quality is excellent. Their team delivers scalable, future-proof solutions while maintaining excellent communication and responsiveness. With a strong focus on customer collaboration and timely execution, they are a reliable choice for any software development needs. Highly recommended",
    name: "Winston Vivek",
    rating: 5,
    image: "/t4.png",
  },
  {
    text: "Working with The Craft Sync has been a fantastic experience for us at Paradise Bliss Tours! 🌟Initially, we were just starting and budget was a big concern, but Manik and his team truly supported us by offering very reasonable pricing without compromising on quality.Unhone sirf hamare expectations poore nahi kiye, balki kaafi had tak exceed bhi kiya. 😇",
    name: "Paradise Bliss Tours",
    rating: 5,
    image: "/t5.png",
  },
  {
    text: "I had pleasure of working with the craft sync and I must say this is the best digital marketing agency in Haridwar. Me and my friend wants to run a campaign related to property dealing, and the craft sync helped us very well getting the good leads.",
    name: "Lakshya Chauhan",
    rating: 5,
    image: "/t6.png",
  },
];

const testimonials2 = [
  {
    text: "The Craft Sync transformed our online presence completely! From zero social media visibility to thousands of engaged followers. Their content strategy is brilliant and they understand our brand voice perfectly. ROI has been incredible - we've seen 300% increase in online inquiries. Professional, creative, and results-driven team!",
    name: "Ravi Sharma",
    rating: 5,
    image: "/vikram.webp",
  },
  {
    text: "Outstanding web development services! The Craft Sync built our e-commerce platform from scratch and it's been running flawlessly for months. Their attention to detail is remarkable - every feature works perfectly. Customer support is top-notch, always quick to respond and solve any issues. Highly professional team!",
    name: "Priya Singh",
    rating: 5,
    image: "/t12.jpg",
  },
  {
    text: "Been working with The Craft Sync for SEO services and the results speak for themselves. Our website now ranks on first page for multiple keywords. Organic traffic has doubled in just 4 months! They provide detailed monthly reports and their strategies are transparent. Best investment for our digital growth!",
    name: "Amit Kumar",
    rating: 5,
    image: "/arjun.webp",
  },
  {
    text: "The Craft Sync helped us launch our startup with a bang! Complete branding, website, and digital marketing strategy - everything was handled professionally. Their team feels like an extension of our company. Budget-friendly services with premium quality results. Couldn't ask for better partners!",
    name: "Sonia Verma",
    rating: 5,
    image: "/t10.jpg",
  },
  {
    text: "Amazing experience with The Craft Sync's social media management! Our Instagram and Facebook engagement has skyrocketed. They create such creative content that perfectly represents our restaurant. Booking inquiries have increased significantly. Team is very responsive and understands our local market well!",
    name: "Anjali Sharma",
    rating: 5,
    image: "/t11.jpg",
  },
  {
    text: "The Craft Sync's graphic design services are exceptional! All our marketing materials, logos, and brochures look so professional now. They captured our vision perfectly and delivered even better than expected. Quick turnaround time and very reasonable pricing. Definitely our go-to design partner!",
    name: "Neha Gupta",
    rating: 5,
    image: "/priya.webp",
  },
];

const renderStars = (count) => (
  <div className="flex items-center gap-1 mt-1">
    {[...Array(count)].map((_, i) => (
      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
        <polygon points="10,1 12.59,7.36 19.51,7.36 13.96,11.63 16.55,17.99 10,13.72 3.45,17.99 6.04,11.63 0.49,7.36 7.41,7.36" />
      </svg>
    ))}
  </div>
);

const InfiniteRow = ({ testimonials, reverse }) => (
  <div
    className={`overflow-hidden w-full`}
    style={{ maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)' }}
  >
    <div
      className={`flex space-x-6`}
      style={{
        animation: `${reverse ? 'scrollReverse' : 'scrollForward'} 20s linear infinite`,
        willChange: 'transform',
      }}
    >
      {[...testimonials, ...testimonials].map((testimonial, i) => (
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
              {renderStars(testimonial.rating)}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const TestimonialsSection = () => {
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
    <section className="py-2 sm:py-20 bg-[#111] relative overflow-hidden">
      <style>
        {`
          @keyframes scrollForward {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes scrollReverse {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }
        `}
      </style>
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
        <InfiniteRow testimonials={testimonials} reverse={false} />
        {/* Add space between rows */}
        <div className="h-8" /> {/* You can adjust 'h-8' for more/less space */}
        {/* Second Row with different testimonials */}
        <InfiniteRow testimonials={testimonials2} reverse={true} />
      </div>
      <div className="hidden md:block absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-[#040404] via-[#040404] to-transparent pointer-events-none"></div>
      <div className="hidden md:block absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-[#040404] via-[#040404] to-transparent pointer-events-none"></div>
      <div className="flex justify-center mt-10">
        <Link href="/reviews" >
        <motion.button
          className="  px-8 py-4 border-2 cursor-pointer border-[#7D4199] text-white font-heading text-lg rounded-full bg-transparent transition-all duration-300 hover:text-[#7D4199] hover:bg-white"
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
        </Link>
      </div>
    </section>
  );
};

export default TestimonialsSection;
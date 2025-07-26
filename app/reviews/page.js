'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, Heart, ArrowRight } from 'lucide-react';

const testimonials = [
  {
    text: "I have a business of tiles and marbles and had a best experience with The Craft Sync! These guys not just do digital marketing, but also guide like a partner. Gave me free business advice too, which actually helped a lot. Super supportive team, always available, always helpful. My business got good results, more inquiries coming. Highly recommended!",
    name: "Nitin Pal",
    rating: 5,
    image: "/t1.png",
    category: "Business Owner",
    featured: true
  },
  {
    text: "If you need top-notch digital marketing without spending a fortune, The Craft Sync is the way to go! They've helped my business grow with smart strategies and expert marketing. Feels like having an actual business partner, not just a service provider. Best digital marketing company in Haridwar and Uttarakhand!",
    name: "Manav Tyagi",
    rating: 5,
    image: "t2.png",
    category: "Entrepreneur"
  },
  {
    text: "The Craft Sync might be a small company, but man, they deliver like the big guys! Super fast, super effective, and way more affordable. They handle all my digital stuff—social media, website, marketing—you name it. Feels more like a business partner than just a service. Always there, even late nights, plus they give free advice that actually works! Definitely recommend them!",
    name: "Paradise Uttarakhand",
    rating: 5,
    image: "t3.png",
    category: "Tourism Business"
  },
  {
    text: "I recently gotta chance to with The Craft Sync, their innovative ideas, technical expertise, and commitment to quality is excellent. Their team delivers scalable, future-proof solutions while maintaining excellent communication and responsiveness. With a strong focus on customer collaboration and timely execution, they are a reliable choice for any software development needs. Highly recommended",
    name: "Winston Vivek",
    rating: 5,
    image: "t4.png",
    category: "Tech Professional",
    featured: true
  },
  {
    text: "Working with The Craft Sync has been a fantastic experience for us at Paradise Bliss Tours! 🌟Initially, we were just starting and budget was a big concern, but Manik and his team truly supported us by offering very reasonable pricing without compromising on quality.Unhone sirf hamare expectations poore nahi kiye, balki kaafi had tak exceed bhi kiya. 😇",
    name: "Paradise Bliss Tours",
    rating: 5,
    image: "t5.png",
    category: "Travel Agency"
  },
  {
    text: "I had pleasure of working with the craft sync and I must say this is the best digital marketing agency in Haridwar. Me and my friend wants to run a campaign related to property dealing, and the craft sync helped us very well getting the good leads.",
    name: "Lakshya Chauhan",
    rating: 5,
    image: "t6.png",
    category: "Real Estate"
  }
];

const renderStars = (count) => (
  <div className="flex items-center gap-1">
    {[...Array(count)].map((_, i) => (
      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
    ))}
  </div>
);

const TestimonialCard = ({ testimonial, index, isLarge = false }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut"
      }
    }
  };

  const shortText = testimonial.text.length > 120 ? 
    testimonial.text.substring(0, 120) + "..." : 
    testimonial.text;

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ 
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
      className={`
        relative group cursor-pointer transition-all duration-300
        ${isLarge ? 
          'bg-gradient-to-br from-[#7D4199]/10 via-[#1A1A1A] to-[#1A1A1A] border-2 border-[#7D4199]/30' : 
          'bg-[#1A1A1A] border border-gray-700/50'
        }
        rounded-3xl p-6 hover:border-[#7D4199]/50 overflow-hidden
        ${isLarge ? 'min-h-[320px]' : 'min-h-[280px]'}
        flex flex-col justify-between
      `}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      {/* Quote Icon */}
      <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity">
        <Quote className="w-8 h-8 text-[#7D4199]" />
      </div>

      {/* Gradient Overlay for Featured Cards */}
      {isLarge && (
        <div className="absolute inset-0 bg-gradient-to-br from-[#7D4199]/5 to-transparent rounded-3xl" />
      )}

      <div className="relative z-10">
        {/* Category Badge */}
        <div className="mb-4">
          <span className="inline-block px-3 py-1 text-xs font-medium text-[#7D4199] bg-[#7D4199]/10 rounded-full border border-[#7D4199]/20">
            {testimonial.category}
          </span>
        </div>

        {/* Testimonial Text */}
        <motion.p 
          className="text-gray-300 text-sm leading-relaxed mb-6"
          animate={{ height: isExpanded ? 'auto' : 'auto' }}
        >
          {isExpanded || testimonial.text.length <= 120 ? testimonial.text : shortText}
        </motion.p>

        {/* Expand Button */}
        {testimonial.text.length > 120 && (
          <button 
            className="text-[#7D4199] text-xs hover:text-[#9D61B9] transition-colors mb-4 flex items-center gap-1"
            onClick={(e) => {
              e.stopPropagation();
              setIsExpanded(!isExpanded);
            }}
          >
            {isExpanded ? 'Show Less' : 'Read More'}
            <ArrowRight className={`w-3 h-3 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
          </button>
        )}
      </div>

      {/* User Info */}
      <div className="relative z-10 flex items-center gap-4 pt-4 border-t border-gray-700/30">
        <div className="relative">
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-12 h-12 rounded-full object-cover ring-2 ring-[#7D4199]/20"
          />
          {isLarge && (
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#7D4199] rounded-full flex items-center justify-center">
              <Star className="w-2 h-2 text-white fill-current" />
            </div>
          )}
        </div>
        <div className="flex-1">
          <h4 className="text-white font-semibold text-sm">{testimonial.name}</h4>
          <div className="flex items-center gap-2 mt-1">
            {renderStars(testimonial.rating)}
            <span className="text-gray-500 text-xs">({testimonial.rating}.0)</span>
          </div>
        </div>
      </div>

      {/* Hover Effect Glow */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#7D4199]/0 to-[#7D4199]/0 group-hover:from-[#7D4199]/5 group-hover:to-transparent transition-all duration-300" />
    </motion.div>
  );
};

const TestimonialsBentoGrid = () => {
  const textVariants = {
    initial: { opacity: 0, y: 30 },
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
    initial: { opacity: 0, y: 20 },
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
    <section className="py-12 sm:py-20 bg-[#111] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#7D4199]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#7D4199]/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
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

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {/* Featured Large Card - Spans 2 columns */}
          <div className="lg:col-span-2 xl:col-span-2">
            <TestimonialCard 
              testimonial={testimonials[0]} 
              index={0} 
              isLarge={true}
            />
          </div>
          
          {/* Regular Cards */}
          <TestimonialCard testimonial={testimonials[1]} index={1} />
          <TestimonialCard testimonial={testimonials[2]} index={2} />
          
          {/* Another Featured Card */}
          <TestimonialCard testimonial={testimonials[3]} index={3} />
          
          {/* Wide Card - Spans 2 columns on larger screens */}
          <div className="lg:col-span-2">
            <TestimonialCard 
              testimonial={testimonials[4]} 
              index={4} 
              isLarge={true}
            />
          </div>
          
          <TestimonialCard testimonial={testimonials[5]} index={5} />
        </div>

        {/* Stats Section */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {[
            { number: "10+", label: "Happy Clients" },
            { number: "5.0", label: "Average Rating" },
            { number: "100%", label: "Satisfaction Rate" },
            { number: "24/7", label: "Support Available" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-6 bg-[#1A1A1A] rounded-2xl border border-gray-700/50 hover:border-[#7D4199]/30 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default TestimonialsBentoGrid;
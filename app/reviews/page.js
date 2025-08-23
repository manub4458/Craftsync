'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Quote, ArrowRight } from 'lucide-react';

const testimonials = [
    {
    text: "The team did a fantastic job bringing my vision to life. They built a seamless, user-friendly web app with excellent UI/UX design.",
    name: "Balkees Abderrehman",
    company: "Business Owner",
    designation: "Forbes Under 30",
    image: "/forbes.png",
    category: "Entrepreneur",
    featured: true,
  },
  {
    text: "TheCraftSync delivered exceptional results for our business. Professional, reliable, and always responsive to our needs.",
    name: "Nitin Pal",
    company: "Tiles & Marbles",
    designation: "CEO",
    image: "/t1.png",
    category: "Business Owner",
    featured: true,
  },
  {
    text: "Outstanding digital marketing services with excellent ROI. The team feels like true business partners.",
    name: "Meucart",
    company: "Business Owner",
    designation: "Founder",
    image: "/logo12.avif",
    category: "Entrepreneur",
  },
  {
    text: "Fast, effective, and affordable. They handle everything seamlessly - social media, website, marketing. Highly recommended!",
    name: "Paradise Uttarakhand",
    company: "Tourism",
    designation: "Managing Director",
    image: "/t3.png",
    category: "Tourism Business",
  },

  {
    text: "Innovative solutions with excellent technical expertise. Great communication and timely delivery every time.",
    name: "FPO Connect",
    company: "Tech Consultant",
    designation: "CTO",
    image: "/logo13.png",
    category: "Tech Professional",
  },
  {
    text: "Amazing support from day one! Quality work at reasonable pricing. They exceeded our expectations completely.",
    name: "Paradise Bliss Tours",
    company: "Travel Agency",
    designation: "Operations Manager",
    image: "/t5.png",
    category: "Travel Agency",
  },
  {
    text: "Best digital marketing agency in Haridwar! Helped us generate quality leads for our property business.",
    name: "Lakshya Chauhan",
    company: "Real Estate",
    designation: "Marketing Director",
    image: "/t6.png",
    category: "Real Estate",
  },
  {
    text: "Transformed our online presence completely! 300% increase in inquiries. Creative and results-driven team.",
    name: "ROR",
    company: "Digital Services",
    designation: "Chief Marketing Officer",
    image: "/logo8.jpg",
    category: "Digital Services",
  },
  {
    text: "Flawless e-commerce platform development. Excellent customer support and attention to detail.",
    name: "OSexifi",
    company: "E-commerce",
    designation: "CEO",
    image: "/logo5.png",
    category: "E-commerce",
  },
  {
    text: "First page rankings achieved in 4 months. Organic traffic doubled! Transparent and effective SEO strategies.",
    name: "Beards & Shears",
    company: "Grooming Services",
    designation: "Business Owner",
    image: "/beard.png",
    category: "Grooming Services",
  },
  {
    text: "Complete startup launch solution - branding, website, marketing. Professional team, premium quality results.",
    name: "IISM",
    company: "Education",
    designation: "Director",
    image: "/logo9.png",
    category: "Education",
  },
  {
    text: "Stunning, user-friendly e-commerce website delivered on time. Perfect understanding of our requirements.",
    name: "Kalpraag",
    company: "E-commerce",
    designation: "Product Manager",
    image: "/logo11.png",
    category: "E-commerce",
  },
];

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
        ease: "easeOut",
      },
    },
  };

  const shortText =
    testimonial.text.length > 120
      ? testimonial.text.substring(0, 120) + "..."
      : testimonial.text;

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.2 },
      }}
      className={`
        relative group cursor-pointer transition-all duration-300
        ${
          isLarge
            ? 'bg-gradient-to-br from-[#7D4199]/10 via-[#1A1A1A] to-[#1A1A1A] border-2 border-[#7D4199]/30'
            : 'bg-[#1A1A1A] border border-gray-700/50'
        }
        rounded-3xl p-6 hover:border-[#7D4199]/50 overflow-hidden
        ${isLarge ? 'min-h-[320px]' : 'min-h-[280px]'}
        flex flex-col justify-between
      `}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity">
        <Quote className="w-8 h-8 text-[#7D4199]" />
      </div>

      {isLarge && (
        <div className="absolute inset-0 bg-gradient-to-br from-[#7D4199]/5 to-transparent rounded-3xl" />
      )}

      <div className="relative z-10">
        <div className="mb-4">
          <span className="inline-block px-3 py-1 text-xs font-medium text-[#7D4199] bg-[#7D4199]/10 rounded-full border border-[#7D4199]/20">
            {testimonial.category}
          </span>
        </div>

        <motion.p
          className="text-gray-300 text-sm leading-relaxed mb-6"
          animate={{ height: isExpanded ? 'auto' : 'auto' }}
        >
          {isExpanded || testimonial.text.length <= 120 ? testimonial.text : shortText}
        </motion.p>

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

      <div className="relative z-10 flex items-center gap-4 pt-4 border-t border-gray-700/30">
        <div className="relative">
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-12 h-12 rounded-full object-cover ring-2 ring-[#7D4199]/20"
          />
          {isLarge && (
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#7D4199] rounded-full" />
          )}
        </div>
        <div className="flex-1">
          <h4 className="text-white font-semibold text-sm">{testimonial.name}</h4>
          <p className="text-gray-500 text-xs">{testimonial.designation}</p>
        </div>
      </div>

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
        ease: "easeOut",
      },
    },
  };

  const subtextVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-12 sm:py-20 bg-[#111] relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#7D4199]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#7D4199]/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="lg:col-span-6 text-center mb-10 px-4">
          <motion.h1
            variants={textVariants}
            initial="initial"
            animate="animate"
            className="font-heading mt-6 word-subheading uppercase text-5xl sm:text-8xl md:text-8xl lg:text-7xl xl:text-7xl 2xl:text-[6rem] mb-6 text-center"
          >
            <span className="text-white">DISCOVER WHY OUR <br /> </span>
            <span className="text-white relative inline-block flex items-center justify-center gap-2 lg:gap-4">
              CLIENTS ADORE
              <motion.img
                src="heart.png"
                alt="transform icon"
                className="w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 inline-block"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 1.2,
                  ease: "backOut",
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          <div className="lg:col-span-2 xl:col-span-2">
            <TestimonialCard testimonial={testimonials[0]} index={0} isLarge={true} />
          </div>
          <TestimonialCard testimonial={testimonials[1]} index={1} />
          <TestimonialCard testimonial={testimonials[2]} index={2} />
          <TestimonialCard testimonial={testimonials[3]} index={3} isLarge={true} />
          <div className="lg:col-span-2">
            <TestimonialCard testimonial={testimonials[4]} index={4} isLarge={true} />
          </div>
          <TestimonialCard testimonial={testimonials[5]} index={5} />
          <TestimonialCard testimonial={testimonials[6]} index={6} />
          <div className="lg:col-span-2 xl:col-span-2">
            <TestimonialCard testimonial={testimonials[7]} index={7} isLarge={true} />
          </div>
          <TestimonialCard testimonial={testimonials[8]} index={8} />
          <TestimonialCard testimonial={testimonials[9]} index={9} />
          <TestimonialCard testimonial={testimonials[10]} index={10} />
          <div className="lg:col-span-2">
            <TestimonialCard testimonial={testimonials[11]} index={11} isLarge={true} />
          </div>
        </div>

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
            { number: "24/7", label: "Support Available" },
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
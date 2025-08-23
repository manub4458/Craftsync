'use client';
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    text: "TheCraftSync delivered exceptional results for our business. Professional, reliable, and always responsive to our needs.",
    name: "Nitin Pal",
    company: "Tiles & Marbles",
    designation: "CEO",
    image: "/t1.png",
  },
  {
    text: "Outstanding digital marketing services with excellent ROI. The team feels like true business partners.",
    name: "Meucart",
    company: "Business Owner",
    designation: "Founder",
    image: "/logo12.avif",
  },
  {
    text: "Fast, effective, and affordable. They handle everything seamlessly - social media, website, marketing. Highly recommended!",
    name: "Paradise Uttarakhand",
    company: "Tourism",
    designation: "Managing Director",
    image: "/t3.png",
  },
  {
    text: "The team did a fantastic job bringing my vision to life. They built a seamless, user-friendly web app with excellent UI/UX design.",
    name: "Balkees Abderrehman",
    company: "Business Owner",
    designation: "Forbes Under 30",
    image: "/forbes.png",
  },
  {
    text: "Innovative solutions with excellent technical expertise. Great communication and timely delivery every time.",
    name: "FPO Connect",
    company: "Tech Consultant",
    designation: "CTO",
    image: "/logo13.png",
  },
  {
    text: "Amazing support from day one! Quality work at reasonable pricing. They exceeded our expectations completely.",
    name: "Paradise Bliss Tours",
    company: "Travel Agency",
    designation: "Operations Manager",
    image: "/t5.png",
  },
  {
    text: "Best digital marketing agency in Haridwar! Helped us generate quality leads for our property business.",
    name: "Lakshya Chauhan",
    company: "Real Estate",
    designation: "Marketing Director",
    image: "/t6.png",
  },
];

const testimonials2 = [
  {
    text: "Transformed our online presence completely! 300% increase in inquiries. Creative and results-driven team.",
    name: "ROR",
    company: "Digital Services",
    designation: "Chief Marketing Officer",
    image: "/logo8.jpg",
  },
  {
    text: "Flawless e-commerce platform development. Excellent customer support and attention to detail.",
    name: "OSexifi",
    company: "E-commerce",
    designation: "CEO",
    image: "/logo5.png",
  },
  {
    text: "First page rankings achieved in 4 months. Organic traffic doubled! Transparent and effective SEO strategies.",
    name: "Beards & Shears",
    company: "Grooming Services",
    designation: "Business Owner",
    image: "/beard.png",
  },
  {
    text: "Complete startup launch solution - branding, website, marketing. Professional team, premium quality results.",
    name: "IISM",
    company: "Education",
    designation: "Director",
    image: "/logo9.png",
  },
  {
    text: "Stunning, user-friendly e-commerce website delivered on time. Perfect understanding of our requirements.",
    name: "Kalpraag",
    company: "E-commerce",
    designation: "Product Manager",
    image: "/logo11.png",
  },
  {
    text: "Exceptional graphic design services! Professional marketing materials with quick turnaround and great pricing.",
    name: "FPCL",
    company: "Marketing",
    designation: "Creative Director",
    image: "/logo10.png",
  },
];

const InfiniteRow = ({ testimonials, reverse }) => {
  const gradients = [
    'from-purple-500/10 to-blue-500/5',
    'from-orange-500/10 to-pink-500/5',
    'from-teal-500/10 to-green-500/5',
    'from-indigo-500/10 to-purple-500/5',
  ];

  return (
    <div
      className="overflow-hidden w-full"
      style={{ maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)' }}
    >
      <div
        className="flex space-x-4"
        style={{
          animation: `${reverse ? 'scrollReverse' : 'scrollForward'} 35s linear infinite`,
          willChange: 'transform',
        }}
      >
        {[...testimonials, ...testimonials].map((testimonial, i) => {
          const gradientClass = gradients[i % gradients.length];
          return (
            <div
              key={`${testimonial.name}-${i}`}
              className={`bg-gradient-to-br ${gradientClass} backdrop-blur-sm p-6 rounded-2xl shadow-xl min-w-[300px] max-w-[300px] h-[250px] flex flex-col justify-between relative overflow-hidden hover:transform hover:-translate-y-2 transition-all duration-500 border border-white/10 hover:border-white/20 hover:shadow-2xl`}
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)',
              }}
            >
              <div className="absolute top-4 right-4 text-white/20">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M10 8c-3.3 0-6 2.7-6 6v10h8V14h-4c0-1.1.9-2 2-2V8zm12 0c-3.3 0-6 2.7-6 6v10h8V14h-4c0-1.1.9-2 2-2V8z" />
                </svg>
              </div>
              <div className="text-gray-100 text-sm leading-relaxed font-normal pt-4">
                {testimonial.text}
              </div>
              <div className="mt-auto pt-4">
                <div className="border-t border-white/20 mb-4"></div>
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="rounded-full h-12 w-12 object-cover border-2 border-white/30"
                    />
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-gray-900"></div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white font-semibold text-sm mb-1">{testimonial.name}</p>
                    <p className="text-gray-300 text-xs">{testimonial.designation}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const TestimonialsSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const heading = section.querySelector('.heading');
    const subtext = section.querySelector('.subtext');
    const heart = section.querySelector('.heart-image');
    const button = section.querySelector('.review-button');

    // Heading animation
    gsap.fromTo(
      heading,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: heading,
          start: 'top 80%',
          toggleActions: 'play none none none',
          once: true,
        },
      }
    );

    // Subtext animation
    gsap.fromTo(
      subtext,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: subtext,
          start: 'top 80%',
          toggleActions: 'play none none none',
          once: true,
        },
      }
    );

    // Heart image animation
    gsap.fromTo(
      heart,
      { opacity: 0, scale: 0 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: heart,
          start: 'top 80%',
          toggleActions: 'play none none none',
          once: true,
        },
      }
    );

    // Button animation
    gsap.fromTo(
      button,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: button,
          start: 'top 80%',
          toggleActions: 'play none none none',
          once: true,
        },
      }
    );

    // Button hover and tap animations
    const buttonTl = gsap.timeline({ paused: true });
    buttonTl.to(button, {
      scale: 1.05,
      duration: 0.3,
      ease: 'power2.out',
    });

    const buttonTapTl = gsap.timeline({ paused: true });
    buttonTapTl.to(button, {
      scale: 0.95,
      duration: 0.2,
      ease: 'power2.out',
    });

    const handleMouseEnter = () => {
      button.style.boxShadow = '0 0 0 8px rgba(125, 65, 153, 0.2)';
      buttonTl.play();
    };

    const handleMouseLeave = () => {
      button.style.boxShadow = 'none';
      buttonTl.reverse();
    };

    const handleMouseDown = () => buttonTapTl.play();
    const handleMouseUp = () => buttonTapTl.reverse();

    button.addEventListener('mouseenter', handleMouseEnter);
    button.addEventListener('mouseleave', handleMouseLeave);
    button.addEventListener('mousedown', handleMouseDown);
    button.addEventListener('mouseup', handleMouseUp);

    return () => {
      button.removeEventListener('mouseenter', handleMouseEnter);
      button.removeEventListener('mouseleave', handleMouseLeave);
      button.removeEventListener('mousedown', handleMouseDown);
      button.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-2 sm:py-20 bg-[#111] relative overflow-hidden">
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
        <div className="lg:col-span-6 text-center mb-16 px-4">
          <h1 className="heading font-heading mt-6 word-subheading uppercase text-5xl sm:text-8xl md:text-8xl lg:text-7xl xl:text-7xl 2xl:text-[6rem] mb-8 text-center">
            <span className="text-white">DISCOVER WHY OUR <br /> </span>
            <span className="text-white relative inline-block flex items-center justify-center gap-2 lg:gap-4">
              CLIENTS ADORE
              <img
                src="heart.png"
                alt="transform icon"
                className="heart-image w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 inline-block"
              />
            </span>
            <span className="text-white">US</span>
          </h1>
          <p className="subtext text-gray-300 font-paragraph text-xl sm:text-xl max-w-3xl mx-auto leading-relaxed opacity-90">
            We&apos;re your friendly digital partners, making complex tech simple and delivering results that matter to your business growth.
          </p>
        </div>
        <InfiniteRow testimonials={testimonials} reverse={false} />
        <div className="h-12" />
        <InfiniteRow testimonials={testimonials2} reverse={true} />
      </div>
      <div className="hidden md:block absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-[#111] via-[#111] to-transparent pointer-events-none z-10"></div>
      <div className="hidden md:block absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-[#111] via-[#111] to-transparent pointer-events-none z-10"></div>
      <div className="flex justify-center mt-16">
        <Link href="/reviews">
          <button
            className="review-button px-8 py-4 border-2 cursor-pointer border-[#7D4199] text-white font-heading text-lg rounded-full bg-transparent transition-all duration-300 hover:text-[#7D4199] hover:bg-white hover:shadow-lg"
            style={{
              boxShadow: 'none',
              transition: 'all 0.3s ease',
            }}
          >
            Read All Reviews
          </button>
        </Link>
      </div>
    </section>
  );
};

export default TestimonialsSection;
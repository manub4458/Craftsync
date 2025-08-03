'use client';
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image'; // Import Next.js Image component
import { ExternalLink, ArrowRight } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const ProjectSection = () => {
  const [activeProject, setActiveProject] = useState(0);
  const sectionRef = useRef(null);

  const projects = [
    {
      id: 1,
      name: "Barista Cafe",
      description: "Premium coffee experience with modern design and user-friendly interface",
      image: "/p1.png",
      live: "https://www.barista.co.in/",
    },
    {
      id: 2,
      name: "Paradise Uttarakhand",
      description: "Beautiful travel website showcasing the natural beauty of Uttarakhand",
      image: "/p2.png",
      live: "https://www.paradiseuttarakhand.com/",
    },
    {
      id: 3,
      name: "Avish Dynamics",
      description: "Corporate website with clean design and professional presentation",
      image: "/p3.png",
      live: "https://avishdynamics.com/",
    },
    {
      id: 4,
      name: "Paradise Bliss Tours",
      description: "Travel booking platform with intuitive user experience",
      image: "/p4.png",
      live: "https://paradiseblisstours.com/",
    },
    {
      id: 5,
      name: "Beards & Shears",
      description: "Modern grooming service website with booking functionality",
      image: "/p5.png",
      live: "https://beardsnshears.in/",
    }
  ];

  // Intersection Observer for project cards
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setActiveProject(index);
          }
        });
      },
      { 
        threshold: 0.5,
        rootMargin: "-20% 0px -20% 0px"
      }
    );

    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  // GSAP animations for section header
  useEffect(() => {
    const header = sectionRef.current.querySelector('.header-content');
    gsap.fromTo(
      header,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: header,
          start: 'top 80%',
          toggleActions: 'play none none none',
          once: true,
        },
      }
    );
  }, []);

  return (
    <div ref={sectionRef} className="relative bg-[#111] min-h-screen">
      {/* Section Header */}
      <div className="relative z-10 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="header-content text-center">
            <h2 className="text-5xl font-heading md:text-7xl font-bold text-[#FE7743] mb-6">
              Our Work
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Showcasing our latest projects and creative solutions
            </p>
          </div>
        </div>
      </div>

      {/* Projects Container */}
      <div className="relative z-10 pb-20">
        {projects.map((project, index) => (
          <ProjectCard 
            key={project.id}
            project={project}
            index={index}
            isActive={activeProject === index}
          />
        ))}
      </div>
    </div>
  );
};

const ProjectCard = ({ project, index, isActive }) => {
  const cardRef = useRef(null);

  // GSAP animations for project card
  useEffect(() => {
    const info = cardRef.current.querySelector('.project-info');
    const image = cardRef.current.querySelector('.project-image');
    const title = cardRef.current.querySelector('.project-title');
    const description = cardRef.current.querySelector('.project-description');
    const cta = cardRef.current.querySelector('.project-cta');
    const hoverIcon = cardRef.current.querySelector('.hover-icon');

    // Info animations
    gsap.fromTo(
      info,
      { x: index % 2 === 0 ? -50 : 50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: info,
          start: 'top 80%',
          toggleActions: 'play none none none',
          once: true,
        },
      }
    );

    // Title, description, and CTA staggered animations
    gsap.fromTo(
      [title, description, cta],
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: info,
          start: 'top 80%',
          toggleActions: 'play none none none',
          once: true,
        },
      }
    );

    // Image animation
    gsap.fromTo(
      image,
      { x: index % 2 === 0 ? 50 : -50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: image,
          start: 'top 80%',
          toggleActions: 'play none none none',
          once: true,
        },
      }
    );

    // Hover animations
    const imageContainer = image.querySelector('.image-container');
    const imageElement = image.querySelector('.next-image-container');
    const overlay = image.querySelector('.overlay');
    
    const tl = gsap.timeline({ paused: true });
    tl.to(imageContainer, {
      y: -8,
      duration: 0.3,
      ease: 'power2.out',
    })
      .to(imageContainer, {
        borderColor: '#4B5563',
        duration: 0.3,
        ease: 'power2.out',
      }, 0)
      .to(imageElement, {
        scale: 1.05,
        duration: 0.5,
        ease: 'power2.out',
      }, 0)
      .to(overlay, {
        opacity: 1,
        duration: 0.5,
        ease: 'power2.out',
      }, 0)
      .to(hoverIcon, {
        opacity: 1,
        scale: 1.1,
        rotate: 45,
        duration: 0.3,
        ease: 'power2.out',
      }, 0);

    image.addEventListener('mouseenter', () => tl.play());
    image.addEventListener('mouseleave', () => tl.reverse());

    // CTA hover animation
    const ctaTl = gsap.timeline({ paused: true });
    ctaTl.to(cta, {
      y: -2,
      scale: 1.05,
      backgroundColor: '#E5E7EB',
      duration: 0.3,
      ease: 'power2.out',
    })
      .to(cta.querySelector('.cta-icon'), {
        x: 4,
        y: -4,
        duration: 0.3,
        ease: 'power2.out',
      }, 0);

    cta.addEventListener('mouseenter', () => ctaTl.play());
    cta.addEventListener('mouseleave', () => ctaTl.reverse());

    return () => {
      image.removeEventListener('mouseenter', () => tl.play());
      image.removeEventListener('mouseleave', () => tl.reverse());
      cta.removeEventListener('mouseenter', () => ctaTl.play());
      cta.removeEventListener('mouseleave', () => ctaTl.reverse());
    };
  }, []);

  return (
    <div
      ref={cardRef}
      data-index={index}
      className="project-card relative py-16"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Project Info */}
          <div className={`project-info space-y-8 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
            {/* Project Number */}
            <div className="text-7xl font-bold text-gray-800 mb-4">
              0{index + 1}
            </div>
            
            {/* Project Title */}
            <h3 className="project-title text-4xl md:text-5xl font-bold text-white mb-6">
              {project.name}
            </h3>
            
            {/* Description */}
            <p className="project-description text-lg text-gray-400 leading-relaxed mb-8">
              {project.description}
            </p>

            {/* CTA Button */}
            <a 
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="project-cta group inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-semibold rounded-full transition-all duration-300"
            >
              <span>View Project</span>
              <ExternalLink 
                size={18} 
                className="cta-icon transition-transform duration-300" 
              />
            </a>
          </div>

          {/* Project Image */}
          <div className={`project-image ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
            <div className="image-container relative bg-gray-900 rounded-2xl overflow-hidden border border-gray-800">
              <div className="aspect-[4/3] relative next-image-container">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={index === 0} // Prioritize the first image for faster loading
                />
                
                {/* Hover Overlay */}
                <div className="overlay absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0" />
                
                {/* Hover Icon */}
                <div className="hover-icon absolute top-6 right-6 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0">
                  <ArrowRight size={20} className="text-white" />
                </div>
              </div>
            </div>
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
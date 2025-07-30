'use client';
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const ProjectSection = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const [originalScrollY, setOriginalScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  
  const scrollbarRef = useRef(null);
  const thumbRef = useRef(null);
  const sectionRef = useRef(null);
  const isNavigatingRef = useRef(false);
  const touchStartY = useRef(0);

  // Sample projects data with background colors
  const projects = [
    {
      id: 1,
      name: "BARISTA CAFE",
      image: "/p1.png",
      live: "https://www.barista.co.in/",
      bgGradient: "bg-[#FE7743]"
    },
    {
      id: 2,
      name: "PARADISE UTTARAKHAND",
      image: "/p2.png",
      live: "https://www.paradiseuttarakhand.com/",
      bgGradient: "bg-[#7D4199]"
    },
    {
      id: 3,
      name: "AVISH DYNAMICS",
      image: "/p3.png",
      live: "https://avishdynamics.com/",
      bgGradient: "bg-black"
    },
    {
      id: 4,
      name: "PARADISE BLISS TOURS",
      image: "/p4.png",
      live: "https://paradiseblisstours.com/",
      bgGradient: "bg-green-900"
    },
    {
      id: 5,
      name: "BEARDS & SHEARDS",
      image: "/p5.png",
      live: "https://beardsnshears.in/",
      bgGradient: "from-green-300 via-green-900 to-zinc-900"
    }
  ];

  // Check if mobile on mount and window resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Handle touch events for mobile
  useEffect(() => {
    if (!isMobile) return;

    const handleTouchStart = (e) => {
      if (!sectionRef.current || isNavigatingRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const isInSection = rect.top <= 0 && rect.bottom >= window.innerHeight;
      
      if (isInSection) {
        touchStartY.current = e.touches[0].clientY;
      }
    };

    const handleTouchMove = (e) => {
      if (!sectionRef.current || isNavigatingRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const isInSection = rect.top <= 0 && rect.bottom >= window.innerHeight;
      
      if (isInSection && touchStartY.current !== 0) {
        e.preventDefault();
        
        const touchY = e.touches[0].clientY;
        const deltaY = touchStartY.current - touchY;
        
        if (Math.abs(deltaY) > 50) { // Threshold for swipe
          isNavigatingRef.current = true;
          
          if (!isFixed) {
            setOriginalScrollY(window.scrollY);
            setIsFixed(true);
          }

          const direction = deltaY > 0 ? 1 : -1;
          
          setCurrentProject(prev => {
            const newProject = prev + direction;
            
            if (newProject < 0) {
              setTimeout(() => {
                setIsFixed(false);
                setCurrentProject(0);
                window.scrollTo(0, originalScrollY);
                setTimeout(() => {
                  window.scrollBy(0, -100);
                }, 50);
              }, 100);
              return 0;
            }
            
            if (newProject >= projects.length) {
              setTimeout(() => {
                setIsFixed(false);
                setCurrentProject(projects.length - 1);
                const sectionBottom = sectionRef.current.offsetTop + sectionRef.current.offsetHeight;
                window.scrollTo(0, sectionBottom);
              }, 100);
              return projects.length - 1;
            }
            
            return newProject;
          });

          touchStartY.current = 0;
          setTimeout(() => {
            isNavigatingRef.current = false;
          }, 300);
        }
      }
    };

    const handleTouchEnd = () => {
      touchStartY.current = 0;
    };

    document.addEventListener('touchstart', handleTouchStart, { passive: false });
    document.addEventListener('touchmove', handleTouchMove, { passive: false });
    document.addEventListener('touchend', handleTouchEnd);

    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isMobile, isFixed, originalScrollY, projects.length]);

  // Handle scrollbar drag
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isDragging || !scrollbarRef.current) return;

      const rect = scrollbarRef.current.getBoundingClientRect();
      const y = e.clientY - rect.top;
      const percentage = Math.max(0, Math.min(1, y / rect.height));
      const newProject = Math.floor(percentage * projects.length);
      
      setCurrentProject(Math.min(newProject, projects.length - 1));
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, projects.length]);

  // Handle scroll and wheel events for desktop
  useEffect(() => {
    if (isMobile) return;

    const handleWheel = (e) => {
      if (!sectionRef.current || isNavigatingRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const sectionHeight = window.innerHeight;
      
      const isInSection = rect.top <= 0 && rect.bottom >= sectionHeight;
      
      if (isInSection) {
        e.preventDefault();
        e.stopPropagation();
        
        isNavigatingRef.current = true;
        
        if (!isFixed) {
          setOriginalScrollY(window.scrollY);
          setIsFixed(true);
        }

        const direction = e.deltaY > 0 ? 1 : -1;
        
        setCurrentProject(prev => {
          const newProject = prev + direction;
          
          if (newProject < 0) {
            setTimeout(() => {
              setIsFixed(false);
              setCurrentProject(0);
              window.scrollTo(0, originalScrollY);
              setTimeout(() => {
                window.scrollBy(0, -100);
              }, 50);
            }, 100);
            return 0;
          }
          
          if (newProject >= projects.length) {
            setTimeout(() => {
              setIsFixed(false);
              setCurrentProject(projects.length - 1);
              const sectionBottom = sectionRef.current.offsetTop + sectionRef.current.offsetHeight;
              window.scrollTo(0, sectionBottom);
            }, 100);
            return projects.length - 1;
          }
          
          return newProject;
        });

        setTimeout(() => {
          isNavigatingRef.current = false;
        }, 300);
      }
    };

    const handleScroll = () => {
      if (!sectionRef.current || isNavigatingRef.current || isFixed) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const threshold = 50;
      
      if (rect.top <= threshold && rect.bottom >= window.innerHeight - threshold) {
        return;
      }
      
      if (isFixed && (rect.top > threshold || rect.bottom < window.innerHeight - threshold)) {
        setIsFixed(false);
      }
    };

    document.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      document.removeEventListener('wheel', handleWheel);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMobile, isFixed, originalScrollY, projects.length]);

  // Handle body scroll lock
  useEffect(() => {
    if (isFixed) {
      const scrollY = window.scrollY;
      
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
      
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    }

    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
    };
  }, [isFixed]);

  // Handle scrollbar click
  const handleScrollbarClick = (e) => {
    if (!scrollbarRef.current || e.target === thumbRef.current) return;
    
    const rect = scrollbarRef.current.getBoundingClientRect();
    const y = e.clientY - rect.top;
    const percentage = y / rect.height;
    const newProject = Math.floor(percentage * projects.length);
    
    setCurrentProject(Math.min(newProject, projects.length - 1));
  };

  const currentProjectData = projects[currentProject];

  return (
    <section 
      ref={sectionRef}
      className={`relative h-screen bg-gradient-to-br ${currentProjectData.bgGradient} overflow-hidden transition-all duration-1000 ${
        isFixed ? 'fixed inset-0 z-50' : ''
      }`}
    >
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Custom Scrollbar - Desktop only */}
      {!isMobile && (
        <div className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 z-20">
          <div className="flex flex-col items-center gap-4">
            <div
              ref={scrollbarRef}
              className="relative w-0.5 h-60 md:h-80 bg-white/10 rounded-full cursor-pointer"
              onClick={handleScrollbarClick}
            >
              <motion.div
                ref={thumbRef}
                className="absolute w-1 bg-[#D2BFDD] rounded-full cursor-grab active:cursor-grabbing shadow-lg"
                style={{
                  left: '-1px',
                  top: 0,
                }}
                animate={{
                  height: `${((currentProject + 1) / projects.length) * 100}%`,
                  boxShadow: isDragging 
                    ? '0 0 20px rgba(210, 191, 221, 0.6)'
                    : '0 0 10px rgba(210, 191, 221, 0.4)'
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                onMouseDown={() => setIsDragging(true)}
                whileHover={{ scale: 1.5, width: '6px' }}
                whileTap={{ scale: 0.9 }}
              />
              
              {projects.map((_, index) => (
                <div
                  key={index}
                  className={`absolute w-1.5 h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    index <= currentProject 
                      ? 'bg-[#D2BFDD] scale-125' 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                  style={{
                    left: '50%',
                    top: `${(index / (projects.length - 1)) * 100}%`,
                    transform: 'translate(-50%, -50%)'
                  }}
                  onClick={() => setCurrentProject(index)}
                />
              ))}
            </div>

            <div className="text-white/60 text-xs md:text-sm font-medium">
              <span className="text-white font-bold">{String(currentProject + 1).padStart(2, '0')}</span>
              <span className="mx-1">/</span>
              <span>{String(projects.length).padStart(2, '0')}</span>
            </div>
          </div>
        </div>
      )}

      {/* Main content container */}
      <div className={`relative h-full flex items-center justify-center px-4 sm:px-6 md:px-8 ${!isMobile ? 'pr-16 md:pr-24' : ''}`}>
        {/* Section Heading */}
        <h2
          className="absolute top-6 sm:top-8 left-4 sm:left-8 md:left-4 text-4xl sm:text-5xl font-bold text-white font-heading text-center md:text-left w-full md:w-auto"
          style={{
            background: 'linear-gradient(135deg, #ffffff 0%, #e5e7eb 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}
        >
          Our Work
        </h2>
        
        {/* Central layout */}
        <div className="max-w-6xl w-full">
          {/* Mobile Layout */}
          {isMobile ? (
            <div className="flex flex-col items-center text-center h-full justify-center space-y-8">
              {/* Project Image */}
              <div className="relative w-full max-w-sm">
                <div className="relative w-full h-64 sm:h-80">
                  {projects.map((project, index) => (
                    <motion.div
                      key={project.id}
                      className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ 
                        opacity: index === currentProject ? 1 : 0,
                        scale: index === currentProject ? 1 : 0.8
                      }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-10" />
                      <div className="absolute inset-0 rounded-2xl border-2 border-white/10 z-20" />
                      <Image
                        src={project.image}
                        alt={project.name}
                        width={384}
                        height={320}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Project Content */}
              <div className="space-y-6">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentProject}
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -30, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="text-4xl sm:text-5xl font-black text-white mb-2 opacity-20">
                      0{currentProject + 1}
                    </div>
                    
                    <h1 
                      className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-6 font-heading"
                      style={{
                        background: 'linear-gradient(135deg, #ffffff 0%, #e5e7eb 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                      }}
                    >
                      {currentProjectData.name}
                    </h1>

                    <Link href={currentProjectData.live} passHref>
                      <button
                        className="relative px-6 py-3 sm:px-8 sm:py-4 bg-transparent border-2 border-white text-white font-semibold text-base sm:text-lg rounded-full overflow-hidden transition-all duration-500 ease-in-out group hover:scale-105 hover:shadow-[0_0_15px_rgba(254,119,67,0.4)]"
                      >
                        <span className="absolute inset-0 bg-[#FE7743] scale-0 group-hover:scale-100 origin-center transition-transform duration-500 ease-out rounded-full"></span>
                        <span className="relative flex items-center gap-3 group-hover:text-white transition-colors duration-500">
                          Visit Project
                          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                        </span>
                      </button>
                    </Link>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          ) : (
            /* Desktop Layout */
            <div className="grid grid-cols-12 gap-8 items-center h-full">
              <div className="col-span-5">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentProject}
                    initial={{ x: -80, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 80, opacity: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                  >
                    <motion.div 
                      className="text-4xl lg:text-6xl font-black text-white mb-4 leading-none"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 0.1 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                    >
                      0{currentProject + 1}
                    </motion.div>
                    
                    <motion.h1 
                      className="text-4xl lg:text-6xl font-bold text-white leading-tight mb-8 font-heading"
                      initial={{ y: 30, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.6 }}
                      style={{
                        background: 'linear-gradient(135deg, #ffffff 0%, #e5e7eb 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                      }}
                    >
                      {currentProjectData.name}
                    </motion.h1>

                    <Link href={currentProjectData.live} passHref>
                      <button
                        className="relative font-heading cursor-pointer px-6 py-3 lg:px-8 lg:py-4 bg-transparent border-2 border-white hover:border-black text-white font-semibold text-base lg:text-lg rounded-full overflow-hidden transition-all duration-500 ease-in-out group hover:scale-105 hover:shadow-[0_0_15px_rgba(254,119,67,0.4)]"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                      >
                        <span className="absolute inset-0 bg-white scale-0 group-hover:scale-100 origin-center transition-transform duration-500 ease-out rounded-full"></span>
                        <span className="relative flex items-center gap-3 group-hover:text-black transition-colors duration-500">
                          Visit Project
                          <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                        </span>
                      </button>
                    </Link>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="col-span-7 flex justify-center">
                <div className="relative w-full max-w-2xl">
                  <motion.div
                    className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-xl"
                    animate={{ 
                      rotate: 360,
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                      scale: { duration: 4, repeat: Infinity }
                    }}
                  />
                  
                  <motion.div
                    className="absolute -bottom-12 -left-12 w-24 h-24 bg-gradient-to-br from-pink-500/20 to-orange-500/20 rounded-full blur-lg"
                    animate={{ 
                      rotate: -360,
                      y: [0, -20, 0]
                    }}
                    transition={{ 
                      rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                      y: { duration: 3, repeat: Infinity }
                    }}
                  />

                  <div className="relative w-full h-[28rem]">
                    {projects.map((project, index) => (
                      <motion.div
                        key={project.id}
                        className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl"
                        initial={{ y: 100, opacity: 0, rotateX: 45 }}
                        animate={{ 
                          y: index === currentProject ? 0 : index < currentProject ? -120 : 100,
                          opacity: index === currentProject ? 1 : 0,
                          rotateX: index === currentProject ? 0 : 45,
                          scale: index === currentProject ? 1 : 0.9
                        }}
                        transition={{ 
                          duration: 0.8, 
                          ease: [0.25, 0.46, 0.45, 0.94],
                          delay: index === currentProject ? 0.1 : 0
                        }}
                        style={{
                          zIndex: index === currentProject ? 10 : projects.length - Math.abs(index - currentProject),
                          transformStyle: 'preserve-3d',
                          perspective: '1000px'
                        }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-10" />
                        <div className="absolute inset-0 rounded-3xl border-2 border-white/10 z-20" />
                        <Image
                          src={project.image}
                          alt={project.name}
                          width={672}
                          height={448}
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {isFixed && (
          <motion.div
            className="absolute top-4 sm:top-6 left-4 sm:left-6 text-white/80 text-xs sm:text-sm flex items-center gap-2 sm:gap-3 bg-black/20 backdrop-blur-sm px-3 py-2 sm:px-4 sm:py-2 rounded-full"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span>{isMobile ? 'Swipe' : 'Scroll'} to navigate projects</span>
            <div className="text-xs text-white/60">
              {currentProject + 1}/{projects.length}
            </div>
          </motion.div>
        )}

        <div className="absolute bottom-6 sm:bottom-12 left-1/2 transform -translate-x-1/2">
          <div className="flex gap-3 sm:gap-4">
            {projects.map((_, index) => (
              <motion.button
                key={index}
                className={`relative transition-all duration-500 cursor-pointer ${
                  index === currentProject 
                    ? 'w-8 sm:w-12 h-2 sm:h-3' 
                    : 'w-2 sm:w-3 h-2 sm:h-3'
                }`}
                onClick={() => setCurrentProject(index)}
                whileHover={{ scale: 1.2 }}
              >
                <div className={`w-full h-full rounded-full transition-all duration-500 ${
                  index === currentProject 
                    ? 'bg-[#D2BFDD]' 
                    : 'bg-white/30 hover:bg-white/50'
                }`} />
                {index === currentProject && (
                  <motion.div
                    className="absolute inset-0 rounded-full bg-[#D2BFDD] blur-sm"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
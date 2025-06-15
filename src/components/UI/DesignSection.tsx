import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './DesignSection.css';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const DesignSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const animTitleRef = useRef<HTMLDivElement>(null);
  const animDescrRef = useRef<HTMLDivElement>(null);
  const arrowPathRef = useRef<SVGPathElement>(null);
  const functionsWrapperRef = useRef<HTMLDivElement>(null);
  const gradientRef = useRef<HTMLImageElement>(null);
  const leftContentRef = useRef<HTMLDivElement>(null);
  const rightContentRef = useRef<HTMLDivElement>(null);  useEffect(() => {
    const section = sectionRef.current;
    const animTitle = animTitleRef.current;
    const animDescr = animDescrRef.current;
    const arrowPath = arrowPathRef.current;
    const functionsWrapper = functionsWrapperRef.current;
    const gradient = gradientRef.current;
    const leftContent = leftContentRef.current;
    const rightContent = rightContentRef.current;

    if (!section || !arrowPath || !functionsWrapper) return;

    // Create a master timeline for better control and synchronization
    const masterTimeline = gsap.timeline({
      defaults: { ease: 'power3.out' },
      paused: true,
    });

    // Title and description animations
    if (animTitle) {
      masterTimeline.fromTo(animTitle,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
        },
        0
      );
    }

    if (animDescr) {
      masterTimeline.fromTo(animDescr,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
        },
        0.2 // Slight delay after title animation
      );
    }

    // Create scroll trigger to control master timeline
    ScrollTrigger.create({
      trigger: section,
      start: 'top 80%',
      end: 'center 20%',
      onEnter: () => masterTimeline.play(),
      onLeaveBack: () => masterTimeline.reverse(),
      onRefresh: self => {
        // Update animation when ScrollTrigger refreshes
        if (self.progress > 0) masterTimeline.progress(self.progress);
      }
    });

    // Arrow path animation
    const pathLength = arrowPath.getTotalLength();
    gsap.set(arrowPath, {
      strokeDasharray: pathLength,
      strokeDashoffset: pathLength,
    });

    ScrollTrigger.create({
      trigger: functionsWrapper,
      start: 'top 80%',
      end: 'bottom 20%',
      scrub: true,      onUpdate: (self) => {
        const progress = self.progress;
        arrowPath.style.strokeDashoffset = `${pathLength - pathLength * progress}`;
      },
    });    // Side content animations - appear alongside the arrow as you scroll
    if (leftContent && rightContent) {
      const leftItems = leftContent.querySelectorAll('.content-item');
      const rightItems = rightContent.querySelectorAll('.content-item');
      
      // Hide all items initially
      gsap.set(leftItems, { opacity: 0, x: -80, scale: 0.8 });
      gsap.set(rightItems, { opacity: 0, x: 80, scale: 0.8 });
      
      // Create a timeline for each content item to appear at specific points along the arrow path
      ScrollTrigger.create({
        trigger: functionsWrapper,
        start: 'top 70%',
        end: 'bottom 20%',
        scrub: 0.5,
        onUpdate: (self) => {
          const progress = self.progress;
          
          // Left content items appear first
          if (progress > 0.2) {
            gsap.to(leftItems[0], { opacity: 1, x: 0, scale: 1, duration: 0.5 });
          }
          if (progress > 0.35) {
            gsap.to(rightItems[0], { opacity: 1, x: 0, scale: 1, duration: 0.5 });
          }
          if (progress > 0.5) {
            gsap.to(leftItems[1], { opacity: 1, x: 0, scale: 1, duration: 0.5 });
          }
          if (progress > 0.65) {
            gsap.to(rightItems[1], { opacity: 1, x: 0, scale: 1, duration: 0.5 });
          }
          if (progress > 0.8) {
            gsap.to(leftItems[2], { opacity: 1, x: 0, scale: 1, duration: 0.5 });
            gsap.to(rightItems[2], { opacity: 1, x: 0, scale: 1, duration: 0.5 });
          }
        }
      });
    }    // Function elements animation
    const nonMainFunctions = functionsWrapper.querySelectorAll('.function:not(.function-main)');
    const mainFunction = functionsWrapper.querySelector('.function.function-main') as HTMLElement;

    if (nonMainFunctions.length) {
      // Apply original positioning logic to each function
      nonMainFunctions.forEach((element) => {
        let xPercent, yPercent;
        
        switch (element.getAttribute('class')) {
          case 'function function1': // Website
            xPercent = '-55%';
            yPercent = '-115%';
            break;
          case 'function function2': // Digital Marketing
            xPercent = '55%';
            yPercent = '-115%';
            break;
          case 'function function3': // App
            xPercent = '117%';
            yPercent = '0';
            break;
          case 'function function4': // Branding
            xPercent = '55%';
            yPercent = '115%';
            break;
          case 'function function5': // UX/UI
            xPercent = '-55%';
            yPercent = '115%';
            break;
          case 'function function6': // 3D/2D
            xPercent = '-111%';
            yPercent = '0';
            break;
          default:
            xPercent = '0';
            yPercent = '0';
        }

        // Create the movement animation
        const moveAnimation = gsap.fromTo(
          element,
          { y: 0, x: 0 },
          { y: yPercent, x: xPercent }
        );        // ScrollTrigger for movement and opacity
        ScrollTrigger.create({
          trigger: '.design-functions',
          start: '900px center', // Start much later to position at arrow end
          end: '1500px center',   // Extend the range even further
          scrub: true,
          animation: moveAnimation,
          onEnter: () => {
            (element as HTMLElement).style.opacity = '1';
            gsap.to(element, {
              scale: 1.1,
              duration: 0.4,
              ease: "back.out(1.7)",
              yoyo: true,
              repeat: 1
            });
          },
          onLeave: () => {
            (element as HTMLElement).style.opacity = '1';
          },
          onEnterBack: () => {
            (element as HTMLElement).style.opacity = '1';
            gsap.to(element, {
              scale: 1.1,
              duration: 0.4,
              ease: "back.out(1.7)",
              yoyo: true,
              repeat: 1
            });
          },          onLeaveBack: () => {
            (element as HTMLElement).style.opacity = '0';
          },
          onKill: () => {
            // Animation cleanup handled by ScrollTrigger
          },
        });
      });      // Main function (Creativity) animations
      if (mainFunction) {
        const mainBg = mainFunction.querySelector('.bg') as HTMLElement;
        
        if (mainBg) {
          // Background opacity animation (keep width consistent)
          const bgAnimation = gsap.fromTo(
            mainBg,
            { opacity: 0 },
            { opacity: 1 }
          );

          // Text color animation
          const colorAnimation = gsap.fromTo(
            mainFunction,
            { color: 'transparent' },
            { color: '#262626' }
          );          ScrollTrigger.create({
            trigger: '.design-functions',
            start: 'top center',
            end: '300px center',
            scrub: true,            animation: bgAnimation,
            onKill: () => {
              // Animation cleanup handled by ScrollTrigger
            },
          });          ScrollTrigger.create({
            trigger: '.design-functions',
            start: 'top center',
            end: '300px center',
            scrub: true,            animation: colorAnimation,
            onKill: () => {
              // Animation cleanup handled by ScrollTrigger
            },          });
        }
      }
    }

    // Background gradient animation
    if (gradient) {
      // Animate both width and scale for a more dramatic effect
      const gradientAnimation = gsap.fromTo(
        gradient,
        { 
          width: 0,
          scale: 0.5,
          opacity: 0.2
        },
        { 
          width: 1018,
          scale: 1.1, 
          opacity: 0.9
        }
      );
        ScrollTrigger.create({
        trigger: '.design-functions',
        start: 'center center',
        end: '1000px center',
        pin: '.design-functions-wrapper',
        scrub: true,
        animation: gradientAnimation,
        onKill: () => {
          // Animation cleanup handled by ScrollTrigger
        },      });
    }

    // Enhanced hover effects
    if (functionsWrapper) {
      const functionEls = functionsWrapper.querySelectorAll('.function');
      functionEls.forEach((element: Element) => {
      const bg = element.querySelector('.bg') as HTMLElement;
      
      if (bg) {
        element.addEventListener('mouseenter', () => {
          gsap.to(bg, {
            scale: 1.1,
            opacity: 1,
            duration: 0.3,
            ease: 'power2.out',
          });
        });        element.addEventListener('mouseleave', () => {
          gsap.to(bg, {
            scale: 1,
            opacity: 0.8,
            duration: 0.3,
            ease: 'power2.out',
          });
        });
      }
    });
    }

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const functions = [
    { name: 'Creativity', className: 'function-main' },
    { name: 'Website', className: 'function1' },
    { name: 'Digital Marketing', className: 'function2' },
    { name: 'App', className: 'function3' },
    { name: 'Branding', className: 'function4' },
    { name: 'UX/UI', className: 'function5' },
    { name: '3D/2D', className: 'function6' }
  ];
  
  return (
    <div className="section section-design" ref={sectionRef}>
      <div className="design-headings">
        <div className="container">
          <div className="pin-section">
            <div className="anim-title" ref={animTitleRef}>
              <p className="design-title animated-text">Design for you</p>
            </div>
            <div className="anim-descr" ref={animDescrRef}>
              <div className="design-description animated-text">
                A company that specializes in web design and graphics. We have been developing websites
                and creating graphics for many years and have extensive experience in these fields.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="design-functions-wrapper" id="products" ref={functionsWrapperRef}>
        <div className="container">          <svg 
            className="design-arrow" 
            xmlns="http://www.w3.org/2000/svg" 
            width="700" 
            height="1400"
            viewBox="0 0 528.499 1105.995"
          >
            <path 
              ref={arrowPathRef}
              className="design-arrow-path" 
              id="Контур_19573" 
              data-name="Контур 19573"
              d="M960,919.489s179.776,59.147,112.48,147.309-416.259,77.561-381.664,205.34,496.051,162.375,520.045,305.777-337.5,34.186-400.219,130.718S935.636,1940.165,953.4,1964.086s2.336,43.408,6.6,52.369,17.032-15.705,10.465-16.526-16.143-.547-19.974,1.094S960,2018.808,960,2018.808"
              transform="translate(-685.973 -916.333)" 
              fill="none" 
              stroke="#8b5cf6" 
              strokeLinecap="round"
              strokeWidth="3" 
            />
          </svg>          
          <div className="design-functions">
            <img 
              ref={gradientRef}
              className="gradient" 
              src="/src/assets/site-functions-bg.png"
              loading="lazy" 
              alt="gradient"
            />
              {/* Side Content */}
            <div className="arrow-side-content">
              <div className="left-content" ref={leftContentRef}>
                <div className="content-item">
                  <h3>Creative Solutions</h3>
                  <p>Innovative designs that captivate and convert</p>
                </div>
                <div className="content-item">
                  <h3>User Experience</h3>
                  <p>Intuitive interfaces designed for engagement</p>
                </div>
                <div className="content-item">
                  <h3>Brand Identity</h3>
                  <p>Cohesive visual systems that tell your story</p>
                </div>
              </div>
              
              <div className="right-content" ref={rightContentRef}>
                <div className="content-item">
                  <h3>Digital Strategy</h3>
                  <p>Data-driven approaches to maximize impact</p>
                </div>
                <div className="content-item">
                  <h3>Technology Stack</h3>
                  <p>Modern tools and frameworks for performance</p>
                </div>
                <div className="content-item">
                  <h3>Support & Growth</h3>
                  <p>Ongoing optimization and scaling solutions</p>
                </div>
              </div>
            </div>
            
            <div className="animated-functions">
              {functions.map((func, index) => (
                <div 
                  key={index} 
                  className={`function ${func.className}`}
                >
                  {func.name}
                  <div className="bg"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignSection;

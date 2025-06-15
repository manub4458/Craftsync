import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Button from '../../components/UI/Button';
import DesignSection from '../../components/UI/DesignSection';
import './Home.css';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const Home: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLElement>(null);
  const ctaRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const hero = heroRef.current;
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const buttons = buttonsRef.current;
    const visual = visualRef.current;
    const services = servicesRef.current;
    const stats = statsRef.current;
    const cta = ctaRef.current;

    if (!hero || !title || !subtitle || !buttons || !visual) return;

    // Create main timeline
    const mainTl = gsap.timeline();

    // Initial state - hide elements
    gsap.set([title, subtitle, buttons, visual], {
      opacity: 0,
      y: 60,
    });

    // Hero animations
    mainTl
      .to(title, {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'power3.out',
      })
      .to(subtitle, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
      }, '-=0.8')
      .to(buttons, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
      }, '-=0.6')
      .to(visual, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
      }, '-=0.8');

    // Parallax effect for background shapes
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const xPos = (clientX / innerWidth - 0.5) * 30;
      const yPos = (clientY / innerHeight - 0.5) * 30;

      gsap.to('.hero__bg-shape--1', {
        x: xPos * 0.5,
        y: yPos * 0.5,
        duration: 1,
        ease: 'power2.out',
      });

      gsap.to('.hero__bg-shape--2', {
        x: -xPos * 0.3,
        y: -yPos * 0.3,
        duration: 1.2,
        ease: 'power2.out',
      });

      gsap.to('.hero__bg-shape--3', {
        x: xPos * 0.7,
        y: yPos * 0.7,
        duration: 0.8,
        ease: 'power2.out',
      });
    };    // Visual card hover effect
    const visualCard = visual.querySelector('.hero__visual-card');
    let handleCardMouseMove: ((e: Event) => void) | null = null;
    let handleCardMouseLeave: (() => void) | null = null;
    
    if (visualCard) {
      handleCardMouseMove = (e: Event) => {
        const mouseEvent = e as MouseEvent;
        const rect = visualCard.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        const deltaX = (mouseEvent.clientX - centerX) / (rect.width / 2);
        const deltaY = (mouseEvent.clientY - centerY) / (rect.height / 2);

        gsap.to(visualCard, {
          rotationY: deltaX * 10,
          rotationX: -deltaY * 10,
          duration: 0.5,
          ease: 'power2.out',
        });
      };

      handleCardMouseLeave = () => {
        gsap.to(visualCard, {
          rotationY: 0,
          rotationX: 0,
          duration: 0.5,
          ease: 'power2.out',
        });
      };

      visualCard.addEventListener('mousemove', handleCardMouseMove);
      visualCard.addEventListener('mouseleave', handleCardMouseLeave);
    }

    // Scroll-triggered animations for sections
    if (services) {
      const serviceCards = services.querySelectorAll('.service-card');
      gsap.fromTo(serviceCards, 
        {
          opacity: 0,
          y: 80,
          scale: 0.8,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.2,
          scrollTrigger: {
            trigger: services,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Service title animation
      const serviceTitle = services.querySelector('.services__title');
      if (serviceTitle) {
        gsap.fromTo(serviceTitle,
          {
            opacity: 0,
            y: 50,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: serviceTitle,
              start: 'top 85%',
            },
          }
        );
      }
    }

    if (stats) {
      const statItems = stats.querySelectorAll('.stat-item');
      gsap.fromTo(statItems,
        {
          opacity: 0,
          y: 60,
          scale: 0.9,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: 'back.out(1.7)',
          stagger: 0.15,
          scrollTrigger: {
            trigger: stats,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Animate numbers counting up
      const statNumbers = stats.querySelectorAll('.stat-item__number');
      statNumbers.forEach((number) => {
        const finalText = number.textContent || '';
        const numValue = parseInt(finalText.replace(/\D/g, '')) || 0;
        
        if (numValue > 0) {
          gsap.fromTo(number, 
            { textContent: 0 },
            {
              textContent: numValue,
              duration: 2,
              ease: 'power2.out',
              snap: { textContent: 1 },
              scrollTrigger: {
                trigger: number,
                start: 'top 80%',
              },
              onUpdate: function() {
                const current = Math.round(this.targets()[0].textContent);
                if (finalText.includes('+')) {
                  number.textContent = current + '+';
                } else if (finalText.includes('/')) {
                  number.textContent = current + '/7';
                } else {
                  number.textContent = current.toString();
                }
              }
            }
          );
        }
      });
    }

    if (cta) {
      gsap.fromTo(cta.querySelector('.cta__content'),
        {
          opacity: 0,
          y: 50,
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cta,
            start: 'top 80%',
          },
        }
      );
    }    // Add event listeners
    hero.addEventListener('mousemove', handleMouseMove);    // Cleanup function
    return () => {
      hero.removeEventListener('mousemove', handleMouseMove);
      
      // Cleanup visual card listeners
      const visualCard = visual.querySelector('.hero__visual-card');
      if (visualCard && handleCardMouseMove && handleCardMouseLeave) {
        visualCard.removeEventListener('mousemove', handleCardMouseMove);
        visualCard.removeEventListener('mouseleave', handleCardMouseLeave);
      }
      
      mainTl.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const services = [
    {
      icon: '🎨',
      title: 'UI/UX Design',
      description: 'Creating intuitive and beautiful user experiences',
    },
    {
      icon: '💻',
      title: 'Web Development',
      description: 'Building responsive and performant websites',
    },
    {
      icon: '📱',
      title: 'Mobile Apps',
      description: 'Developing native and cross-platform applications',
    },
    {
      icon: '🚀',
      title: 'Digital Marketing',
      description: 'Growing your online presence and reach',
    },
  ];

  const stats = [
    { number: '150+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '5+', label: 'Years Experience' },
    { number: '24/7', label: 'Support Available' },
  ];

  return (
    <div className="home">      {/* Hero Section */}
      <section ref={heroRef} className="hero">
        <div className="hero__bg">
          <div className="hero__bg-shape hero__bg-shape--1"></div>
          <div className="hero__bg-shape hero__bg-shape--2"></div>
          <div className="hero__bg-shape hero__bg-shape--3"></div>
        </div>
        
        <div className="hero__container">
          <div className="hero__content">
            <h1 ref={titleRef} className="hero__title">
              We Craft Digital
              <span className="hero__title-accent"> Experiences</span>
              <br />
              That Inspire
            </h1>
            
            <p ref={subtitleRef} className="hero__subtitle">
              Transform your ideas into stunning digital realities. We specialize in 
              creating websites, mobile apps, and digital solutions that drive results 
              and exceed expectations.
            </p>
            
            <div ref={buttonsRef} className="hero__buttons">
              <Link to="/gallery">
                <Button variant="primary" size="large">
                  View Our Work
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="large">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
          
          <div ref={visualRef} className="hero__visual">
            <div className="hero__visual-card">
              <div className="hero__visual-content">
                <div className="hero__visual-header">
                  <div className="hero__visual-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
                <div className="hero__visual-body">
                  <div className="hero__visual-line hero__visual-line--1"></div>
                  <div className="hero__visual-line hero__visual-line--2"></div>
                  <div className="hero__visual-line hero__visual-line--3"></div>
                  <div className="hero__visual-line hero__visual-line--4"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="services">
        <div className="services__container">
          <div className="services__header">
            <h2 className="services__title">Our Services</h2>
            <p className="services__subtitle">
              We offer comprehensive digital solutions to help your business thrive online
            </p>
          </div>
          
          <div className="services__grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-card__icon">{service.icon}</div>
                <h3 className="service-card__title">{service.title}</h3>
                <p className="service-card__description">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="stats">
        <div className="stats__container">
          <div className="stats__grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-item__number">{stat.number}</div>
                <div className="stat-item__label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Section */}
      <DesignSection />

      {/* CTA Section */}
      <section ref={ctaRef} className="cta">
        <div className="cta__container">
          <div className="cta__content">
            <h2 className="cta__title">Ready to Start Your Project?</h2>
            <p className="cta__subtitle">
              Let's bring your vision to life with our expert team and proven process
            </p>
            <Link to="/contact">
              <Button variant="primary" size="large">
                Get In Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

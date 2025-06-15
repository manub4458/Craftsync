import React from 'react';
import type { TeamMember } from '../../types';
import Button from '../../components/UI/Button';
import './About.css';

const About: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      id: '1',
      name: 'Manik Bansal',
      position: 'Founder & CEO', // Changed from 'role' to 'position'
      bio: 'Passionate about creating digital experiences that make a difference. 10+ years in web development and team leadership.',
      imageUrl: '/manik.jpg', // Changed from 'image' to 'imageUrl'
      skills: ['Leadership', 'Strategy', 'Full-Stack Development'],
      social: {
        linkedin: 'https://linkedin.com/in/alexjohnson',
        twitter: 'https://twitter.com/alexjohnson',
        github: 'https://github.com/alexjohnson'
      }
    },
    {
      id: '2',
      name: 'Manav Bansal',
      position: 'Web Developer',
      bio: 'UI/UX designer with a keen eye for detail and user-centered design. Specialized in creating intuitive digital experiences.',
      imageUrl: '/manav.jpg',
      skills: ['UI/UX Design', 'Figma', 'Design Systems'],
      social: {
        linkedin: 'https://linkedin.com/in/sarahchen',
        dribbble: 'https://dribbble.com/sarahchen'
      }
    },
    {
      id: '3',
      name: 'Anshu Sharma',
      position: 'Senior Developer',
      bio: 'Full-stack developer specializing in React and Node.js. Passionate about clean code and scalable architectures.',
      imageUrl: '/anshu.jpg',
      skills: ['React', 'Node.js', 'TypeScript'],
      social: {
        linkedin: 'https://linkedin.com/in/michaelrodriguez',
        github: 'https://github.com/michaelrodriguez'
      }
    },
    {
      id: '4',
      name: 'Aryan Rajput',
      position: 'Web Developer',
      bio: 'Digital marketing expert with expertise in SEO, content strategy, and social media marketing.',
      imageUrl: '/aryan.jpg',
      skills: ['SEO', 'Content Marketing', 'Analytics'],
      social: {
        linkedin: 'https://linkedin.com/in/emilydavis',
        twitter: 'https://twitter.com/emilydavis'
      }
    }
  ];

  const values = [
    {
      icon: '💡',
      title: 'Innovation',
      description: 'We stay ahead of technology trends to deliver cutting-edge solutions.'
    },
    {
      icon: '🤝',
      title: 'Collaboration',
      description: 'We work closely with our clients as partners in their success.'
    },
    {
      icon: '🎯',
      title: 'Quality',
      description: 'We never compromise on quality and attention to detail.'
    },
    {
      icon: '🚀',
      title: 'Growth',
      description: 'We help businesses grow through effective digital strategies.'
    }
  ];

  return (
    <div className="about">
      {/* Hero Section */}
      <section className="about__hero">
        <div className="about__hero-container">
          <h1 className="about__hero-title">About CraftSync</h1>
          <p className="about__hero-subtitle">
            We are a passionate team of designers, developers, and digital strategists 
            dedicated to crafting exceptional digital experiences that drive results.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="about__story">
        <div className="about__story-container">
          <div className="about__story-content">
            <h2 className="about__story-title">Our Story</h2>
            <div className="about__story-text">
              <p>
                Founded in 2019, CraftSync began with a simple mission: to help businesses 
                create meaningful digital connections with their audiences. What started as 
                a small team of passionate developers has grown into a full-service digital 
                agency that combines creativity with technical excellence.
              </p>
              <p>
                Over the years, we've had the privilege of working with startups, established 
                businesses, and everything in between. Each project teaches us something new 
                and drives us to push the boundaries of what's possible in digital design 
                and development.
              </p>
              <p>
                Today, we're proud to be a trusted partner for businesses looking to make 
                their mark in the digital world. Our commitment to quality, innovation, 
                and client success remains at the heart of everything we do.
              </p>
            </div>
          </div>
          <div className="about__story-visual">
            <div className="about__story-card">
              <div className="about__story-stats">
                <div className="about__stat">
                  <span className="about__stat-number">150+</span>
                  <span className="about__stat-label">Projects Delivered</span>
                </div>
                <div className="about__stat">
                  <span className="about__stat-number">50+</span>
                  <span className="about__stat-label">Happy Clients</span>
                </div>
                <div className="about__stat">
                  <span className="about__stat-number">5+</span>
                  <span className="about__stat-label">Years Experience</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="about__values">
        <div className="about__values-container">
          <h2 className="about__values-title">Our Values</h2>
          <div className="about__values-grid">
            {values.map((value, index) => (
              <div key={index} className="about__value-card">
                <div className="about__value-icon">{value.icon}</div>
                <h3 className="about__value-title">{value.title}</h3>
                <p className="about__value-description">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="about__team">
        <div className="about__team-container">
          <div className="about__team-header">
            <h2 className="about__team-title">Meet Our Team</h2>
            <p className="about__team-subtitle">
              The talented individuals behind CraftSync's success
            </p>
          </div>
          
          <div className="about__team-grid">
            {teamMembers.map((member) => (
              <div key={member.id} className="about__team-card">
                <div className="about__team-image">
                  <img src={member.imageUrl} alt={member.name} />
                </div>
                <div className="about__team-info">
                  <h3 className="about__team-name">{member.name}</h3>
                  <p className="about__team-role">{member.position}</p>
                  <p className="about__team-bio">{member.bio}</p>
                  <div className="about__team-skills">
                    {member.skills.map((skill) => (
                      <span key={skill} className="about__team-skill">
                        {skill}
                      </span>
                    ))}
                  </div>                  <div className="about__team-social">
                    {member.social?.linkedin && (
                      <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin"></i>
                      </a>
                    )}
                    {member.social?.twitter && (
                      <a href={member.social.twitter} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter"></i>
                      </a>
                    )}
                    {member.social?.github && (
                      <a href={member.social.github} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github"></i>
                      </a>
                    )}
                    {member.social?.dribbble && (
                      <a href={member.social.dribbble} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-dribbble"></i>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about__cta">
        <div className="about__cta-container">
          <h2 className="about__cta-title">Ready to Work Together?</h2>
          <p className="about__cta-subtitle">
            Let's discuss how we can help bring your digital vision to life
          </p>
          <Button variant="primary" size="large">
            Start a Project
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;

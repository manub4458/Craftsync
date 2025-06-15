import React, { useState, useEffect } from 'react';
import type { ProjectItem } from '../../types';
import Card from '../../components/UI/Card';
import Button from '../../components/UI/Button';
import './Gallery.css';

const Gallery: React.FC = () => {  const [projects] = useState<ProjectItem[]>([
    {
      id: '1',
      title: 'E-Commerce Platform',
      description: 'A modern e-commerce platform with advanced features like real-time inventory, payment processing, and analytics dashboard.',
      category: 'Web Development',
      image: '/api/placeholder/400/300',
      imageUrl: '/api/placeholder/400/300',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      projectUrl: 'https://example-ecommerce.com'
    },
    {
      id: '2',
      title: 'Mobile Banking App',
      description: 'Secure mobile banking application with biometric authentication, transaction history, and budget tracking.',
      category: 'Mobile Development',
      image: '/api/placeholder/400/300',
      imageUrl: '/api/placeholder/400/300',
      tags: ['React Native', 'TypeScript', 'Firebase', 'Plaid API'],
      projectUrl: 'https://example-banking.com'
    },
    {
      id: '3',
      title: 'Digital Marketing Dashboard',
      description: 'Comprehensive dashboard for managing multiple marketing campaigns across different platforms.',
      category: 'Web Development',
      image: '/api/placeholder/400/300',
      imageUrl: '/api/placeholder/400/300',
      tags: ['Vue.js', 'Python', 'PostgreSQL', 'Docker'],
      projectUrl: 'https://example-dashboard.com'
    },
    {
      id: '4',
      title: 'Brand Identity System',
      description: 'Complete brand identity redesign including logo, color palette, typography, and brand guidelines.',
      category: 'Design',
      image: '/api/placeholder/400/300',
      imageUrl: '/api/placeholder/400/300',
      tags: ['Adobe Creative Suite', 'Figma', 'Brand Strategy'],
      projectUrl: 'https://example-brand.com'
    },
    {
      id: '5',
      title: 'Healthcare Management System',
      description: 'Patient management system for healthcare providers with appointment scheduling and medical records.',
      category: 'Web Development',
      image: '/api/placeholder/400/300',
      imageUrl: '/api/placeholder/400/300',
      tags: ['Angular', 'Spring Boot', 'MySQL', 'AWS'],
      projectUrl: 'https://example-healthcare.com'
    },
    {
      id: '6',
      title: 'Food Delivery App',
      description: 'On-demand food delivery application with real-time tracking and multiple payment options.',
      category: 'Mobile Development',
      image: '/api/placeholder/400/300',
      imageUrl: '/api/placeholder/400/300',
      tags: ['Flutter', 'Firebase', 'Google Maps API', 'PayPal'],
      projectUrl: 'https://example-food.com'
    }
  ]);

  const [filteredProjects, setFilteredProjects] = useState<ProjectItem[]>(projects);
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const categories = ['All', 'Web Development', 'Mobile Development', 'Design'];

  useEffect(() => {
    if (activeFilter === 'All') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === activeFilter));
    }
  }, [activeFilter, projects]);

  const handleFilterChange = (category: string) => {
    setActiveFilter(category);
  };

  return (
    <div className="gallery">
      <div className="gallery__container">
        <div className="gallery__header">
          <h1 className="gallery__title">Our Portfolio</h1>
          <p className="gallery__subtitle">
            Explore our latest projects and see how we've helped businesses 
            transform their digital presence
          </p>
        </div>

        <div className="gallery__filters">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeFilter === category ? 'primary' : 'ghost'}
              onClick={() => handleFilterChange(category)}
              className="gallery__filter-btn"
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="gallery__grid">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              project={project}
              onClick={() => {
                // Handle project click - could open modal or navigate to detail page
                console.log('Project clicked:', project.title);
              }}
            />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="gallery__empty">
            <h3>No projects found</h3>
            <p>Try selecting a different category</p>
          </div>
        )}

        <div className="gallery__cta">
          <h2 className="gallery__cta-title">Like What You See?</h2>
          <p className="gallery__cta-text">
            Let's discuss how we can create something amazing for your business
          </p>
          <Button variant="primary" size="large">
            Start Your Project
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
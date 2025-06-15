import React from 'react';
import type { ProjectItem } from '../../types';
import Button from './Button';
import './Card.css';

interface CardProps {
  project: ProjectItem;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({ project, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <div className="card__image-container">
        <img
          src={project.image}
          alt={project.title}
          className="card__image"
          loading="lazy"
        />
        <div className="card__overlay">
          <div className="card__overlay-content">
            <h3 className="card__title">{project.title}</h3>
            <p className="card__description">{project.description}</p>            <div className="card__technologies">
              {project.tags.map((tech) => (
                <span key={tech} className="card__tech-tag">
                  {tech}
                </span>
              ))}
            </div>
            {project.projectUrl && (
              <div className="card__actions">
                <Button
                  variant="primary"
                  size="small"
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(project.projectUrl, '_blank');
                  }}
                >
                  View Live
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="card__content">
        <h3 className="card__content-title">{project.title}</h3>
        <p className="card__content-category">{project.category}</p>
      </div>
    </div>
  );
};

export default Card;

import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', path: '/' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  const services = [
    'Web Development',
    'Mobile Apps',
    'UI/UX Design',
    'Digital Marketing',
    'Brand Identity',
    'SEO Optimization',
  ];

  const socialLinks = [
    { label: 'Facebook', url: '#', icon: 'facebook' },
    { label: 'Twitter', url: '#', icon: 'twitter' },
    { label: 'Instagram', url: '#', icon: 'instagram' },
    { label: 'LinkedIn', url: '#', icon: 'linkedin' },
    { label: 'YouTube', url: '#', icon: 'youtube' },
  ];

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__content">
          <div className="footer__section footer__section--brand">
            <h3 className="footer__brand">CraftSync</h3>
            <p className="footer__description">
              Creating digital experiences that inspire, engage, and deliver results. 
              We craft websites and applications that tell your story and drive your business forward.
            </p>
            <div className="footer__social">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  className="footer__social-link"
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className={`fab fa-${social.icon}`}></i>
                </a>
              ))}
            </div>
          </div>

          <div className="footer__section">
            <h4 className="footer__title">Quick Links</h4>
            <ul className="footer__links">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="footer__link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__section">
            <h4 className="footer__title">Services</h4>
            <ul className="footer__links">
              {services.map((service) => (
                <li key={service}>
                  <span className="footer__link">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__section">
            <h4 className="footer__title">Contact Info</h4>
            <div className="footer__contact">
              <p className="footer__contact-item">
                <i className="fas fa-envelope"></i>
                hello@craftsync.com
              </p>
              <p className="footer__contact-item">
                <i className="fas fa-phone"></i>
                +1 (555) 123-4567
              </p>
              <p className="footer__contact-item">
                <i className="fas fa-map-marker-alt"></i>
                123 Creative Street, Design City, DC 12345
              </p>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <div className="footer__bottom-content">
            <p className="footer__copyright">
              © {currentYear} CraftSync. All rights reserved.
            </p>
            <div className="footer__legal">
              <a href="#" className="footer__legal-link">Privacy Policy</a>
              <a href="#" className="footer__legal-link">Terms of Service</a>
              <a href="#" className="footer__legal-link">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

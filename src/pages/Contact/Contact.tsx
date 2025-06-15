import React, { useState, type FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import type { ContactFormData } from '../../types';
import Button from '../../components/UI/Button';
import './Contact.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
    budget: '',
    timeline: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Replace these with your actual EmailJS configuration
      const serviceId = 'your_service_id';
      const templateId = 'your_template_id';
      const publicKey = 'your_public_key';

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          company: formData.company,
          subject: formData.subject,
          message: formData.message,
          budget: formData.budget,
          timeline: formData.timeline
        },
        publicKey
      );

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        subject: '',
        message: '',
        budget: '',
        timeline: ''
      });
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      content: 'hello@craftsync.com',
      link: 'mailto:hello@craftsync.com'
    },
    {
      icon: '📞',
      title: 'Phone',
      content: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: '📍',
      title: 'Location',
      content: '123 Creative Street\nDesign City, DC 12345',
      link: 'https://maps.google.com'
    },
    {
      icon: '💬',
      title: 'Live Chat',
      content: 'Available 24/7',
      link: '#'
    }
  ];

  return (
    <div className="contact">
      {/* Hero Section */}
      <section className="contact__hero">
        <div className="contact__hero-container">
          <h1 className="contact__hero-title">Get In Touch</h1>
          <p className="contact__hero-subtitle">
            Ready to start your project? Let's discuss how we can help bring your vision to life.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="contact__content">
        <div className="contact__container">
          <div className="contact__grid">
            {/* Contact Info */}
            <div className="contact__info">
              <h2 className="contact__info-title">Let's Connect</h2>
              <p className="contact__info-text">
                We'd love to hear about your project and discuss how we can help. 
                Choose the best way to reach us below.
              </p>

              <div className="contact__info-grid">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    className="contact__info-card"
                    target={info.link.startsWith('http') ? '_blank' : '_self'}
                    rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                  >
                    <div className="contact__info-icon">{info.icon}</div>
                    <div className="contact__info-content">
                      <h3 className="contact__info-card-title">{info.title}</h3>
                      <p className="contact__info-card-text">{info.content}</p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="contact__social">
                <h3>Follow Us</h3>
                <div className="contact__social-links">
                  <a href="#" className="contact__social-link">
                    <i className="fab fa-facebook"></i>
                  </a>
                  <a href="#" className="contact__social-link">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="contact__social-link">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#" className="contact__social-link">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact__form-section">
              <form className="contact__form" onSubmit={handleSubmit}>
                <h2 className="contact__form-title">Send us a Message</h2>
                
                {submitStatus === 'success' && (
                  <div className="contact__alert contact__alert--success">
                    <i className="fas fa-check-circle"></i>
                    Thank you! Your message has been sent successfully. We'll get back to you soon.
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="contact__alert contact__alert--error">
                    <i className="fas fa-exclamation-circle"></i>
                    Sorry, there was an error sending your message. Please try again.
                  </div>
                )}

                <div className="contact__form-row">
                  <div className="contact__form-group">
                    <label htmlFor="name" className="contact__form-label">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="contact__form-input"
                      required
                    />
                  </div>
                  
                  <div className="contact__form-group">
                    <label htmlFor="email" className="contact__form-label">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="contact__form-input"
                      required
                    />
                  </div>
                </div>

                <div className="contact__form-row">
                  <div className="contact__form-group">
                    <label htmlFor="company" className="contact__form-label">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="contact__form-input"
                    />
                  </div>
                  
                  <div className="contact__form-group">
                    <label htmlFor="budget" className="contact__form-label">
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="contact__form-input"
                    >
                      <option value="">Select budget range</option>
                      <option value="5000-10000">$5,000 - $10,000</option>
                      <option value="10000-25000">$10,000 - $25,000</option>
                      <option value="25000-50000">$25,000 - $50,000</option>
                      <option value="50000+">$50,000+</option>
                    </select>
                  </div>
                </div>

                <div className="contact__form-row">
                  <div className="contact__form-group">
                    <label htmlFor="subject" className="contact__form-label">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="contact__form-input"
                      required
                    />
                  </div>
                  
                  <div className="contact__form-group">
                    <label htmlFor="timeline" className="contact__form-label">
                      Timeline
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="contact__form-input"
                    >
                      <option value="">Select timeline</option>
                      <option value="asap">ASAP</option>
                      <option value="1-month">Within 1 month</option>
                      <option value="3-months">Within 3 months</option>
                      <option value="6-months">Within 6 months</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>
                </div>

                <div className="contact__form-group">
                  <label htmlFor="message" className="contact__form-label">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="contact__form-textarea"
                    rows={6}
                    placeholder="Tell us about your project..."
                    required
                  ></textarea>
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="large"
                  isLoading={isSubmitting}
                  disabled={isSubmitting}
                  className="contact__form-submit"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="contact__faq">
        <div className="contact__faq-container">
          <h2 className="contact__faq-title">Frequently Asked Questions</h2>
          <div className="contact__faq-grid">
            <div className="contact__faq-item">
              <h3>How long does a typical project take?</h3>
              <p>Project timelines vary based on complexity, but most websites take 4-8 weeks from start to finish.</p>
            </div>
            <div className="contact__faq-item">
              <h3>Do you offer ongoing support?</h3>
              <p>Yes! We provide ongoing maintenance and support packages to keep your website running smoothly.</p>
            </div>
            <div className="contact__faq-item">
              <h3>What's included in your web development service?</h3>
              <p>Our service includes design, development, testing, deployment, and post-launch support.</p>
            </div>
            <div className="contact__faq-item">
              <h3>Can you work with existing brands/designs?</h3>
              <p>Absolutely! We can work with your existing brand guidelines or help create new ones.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
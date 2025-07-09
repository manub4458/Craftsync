'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Users, Instagram, Linkedin, Facebook, Twitter } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactPage = () => {
  // Initialize EmailJS with public key
  useEffect(() => {
    console.log('Public Key:', process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);
  }, []);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    hearAbout: '',
    message: '',
    subscribe: false
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (validateForm()) {
      try {
        await emailjs.send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
          {
            fullName: formData.fullName,
            email: formData.email,
            phone: formData.phone,
            hearAbout: formData.hearAbout || 'Not specified',
            message: formData.message,
            subscribe: formData.subscribe ? 'Yes' : 'No'
          }
        );
        alert('Message sent successfully!');
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          hearAbout: '',
          message: '',
          subscribe: false
        });
        setErrors({});
      } catch (error) {
        console.error('EmailJS error:', error.status, error.text);
        alert(`Failed to send message: ${error.text || 'Unknown error. Please try again later.'}`);
      }
    } else {
      alert('Please fill in all required fields');
    }
    setIsSubmitting(false);
  };

  // Content animation variants
  const contentVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        type: 'spring',
        stiffness: 100,
        damping: 15,
        duration: 0.4 
      } 
    }
  };

  // Button animations
  const buttonVariants = {
    hover: { 
      scale: 1.05,
      boxShadow: '0 20px 40px rgba(210, 190, 221, 0.4)',
      transition: { duration: 0.3 }
    },
    tap: { scale: 0.95 }
  };

  return (
    <div className="min-h-screen bg-[#111]  pt-20 p-8 lg:p-12 ">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Contact Info */}
          <motion.div 
            className=" space-y-4 sm:space-y-8" 
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.1 }}
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, type: 'spring' }}
            >
              <h2 className="text-sm font-bold text-white mb-2 tracking-wider">CONTACT</h2>
              <h1 className="font-display text-5xl lg:text-6xl font-black uppercase text-white leading-tight">
                Let &apos; s make <br />
                it happen{' '}
                <span className="inline-block w-12 h-12 border-2 border-white rounded-full relative overflow-hidden">
                  <img
                    src="/float.png"
                    alt="Rotating icon"
                    className="absolute inset-0 w-full h-full object-cover rounded-full"
                  />
                </span>
              </h1>
            </motion.div>

            <motion.p 
             className="text-white text-lg font-paragraph leading-7 max-w-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Need expert support with your digital strategy, UX design, website, or online marketing?
            </motion.p>

            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}         
            >
              <motion.div whileHover={{ x: 5 }} transition={{ type: 'spring', stiffness: 300 }}>
                <h3 className="text-white font-heading text-lg sm:text-2xl mb-2">GIVE US A CALL</h3>
                <a href="tel:+918433023265" className="text-white hover:underline text-lg transition-all hover:text-gray-300">
                  +91 84330 23265
                </a>
              </motion.div>

              <motion.div whileHover={{ x: 5 }} transition={{ type: 'spring', stiffness: 300 }}>
                <h3 className="text-white font-heading text-lg sm:text-2xl mb-2">SEND US AN EMAIL</h3>
                <a href="mailto:thecraftsync@gmail.com" className="text-white hover:underline text-lg transition-all hover:text-gray-300">
                  thecraftsync@gmail.com
                </a>
              </motion.div>

              <motion.div whileHover={{ x: 5 }} transition={{ type: 'spring', stiffness: 300 }}>
                <h3 className="text-white font-heading text-lg sm:text-2xl mb-2">JOIN US</h3>
                <a href="#" className="text-white hover:underline text-lg transition-all hover:text-gray-300">
                  See Vacancies
                </a>
              </motion.div>
            </motion.div>

            <motion.div 
              className="flex text-white space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              {[
                { icon: <Facebook />, href: "#" },
                { icon: <Twitter />, href: "#" },
                { icon: <Instagram />, href: "https://www.instagram.com/thecraftsync?igsh=eDI0ZHowOHVvcXYx" },
                { icon: <Linkedin />, href: "https://www.linkedin.com/company/the-craftsync/" }
              ].map(({ icon, href }, index) => (
                <motion.a 
                  key={index}
                  href={href} 
                  className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
                  whileHover={{ 
                    scale: 1.1, 
                    y: -5,
                    boxShadow: '0 10px 20px rgba(255,255,255,0.2)' 
                  }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  {icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div 
            className="bg-[#1A1A1A] bg-opacity-20 backdrop-blur-md p-8 rounded-2xl border border-white border-opacity-30 shadow-xl"
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
            whileHover={{ 
              y: -5,
              boxShadow: '0 25px 50px rgba(255,255,255,0.1)' 
            }}
          >
            <motion.h2 
              className="font-heading text-xl sm:text-3xl text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              GET IN TOUCH
            </motion.h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div 
                className="grid md:grid-cols-2 gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <div>
                  <div className="block text-white font-semibold mb-2">
                    Full Name <span className="text-red-400">*</span>
                  </div>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 bg-white bg-opacity-70 backdrop-blur-sm transition-all duration-300 hover:bg-opacity-80 ${
                      errors.fullName 
                        ? 'border-red-500 focus:ring-red-500' 
                        : 'border-gray-300 focus:ring-[#D2BEDD]'
                    }`}
                    placeholder="Enter your full name"
                  />
                  {errors.fullName && (
                    <p className="text-red-400 text-sm mt-1">{errors.fullName}</p>
                  )}
                </div>
                <div>
                  <div className="block text-white font-semibold mb-2">
                    Email Address <span className="text-red-400">*</span>
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 bg-white bg-opacity-70 backdrop-blur-sm transition-all duration-300 hover:bg-opacity-80 ${
                      errors.email 
                        ? 'border-red-500 focus:ring-red-500' 
                        : 'border-gray-300 focus:ring-[#D2BEDD]'
                    }`}
                    placeholder="Enter your email address"
                  />
                  {errors.email && (
                    <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                  )}
                </div>
              </motion.div>

              <motion.div 
                className="grid md:grid-cols-2 gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <div>
                  <div className="block text-white font-semibold mb-2">
                    Phone Number <span className="text-red-400">*</span>
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 bg-white bg-opacity-70 backdrop-blur-sm transition-all duration-300 hover:bg-opacity-80 ${
                      errors.phone 
                        ? 'border-red-500 focus:ring-red-500' 
                        : 'border-gray-300 focus:ring-[#D2BEDD]'
                    }`}
                    placeholder="Enter your phone number"
                  />
                  {errors.phone && (
                    <p className="text-red-400 text-sm mt-1">{errors.phone}</p>
                  )}
                </div>
                <div>
                  <div className="block text-white font-semibold mb-2">
                    How did you hear about us?
                  </div>
                  <select
                    name="hearAbout"
                    value={formData.hearAbout}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D2BEDD] bg-white bg-opacity-70 backdrop-blur-sm transition-all duration-300 hover:bg-opacity-80"
                  >
                    <option value="">Please Select</option>
                    <option value="google">Google Search</option>
                    <option value="social">Social Media</option>
                    <option value="referral">Referral</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <div className="block text-white font-semibold mb-2">
                  How can we help? <span className="text-red-400">*</span>
                </div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 resize-vertical bg-white bg-opacity-70 backdrop-blur-sm transition-all duration-300 hover:bg-opacity-80 ${
                    errors.message 
                      ? 'border-red-500 focus:ring-red-500' 
                      : 'border-gray-300 focus:ring-[#D2BEDD]'
                  }`}
                  placeholder="Tell us about your project or how we can help you..."
                />
                {errors.message && (
                  <p className="text-red-400 text-sm mt-1">{errors.message}</p>
                )}
              </motion.div>

              <motion.div 
                className="flex items-start space-x-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                <input
                  type="checkbox"
                  name="subscribe"
                  checked={formData.subscribe}
                  onChange={handleInputChange}
                  className="mt-1 w-4 h-4 text-[#D2BEDD] bg-gray-100 border-gray-300 rounded focus:ring-[#D2BEDD] focus:ring-2"
                />
                <div className="text-white text-sm">
                  Subscribe for the latest news and insights delivered to your inbox
                </div>
              </motion.div>

              <motion.div 
                className="flex flex-col space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-8 py-4 rounded-full font-bold transition-all duration-300 ${
                    isSubmitting
                      ? 'bg-gray-400 text-gray-700 cursor-not-allowed'
                      : 'bg-[#D2BEDD] text-black hover:bg-[#7D4199] hover:text-white'
                  }`}
                  whileHover={!isSubmitting ? { 
                    scale: 1.05, 
                    boxShadow: '0 10px 30px rgba(210, 190, 221, 0.4)' 
                  } : {}}
                  whileTap={!isSubmitting ? { scale: 0.95 } : {}}
                >
                  {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
                </motion.button>
                <p className="text-white text-sm">
                  By submitting this form I accept the{' '}
                  <a href="#" className="underline hover:no-underline text-[#D2BEDD]">Privacy Policy</a>{' '}
                  of this site.
                </p>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
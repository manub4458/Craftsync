'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone, Mail, Users, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactOverlay = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [demoMode, setDemoMode] = useState(false);
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

  // Initialize EmailJS
  useEffect(() => {
    console.log('EmailJS Config:', {
      serviceID: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      templateID: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    });
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);
  }, []);

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
        setIsOpen(false);
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

  // Circular reveal animation variants
  const overlayVariants = {
    hidden: {
      clipPath: 'circle(0% at 95% 50%)',
      opacity: 0,
    },
    visible: {
      clipPath: 'circle(150% at 95% 50%)',
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 20,
        duration: 0.8,
        when: 'beforeChildren',
        staggerChildren: 0.05,
      },
    },
    exit: {
      clipPath: 'circle(0% at 95% 50%)',
      opacity: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 30,
        duration: 0.6,
      },
    },
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
    },
    exit: { opacity: 0, y: -20, scale: 0.98, transition: { duration: 0.2 } },
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
    <>
      {/* Main Contact Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="font-display text-primary-dark fixed -right-8 -rotate-90 top-1/2 transform -translate-y-1/2 z-50 px-6 py-2 rounded-lg font-bold text-black shadow-lg overflow-hidden"
        style={{ backgroundColor: '#D2BEDD' }}
        variants={buttonVariants}
        whileHover="hover"
        whileTap="tap"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ 
          delay: 0.5, 
          type: 'spring',
        }}
      >
<<<<<<< HEAD
        <motion.span className="text-lg relative z-50">
=======
        <motion.span className="text-lg relative z-10">
>>>>>>> ab325ea9139e231b3fc5a22e631f198edc5b1150
          Let's Talk
        </motion.span>
      </motion.button>

      {/* Overlay with circular reveal */}
      <AnimatePresence>
        {(isOpen || demoMode) && (
          <motion.div
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-50 overflow-hidden"
            style={{
              originX: '95%',
              originY: '50%',
              background: 'linear-gradient(135deg, #D2BEDD 0%, #E8D5E8 50%, #F0E6F0 100%)',
            }}
          >
            <motion.div
              className="w-full h-full overflow-y-auto"
              variants={contentVariants}
            >
              <div className="min-h-screen p-8 lg:p-12 relative">
                {/* Close Button */}
                <motion.button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-6 right-6 p-3 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 transition-all duration-300 backdrop-blur-sm"
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: 90,
                    backgroundColor: 'rgba(255,255,255,0.4)' 
                  }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  transition={{ delay: 0.01 }}
                >
                  <X size={24} color="black" />
                </motion.button>

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
                        <h2 className="text-sm font-bold text-black mb-2 tracking-wider">CONTACT</h2>
<<<<<<< HEAD
                        <h1 className="font-display text-5xl lg:text-6xl font-black uppercase text-black ">
=======
                        <h1 className="font-display text-5xl lg:text-6xl font-black uppercase text-black leading-tight">
>>>>>>> ab325ea9139e231b3fc5a22e631f198edc5b1150
                          Let's make <br />
                          it happen{' '}
                          <motion.span 
                            className="inline-block w-12 h-12 border-2 border-black rounded-full relative overflow-hidden"
                          >
                            <img
                              src="/float.png"
                              alt="Rotating icon"
                              className="absolute inset-0 w-full h-full object-cover rounded-full"
                            />
                          </motion.span>
                        </h1>
                      </motion.div>

                      <motion.p 
                        className="text-black text-lg font-paragraph leading-7 max-w-md"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        Need expert support with your digital strategy, UX design, website, or online marketing?
                      </motion.p>

                      <motion.div 
                        className="space-y-3"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}         
                      >
                        <motion.div whileHover={{ x: 5 }} transition={{ type: 'spring', stiffness: 300 }}>
                          <h3 className="text-black font-heading text-lg sm:text-2xl mb-2">GIVE US A CALL</h3>
                          <a href="tel:+918433023265" className="text-black hover:underline text-lg transition-all hover:text-gray-700">
                            +91 84330 23265
                          </a>
                        </motion.div>

                        <motion.div whileHover={{ x: 5 }} transition={{ type: 'spring', stiffness: 300 }}>
                          <h3 className="text-black font-heading text-lg sm:text-2xl mb-2">SEND US AN EMAIL</h3>
                          <a href="mailto:thecraftsync@gmail.com" className="text-black hover:underline text-lg transition-all hover:text-gray-700">
                            thecraftsync@gmail.com
                          </a>
                        </motion.div>

                        <motion.div whileHover={{ x: 5 }} transition={{ type: 'spring', stiffness: 300 }}>
                          <h3 className="text-black font-heading text-lg sm:text-2xl mb-2">JOIN US</h3>
                          <a href="#" className="text-black hover:underline text-lg transition-all hover:text-gray-700">
                            See Vacancies
                          </a>
                        </motion.div>
                      </motion.div>

                      <motion.div 
                        className="flex space-x-4"
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
                            className="w-12 h-12 border-2 border-black rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300"
                            whileHover={{ 
                              scale: 1.1, 
                              y: -5,
                              boxShadow: '0 10px 20px rgba(0,0,0,0.2)' 
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
                      className="bg-white bg-opacity-20 backdrop-blur-md p-8 rounded-2xl border border-white border-opacity-30 shadow-xl"
                      variants={contentVariants}
                      initial="hidden"
                      animate="visible"
                      transition={{ delay: 0.2 }}
                      whileHover={{ 
                        y: -5,
                        boxShadow: '0 25px 50px rgba(0,0,0,0.1)' 
                      }}
                    >
                      <motion.h2 
                        className="font-heading text-xl sm:text-3xl text-black mb-6"
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
                            <div className="block text-black font-semibold mb-2">
                              Full Name <span className="text-red-500">*</span>
                            </div>
                            <input
                              type="text"
                              name="fullName"
                              value={formData.fullName}
                              onChange={handleInputChange}
                              className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 bg-white bg-opacity-70 backdrop-blur-sm transition-all duration-300 hover:bg-opacity-80 ${
                                errors.fullName 
                                  ? 'border-red-500 focus:ring-red-500' 
                                  : 'border-gray-300 focus:ring-black'
                              }`}
                              placeholder="Enter your full name"
                            />
                            {errors.fullName && (
                              <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
                            )}
                          </div>
                          <div>
                            <div className="block text-black font-semibold mb-2">
                              Email Address <span className="text-red-500">*</span>
                            </div>
                            <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 bg-white bg-opacity-70 backdrop-blur-sm transition-all duration-300 hover:bg-opacity-80 ${
                                errors.email 
                                  ? 'border-red-500 focus:ring-red-500' 
                                  : 'border-gray-300 focus:ring-black'
                              }`}
                              placeholder="Enter your email address"
                            />
                            {errors.email && (
                              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
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
                            <div className="block text-black font-semibold mb-2">
                              Phone Number <span className="text-red-500">*</span>
                            </div>
                            <input
                              type="tel"
                              name="phone"
                              value={formData.phone}
                              onChange={handleInputChange}
                              className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 bg-white bg-opacity-70 backdrop-blur-sm transition-all duration-300 hover:bg-opacity-80 ${
                                errors.phone 
                                  ? 'border-red-500 focus:ring-red-500' 
                                  : 'border-gray-300 focus:ring-black'
                              }`}
                              placeholder="Enter your phone number"
                            />
                            {errors.phone && (
                              <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                            )}
                          </div>
                          <div>
                            <div className="block text-black font-semibold mb-2">
                              How did you hear about us?
                            </div>
                            <select
                              name="hearAbout"
                              value={formData.hearAbout}
                              onChange={handleInputChange}
                              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black bg-white bg-opacity-70 backdrop-blur-sm transition-all duration-300 hover:bg-opacity-80"
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
                          <div className="block text-black font-semibold mb-2">
                            How can we help? <span className="text-red-500">*</span>
                          </div>
                          <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            rows={4}
                            className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 resize-vertical bg-white bg-opacity-70 backdrop-blur-sm transition-all duration-300 hover:bg-opacity-80 ${
                              errors.message 
                                ? 'border-red-500 focus:ring-red-500' 
                                : 'border-gray-300 focus:ring-black'
                            }`}
                            placeholder="Tell us about your project or how we can help you..."
                          />
                          {errors.message && (
                            <p className="text-red-500 text-sm mt-1">{errors.message}</p>
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
                            className="mt-1 w-4 h-4 text-black bg-gray-100 border-gray-300 rounded focus:ring-black focus:ring-2"
                          />
                          <div className="text-black text-sm">
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
                                : 'bg-black text-white hover:bg-gray-800'
                            }`}
                            whileHover={!isSubmitting ? { 
                              scale: 1.05, 
                              boxShadow: '0 10px 30px rgba(0,0,0,0.3)' 
                            } : {}}
                            whileTap={!isSubmitting ? { scale: 0.95 } : {}}
                          >
                            {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
                          </motion.button>
                          <p className="text-black text-sm">
                            By submitting this form I accept the{' '}
                            <a href="#" className="underline hover:no-underline">Privacy Policy</a>{' '}
                            of this site.
                          </p>
                        </motion.div>
                      </form>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ContactOverlay;
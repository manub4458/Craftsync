'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactOverlay = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    hearAbout: '',
    message: '',
    subscribe: false,
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email';
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
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
            subscribe: formData.subscribe ? 'Yes' : 'No',
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
          subscribe: false,
        });
        setErrors({});
      } catch (error) {
        console.error('EmailJS error:', error);
        alert('Failed to send message');
      }
    } else {
      alert('Please fill all fields');
    }

    setIsSubmitting(false);
  };

  const overlayVariants = {
    hidden: { clipPath: 'circle(0% at 95% 50%)', opacity: 0 },
    visible: {
      clipPath: 'circle(150% at 95% 50%)',
      opacity: 1,
      transition: { type: 'spring', stiffness: 100, damping: 20 },
    },
    exit: {
      clipPath: 'circle(0% at 95% 50%)',
      opacity: 0,
      transition: { type: 'spring', stiffness: 100, damping: 30 },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 80, damping: 20 } },
    exit: { opacity: 0, y: 50, transition: { type: 'spring', stiffness: 80, damping: 20 } },
  };

  return (
    <>
      {/* Open Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="font-display text-primary-dark fixed -right-8 -rotate-90 top-1/2 transform -translate-y-1/2 z-50 px-6 py-2 rounded-lg font-bold text-black shadow-lg overflow-hidden"
        style={{ backgroundColor: '#D2BEDD' }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.5, type: 'spring' }}
      >
        <motion.span className="text-lg relative z-50">Let&apos;s Talk</motion.span>
      </motion.button>

      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-50 overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #D2BEDD 0%, #E8D5E8 50%, #F0E6F0 100%)',
            }}
          >
            <motion.div className="w-full h-full overflow-y-auto" variants={contentVariants}>
              <div className="min-h-screen p-8 lg:p-12 relative">
                
                {/* Close Button */}
                <motion.button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-6 right-6 p-3 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 transition-all duration-300 backdrop-blur-sm"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  transition={{ delay: 0.01 }}
                >
                  <X size={24} color="black" />
                </motion.button>

                {/* Content */}
                <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
                  
                  {/* Left */}
                  <motion.div className="space-y-4 sm:space-y-8" variants={contentVariants}>
                    <h2 className="text-sm font-bold text-black mb-2">CONTACT</h2>
                    <h1 className="font-display text-5xl lg:text-6xl font-black uppercase text-black">
                      Let&apos;s make <br /> it happen{' '}
                      <motion.span className="inline-block w-12 h-12 border-2 border-black rounded-full relative overflow-hidden">
                        <img src="/float.png" alt="Rotating icon" className="absolute inset-0 w-full h-full object-cover rounded-full" />
                      </motion.span>
                    </h1>
                    <p className="text-black text-lg leading-7 max-w-md">
                      Need expert support with your digital strategy, UX design, website, or online marketing?
                    </p>

                    <div className="space-y-3">
                      <div>
                        <h3 className="text-black font-heading text-lg sm:text-2xl mb-2">GIVE US A CALL</h3>
                        <a href="tel:+918433023265" className="text-black hover:underline text-lg">+91 84330 23265</a>
                      </div>
                      <div>
                        <h3 className="text-black font-heading text-lg sm:text-2xl mb-2">SEND US AN EMAIL</h3>
                        <a href="mailto:thecraftsync@gmail.com" className="text-black hover:underline text-lg">thecraftsync@gmail.com</a>
                      </div>
                      <div>
                        <h3 className="text-black font-heading text-lg sm:text-2xl mb-2">JOIN US</h3>
                        <a href="#" className="text-black hover:underline text-lg">See Vacancies</a>
                      </div>
                    </div>

                    <div className="flex space-x-4">
                      {[{ icon: <Facebook />, href: "#" },
                        { icon: <Twitter />, href: "#" },
                        { icon: <Instagram />, href: "https://www.instagram.com/thecraftsync" },
                        { icon: <Linkedin />, href: "https://www.linkedin.com/company/the-craftsync/" }
                      ].map(({ icon, href }, index) => (
                        <motion.a key={index} href={href} className="w-12 h-12 border-2 border-black rounded-full flex items-center justify-center hover:bg-black hover:text-white">
                          {icon}
                        </motion.a>
                      ))}
                    </div>
                  </motion.div>

                  {/* Right Form */}
                  <div className="bg-white bg-opacity-20 backdrop-blur-md p-8 rounded-2xl border border-white border-opacity-30 shadow-xl">
                    <h2 className="font-heading text-xl sm:text-3xl text-black mb-6">GET IN TOUCH</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-black font-semibold mb-2">Full Name *</label>
                          <input type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} className="w-full p-3 border rounded-lg" placeholder="Enter your full name" />
                          {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
                        </div>
                        <div>
                          <label className="block text-black font-semibold mb-2">Email *</label>
                          <input type="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full p-3 border rounded-lg" placeholder="Enter your email" />
                          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-black font-semibold mb-2">Phone *</label>
                          <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} className="w-full p-3 border rounded-lg" placeholder="Enter your phone number" />
                          {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
                        </div>
                        <div>
                          <label className="block text-black font-semibold mb-2">How did you hear?</label>
                          <select name="hearAbout" value={formData.hearAbout} onChange={handleInputChange} className="w-full p-3 border rounded-lg">
                            <option value="">Please Select</option>
                            <option value="google">Google Search</option>
                            <option value="social">Social Media</option>
                            <option value="referral">Referral</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-black font-semibold mb-2">Message *</label>
                        <textarea name="message" value={formData.message} onChange={handleInputChange} rows={4} className="w-full p-3 border rounded-lg" placeholder="Tell us about your project..." />
                        {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
                      </div>

                      <div className="flex items-start space-x-3">
                        <input type="checkbox" name="subscribe" checked={formData.subscribe} onChange={handleInputChange} />
                        <span className="text-black text-sm">Subscribe for updates</span>
                      </div>

                      <button type="submit" disabled={isSubmitting} className="px-8 py-4 rounded-full font-bold bg-black text-white hover:bg-gray-800">
                        {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
                      </button>
                    </form>
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

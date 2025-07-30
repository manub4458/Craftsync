'use client';
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const overlayVariants = {
    hidden: { y: "100%" },
    visible: { y: 0, transition: { duration: 0.3, ease: "easeOut" } },
    exit: { y: "100%", transition: { duration: 0.3, ease: "easeIn" } },
  };

  // Menu items for mobile and initial desktop header
  const menuItems = [
    { text: "Home", href: "/" },
    { text: "Contact", href: "/contact" },
    { text: "Reviews", href: "/reviews" },
    { text: "About Us", href: "/about-us" },
    { text: "Our Services", href: "/services" },
  ];

  // Menu items for scrolled header (md+ screens)
  const scrolledMenuItems = [
    { text: "Home", href: "/" },
    { text: "About Us", href: "/about-us" },
    { text: "Our Services", href: "/services" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full font-heading z-40 transition-all duration-300 ${
        isScrolled ? "" : "bg-transparent"
      }`}
    >
      {/* Scrolled State (Visible on md+ when scrolled) */}
      <div
        className={`hidden md:flex absolute top-4 left-1/2 transform -translate-x-1/2 bg-[#111] rounded-full p-2 sm:p-3 items-center ${
          isScrolled ? "md:opacity-100" : "md:opacity-0"
        } transition-opacity duration-300`}
        style={{ minWidth: "400px", maxWidth: "98vw" }}
      >
        <Link href="/">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", damping: 15, stiffness: 300 }}
          >
            <Image
              src="/logo.png"
              alt="Company Logo"
              width={32}
              height={32}
              className="h-6 w-auto sm:h-8 mr-6"
              loading="lazy"
              decoding="async"
            />
          </motion.div>
        </Link>
        <nav className="flex flex-nowrap items-center gap-6 sm:gap-8 md:gap-10 lg:gap-7 mx-2">
          {scrolledMenuItems.map((item) => (
            <Link
              key={item.text}
              href={item.href}
              className="text-white text-xs sm:text-base md:text-lg lg:text-xl hover:text-gray-300 transition-colors whitespace-nowrap"
            >
              {item.text}
            </Link>
          ))}
        </nav>
        <Link href="/contact">
          <motion.button
            className="bg-[#7D4199] cursor-pointer text-white text-xs sm:text-sm md:text-base px-4 sm:px-5 md:px-6 py-1 sm:py-1.5 rounded-full hover:bg-purple-300 transition-colors whitespace-nowrap ml-6"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            LET&apos;S TALK
          </motion.button>
        </Link>
      </div>

      {/* Initial State (Always visible, including on mobile) */}
      <div className={`flex justify-between items-center p-4 relative w-full ${isScrolled ? 'md:hidden lg:hidden' : ''}`}>
        <Link href="/">
          <motion.div
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ type: "spring", damping: 15, stiffness: 300 }}
          >
            <Image
              src="/logo.png"
              alt="Company Logo"
              width={56}
              height={56}
              className="h-10 w-auto sm:h-12 md:h-14"
              loading="lazy"
              decoding="async"
            />
          </motion.div>
        </Link>

        <motion.button
          onClick={() => setIsOpen(true)}
          className="text-white cursor-pointer hover:scale-110 duration-100 transition-all ease-in text-2xl font-bold focus:outline-none sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-4xl"
        >
          MENU
        </motion.button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-white z-30 flex flex-col items-center justify-between p-6 sm:p-8"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="w-full flex justify-between px-2 sm:px-8 items-center">
              <motion.div
                whileHover={{ scale: 1.05, rotate: -2 }}
                transition={{ type: "spring", damping: 15, stiffness: 300 }}
              >
                <Image
                  src="/logo.png"
                  alt="Company Logo"
                  width={56}
                  height={56}
                  className="h-10 w-auto sm:h-12 md:h-14"
                  loading="lazy"
                  decoding="async"
                />
              </motion.div>
              <motion.button
                onClick={() => setIsOpen(false)}
                className="text-black cursor-pointer hover:rotate-90 rounded-full transition-all ease-in-out text-5xl focus:outline-none sm:text-9xl"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Image
                  src="/cross.png"
                  alt="Close Menu"
                  width={40}
                  height={40}
                  className="h-8 w-8 sm:h-10 sm:w-10"
                  loading="lazy"
                  decoding="async"
                />
              </motion.button>
            </div>
            <nav className="flex flex-col items-center space-y-6 text-black text-5xl gap-6 sm:text-7xl">
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, y: 50, rotate: -10 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0, 
                    rotate: 0,
                    transition: {
                      delay: index * 0.1,
                      type: "spring",
                      damping: 15,
                      stiffness: 300
                    }
                  }}
                  whileHover={{ 
                    scale: 1.05, 
                    rotate: Math.random() * 4 - 2,
                    transition: { type: "spring", damping: 10, stiffness: 400 }
                  }}
                >
                  <Link 
                    href={item.href} 
                    onClick={() => setIsOpen(false)} 
                    className="hover:text-gray-900 transition-all duration-300 relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-black after:top-0 after:left-0 after:transform after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left before:content-[''] before:absolute before:w-full before:h-0.5 before:bg-black before:bottom-0 before:left-0 before:transform before:scale-x-0 hover:before:scale-x-100 before:transition-transform before:duration-300 before:origin-left"
                  >
                    {item.text}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div></div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
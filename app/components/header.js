'use client';
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const overlayVariants = {
    hidden: { y: "100%" },
    visible: { y: 0, transition: { duration: 0.3, ease: "easeOut" } },
    exit: { y: "100%", transition: { duration: 0.3, ease: "easeIn" } },
  };

  return (
    <header className=" font-heading fixed w-full z-50 bg-transparent px-2 sm:px-10">
      <div className="flex justify-between items-center p-4">
        <img
          src="/logo.png"
          alt="Oliver Jeffers Logo"
          className="h-10 w-auto sm:h-12 md:h-14"
          loading="lazy"
          decoding="async"
        />
        <button
          onClick={() => setIsOpen(true)}
          className="text-white text-2xl font-bold focus:outline-none sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-4xl"
        >
          MENU
        </button>
      </div>
<AnimatePresence>
  {isOpen && (
    <motion.div
      className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-between p-6 sm:p-8"
      variants={overlayVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="w-full flex justify-between px-2 sm:px-8 items-center">
        <img
          src="/logo.png"
          alt="Oliver Jeffers Logo"
          className="h-10 w-auto sm:h-12 md:h-14"
          loading="lazy"
          decoding="async"
        />
        <button
          onClick={() => setIsOpen(false)}
          className="text-black text-5xl focus:outline-none sm:text-9xl"
        >
          <img
            src="/cross.png"
            alt="Close Menu"
            className="h-8 w-8 sm:h-10 sm:w-10"
            loading="lazy"
            decoding="async"
          />
        </button>
      </div>
      <nav className="flex flex-col items-center space-y-6 text-black text-5xl gap-6 sm:text-7xl">
        <Link href="/home" className="hover:text-gray-900 hover:scale-105 transition-transform duration-200 relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-black after:top-0 after:left-0 after:transform after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left before:content-[''] before:absolute before:w-full before:h-0.5 before:bg-black before:bottom-0 before:left-0 before:transform before:scale-x-0 hover:before:scale-x-100 before:transition-transform before:duration-300 before:origin-left">Home</Link>
        <Link href="/about" className="hover:text-gray-900 hover:scale-105 transition-transform duration-200 relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-black after:top-0 after:left-0 after:transform after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left before:content-[''] before:absolute before:w-full before:h-0.5 before:bg-black before:bottom-0 before:left-0 before:transform before:scale-x-0 hover:before:scale-x-100 before:transition-transform before:duration-300 before:origin-left">About Us</Link>
        <Link href="/contact" className="hover:text-gray-900 hover:scale-105 transition-transform duration-200 relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-black after:top-0 after:left-0 after:transform after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left before:content-[''] before:absolute before:w-full before:h-0.5 before:bg-black before:bottom-0 before:left-0 before:transform before:scale-x-0 hover:before:scale-x-100 before:transition-transform before:duration-300 before:origin-left">Contact Us</Link>
        <Link href="/services" className="hover:text-gray-900 hover:scale-105 transition-transform duration-200 relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-black after:top-0 after:left-0 after:transform after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left before:content-[''] before:absolute before:w-full before:h-0.5 before:bg-black before:bottom-0 before:left-0 before:transform before:scale-x-0 hover:before:scale-x-100 before:transition-transform before:duration-300 before:origin-left">Our Services</Link>
      </nav>
      <div></div>
    </motion.div>
  )}
</AnimatePresence>
    </header>
  );
};

export default Header;
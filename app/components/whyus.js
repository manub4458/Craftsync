'use client';
import { FaBullseye, FaUsers, FaShieldAlt, FaHeadset } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Link from 'next/link';
const ProfessionalsSection = () => {


  return (
    <section className=" py-12  px-4 sm:px-6 lg:px-8 bg-[#111]">
      <div className="max-w-7xl mx-auto">
        {/* Header with image */}
 <div className="lg:col-span-6 text-center mb-10 px-4">
<h1  className="font-heading mt-6 word-subheading uppercase text-5xl sm:text-8xl md:text-8xl lg:text-7xl xl:text-7xl 2xl:text-[6rem] mb-6 text-center"
>
  <span className="text-white">A passionate<br/> </span>
  <span className="text-white relative inline-block flex items-center justify-center gap-2 lg:gap-4">
     assembly of
    <img
      src="girl2.png" // Replace with your image URL
      alt="transform icon"
      className="w-8 h-8 sm:w-12 rotate-20 sm:h-12 lg:w-16 lg:h-16 inline-block"
     
    />
  </span>
    <br/>
  <span className="text-white">  specialists</span>
</h1>

  <p

    className="text-gray-300 font-paragraph text-lg sm:text-lg max-w-2xl mx-auto leading-relaxed"
  >
Enthusiastic, motivated, and ready to exceed expectations, we deliver skill and innovation to every task, ensuring your triumph.
</p>
</div>

        {/* Features grid - All purple version */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Results */}
                   <div className="group relative overflow-hidden bg-[#1A1A1A] rounded-xl shadow-lg border border-gray-900 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="p-8">
 <div className="w-14 h-14 flex items-center justify-center bg-[#D2BEDD] rounded-lg mb-6 text-[#7D4199] group-hover:bg-[#7D4199] group-hover:text-[#D2BEDD] transition-colors duration-300">
                    <FaBullseye className="text-2xl" />
              </div>
              <h2 className="text-2xl font-heading text-white uppercase mb-3">Driven by outcomes</h2>
              <p className="text-white font-paragraph group-hover:text-gray-200 transition-colors duration-300">
               We craft performance focused websites tailored to your organization’s goals and strategic vision.
              </p>
              <div className="mt-6">
                   <span className="inline-block w-8 h-1 bg-[#D2BEDD] group-hover:w-12 transition-all duration-300"></span>
              </div>
            </div>
          </div>

          {/* Experienced Team */}
                    <div className="group relative overflow-hidden bg-[#1A1A1A] rounded-xl shadow-lg border border-gray-900 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-br from-[#D2BEDD] to-[#7D4199] opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            <div className="p-8">
 <div className="w-14 h-14 flex items-center justify-center bg-[#D2BEDD] rounded-lg mb-6 text-[#7D4199] group-hover:bg-[#7D4199] group-hover:text-[#D2BEDD] transition-colors duration-300">
                    <FaUsers className="text-2xl" />
              </div>
              <h2 className="text-2xl font-heading text-white uppercase mb-3">People Who Know Their Craft</h2>
              <p className="text-white font-paragraph group-hover:text-gray-200 transition-colors duration-300">
              10+ skilled professionals under one roof—designers, developers, strategists, and marketers working in sync.
              </p>
              <div className="mt-6">
                   <span className="inline-block w-8 h-1 bg-[#D2BEDD] group-hover:w-12 transition-all duration-300"></span>
              </div>
            </div>
          </div>

          {/* Quality Assurance */}
                   <div className="group relative overflow-hidden bg-[#1A1A1A] rounded-xl shadow-lg border border-gray-900 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-br from-[#D2BEDD] to-[#7D4199] opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            <div className="p-8">
               <div className="w-14 h-14 flex items-center justify-center bg-[#D2BEDD] rounded-lg mb-6 text-[#7D4199] group-hover:bg-[#7D4199] group-hover:text-[#D2BEDD] transition-colors duration-300">
                <FaShieldAlt className="text-2xl" />
              </div>
              <h2 className="text-2xl font-heading text-white mb-3">Built with Care</h2>
              <p className="text-white font-paragraph group-hover:text-gray-200 transition-colors duration-300">
               Excellence is at the core of everything we do—ensuring quality and best practices in every project.
              </p>
              <div className="mt-6">
                 <span className="inline-block w-8 h-1 bg-[#D2BEDD] group-hover:w-12 transition-all duration-300"></span>
              </div>
            </div>
          </div>

          {/* Support */}
          <div className="group relative overflow-hidden bg-[#1A1A1A] rounded-xl shadow-lg border border-gray-900 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-br from-[#D2BEDD] to-[#7D4199] opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            <div className="p-8">
              <div className="w-14 h-14 flex items-center justify-center bg-[#D2BEDD] rounded-lg mb-6 text-[#7D4199] group-hover:bg-[#7D4199] group-hover:text-[#D2BEDD] transition-colors duration-300">
                <FaHeadset className="text-2xl" />
              </div>
              <h2 className="text-2xl font-heading text-white mb-3">Support That Stays</h2>
              <p className="text-white font-paragraph group-hover:text-gray-200 transition-colors duration-300">
             We offer ongoing, responsive support to ensure your website continues to perform long after it goes live.
              </p>
              <div className="mt-6">
                <span className="inline-block w-8 h-1 bg-[#D2BEDD] group-hover:w-12 transition-all duration-300"></span>
              </div>
            </div>
          </div>
        </div>
      </div>

         <div className="flex justify-center mt-10">
      
      <Link href="/contact">
            <motion.button
        className="  px-8 py-4 border-2 cursor-pointer border-[#7D4199] text-white font-heading text-lg rounded-full bg-transparent transition-all duration-300 hover:text-[#7D4199] hover:bg-white"
        whileHover={{ 
          scale: 1.05,
        }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        style={{
          boxShadow: 'none',
          transition: 'all 0.3s ease'
        }}
        onMouseEnter={(e) => {
          e.target.style.boxShadow = '0 0 0 8px rgba(125, 65, 153, 0.2)';
        }}
        onMouseLeave={(e) => {
          e.target.style.boxShadow = 'none';
        }}
      >
        Connect With Our Professionals
      </motion.button>
      </Link>
            </div>
    </section>
  );
};

export default ProfessionalsSection;
'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
const DigitalPartnerSection = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#111]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text content - left side */}
          <div className="lg:w-1/2">
            <h2 className="text-5xl sm:text-8xl md:text-8xl lg:text-7xl xl:text-7xl 2xl:text-[5rem]  font-heading text-white mb-6">
              <span className="block">YOUR RELIABLE</span>
              <span className=""> DIGITAL ALLY</span>
            </h2>
            
            <p className="text-lg font-paragraph text-gray-200 mb-6">
            We are a premier digital agency based in Haridwar, Uttarakhand, India, supporting businesses across the region, India, and globally. At TheCraftsync, we are committed to providing outstanding web design, website development, and digital marketing services customized to your specific requirements.
            </p>
            
            <p className="text-lg text-gray-200 font-paragraph">
Since 2020, we’ve earned a legacy of distinction, revolutionizing worldwide brands with cutting-edge digital approaches. At TheCraftsync, we excel in crafting visually captivating websites, data-informed marketing, and adaptable development solutions.            </p>
          </div>

          {/* Image - right side */}
          <div className="lg:w-1/2">
            <div className="relative rounded-xl overflow-hidden shadow-lg aspect-w-16 aspect-h-9">
<Image
  src="/img.jpg"
  alt="Digital agency team"
  width={800}
  height={500}
  className="object-cover w-full h-full"
/>
            </div>
          </div>
        </div>
      </div>
         <div className="flex justify-center mt-10">


      <motion.button
  className="  px-8 py-4 border-2 border-[#7D4199] text-white font-heading text-lg rounded-full bg-transparent transition-all duration-300 hover:text-[#7D4199] hover:bg-white"
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
Know More About Us
</motion.button>
      </div>

      
    </section>
  );
};

export default DigitalPartnerSection;
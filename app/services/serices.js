'use client';
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";

const ServicesSection = () => {
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector(".first-services");
      if (section) {
        const rect = section.getBoundingClientRect();
        const isInView = rect.top >= 0 && rect.top <= window.innerHeight * 0.9;
        if (isInView) {
          controls.start({ opacity: 1, y: 0 });
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  return (
    <section className="services-section bg-[#111] text-white py-12 px-4 sm:py-24 sm:px-6 relative">
      {/* First Section - Conditionally Sticky on Medium Screens */}
      <div className="first-services md:sticky md:top-6 z-10">
        <h2 className="text-4xl sm:text-6xl font-heading mb-8 text-[#FE7743] text-center">What We Do</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 max-w-5xl mx-auto">
          <motion.div
            className="service-item flex items-start"
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            transition={{ duration: 1, staggerChildren: 0.2 }}
          >
            <Image
              src="/s1.png"
              alt="Web Icon"
              width={48}
              height={48}
              className="w-12 h-12 mr-6 mt-1 object-contain"
            />
            <div>
              <h3 className="text-2xl font-heading">Web Development</h3>
              <p className="font-paragraph text-gray-400">
                Our company delivers comprehensive web development services, including front-end and back-end development, custom CMS solutions, e-commerce platforms, and responsive design.
              </p>
            </div>
          </motion.div>
          <motion.div
            className="service-item flex items-start"
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            transition={{ duration: 1, staggerChildren: 0.2 }}
          >
            <Image
              src="/s2.png"
              alt="UI/UX Icon"
              width={56}
              height={56}
              className="w-14 h-14 mr-6 mt-1 object-contain"
            />
            <div>
              <h3 className="text-2xl font-heading">UI/UX Design</h3>
              <p className="font-paragraph text-gray-400">
                Our company specializes in UI/UX services, combining user research, wireframing, prototyping, and visual design to craft engaging and functional interfaces.
              </p>
            </div>
          </motion.div>
          <motion.div
            className="service-item flex items-start"
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            transition={{ duration: 1, staggerChildren: 0.2 }}
          >
            <Image
              src="/s3.png"
              alt="CMS Icon"
              width={56}
              height={56}
              className="w-14 h-14 mr-6 mt-1 object-contain"
            />
            <div>
              <h3 className="text-2xl font-heading">Custom CMS Solutions</h3>
              <p className="font-paragraph text-gray-400">
                Custom CMS (Content Management System) solutions enable businesses to efficiently manage, update, and personalize website content without extensive technical expertise.
              </p>
            </div>
          </motion.div>
          <motion.div
            className="service-item flex items-start"
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            transition={{ duration: 1, staggerChildren: 0.2 }}
          >
            <Image
              src="/s4.png"
              alt="Mobile Icon"
              width={56}
              height={56}
              className="w-14 h-14 mr-6 mt-1 object-contain"
            />
            <div>
              <h3 className="text-2xl font-heading">Mobile App Dev</h3>
              <p className="font-paragraph text-gray-400">
                Our company provides end-to-end mobile app development services, including ideation, UI/UX design, coding, testing, and deployment.
              </p>
            </div>
          </motion.div>
          <motion.div
            className="service-item flex items-start"
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            transition={{ duration: 1, staggerChildren: 0.2 }}
          >
            <Image
              src="/s5.png"
              alt="E-commerce Icon"
              width={56}
              height={56}
              className="w-14 h-14 mr-6 mt-1 object-contain"
            />
            <div>
              <h3 className="text-2xl font-heading">E-commerce Development</h3>
              <p className="font-paragraph text-gray-400">
                Our company provides comprehensive e-commerce solutions, including custom website design, secure payment gateway integration, inventory management, and mobile optimization.
              </p>
            </div>
          </motion.div>
          <motion.div
            className="service-item flex items-start"
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            transition={{ duration: 1, staggerChildren: 0.2 }}
          >
            <Image
              src="/s6.png"
              alt="API Icon"
              width={56}
              height={56}
              className="w-14 h-14 mr-6 mt-1 object-contain"
            />
            <div>
              <h3 className="text-2xl font-heading">API Integration</h3>
              <p className="font-paragraph text-gray-400">
                Our company specializes in custom API integration services, including third-party API implementation, payment gateways, CRM systems, and social media platforms.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Second Section - Slides on Top with Black Background */}
      <div className="second-services relative z-20 mt-2">
        <motion.div
          className="bg-[#111] p-12"
          initial={{ y: "10vh" }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          viewport={{ once: false }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 max-w-5xl mx-auto">
            <motion.div
              className="service-item flex items-start"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, staggerChildren: 0.2 }}
              viewport={{ once: true }}
            >
              <Image
                src="/s7.png"
                alt="PR"
                width={56}
                height={56}
                className="w-14 h-14 mr-6 mt-1 object-contain"
              />
              <div>
                <h3 className="text-2xl font-heading">Digital PR</h3>
                <p className="font-paragraph text-gray-400">
                  Enhance your brand&apos;s online presence through strategic storytelling, media outreach, and content creation.
                </p>
              </div>
            </motion.div>
            <motion.div
              className="service-item flex items-start"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, staggerChildren: 0.2 }}
              viewport={{ once: false }}
            >
              <Image
                src="/s8.png"
                alt="SEO"
                width={56}
                height={56}
                className="w-14 h-14 mr-6 mt-1 object-contain"
              />
              <div>
                <h3 className="text-2xl font-heading">SEO</h3>
                <p className="font-paragraph text-gray-400">
                  Search Engine Optimization (SEO) is a strategic process aimed at improving a website’s visibility on search engines like Google.
                </p>
              </div>
            </motion.div>
            <motion.div
              className="service-item flex items-start"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, staggerChildren: 0.2 }}
              viewport={{ once: false }}
            >
              <Image
                src="/s9.png"
                alt="Link Building"
                width={56}
                height={56}
                className="w-14 h-14 mr-6 mt-1 object-contain"
              />
              <div>
                <h3 className="text-2xl font-heading">Link Building</h3>
                <p className="font-paragraph text-gray-400">
                  Our company excels in crafting tailored link-building campaigns, utilizing techniques such as guest posting, digital PR, and outreach to secure relevant, organic links.
                </p>
              </div>
            </motion.div>
            <motion.div
              className="service-item flex items-start"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, staggerChildren: 0.2 }}
              viewport={{ once: false }}
            >
              <Image
                src="/s10.png"
                alt="Social media"
                width={56}
                height={56}
                className="w-14 h-14 mr-6 mt-1 object-contain"
              />
              <div>
                <h3 className="text-2xl font-heading">Social Media Management</h3>
                <p className="font-paragraph text-gray-400">
                  Our company provides comprehensive social media management services, including audience analysis, content creation, community interaction, and performance tracking.
                </p>
              </div>
            </motion.div>
            <motion.div
              className="service-item flex items-start"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, staggerChildren: 0.2 }}
              viewport={{ once: false }}
            >
              <Image
                src="/s11.png"
                alt="Google Ads"
                width={56}
                height={56}
                className="w-14 h-14 mr-6 mt-1 object-contain"
              />
              <div>
                <h3 className="text-2xl font-heading">Google Ads</h3>
                <p className="font-paragraph text-gray-400">
                  Our company offers expert Google Ads management services, encompassing keyword research, ad creation, campaign optimization, and performance tracking.
                </p>
              </div>
            </motion.div>
            <motion.div
              className="service-item flex items-start"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, staggerChildren: 0.2 }}
              viewport={{ once: false }}
            >
              <Image
                src="/s12.png"
                alt="Facebook Ads"
                width={56}
                height={56}
                className="w-14 h-14 mr-6 mt-1 object-contain"
              />
              <div>
                <h3 className="text-2xl font-heading">Facebook Ads</h3>
                <p className="font-paragraph text-gray-400">
                  Our company provides expert Facebook Ads management, including audience segmentation, creative ad design, budget optimization, and performance analytics.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
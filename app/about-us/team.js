'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
export default function TeamSection() {
    const textVariants = {
        initial: { 
        opacity: 0, 
        y: 30 
        },
        animate: { 
        opacity: 1, 
        y: 0,
        transition: {
            duration: 0.8,
            delay: 0.3,
            ease: "easeOut"
        }
        }
    };
    const subtextVariants = {
        initial: { 
        opacity: 0, 
        y: 20 
        },
        animate: { 
        opacity: 1, 
        y: 0,
        transition: {
            duration: 0.8,
            delay: 0.6,
            ease: "easeOut"
        }
        }
    };
  return (
    <section className="pb-6 px-4 sm:px-8 md:px-16 bg-[#111] text-white">
      <div className="max-w-7xl mx-auto">
    <div className="lg:col-span-6 text-center mb-10 px-4">
<motion.h1
  variants={textVariants}
  initial="initial"
  animate="animate"
  className="font-heading pt-1 md:pt-10  word-subheading uppercase text-5xl sm:text-8xl md:text-8xl lg:text-7xl xl:text-7xl 2xl:text-[6rem] mb-6 text-center"
>
  <span className="text-white">Meet Our      <motion.img
      src="float.png" // Replace with your image URL
      alt="transform icon"
      className="w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16  inline-block rotate-16"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ 
        duration: 0.5, 
        delay: 1.2, 
        ease: "backOut" 
      }}
      whileHover={{ scale: 1.1, rotate: 10 }}
    /> <br/> </span>
  <span className="text-white relative inline-block flex items-center justify-center gap-2 lg:gap-4">
Professionals

  </span>

  <span className="text-white"></span>
</motion.h1>

  <motion.p
    variants={subtextVariants}
    initial="initial"
    animate="animate"
    className="text-gray-300 font-paragraph text-lg sm:text-lg max-w-2xl mx-auto leading-relaxed"
  >
We’re more than just experts—we’re collaborators, problem-solvers, and creators. Meet the people who make big things happen behind the scenes.
</motion.p>
</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Team Member 1 */}
          <div className="relative group bg-[#1A1A1A] rounded-2xl overflow-hidden shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <Image
              src="/img.jpg"
              alt="Team Member 1"
              width={400}
              height={400}
              className="w-full h-64 object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
              priority
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-[#E0E0E0] font-heading mb-2">Manik</h3>
              <p className="text-lg text-[#FE7743] mb-4">CEO</p>
              <p className="text-sm text-gray-400 leading-relaxed">
                Manik brings visionary ideas to life with a passion for innovative design and storytelling, leading our creative projects with unmatched enthusiasm.
              </p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#FE7743]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>

          {/* Team Member 2 */}
          <div className="relative group bg-[#1A1A1A] rounded-2xl overflow-hidden shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <Image
              src="/manav.jpg"
              alt="Team Member 2"
              width={400}
              height={400}
              className="w-full h-64 object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-[#E0E0E0] font-heading mb-2">Manav</h3>
              <p className="text-lg text-[#FE7743]  mb-4">Lead Developer</p>
              <p className="text-sm text-gray-400 leading-relaxed">
                Manav crafts seamless digital experiences with his expertise in coding and problem-solving, driving our tech innovations forward.
              </p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#FE7743]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>

          {/* Team Member 3 */}
          <div className="relative group bg-[#1A1A1A] rounded-2xl overflow-hidden shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <Image
              src="/aryan.jpg"
              alt="Team Member 3"
              width={400}
              height={400}
              className="w-full h-64 object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-[#E0E0E0] font-heading mb-2">Aryan</h3>
              <p className="text-lg text-[#FE7743] mb-4">Full-Stak Developer</p>
              <p className="text-sm text-gray-400 leading-relaxed">

               Aryan&apos;s full-stack expertise powers seamless digital experiences from front to back. With a sharp eye for design and solid backend logic, he builds fast, scalable, and user-focused web solutions.
              </p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#FE7743]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>

          {/* Team Member 4 */}
          <div className="relative group bg-[#1A1A1A] rounded-2xl overflow-hidden shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <Image
              src="/leaddesigner.jpg"
              alt="Team Member 4"
              width={400}
              height={400}
              className="w-full h-64 object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-[#E0E0E0] font-heading mb-2">Sidharth</h3>
              <p className="text-lg text-[#FE7743] mb-4">Lead Designer</p>
              <p className="text-sm text-gray-400 leading-relaxed">
                Sidharth crafts intuitive interfaces and delightful user experiences, ensuring our products are both beautiful and easy to use.
              </p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#FE7743]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        {/* team member5 */}
                <div className="relative group bg-[#1A1A1A] rounded-2xl overflow-hidden shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <Image
              src="/priyauiux.jpg"
              alt="Team Member 5"
              width={400}
              height={400}
              className="w-full h-64 object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-[#E0E0E0] font-heading mb-2">Priya</h3>
              <p className="text-lg text-[#FE7743] mb-4">Junior Designer</p>
              <p className="text-sm text-gray-400 leading-relaxed">
                Priya specializes in crafting eye-catching social media posts, graphics, and visual content that align with brand aesthetics and marketing goals.
              </p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#FE7743]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
                  {/* team member5 */}
            <div className="relative group bg-[#1A1A1A] rounded-2xl overflow-hidden shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <Image
              src="/team.png"
              alt="Team Member 6"
              width={400}
              height={400}
              className="w-full h-64 object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-[#E0E0E0] font-heading mb-2">Shivam</h3>
              <p className="text-lg text-[#FE7743] mb-4">Solution architect</p>
              <p className="text-sm text-gray-400 leading-relaxed">
Shivam designs scalable and efficient system architectures that power our digital marketing operations. He ensures seamless tech integration, aligning every solution with client goals and long-term performance.              </p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#FE7743]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

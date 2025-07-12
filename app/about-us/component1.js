'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center py-6 px-4 sm:px-8 md:px-16 bg-[#111] text-white min-h-[70vh]">
      <div className="bg-[#1A1A1A] flex flex-col md:flex-row p-6 sm:p-8 md:p-12 rounded-2xl w-full max-w-7xl">
        {/* Left Side: Heading and Paragraph */}
        <div className="md:w-1/2 mb-6 md:mb-0">
          <blockquote className="relative pl-6 sm:pl-8">
            <span className="absolute -top-3 sm:-top-4 -left-3 sm:-left-4 text-5xl sm:text-6xl md:text-7xl font-bold font-heading">“</span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl word-subheading font-heading text-[#FE7743] mb-4 md:mb-6">
              Turn Passion Into Action
            </h1>
          </blockquote>
          <p className="text-base sm:text-lg md:text-xl pl-6 sm:pl-9 leading-relaxed max-w-3xl md:max-w-5xl">
            Energy, creativity, collaboration, innovation, dedication, leadership, and excellence drive our mission. With passion, skill, and unity, we embrace challenges and transform ideas into reality. Join us to build a future fueled by ambition, teamwork, and relentless pursuit of success. Together, let’s create something extraordinary.
            <br />
            <Link href="/clients" className="hover:text-[#FE7743] underline font-semibold">
              Take a Look at Our Clients
            </Link>
          </p>
        </div>

        {/* Right Side: Deck of Cards Images */}
        <div className="md:w-1/2 flex justify-center relative mt-6 md:mt-0">
          <div className="relative w-48 sm:w-64 md:w-80 h-56 sm:h-72 md:h-96">
            <Image
              src="/manav.jpg"
              alt="Image 1"
              width={192}
              height={288}
              className="absolute rounded-lg shadow-lg z-10 transform -rotate-6 w-32 sm:w-40 md:w-56 h-48 sm:h-60 md:h-80 md:left-0 sm:left-2 left-0 border-2 border-white"
            />
            <Image
              src="/manik.jpg"
              alt="Image 2"
              width={192}
              height={288}
              className="absolute rounded-lg shadow-lg z-20 transform rotate-2 w-32 sm:w-40 md:w-56 h-48 sm:h-60 md:h-80 md:left-28 sm:left-10 left-8 md:top-6 sm:top-3 top-2 border-2 border-white"
            />
            <Image
              src="/priya.webp"
              alt="Image 3"
              width={192}
              height={288}
              className="absolute rounded-lg shadow-lg z-30 transform -rotate-2 w-32 sm:w-40 md:w-56 h-48 sm:h-60 md:h-80 md:left-56 sm:left-20 left-16 md:top-12 sm:top-6 top-4 border-2 border-white"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
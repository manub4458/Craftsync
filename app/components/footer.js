import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Left column - 50% */}
          <div className="space-y-6 ">
            <div className="flex items-center gap-2">
              <h2 className="text-5xl sm:text-3xl md:text-4xl lg:text-6xl word-wide font-display font-bold">

                LET&apos;S WORK TOGETHER

               

                <img src="/love.png" loading='lazy' alt="smile" className=" hover:rotate-6 w-10 h-10 sm:w-10 sm:h-10 md:w-12 md:h-12 inline-block ml-2" />
              </h2>
            </div>
<div className="flex flex-col sm:flex-row gap-4">
  <Link href="/contact">
  <button className="bg-[#D2BEDD] cursor-pointer text-black px-4 sm:px-6 py-2 sm:py-3 font-bold rounded-full flex items-center gap-2 hover:bg-gray-100 hover:scale-105 transition-all duration-300 ease-in-out whitespace-nowrap text-sm sm:text-base shadow-md">
    
    {/* Overlapping circular images */}
    <div className="flex items-center">
      <img
        src="/manik.jpg"
        alt="user1"
        className="  w-6 h-6 sm:w-10 sm:h-10 rounded-full border-2 border-white"
      />
      <img
        src="/manav.jpg"
        alt="user2"
        className="w-6 h-6 sm:w-10 sm:h-10 rounded-full border-2 border-white -ml-2"
      />
      <img
        src="/anshu.jpg"
        alt="user3"
        className="w-6 h-6 sm:w-10 sm:h-10 rounded-full border-2 border-white -ml-2"
      />
    </div>


    LET&apos;S TALK

  
  </button>
  </Link>
</div>

          </div>

          {/* Right column - 50% */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="font-heading text-xl sm:text-3xl">Services</h3>
              <ul className=" font-paragraph  space-y-2">
                <li><Link href="#" className="hover:underline text-md sm:text-lg">About</Link></li>
                <li><Link href="#" className="hover:underline text-md sm:text-lg">Blog</Link></li>
                <li><Link href="#" className="hover:underline text-md sm:text-lg">Careers</Link></li>
                <li><Link href="#" className="hover:underline text-md sm:text-lg">Reviews</Link></li>
                <li><Link href="/contact" className="hover:underline text-md sm:text-lg">Contact</Link></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-heading text-xl  sm:text-3xl">SAY HELLO</h3>
              <p className="text-sm sm:text-base">+91 84330 23265</p>
              <p className="text-sm sm:text-base">thecraftsync@gmaill.com</p>
            </div>
          </div>
        </div>

        {/* Bottom row - Company info */}
        <div className="pt-8 border-t border-gray-700">
          <div className="flex flex-col sm:flex-row justify-between items-center  gap-4">
            <div className="text-center sm:text-left">
              <p className="text-sm sm:text-base">© 2025 TheCraftsync</p>
           
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="#" className="hover:underline text-sm sm:text-base">Accessibility Statement</Link>
              <Link href="#" className="hover:underline text-sm sm:text-base">Privacy Policy</Link>
              <Link href="#" className="hover:underline text-sm sm:text-base">Cookie Policy</Link>
              <Link href="#" className="hover:underline text-sm sm:text-base">Manage Cookies</Link>
            </div>
          
          </div>
        </div>
      </div>
    </footer>
  );
}
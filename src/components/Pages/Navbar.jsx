import { useState } from "react";
import Logo from '/public/logo.png'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-[#1F232D] sticky z-50 top-0" data-aos="fade-down" data-aos-once="true">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <img src={Logo} alt="" />
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center space-x-4 text-white ">
              <a href="/" className="hover:text-[#02ECFF] hover:bg-transparent px-3 py-2 rounded-md text-lg ">
                Home
              </a>
              <a href="/about" className=" hover:text-[#02ECFF]  hover:bg-transparent px-3 py-2 rounded-md text-lg ">
                About
              </a>
              <a href="/Project" className="hover:text-[#02ECFF] gover:bg-transparent px-3 py-2 rounded-md text-lg ">
                Project
              </a>
              <a href="/blog" className=" hover:text-[#02ECFF] hover:bg-transparent px-3 py-2 rounded-md text-lg ">
                Contact
              </a>
             
            </div>
          </div>
          <div className="md:hidden">
            <button type="button" className="text-white hover:text-[#02ECFF] focus:outline-none focus:text-#F48C06" onClick={toggleMenu}>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-white">
            <a href="/" className=" hover:text-[#02ECFF]  hover:bg-transparent block px-3 py-2 rounded-md text-lg ">
              Home
            </a>
            <a href="/about" className=" hover:text-[#02ECFF] hover:bg-transparent block px-3 py-2 rounded-md text-lg ">
              About
            </a>
            <a href="/project" className=" hover:text-[#02ECFF] hover:bg-transparent block px-3 py-2 rounded-md text-lg ">
              Project
            </a>
            <a href="/contact" className=" hover:text-[#02ECFF]  hover:bg-transparent block px-3 py-2 rounded-md text-lg ">
              Contact
            </a>
            <a href="/blog" className=" hover:text-[#02ECFF]  hover:bg-transparent block px-3 py-2 rounded-md text-lg ">
              Community
            </a>
            <a href="/contact" className=" hover:text-[#02ECFF] hover:bg-transparent block px-3 py-2 rounded-md text-lg ">
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

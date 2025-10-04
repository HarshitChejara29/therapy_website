"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#FFFCF5] border-[#CBBCD4] border-b">
      <div className="mx-auto flex items-center justify-between px-4 lg:py-7 py-6 sm:px-28">

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/">
            <div className="text-xl font-extrabold tracking-widest">L O G O</div>
          </Link>
          <Link href="/about" className="text-black hover:text-gray-600">
            About Us
          </Link>
          <Link href="/service" className="text-black hover:text-gray-600">
            Services
          </Link>
          <Link href="/contact" className="text-black hover:text-gray-600">
            Contact Us
          </Link>
        </nav>

        {/* Button */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="bg-[#CBBCD4] text-black font-medium px-4 py-3 rounded-full hover:bg-purple-200 transition"
          >
            Book A Consultation
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center w-full px-2">
          {/* Logo on the left */}
          <Link href="/">
            <div className="text-xl font-extrabold tracking-widest text-black">L O G O</div>
          </Link>

          {/* Menu button at far right */}
          <div className="ml-auto text-black">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#f9f7f2] px-4 py-4 space-y-3">
          <Link
            href="/about"
            className="block text-black hover:text-gray-600"
            onClick={() => setIsOpen(false)}
          >
            About Us
          </Link>
          <Link
            href="/service"
            className="block text-black hover:text-gray-600"
            onClick={() => setIsOpen(false)}
          >
            Services
          </Link>
          <Link
            href="/contact"
            className="block text-black hover:text-gray-600"
            onClick={() => setIsOpen(false)}
          >
            Contact Us
          </Link>
          <Link
            href="/contact"
            className="block bg-[#CBBCD4] text-black font-medium px-4 py-3 rounded-full hover:bg-purple-200 transition text-center"
            onClick={() => setIsOpen(false)}
          >
            Book A Consultation
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;

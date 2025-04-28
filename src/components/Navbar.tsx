'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaHatWizard, FaStar, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-900 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center text-xl font-bold text-amber-400">
              <FaHatWizard className="mr-2 text-2xl" />
              <span>Harry Potter Explorer</span>
            </Link>
          </div>
          
          <div className="flex items-center">
            {/* Desktop menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/" className="text-gray-300 hover:text-amber-400 px-3 py-2 rounded-md text-sm font-medium">
                  Home
                </Link>
                <Link href="/houses" className="text-gray-300 hover:text-amber-400 px-3 py-2 rounded-md text-sm font-medium">
                  Houses
                </Link>
                <Link href="/characters" className="text-gray-300 hover:text-amber-400 px-3 py-2 rounded-md text-sm font-medium">
                  Characters
                </Link>
                <Link href="/favorites" className="text-gray-300 hover:text-amber-400 px-3 py-2 rounded-md text-sm font-medium flex items-center">
                  <FaStar className="mr-1" /> Favorites
                </Link>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button 
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
              >
                {isOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden transition-all duration-300 ease-in-out">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link 
                href="/" 
                className="block text-gray-300 hover:text-amber-400 px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/houses" 
                className="block text-gray-300 hover:text-amber-400 px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                Houses
              </Link>
              <Link 
                href="/characters" 
                className="block text-gray-300 hover:text-amber-400 px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                Characters
              </Link>
              <Link 
                href="/favorites" 
                className="block text-gray-300 hover:text-amber-400 px-3 py-2 rounded-md text-base font-medium flex items-center"
                onClick={() => setIsOpen(false)}
              >
                <FaStar className="mr-1" /> Favorites
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 
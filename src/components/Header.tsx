import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/60 backdrop-blur-sm border-b border-orange-100/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          <a href="/" className="text-xl flex gap-1 items-center font-bold">
          <img src="https://i.imgur.com/dTSedJ9.png" alt="Navdyut AI Logo" className="h-8 w-8 inline-block mr-2 rounded-md" />
            <span className="text-orange-500">Navdyut</span>
            <span className="text-gray-600">AI</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="/#vision" className="text-gray-600 hover:text-gray-900 transition-colors">
              Vision
            </a>
            <a href="/#services" className="text-gray-600 hover:text-gray-900 transition-colors">
              Services
            </a>
            <a href="/#contact" className="text-gray-600 hover:text-gray-900 transition-colors">
              Contact
            </a>
            <a 
              href="https://chat.navdyut.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-orange-500 hover:text-orange-600 transition-colors"
            >
              Try Navdyut
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-orange-100/50">
            <nav className="flex flex-col py-4 space-y-4">
              <a 
                href="/#vision" 
                className="text-gray-600 hover:text-gray-900 transition-colors"
                onClick={closeMenu}
              >
                Vision
              </a>
              <a 
                href="/#services" 
                className="text-gray-600 hover:text-gray-900 transition-colors"
                onClick={closeMenu}
              >
                Services
              </a>
              <a 
                href="/#contact" 
                className="text-gray-600 hover:text-gray-900 transition-colors"
                onClick={closeMenu}
              >
                Contact
              </a>
              <a 
                href="https://chat.navdyut.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-orange-500 hover:text-orange-600 transition-colors"
                onClick={closeMenu}
              >
                Try Navdyut
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

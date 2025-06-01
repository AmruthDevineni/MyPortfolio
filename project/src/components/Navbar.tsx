import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom">
        <nav className="flex items-center justify-between">
          <a href="#home" className="flex items-center">
            <motion.div
              className={`text-xl font-bold ${
                isScrolled ? 'text-primary-600' : 'text-white'
              }`}
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              Amruth Devineni
            </motion.div>
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`font-medium transition-colors ${
                    isScrolled
                      ? 'text-neutral-700 hover:text-primary-500'
                      : 'text-white hover:text-primary-200'
                  }`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Navigation Toggle */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            {isMenuOpen ? (
              <X
                className={isScrolled ? 'text-neutral-800' : 'text-white'}
                size={24}
              />
            ) : (
              <Menu
                className={isScrolled ? 'text-neutral-800' : 'text-white'}
                size={24}
              />
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white rounded-lg shadow-lg mt-2 py-4"
          >
            <ul className="flex flex-col">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="block py-2 px-4 text-neutral-700 hover:bg-neutral-100 hover:text-primary-500"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
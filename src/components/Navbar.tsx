import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-scroll';

const navLinks = [
  { name: 'Home', to: 'home' },
  { name: 'About', to: 'about' },
  { name: 'Skills', to: 'skills' },
  { name: 'Projects', to: 'projects' },
  { name: 'Experience', to: 'experience' },
  { name: 'Contact', to: 'contact' },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
          <ul className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.to}
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-60}
                  activeClass="text-primary-600 underline"
                  className={`cursor-pointer font-medium transition-colors ${
                    isScrolled
                      ? 'text-neutral-700 hover:text-primary-500'
                      : 'text-white hover:text-primary-200'
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li>
              <a
                href="/MyPortfolio/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-1.5 rounded-full bg-primary-600 text-white text-sm font-medium hover:bg-primary-700 transition"
              >
                Resume
              </a>
            </li>
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
                  <Link
                    to={link.to}
                    smooth={true}
                    duration={500}
                    offset={-60}
                    spy={true}
                    activeClass="text-primary-600 font-semibold"
                    className="block py-2 px-4 text-neutral-700 hover:bg-neutral-100 hover:text-primary-500"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li className="px-4 pt-2">
                <a
                  href="/AmruthDevineni_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center w-full bg-primary-600 text-white rounded-full py-2 hover:bg-primary-700 transition"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Download Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Navbar;

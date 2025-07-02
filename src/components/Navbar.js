import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      closeMenu();
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="#home" className="nav-logo" onClick={() => scrollToSection('home')}>
          Jay Patel
        </a>

        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <motion.li className="nav-item" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
            <a 
              href="#home" 
              className="nav-link"
              onClick={() => scrollToSection('home')}
            >
              Home
            </a>
          </motion.li>
          <motion.li className="nav-item" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
            <a 
              href="#about" 
              className="nav-link"
              onClick={() => scrollToSection('about')}
            >
              About
            </a>
          </motion.li>
          <motion.li className="nav-item" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
            <a 
              href="#skills" 
              className="nav-link"
              onClick={() => scrollToSection('skills')}
            >
              Skills
            </a>
          </motion.li>
          <motion.li className="nav-item" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}>
            <a 
              href="#projects" 
              className="nav-link"
              onClick={() => scrollToSection('projects')}
            >
              Projects
            </a>
          </motion.li>
          <motion.li className="nav-item" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }}>
            <a 
              href="#certificates" 
              className="nav-link"
              onClick={() => scrollToSection('certificates')}
            >
              Certificates
            </a>
          </motion.li>
          <motion.li className="nav-item" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.6 }}>
            <a 
              href="#contact" 
              className="nav-link"
              onClick={() => scrollToSection('contact')}
            >
              Contact
            </a>
          </motion.li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar; 
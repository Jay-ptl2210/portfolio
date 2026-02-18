import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './Navbar.css';

const navLinks = [
  { id: 'home',         label: 'Home' },
  { id: 'about',        label: 'About' },
  { id: 'skills',       label: 'Skills' },
  { id: 'projects',     label: 'Projects' },
  { id: 'certificates', label: 'Certificates' },
  { id: 'contact',      label: 'Contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen]       = useState(false);
  const [active, setActive]       = useState('home');
  const [scrolled, setScrolled]   = useState(false);

  /* ── Scroll: detect active section + navbar shadow ── */
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      const offsets = navLinks.map(({ id }) => {
        const el = document.getElementById(id);
        return el ? { id, top: el.getBoundingClientRect().top } : null;
      }).filter(Boolean);

      const current = offsets.reduce((best, item) => {
        if (item.top <= 120 && item.top > (best?.top ?? -Infinity)) return item;
        return best;
      }, null);

      if (current) setActive(current.id);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-container">
        {/* Logo */}
        <motion.a
          href="#home"
          className="nav-logo"
          onClick={() => scrollTo('home')}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          Jay Patel
        </motion.a>

        {/* Hamburger */}
        <div className="menu-icon" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Links */}
        <ul className={`nav-menu${isOpen ? ' active' : ''}`}>
          {navLinks.map(({ id, label }, i) => (
            <motion.li
              key={id}
              className="nav-item"
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
            >
              <a
                href={`#${id}`}
                className={`nav-link${active === id ? ' active' : ''}`}
                onClick={() => scrollTo(id)}
              >
                {label}
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
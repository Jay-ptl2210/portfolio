import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaDownload, FaArrowRight } from 'react-icons/fa';
import './Home.css';

const Home = () => {
  const cardRef = useRef(null);

  /* ── 3D tilt on mouse move ── */
  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top  - rect.height / 2;
    const rotX = -(y / rect.height) * 18;
    const rotY =  (x / rect.width)  * 18;
    card.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg) scale(1.03)`;
  };

  const handleMouseLeave = () => {
    if (cardRef.current)
      cardRef.current.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
  };

  return (
    <section className="home">
      {/* Floating orbs */}
      <div className="home-orb home-orb-1" />
      <div className="home-orb home-orb-2" />
      <div className="home-orb home-orb-3" />

      <div className="home-content">
        {/* Profile — 3D tilt card */}
        <motion.div
          className="profile-section"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div className="profile-3d-wrapper">
            <div
              className="profile-3d-card"
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <div className="profile-image">
                <img src="/images/profile-pic.png" alt="Jay Patel" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Hero text */}
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
        >
          <div className="hero-greeting">Hello, World</div>

          <h1 className="hero-title">
            I'm <span className="highlight">Jay Patel</span>
          </h1>

          <div className="hero-subtitle-wrapper">
            <h2 className="hero-subtitle">
              <div className="text-slider">
                <div className="slider-item">MERN Stack Developer</div>
                <div className="slider-item">ERP & Odoo Engineer</div>
                <div className="slider-item">AI / ML Enthusiast</div>
              </div>
            </h2>
          </div>

          <div className="hero-buttons">
            <a
              href="/Resume/Jay Patel_Resume.pdf"
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaDownload /> Download Resume
            </a>
            <a href="#contact" className="btn btn-secondary">
              Contact Me <FaArrowRight />
            </a>
          </div>

          {/* Social icons */}
          <div className="hero-socials">
            <a
              href="https://github.com/Jay-ptl2210"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-link"
              title="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/jay-patel-it-221004-"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-link"
              title="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator">
        <div className="scroll-indicator-line" />
        <span>Scroll</span>
      </div>
    </section>
  );
};

export default Home;
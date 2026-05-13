import React from 'react';
import { motion } from 'framer-motion';
import './Home.css';

const Home = () => {
  return (
    <section className="home">
      <div className="container">
        <div className="home-content">
          <motion.div 
            className="profile-section"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="profile-image">
              <div className="profile-image-inner">
                <img src="/images/profile-pic.png" alt="Jay Patel" />
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="hero-text"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="hero-title">
              Hi, I'm <span className="highlight">Jay Patel</span>
            </h1>
            <div className="hero-subtitle-wrapper">
              <h2 className="hero-subtitle">
                <div className="text-slider">
                  <div className="slider-item">
                    <span className="slider-accent">MERN</span>
                    <span className="slider-rest"> Stack & Web Apps</span>
                  </div>
                  <div className="slider-item">
                    <span className="slider-accent">Odoo</span>
                    <span className="slider-rest"> / ERP & Python</span>
                  </div>
                  <div className="slider-item">
                    <span className="slider-accent">REST APIs</span>
                    <span className="slider-rest"> & PostgreSQL</span>
                  </div>
                </div>
              </h2>
            </div>
            <div className="hero-buttons">
              <a href="/Resume/Jay Patel_Resume.pdf" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                Download Resume
              </a>
              <a href="#contact" className="btn btn-secondary">
                Contact Me
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home; 
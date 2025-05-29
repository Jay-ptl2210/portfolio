import React from 'react';
import { Link } from 'react-router-dom';
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
              <img src="/images/profile-pic.png" alt="Jay Patel" />
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
            <h2 className="hero-subtitle">
              <div className="text-slider">
                <div>MERN Stack/Web Dev</div>
                <div>OOP in Java/Python</div>
                <div>AI/ML Enthusiast</div>
              </div>
            </h2>
            <div className="hero-buttons">
              <a href="/Resume/Jay_Patel_Resume.pdf" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                Download Resume
              </a>
              <Link to="/contact" className="btn btn-secondary">
                Contact Me
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home; 
import React from 'react';
import './Home.css';
import profileImage from '../assets/profile.jpg';

const Home = () => {
  return (
    <section id="home" className="home">
      <div className="home-content">
        <div className="profile-section">
          <div className="profile-image">
            <img src={profileImage} alt="Rajan Patel" />
          </div>
        </div>
        
        <div className="hero-text">
          <h1 className="hero-title">
            Hi, I'm <span className="hero-name">Rajan Patel</span>
          </h1>
          <p className="hero-role">Mechanical Design Engineer</p>
          <p className="hero-specialization">
            Specialized in <span>Industrial Machinery Design</span>, <span>CNC Systems</span>, <span>Sheet Metal Design</span> and <span>HVAC Components</span>
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">Contact Me</a>
            <a href="#projects" className="btn btn-secondary">View Projects</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home; 
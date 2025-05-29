import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-social">
            <a href="https://github.com/Jay-ptl2210" target="_blank" rel="noopener noreferrer" className="social-link" title="GitHub">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/jay-patel-it-221004-" target="_blank" rel="noopener noreferrer" className="social-link" title="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="mailto:jaydptl.22@gmail.com" className="social-link" title="Email">
              <FaEnvelope />
            </a>
            <a href="tel:+917041151519" className="social-link" title="Call">
              <FaPhone />
            </a>
          </div>
          <p className="footer-text">
            © {new Date().getFullYear()} Jay Patel. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
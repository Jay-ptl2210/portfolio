import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from 'react-icons/fa';
import { BsTelephoneFill } from 'react-icons/bs';
import './Footer.css';

const SITE_LAST_UPDATED = '13/05/2026';

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
              <BsTelephoneFill />
            </a>
            <a href="https://www.instagram.com/jay_ptl_2210?igsh=b2s2ODZjZjRqNW5x" target="_blank" rel="noopener noreferrer" className="social-link" title="Instagram">
              <FaInstagram />
            </a>
          </div>
          <div className="footer-meta">
            <p className="footer-text">
              © {new Date().getFullYear()} Jay Patel. All rights reserved.
            </p>
            <p className="footer-updated" title="Portfolio content last revised">
              Last updated: {SITE_LAST_UPDATED}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
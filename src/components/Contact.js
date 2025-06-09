import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-info">
          <div className="info-item">
            <FaEnvelope className="icon" />
            <div className="info-content">
              <h3>Email</h3>
              <a href="mailto:jaydptl.22@gmail.com">jaydptl.22@gmail.com</a>
            </div>
          </div>

          <div className="info-item">
            <FaPhone className="icon" />
            <div className="info-content">
              <h3>Phone</h3>
              <a href="tel:+917041151519">+91 7041151519</a>
            </div>
          </div>
          <div className="info-item">
            <FaMapMarkerAlt className="icon" />
            <div className="info-content">
              <h3>Location</h3>
              <a href="https://www.google.com/maps/place/Surat,+Gujarat" target="_blank" rel="noopener noreferrer">
                Surat, Gujarat
              </a>
            </div>
          </div>
    
          <div className="info-item">
            <FaLinkedin className="icon" />
            <div className="info-content">
              <h3>LinkedIn</h3>
              <a href="https://www.linkedin.com/in/jay-patel-it-221004-" target="_blank" rel="noopener noreferrer">
                jayptl-it-221004
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 
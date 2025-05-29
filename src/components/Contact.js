import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Get In Touch</h2>
          
          <div className="contact-content">
            <div className="contact-info">
              <motion.div 
                className="info-item"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <FaEnvelope className="info-icon" />
                <div>
                  <h3>Email</h3>
                  <a href="mailto:jaydptl.22@gmail.com">jaydptl.22@gmail.com</a>
                </div>
              </motion.div>
              
              <motion.div 
                className="info-item"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <FaPhone className="info-icon" />
                <div>
                  <h3>Phone</h3>
                  <a href="tel:+917041151519">+91 7041151519</a>
                </div>
              </motion.div>
              
              <motion.div 
                className="info-item"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <FaMapMarkerAlt className="info-icon" />
                <div>
                  <h3>Location</h3>
                  <a href="https://www.google.com/maps/place/Surat,+Gujarat" target="_blank" rel="noopener noreferrer">
                    Surat, Gujarat
                  </a>
                </div>
              </motion.div>

              <motion.div 
                className="info-item"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <FaLinkedin className="info-icon" />
                <div>
                  <h3>LinkedIn</h3>
                  <a href="https://www.linkedin.com/in/jayptl-it-221004" target="_blank" rel="noopener noreferrer">
                    jayptl-it-221004
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 
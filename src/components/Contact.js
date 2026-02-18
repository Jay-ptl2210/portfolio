import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin } from 'react-icons/fa';
import './Contact.css';

const contactItems = [
  {
    icon: <FaEnvelope />,
    label: 'Email',
    value: 'jaydptl.22@gmail.com',
    href: 'mailto:jaydptl.22@gmail.com',
    accent: '#00d4ff',
  },
  {
    icon: <FaPhone />,
    label: 'Phone',
    value: '+91 7041151519',
    href: 'tel:+917041151519',
    accent: '#10b981',
  },
  {
    icon: <FaMapMarkerAlt />,
    label: 'Location',
    value: 'Ahmedabad, Gujarat, India',
    href: 'https://www.google.com/maps/place/Ahmedabad,+Gujarat',
    accent: '#f59e0b',
  },
  {
    icon: <FaLinkedin />,
    label: 'LinkedIn',
    value: 'jayptl-it-221004',
    href: 'https://www.linkedin.com/in/jay-patel-it-221004-',
    accent: '#7c3aed',
  },
];

const Contact = () => (
  <section className="contact" id="contact">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Get In Touch</h2>
        <p className="contact-subtitle">I'm open to opportunities — let's connect!</p>

        <div className="contact-grid">
          {contactItems.map((item, i) => (
            <motion.a
              key={i}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="contact-card"
              style={{ '--item-accent': item.accent }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
            >
              <div className="contact-icon-wrap">
                {item.icon}
              </div>
              <div className="contact-info">
                <span className="contact-label">{item.label}</span>
                <span className="contact-value">{item.value}</span>
              </div>
              <div className="contact-card-glow" />
            </motion.a>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default Contact;
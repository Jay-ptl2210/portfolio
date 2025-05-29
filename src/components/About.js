import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaUserAlt } from 'react-icons/fa';
import './About.css';

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <motion.div
          className="about-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">About Me</h2>
          
          <div className="about-grid">
            <motion.div 
              className="about-section objective-section"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="section-header">
                <FaUserAlt className="section-icon" />
                <h3>Objective</h3>
              </div>
              <div className="section-content">
                <p>
                  Motivated B.Tech IT student with a foundational understanding of MERN Stack, 
                  Web Development, and Object-Oriented Programming in Java and Python. Eager to 
                  apply and enhance my skills by contributing to real-world projects while 
                  continuously learning advanced technologies like AI and Machine Learning. 
                  Seeking an opportunity to grow in a dynamic and innovative environment.
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="about-section education-section"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="section-header">
                <FaGraduationCap className="section-icon" />
                <h3>Education</h3>
              </div>
              <div className="section-content">
                <div className="education-item">
                  <h4>B.Tech in Information Technology</h4>
                  <p className="institute">Chhotubhai Gopalbhai Patel Institute of Technology</p>
                  <p className="institute">Uka Tarsadia University, Surat, Gujarat</p>
                  <div className="education-details">
                    <p className="period">2022 - Present</p>
                    <p className="grade">CGPA: 9.27 (till 5th semester)</p>
                  </div>
                </div>

                <div className="education-item">
                  <h4>12th with PCM (GSHEB)</h4>
                  <p className="institute">Sanskar Vidhyalay, Kim, Surat</p>
                  <div className="education-details">
                    <p className="period">March 2022</p>
                    <p className="grade">Percentage: 73%</p>
                  </div>
                </div>

                <div className="education-item">
                  <h4>10th (GSHEB)</h4>
                  <p className="institute">Shree Kalyan Vidhyalay, Kalyanpura, Kadi</p>
                  <div className="education-details">
                    <p className="period">March 2020</p>
                    <p className="grade">Percentage: 77%</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 
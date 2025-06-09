import React from 'react';
import { FaGraduationCap, FaUser, FaBriefcase, FaNodeJs, FaUniversity } from 'react-icons/fa';
import './About.css';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-grid">
              <div className="about-section objective-section">
                <div className="section-header">
                  <FaUser className="section-icon" />
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
              </div>

              <div className="about-section experience-section">
                <div className="section-header">
                  <FaBriefcase className="section-icon"/>
                  <h3>Experience</h3>
                </div>
                <div className="section-content">
                  <div className="experience-item">
                    <div className="role-header">
                      <div className="role-title">
                        <span className="role-icon"><FaNodeJs /></span>
                        <h4>Node.js Development Intern</h4>
                      </div>
                      <span className="duration">June 2025 - Present</span>
                    </div>
                    <div className="company-info">
                      <p className="company-name">
                        <a href="https://webitoinfotech.com/" target="_blank" rel="noopener noreferrer" className="company-link">
                          Webito Infotech
                        </a>
                      </p>
                      <p className="location">Surat, India (Onsite)</p>
                    </div>
                    <div className="experience-details">
                      <ul>
                        <li>
                          <span className="highlight">Backend:</span> Built scalable server-side logic using Node.js and Express.js
                        </li>
                        <li>
                          <span className="highlight">Projects:</span> Worked on real-time applications with MongoDB integration
                        </li>
                        <li>
                          <span className="highlight">Skills:</span> API development, database management, deployment strategies
                        </li>
                        <li>
                          <span className="highlight">Growth:</span> Learned industry best practices and architecture patterns
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="about-section education-section">
                <div className="section-header">
                  <FaGraduationCap className="section-icon"/>
                  <h3>Education</h3>
                </div>
                <div className="section-content">
                  <div className="education-item">
                    <div className="education-header">
                      <div className="education-title">
                        <span className="education-icon"><FaUniversity /></span>
                        <h4>B.Tech in Information Technology</h4>
                      </div>
                      <span className="duration">2022 - Present</span>
                    </div>
                    <div className="institute-info">
                      <p className="institute-name">Chhotubhai Gopalbhai Patel Institute of Technology</p>
                      <p className="institute-location">Uka Tarsadia University, Surat, Gujarat</p>
                      <p className="grade">CGPA: 9.27 (till 5th semester)</p>
                    </div>
                  </div>

                  <div className="education-item">
                    <div className="education-header">
                      <div className="education-title">
                        <span className="education-icon"><FaGraduationCap /></span>
                        <h4>12th with PCM (GSHEB)</h4>
                      </div>
                      <span className="duration">March 2022</span>
                    </div>
                    <div className="institute-info">
                      <p className="institute-name">Sanskar Vidhyalay</p>
                      <p className="institute-location">Kim, Surat</p>
                      <p className="grade">Percentage: 73%</p>
                    </div>
                  </div>

                  <div className="education-item">
                    <div className="education-header">
                      <div className="education-title">
                        <span className="education-icon"><FaGraduationCap /></span>
                        <h4>10th (GSHEB)</h4>
                      </div>
                      <span className="duration">March 2020</span>
                    </div>
                    <div className="institute-info">
                      <p className="institute-name">Shree Kalyan Vidhyalay</p>
                      <p className="institute-location">Kalyanpura, Kadi</p>
                      <p className="grade">Percentage: 77%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default About; 
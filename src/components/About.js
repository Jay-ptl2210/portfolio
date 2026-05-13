import React from 'react';
import { FaGraduationCap, FaUser, FaBriefcase, FaNodeJs, FaUniversity } from 'react-icons/fa';
import { SiOdoo } from 'react-icons/si';
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
                    Final-year B.Tech Information Technology student with strong skills in MERN stack
                    development and hands-on experience building real-world ERP systems. I develop
                    scalable web applications, secure REST APIs, and enterprise workflows using Odoo
                    ERP and custom-built systems. I care about performance, reliability, and user
                    experience, and I enjoy turning complex business processes into clear, maintainable
                    software.
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
                        <span className="role-icon"><SiOdoo /></span>
                        <h4>IT Intern</h4>
                      </div>
                      <span className="duration">Dec 2025 - Present</span>
                    </div>
                    <div className="company-info">
                      <p className="company-name">
                        <a href="https://yantradesign.net/" target="_blank" rel="noopener noreferrer" className="company-link">
                          Yantra Design Pvt. Ltd.
                        </a>
                      </p>
                      <p className="location">Surat, India</p>
                    </div>
                    <div className="experience-details">
                      <ul>
                        <li>
                          <span className="highlight">ERP:</span> Worked on enterprise ERP (Odoo and a custom ERP), implementing end-to-end workflows across CRM, Sales, Inventory, Manufacturing, and HRMS.
                        </li>
                        <li>
                          <span className="highlight">Custom ERP:</span> Contributed to a custom ERP from scratch with Sales, Purchase, Manufacturing, and CRM modules and real-time data flow between them.
                        </li>
                        <li>
                          <span className="highlight">Quotations:</span> Built and optimized Lead → Opportunity → Quotation → Proforma Invoice with automated numbering, pricing logic, PDF generation, and machine-selection logic from input parameters.
                        </li>
                        <li>
                          <span className="highlight">Odoo stack:</span> Developed and customized modules using Python, ORM, XML, and QWeb—dynamic UI, filters, and branded reports.
                        </li>
                        <li>
                          <span className="highlight">Integrations:</span> Integrated external CRM with the ERP via APIs and scheduled synchronization (cron jobs).
                        </li>
                        <li>
                          <span className="highlight">Ops & quality:</span> Debugged workflows, implemented RBAC and HRMS features, and supported deployment on VPS with PostgreSQL and Git.
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="experience-item">
                    <div className="role-header">
                      <div className="role-title">
                        <span className="role-icon"><FaNodeJs /></span>
                        <h4>Node.js Development Intern</h4>
                      </div>
                      <span className="duration">June - July 2025</span>
                    </div>
                    <div className="company-info">
                      <p className="company-name">
                        <a href="https://webitoinfotech.com/" target="_blank" rel="noopener noreferrer" className="company-link">
                        Webito Infotech Pvt. Ltd.
                        </a>
                      </p>
                      <p className="location">Surat, India (Onsite)</p>
                    </div>
                    <div className="experience-details">
                      <ul>
                        <li>
                          <span className="highlight">Backend:</span> Built and deployed secure RESTful APIs using Node.js, Express.js, and MongoDB, with full JWT-based authentication
                        </li>
                        <li>
                          <span className="highlight">AI Integration:</span> Developed real-time features like task auto-categorization using Hugging Face Zero-Shot ML models and Gemini AI for smart assistant responses
                        </li>
                        <li>
                          <span className="highlight">Cloud & Testing:</span> Managed cloud-based media uploads with Cloudinary + Multer, and performed testing using Postman
                        </li>
                        <li>
                          <span className="highlight">DevOps:</span> Dockerized backend services and used Docker Compose to manage app and database containers
                        </li>
                        <li>
                          <span className="highlight">Deployment:</span> Collaborated in a Git-based team environment, and deployed full-stack apps on Render with .env management and error handling
                        </li>
                      </ul>
                      <div className="experience-links">
                        <a href="/Resume/Webito_Offer Latter.pdf" className="experience-link" target="_blank" rel="noopener noreferrer">
                          View Offer Letter
                        </a>
                        <span className="link-separator">|</span>
                        <a href="/Resume/Webito_Certificate.pdf" className="experience-link" target="_blank" rel="noopener noreferrer">
                          View Certificate
                        </a>
                      </div>
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
                      <p className="grade">CGPA: 9.19 (till 7th semester)</p>
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
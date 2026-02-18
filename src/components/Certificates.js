import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';
import './Certificates.css';

const certificates = [
  {
    id: 7,
    title: 'Node.js Development Internship',
    issuer: 'Webito Infotech Pvt. Ltd.',
    date: 'July 8, 2025',
    image: '/Certificates/Webito_Certificate.png',
    description: 'Completed internship in Node.js Development at Webito Infotech Pvt. Ltd. (June 2, 2025 – July 7, 2025). Worked on backend RESTful APIs, authentication, AI integration, cloud uploads, Docker, and deployment. Recognized for dedication, teamwork, and results.',
    skills: ['Node.js', 'Express.js', 'MongoDB', 'RESTful APIs', 'JWT Auth', 'AI Integration', 'Docker', 'Teamwork', 'Deployment']
  },
  {
    id: 1,
    title: 'Gen AI Academy',
    issuer: 'Google Cloud & Hack2Skill',
    date: 'May 28, 2025',
    image: '/Certificates/Hack2Skill-Certificate.png',
    description: "Successfully completed the Gen AI Academy, an initiative designed to foster industry-relevant AI expertise through a curated set of Generative AI courses. Gained foundational knowledge and practical skills utilizing key Google's Gen AI tools and platforms, including Vertex AI, Gemini APIs, Imagen, Streamlit and Multimodal RAG.",
    skills: ['Generative AI', 'Google Cloud', 'Vertex AI', 'Gemini APIs', 'Imagen', 'Streamlit', 'RAG']
  },
  {
    id: 2,
    title: 'TATTVAHACK 2K25',
    issuer: 'CGPIT, Uka Tarsadia University',
    date: 'March 8, 2025',
    image: '/Certificates/TatvaHack.jpg',
    description: 'Participated in TATTVAHACK 2K25 organized by Chhotubhai Gopalbhai Patel Institute of Technology, Uka Tarsadia University in collaboration with August Infotech.',
    skills: ['Problem Solving', 'Hackathon Experience', 'Team Collaboration', 'Time Management']
  },
  {
    id: 3,
    title: 'MongoDB Workshop',
    issuer: 'Department of IT and Cyber Security, CGPIT',
    date: 'October 1, 2024',
    image: '/Certificates/MongoDB.jpg',
    description: 'Completed One-Day Workshop on "Mastering Big Data: Hands-On Practices with MongoDB" organized by Department of Information Technology and Cyber Security.',
    skills: ['MongoDB', 'Database Management', 'Big Data', 'NoSQL', 'Data Modeling']
  },
  {
    id: 4,
    title: 'SciClone 2K24',
    issuer: 'CGPIT, Uka Tarsadia University',
    date: 'September 13, 2024',
    image: '/Certificates/FastestCoderFirst.png',
    description: 'Participated in Fastest Coder First event of SciClone 2K24 organized by Chhotubhai Gopalbhai Patel Institute of Technology.',
    skills: ['Fast Coding', 'Algorithm Design', 'Problem Solving', 'Competitive Programming']
  },
  {
    id: 5,
    title: 'Python Engineer',
    issuer: 'Mimo',
    date: 'May 22, 2024',
    image: '/Certificates/PythonEngineer.png',
    description: 'Successfully completed Python Engineer certification covering Python essentials, core programming concepts, functional and object-oriented programming paradigms, building scripts, and experience with modules and APIs.',
    skills: ['Python', 'OOP', 'Functional Programming', 'API Integration', 'Script Development']
  },
  {
    id: 6,
    title: 'Front End Development - HTML',
    issuer: 'Great Learning Academy',
    date: 'May 2024',
    image: '/Certificates/Frontend.png',
    description: 'Successfully completed the Front End Development - HTML course provided by Great Learning Academy.',
    skills: ['HTML5', 'Web Development', 'Semantic HTML', 'Web Accessibility']
  }
];

const Certificates = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  return (
    <section className="certificates" id="certificates">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Certificates</h2>
          <div className="certificates-grid">
            {certificates.map((cert, index) => (
              <motion.div
                key={cert.id}
                className="certificate-card"
                onClick={() => setSelectedCertificate(cert)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <div className="certificate-image">
                  <img src={cert.image} alt={cert.title} loading="lazy" />
                </div>
                <div className="certificate-info">
                  <h3>{cert.title}</h3>
                  <p className="issuer">{cert.issuer}</p>
                  <p className="date">{cert.date}</p>
                  <div className="skills-tags">
                    {cert.skills.slice(0, 3).map((skill, i) => (
                      <span key={i} className="skill-tag">{skill}</span>
                    ))}
                    {cert.skills.length > 3 && (
                      <span className="skill-tag more">+{cert.skills.length - 3}</span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedCertificate && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCertificate(null)}
          >
            <motion.div
              className="modal-content"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="close-button"
                onClick={() => setSelectedCertificate(null)}
                aria-label="Close modal"
              >
                <FaTimes />
              </button>
              
              <div className="modal-body">
                <div className="modal-image-container">
                  <img
                    src={selectedCertificate.image}
                    alt={selectedCertificate.title}
                    className="modal-image"
                  />
                </div>
                
                <div className="modal-info">
                  <h3>{selectedCertificate.title}</h3>
                  <p className="issuer">{selectedCertificate.issuer}</p>
                  <p className="date">{selectedCertificate.date}</p>
                  
                  <div className="description">
                    {selectedCertificate.description}
                  </div>
                  
                  <div className="skills-section">
                    <h4>Skills Verified</h4>
                    <div className="skills-tags">
                      {selectedCertificate.skills.map((skill, i) => (
                        <span key={i} className="skill-tag">{skill}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certificates;
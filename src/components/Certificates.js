import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';
import './Certificates.css';

const Certificates = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const certificates = [
    {
      id: 1,
      title: 'Gen AI Academy',
      issuer: 'Google Cloud & Hack2Skill',
      date: 'May 28, 2025',
      image: '/Certificates/Hack2Skill-Certificate.png',
      description: 'Successfully completed the Gen AI Academy, an initiative designed to foster industry-relevant AI expertise through a curated set of Generative AI courses. Gained foundational knowledge and practical skills utilizing key Google\'s Gen AI tools and platforms, including Vertex AI, Gemini APIs, Imagen, Streamlit and Multimodal RAG.',
      skills: ['Generative AI', 'Google Cloud', 'Vertex AI', 'Gemini APIs', 'Imagen', 'Streamlit', 'Multimodal RAG']
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
      skills: ['Python', 'OOP', 'Functional Programming', 'API Integration', 'Script Development', 'Modules']
    },
    {
      id: 6,
      title: 'Front End Development - HTML',
      issuer: 'Great Learning Academy',
      date: 'May 2024',
      image: '/Certificates/Frontend.png',
      description: 'Successfully completed the Front End Development - HTML course provided by Great Learning Academy.',
      skills: ['HTML5', 'Web Development', 'Semantic HTML', 'Web Accessibility', 'Forms & Tables']
    }
  ];

  return (
    <section className="certificates">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Certificates</h2>
          <div className="certificates-grid">
            {certificates.map((certificate) => (
              <motion.div
                key={certificate.id}
                className="certificate-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                onClick={() => setSelectedCertificate(certificate)}
              >
                <div className="certificate-image">
                  <img src={certificate.image} alt={certificate.title} />
                </div>
                <div className="certificate-info">
                  <h3>{certificate.title}</h3>
                  <p className="issuer">{certificate.issuer}</p>
                  <p className="date">{certificate.date}</p>
                  <div className="skills-tags">
                    {certificate.skills.slice(0, 3).map((skill, index) => (
                      <span key={index} className="skill-tag">{skill}</span>
                    ))}
                    {certificate.skills.length > 3 && (
                      <span className="skill-tag more">+{certificate.skills.length - 3}</span>
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
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="close-button"
                onClick={() => setSelectedCertificate(null)}
              >
                <FaTimes />
              </button>
              <img
                src={selectedCertificate.image}
                alt={selectedCertificate.title}
                className="modal-image"
              />
              <div className="modal-info">
                <h3>{selectedCertificate.title}</h3>
                <p className="issuer">{selectedCertificate.issuer}</p>
                <p className="date">{selectedCertificate.date}</p>
                <p className="description">{selectedCertificate.description}</p>
                <div className="skills-section">
                  <h4>Skills Gained</h4>
                  <div className="skills-tags">
                    {selectedCertificate.skills.map((skill, index) => (
                      <span key={index} className="skill-tag">{skill}</span>
                    ))}
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
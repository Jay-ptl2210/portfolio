import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaCode, FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, 
  FaDatabase, FaGithub, FaJava, FaPython, FaKey 
} from 'react-icons/fa';
import { SiCplusplus, SiC, SiExpress } from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';
import './Skills.css';

// Place this above the Skills component
function RenderIcon() {
  return (
    <svg width="1em" height="1em" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" style={{verticalAlign: 'middle'}}>
      <rect width="32" height="32" rx="16" fill="#3D6BE5"/>
      <path d="M8 22L16 8L24 22H8Z" fill="white"/>
    </svg>
  );
}

// Add these custom SVG icon components above the Skills component
function GeminiIcon() {
  return (
    <svg width="1em" height="1em" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" style={{verticalAlign: 'middle'}}>
      <polygon points="16,4 19,13 29,13 21,19 24,28 16,22 8,28 11,19 3,13 13,13" fill="#4285F4"/>
      <polygon points="16,7 18,13 24,13 19,17 21,23 16,19 11,23 13,17 8,13 14,13" fill="#34A853"/>
    </svg>
  );
}

function SpeechApiIcon() {
  return (
    <svg width="1em" height="1em" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" style={{verticalAlign: 'middle'}}>
      <rect x="12" y="8" width="8" height="14" rx="4" fill="#5F6368" />
      <rect x="14" y="22" width="4" height="3" rx="2" fill="#5F6368" />
      <rect x="10" y="25" width="12" height="2" rx="1" fill="#F9AB00" />
      <path d="M16 25v-3" stroke="#F9AB00" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['C', 'C++', 'Java', 'Python', 'JavaScript'],
      icon: <FaCode />,
      icons: [<SiC />, <SiCplusplus />, <FaJava />, <FaPython />, <FaJs />]
    },
    {
      title: 'Web Development',
      skills: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Google Gemini API', 'Web Speech API'],
      icon: <FaCode />,
      icons: [<FaHtml5 />, <FaCss3Alt />, <FaJs />, <FaReact />, <FaNodeJs />, <SiExpress />, <FaDatabase />, <FaKey />, <GeminiIcon />, <SpeechApiIcon />]
    },
    {
      title: 'Tools',
      skills: ['Microsoft Visual Studio Code', 'Git & Github', 'Render'],
      icon: <FaCode />,
      icons: [<VscCode />, <FaGithub />, <RenderIcon />]
    }
  ];

  return (
    <section className="skills">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Skills</h2>
          <div className="skills-grid">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                className="skill-category"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="category-header">
                  {category.icon}
                  <h3>{category.title}</h3>
                </div>
                <div className="skills-list">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="skill-item">
                      {category.icons[skillIndex]}
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 
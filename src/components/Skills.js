import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaCode, FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, 
  FaDatabase, FaGithub, FaJava, FaPython, FaKey 
} from 'react-icons/fa';
import { SiCplusplus, SiC, SiExpress } from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['C', 'C++', 'Java', 'Python'],
      icon: <FaCode />,
      icons: [<SiC />, <SiCplusplus />, <FaJava />, <FaPython />]
    },
    {
      title: 'Web Development',
      skills: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
      icon: <FaCode />,
      icons: [<FaHtml5 />, <FaCss3Alt />, <FaJs />, <FaReact />, <FaNodeJs />, <SiExpress />, <FaDatabase />, <FaKey />]
    },
    {
      title: 'Tools',
      skills: ['Microsoft Visual Studio Code', 'Git & Github'],
      icon: <FaCode />,
      icons: [<VscCode />, <FaGithub />]
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
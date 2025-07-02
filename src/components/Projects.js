import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: '🤖 Virtual AI Assistant',
      description: 'A voice-enabled Virtual AI Assistant built during my Node.js Internship at Webito Infotech. It mimics a JARVIS-like experience with real-time speech recognition, AI-powered replies, and customizable branding. Built using the MERN stack and powered by the Google Gemini API, it supports voice input/output for natural interaction.',
      image: '/Project/AI.png',
      technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Google Gemini API', 'Web Speech API'],
      github: 'https://github.com/Jay-ptl2210/virtualAssistant', // Add GitHub link if available
      live: 'https://virtualassistantbyjayptl.onrender.com/'    // Add live link if available
    },
    {
      title: 'Task Manager Web App',
      description: 'A full-stack task management application built during my internship, featuring secure user authentication, complete task CRUD operations, and server-side rendering using EJS templating. Also includes AI-powered task categorization via Hugging Face for smart task tagging.',
      image: '/Project/task-manager.png',
      technologies: ['Node.js', 'Express.js', 'MongoDB', 'EJS', 'JWT','Hugging Face API'],
      github: 'https://github.com/Jay-ptl2210/taskManager',
      live: 'https://taskmanagerbyjayptl.onrender.com/'
    },
    {
      title: 'CalcExperts - Interactive Math App',
      description: 'A React.js application featuring GCD, factorial, and modulo functions. Includes responsive login and about pages, demonstrating frontend development skills using React hooks and state management.',
      image: '/Project/project-1.png',
      technologies: ['React.js', 'CSS', 'JavaScript'],
      github: 'https://github.com/Jay-ptl2210/CalcExperts',
      live: 'https://calcexpertbyjayptl.netlify.app/'
    },
    {
      title: "Rajan Patel's Portfolio Website",
      description: 'A responsive portfolio website showcasing projects and skills. Features interactive layout, smooth animations, and dynamic content using modern web technologies.',
      image: '/Project/Rajan.png',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
      github: 'https://github.com/Jay-ptl2210/RajanPortfolio',
      live: 'https://rajanptlportfolio.netlify.app/'
    }
  ];

  return (
    <section className="projects">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">My Projects</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="project-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-links">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <FaGithub />
                    </a>
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <FaExternalLinkAlt />
                    </a>
                  </div>
                </div>
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tech">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 
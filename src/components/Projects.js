import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

const projects = [
  {
    title: '🤖 Virtual AI Assistant',
    description: 'A voice-enabled Virtual AI Assistant built during my Node.js Internship at Webito Infotech. It mimics a JARVIS-like experience with real-time speech recognition, AI-powered replies, and customizable branding. Built using the MERN stack and powered by the Google Gemini API.',
    image: '/Project/AI.png',
    technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Google Gemini API', 'Web Speech API'],
    github: 'https://github.com/Jay-ptl2210/virtualAssistant',
    live: 'https://virtualassistantbyjayptl.onrender.com/',
    accent: '#00d4ff',
  },
  {
    title: 'Task Manager Web App',
    description: 'A full-stack task management application featuring secure user authentication, complete task CRUD operations, and server-side rendering using EJS. Includes AI-powered task categorization via Hugging Face for smart task tagging.',
    image: '/Project/task-manager.png',
    technologies: ['Node.js', 'Express.js', 'MongoDB', 'EJS', 'JWT', 'Hugging Face API'],
    github: 'https://github.com/Jay-ptl2210/taskManager',
    live: 'https://taskmanagerbyjayptl.onrender.com/',
    accent: '#7c3aed',
  },
  {
    title: 'Loan Default Prediction',
    description: 'A machine learning project to predict loan defaults using Random Forest on financial data. Includes preprocessing, model evaluation with Confusion Matrix, F1-score, ROC-AUC, and result visualization with Matplotlib.',
    image: '/Project/Loan Default Pred.png',
    technologies: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Random Forest', 'Matplotlib'],
    live: 'https://drive.google.com/file/d/1FZ99bKdtWZ4ipJduJnGwN1a52h-MrfIa/view?usp=sharing',
    accent: '#f59e0b',
  },
  {
    title: 'CalcExperts — Math App',
    description: 'A React.js application featuring GCD, factorial, and modulo functions. Includes responsive login and about pages, demonstrating frontend development skills using React hooks and state management.',
    image: '/Project/project-1.png',
    technologies: ['React.js', 'CSS', 'JavaScript'],
    github: 'https://github.com/Jay-ptl2210/CalcExperts',
    live: 'https://calcexpertbyjayptl.netlify.app/',
    accent: '#10b981',
  },
  {
    title: "Rajan Patel's Portfolio",
    description: 'A responsive portfolio website showcasing projects and skills. Features interactive layout, smooth animations, and dynamic content using modern web technologies.',
    image: '/Project/Rajan.png',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
    github: 'https://github.com/Jay-ptl2210/RajanPortfolio',
    live: 'https://rajanptlportfolio.netlify.app/',
    accent: '#f43f5e',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, delay: i * 0.12, ease: 'easeOut' },
  }),
};

const Projects = () => (
  <section className="projects">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">My Projects</h2>
        <p className="projects-subtitle">Things I've built &amp; shipped</p>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              style={{ '--card-accent': project.accent }}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              {/* Image */}
              <div className="project-image">
                <img src={project.image} alt={project.title} loading="lazy" />
                <div className="project-overlay">
                  <div className="project-links">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <FaGithub />
                      </a>
                    )}
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer" aria-label="Live Demo">
                        <FaExternalLinkAlt />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>

              {/* Accent bottom bar */}
              <div className="project-accent-bar" />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default Projects;

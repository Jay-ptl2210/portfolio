import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaCode, FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs,
  FaDatabase, FaGithub, FaJava, FaPython, FaKey, FaDocker,
  FaServer, FaMobileAlt, FaCogs, FaRobot, FaBrain, FaTools
} from 'react-icons/fa';
import { SiCplusplus, SiC, SiExpress, SiScikitlearn, SiPostgresql, SiXml, SiOdoo } from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';
import './Skills.css';

/* ── Custom SVG Icons ── */
function RenderIcon() {
  return (
    <svg width="1em" height="1em" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ verticalAlign: 'middle' }}>
      <rect width="32" height="32" rx="16" fill="#3D6BE5" />
      <path d="M8 22L16 8L24 22H8Z" fill="white" />
    </svg>
  );
}
function GeminiIcon() {
  return (
    <svg width="1em" height="1em" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ verticalAlign: 'middle' }}>
      <polygon points="16,4 19,13 29,13 21,19 24,28 16,22 8,28 11,19 3,13 13,13" fill="#4285F4" />
      <polygon points="16,7 18,13 24,13 19,17 21,23 16,19 11,23 13,17 8,13 14,13" fill="#34A853" />
    </svg>
  );
}
function SpeechApiIcon() {
  return (
    <svg width="1em" height="1em" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ verticalAlign: 'middle' }}>
      <rect x="12" y="8" width="8" height="14" rx="4" fill="#5F6368" />
      <rect x="14" y="22" width="4" height="3" rx="2" fill="#5F6368" />
      <rect x="10" y="25" width="12" height="2" rx="1" fill="#F9AB00" />
      <path d="M16 25v-3" stroke="#F9AB00" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

/* ── Skill Data ── */
const skillCategories = [
  {
    id: 'languages',
    title: 'Programming Languages',
    icon: <FaCode />,
    accent: '#6C63FF',
    skills: [
      { name: 'C',          icon: <SiC /> },
      { name: 'C++',        icon: <SiCplusplus /> },
      { name: 'Java',       icon: <FaJava /> },
      { name: 'Python',     icon: <FaPython /> },
      { name: 'JavaScript', icon: <FaJs /> },
    ],
  },
  {
    id: 'web',
    title: 'Web Development',
    icon: <FaReact />,
    accent: '#00D8FF',
    skills: [
      { name: 'HTML5',           icon: <FaHtml5 /> },
      { name: 'CSS3',            icon: <FaCss3Alt /> },
      { name: 'JavaScript',      icon: <FaJs /> },
      { name: 'React.js',        icon: <FaReact /> },
      { name: 'Node.js',         icon: <FaNodeJs /> },
      { name: 'Express.js',      icon: <SiExpress /> },
      { name: 'MongoDB',         icon: <FaDatabase /> },
      { name: 'JWT Auth',        icon: <FaKey /> },
      { name: 'Gemini API',      icon: <GeminiIcon /> },
      { name: 'Web Speech API',  icon: <SpeechApiIcon /> },
    ],
  },
  {
    id: 'erp',
    title: 'ERP & Odoo',
    icon: <SiOdoo />,
    accent: '#875BF7',
    skills: [
      { name: 'Odoo Custom Modules',  icon: <SiOdoo /> },
      { name: 'Python (Odoo)',        icon: <FaPython /> },
      { name: 'XML Views & Menus',    icon: <SiXml /> },
      { name: 'QWeb PDF Reports',     icon: <SiXml /> },
      { name: 'Workflow States',      icon: <FaCogs /> },
      { name: 'Scheduled Cron Jobs',  icon: <FaRobot /> },
      { name: 'CRM & Sales Sync',     icon: <FaCogs /> },
      { name: 'Manufacturing (MRP)',   icon: <FaCogs /> },
      { name: 'HRMS Modules',         icon: <FaCogs /> },
      { name: 'API Integration',      icon: <FaServer /> },
      { name: 'PostgreSQL',           icon: <SiPostgresql /> },
      { name: 'VPS Deployment',       icon: <FaServer /> },
    ],
  },
  {
    id: 'aiml',
    title: 'AI / ML',
    icon: <FaBrain />,
    accent: '#F59E0B',
    skills: [
      { name: 'Scikit-learn',              icon: <SiScikitlearn /> },
      { name: 'Pandas',                    icon: <FaDatabase /> },
      { name: 'NumPy',                     icon: <FaPython /> },
      { name: 'Linear Regression',         icon: <FaCode /> },
      { name: 'Logistic Regression',       icon: <FaCode /> },
      { name: 'K-Nearest Neighbours',      icon: <FaCode /> },
      { name: 'Decision Trees',            icon: <FaCode /> },
      { name: 'Random Forest',             icon: <FaCode /> },
      { name: 'SVM',                       icon: <FaCode /> },
      { name: 'K-Means Clustering',        icon: <FaCode /> },
      { name: 'Model Evaluation',          icon: <FaCode /> },
    ],
  },
  {
    id: 'mobile',
    title: 'Mobile & Deployment',
    icon: <FaMobileAlt />,
    accent: '#10B981',
    skills: [
      { name: 'Android (AAB)',         icon: <FaMobileAlt /> },
      { name: 'Google Play Console',   icon: <FaMobileAlt /> },
      { name: 'iOS App Store',         icon: <FaMobileAlt /> },
      { name: 'Flutter Build Config',  icon: <FaCode /> },
      { name: 'Push Notifications',    icon: <FaRobot /> },
      { name: 'Live Deployments',      icon: <FaServer /> },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & DevOps',
    icon: <FaTools />,
    accent: '#EF4444',
    skills: [
      { name: 'VS Code',       icon: <VscCode /> },
      { name: 'Git & GitHub',  icon: <FaGithub /> },
      { name: 'Docker',        icon: <FaDocker /> },
      { name: 'PostgreSQL',    icon: <SiPostgresql /> },
      { name: 'Render',        icon: <RenderIcon /> },
      { name: 'VPS / Linux',   icon: <FaServer /> },
    ],
  },
];

/* ── Component ── */
const Skills = () => {
  const [activeTab, setActiveTab] = useState(0);
  const active = skillCategories[activeTab];

  return (
    <section className="skills">
      <div className="skills-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="section-title">Skills</h2>
          <p className="skills-subtitle">Technologies &amp; tools I work with</p>

          {/* Tab Bar */}
          <div className="skills-tabs" role="tablist">
            {skillCategories.map((cat, i) => (
              <button
                key={cat.id}
                role="tab"
                aria-selected={activeTab === i}
                className={`skills-tab${activeTab === i ? ' active' : ''}`}
                style={activeTab === i ? { '--tab-accent': cat.accent } : {}}
                onClick={() => setActiveTab(i)}
              >
                <span className="tab-icon">{cat.icon}</span>
                <span className="tab-label">{cat.title}</span>
              </button>
            ))}
          </div>

          {/* Panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              className="skills-panel"
              style={{ '--panel-accent': active.accent }}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
            >
              <div className="panel-header">
                <span className="panel-icon" style={{ color: active.accent }}>{active.icon}</span>
                <h3 className="panel-title">{active.title}</h3>
                <span className="panel-count">{active.skills.length} skills</span>
              </div>

              <div className="skills-pills">
                {active.skills.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    className="skill-pill"
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.25, delay: i * 0.04 }}
                    whileHover={{ scale: 1.06, y: -3 }}
                  >
                    <span className="pill-icon" style={{ color: active.accent }}>{skill.icon}</span>
                    <span className="pill-name">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Category dots overview */}
          <div className="skills-overview">
            {skillCategories.map((cat, i) => (
              <button
                key={cat.id}
                className={`overview-dot${activeTab === i ? ' active' : ''}`}
                style={{ '--dot-color': cat.accent }}
                onClick={() => setActiveTab(i)}
                aria-label={cat.title}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

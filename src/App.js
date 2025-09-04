import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Certificates from './components/Certificates';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="main-content">
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="certificates">
          <Certificates />
        </section>
        <section id="contact">
          <Contact/>
        </section>
      </main>
      <Footer/>
    </div>
  );
}

export default App;

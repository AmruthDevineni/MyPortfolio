import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import Navbar from './components/Navbar';
import Home from './sections/Home';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Contact from './sections/Contact';
import Chatbot from './components/Chatbot';
import ParticlesBackground from './components/ParticlesBackground';

function App() {
  return (
    <ParallaxProvider>
      <div className="relative min-h-screen">
        <ParticlesBackground />
        <Navbar />
        <main>
          <Home />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <Chatbot />
      </div>
    </ParallaxProvider>
  );
}

export default App;
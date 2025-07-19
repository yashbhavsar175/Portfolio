import React, { useState, useEffect } from 'react';
import { portfolioData } from './data/portfolioData';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import BackgroundBlobs from './components/BackgroundBlobs';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const toggleScrollTop = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleScrollTop);
    return () => {
      window.removeEventListener('scroll', toggleScrollTop);
    };
  }, []);

  const navLinks = ["About", "Skills", "Experience", "Projects", "Contact"];

  return (
    <div className="bg-gray-900 text-gray-300 font-sans leading-relaxed scroll-smooth">
      <BackgroundBlobs />
      <Header 
        isMenuOpen={isMenuOpen} 
        setIsMenuOpen={setIsMenuOpen} 
        navLinks={navLinks} 
        portfolioData={portfolioData} 
      />

      <main>
        <Hero portfolioData={portfolioData} />

        <About portfolioData={portfolioData} />

        <Skills portfolioData={portfolioData} />

        <Experience portfolioData={portfolioData} />

        <Projects portfolioData={portfolioData} />

        <Contact portfolioData={portfolioData} />
      </main>

      <Footer portfolioData={portfolioData} />
      
      <ScrollToTop isVisible={isVisible} scrollToTop={scrollToTop} />
    </div>
  );
}

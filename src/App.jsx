import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// File import
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ConsoleSection from './components/ConsoleSection';
import About from './components/About';
import Stack from './components/Stack';
import Experience from './components/Experience';
import Projects from './components/Projects';
import UseCase from './components/UseCases';
import CustomCursor from './shared/CustomCursor';
import Idea from './components/Idea';
import Faq from './components/Faq';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AllProjects from './components/AllProjects';
import ScrollToTop from "./components/ScrollToTop";

function HomePage() {
  return (
    <>
      <Hero />
      <ConsoleSection />
      <About />
      <Stack />
      <Experience />
      <Projects />
      <UseCase />
      <Idea />
      <Faq />
      <Contact />
    </>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />

      <div className="min-h-screen bg-[#070B09] text-[#E8F3EC] flex justify-center selection:bg-[#00FF88] selection:text-black">
        <div className="w-full max-w-[1170px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-between min-h-screen">
          <div>
            <CustomCursor />
            <Navbar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/projects" element={<AllProjects />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
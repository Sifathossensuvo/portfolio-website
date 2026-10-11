import React from 'react';

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
function App() {
  return (
    <div className="min-h-screen bg-[#070B09] text-[#E8F3EC] flex justify-center selection:bg-[#00FF88] selection:text-black">
      {/* Main container with max-width 1120px */}
      <div className="w-full max-w-[1170px] mx-auto px-4 sm:px-6 lg:px-8">
        
{/* All section */}
<Navbar />
<Hero />
<ConsoleSection />
<About />
<Stack />
<Experience />
<Projects />
<UseCase />
<CustomCursor />
<Idea />
<Faq />
<Contact />
<Footer />

      </div>
    </div>
  );
}

export default App;
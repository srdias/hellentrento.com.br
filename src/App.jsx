import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Process from './components/Process';
import FAQ from './components/FAQ';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Process />
        <Services />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../assets/logo3_preta.png';
import { trackWhatsAppClick } from '../utils/analytics';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-content">
        <a href="#home" className="logo">
          <img src={logo} alt="Hellen Trento Psicóloga" className="logo" />
        </a>
        <ul className="nav-links">
          <li><a href="#home">Início</a></li>
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="#atendimentos">Atendimentos</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
        <a 
          href="https://wa.me/5548999341192?text=Olá%20Hellen,%20vim%20pelo%20site%20e%20gostaria%20de%20informações%20sobre%20o%20atendimento%20para%20Dependência%20Emocional%20e%20Relacionamentos." 
          className="btn btn-primary nav-btn" 
          target="_blank" 
          rel="noopener noreferrer"
          onClick={() => trackWhatsAppClick('navbar')}
        >
          Agendar
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

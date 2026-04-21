import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../assets/logo3_preta.png';

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
          <img src={logo} alt="Hellen Trento Logo" />
        </a>
        <ul className="nav-links">
          <li><a href="#home">Início</a></li>
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="#atendimentos">Atendimentos</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
        <a href="https://wa.me/5548999341192" className="btn btn-primary nav-btn" target="_blank" rel="noopener noreferrer">
          Agendar
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

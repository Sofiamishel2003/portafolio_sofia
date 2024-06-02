import { useState, useEffect } from 'react';
import '../styles/Navbar.css';

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [blurred, setBlurred] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode', !darkMode);
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setBlurred(true);
    } else {
      setBlurred(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${blurred ? 'blurred' : ''}`}>
      <div className="navbar-container">
        <ul className="navbar-links">
          <li><a href="#banner">Inicio</a></li>
          <li><a href="#about-me">Sobre Mí</a></li>
          <li><a href="#portfolio">Portafolio</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#testimonials">Testimonios</a></li>
          <li><a href="#contact">Contacto</a></li>
        </ul>
        <div className="dark-mode-toggle">
          <label className="switch">
            <input type="checkbox" onChange={toggleDarkMode} />
            <span className="slider"></span>
          </label>
          <span>Modo Oscuro</span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

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
          <li><a href="#banner">Home</a></li>
          <li><a href="#about-me">About Me</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#skills">Skills</a></li>
        </ul>
        <div className="dark-mode-toggle">
          <label className="switch">
            <input type="checkbox" onChange={toggleDarkMode} />
            <span className="slider"></span>
          </label>
          <span>Dark Mode</span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

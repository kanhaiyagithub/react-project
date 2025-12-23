import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="social-header">
      <div className="social-header-container">
        <img src="/images/slogo.png" alt="Social Viral" className="logo" />
        
        <button className="mobile-menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <Link to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link to="/services" className="nav-link" onClick={() => setIsMenuOpen(false)}>Services</Link>
          <Link to="/testimonials" className="nav-link" onClick={() => setIsMenuOpen(false)}>Testimonials</Link>
          <Link to="/login" className="nav-link" onClick={() => setIsMenuOpen(false)}>Login / Sign Up</Link>
        </nav>
      </div>
    </header>
  );
}

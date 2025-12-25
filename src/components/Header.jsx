import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Header.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { logout } = useAuth();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    logout();
    navigate('/', { replace: true });
    setIsMenuOpen(false);
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
          <Link to="/home" className="nav-link" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link to="/services" className="nav-link" onClick={() => setIsMenuOpen(false)}>Services</Link>
          <Link to="/testimonials" className="nav-link" onClick={() => setIsMenuOpen(false)}>Testimonials</Link>
          <button className="nav-link logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </nav>
      </div>
    </header>
  );
}

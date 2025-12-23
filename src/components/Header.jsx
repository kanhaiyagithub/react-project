import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
    <header className="social-header">
     
       
        <img src="/images/slogo.png" alt="Social Viral" className="logo" />
       
        <nav className="nav">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/services" className="nav-link">Services</Link>
          <Link to="/HowItWorks" className="nav-link">How It Works</Link>
          <Link to="/testimonials" className="nav-link">Testimonials</Link>
          
         
         
         
             <Link to="/login" className="nav-link">Login / Sign Up</Link>
         
        </nav>
    
    </header>
  );
}

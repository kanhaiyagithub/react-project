import './Footer.css';
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-wave"></div>

      <div className="footer-content">
        {/* Left Column */}
        <div className="footer-section">
          <img src="/images/slogo.png" alt="Social Viral Logo" className="footer-logo" />
          <p className="footer-tagline">Grow your brand, audience & influence effortlessly.</p>
          <div className="footer-social">
            <i className="fab fa-instagram"></i>
            <i className="fab fa-youtube"></i>
            <i className="fab fa-linkedin-in"></i>
            <i className="fab fa-tiktok"></i>
          </div>
        </div>

        {/* Middle Links */}
        <div className="footer-section">
          <h3>Explore</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/career">Career</Link></li>
            <li><Link to="/contactus">Contact Us</Link></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="footer-section">
          <h3>Stay Updated</h3>
          <p>Subscribe for updates, offers & growth tips!</p>

          <div className="newsletter-box">
            <input type="email" placeholder="Enter your email" />
            <button>Sign Up</button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>© 2025 Social Viral Technologies Pvt. Ltd.</p>

        <div className="footer-bottom-links">
          <Link to="/terms">Terms of Service</Link>
          <span>|</span>
          <Link to="/privacy-policy">Privacy Policy</Link>
          <span>|</span>
          <Link to="/refund-policy">Refund Policy</Link>
        </div>
      </div>
    </footer>
  );
}

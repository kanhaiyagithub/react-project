import './HeroSection.css';
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>
          Buy Instagram and YouTube views and Other Interactions Delivered in Minutes!
        </h1>

        <p>
          Social Viral delivers the highest quality services. Buy Subscribers, Likes, and Views 
          to instantly build your influence and improve your engagement with real active users.
        </p>

        <div className="hero-action-centered">
          {/* UPDATED BUTTON → SERVICES PAGE */}
          <Link to="/services" className="hero-btn">
            Get Started
          </Link>
        </div>
      </div>

      {/* Stats Section */}
      <div className="hero-stats">
        <span><strong>10M+</strong> views delivered</span>
        <span><strong>1M+</strong> happy users</span>
        <span><strong>250+</strong> niches supported</span>
      </div>
    </section>
  );
}

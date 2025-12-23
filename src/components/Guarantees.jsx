// src/components/Guarantees.jsx
import './Guarantees.css';
import { FaSearch, FaShieldAlt, FaHeadset, FaUndo } from 'react-icons/fa';

export default function Guarantees() {
  return (
    <section className="guarantees-section">
      <h2>Our Guarantees</h2>
      <p className="subtitle">
        At Social Viral, we pride ourselves on quality, security, and service.
      </p>
      <div className="guarantee-cards">
        <div className="guarantee-card">
          <div className="icon-wrapper pink">
            <FaSearch />
          </div>
          <h3>Real Social Media Engagement</h3>
          <p>
            We provide real likes, views, and followers to boost authentic engagement and avoid fake activity.
          </p>
        </div>

        <div className="guarantee-card">
          <div className="icon-wrapper orange">
            <FaShieldAlt />
          </div>
          <h3>Commitment to Security</h3>
          <p>
            Your data is safe with us. All transactions are encrypted and handled securely to protect your privacy.
          </p>
        </div>

        <div className="guarantee-card">
          <div className="icon-wrapper blue">
            <FaHeadset />
          </div>
          <h3>Premium Customer Experience</h3>
          <p>
            We offer fast delivery and 24/7 customer support to make sure your needs are met without delay.
          </p>
        </div>

        <div className="guarantee-card">
          <div className="icon-wrapper green">
            <FaUndo />
          </div>
          <h3>Refund Policy</h3>
          <p>
            Not satisfied? We offer a hassle-free refund policy for incomplete or undelivered services within 7 days.
          </p>
        </div>
      </div>
    </section>
  );
}

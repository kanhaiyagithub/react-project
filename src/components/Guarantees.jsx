// src/components/Guarantees.jsx
import './Guarantees.css';
import { FaSearch, FaShieldAlt, FaHeadset, FaUndo } from 'react-icons/fa';

export default function Guarantees() {
  const steps = [
    {
      number: "1",
      title: "Choose a Service",
      description: "Select from followers, likes, views or custom engagement services.",
      icon: "fa-solid fa-list-check"
    },
    {
      number: "2",
      title: "Enter Details",
      description: "Provide your post URL or username to deliver the services accurately.",
      icon: "fa-solid fa-pen"
    },
    {
      number: "3",
      title: "Make Payment",
      description: "Use our secure checkout system to complete your purchase.",
      icon: "fa-solid fa-credit-card"
    },
    {
      number: "4",
      title: "Watch Growth",
      description: "Your order starts processing instantly. Sit back and watch your brand grow!",
      icon: "fa-solid fa-chart-line"
    }
  ];

  return (
    <>
      {/* How It Works Section */}
      <section className="guarantees-section how-it-works-section">
        <h2>How It Works</h2>
        <p className="subtitle">
          Our process is simple, fast, and secure. Here's how you can boost your social media presence in just a few clicks.
        </p>
        <div className="guarantee-cards">
          {steps.map((step, index) => (
            <div key={index} className="guarantee-card step-card">
              <div className="step-number">{step.number}</div>
              <div className="step-icon"><i className={step.icon}></i></div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Guarantees Section */}
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
    </>
  );
}

import HeroSection from '../components/HeroSection';
import PriceCard from '../components/PriceCard';
import Guarantees from '../components/Guarantees';
import './Home.css';

export default function Home() {
  const services = [
    // { title: "Instagram Followers", price: "10", features: ["Real Users", "Fast Delivery"] },
    // { title: "YouTube Subscribers", price: "15", features: ["No Drop", "Targeted Audience"] },
    // { title: "TikTok Views", price: "5", features: ["Instant Start", "1000+ Views"] },
  ];

  return (
    <div className="home-container">
      {/* Top hero section */}
      <HeroSection />

      {/* Services heading and pricing cards */}
      <section className="pricing-section">
        <h2 className="home-heading">Why Our Services Is Best </h2>
        <div className="cards-container">
          {services.map((service, index) => (
            <PriceCard key={index} {...service} />
          ))}
        </div>
      </section>

      {/* Guarantees Section */}
      <Guarantees />
    </div>
  );
}

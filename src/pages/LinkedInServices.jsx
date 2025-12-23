// src/pages/LinkedInServices.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa6";
import "./LinkedInServices.css";
import PricingModal from "../components/PricingModal";
import { openWhatsAppSupport } from "../utils/whatsapp";

export default function LinkedInServices() {
  const [selectedService, setSelectedService] = useState(null);
  const platform = "linkedin";
  const items = [
    {
      id: "followers",
      title: "Buy LinkedIn Followers",
      price: "₹249 / 100 followers",
      description:
        "Boost your professional credibility with genuine LinkedIn followers.",
    },
    {
      id: "post-engagement",
      title: "Buy Post Engagement",
      price: "₹199 / campaign",
      description:
        "Increase post reach with likes, shares, and comments from real users.",
    },
    {
      id: "profile-views",
      title: "Increase Profile Views",
      price: "₹299 / campaign",
      description:
        "Get more recruiters and professionals to visit your LinkedIn profile.",
    },
  ];

  return (
    <div className="ln-page">
      {/* Header */}
      <div className="ln-hero">
        <FaLinkedin className="ln-icon" />
        <h1>LinkedIn Growth Services</h1>
        <p className="ln-sub">
          Boost your professional presence with authentic engagement, profile visibility, 
          and credible network growth. Perfect for job seekers, founders, and creators.
        </p>
      </div>

      {/* Layout */}
      <div className="ln-content container">

        {/* Sidebar */}
        <aside className="ln-sidebar">
          <ul>
            {items.map((it) => (
              <li key={it.id}>
                <Link to={`/services/linkedin/${it.id}`} className="ln-side-link">
                  <span className="side-title">{it.title}</span>
                  <span className="side-price">{it.price}</span>
                </Link>
              </li>
            ))}
          </ul>
        </aside>

        {/* Grid Section */}
        <section className="ln-grid">
          {items.map((it) => (
            <article key={it.id} className="ln-card">
              <div className="ln-card-top">
                <h3>{it.title}</h3>
                <div className="ln-price">{it.price}</div>
              </div>

              <p className="ln-desc">{it.description}</p>

              <div className="ln-actions">
                <button
                  className="btn-primary"
                  onClick={() => setSelectedService(it.title)}
                >
                  View & Order
                </button>

                <button
                  className="btn-ghost"
                  onClick={() => openWhatsAppSupport(it.title)}
                >
                  Contact Support
                </button>
              </div>
            </article>
          ))}
        </section>

      </div>

      {/* PRICING MODAL */}
      <PricingModal
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
        serviceTitle={selectedService}
        platform={platform}
      />
    </div>
  );
}

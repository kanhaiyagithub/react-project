// src/pages/SnapchatServices.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaSnapchat } from "react-icons/fa6";
import "./SnapchatServices.css";
import PricingModal from "../components/PricingModal";
import { openWhatsAppSupport } from "../utils/whatsapp";

export default function SnapchatServices() {
  const [selectedService, setSelectedService] = useState(null);
  const platform = "snapchat";
  const items = [
    {
      id: "story-views",
      title: "Buy Story Views",
      price: "₹129 / 500 views",
      description:
        "Boost your Snapchat visibility with high-quality story views delivered instantly.",
    },
    {
      id: "followers",
      title: "Buy Snapchat Followers",
      price: "₹199 / 100 followers",
      description:
        "Grow your Snapchat audience and reach more users with real followers.",
    },
    {
      id: "spotlight-views",
      title: "Buy Spotlight Views",
      price: "₹159 / 1000 views",
      description:
        "Increase your chances of reaching Explore recommendations with boosted Spotlight views.",
    },
  ];

  return (
    <div className="sc-page">
      {/* Header Section */}
      <div className="sc-hero">
        <FaSnapchat className="sc-icon" />
        <h1>Snapchat Growth Services</h1>
        <p className="sc-sub">
          Unlock higher engagement on Snapchat with story views, spotlight boosts, and follower growth. 
          100% safe, fast, and effective social boosting solutions.
        </p>
      </div>

      {/* Layout */}
      <div className="sc-content container">

        {/* Sidebar */}
        <aside className="sc-sidebar">
          <ul>
            {items.map((it) => (
              <li key={it.id}>
                <Link to={`/services/snapchat/${it.id}`} className="sc-side-link">
                  <span className="side-title">{it.title}</span>
                  <span className="side-price">{it.price}</span>
                </Link>
              </li>
            ))}
          </ul>
        </aside>

        {/* Main Services Grid */}
        <section className="sc-grid">
          {items.map((it) => (
            <article key={it.id} className="sc-card">
              <div className="sc-card-top">
                <h3>{it.title}</h3>
                <div className="sc-price">{it.price}</div>
              </div>

              <p className="sc-desc">{it.description}</p>

              <div className="sc-actions">
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

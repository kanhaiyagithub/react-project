// src/pages/SpotifyServices.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaSpotify } from "react-icons/fa6";
import "./SpotifyServices.css";
import PricingModal from "../components/PricingModal";
import { openWhatsAppSupport } from "../utils/whatsapp";

export default function SpotifyServices() {
  const [selectedService, setSelectedService] = useState(null);
  const platform = "spotify";
  const items = [
    {
      id: "plays",
      title: "Buy Spotify Plays",
      price: "₹149 / 1000 plays",
      description:
        "Increase your track visibility and ranking with high-quality Spotify plays.",
    },
    {
      id: "followers",
      title: "Buy Spotify Followers",
      price: "₹199 / 100 followers",
      description:
        "Grow your artist profile with targeted Spotify followers that improve credibility.",
    },
    {
      id: "monthly-listeners",
      title: "Increase Monthly Listeners",
      price: "₹399 / campaign",
      description:
        "Boost your monthly listeners count with safe and organic-style promotion.",
    },
  ];

  return (
    <div className="sp-page">
      {/* Header */}
      <div className="sp-hero">
        <FaSpotify className="sp-icon" />
        <h1>Spotify Promotion Services</h1>
        <p className="sp-sub">
          Boost your Spotify growth with safe and real engagement — plays, followers and monthly listeners.
          Perfect for artists looking to expand their reach and credibility.
        </p>
      </div>

      {/* Layout */}
      <div className="sp-content container">

        {/* Sidebar */}
        <aside className="sp-sidebar">
          <ul>
            {items.map((it) => (
              <li key={it.id}>
                <Link to={`/services/spotify/${it.id}`} className="sp-side-link">
                  <span className="side-title">{it.title}</span>
                  <span className="side-price">{it.price}</span>
                </Link>
              </li>
            ))}
          </ul>
        </aside>

        {/* Main Grid */}
        <section className="sp-grid">
          {items.map((it) => (
            <article key={it.id} className="sp-card">
              <div className="sp-card-top">
                <h3>{it.title}</h3>
                <div className="sp-price">{it.price}</div>
              </div>

              <p className="sp-desc">{it.description}</p>

              <div className="sp-actions">
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

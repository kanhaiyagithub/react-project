// src/pages/DiscordServices.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaDiscord } from "react-icons/fa6";
import "./DiscordServices.css";
import PricingModal from "../components/PricingModal";
import { openWhatsAppSupport } from "../utils/whatsapp";

export default function DiscordServices() {
  const [selectedService, setSelectedService] = useState(null);
  const platform = "discord";
  const items = [
    {
      id: "members",
      title: "Buy Discord Members",
      price: "₹199 / 50 members",
      description:
        "Increase your server population instantly with real Discord members.",
    },
    {
      id: "online-members",
      title: "Increase Online Members",
      price: "₹249 / custom plan",
      description:
        "Boost your server’s activity with constantly online, active users.",
    },
    {
      id: "server-engagement",
      title: "Server Engagement Boost",
      price: "₹299 / campaign",
      description:
        "Improve server activity with message senders, reactions & engagement tools.",
    },
  ];

  return (
    <div className="dc-page">
      {/* Header */}
      <div className="dc-hero">
        <FaDiscord className="dc-icon" />
        <h1>Discord Growth Services</h1>
        <p className="dc-sub">
          Supercharge your Discord server with members, engagement, and active users.  
          Perfect for growing communities, startups, and gaming servers.
        </p>
      </div>

      {/* Layout */}
      <div className="dc-content container">

        {/* Sidebar */}
        <aside className="dc-sidebar">
          <ul>
            {items.map((it) => (
              <li key={it.id}>
                <Link to={`/services/discord/${it.id}`} className="dc-side-link">
                  <span className="side-title">{it.title}</span>
                  <span className="side-price">{it.price}</span>
                </Link>
              </li>
            ))}
          </ul>
        </aside>

        {/* Cards Grid */}
        <section className="dc-grid">
          {items.map((it) => (
            <article key={it.id} className="dc-card">
              <div className="dc-card-top">
                <h3>{it.title}</h3>
                <div className="dc-price">{it.price}</div>
              </div>

              <p className="dc-desc">{it.description}</p>

              <div className="dc-actions">
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
                  Need Help?
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

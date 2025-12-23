// src/pages/PinterestServices.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaPinterest } from "react-icons/fa6";
import "./PinterestServices.css";

export default function PinterestServices() {
  const items = [
    {
      id: "followers",
      title: "Buy Pinterest Followers",
      price: "₹149 / 100 followers",
      description:
        "Grow your Pinterest profile authority with authentic followers that increase visibility.",
    },
    {
      id: "pin-saves",
      title: "Buy Pin Saves",
      price: "₹99 / 50 saves",
      description:
        "Boost your content reach by increasing saves on your pins organically.",
    },
    {
      id: "pin-likes",
      title: "Buy Pin Likes",
      price: "₹79 / 50 likes",
      description:
        "Improve the ranking of your pins with high-quality likes from active users.",
    },
  ];

  return (
    <div className="pt-page">
      {/* Header */}
      <div className="pt-hero">
        <FaPinterest className="pt-icon" />
        <h1>Pinterest Growth Services</h1>
        <p className="pt-sub">
          Enhance your Pinterest presence with followers, pin saves, and engagement boosts.
          Perfect for creators, brands, and businesses looking to improve visibility.
        </p>
      </div>

      {/* Layout */}
      <div className="pt-content container">

        {/* Sidebar */}
        <aside className="pt-sidebar">
          <ul>
            {items.map((it) => (
              <li key={it.id}>
                <Link to={`/services/pinterest/${it.id}`} className="pt-side-link">
                  <span className="side-title">{it.title}</span>
                  <span className="side-price">{it.price}</span>
                </Link>
              </li>
            ))}
          </ul>
        </aside>

        {/* Cards */}
        <section className="pt-grid">
          {items.map((it) => (
            <article key={it.id} className="pt-card">
              <div className="pt-card-top">
                <h3>{it.title}</h3>
                <div className="pt-price">{it.price}</div>
              </div>

              <p className="pt-desc">{it.description}</p>

              <div className="pt-actions">
                <Link to={`/services/pinterest/${it.id}`} className="btn-primary">
                  View & Order
                </Link>

                <button
                  className="btn-ghost"
                  onClick={() => alert("Need help? Email support@socialviral.com")}
                >
                  Contact Support
                </button>
              </div>
            </article>
          ))}
        </section>

      </div>
    </div>
  );
}

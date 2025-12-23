// src/pages/TwitterServices.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaXTwitter } from "react-icons/fa6";
import "./TwitterServices.css";

export default function TwitterServices() {
  const items = [
    {
      id: "followers",
      title: "Buy X Followers",
      price: "₹149 / 100 followers",
      description:
        "Strengthen your presence on X (Twitter) with high-quality, stable followers.",
    },
    {
      id: "likes",
      title: "Buy X Likes",
      price: "₹99 / 100 likes",
      description:
        "Boost engagement on your tweets with real, active user likes.",
    },
    {
      id: "retweets",
      title: "Buy Retweets",
      price: "₹129 / 50 retweets",
      description:
        "Amplify your content's reach and visibility through authentic retweets.",
    },
  ];

  return (
    <div className="tw-page">
      {/* Header */}
      <div className="tw-hero">
        <FaXTwitter className="tw-icon" />
        <h1>X (Twitter) Growth Services</h1>
        <p className="tw-sub">
          Unlock massive reach on X with targeted followers, engagement, and content promotion campaigns
          designed to grow your brand organically and safely.
        </p>
      </div>

      {/* Layout */}
      <div className="tw-content container">

        {/* Sidebar */}
        <aside className="tw-sidebar">
          <ul>
            {items.map((it) => (
              <li key={it.id}>
                <Link to={`/services/twitter/${it.id}`} className="tw-side-link">
                  <span className="side-title">{it.title}</span>
                  <span className="side-price">{it.price}</span>
                </Link>
              </li>
            ))}
          </ul>
        </aside>

        {/* Main Service Cards */}
        <section className="tw-grid">
          {items.map((it) => (
            <article key={it.id} className="tw-card">
              <div className="tw-card-top">
                <h3>{it.title}</h3>
                <div className="tw-price">{it.price}</div>
              </div>

              <p className="tw-desc">{it.description}</p>

              <div className="tw-actions">
                <Link to={`/services/twitter/${it.id}`} className="btn-primary">
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

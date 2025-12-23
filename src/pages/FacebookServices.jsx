// src/pages/FacebookServices.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa6";
import "./FacebookServices.css";

export default function FacebookServices() {
  const items = [
    {
      id: "followers",
      title: "Buy Facebook Followers",
      price: "₹129 / 100 followers",
      description:
        "Increase your Facebook page credibility with high-quality and stable followers.",
    },
    {
      id: "likes",
      title: "Buy Facebook Likes",
      price: "₹99 / 100 likes",
      description:
        "Boost engagement on your posts with real likes from active users.",
    },
    {
      id: "post-engagement",
      title: "Buy Post Engagement",
      price: "₹199 / campaign",
      description:
        "Improve the reach of your Facebook posts with likes, shares, and interactions.",
    },
  ];

  return (
    <div className="fb-page">
      {/* Header */}
      <div className="fb-hero">
        <FaFacebook className="fb-icon" />
        <h1>Facebook Growth Services</h1>
        <p className="fb-sub">
          Improve your Facebook page visibility, attract more followers, and increase post engagement
          with our safe and high-quality promotional solutions.
        </p>
      </div>

      {/* Content Layout */}
      <div className="fb-content container">

        {/* Sidebar */}
        <aside className="fb-sidebar">
          <ul>
            {items.map((it) => (
              <li key={it.id}>
                <Link to={`/services/facebook/${it.id}`} className="fb-side-link">
                  <span className="side-title">{it.title}</span>
                  <span className="side-price">{it.price}</span>
                </Link>
              </li>
            ))}
          </ul>
        </aside>

        {/* Main Cards */}
        <section className="fb-grid">
          {items.map((it) => (
            <article key={it.id} className="fb-card">
              <div className="fb-card-top">
                <h3>{it.title}</h3>
                <div className="fb-price">{it.price}</div>
              </div>

              <p className="fb-desc">{it.description}</p>

              <div className="fb-actions">
                <Link to={`/services/facebook/${it.id}`} className="btn-primary">
                  View & Order
                </Link>

                <button
                  className="btn-ghost"
                  onClick={() => alert("For assistance, email support@socialviral.com")}
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

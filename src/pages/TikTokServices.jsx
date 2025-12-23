// src/pages/TikTokServices.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./TikTokServices.css";

export default function TikTokServices() {
  const items = [
    {
      id: "followers",
      title: "Buy TikTok Followers",
      price: "₹199 / 100",
      description:
        "Boost your TikTok credibility with real followers delivered safely and quickly.",
    },
    {
      id: "likes",
      title: "Buy TikTok Likes",
      price: "₹99 / 100",
      description:
        "Increase engagement on your TikTok videos with high-quality likes that look natural.",
    },
    {
      id: "views",
      title: "Buy TikTok Views",
      price: "₹49 / 1000",
      description:
        "Get instant video views to push your TikTok content into the algorithm for faster reach.",
    },
  ];

  return (
    <div className="tt-page">
      <div className="tt-hero">
        <h1>TikTok Engagement Services</h1>
        <p className="tt-sub">
          Boost your TikTok profile with followers, likes, and high-retention views.  
          Fast delivery & 24/7 support included.
        </p>
      </div>

      <div className="tt-content container">
        {/* Sidebar list */}
        <aside className="tt-sidebar">
          <ul>
            {items.map((it) => (
              <li key={it.id}>
                <Link
                  to={`/services/tiktok/${it.id}`}
                  className="tt-side-link"
                >
                  <span className="side-title">{it.title}</span>
                  <span className="side-price">{it.price}</span>
                </Link>
              </li>
            ))}
          </ul>
        </aside>

        {/* Main service cards */}
        <section className="tt-grid">
          {items.map((it) => (
            <article key={it.id} className="tt-card">
              <div className="tt-card-top">
                <h3>{it.title}</h3>
                <div className="tt-price">{it.price}</div>
              </div>

              <p className="tt-desc">{it.description}</p>

              <div className="tt-actions">
                <Link
                  to={`/services/tiktok/${it.id}`}
                  className="btn-primary"
                >
                  View & Order
                </Link>

                <button
                  className="btn-ghost"
                  onClick={() =>
                    alert("Need help? Contact support@socialviral.com")
                  }
                >
                  Ask Support
                </button>
              </div>
            </article>
          ))}
        </section>
      </div>
    </div>
  );
}

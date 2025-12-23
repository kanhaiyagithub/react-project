// src/pages/QuoraServices.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaQuora } from "react-icons/fa6";
import "./QuoraServices.css";

export default function QuoraServices() {
  const items = [
    {
      id: "followers",
      title: "Buy Quora Followers",
      price: "₹149 / 50 followers",
      description:
        "Increase your authority on Quora with real followers who strengthen your profile credibility.",
    },
    {
      id: "upvotes",
      title: "Buy Answer Upvotes",
      price: "₹99 / 50 upvotes",
      description:
        "Boost your answer ranking and visibility with authentic Quora upvotes.",
    },
    {
      id: "views",
      title: "Buy Quora Views",
      price: "₹129 / 1000 views",
      description:
        "Increase your answer reach and impressions to grow organically on Quora.",
    },
  ];

  return (
    <div className="qr-page">
      {/* Header */}
      <div className="qr-hero">
        <FaQuora className="qr-icon" />
        <h1>Quora Marketing Services</h1>
        <p className="qr-sub">
          Build authority on Quora with targeted followers, answer upvotes, and organic-style views.
          A perfect solution to grow visibility and credibility.
        </p>
      </div>

      {/* Layout */}
      <div className="qr-content container">

        {/* Sidebar */}
        <aside className="qr-sidebar">
          <ul>
            {items.map((it) => (
              <li key={it.id}>
                <Link to={`/services/quora/${it.id}`} className="qr-side-link">
                  <span className="side-title">{it.title}</span>
                  <span className="side-price">{it.price}</span>
                </Link>
              </li>
            ))}
          </ul>
        </aside>

        {/* Cards Section */}
        <section className="qr-grid">
          {items.map((it) => (
            <article key={it.id} className="qr-card">
              <div className="qr-card-top">
                <h3>{it.title}</h3>
                <div className="qr-price">{it.price}</div>
              </div>

              <p className="qr-desc">{it.description}</p>

              <div className="qr-actions">
                <Link to={`/services/quora/${it.id}`} className="btn-primary">
                  View & Order
                </Link>

                <button
                  className="btn-ghost"
                  onClick={() => alert("Need support? Email support@socialviral.com")}
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

// src/pages/RedditServices.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaReddit } from "react-icons/fa6";
import "./RedditServices.css";

export default function RedditServices() {
  const items = [
    {
      id: "upvotes",
      title: "Buy Reddit Upvotes",
      price: "₹99 / 100 upvotes",
      description:
        "Increase post visibility and ranking in subreddits using safe upvote delivery.",
    },
    {
      id: "comments",
      title: "Buy Reddit Comments",
      price: "₹249 / 30 comments",
      description:
        "Add relevant, natural-looking comments to boost engagement and conversation.",
    },
    {
      id: "subscribers",
      title: "Grow Subreddit Subscribers",
      price: "₹399 / 100 subscribers",
      description:
        "Grow your subreddit community with targeted subscribers to increase activity.",
    },
  ];

  return (
    <div className="rd-page">
      <div className="rd-hero">
        <FaReddit className="rd-icon" />
        <h1>Reddit Services</h1>
        <p className="rd-sub">
          Improve your Reddit presence — from upvotes and comments to growing subreddit membership.
          We use safe delivery methods and prioritize quality.
        </p>
      </div>

      <div className="rd-content container">
        {/* Left sidebar */}
        <aside className="rd-sidebar">
          <ul>
            {items.map((it) => (
              <li key={it.id}>
                <Link to={`/services/reddit/${it.id}`} className="rd-side-link">
                  <span className="side-title">{it.title}</span>
                  <span className="side-price">{it.price}</span>
                </Link>
              </li>
            ))}
          </ul>
        </aside>

        {/* Right grid */}
        <section className="rd-grid">
          {items.map((it) => (
            <article key={it.id} className="rd-card">
              <div className="rd-card-top">
                <h3>{it.title}</h3>
                <div className="rd-price">{it.price}</div>
              </div>

              <p className="rd-desc">{it.description}</p>

              <div className="rd-actions">
                <Link to={`/services/reddit/${it.id}`} className="btn-primary">
                  View & Order
                </Link>

                <button
                  className="btn-ghost"
                  onClick={() => alert("Need help? Contact support@socialviral.com")}
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

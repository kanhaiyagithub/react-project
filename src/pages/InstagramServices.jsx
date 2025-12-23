import React from "react";
import "./InstagramServices.css";

export default function InstagramServices() {
  const categories = [
    { name: "Buy Instagram Followers", price: "₹199 / 100" },
    { name: "Buy Instagram Likes", price: "₹99 / 100" },
    { name: "Buy Instagram Comments", price: "₹149 / 10" },
    { name: "Buy Instagram Views", price: "₹49 / 1000" },
    { name: "Buy Instagram Reels Likes", price: "₹99 / 100" },
    { name: "Buy Instagram Shares", price: "₹79 / 100" },
    { name: "Buy Instagram Saves", price: "₹59 / 100" },
    { name: "Buy Instagram Story Views", price: "₹99 / 500" },
  ];

  const serviceCards = [
    {
      title: "Buy Instagram Followers",
      price: "₹199 / 100",
      text: "Boost your Instagram growth with high-quality, real followers delivered safely and quickly.",
    },
    {
      title: "Buy Instagram Likes",
      price: "₹99 / 100",
      text: "Increase your post engagement with real & high-retention Instagram likes.",
    },
    {
      title: "Buy Instagram Comments",
      price: "₹149 / 10",
      text: "Increase credibility with real, relevant comments on your posts.",
    },
    {
      title: "Buy Instagram Views",
      price: "₹49 / 1000",
      text: "Push your Instagram videos to more people with fast, safe views.",
    },
    {
      title: "Buy Instagram Reels Likes",
      price: "₹99 / 100",
      text: "Boost your Reels engagement and attract more viral reach.",
    },
    {
      title: "Buy Instagram Shares",
      price: "₹79 / 100",
      text: "Increase your content reach with high-quality Instagram shares.",
    },
    {
      title: "Buy Instagram Saves",
      price: "₹59 / 100",
      text: "Boost your post ranking with real Instagram saves.",
    },
    {
      title: "Buy Instagram Story Views",
      price: "₹99 / 500",
      text: "Grow your story reach with real & active viewers.",
    },
  ];

  return (
    <div className="service-page">
      <h1 className="service-title">Instagram Growth Services</h1>
      <p className="service-subtitle">
        Boost your Instagram profile with followers, likes, comments, and more. Fast delivery & 24/7 support included.
      </p>

      <div className="service-layout">
        {/* LEFT CATEGORY LIST */}
        <div className="category-list">
          {categories.map((cat, idx) => (
            <div key={idx} className="category-item">
              <span>{cat.name}</span>
              <span className="price-tag">{cat.price}</span>
            </div>
          ))}
        </div>

        {/* RIGHT SERVICE INFO CARDS */}
        <div className="service-cards">
          {serviceCards.map((service, idx) => (
            <div key={idx} className="service-card">
              <h2>{service.title}</h2>

              <span className="price-badge">{service.price}</span>

              <p>{service.text}</p>

              <div className="card-btn-group">
                <button className="order-btn">View & Order</button>
                <button className="support-btn">Ask Support</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

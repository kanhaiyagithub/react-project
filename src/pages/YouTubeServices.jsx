import React, { useState } from "react";
import "./YouTubeServices.css";
import PricingModal from "../components/PricingModal";
import { openWhatsAppSupport } from "../utils/whatsapp";

export default function YouTubeServices() {
  const [selectedService, setSelectedService] = useState(null);
  const platform = "youtube";
  const categories = [
    { name: "Buy YouTube Subscribers", price: "₹299 / 100" },
    { name: "Buy YouTube Views", price: "₹99 / 1000" },
    { name: "Buy YouTube Likes", price: "₹149 / 100" },
    { name: "Buy YouTube Comments", price: "₹199 / 10" },
  ];

  const serviceCards = [
    {
      title: "Buy YouTube Subscribers",
      price: "₹299 / 100",
      text: "Grow your channel with real, high-retention YouTube subscribers that boost trust and credibility.",
    },
    {
      title: "Buy YouTube Views",
      price: "₹99 / 1000",
      text: "Increase your video ranking and reach with safe, high-quality YouTube views.",
    },
    {
      title: "Buy YouTube Likes",
      price: "₹149 / 100",
      text: "Boost your engagement rate with authentic YouTube likes for better visibility.",
    },
    {
      title: "Buy YouTube Comments",
      price: "₹199 / 10",
      text: "Get relevant, high-quality comments to increase engagement and audience trust.",
    },
  ];

  return (
    <div className="yt-page">
      <h1 className="yt-title">YouTube Promotions</h1>
      <p className="yt-subtitle">
        Boost your YouTube channel with high-quality Subscribers, Views, Likes, and Comments. Improve reach and make your content stand out.
      </p>

      <div className="yt-layout">
        {/* LEFT CATEGORY LIST */}
        <div className="yt-category-list">
          {categories.map((cat, idx) => (
            <div key={idx} className="yt-category-item">
              <span>{cat.name}</span>
              <span className="yt-price-tag">{cat.price}</span>
            </div>
          ))}
        </div>

        {/* RIGHT SERVICE CARDS */}
        <div className="yt-cards">
          {serviceCards.map((service, idx) => (
            <div key={idx} className="yt-card">
              <h2>{service.title}</h2>

              <span className="yt-badge">{service.price}</span>

              <p>{service.text}</p>

              <div className="yt-btns">
                <button 
                  className="yt-order-btn"
                  onClick={() => setSelectedService(service.title)}
                >
                  View & Order
                </button>
                <button 
                  className="yt-support-btn"
                  onClick={() => openWhatsAppSupport(service.title)}
                >
                  Ask Support
                </button>
              </div>
            </div>
          ))}
        </div>
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

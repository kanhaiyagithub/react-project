import React, { useState, useEffect } from "react";
import "./Testimonials.css";

const testimonialsData = [
  {
    name: "Vishal",
    role: "Entrepreneur",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "Social Viral helped me boost my Instagram reach instantly. Their service is fast, authentic, and very reliable.",
    rating: 5,
  },
  {
    name: "Aishwarya",
    role: "Marketing Specialist",
    img: "https://randomuser.me/api/portraits/women/45.jpg",
    text: "Amazing experience! Real engagement and quick results. Highly recommended to grow your brand visibility.",
    rating: 5,
  },
  {
    name: "Divya",
    role: "Content Creator",
    img: "https://randomuser.me/api/portraits/women/67.jpg",
    text: "My YouTube growth skyrocketed after using Social Viral. It gave my content the push it needed!",
    rating: 5,
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  // Auto slider
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonialsData.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="testimonials-section">
      <h2 className="testimonials-title">TESTIMONIALS</h2>
      <p className="testimonials-subtitle">
        Hear what our customers say about their experience.
      </p>

      <div className="slider-container">
        {testimonialsData.map((item, i) => (
          <div
            key={i}
            className={`slide ${i === index ? "active" : ""}`}
          >
            <div className="testimonial-card animated-card">
              <img src={item.img} alt={item.name} className="testimonial-img" />

              <p className="testimonial-text">
                <span className="quote">“</span>
                {item.text}
                <span className="quote">”</span>
              </p>

              <h4 className="testimonial-name">{item.name}</h4>
              <p className="testimonial-role">{item.role}</p>

              <div className="stars">
                {"⭐".repeat(item.rating)}
              </div>
            </div>
          </div>
        ))}

        {/* Slider Buttons */}
        <div className="slider-buttons">
          <button
            className="slider-btn"
            onClick={() =>
              setIndex((index - 1 + testimonialsData.length) % testimonialsData.length)
            }
          >
            ‹
          </button>

          <button
            className="slider-btn"
            onClick={() => setIndex((index + 1) % testimonialsData.length)}
          >
            ›
          </button>
        </div>

        {/* Dots */}
        <div className="dots">
          {testimonialsData.map((_, i) => (
            <span
              key={i}
              className={`dot ${i === index ? "active-dot" : ""}`}
              onClick={() => setIndex(i)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
}

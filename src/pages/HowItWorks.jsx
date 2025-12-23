import React from "react";
import "./HowItWorks.css";

export default function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Choose a Service",
      description: "Select from followers, likes, views or custom engagement services.",
      icon: "fa-solid fa-list-check"
    },
    {
      number: "2",
      title: "Enter Details",
      description: "Provide your post URL or username to deliver the services accurately.",
      icon: "fa-solid fa-pen"
    },
    {
      number: "3",
      title: "Make Payment",
      description: "Use our secure checkout system to complete your purchase.",
      icon: "fa-solid fa-credit-card"
    },
    {
      number: "4",
      title: "Watch Growth",
      description: "Your order starts processing instantly. Sit back and watch your brand grow!",
      icon: "fa-solid fa-chart-line"
    }
  ];

  return (
    <section className="how-it-works">
      <div className="container">
        <h2 className="how-title">How It Works</h2>
        <p className="how-subtitle">
          Our process is simple, fast, and secure. Here’s how you can boost your social media presence in just a few clicks.
        </p>

        <div className="steps">
          {steps.map((step, index) => (
            <div key={index} className="step-card">
              <div className="step-number">{step.number}</div>
              <div className="step-icon"><i className={step.icon}></i></div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

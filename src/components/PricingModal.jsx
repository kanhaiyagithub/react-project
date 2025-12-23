import React from "react";
import "./PricingModal.css";
import { getPricing } from "../data/servicesPricing";

export default function PricingModal({ isOpen, onClose, serviceTitle, platform }) {
  if (!isOpen) return null;

  const packages = getPricing(platform, serviceTitle);

  const handleSelectPackage = (pkg) => {
    // This can be extended to handle order placement
    console.log("Selected package:", { serviceTitle, platform, ...pkg });
    // You can add navigation to checkout or order page here
  };

  return (
    <div className="pricing-modal-overlay" onClick={onClose}>
      <div className="pricing-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>{serviceTitle}</h2>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>
        <div className="modal-content">
          <p className="modal-description">Choose a package that suits your needs:</p>
          {packages.length > 0 ? (
            <div className="pricing-packages">
              {packages.map((pkg, idx) => (
                <div key={idx} className="pricing-package-card">
                  <div className="package-quantity">
                    <span className="quantity-number">{pkg.quantity}</span>
                    <span className="quantity-unit">{pkg.unit}</span>
                  </div>
                  <div className="package-price">{pkg.price}</div>
                  <button 
                    className="select-package-btn"
                    onClick={() => handleSelectPackage(pkg)}
                  >
                    Order Now
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="no-pricing-available">
              <p>Pricing information coming soon!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}


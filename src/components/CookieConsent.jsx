import React, { useEffect, useState } from "react";
import "./CookieConsent.css";
import cookieImg from "/images/cook.png"; // <-- add your cookie image

export default function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setTimeout(() => setShow(true), 800);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setShow(false);
  };

  const openPreferences = () => {
    alert("Cookie preferences modal coming soon!");
  };

  return (
    show && (
      <div className="cookie-box">
        <div className="cookie-content">

          <div className="cookie-left">
            <h2>Guess what? Cookies!</h2>

            <p>
              We use essential cookies to offer you a better website 
              experience. We'd like to use other cookies to analyze our 
              website’s performance and personalize ads — only if you accept.
              Learn more in our{" "}
              <a href="/cookie-policy" className="cookie-link">
                cookie policy
              </a>.
            </p>

            <div className="cookie-btns">
              <button className="cookie-accept" onClick={acceptCookies}>
                🍪 Accept All
              </button>

              <button className="cookie-manage" onClick={openPreferences}>
                Manage Cookies
              </button>
            </div>
          </div>

          <div className="cookie-right">
            <img src={cookieImg} alt="cookie" />
          </div>

        </div>
      </div>
    )
  );
}

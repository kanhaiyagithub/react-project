import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Header from './components/Header';
import Footer from './components/Footer';
import SocialIconsSlider from './components/SocialIconsSlider';
import CookieConsent from './components/CookieConsent';
import WhatsAppButton from "./components/WhatsAppButton";


// Pages
import Home from './pages/Home';
import Services from './pages/Services';
import HowItWorks from './pages/HowItWorks';
import Testimonials from './pages/Testimonials';
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Contactus from "./pages/Contactus";
import About from "./pages/About";
import Career from "./pages/Career";
import Terms from "./pages/Terms";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import RefundPolicy from "./pages/RefundPolicy";
import InstagramGrowthPage from './pages/InstagramGrowthPage';
import InstagramServices from "./pages/InstagramServices";
import TikTokServices from "./pages/TikTokServices";
import YouTubeServices from "./pages/YouTubeServices";
import RedditServices from "./pages/RedditServices";
import SpotifyServices from "./pages/SpotifyServices";
import FacebookServices from "./pages/FacebookServices";
import TwitterServices from "./pages/TwitterServices";
import SnapchatServices from "./pages/SnapchatServices";
import QuoraServices from "./pages/QuoraServices";
import PinterestServices from "./pages/PinterestServices";
import LinkedInServices from "./pages/LinkedInServices";
import DiscordServices from "./pages/DiscordServices";

export default function App() {
  return (
    <Router>
      <Header />

      {/* Cookie Banner */}
      <CookieConsent />

      <SocialIconsSlider />

      <main className="main-container">
        <Routes>

          {/* Main Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          
          <Route path="/HowItWorks" element={<HowItWorks />} />
          <Route path="/testimonials" element={<Testimonials />} />

          {/* Auth Pages */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* Social Growth */}
          <Route path="/instagram-growth" element={<InstagramGrowthPage />} />
          <Route path="/services/instagram" element={<InstagramServices />} />
          <Route path="/services/tiktok" element={<TikTokServices />} />
          <Route path="/services/youtube" element={<YouTubeServices />} />
          <Route path="/services/reddit" element={<RedditServices />} />
          <Route path="/services/facebook" element={<FacebookServices />} />
          <Route path="/services/spotify" element={<SpotifyServices />} />
          <Route path="/services/twitter" element={<TwitterServices />} />
          <Route path="/services/snapchat" element={<SnapchatServices />} />
          <Route path="/services/quora" element={<QuoraServices />} />
          <Route path="/services/pinterest" element={<PinterestServices />} />
          <Route path="/services/linkedin" element={<LinkedInServices />} />
          <Route path="/services/discord" element={<DiscordServices />} />


          {/* Contact & About */}
          <Route path="/Contactus" element={<Contactus />} />
          <Route path="/about" element={<About />} />

          {/* Career */}
          <Route path="/career" element={<Career />} />

          {/* Legal Pages */}
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />

        </Routes>
      </main>

      <Footer />

      {/* Floating WhatsApp Button */}
      <WhatsAppButton />
    </Router>
  );
}

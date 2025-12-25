import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';

// Components
import Header from './components/Header';
import Footer from './components/Footer';
import SocialIconsSlider from './components/SocialIconsSlider';
import CookieConsent from './components/CookieConsent';
import WhatsAppButton from "./components/WhatsAppButton";
import ProtectedRoute from './components/ProtectedRoute';

// Pages
import Auth from './pages/Auth';
import Home from './pages/Home';
import Services from './pages/Services';
import HowItWorks from './pages/HowItWorks';
import Testimonials from './pages/Testimonials';
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

// Layout component that only shows header/footer when authenticated
function AppLayout({ children }) {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return children;
  }

  return (
    <>
      <Header />
      <CookieConsent />
      <SocialIconsSlider />
      <main className="main-container">
        {children}
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

function AppRoutes() {
  return (
    <AppLayout>
      <Routes>
      {/* Auth page - landing page for unauthenticated users */}
      <Route path="/" element={<Auth />} />

      {/* Protected Routes - only accessible after login */}
      <Route
        path="/home"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route
        path="/services"
        element={
          <ProtectedRoute>
            <Services />
          </ProtectedRoute>
        }
      />
      <Route
        path="/HowItWorks"
        element={
          <ProtectedRoute>
            <HowItWorks />
          </ProtectedRoute>
        }
      />
      <Route
        path="/testimonials"
        element={
          <ProtectedRoute>
            <Testimonials />
          </ProtectedRoute>
        }
      />

      {/* Social Growth Services */}
      <Route
        path="/instagram-growth"
        element={
          <ProtectedRoute>
            <InstagramGrowthPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/services/instagram"
        element={
          <ProtectedRoute>
            <InstagramServices />
          </ProtectedRoute>
        }
      />
      <Route
        path="/services/tiktok"
        element={
          <ProtectedRoute>
            <TikTokServices />
          </ProtectedRoute>
        }
      />
      <Route
        path="/services/youtube"
        element={
          <ProtectedRoute>
            <YouTubeServices />
          </ProtectedRoute>
        }
      />
      <Route
        path="/services/reddit"
        element={
          <ProtectedRoute>
            <RedditServices />
          </ProtectedRoute>
        }
      />
      <Route
        path="/services/facebook"
        element={
          <ProtectedRoute>
            <FacebookServices />
          </ProtectedRoute>
        }
      />
      <Route
        path="/services/spotify"
        element={
          <ProtectedRoute>
            <SpotifyServices />
          </ProtectedRoute>
        }
      />
      <Route
        path="/services/twitter"
        element={
          <ProtectedRoute>
            <TwitterServices />
          </ProtectedRoute>
        }
      />
      <Route
        path="/services/snapchat"
        element={
          <ProtectedRoute>
            <SnapchatServices />
          </ProtectedRoute>
        }
      />
      <Route
        path="/services/quora"
        element={
          <ProtectedRoute>
            <QuoraServices />
          </ProtectedRoute>
        }
      />
      <Route
        path="/services/pinterest"
        element={
          <ProtectedRoute>
            <PinterestServices />
          </ProtectedRoute>
        }
      />
      <Route
        path="/services/linkedin"
        element={
          <ProtectedRoute>
            <LinkedInServices />
          </ProtectedRoute>
        }
      />
      <Route
        path="/services/discord"
        element={
          <ProtectedRoute>
            <DiscordServices />
          </ProtectedRoute>
        }
      />

      {/* Contact & About */}
      <Route
        path="/Contactus"
        element={
          <ProtectedRoute>
            <Contactus />
          </ProtectedRoute>
        }
      />
      <Route
        path="/about"
        element={
          <ProtectedRoute>
            <About />
          </ProtectedRoute>
        }
      />

      {/* Career */}
      <Route
        path="/career"
        element={
          <ProtectedRoute>
            <Career />
          </ProtectedRoute>
        }
      />

      {/* Legal Pages */}
      <Route
        path="/terms"
        element={
          <ProtectedRoute>
            <Terms />
          </ProtectedRoute>
        }
      />
      <Route
        path="/privacy-policy"
        element={
          <ProtectedRoute>
            <PrivacyPolicy />
          </ProtectedRoute>
        }
      />
      <Route
        path="/refund-policy"
        element={
          <ProtectedRoute>
            <RefundPolicy />
          </ProtectedRoute>
        }
      />
      </Routes>
    </AppLayout>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <AppRoutes />
      </Router>
    </AuthProvider>
  );
}

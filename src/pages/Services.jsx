import { Link } from "react-router-dom";
import "./Services.css";

import {
  FaInstagram,
  FaTiktok,
  FaYoutube,
  FaReddit,
  FaSpotify,
  FaFacebook,
  FaXTwitter,
  FaSnapchat,
  FaQuora,
  FaPinterest,
  FaLinkedin,
  FaDiscord,
} from "react-icons/fa6";

export default function Services() {
  const services = [
    {
      key: "instagram",
      icon: <FaInstagram className="icon pink" />,
      title: "Instagram Growth",
      description: "Buy real Instagram followers, likes, and views to increase engagement.",
    },
    {
      key: "tiktok",
      icon: <FaTiktok className="icon black" />,
      title: "TikTok Engagement",
      description: "Boost your TikTok profile with followers, likes, and video views.",
    },
    {
      key: "youtube",
      icon: <FaYoutube className="icon red" />,
      title: "YouTube Promotions",
      description: "Gain YouTube subscribers, views, and likes for better reach.",
    },
    {
      key: "reddit",
      icon: <FaReddit className="icon orange" />,
      title: "Reddit",
      description: "Get upvotes, comments & subreddit reach.",
    },
    {
      key: "spotify",
      icon: <FaSpotify className="icon green" />,
      title: "Spotify Promotion",
      description: "Get more plays and followers on your Spotify profile.",
    },
    {
      key: "facebook",
      icon: <FaFacebook className="icon blue" />,
      title: "Facebook Growth",
      description: "Enhance your Facebook page with real likes and followers.",
    },
    {
      key: "twitter",
      icon: <FaXTwitter className="icon black" />,
      title: "X (Twitter) Engagement",
      description: "Boost your presence on X with followers and reposts.",
    },
    {
      key: "snapchat",
      icon: <FaSnapchat className="icon yellow" />,
      title: "Snapchat Promotion",
      description: "Grow your Snapchat views and story engagement.",
    },
    {
      key: "quora",
      icon: <FaQuora className="icon red" />,
      title: "Quora Marketing",
      description: "Gain followers and visibility on Quora answers and spaces.",
    },
    {
      key: "pinterest",
      icon: <FaPinterest className="icon red" />,
      title: "Pinterest Boost",
      description: "Enhance your Pinterest boards and pins reach.",
    },
    {
      key: "linkedin",
      icon: <FaLinkedin className="icon blueDark" />,
      title: "LinkedIn Growth",
      description: "Grow your professional LinkedIn network and post impressions.",
    },
    {
      key: "discord",
      icon: <FaDiscord className="icon indigo" />,
      title: "Discord",
      description: "Grow your server with real users & activity.",
    },
  ];

  return (
    <section id="services" className="services-section">
      <div className="services-container">
        <h3 className="section-title">Our Services</h3>

        <div className="services-grid">
          {services.map((service, index) => (
            <Link
              key={index}
              to={`/services/${service.key}`}
              className="service-link"
            >
              <div className="service-card">
                {service.icon}
                <h4 className="service-title">{service.title}</h4>
                <p>{service.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

import './SocialIconsSlider.css';
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
  FaDiscord
} from 'react-icons/fa6';

//const icons = [
 // { icon: <FaInstagram className="icon pink" />, name: 'Instagram' },
 // { icon: <FaTiktok className="icon black" />, name: 'TikTok' },
  //{ icon: <FaYoutube className="icon red" />, name: 'YouTube' },
 // { icon: <FaReddit className="icon orange" />, name: 'Reddit' },
 // { icon: <FaSpotify className="icon green" />, name: 'Spotify' },
 // { icon: <FaFacebook className="icon blue" />, name: 'Facebook' },
 // { icon: <FaXTwitter className="icon black" />, name: 'X (Twitter)' },
  //{ icon: <FaSnapchat className="icon yellow" />, name: 'Snapchat' },
 // { icon: <FaQuora className="icon red" />, name: 'Quora' },
  //{ icon: <FaPinterest className="icon red" />, name: 'Pinterest' },
 // { icon: <FaLinkedin className="icon blueDark" />, name: 'LinkedIn' },
 // { icon: <FaDiscord className="icon indigo" />, name: 'Discord' }
//];

const icons = [
  <FaInstagram className="icon pink" />,
  <FaTiktok className="icon black" />,
  <FaYoutube className="icon red" />,
  <FaReddit className="icon orange" />,
  <FaSpotify className="icon green" />,
  <FaFacebook className="icon blue" />,
  <FaXTwitter className="icon black" />,
  <FaSnapchat className="icon yellow" />,
  <FaQuora className="icon red" />,
  <FaPinterest className="icon red" />,
  <FaLinkedin className="icon blueDark" />,
  <FaDiscord className="icon indigo" />
];

export default function SocialIconsSlider() {
  return (
    <div className="slider-wrapper">
      <div className="slider-track">
        {icons.concat(icons).map((item, index) => (
          <div key={index}>
            {item.icon}
          
          <span className='iconname' >{item.name}</span> </div>
        ))}
      </div>
    </div>
  );
}

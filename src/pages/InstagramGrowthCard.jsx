import './InstagramGrowthCard.css';
import { FaInstagram } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';

export default function InstagramGrowthCard() {
  const navigate = useNavigate();

  return (
    <div
      className="growth-card"
      onClick={() => navigate('/instagram-growth')}
      role="button"
    >
      <FaInstagram className="growth-icon pink" />
      <h4 className="growth-title">Instagram Growth</h4>
      <p className="growth-description">
        Buy real Instagram followers, likes, and views to increase engagement.
      </p>
    </div>
  );
}

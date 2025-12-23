import './PriceCard.css';

export default function PriceCard({ title, price, features }) {
  return (
    <div className="price-card">
      <h3>{title}</h3>
      <p className="price">${price}</p>
      <ul>
        {features.map((f, i) => (
          <li key={i}>{f}</li>
        ))}
      </ul>
    </div>
  );
}


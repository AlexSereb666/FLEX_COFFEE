import React from 'react';
import './CoffeeHouseRectangle.css';
import { Link } from 'react-router-dom';
import chainImg from '../../assets/img/chain.png';

function CoffeeHouseRectangle({ to, imageSrc, title, address }) {
  return (
    <div className="coffee-houses__house-wrapper">
      <Link to={to} activeClassName="active-link">
        <img className="coffee-houses__chain-left" src={chainImg} alt="Chain left" />
        <img className="coffee-houses__chain-right" src={chainImg} alt="Chain right" />
        <div className="coffee-houses__houses">
          <img src={imageSrc} alt={`Coffee House ${title}`} />
          <div className="coffee-houses__house-info">
            <h3>{title}</h3>
            <p>{address}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default CoffeeHouseRectangle;

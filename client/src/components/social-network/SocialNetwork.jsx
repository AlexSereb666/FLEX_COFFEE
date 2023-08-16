import React from 'react';
import './SocialNetwork.css';

function SocialNetwork({ image, onClick }) {
  return (
    <div className='social-network'>
      <img src={image} alt="Social Icon" className="social-network__icon" onClick={onClick} />
    </div>
  );
}

export default SocialNetwork;

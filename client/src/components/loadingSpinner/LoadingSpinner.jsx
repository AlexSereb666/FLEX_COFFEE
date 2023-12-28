import React from 'react';
import './LoadingSpinner.css';
import navbarIco from '../../assets/img/navbar-ico.png'; // Укажи правильный путь к изображению

const LoadingSpinner = () => {
    return (
        <div className="loading-spinner">
            {[1, 2, 3, 4].map((index) => (
                <img key={index} src={navbarIco} alt={`Loading ${index}`} className={`spinner-item item-${index}`} />
            ))}
        </div>
    );
};
  
export default LoadingSpinner;

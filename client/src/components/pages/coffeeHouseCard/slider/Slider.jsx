import React, { useState } from 'react';
import './Slider.css';

function Slider({ images, onClose, initialIndex = 0 }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(initialIndex);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex < images.length - 1 ? prevIndex + 1 : 0
    );
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : images.length - 1
    );
  };

  const handleCloseSlider = () => {
    onClose();
  };

  return (
    <div className="image-modal" onClick={(e) => e.target === e.currentTarget && handleCloseSlider()}>
      <div className="image-modal-content">
        <button className="close-button" onClick={handleCloseSlider}>
          X
        </button>
        <img src={images[currentImageIndex]} alt="Увеличенное изображение" />
        <button className="prev-button" onClick={handlePrevImage}>
          &lt;
        </button>
        <button className="next-button" onClick={handleNextImage}>
          &gt;
        </button>
      </div>
    </div>
  );
}

export default Slider;


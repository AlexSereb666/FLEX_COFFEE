import React, { useState } from 'react';
import './Slider.css';
import { CSSTransition } from 'react-transition-group';

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
      <div className="image-modal__content">
        <button className="image-modal__close-button" onClick={handleCloseSlider}>
          X
        </button>
        <div className="image-modal__image-slider">
          <CSSTransition
            key={currentImageIndex}
            timeout={300}
            classNames="image-fade"
          >
            <img
              src={images[currentImageIndex]}
              alt="Увеличенное изображение"
              className={`image-modal__large-image boomBottom`}
            />
          </CSSTransition>
          <div className="image-modal__small-images">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt="Маленькое изображение"
                className={index === currentImageIndex ? "image-modal__small-image active" : "image-modal__small-image"}
                onClick={() => setCurrentImageIndex(index)}
              />
            ))}
          </div>
        </div>
        <button className="image-modal__prev-button" onClick={handlePrevImage}>
          &lt;
        </button>
        <button className="image-modal__next-button" onClick={handleNextImage}>
          &gt;
        </button>
      </div>
    </div>
  );
}

export default Slider;

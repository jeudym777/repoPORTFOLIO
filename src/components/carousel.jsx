import React, { useState, useEffect, useRef } from "react";
import "../styles/carousel.css";

const Carousel = ({ images, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const autoScrollInterval = useRef(null);

  const startAutoScroll = () => {
    stopAutoScroll();
    autoScrollInterval.current = setInterval(() => {
      setCurrentIndex((prev) => (images && images.length > 0 ? (prev + 1) % images.length : 0));
    }, 4000);
  };

  const stopAutoScroll = () => {
    if (autoScrollInterval.current) {
      clearInterval(autoScrollInterval.current);
    }
  };

  useEffect(() => {
    if (images && images.length > 0) {
      startAutoScroll();
    }
    return () => stopAutoScroll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [images]);

  if (!images || images.length === 0) {
    return null;
  }

  const nextSlide = () => {
    stopAutoScroll();
    setCurrentIndex((prev) => (prev + 1) % images.length);
    startAutoScroll();
  };

  const prevSlide = () => {
    stopAutoScroll();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    startAutoScroll();
  };

  const goToSlide = (index) => {
    stopAutoScroll();
    setCurrentIndex(index);
    startAutoScroll();
  };

  return (
    <div className="carousel-container">
      {title && <h5 className="carousel-title">{title}</h5>}
      
      <div className="carousel-wrapper">
        <div className="carousel-slide">
          <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className="carousel-image"
          />
        </div>

        <button
          className="carousel-btn carousel-btn-left"
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          ‹
        </button>

        <button
          className="carousel-btn carousel-btn-right"
          onClick={nextSlide}
          aria-label="Next slide"
        >
          ›
        </button>

        <div className="carousel-indicators">
          {images.map((_, index) => (
            <button
              key={index}
              className={`carousel-indicator ${index === currentIndex ? "active" : ""}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="carousel-counter">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
};

export default Carousel;

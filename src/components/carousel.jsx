import React from "react";
import "../styles/carousel.css";

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
    };
    this.autoScrollInterval = null;
  }

  componentDidMount() {
    const { images } = this.props;
    if (images && images.length > 0) {
      this.startAutoScroll();
    }
  }

  componentWillUnmount() {
    this.stopAutoScroll();
  }

  componentDidUpdate(prevProps) {
    const { images } = this.props;
    const prevImages = prevProps.images;
    
    // Si las imágenes cambiaron, reinicia el autoScroll
    if (images !== prevImages) {
      this.stopAutoScroll();
      if (images && images.length > 0) {
        this.startAutoScroll();
      }
    }
  }

  startAutoScroll = () => {
    this.autoScrollInterval = setInterval(() => {
      this.nextSlide();
    }, 4000); // Cambiar imagen cada 4 segundos
  };

  stopAutoScroll = () => {
    if (this.autoScrollInterval) {
      clearInterval(this.autoScrollInterval);
    }
  };

  nextSlide = () => {
    const { images } = this.props;
    if (images && images.length > 0) {
      this.setState((prevState) => ({
        currentIndex: (prevState.currentIndex + 1) % images.length,
      }));
    }
  };

  prevSlide = () => {
    const { images } = this.props;
    if (images && images.length > 0) {
      this.setState((prevState) => ({
        currentIndex:
          prevState.currentIndex === 0 ? images.length - 1 : prevState.currentIndex - 1,
      }));
    }
  };

  goToSlide = (index) => {
    this.setState({ currentIndex: index });
    this.stopAutoScroll();
    const { images } = this.props;
    if (images && images.length > 0) {
      this.startAutoScroll();
    }
  };

  render() {
    const { images, title } = this.props;
    const { currentIndex } = this.state;

    if (!images || images.length === 0) {
      return (
        <div className="carousel-empty-state">
          <div style={{
            padding: '40px 20px',
            textAlign: 'center',
            background: '#f8f9fa',
            borderRadius: '12px',
            border: '2px dashed #ccc'
          }}>
            <p style={{ color: '#666', fontSize: '1em', marginBottom: '10px' }}>
              📸 No hay imágenes disponibles
            </p>
            <p style={{ color: '#999', fontSize: '0.9em', margin: 0 }}>
              Agrega archivos de imagen a la carpeta <code>src/images/Allservices</code>
            </p>
          </div>
        </div>
      );
    }

    return (
      <div className="carousel-container">
        {title && <h5 className="carousel-title">{title}</h5>}
        
        <div className="carousel-wrapper">
          {/* Carrusel */}
          <div className="carousel-slide">
            <img
              src={images[currentIndex]}
              alt={`Slide ${currentIndex + 1}`}
              className="carousel-image"
            />
          </div>

          {/* Botones de navegación */}
          <button
            className="carousel-btn carousel-btn-left"
            onClick={() => {
              this.stopAutoScroll();
              this.prevSlide();
              this.startAutoScroll();
            }}
            aria-label="Previous slide"
          >
            ‹
          </button>

          <button
            className="carousel-btn carousel-btn-right"
            onClick={() => {
              this.stopAutoScroll();
              this.nextSlide();
              this.startAutoScroll();
            }}
            aria-label="Next slide"
          >
            ›
          </button>

          {/* Indicadores */}
          <div className="carousel-indicators">
            {images.map((_, index) => (
              <button
                key={index}
                className={`carousel-indicator ${index === currentIndex ? "active" : ""}`}
                onClick={() => this.goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Contador */}
        <div className="carousel-counter">
          {currentIndex + 1} / {images.length}
        </div>
      </div>
    );
  }
}

export default Carousel;

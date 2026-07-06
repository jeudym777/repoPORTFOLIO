import React, { useEffect } from 'react';

const Lightbox = ({ images, currentIndex, onClose, onPrev, onNext }) => {
  useEffect(() => {
    const isOpen = images && images.length > 0 && currentIndex !== -1;
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [images, currentIndex, onClose, onPrev, onNext]);

  if (!images || images.length === 0 || currentIndex === -1) return null;

  const currentImage = images[currentIndex];

  return (
    <div style={styles.overlay} onClick={onClose}>
      <button 
        style={styles.closeBtn} 
        onClick={(e) => { e.stopPropagation(); onClose(); }}
        aria-label="Cerrar"
      >
        &times;
      </button>

      {images.length > 1 && (
        <button 
          style={{ ...styles.navBtn, ...styles.prevBtn }} 
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          aria-label="Imagen anterior"
        >
          &#10094;
        </button>
      )}

      <div style={styles.imgContainer} onClick={(e) => e.stopPropagation()}>
        <img 
          src={currentImage} 
          alt={`Galería ${currentIndex + 1}`} 
          style={styles.image} 
        />
        <div style={styles.counter}>
          {currentIndex + 1} / {images.length}
        </div>
      </div>

      {images.length > 1 && (
        <button 
          style={{ ...styles.navBtn, ...styles.nextBtn }} 
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          aria-label="Imagen siguiente"
        >
          &#10095;
        </button>
      )}
    </div>
  );
};

const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.85)',
    backdropFilter: 'blur(8px)',
    WebkitBackdropFilter: 'blur(8px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 9999,
    cursor: 'zoom-out',
    animation: 'fadeIn 0.25s ease-out',
  },
  closeBtn: {
    position: 'absolute',
    top: '20px',
    right: '25px',
    background: 'none',
    border: 'none',
    color: '#fff',
    fontSize: '45px',
    fontWeight: '300',
    cursor: 'pointer',
    zIndex: 10000,
    outline: 'none',
    transition: 'color 0.2s',
  },
  navBtn: {
    position: 'absolute',
    background: 'rgba(255, 255, 255, 0.08)',
    border: 'none',
    color: '#fff',
    fontSize: '30px',
    padding: '16px 20px',
    cursor: 'pointer',
    zIndex: 10000,
    borderRadius: '50%',
    outline: 'none',
    transition: 'background-color 0.2s, transform 0.2s',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  prevBtn: {
    left: '20px',
  },
  nextBtn: {
    right: '20px',
  },
  imgContainer: {
    position: 'relative',
    maxWidth: '85%',
    maxHeight: '85%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
    borderRadius: '8px',
    overflow: 'hidden',
    backgroundColor: '#000',
    cursor: 'default',
  },
  image: {
    maxWidth: '100%',
    maxHeight: '80vh',
    objectFit: 'contain',
    display: 'block',
    userSelect: 'none',
  },
  counter: {
    position: 'absolute',
    bottom: '15px',
    background: 'rgba(0, 0, 0, 0.6)',
    backdropFilter: 'blur(4px)',
    color: '#fff',
    padding: '5px 12px',
    borderRadius: '15px',
    fontSize: '0.85em',
    fontWeight: '500',
    letterSpacing: '1px',
    userSelect: 'none',
  }
};

export default Lightbox;

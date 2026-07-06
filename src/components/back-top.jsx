import React, { useState, useEffect } from 'react';

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 100) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <a
      href="#page-top"
      onClick={handleClick}
      className={`back-to-top animated ${visible ? 'fadeIn' : 'fadeOut'}`}
      style={{
        display: 'block',
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? 'auto' : 'none',
        transition: 'opacity 0.4s ease-in-out',
      }}
      aria-label="Back to top"
    >
      <i className="fa fa-chevron-up"></i>
    </a>
  );
};

export default BackToTop;

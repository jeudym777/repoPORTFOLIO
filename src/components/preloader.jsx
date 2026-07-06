import React, { useState, useEffect } from 'react';

const Preloader = () => {
  const [visible, setVisible] = useState(true);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        setVisible(false);
      }, 100);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      const timeout = setTimeout(handleLoad, 2500);
      return () => {
        window.removeEventListener('load', handleLoad);
        clearTimeout(timeout);
      };
    }
  }, []);

  useEffect(() => {
    if (!visible) {
      const timeout = setTimeout(() => {
        setRemoved(true);
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [visible]);

  if (removed) return null;

  return (
    <div 
      id="preloader" 
      style={{
        opacity: visible ? 1 : 0,
        transition: 'opacity 0.5s ease-in-out',
        pointerEvents: visible ? 'auto' : 'none'
      }}
    />
  );
};

export default Preloader;

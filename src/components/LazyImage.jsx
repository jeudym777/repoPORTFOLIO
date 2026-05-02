import React, { useEffect, useRef, useState } from 'react';

/**
 * LazyImage Component
 * 
 * Loads images only when they're about to enter the viewport using Intersection Observer.
 * This significantly improves initial page load time and reduces bandwidth usage.
 * 
 * @param {string} src - The image source
 * @param {string} alt - The image alt text
 * @param {string} placeholder - Optional placeholder while loading (can be a color like '#f0f0f0')
 * @param {object} style - Optional style object to apply to the image
 * @param {string} className - Optional CSS class to apply
 */
function LazyImage({ src, alt = '', placeholder = '#e8e8e8', style = {}, className = '' }) {
  const [imageSrc, setImageSrc] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const ref = useRef(null);

  useEffect(() => {
    // Exit early if Intersection Observer is not supported
    if (!('IntersectionObserver' in window)) {
      setImageSrc(src);
      setIsLoading(false);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !imageSrc) {
          setImageSrc(src);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px' // Start loading 50px before image enters viewport
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [src, imageSrc]);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <img
      ref={ref}
      src={imageSrc}
      alt={alt}
      onLoad={handleImageLoad}
      className={className}
      style={{
        backgroundColor: isLoading ? placeholder : 'transparent',
        transition: 'background-color 0.3s ease',
        ...style
      }}
    />
  );
}

export default LazyImage;

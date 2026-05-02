import React, { useEffect, useRef, useState } from 'react';

/**
 * LazyVideo Component
 * 
 * Loads video source only when the video element is about to enter the viewport.
 * The poster image loads immediately but the actual video file is deferred until needed.
 * This significantly improves initial page load time.
 * 
 * @param {string} src - The video source URL
 * @param {string} poster - The poster image URL displayed before video loads
 * @param {object} style - Optional style object to apply to the video element
 * @param {string} className - Optional CSS class to apply
 * @param {object} otherProps - Other properties to pass to the video element (controls, muted, etc.)
 */
function LazyVideo({ src, poster, style = {}, className = '', ...otherProps }) {
  const [shouldLoad, setShouldLoad] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    // Exit early if Intersection Observer is not supported
    if (!('IntersectionObserver' in window)) {
      setShouldLoad(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !shouldLoad) {
          setShouldLoad(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '100px' // Start loading 100px before video enters viewport
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
  }, [shouldLoad]);

  return (
    <video
      ref={ref}
      poster={poster}
      className={className}
      style={style}
      {...otherProps}
    >
      {shouldLoad && (
        <source src={src} type="video/mp4" />
      )}
    </video>
  );
}

export default LazyVideo;

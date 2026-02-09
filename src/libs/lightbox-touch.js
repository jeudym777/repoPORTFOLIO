// Soporte táctil (swipe) para lightbox2 en móviles
(function() {
  let touchStartX = 0;
  let touchEndX = 0;
  const minSwipeDistance = 50;

  function handleSwipe() {
    const swipeDistance = touchEndX - touchStartX;
    
    if (Math.abs(swipeDistance) < minSwipeDistance) return;
    
    const lightbox = document.querySelector('.lb-outerContainer');
    if (!lightbox) return;

    if (swipeDistance > 0) {
      // Swipe derecha -> imagen anterior
      const prevBtn = document.querySelector('.lb-prev');
      if (prevBtn) prevBtn.click();
    } else {
      // Swipe izquierda -> imagen siguiente
      const nextBtn = document.querySelector('.lb-next');
      if (nextBtn) nextBtn.click();
    }
  }

  document.addEventListener('touchstart', function(e) {
    // Solo activar si el lightbox está visible
    if (document.querySelector('.lb-outerContainer')) {
      touchStartX = e.changedTouches[0].screenX;
    }
  }, { passive: true });

  document.addEventListener('touchend', function(e) {
    if (document.querySelector('.lb-outerContainer')) {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    }
  }, { passive: true });

  // Hacer los botones de navegación más grandes en móvil para mejor accesibilidad
  const style = document.createElement('style');
  style.textContent = `
    @media (max-width: 768px) {
      .lb-nav a.lb-prev,
      .lb-nav a.lb-next {
        width: 50% !important;
        opacity: 1 !important;
      }
      .lb-nav a.lb-prev {
        left: 0 !important;
      }
      .lb-nav a.lb-next {
        right: 0 !important;
      }
      .lb-data .lb-close {
        width: 40px !important;
        height: 40px !important;
      }
      .lb-outerContainer {
        touch-action: pan-y !important;
      }
    }
  `;
  document.head.appendChild(style);
})();

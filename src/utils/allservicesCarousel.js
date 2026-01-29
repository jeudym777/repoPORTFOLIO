import React from "react";

// Componente que genera imágenes placeholder dinámicamente
const AllservicesCarousel = {
  // Carga imágenes dinámicamente de la carpeta Allservices
  loadImages: () => {
    try {
      const context = require.context('../images/Allservices', false, /\.(png|jpg|jpeg|gif|webp)$/);
      return context.keys().map(context);
    } catch (e) {
      // Si la carpeta no existe o está vacía, retorna array vacío
      return [];
    }
  },

  // Genera imágenes placeholder en base64
  generatePlaceholders: (count = 5) => {
    const colors = [
      "#FF6B6B", "#4ECDC4", "#45B7D1", "#FFA07A", "#98D8C8",
      "#F7DC6F", "#BB8FCE", "#85C1E2", "#F8B88B", "#52C49A"
    ];
    
    return Array.from({ length: count }, (_, i) => {
      const bgColor = colors[i % colors.length];
      const svg = `
        <svg xmlns="http://www.w3.org/2000/svg" width="800" height="533" viewBox="0 0 800 533">
          <rect width="800" height="533" fill="${bgColor}"/>
          <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="48" font-weight="bold" fill="white" text-anchor="middle" dominant-baseline="middle">
            AI Product ${i + 1}
          </text>
          <text x="50%" y="60%" font-family="Arial, sans-serif" font-size="24" fill="white" text-anchor="middle" dominant-baseline="middle">
            Sistema de IA - Imagen ${i + 1}
          </text>
        </svg>
      `;
      return `data:image/svg+xml;base64,${btoa(svg)}`;
    });
  }
};

export default AllservicesCarousel;

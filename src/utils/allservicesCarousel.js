// Componente que genera imágenes placeholder dinámicamente
const AllservicesCarousel = {
  // Carga imágenes dinámicamente de la carpeta Allservices
  loadImages: () => {
    let context = null;
    try {
      context = require.context('../images/Allservices', false, /\.(png|jpg|jpeg|gif|webp)$/);
    } catch (e) {
      // Si la carpeta no existe, retorna array vacío
      return [];
    }
    // Si no hay archivos, retorna array vacío
    if (!context || context.keys().length === 0) {
      return [];
    }
    return context.keys().map(context);
  },

  // Genera imágenes placeholder en base64
  generatePlaceholders: (count = 5) => {
    // Si no hay imágenes, devolver array vacío para evitar mostrar el carrusel
    return [];
  }
};

export default AllservicesCarousel;

# Carrusel de Imágenes - AI Products & Systems

Este carrusel automático muestra imágenes de tus productos y servicios de AI en la sección "AI Products & Systems" del portafolio.

## Cómo Usar

### 1. Agregar Imágenes

Coloca tus imágenes en esta carpeta. Los formatos soportados son:
- `.jpg` / `.jpeg`
- `.png`
- `.webp`
- `.gif`

### 2. Importar las Imágenes en `portfolio.jsx`

En el archivo `src/components/portfolio.jsx`, importa tus imágenes al inicio del archivo:

```jsx
// Imágenes de AI Products & Systems
import ai1 from "../images/Allservices/imagen1.png";
import ai2 from "../images/Allservices/imagen2.jpg";
import ai3 from "../images/Allservices/imagen3.png";
// ... agrega más imágenes según sea necesario
```

### 3. Actualizar el Array de Imágenes

En el componente Portfolio, dentro de la sección "AI PRODUCTS & SYSTEMS", actualiza el prop `images` del Carousel:

**Antes:**
```jsx
<Carousel 
  images={[]} 
  title="Galería de Servicios y Productos AI"
/>
```

**Después:**
```jsx
<Carousel 
  images={[ai1, ai2, ai3]} 
  title="Galería de Servicios y Productos AI"
/>
```

## Características del Carrusel

✨ **Características:**
- 🔄 Cambio automático de imágenes cada 4 segundos
- ◀️ ▶️ Botones de navegación manual
- 🔘 Indicadores para saltar a cualquier imagen
- 📱 Diseño responsive (se adapta a móviles y tablets)
- 💫 Animación suave al cambiar de imagen
- 🔢 Contador de imágenes (ej: "3 / 10")

## Personalización

Puedes personalizar el comportamiento del carrusel modificando:

### Velocidad de cambio automático
En `src/components/carousel.jsx`, cambia el intervalo (en milisegundos):
```jsx
}, 4000); // Cambiar de 4000 a otro número
```

### Estilos
Modifica `src/styles/carousel.css` para cambiar colores, tamaños, animaciones, etc.

## Notas Técnicas

- Las imágenes se importan como módulos en React
- El componente es reutilizable y puede usarse en otras secciones si lo deseas
- Los estilos responsive funcionan en dispositivos con pantallas de 480px en adelante
- El carrusel pausará la rotación automática si haces clic en los botones

---

**¿Necesitas ayuda?** Consulta el componente `src/components/carousel.jsx` para más detalles.

const phoneNumber = "50688888888"; // Pon tu número real aquí# 🎨 Carrusel Automático - AI Products & Systems

He implementado un carrusel automático que se desplaza de izquierda a derecha en la sección "AI Products & Systems" de tu portafolio.

## ✨ Características

- ✅ **Desplazamiento automático** cada 4 segundos
- ✅ **Botones de navegación** (◀ Anterior | Siguiente ▶)
- ✅ **Indicadores interactivos** para saltar a cualquier imagen
- ✅ **Contador** que muestra la posición actual (ej: "3 / 10")
- ✅ **Animación suave** al cambiar imágenes
- ✅ **Diseño responsive** (adaptado para móviles, tablets y desktop)
- ✅ **Pausa automática** al hacer clic en botones

## 📂 Archivos Creados

1. **`src/components/carousel.jsx`**
   - Componente reutilizable del carrusel
   - Maneja toda la lógica de navegación y autoplay

2. **`src/styles/carousel.css`**
   - Estilos del carrusel
   - Animaciones suaves y diseño responsivo

3. **`src/utils/allservicesCarousel.js`**
   - Utilidad para generar imágenes placeholder de demostración
   - Puedes reemplazar esto con tus imágenes reales

4. **`src/images/Allservices/README.md`**
   - Documentación detallada para agregar imágenes

## 🚀 Cómo Usar

### Opción 1: Usar Imágenes Reales (Recomendado)

#### Paso 1: Agregar imágenes a la carpeta

Copia tus imágenes PNG/JPG a: `src/images/Allservices/`

```
src/images/Allservices/
├── sistema-ia-1.png
├── producto-1.jpg
├── vision-computadora.png
├── llm-system.jpg
└── automation-tool.png
```

#### Paso 2: Importar en `portfolio.jsx`

Abre `src/components/portfolio.jsx` y agrega tus importaciones:

```jsx
// En la sección de importaciones al inicio del archivo
import ai1 from "../images/Allservices/sistema-ia-1.png";
import ai2 from "../images/Allservices/producto-1.jpg";
import ai3 from "../images/Allservices/vision-computadora.png";
import ai4 from "../images/Allservices/llm-system.jpg";
import ai5 from "../images/Allservices/automation-tool.png";
```

#### Paso 3: Actualizar el constructor

En la clase `Portfolio`, reemplaza el constructor:

```jsx
constructor() {
  super();
  this.state = {
    allservicesImages: [ai1, ai2, ai3, ai4, ai5]
  };
}
```

### Opción 2: Mantener Imágenes de Demostración

Actualmente, el carrusel muestra 5 imágenes de demostración con colores diferentes. Puedes cambiar la cantidad modificando:

```jsx
this.state = {
  allservicesImages: AllservicesCarousel.generatePlaceholders(10) // Cambia 10 por el número que desees
};
```

## 🎛️ Personalización

### Cambiar velocidad de cambio automático

En `src/components/carousel.jsx`, línea ~35:

```jsx
}, 4000); // Cambiar 4000 ms (4 segundos) a otro valor
```

Ejemplos:
- `2000` = 2 segundos
- `6000` = 6 segundos

### Cambiar estilos

Abre `src/styles/carousel.css` para:
- Cambiar colores de botones
- Ajustar tamaño de indicadores
- Modificar sombras y bordes
- Cambiar velocidades de animación

## 🔍 Dónde Aparece

El carrusel está en la sección:
- **Sección:** "AI Products & Systems"
- **Ubicación:** Entre la descripción de los servicios AI y la sección de videojuegos
- **Archivo:** `src/components/portfolio.jsx` (línea ~360)

## 📱 Responsive Design

El carrusel se adapta automáticamente a:
- 📱 Móviles (< 480px)
- 📱 Tablets (480px - 768px)
- 🖥️ Desktop (> 768px)

## 🛠️ Próximos Pasos

1. **Preparar tus imágenes:**
   - Tamaño recomendado: 800x533px (proporción 3:2)
   - Formato: PNG o JPG
   - Peso: < 500KB por imagen

2. **Copiar imágenes a la carpeta:**
   - Destino: `src/images/Allservices/`

3. **Actualizar importaciones en portfolio.jsx**

4. **Probar en el navegador:**
   ```bash
   npm start
   ```

## 💡 Tips

- Las imágenes se cargan más rápido si están optimizadas
- Usa nombres descriptivos para las imágenes
- Mantén la proporción de aspecto consistente en todas las imágenes
- Comprueba que las imágenes se vean bien en móviles

## 🐛 Troubleshooting

**Problema:** El carrusel no muestra imágenes
- ✅ Verifica que las rutas de importación sean correctas
- ✅ Comprueba que el array `images` no esté vacío

**Problema:** Las imágenes se cortan o se ven mal
- ✅ Verifica las dimensiones de tus imágenes
- ✅ Ajusta los estilos en `carousel.css`

**Problema:** El autoplay no funciona
- ✅ Abre la consola (F12) y busca errores
- ✅ Verifica que React esté funcionando correctamente

---

¿Preguntas? Revisa los comentarios en el código de los componentes. 🎉

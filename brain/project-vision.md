# 🧠 Flashcard App — Project Vision

## Arquitectura

**Single Page Application (SPA)** que se ejecuta 100% en el navegador.

| Capa         | Tecnología                         |
|-------------|------------------------------------|
| Frontend    | HTML + CSS + JavaScript (Vanilla)  |
| Base de datos | LocalStorage (persistencia en el navegador) |
| Servidor    | ❌ No existe — cero backend         |

## Stack

- **Sin framework**: JavaScript puro, sin React, Vue, Angular ni similares.
- **Sin dependencias externas**: Sólo Font Awesome para iconos (vía CDN).
- **Sin build tools**: No se necesita Webpack, Vite, Babel, etc.
- **Sin bundler**: Los archivos se sirven estáticos desde el repositorio.

## Estructura de Archivos

```
brain/project-vision.md   ← Steering / memoria del proyecto
flashcards.html            ← Página principal del dashboard + visor
apps.html                  ← Lanzador de apps (grilla con 8 tarjetas)
```

## Persistencia (LocalStorage)

- Toda la información se almacena en `localStorage` del navegador.
- **Clave en LocalStorage**: `flashcards` (array JSON).
- No hay servidor, no hay API, no hay base de datos externa.
- Los datos persisten únicamente en el navegador donde se crearon.

### Estructura de un flashcard en LocalStorage

```json
{
  "id": 1719200000000,
  "english": "WHAT IS PLAYWRIGHT?",
  "spanish": "Framework de testing end-to-end de Microsoft",
  "portuguese": "",
  "createdAt": 1719200000000
}
```

- **id**: `Date.now()` — timestamp único en milisegundos.
- **english**: Título ingresado (se guarda automáticamente en **MAYÚSCULAS**).
- **spanish**: Significado ingresado en español.
- **portuguese**: Traducción al portugués (reservado para futura expansión multilingüe).
- **createdAt**: `Date.now()` del momento de creación.

## Formulario (Crear)

El formulario está en **español**:
1. **Título del flashcard** → se almacena en `english` (en mayúsculas).
2. **Significado** → se almacena en `spanish`.

## Visor (Ver)

- **Orden**: Último flashcard creado se muestra primero (descendente por `id`).
- **Cara frontal (MEMORIZAR)**: Muestra `english` (el título en mayúsculas).
- **Cara trasera (RESPUESTA)**: Muestra `spanish` (el significado).
- **Flip**: Click/tap en la carta para girar 3D y ver la respuesta.
- **Navegación**:
  - Desktop: flechas ← → en los laterales de la carta.
  - Mobile: swipe izquierda (siguiente) / derecha (anterior).
  - Teclado: flechas direccionales.
- **Shake**: Animación de sacudida cuando no hay más cartas en esa dirección.
- **Contador**: Muestra "X / Y" con la posición actual.
- **Estado vacío**: Mensaje "No hay flashcards guardados todavía".

## Funcionalidades Implementadas

| Funcionalidad | Estado       |
|--------------|-------------|
| **Crear** flashcard (título + significado) con validación | ✅ |
| Título en mayúsculas automático | ✅ |
| **Ver** en visor interactivo con flip 3D | ✅ |
| **Navegación** con flechas (desktop) | ✅ |
| **Swipe** izquierda/derecha (mobile) | ✅ |
| **Animación shake** cuando no hay más cartas | ✅ |
| **Teclado**: flechas direccionales | ✅ |
| **Contador** de posición (X / Y) | ✅ |
| **Modo oscuro** | ✅ Heredado del portafolio |
| Animación de naipes girando (bienvenida) | ✅ |
| Editar flashcard                       | ❌ Pendiente |
| Buscar flashcards                      | ❌ Pendiente |
| Ajustes / configuración                | ❌ Pendiente |

## Reglas de Desarrollo

1. **Todo en un solo archivo HTML** para `flashcards.html` (SPA).
2. Los estilos específicos van dentro de `<style>` en el mismo HTML.
3. El JavaScript va dentro de `<script>` al final del body.
4. Sin frameworks ni librerías externas (excepto Font Awesome vía CDN).
5. LocalStorage es la única fuente de verdad.
6. La app debe funcionar completamente offline una vez cargada.
7. Las operaciones CRUD deben implementarse sin recargar la página.
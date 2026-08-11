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
flashcards.html            ← Página principal del dashboard + visor de flashcards
apps.html                  ← Lanzador de apps (grilla con 8 tarjetas)
mynotes.html               ← Notas de estudio: Uncounables, Frasal Verbs, Irregular Verbs, Chunks & Interviews
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

---

# 📓 MyNotes — Documentación

## Arquitectura

**Single Page Application (SPA)** embebida en `mynotes.html`, 100% client-side. Los datos están hardcodeados en arrays de JavaScript dentro del mismo archivo HTML (no hay persistencia externa ni LocalStorage para los datos de estudio).

## Seguridad — Password Gate

- MyNotes está protegido por un password gate en el lado del cliente.
- La contraseña se almacena como hash en Base64 (`btoa`), la variable `storedHash`.
- El hash conocido es: `NDA5MTY3ODBFcnM=`
- Al cargar la página, se muestra un overlay de login. Si la contraseña es correcta, se guarda en `sessionStorage` la clave `mynotes_access = 'granted'` y se muestra el contenido.
- Si el acceso no es concedido, el contenido principal (`container-main`) permanece oculto.
- Desde `apps.html` también se puede acceder a MyNotes mediante un prompt de contraseña. Si es correcta, redirige a `mynotes.html`.

## Secciones

### 1. Uncountable Nouns
- **Botón**: "Uncountable" (ícono `fa-cubes`)
- **Contenido**: Grilla de palabras incontables en inglés organizadas en categorías.
- **Categorías**:
  - Abstract Concepts (Advice, Information, Knowledge, Education, etc.)
  - Natural Elements (Water, Air, Oxygen, Oil, etc.)
  - Collective Categories (Furniture, Luggage/Baggage, Equipment, etc.)
  - Food Substances (Rice, Flour, Sugar, Salt, etc.)
  - Legal / Status — Not Liable (Innocent, Exempt, Immune, etc.)
  - Legal / Status — Incapable (Insane, Incompetent, Incapacitated, etc.)
  - Autonomy / Freedom (Blameless, Faultless, Free, etc.)
- **Visualización**: Grid responsive de 4 columnas (desktop), 2 (tablet), 1 (mobile).
- Los datos están en atributos `data-words` en el HTML y se renderizan dinámicamente con JavaScript.

### 2. Phrasal Verbs (Frasal Verbs)
- **Botón**: "Frasal" (ícono `fa-code-branch`, color verde `#10b981`)
- **Contenido**: Grupos colapsables de phrasal verbs con su significado en español y ejemplo en inglés.
- **Estructura por grupo**: Cada grupo tiene un header (título + ícono chevron) y un body expandible/colapsable.
- **Tarjeta individual**: Muestra el phrasal verb, su traducción al español, y un ejemplo en inglés.
- **Nota**: Actualmente es un placeholder (`frasalVerbsData = []`). Los datos deben cargarse desde una fuente externa o agregarse manualmente.

### 3. Irregular Verbs
- **Botón**: "Irregular" (ícono `fa-table`, color ámbar `#f59e0b`)
- **Contenido**: Tablas de verbos irregulares en inglés agrupadas por categoría, con columnas:
  - `#` — Número consecutivo
  - `Base Form` — Forma base (color índigo)
  - `Past Simple` — Pasado simple (color verde)
  - `Past Participle` — Participio pasado (color púrpura)
  - `Pronunciation` — Nota fonética / pronunciación
  - `Spanish` — Traducción al español
- Los grupos son colapsables con animación de chevron.
- **Nota**: Actualmente es un placeholder (`irregularVerbsData = []`).

### 4. Chunks (Language Chunks)
- **Botón**: "Chunks" (ícono `fa-comments`, color rosa `#ec4899`)
- **Contenido**: Tabla de "chunks" (frases hechas / expresiones) en inglés, organizadas por tipo.
- **Columnas**:
  - `Tipo` — Categoría del chunk (ej. "Collocation", "Idiom", "Phrasal Verb")
  - `Contexto` — Frase de ejemplo donde se usa el chunk
  - `Chunk` — La expresión en sí
  - `Traducción` — Significado en español
- **Nota**: Actualmente es un placeholder (`chunksData = []`).

### 5. Interviews (QA Interview Q&A)
- **Botón**: "Interviews" (ícono `fa-question-circle`, color índigo `#6366f1`)
- **Contenido**: Base de conocimiento de 143 preguntas y respuestas para entrevistas de QA Automation en inglés, organizadas en 3 etapas:
  - **Screening** (preguntas 1–30): Experiencia, compensación, metodología, herramientas, habilidades blandas.
  - **Technical** (preguntas 31–80): Fundamentos de testing, automatización, API, performance, seguridad, DevOps, metodologías.
  - **Executive** (preguntas 81–143): Liderazgo, cultura, estrategia, comunicación, arquitectura, mejores prácticas.
- **Visualización**: Tarjetas individuales agrupadas por Stage → Category, con meta-información (número, etapa, categoría).
- Cada grupo es colapsable.
- Los datos están hardcodeados en el array `interviewsData` dentro del JavaScript.

## Navegación entre secciones

- Los botones del dashboard (`dashboard-nav`) actúan como tabs: solo una sección es visible a la vez.
- Al hacer clic en un botón, se ocultan todas las demás secciones y se muestra la seleccionada.
- La animación de entrada es `fadeIn` (opacity/translateY).
- Las secciones Uncountable e Interviews se renderizan bajo demanda (lazy build) la primera vez que se hace clic.

## Estilos

- Los estilos específicos de MyNotes están dentro de un bloque `<style>` en `mynotes.html`.
- Hereda el modo oscuro (`body.dark`) del portafolio principal (`style.css`).
- Cada sección tiene su propia paleta de colores distintiva:
  - Uncountable: índigo (`#6366f1`)
  - Frasal Verbs: verde esmeralda (`#10b981`)
  - Irregular Verbs: ámbar (`#f59e0b`)
  - Chunks: rosa (`#ec4899`)
  - Interviews: índigo (`#6366f1`)

## Reglas de Desarrollo

### Para `flashcards.html`
1. **Todo en un solo archivo HTML** (SPA).
2. Los estilos específicos van dentro de `<style>` en el mismo HTML.
3. El JavaScript va dentro de `<script>` al final del body.
4. Sin frameworks ni librerías externas (excepto Font Awesome vía CDN).
5. LocalStorage es la única fuente de verdad.
6. La app debe funcionar completamente offline una vez cargada.
7. Las operaciones CRUD deben implementarse sin recargar la página.

### Para `mynotes.html`
1. **Todo en un solo archivo HTML** (SPA).
2. Los estilos específicos van dentro de `<style>` en el mismo HTML.
3. El JavaScript va dentro de `<script>` al final del body.
4. Sin frameworks ni librerías externas (excepto Font Awesome vía CDN).
5. Los datos están hardcodeados en JavaScript (no hay backend ni API externa).
6. La app debe funcionar completamente offline una vez cargada.
7. El password gate usa `sessionStorage` para mantener la sesión durante la pestaña activa.

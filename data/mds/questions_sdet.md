# Guía de Preguntas y Respuestas Ideales: Entrevista Técnica SDET / QA Automation Senior (Redbee)

Este documento contiene el repertorio completo de **50 preguntas técnicas, estratégicas y situacionales**, junto con sus **respuestas ideales con perfil SDET Senior / Especialista**, orientadas al proyecto de evolución de una aplicación móvil bancaria nativa (Cypress, Playwright, K6, APIs REST/SOAP, Mobile).

---

## Bloque 1: Estrategia de Testing, Calidad y Liderazgo (Seniority)

### 1. ¿Cómo estructurías una estrategia de testing desde cero para una aplicación bancaria nativa que tiene lanzamientos quincenales?
* **Respuesta ideal:** Diseñaría una estrategia basada en **Riesgo (Risk-Based Testing)** y el modelo de Pirámide/Trofeo de Testing adaptado a DevOps. 
  * **Base (Unitarias/Componentes):** Alta cobertura impulsada por devs (Jest/JUnit) integrada en pre-commits y PRs.
  * **Integración y Contrato (APIs REST/SOAP):** Pruebas automatizadas de contratos (Pact) y servicios ejecutándose en cada pipeline (Postman/Newman o RestAssured).
  * **E2E UI & Mobile:** Automatización selectiva crítica con Playwright (para web si aplica) y Appium/Espresso/XCUITest para la app nativa, enfocada solo en flujos de negocio clave (onboarding, transferencias, pagos).
  * **Release Train quincenal:** Automatización de regresiones críticas mediante pipelines programados y portales de calidad (Gateways) que bloquean pasos a producción si bajan los umbrales de cobertura o performance (K6).

### 2. ¿Cómo aplicas el concepto de Shift-Left Testing en el ciclo de vida del desarrollo (SDLC) con equipos multidisciplinarios?
* **Respuesta ideal:** El *Shift-Left* implica mover el aseguramiento de la calidad a las etapas más tempranas posibles:
  * **Three Amigos:** Participar activamente en la refinación de historias con Product Owners y Developers para definir los Criterios de Aceptación (BDD/Gherkin) antes de escribir código.
  * **Validación de Diseños:** Revisar prototipos en Figma para anticipar flujos rotos, accesibilidad o validaciones de campos en mobile.
  * **Revisión de Código y Contratos:** Validar los contratos de API (OpenAPI/Swagger) antes de que el backend esté finalizado para construir los mocks y las pruebas automatizadas en paralelo.

### 3. ¿Qué métricas de QA utilizas para medir la efectividad de la automatización y la calidad del producto ante el negocio?
* **Respuesta ideal:** 
  * **Densidad de Defectos y Fuga de Defectos (Defect Leakage):** Cuántos bugs llegan a producción vs los detectados en etapas tempranas.
  * **MTTR (Mean Time to Resolution) y MTBF (Mean Time Between Failures):** Estabilidad del producto.
  * **ROI de la Automatización:** Reducción del tiempo de ciclo de prueba (Cycle Time) y porcentaje de cobertura de regresión automatizada frente al tiempo manual ahorrado.
  * **Tasa de Flakiness (Tests Intermitentes):** Para medir la salud y confiabilidad del framework de automatización.

### 4. ¿Cómo defines la pirámide de pruebas (o el modelo de trofeo de testing) en un proyecto con alta criticidad financiera?
* **Respuesta ideal:** En banca, la estabilidad manda. Utilizo un enfoque pragmático:
  * Mucha base de **pruebas unitarias** (lógica de negocio financiera, cálculos de tasas, intereses).
  * Una capa robusta de **pruebas de integración y contratos de API** (asegurar que las transacciones y payloads hacia el core bancario viajen correctos).
  * Una capa menor pero crítica de **pruebas End-to-End (E2E) en UI/Mobile** para los *Happy Paths* y transacciones monetarias principales, evitando saturar la pirámide con tests lentos de interfaz.

### 5. ¿Cómo gestionas la deuda técnica en los frameworks de automatización de pruebas?
* **Respuesta ideal:** La deuda técnica en QA genera tests lentos o *flaky* que erosionan la confianza del equipo. Lo manejo asignando un **15% a 20% de capacidad en cada sprint** para refactorización del framework, actualización de dependencias, mejora de selectores y eliminación de pruebas obsoletas. Trato al framework de automatización con el mismo rigor de ingeniería de software que el código de producción.

### 6. ¿Qué criterios de aceptación y "Definition of Ready" / "Definition of Done" exigís antes de iniciar el testing de una nueva funcionalidad?
* **Respuesta ideal:** 
  * **DoR (Listo para desarrollar/testear):** Historias con criterios de aceptación claros (Gherkin preferentemente), maquetación aprobada, dependencias técnicas mapeadas y mocks/entornos definidos.
  * **DoD (Listo para liberar):** Código revisado (Code Review), pruebas unitarias pasando con cobertura mínima, pruebas automatizadas de regresión actualizadas y pasando, ausencia de bugs bloqueadores o críticos, y aprobación de seguridad/performance si aplica.

### 7. ¿Cómo abordas el análisis de riesgos (Risk-Based Testing) cuando los tiempos de entrega son extremadamente ajustados (proyectos de 2 a 4 meses)?
* **Respuesta ideal:** Mapeo la matriz de riesgo cruzando **Probabilidad de falla vs. Impacto en el Negocio**. En banca, cualquier fallo en transferencias, autenticación o saldos tiene impacto crítico. En consecuencia, concentro el 80% del esfuerzo de prueba en los flujos transaccionales y de seguridad, aplicando pruebas exploratorias guiadas por heurísticas en las funcionalidades secundarias o estéticas.

### 8. ¿Cómo integras el testing de accesibilidad (a11y) y seguridad básica en las etapas tempranas de desarrollo?
* **Respuesta ideal:** 
  * **Accesibilidad:** Integrando linters estéticos y herramientas como *axe-core* en los pipelines de UI para validar contraste, etiquetas ARIA y navegación por teclado (esencial para normativas bancarias inclusivas).
  * **Seguridad:** Incorporando análisis estático de código (SAST) en los pipelines, escaneo de dependencias (SCA) para evitar librerías vulnerables (npm audit / OWASP Dependency-Check) y validaciones automatizadas de cabeceras de seguridad y tokens en las APIs.

### 9. ¿Cómo manejas los desacuerdos técnicos con desarrolladores o product owners respecto a la criticidad de un bug detectado?
* **Respuesta ideal:** Basándome en **datos y impacto de negocio**, no en opiniones subjetivas. Si un dev minimiza un bug, demuestro el impacto financiero, regulatorio o de experiencia de usuario (ej: *"Este fallo en el redondeo afecta el balance contable al final del día"*). Involucro al PO mostrando el riesgo hacia el cliente final para re-priorizar el backlog objetivamente.

### 10. ¿Cómo realizas la estimación de esfuerzo para tareas de automatización y QA en una nueva épica o feature?
* **Respuesta ideal:** Utilizo técnicas de estimación ágil como *Planning Poker* o estimación basada en complejidad técnica. Desgoso la tarea en: análisis, diseño de casos, codificación de automatización (API / Mobile / UI), integración en CI/CD y estabilización. Siempre añado un factor de contingencia del 20% para lidiar con cambios de última hora en los requerimientos del banco.

---

## Bloque 2: Automatización con Playwright y Cypress

### 11. ¿Cuáles son los principales criterios técnicos por los cuales elegirías **Playwright** frente a **Cypress** en un proyecto moderno?
* **Respuesta ideal:** Elegiría **Playwright** si el proyecto requiere soporte nativo para múltiples pestañas, múltiples contextos de navegador independientes (ideal para simular varios usuarios a la vez en la misma sesión), soporte robusto para iFrames, ejecución en navegadores móviles reales simulados, y un modelo nativo `async/await` basado en JavaScript/TypeScript moderno que evita los dolores de cabeza de las promesas encadenadas de Cypress. Cypress lo dejaría solo para aplicaciones web simples donde el equipo ya tenga un dominio absoluto de su ecosistema.

### 12. ¿Cómo maneja Cypress el tema de las promesas y su encadenamiento (chaining), y cómo lo contrastas con el modelo async/await nativo de Playwright?
* **Respuesta ideal:** Cypress encola los comandos de manera asíncrona dentro de su propio motor de ejecución, lo que requiere usar su sintaxis de chaining (`cy.get().should()`) y evita el uso directo de `async/await` estándar de JS (aunque tiene soporte experimental limitado). Playwright, en cambio, utiliza promesas nativas y el estándar `async/await`, permitiendo escribir código de prueba imperativo mucho más limpio, fácil de debugear con herramientas estándar y con menor curva de aprendizaje para desarrolladores acostumbrados a Node.js.

### 13. ¿Cómo solucionas las pruebas en múltiples dominios o cuando hay redireccionamientos de terceros (ej: pasarelas de pago o autenticación OAuth/SAML) en Cypress vs Playwright?
* **Respuesta ideal:** 
  * En **Cypress**, los cambios de dominio estricto históricamente requerían comandos especiales (`cy.origin()`), lo cual complica la lógica de las pruebas al saltar entre tu app y pasarelas de pago externas.
  * En **Playwright**, esto se resuelve de forma nativa e intuitiva, ya que su arquitectura no restringe el contexto del navegador por dominio, permitiendo navegar libremente, interceptar peticiones de terceros (`page.route()`) o simular tokens de autenticación vía API directamente sin pasar por la interfaz gráfica (UI bypass).

### 14. ¿Cómo implementas el patrón **Page Object Model (POM)** o alternativas modernas (como Screenplay o componentes) en tus frameworks?
* **Respuesta ideal:** Implemento POM separando la lógica de negocio de la automatización de los localizadores e interacciones técnicas. Cada página o vista clave tiene su clase correspondiente con métodos descriptivos (ej: `loginPage.login(user, pass)`). En proyectos modernos, prefiero complementarlo con componentes reutilizables (como barras de navegación, modales o menús bancarios) para evitar duplicación de código y mantener la mantenibilidad alta.

### 15. ¿Cómo manejas la espera de elementos dinámicos y la sincronización para evitar tests flaky (intermitentes) en Playwright?
* **Respuesta ideal:** Aprovecho el mecanismo de **auto-waiting** nativo de Playwright, el cual espera automáticamente a que los elementos sean visibles, estables y reciban eventos antes de interactuar. Evito por completo los timeouts fijos (`waitForTimeout`). Además, configuro aserciones web robustas que reintentan automáticamente (ej: `await expect(locator).toBeVisible()`).

### 16. ¿Cómo estructurías los reportes de ejecución (ej: Allure, HTML Reports) y su integración en un pipeline de CI/CD (GitHub Actions / GitLab CI)?
* **Respuesta ideal:** Utilizo el reporte nativo HTML de Playwright para ejecuciones locales rápidas y **Allure Report** para reportes ejecutivos en pipelines de CI/CD. Allure permite adjuntar capturas de pantalla, trazas completas (*traces*), videos de los fallos y métricas históricas de ejecución. En GitHub Actions, configuro la subida de estos reportes como artefactos del workflow o la integración directa con herramientas de notificación (Slack/Teams).

### 17. ¿Cómo ejecutas pruebas en paralelo de manera eficiente para reducir el tiempo total de feedback en el pipeline?
* **Respuesta ideal:** Configuro la ejecución en paralelo a nivel de workers en el archivo de configuración del framework (ej: `fullyParallel: true` en Playwright). A nivel de infraestructura de CI/CD, divido los archivos de prueba en matrices de ejecución (*test sharding*), distribuyendo los tests entre múltiples contenedores o agentes de ejecución simultáneos para reducir drásticamente el tiempo total de feedback (de horas a minutos).

### 18. ¿Cómo interceptas y mockeas solicitudes de red (API mocking) para aislar las pruebas de interfaz de usuario del backend?
* **Respuesta ideal:** Utilizo las capacidades de intercepción de red del framework (ej: `page.route()` en Playwright o `cy.intercept()` en Cypress). Esto me permite simular respuestas exitosas de APIs core del banco, respuestas lentas (para testing de timeouts o estados de carga), o simular respuestas con errores de servidor (500, 401) para validar cómo reacciona la interfaz gráfica ante fallos del backend de forma determinista.

### 19. ¿Cómo manejas la gestión de datos de prueba (test data management) y la limpieza del estado entre un test y otro?
* **Respuesta ideal:** Evito depender de estados globales o bases de datos compartidas estáticas. Para cada test o suite, prefiero **crear los datos de prueba vía API** antes de ejecutar la prueba de UI (setup programático) y limpiar/eliminar dichos datos al finalizar (`afterEach` / `tearDown`). Si el entorno es efímero, utilizo bases de datos en contenedores Docker independientes o transacciones aisladas.

### 20. ¿Qué estrategia utilizas para la ejecución de pruebas visuales (Visual Regression Testing) con estas herramientas?
* **Respuesta ideal:** Utilizo capacidades de comparación de imágenes integradas (como `expect(page).toHaveScreenshot()` en Playwright) combinadas con servicios especializados si se requiere control avanzado de diferencias de renderizado por sistemas operativos. Defino umbrales de tolerancia estrictos (*maxDiffPixels*) para detectar cambios accidentales en componentes críticos de la UI bancaria (como tipografías, montos o botones de transferencia).

---

## Bloque 3: Pruebas de Carga y Performance con K6

### 21. ¿Cómo estructuras un script básico de prueba de carga en **K6** utilizando JavaScript/TypeScript?
* **Respuesta ideal:** Un script de K6 se compone de tres partes fundamentales:
  1. **Importaciones:** Módulos de k6 (`http`, `check`, `sleep`).
  2. **Options (Opciones):** Configuración de los escenarios de carga, umbrales (*thresholds*) y políticas de ejecución.
  3. **Default Function (Función de usuario virtual - VU):** El flujo lógico que simula el comportamiento del usuario (ej: hacer una petición POST al endpoint de login, capturar el token, hacer una petición GET al saldo y un `sleep` de pausa).

```javascript
import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  stages: [
    { duration: '30s', target: 20 }, // Ramp-up
    { duration: '1m', target: 20 },  // Steady state
    { duration: '10s', target: 0 },  // Ramp-down
  ],
  thresholds: {
    http_req_duration: ['p(95)<500'], // 95% de las peticiones deben responder en menos de 500ms
    http_req_failed: ['rate<0.01'],   // Menos del 1% de error
  },
};

export default function () {
  let res = http.get('https://api.banco.com/health');
  check(res, { 'status es 200': (r) => r.status === 200 });
  sleep(1);
}
```

### 22. ¿Cómo defines los escenarios de carga (Load, Stress, Spike, Soak testing) en K6 usando el bloque de opciones (`options`)?
* **Respuesta ideal:** Utilizo el objeto `scenarios` dentro de `options` para modelar patrones avanzados:
  * **Load:** Usando `ramping-vus` o `stages` para simular el tráfico esperado en hora pico.
  * **Stress:** Incrementando progresivamente los usuarios virtuales hasta encontrar el punto de quiebre del sistema.
  * **Spike:** Introduciendo un salto abrupto y masivo de usuarios en segundos (ej: apertura de campaña de préstamos o preventa).
  * **Soak (Prueba de estrés prolongado):** Manteniendo una carga moderada constante durante varias horas para detectar fugas de memoria o degradación de recursos en el backend.

### 23. ¿Cómo correlacionas datos dinámicos (ej: extraer un token de una respuesta HTTP e incluirlo en la siguiente petición) dentro de un script de K6?
* **Respuesta ideal:** Utilizo el objeto de respuesta retornado por las funciones `http.post()` o `http.get()`. Extraigo el token o dato requerido parseando el JSON de la respuesta (ej: `res.json('access_token')`) y luego paso esa variable directamente en las cabeceras (*headers*) o el cuerpo (*payload*) de la siguiente solicitud HTTP dentro de la misma función de iteración de la VU.

### 24. ¿Cómo manejas las aserciones (`check`) y los umbrales de rendimiento (`thresholds`) para determinar si una prueba pasa o falla?
* **Respuesta ideal:** 
  * Los **`check`** actúan como validaciones funcionales dentro de la iteración (ej: validar que el código HTTP sea 200 o que el JSON contenga una propiedad). No fallan la prueba por sí solos, solo registran tasas de éxito.
  * Los **`thresholds`** son las reglas globales de fallo a nivel de rendimiento (ej: que el percentil 95 de latencia supere 800ms o que la tasa de error global sea mayor al 0.5%). Si un threshold se incumple, K6 termina la ejecución con código de salida no cero, fallando el pipeline de CI/CD automáticamente.

### 25. ¿Cómo simulas la concurrencia de usuarios reales geolocalizados o con retardos de red utilizando K6?
* **Respuesta ideal:** K6 permite configurar tiempos de espera (`sleep`) aleatorios o gaussianos para simular el "thinking time" real de los usuarios. Para escenarios geolocalizados complejos, ejecuto pruebas distribuidas usando instancias de K6 en diferentes regiones geográficas (vía Docker o K6 Cloud), configurando perfiles de red simulados a nivel de proxy o infraestructura si el entorno lo requiere.

### 26. ¿Cómo integras la ejecución de K6 dentro de un pipeline de integración continua para detectar degradaciones de performance tempranamente?
* **Respuesta ideal:** Integro K6 como un paso posterior a las pruebas unitarias y de integración en ambientes de Staging o Performance dedicados. Mediante la imagen oficial de Docker de K6 (`grafana/k6`), ejecuto scripts ligeros de humo (*smoke tests*) en cada PR importante, y pruebas de carga nocturnas o semanales programadas, configurando notificaciones automáticas si los *thresholds* se rompen.

### 27. ¿Cómo analizas los resultados de K6 y qué métricas clave (p95, p99, tasa de error, throughput) priorizas para reportar al equipo de arquitectura?
* **Respuesta ideal:** Priorizo el **percentil 95 y 99 (`p(95), p(99)`)** sobre el promedio, ya que muestran la experiencia real de los usuarios que sufren latencias altas. Analizo la tasa de solicitudes por segundo (**throughput / rps**) y la tasa de error HTTP. Exporto los resultados a dashboards de Grafana (vía InfluxDB o Prometheus) para visualizar de forma clara el comportamiento de la CPU, memoria y bases de datos del banco durante el pico de carga.

### 28. ¿Cómo ejecutas pruebas distribuidas de gran escala utilizando K6 (Cloud or Docker)?
* **Respuesta ideal:** Para pruebas masivas que superan la capacidad de una sola máquina virtual, utilizo el operador de K6 para Kubernetes (**K6 Operator**) o ejecuciones distribuidas mediante Docker Swarm / AWS ECS, donde un nodo coordinador gestiona múltiples nodos de prueba (*runners*) que generan carga de manera sincronizada hacia el objetivo.

---

## Bloque 4: Validación de APIs (REST y SOAP)

### 29. ¿Cuál es tu enfoque para diseñar una estrategia de pruebas integral para APIs RESTful (contratos, seguridad, funcionalidad)?
* **Respuesta ideal:** 
  1. **Pruebas de Contrato:** Validar que los esquemas JSON coincidan con las especificaciones (OpenAPI/Swagger).
  2. **Pruebas Funcionales:** Validar códigos de estado, estructura de respuestas, manejo de parámetros opcionales y obligatorios con colecciones automatizadas (Postman/Newman o frameworks de código).
  3. **Pruebas de Seguridad y Negocio:** Validar control de accesos por roles (RBAC), inyecciones básicas, validación de esquemas de entrada y manejo correcto de datos sensibles (mascaramiento de tarjetas o cuentas bancarias).

### 30. ¿Cómo validas la seguridad en APIs (autenticación JWT, OAuth 2.0, control de roles y permisos RBAC)?
* **Respuesta ideal:** 
  * Verifico que las rutas protegidas rechacen peticiones sin token o con tokens expirados/inválidos (código 401).
  * Valido que un usuario con rol de cliente común no pueda acceder a endpoints administrativos (código 403 / control RBAC).
  * Analizo la integridad del token JWT (verificando firma, algoritmos seguros como RS256 en lugar de HS256 vulnerable, y expiración adecuada del token).

### 31. ¿Cómo realizas pruebas de contrato (Consumer-Driven Contracts) utilizando herramientas como Pact para evitar romper integraciones entre microservicios?
* **Respuesta ideal:** Implemento pruebas donde el consumidor (ej: la app mobile del banco) define un contrato (*Pact*) especificando qué espera recibir de la API del microservicio backend. Este contrato se publica en un broker (Pact Broker). El proveedor (backend) ejecuta pruebas en su pipeline para verificar que cumple con dicho contrato antes de desplegar, previniendo rupturas en producción por cambios de contrato no comunicados.

### 32. ¿Qué diferencias clave encuentras al automatizar y validar servicios **SOAP** (XML, WSDL, WS-Security) frente a **REST** (JSON, OpenAPI/Swagger)?
* **Respuesta ideal:** 
  * **SOAP:** Utiliza XML estricto, requiere validación estricta contra esquemas WSDL, incluye cabeceras de seguridad complejas como WS-Security (firmas digitales y cifrado XML), y los endpoints suelen ser únicos (POST con sobre XML).
  * **REST:** Es más ligero, basado en recursos y verbos HTTP (GET, POST, PUT, DELETE), utiliza JSON y se apoya en especificaciones OpenAPI más sencillas de parsear y validar automáticamente. En automatización, SOAP requiere la construcción y parseo de payloads XML estructurados mediante templates.

### 33. ¿Cómo manejas los códigos de estado HTTP, cabeceras y estructuras de error estándar en tus validaciones automatizadas?
* **Respuesta ideal:** Configuro aserciones estrictas para asegurar que la semántica HTTP se cumpla: `200 OK` para consultas exitosas, `201 Created` para recursos creados, `400 Bad Request` para errores de validación de cliente, `401/403` para seguridad, y `500` para errores de servidor. Valido además que los cuerpos de error devuelvan un formato estándar de la empresa (ej: código de error de negocio interno, mensaje descriptivo y timestamp).

### 34. ¿Qué herramientas utilizas para la automatización de contratos y pruebas de API (Postman/Newman, RestAssured, SuperTest, Playwright APIRequestContext)?
* **Respuesta ideal:** Depende del stack del equipo:
  * Para validaciones rápidas o integradas en JavaScript/TypeScript, prefiero **Playwright `APIRequestContext`** o **SuperTest**, ya que permiten probar APIs de forma nativa sin levantar navegadores web.
  * Para entornos donde los analistas funcionales colaboran estrechamente, utilizo **Postman con colecciones ejecutadas mediante Newman** en los pipelines de CI/CD.

### 35. ¿Cómo validas la idempotencia y el manejo de concurrencia en endpoints críticos de transacciones bancarias?
* **Respuesta ideal:** Envío solicitudes duplicadas idénticas (con la misma cabecera `Idempotency-Key` si la API lo soporta) para verificar que el sistema procese la transferencia una sola vez y no debite fondos múltiples veces. Para concurrencia, lanzo peticiones simultáneas desde scripts de K6 o llamadas paralelas asíncronas para comprobar cómo el backend maneja bloqueos de registros en base de datos o condiciones de carrera (*race conditions*).

---

## Bloque 5: Testing Mobile (Aplicaciones Nativas)

### 36. ¿Cuál es tu experiencia y stack técnico preferido para la automatización de aplicaciones **mobile nativas** (iOS y Android)?
* **Respuesta ideal:** Mi stack preferido para aplicaciones nativas es **Appium con WebDriverIO o Playwright (mediante drivers mobile)**, o el uso directo de frameworks nativos cuando el equipo de desarrollo colabora estrechamente (**Espresso** para Android y **XCUITest** para iOS), ya que ofrecen mayor velocidad de ejecución, menor fragilidad y acceso directo a los elementos internos de la app.

### 37. ¿Cómo diferencias el enfoque de testing entre una aplicación nativa, una híbrida y una Progressive Web App (PWA)?
* **Respuesta ideal:** 
  * **Nativa:** Acceso total al hardware, rendimiento óptimo, elementos UI propios de cada sistema operativo (UIKit / Android Views). Requiere testing específico por plataforma y empaquetado binario (.apk / .ipa).
  * **Híbrida:** Contenedores web (WebView) dentro de una app nativa (ej: Cordova, Capacitor, React Native). Requiere cambiar de contexto (*context switching*) en la automatización entre el entorno nativo y el entorno web/DOM interno.
  * **PWA:** Es una aplicación web avanzada que se comporta como app. Se prueba principalmente con frameworks web tradicionales mobile, validando su comportamiento offline y notificaciones web.

### 38. ¿Cómo manejas la localización de elementos en diferentes plataformas (Xpath/Accessibility IDs en Android con UIAutomator2 vs iOS con XCUITest)?
* **Respuesta ideal:** Priorizo siempre el uso de **`accessibility id`** (o `content-desc` en Android y `accessibilityIdentifier` en iOS), ya que son estéticos, independientes del idioma del dispositivo y estables ante refactorizaciones de diseño. Evito el uso de XPaths complejos y profundos en mobile, ya que son extremadamente frágiles ante cambios mínimos en el árbol de componentes de la vista.

### 39. ¿Cómo simulas interrupciones del dispositivo móvil durante una prueba (ej: llamadas entrantes, pérdida de señal, cambios de orientación, notificaciones push, baja batería)?
* **Respuesta ideal:** Utilizo las capacidades de emulación avanzada de Appium o comandos ADB específicos (para Android) y simulación de Xcode (para iOS). Esto me permite simular la pérdida temporal de conectividad de red a mitad de una transacción bancaria para verificar que la app maneje correctamente el estado de la transacción pendiente (timeout y reintentos seguros).

### 40. ¿Cómo configuras y ejecutas pruebas en dispositivos reales en la nube (BrowserStack, Sauce Labs, AWS Device Farm) versus emuladores/simuladores locales?
* **Respuesta ideal:** 
  * Los **emuladores/simuladores locales** se utilizan en las etapas iniciales de desarrollo y feedback rápido por su velocidad y bajo costo.
  * Los **dispositivos reales en la nube (BrowserStack/Sauce Labs)** se integran en el pipeline de regresión previa a producción para validar fragmentación de hardware real, versiones específicas de OS (Android antiguo/nuevo, iOS recientes) y evitar falsos positivos derivados de la emulación de software.

### 41. ¿Cómo abordas las pruebas de regresión visual y de rendimiento específico en dispositivos móviles de gama baja y alta?
* **Respuesta ideal:** Mido métricas de rendimiento en dispositivos reales mediante herramientas de perfilado (Android Studio Profiler / Instruments en Xcode) para controlar el consumo de memoria RAM, picos de CPU y fugas de memoria durante operaciones prolongadas. Para la regresión visual, tomo capturas de pantalla de referencia en distintas resoluciones y densidades de pantalla (mdpi, xhdpi).

### 42. ¿Cómo integras las pruebas mobile dentro de pipelines de CI/CD para despliegues en tiendas (TestFlight / Google Play Beta)?
* **Respuesta ideal:** Configuro un pipeline donde, tras un tag o rama de release, se ejecutan las pruebas automatizadas de regresión mobile sobre dispositivos en la nube. Si el reporte es exitoso, un paso automatizado (usando Fastlane) compila el binario firmado y lo distribuye automáticamente a **TestFlight** para iOS y **Google Play Internal Testing / Beta** para Android.

---

## Bloque 6: Escenarios Prácticos y Resolución de Conflictos (Situacionales)

### 43. **Caso:** Un test automatizado en Playwright falla de forma intermitente (flaky) solo en el pipeline de CI/CD pero pasa siempre en local. ¿Cómo debugueas y solucionas este problema?
* **Respuesta ideal:** 
  1. Analizo el reporte del pipeline y descargo los *traces*, videos y capturas de pantalla del fallo.
  2. Reviso si hay problemas de **sincronización o latencia de red** (el pipeline suele tener recursos de CPU/Red más limitados que una PC de desarrollo).
  3. Verifico que no existan dependencias de datos compartidos entre tests o condiciones de carrera.
  4. Solución: Reemplazo esperas implícitas por aserciones web robustas (`toBeVisible()`) y aseguro la independencia total de los datos de prueba.

### 44. **Caso:** El equipo de desarrollo despliega una nueva versión de la API de transferencias bancarias que rompe varios contratos y tests automatizados a 2 días del cierre del sprint. ¿Cómo procedes?
* **Respuesta ideal:** 
  1. Activo la comunicación inmediata en el canal del equipo (*Three Amigos*).
  2. Analizo si el cambio en la API responde a un requerimiento de negocio legítimo o a un cambio accidental (breaking change).
  3. Si es legítimo, actualizo los contratos y los tests automatizados prioritarios junto con los devs.
  4. Si no estaba documentado, evalúo el riesgo: si vulnera el contrato acordado, se solicita un hotfix al backend mientras QA valida el impacto con pruebas exploratorias enfocadas en el flujo de transferencias.

### 45. **Caso:** Te entregan una app mobile nativa con componentes altamente customizados donde los localizadores estándar no funcionan o cambian constantemente. ¿Qué estrategia adoptas?
* **Respuesta ideal:** Me reúno inmediatamente con los desarrolladores móviles para acordar la incorporación de **identificadores de accesibilidad estables (`accessibilityIdentifier`)** en dichos componentes customizados. Esto es una buena práctica de ingeniería. Como medida temporal de mitigación, utilizo coordenadas relativas o selectores basados en jerarquía de clases con precaución, impulsando la estandarización de los IDs en el código fuente.

### 46. **Caso:** Necesitas simular un escenario de 5,000 usuarios concurrentes realizando pagos simultáneos en la app del banco mediante K6, pero el entorno de Staging se cae por limitaciones de infraestructura. ¿Cómo lo manejas con el equipo?
* **Respuesta ideal:** Utilizo el incidente como una oportunidad de aprendizaje técnico: demuestro con los logs de K6 el punto exacto de ruptura y los cuellos de botella encontrados (ej: saturación de conexiones en la base de datos o límites del API Gateway). Trabajo junto con el equipo de infraestructura y arquitectura para escalar temporalmente el entorno o ajustar los parámetros de concurrencia a niveles tolerables de staging, documentando las recomendaciones de capacidad para producción.

### 47. **Caso:** Un desarrollador insiste en que un bug encontrado en producción es "un caso borde imposible de replicar" por el usuario. ¿Cómo demuestras el impacto técnico y de negocio?
* **Respuesta ideal:** Presento los datos concretos: los pasos exactos de reproducción, el impacto financiero o legal si un usuario real cae en ese escenario (especialmente en banca, donde un caso borde puede significar una transferencia duplicada o un bloqueo de cuenta), y adjunto los logs del sistema o trazas de red que evidencian el estado erróneo del backend. El foco debe estar en proteger la experiencia del cliente final, no en buscar culpas.

### 48. **Caso:** Estás en un proyecto ágil de corto plazo (2-4 meses) donde el código legacy no tiene ningún tipo de automatización previa. ¿Por dónde empiezas a automatizar para aportar valor inmediato?
* **Respuesta ideal:** Aplico el principio de **Pareto (80/20)**. No intento automatizar todo el sistema desde el día uno. 
  1. Mapeo los flujos críticos de negocio del banco (ej: Login, Consulta de Saldo, Transferencias).
  2. Implemento una capa rápida de pruebas automatizadas sobre esos flujos críticos mediante APIs o pruebas de UI esenciales.
  3. Establezco un portón de calidad para el nuevo código que entra (todo nuevo feature nace con automatización), mientras el equipo maneja los componentes legacy con pruebas exploratorias guiadas por riesgos.

### 49. **Caso:** ¿Cómo validas flujos críticos end-to-end que combinan una interfaz mobile, llamadas a APIs REST/SOAP y validaciones internas en bases de datos o colas de mensajes (como Kafka/RabbitMQ)?
* **Respuesta ideal:** Diseño un enfoque híbrido:
  * Iniciamos la acción en la interfaz mobile (ej: ordenar una transferencia).
  * Mediante scripts de automatización, intercepto y valido la llamada a la API REST/SOAP.
  * Inmediatamente después, conecto un consumidor de prueba a los tópicos de **Kafka** o colas **RabbitMQ** para verificar que el mensaje de transacción se haya publicado correctamente con el payload esperado.
  * Finalmente, realizo una consulta directa a la base de datos de auditoría para asegurar la persistencia correcta del estado financiero.

### 50. **Caso:** Tienes que liderar una sesión de "Three Amigos" (PO, Dev, QA) para una historia de usuario compleja de alta seguridad financiera. ¿Qué preguntas clave haces para asegurar la calidad antes de picar código?
* **Respuesta ideal:** Las preguntas clave serían:
  * ¿Cuál es el impacto financiero exacto si esta regla de negocio falla?
  * ¿Cómo se van a manejar los datos sensibles y el enmascaramiento de información en logs y pantallas?
  * ¿Qué códigos de error específicos debe devolver la API ante fallos de autorización o validación?
  * ¿Cuáles son los escenarios de límite (*edge cases*) y qué sucede si hay interrupción de red a mitad de la operación?
  * ¿Qué criterios de logging y trazabilidad se requieren para auditoría regulatoria?
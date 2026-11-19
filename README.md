# Aysén Patagonia Tour — proyecto completo del sitio web

Maqueta web estática actualizada el 19 de noviembre de 2026. Incluye español, inglés internacional y portugués brasileño; escritorio y móvil; globo interactivo con partners reales y rotación automática, líneas cartográficas verde oscuro que se desplazan con el scroll y recorrido nocturno con resplandor.

Esta carpeta contiene **todo el sitio**, no un bloque aislado: navegación, portada, historia de la agencia, programas, red comercial con globo interactivo, proceso “Cómo trabajamos”, formulario comercial, acceso para viajeros y pie de página. El código HTML, CSS y JavaScript es editable; no se necesita otro proyecto base para publicarlo.

## Subir a GitHub

1. Crea o abre el repositorio de destino.
2. Sube el **contenido** de esta carpeta a la raíz del repositorio: `index.html`, `assets/` y los archivos de configuración incluidos. No subas una carpeta `GITHUB` dentro de otra carpeta ni el ZIP sin descomprimir.
3. Confirma los cambios.
4. Si deseas que el sitio tenga una dirección pública, activa GitHub Pages para la rama de entrega y su carpeta raíz.

No necesita instalación, compilación, Node.js, claves ni una base de datos. Las rutas son relativas y permiten publicar también en un repositorio con subcarpeta de GitHub Pages.

## Idiomas

- `index.html`: español.
- `en.html`: inglés internacional (`en`), con ortografía estadounidense consistente.
- `pt.html`: portugués brasileño (`pt-BR`).

El selector ES / EN / PT funciona en escritorio y móvil. Cada versión es HTML completo, con su idioma, título, descripción y enlaces `hreflang`; el contenido editorial ya está traducido antes de ejecutar JavaScript. Se conserva la sección del enlace al cambiar de idioma. Los logos y nombres de marca usan los mismos archivos originales en las tres versiones.

La referencia editorial es `LOCALIZACION-B2B.md`. Las adaptaciones se mantienen en `assets/translations.js`; el español y el diseño común se editan en `index.html`. Después de editar cualquiera de ellos, ejecutar desde esta carpeta:

```sh
node scripts/build-locales.mjs
```

Este paso solo es necesario para actualizar los archivos de entrega; el sitio publicado no necesita Node.js. El generador detecta textos editoriales nuevos sin traducción para evitar dejar frases españolas mezcladas en las otras versiones. No editar directamente `en.html` o `pt.html`, porque se regeneran desde la fuente común.

`assets/i18n.js` localiza validación, mensajes y utilidades; `assets/i18n.css` adapta el selector y el ajuste del contenido. El globo localiza países, regiones y anuncios accesibles, conservando los nombres y alias de las agencias. Los datos comerciales pueden proporcionar `translations['en']` y `translations['pt-BR']` en cada mercado (`country`, `region`) y agencia (`city`, `description`); los nombres y logos no se traducen.

Se aplicaron los ajustes de `AJUSTES IDIOMA/REVISION-IDIOMAS-AYSEN-PATAGONIA-TOUR.md`: titulares de historia, enfoque B2B en portugués, metadescripciones, red de agencias, CTA de itinerarios, paso 04 y terminología del pie y el globo. El inglés se identifica como `en` en todas las páginas y el selector se anuncia como “English”. Los elementos con `data-i18n` permiten adaptar una frase completa aunque en español contenga saltos de línea de diseño.

La implementación usa la guía terminológica B2B; sigue pendiente una revisión editorial humana nativa antes de considerar los textos aprobados para publicación.

## Vista previa local

Abre `index.html` en un navegador, con conexión a Internet para cargar las fuentes. Las fotografías, los logos y el video se sirven desde los archivos locales. También puede servirse esta carpeta con cualquier servidor de archivos estáticos.

## Contenido de la entrega

- `index.html`: página principal con sus estilos y comportamiento general.
- `en.html` y `pt.html`: versiones localizadas completas.
- `assets/translations.js`, `assets/i18n.js`, `assets/i18n.css`: textos localizados, mensajes y ajustes de idiomas.
- `scripts/build-locales.mjs`: regeneración de las variantes desde el español y el diccionario editorial.
- `assets/network-globe.css`: diseño y adaptación del bloque del globo.
- `assets/network-globe.js`: exploración de países y fichas de agencias.
- `assets/network-dots.js`: representación del globo mediante puntos.
- `assets/network-data.js`: mercados y agencias editables.
- `assets/network-graticule.svg`: textura cartográfica estática de respaldo.
- `assets/network-graticule.js`: desplazamiento suave de las líneas al hacer scroll, también en pantallas táctiles, y ondulación local al pasar el mouse.
- `assets/world-countries.js`: geometrías de países.
- `assets/vendor/`: dependencias cartográficas locales y sus licencias.
- Imágenes y logos locales usados por la página.

## Estado funcional

Esta entrega está lista para subir y mostrar como maqueta en GitHub Pages. Conserva estos pendientes de contenido y operación:

- **El formulario no envía datos ni correos.** Valida los campos y muestra una confirmación de demostración. Se debe conectar un servicio de recepción antes de utilizarlo para recibir consultas reales; GitHub Pages por sí solo no recibe formularios.
- El globo muestra la red real indicada por el cliente (`demoMode: false`): 7 agencias en Chile (Pacific Reps, Expan Tours, Travelaway, Panam, GoChile, OTSI y CTS Turismo), 2 en Argentina (Indus Travel y Quarum Travel / Quarum Experience) y 1 en Brasil (Grupo BRT). Los enlaces abren una pestaña nueva. Se eliminaron las agencias ficticias y los mercados de demostración. Indus Travel corresponde a Argentina y utiliza la URL exacta proporcionada por el cliente: `http://industravel.tur.ar/?lang=es`. “Logistour” permanece fuera de la lista pública, registrado en `pendingAgencies`, hasta confirmar si corresponde a Logistur y qué sede/mercado representar.
- Los tres enlaces “Explorar”, “Solicitar programas disponibles” y “Consultar opciones” abren WhatsApp en +56 9 8132 3080. “Solicitar una propuesta” lleva directamente a `#quote-form`; “Conocer programas base” lleva a `#programas`.
- Los contactos confirmados del sitio son +56 9 8132 3080 y operaciones@aysenpatagoniatour.cl. El pie ofrece llamada, WhatsApp y correo; el bloque de consulta ofrece contacto directo por WhatsApp y correo, y el acceso para viajeros abre WhatsApp. Aplicado en los tres idiomas. El formulario continúa en modo demostración hasta conectar su servicio de envío. Se conserva el aviso de sitio en desarrollo.
- Las tres fotografías del hero corresponden a ubicaciones verificadas de la Carretera Austral y la Región de Aysén; sus fuentes y autores están registrados en `assets/CREDITOS-FOTOGRAFIAS-HERO.md`. Las fotografías conservadas de los programas Esencial y Misteriosa siguen siendo referencias visuales provisionales; se incluyen como archivos locales. Las fuentes se cargan desde Google Fonts.
- Nuestra historia usa la foto retocada del equipo con delantales de mezclilla y logos blancos. Los bullets usan el símbolo original de marca. El bloque para viajeros incorpora una mano con antebrazo que sale del borde inferior, un video en bucle al 85 % de velocidad y el símbolo grande de la marca como sello de agua.

## Comprobaciones de esta entrega

Se revisan los recursos locales, las rutas internas, la navegación, los controles del globo y el formulario en escritorio y móvil. Los campos conservan etiquetas accesibles, autocompletado y validación nativa; las etiquetas no se duplican con ejemplos dentro de los campos.

Para las variantes se comprobaron los tres idiomas en Chrome con anchos de 1440, 390 y 320 px: selector, navegación móvil, fichas del globo, avisos, formulario, validación y conservación del ancla al cambiar de idioma. La prueba móvil corresponde a tamaños emulados, no a dispositivos físicos.

El globo gira lentamente (una vuelta aproximada cada 90 segundos). La pausa de exploración se activa únicamente al posar el mouse dentro del círculo del planeta; al retirarlo, la rotación continúa sin demora. Seleccionar países, enfocar con el teclado o usar los controles no añade pausas. El arrastre y las transiciones a un país controlan directamente la orientación mientras duran, sin espera posterior. La animación se limita a 30 actualizaciones por segundo y se detiene cuando el bloque no está visible o la pestaña está oculta.

Las líneas cartográficas, ahora en verde oscuro, se desplazan suavemente con el scroll en escritorio y móvil; conservan la respuesta local al mouse en equipos con puntero. Con `prefers-reduced-motion`, las líneas usan el respaldo estático y el globo no gira automáticamente. El recorrido nocturno se muestra completo con movimiento reducido.

Las licencias de D3 se conservan en `assets/vendor/`. No se incluye una licencia general que conceda derechos sobre la marca o las fotografías.

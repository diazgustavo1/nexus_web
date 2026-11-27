/* ============================================================
   NEXUS — lógica del sitio escrita a mano (HTML + CSS + JS)
   Sin React, sin build, sin dependencias.
   ============================================================ */

(function () {
  "use strict";

  /* ---------- Configuración (antes eran variables VITE_*) ---------- */
  const CONFIG = {
    formEndpoint: "https://formspree.io/f/mdegjyol",
    email: "nexusweboficial0@gmail.com",
    whatsapp: "5492364270958",
    instagram: "https://www.instagram.com/nexus__web_1/",
    kchick: "./kchick/index.html",
  };

  const $ = (selector, root) => (root || document).querySelector(selector);
  const $$ = (selector, root) => Array.prototype.slice.call((root || document).querySelectorAll(selector));
  const esc = (value) =>
    String(value == null ? "" : value).replace(/[&<>"']/g, (c) => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
    })[c]);

  /* ---------- Contenido ---------- */
  const WHY = [
    { t: "Diseño que vende", d: "Cada sección guía a tu visitante hacia una acción: escribirte, reservar o comprar.", icon: "◎" },
    { t: "Carga rápida", d: "Páginas livianas y veloces. Nadie se va por esperar.", icon: "⚡" },
    { t: "Adaptable a celular", d: "Se ve perfecta en celular, que es donde te busca la mayoría.", icon: "▣" },
    { t: "Lista para WhatsApp y redes", d: "Botón directo a WhatsApp y enlaces a tus redes, sin fricción.", icon: "◉" },
  ];

  const SERVICES = [
    { title: "Landing Page que vende", desc: "Ideal para promocionar un producto o servicio y convertir visitas en consultas.", price: "Desde $ — precio a definir", tag: "La más pedida", items: ["Diseño a medida", "Textos pensados para vender", "Botón de WhatsApp", "Formulario de contacto"], icon: "◎" },
    { title: "Página Web para Negocios", desc: "Para peluquería, fotógrafo, local, profesional o emprendimiento que necesita presencia seria.", price: "Desde $ — precio a definir", tag: "Para negocios", items: ["Secciones: servicios, trabajos, opiniones", "Google Maps y contacto", "Diseño responsive", "Textos y fotos organizados"], icon: "▣" },
    { title: "Tienda Online / Catálogo", desc: "Mostrá tus productos con orden, precios y un camino simple para comprar o consultar.", price: "Desde $ — precio a definir", tag: "Ventas", items: ["Catálogo con productos", "Botón de compra / consulta", "Filtros y categorías", "Fácil de actualizar"], icon: "▤" },
    { title: "Portfolio / Marca Personal", desc: "Que tu trabajo hable por vos. Una página que transmite tu estilo y tu nivel profesional.", price: "Desde $ — precio a definir", tag: "Marca personal", items: ["Galería de trabajos", "Sobre vos / tu historia", "Contacto directo", "Estilo 100% tuyo"], icon: "♟" },
    { title: "Página para Turnos y Reservas", desc: "Que tus clientes reserven sin vueltas, desde el celular, en cualquier horario.", price: "Desde $ — precio a definir", tag: "Reservas", items: ["Botón de reserva / WhatsApp", "Horarios y servicios claros", "Recordatorio de turno", "Calendario simple"], icon: "◷" },
    { title: "Rediseño de página existente", desc: "Tu página actual puede vender más. La modernizamos sin perder lo que ya funciona.", price: "Desde $ — precio a definir", tag: "Mejora", items: ["Diagnóstico de lo actual", "Nuevo diseño moderno", "Mejora de velocidad", "Textos más claros"], icon: "⟳" },
  ];

  const PLANS = [
    { name: "Landing Esencial", desc: "Para lanzar una oferta y empezar a vender ya.", price: "Ideal para empezar", features: ["1 página completa", "Diseño a medida", "Botón de WhatsApp", "Formulario de contacto", "Adaptable a celular", "Entrega rápida"], featured: false, cta: "Quiero la Landing" },
    { name: "Web Completa", desc: "Tu negocio con presencia profesional en internet.", price: "La más elegida", features: ["Hasta 5 secciones", "Diseño a medida", "Google Maps + redes", "Galería y testimonios", "Textos pensados para vender", "Soporte inicial"], featured: true, cta: "Quiero la Web Completa" },
    { name: "Web + Tienda", desc: "Para vender productos sin depender solo de redes.", price: "Para vender más", features: ["Todo lo de Web Completa", "Catálogo / tienda", "Filtros y productos", "Botón de compra", "Panel simple de actualizar", "Acompañamiento inicial"], featured: false, cta: "Quiero Web + Tienda" },
  ];

  const PROCESS = [
    { n: "01", t: "Contame tu idea", d: "Me contás qué hacés, a quién querés llegar y qué te gustaría lograr con tu página." },
    { n: "02", t: "Te muestro el diseño", d: "Te presento una propuesta visual pensada para tu negocio, con tu estilo y tus colores." },
    { n: "03", t: "Ajustamos juntos", d: "Cambiamos textos, fotos y detalles hasta que digas: «esta página soy yo»." },
    { n: "04", t: "Publicamos tu página", d: "La dejamos online, lista para recibir visitas, consultas y ventas." },
  ];

  const TESTIMONIALS = [
    { q: "«Me llegó una página hermosa, rápida y con todo listo para que me escriban. En la primera semana ya noté más consultas.»", n: "Meli", r: "Peluquería" },
    { q: "«Entendió mi estilo al toque. Mi portfolio por fin se ve profesional y me llegan trabajos por la página.»", n: "Diego", r: "Fotógrafo" },
    { q: "«El catálogo quedó clarísimo y pedir es mucho más fácil. Mis clientes me dicen que les encanta cómo se ve.»", n: "Cami", r: "Tienda / Emprendimiento" },
  ];

  const CODE_SAMPLES = {
    html: [
      "<!-- Hero de ejemplo -->",
      '<section class="hero">',
      '  <span class="etiqueta">Páginas que venden</span>',
      "  <h1>Tu negocio merece vender más</h1>",
      "  <p>Una página rápida y clara para convertir visitas en clientes.</p>",
      '  <button class="btn" onclick="empezar()">Quiero mi página</button>',
      "</section>",
    ].join("\n"),
    css: [
      "/* Estilos del hero */",
      ".hero {",
      "  background: linear-gradient(90deg, #0080FF, #7C3AED);",
      "  color: #ffffff;",
      "  padding: 48px 32px;",
      "  border-radius: 24px;",
      "  text-align: center;",
      "}",
      ".btn {",
      "  background: #ffffff;",
      "  color: #1e1b4b;",
      "  padding: 12px 24px;",
      "  border-radius: 999px;",
      "  font-weight: 800;",
      "}",
    ].join("\n"),
    js: [
      "// Botón del hero",
      'const boton = document.querySelector(".btn");',
      "",
      "function empezar() {",
      '  boton.textContent = "¡Vamos! Te escribo ahora";',
      '  boton.style.transform = "scale(1.05)";',
      "}",
      "",
      'boton.addEventListener("click", empezar);',
    ].join("\n"),
  };

  const EDITOR_TABS = [
    { id: "html", label: "index.html", dot: "#fb923c" },
    { id: "css", label: "style.css", dot: "#38bdf8" },
    { id: "js", label: "script.js", dot: "#fde047" },
  ];

  /* ---------- Miniaturas de los trabajos ---------- */
  function miniBrowser(url, barStyle, bodyClass, bodyHtml) {
    return '<div class="mini-browser">' +
      '<div class="mini-bar"' + (barStyle ? ' style="' + barStyle + '"' : "") + '><i></i><i></i><i></i><span>' + esc(url) + "</span></div>" +
      '<div class="mini-body ' + bodyClass + '">' + bodyHtml + "</div></div>";
  }

  const MINIS = {
    elcorte: miniBrowser("nexus.demo/elcorte", "background:#111", "mini-dark",
      '<div class="mini-line"><b style="font-size:14px;letter-spacing:.12em">EL <span style="color:#d4af37">CORTE</span></b>' +
      '<span style="font-size:9px;background:#d4af37;color:#000;padding:4px 8px;border-radius:999px;font-weight:800">Sacar turno</span></div>' +
      '<div class="mini-title">Cortes que hablan<br><span style="color:#d4af37">por vos.</span></div>' +
      '<div class="mini-sub">Turnos en menos de 1 minuto.</div>' +
      '<div class="mini-cols" style="grid-template-columns:1fr 1fr;margin-top:12px">' +
      '<div style="background:rgba(255,255,255,.07);padding:8px;text-align:left"><b>Corte clásico</b><br><span style="color:#d4af37">$8.000</span></div>' +
      '<div style="background:rgba(255,255,255,.07);padding:8px;text-align:left"><b>Corte + Barba</b><br><span style="color:#d4af37">$12.000</span></div></div>'),
    ecolimpio: miniBrowser("nexus.demo/ecolimpio", "background:#fff", "mini-light",
      '<div class="mini-line"><b style="font-size:14px"><span style="color:#0f9d6e">ECO</span> LIMPIO</b>' +
      '<span style="font-size:9px;background:#0f9d6e;color:#fff;padding:4px 8px;border-radius:999px;font-weight:800">Pedir por WhatsApp</span></div>' +
      '<div class="mini-title">Todo limpio,<br><span style="color:#0f9d6e">sin vueltas.</span></div>' +
      '<div class="mini-cols" style="margin-top:12px">' +
      ['Hogar', 'Cocina', 'Higiene'].map((x) => '<div style="background:#fff;box-shadow:0 2px 8px rgba(0,0,0,.06);padding:8px 4px"><div style="height:22px;border-radius:6px;background:#d9f5e6"></div><div style="margin-top:4px">' + x + "</div></div>").join("") + "</div>"),
    dgula: miniBrowser("dgula-burguer.netlify.app", "background:#1a1a1a", "mini-dark",
      '<div class="mini-line"><b style="font-size:14px">D\'GULA <span style="color:#facc15">BURGUER</span></b>' +
      '<span style="font-size:9px;background:#ef4444;padding:4px 8px;border-radius:999px;font-weight:800">PÁGINA REAL</span></div>' +
      '<div style="margin-top:12px;display:inline-block;padding:5px 10px;border-radius:999px;font-size:9px;font-weight:800;background:linear-gradient(90deg,#ef4444,#f97316,#facc15);color:#000">PAPAS D\'GULA ★ LUJURIA ★ PEHUAJÓ</div>' +
      '<div class="mini-title" style="font-size:22px">BUENA COMIDA<br><span style="color:#facc15">RÁPIDA</span> Y <span style="color:#ef4444">FRESCA</span></div>' +
      '<div class="mini-sub" style="font-weight:800">D\'Gula Burguer Pehuajó</div>' +
      '<div class="mini-chips"><span style="background:#ef4444;color:#fff">ENVÍO RÁPIDO</span><span style="background:#f97316;color:#000">A LA PLANCHA</span><span style="background:#facc15;color:#000">PEDIDO FÁCIL</span></div>'),
    residencia: miniBrowser("residencia-junin-ok.netlify.app", "background:#f7ecd2", "mini-cream",
      '<p style="font-size:9px;letter-spacing:.22em;font-weight:800;color:#a07d1f">DIGNIDAD • RESPETO • AFECTO</p>' +
      '<div class="mini-title" style="margin-top:8px">Residencia Junín</div>' +
      '<div class="mini-sub" style="font-weight:800;color:#8a6d2b">Un Hogar Familiar</div>' +
      '<div class="mini-chips"><span style="background:rgba(160,125,31,.10);color:#7a5f18">Enfermería 24hs</span><span style="background:rgba(160,125,31,.10);color:#7a5f18">4 comidas diarias</span><span style="background:rgba(160,125,31,.10);color:#7a5f18">Talleres y recreación</span></div>'),
    abogado: miniBrowser("nexus.demo/estudio-juridico", "background:#071323", "mini-navy",
      '<div class="mini-line"><b style="font-size:11px;letter-spacing:.15em;color:#e4c87a">ESTUDIO JURÍDICO</b>' +
      '<span style="font-size:9px;background:#c39a3b;color:#071323;padding:4px 8px;font-weight:800">Consulta gratis</span></div>' +
      '<div class="mini-title" style="font-family:Playfair Display,Georgia,serif;font-size:18px">Defendemos tus derechos con <span style="color:#e4c87a">experiencia</span>.</div>' +
      '<div class="mini-sub">Divorcios, accidentes, reclamos y más.</div>' +
      '<div class="mini-cols" style="margin-top:12px">' + ["Civil", "Laboral", "Familia"].map((x) => '<div style="border:1px solid rgba(255,255,255,.15);background:rgba(255,255,255,.05);color:#e4c87a;padding:8px 4px">' + x + "</div>").join("") + "</div>"),
    kchick: miniBrowser("nexus.demo/kchick", "background:#0a0a0a", "mini-dark",
      '<div class="mini-line"><b style="font-size:14px;letter-spacing:.14em">K-<span style="color:#E31E24">CHICK</span><span style="color:#E31E24">.</span></b>' +
      '<span style="font-size:9px;background:#E31E24;color:#fff;padding:4px 8px;border-radius:999px;font-weight:800">ORDER NOW</span></div>' +
      '<div class="mini-title" style="font-size:22px">CRISPY CHICKEN,<br><span style="color:#E31E24">BOLD FLAVORS.</span></div>' +
      '<div class="mini-sub">Korean Fast Food · Seúl en cada bocado</div>' +
      '<div class="mini-chips"><span style="background:#E31E24;color:#fff">K-CHICKEN</span><span style="background:#E31E24;color:#fff">K-BURGER</span><span style="background:#E31E24;color:#fff">TTEOKBOKKI</span></div>'),
  };

  const WORKS = [
    { mini: "elcorte", icon: "✂", category: "Landing + Turnos", title: "EL CORTE — Barbería & Peluquería", description: "Cortes que hablan por vos. Turnos en menos de 1 minuto con confirmación por WhatsApp.", features: ["Servicios y precios", "Formulario de turnos", "Reseñas 4.9"], demo: "elcorte", request: "El Corte" },
    { mini: "ecolimpio", icon: "▤", category: "Tienda / Catálogo", title: "ECO LIMPIO — Tienda de Limpieza", description: "Catálogo moderno para hogar y negocios, con pedidos y cotizaciones por WhatsApp.", features: ["Categorías", "Productos destacados", "Ofertas y combos"], demo: "ecolimpio", request: "Eco Limpio" },
    { mini: "dgula", icon: "♨", category: "Menú + Pedidos", title: "D'GULA BURGUER — Pehuajó", description: "Hamburguesas a la plancha y papas crocantes en Pehuajó. Menú con carrito y pedido por WhatsApp.", features: ["Menú con filtros", "Mi Pedido / Carrito", "Pedido por WhatsApp"], href: "https://dgula-burguer.netlify.app/", request: "D'Gula Burguer" },
    { mini: "residencia", icon: "⌂", category: "Página Institucional / Residencia", title: "Residencia Junín | Un Hogar Familiar", description: "Residencia para adultos mayores en Junín. Proyecto familiar con más de 15 años: historia, actividades, rutina, instalaciones y opiniones de familias.", features: ["Nuestra historia y rutina diaria", "Actividades y atención médica", "Instalaciones y horarios de visita"], href: "https://residencia-junin-ok.netlify.app/", request: "Residencia Junín" },
    { mini: "abogado", icon: "⚖", category: "Página Institucional / Abogado", title: "Estudio Jurídico — Defendemos tus derechos", description: "Landing elegante y confidencial: áreas de práctica, por qué elegirnos, testimonios, preguntas frecuentes y consulta gratuita.", features: ["Civil, Laboral, Familia, Penal y ART", "Primera consulta sin cargo", "Testimonios y preguntas frecuentes"], demo: "abogado", request: "Estudio Jurídico" },
    { mini: "kchick", icon: "♨", category: "Fast Food / Menú + Pedidos", title: "K-CHICK — Korean Fast Food", description: "Pollo coreano doble fritura, menú con búsqueda y carrito, historia de marca y pedidos por WhatsApp.", features: ["Catálogo con buscador", "Carrito y checkout", "Identidad visual propia"], demo: "kchick", request: "K-CHICK" },
  ];

  /* ---------- Render de secciones ---------- */
  function renderSections() {
    $("#whyGrid").innerHTML = WHY.map((w, i) =>
      '<div class="reveal"><article class="card info-card">' +
      '<span class="icon-tile" aria-hidden="true">' + w.icon + "</span>" +
      "<h3>" + esc(w.t) + "</h3><p>" + esc(w.d) + "</p>" +
      '<p class="num">0' + (i + 1) + "</p></article></div>"
    ).join("");

    $("#serviciosGrid").innerHTML = SERVICES.map((s) =>
      '<div class="reveal"><article class="card service-card">' +
      '<div class="service-top"><span class="service-icon" aria-hidden="true">' + s.icon + "</span>" +
      '<span class="service-tag">' + esc(s.tag) + "</span></div>" +
      "<h3>" + esc(s.title) + "</h3><p>" + esc(s.desc) + "</p><ul>" +
      s.items.map((it) => "<li><span>✓</span><span>" + esc(it) + "</span></li>").join("") +
      '</ul><div class="service-foot"><span class="price">' + esc(s.price) + "</span>" +
      '<button type="button" class="link-btn" data-plan="' + esc(s.title) + '">Quiero esta →</button></div></article></div>'
    ).join("");

    $("#trabajosGrid").innerHTML = WORKS.map((w) => {
      const action = w.demo
        ? '<button type="button" class="btn grad-btn" data-demo="' + w.demo + '">VER LA PÁGINA →</button>'
        : '<a class="btn grad-btn" href="' + esc(w.href) + '" target="_blank" rel="noopener">VER PÁGINA REAL ↗</a>';
      return '<div class="reveal"><article class="card work-card">' +
        '<div class="work-preview">' + MINIS[w.mini] + "</div>" +
        '<div class="work-body"><span class="work-badge"><span aria-hidden="true">' + w.icon + "</span> " + esc(w.category) + "</span>" +
        "<h3>" + esc(w.title) + "</h3><p>" + esc(w.description) + "</p>" +
        '<ul class="work-features">' + w.features.map((f) => "<li><span>✓</span><span>" + esc(f) + "</span></li>").join("") + "</ul>" +
        '<div class="work-actions">' + action +
        '<button type="button" class="btn ghost-btn" data-ejemplo="' + esc(w.request) + '">Quiero algo así →</button>' +
        "</div></div></article></div>";
    }).join("");

    $("#procesoGrid").innerHTML = PROCESS.map((p) =>
      '<div class="reveal"><article class="card process-card"><div class="process-num grad-text">' + p.n + "</div>" +
      "<h3>" + esc(p.t) + "</h3><p>" + esc(p.d) + "</p></article></div>"
    ).join("");

    $("#opinionesGrid").innerHTML = TESTIMONIALS.map((t) =>
      '<div class="reveal"><figure class="card testimonial"><div class="stars" aria-label="5 estrellas">★★★★★</div>' +
      "<blockquote>" + esc(t.q) + "</blockquote>" +
      '<figcaption><span class="avatar">' + esc(t.n[0]) + '</span><span><b>' + esc(t.n) + "</b><small>" + esc(t.r) + "</small></span></figcaption></figure></div>"
    ).join("");

    $("#planesGrid").innerHTML = PLANS.map((p) =>
      '<div class="reveal"><article class="card plan-card' + (p.featured ? " featured" : "") + '">' +
      '<span class="plan-tag">' + esc(p.price) + "</span><h3>" + esc(p.name) + "</h3><p>" + esc(p.desc) + "</p>" +
      "<ul>" + p.features.map((f) => "<li><span>✓</span><span>" + esc(f) + "</span></li>").join("") + "</ul>" +
      '<button type="button" class="btn ' + (p.featured ? "ghost-btn" : "grad-btn") + '" data-plan="' + esc(p.name) + '">' + esc(p.cta) + "</button></article></div>"
    ).join("");
  }

  /* ---------- Animación de entrada ---------- */
  function observeReveals(root) {
    const items = $$(".reveal:not(.is-visible)", root);
    if (!("IntersectionObserver" in window)) {
      items.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("is-visible");
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    items.forEach((el) => obs.observe(el));
  }

  /* ---------- Resaltado simple del editor ---------- */
  const HIGHLIGHTERS = {
    html: {
      re: /(<!--[\s\S]*?-->)|(<\/?[A-Za-z][\w-]*)|("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')|([\w-]+)(?==)/g,
      cls: ["tok-com", "tok-tag", "tok-str", "tok-attr"],
    },
    css: {
      re: /(\/\*[\s\S]*?\*\/)|("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')|([\w-]+)(?=\s*:)|(#[0-9a-fA-F]{3,8}\b|\b\d+(?:\.\d+)?(?:px|rem|%|vh|vw)?\b)|([.#][\w-]+)(?=\s*\{)/g,
      cls: ["tok-com", "tok-str", "tok-key", "tok-num", "tok-fn"],
    },
    js: {
      re: /(\/\/.*|\/\*[\s\S]*?\*\/)|("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|`(?:[^`\\]|\\.)*`)|\b(const|let|var|function|return|document|addEventListener|querySelector|if|else|for|new)\b|\b\d+(?:\.\d+)?\b|([A-Za-z_]\w*)(?=\s*\()/g,
      cls: ["tok-com", "tok-str", "tok-key", "tok-num", "tok-fn"],
    },
  };

  function highlight(code, type) {
    const config = HIGHLIGHTERS[type];
    config.re.lastIndex = 0;
    let out = "", last = 0, match;
    while ((match = config.re.exec(code)) !== null) {
      out += esc(code.slice(last, match.index));
      let group = 1;
      while (group < match.length && match[group] === undefined) group++;
      const cls = config.cls[group - 1] || "tok-key";
      out += '<span class="' + cls + '">' + esc(match[0]) + "</span>";
      last = match.index + match[0].length;
      if (match[0].length === 0) config.re.lastIndex++;
    }
    return out + esc(code.slice(last));
  }

  /* ---------- Editor animado ---------- */
  function initEditor() {
    const host = $("#codeEditor");
    host.innerHTML =
      '<div class="editor-shell" id="editorShell">' +
      '<div class="editor-bar"><span class="dots" aria-hidden="true"><i></i><i></i><i></i></span>' +
      '<div class="editor-tabs" role="tablist" aria-label="Archivos del proyecto">' +
      EDITOR_TABS.map((t, i) => '<button type="button" role="tab" data-tab="' + t.id + '" aria-selected="' + (i === 0) + '"><span class="dot" style="background:' + t.dot + '"></span>' + t.label + "</button>").join("") +
      '</div><span class="editor-path">tu-pagina / <span id="editorPath">index.html</span></span></div>' +
      '<div class="editor-code"><div class="editor-code-inner"><div class="line-numbers" id="lineNumbers" aria-hidden="true"></div><pre><code id="codeOut"></code></pre></div></div>' +
      '<div class="editor-foot"><p class="editor-status"><span class="pulse" id="editorPulse"></span><span id="editorStatus">● Escribiendo en vivo...</span><span class="hint">Pasá el mouse para pausar</span></p>' +
      '<button type="button" class="replay-btn" id="replayBtn">↺ Volver a escribir</button></div></div>' +
      '<div class="live-preview"><div class="live-preview-head"><p>◉ VISTA PREVIA EN VIVO</p><small>Se actualiza mientras escribo</small></div>' +
      '<div class="preview-stage" id="previewStage"></div><p class="hint center">Mini ejemplo de cómo se va armando tu hero, línea por línea.</p></div>' +
      '<button type="button" class="btn grad-btn editor-open" data-demo="elcorte">VER LA PÁGINA →</button>' +
      '<p class="hint center">Abrí la demo completa tal como quedaría publicada.</p>';

    let tab = "html";
    let count = 0;
    let done = false;
    let paused = false;
    let resetTimer = null;
    let previewKey = "";

    const full = () => CODE_SAMPLES[tab];

    function renderPreview(typed, progress) {
      const showTitle = tab === "html" ? typed.includes("Tu negocio") : progress > 0.18;
      const showText = tab === "html" ? typed.includes("convertir visitas") : progress > 0.45;
      const showButton = tab === "html" ? typed.includes("Quiero mi página") : progress > 0.72;
      const cssStyled = tab !== "css" || progress > 0.35;
      const jsDone = tab === "js" && progress > 0.6;
      const key = [showTitle, showText, showButton, cssStyled, jsDone].join("|");
      if (key === previewKey) return;
      previewKey = key;
      $("#previewStage").className = "preview-stage" + (cssStyled ? " styled" : "");
      $("#previewStage").innerHTML =
        (showTitle ? "<h4>Tu negocio merece vender más</h4>" : '<span class="skeleton" style="width:75%;height:24px"></span>') +
        (showText ? '<p>Una página rápida y clara para convertir visitas en clientes.</p>' : '<div style="margin-top:12px"><span class="skeleton" style="width:65%;height:12px"></span></div>') +
        (showButton ? '<span class="fake-btn' + (jsDone ? " js" : "") + '">' + (jsDone ? "¡Vamos! Te escribo ahora" : "Quiero mi página →") + "</span>" : '<div style="margin-top:16px"><span class="skeleton" style="width:160px;height:32px"></span></div>');
    }

    function render() {
      const text = full();
      const typed = text.slice(0, count);
      const progress = text.length ? count / text.length : 0;
      const lines = typed.split("\n");
      $("#lineNumbers").innerHTML = lines.map((_, i) => "<div>" + (i + 1) + "</div>").join("");
      $("#codeOut").innerHTML = highlight(typed, tab) + '<span class="code-cursor" aria-hidden="true"></span>';
      $("#editorStatus").textContent = paused
        ? "En pausa — mové el mouse para seguir"
        : done ? "Listo — se vuelve a escribir…" : "● Escribiendo en vivo...";
      $("#editorPulse").classList.toggle("paused", paused);
      renderPreview(typed, progress);
    }

    function reset() {
      clearTimeout(resetTimer);
      count = 0;
      done = false;
      previewKey = "";
      render();
    }

    $$("[data-tab]", host).forEach((btn) => btn.addEventListener("click", () => {
      tab = btn.dataset.tab;
      $$("[data-tab]", host).forEach((b) => b.setAttribute("aria-selected", String(b === btn)));
      $("#editorPath").textContent = EDITOR_TABS.find((t) => t.id === tab).label;
      reset();
    }));

    $("#replayBtn").addEventListener("click", reset);
    $("#editorShell").addEventListener("mouseenter", () => { paused = true; render(); });
    $("#editorShell").addEventListener("mouseleave", () => { paused = false; render(); });

    setInterval(() => {
      if (paused) return;
      const text = full();
      if (count >= text.length) return;
      count++;
      render();
      if (count === text.length) {
        done = true;
        render();
        resetTimer = setTimeout(reset, 3400);
      }
    }, 26);

    render();
  }

  /* ---------- Modal de demos ---------- */
  const DEMO_URLS = {
    elcorte: "nexus.demo/elcorte",
    ecolimpio: "nexus.demo/ecolimpio",
    abogado: "nexus.demo/estudio-juridico",
    kchick: "nexus.demo/kchick",
  };

  function openModal(url, html, wire) {
    $("#modalUrl").textContent = "Vista previa de " + url;
    $("#demoContent").innerHTML = html;
    $("#demoModal").hidden = false;
    document.body.style.overflow = "hidden";
    if (wire) wire($("#demoContent"));
  }

  function closeModal() {
    if ($("#demoModal").hidden) return;
    $("#demoModal").hidden = true;
    $("#demoContent").innerHTML = "";
    document.body.style.overflow = "";
  }

  /* ---------- Demo: El Corte ---------- */
  function demoElCorte() {
    const services = [
      ["Corte clásico", "$8.000", "30 min", "Corte a máquina o tijera, lavado y peinado final.", false],
      ["Corte + Barba", "$12.000", "45 min", "Corte completo + perfilado de barba con toalla caliente.", true],
      ["Barba premium", "$6.000", "30 min", "Perfilado, afeitado y aceites para una barba prolija.", false],
      ["Corte infantil", "$6.500", "30 min", "Corte cómodo y con paciencia para los más chicos.", false],
    ];
    return '<div class="demo-page" style="background:#0b0b0c;color:#fff">' +
      '<div class="demo-nav" style="background:#111"><b class="demo-brand">EL <span style="color:#d4af37">CORTE</span> <span style="color:#d4af37">✂</span></b>' +
      '<span class="demo-nav-links"><span>Servicios</span><span>Opiniones</span><span>Turnos</span></span>' +
      '<button class="demo-pill" style="background:#d4af37;color:#000" data-scroll="elcorte-turno">Sacar turno</button></div>' +
      '<section class="demo-hero"><span class="service-tag" style="color:#d4af37">BARBERÍA &amp; PELUQUERÍA</span>' +
      '<h2>Cortes que hablan <span style="color:#d4af37">por vos.</span></h2>' +
      "<p>Turnos en menos de 1 minuto con confirmación por WhatsApp. Elegí tu servicio, tu horario y listo.</p>" +
      '<div class="demo-btn-row"><button class="btn grad-btn" style="background:#22c55e" data-scroll="elcorte-turno">Pedir por WhatsApp</button>' +
      '<button class="btn ghost-btn" data-scroll="elcorte-turno">Sacar turno</button></div>' +
      '<div class="demo-stats"><div><b style="color:#d4af37">4.9 ★</b><small>Reseñas de clientes</small></div>' +
      '<div><b style="color:#d4af37">&lt; 1 min</b><small>Para sacar tu turno</small></div>' +
      '<div><b style="color:#d4af37">100%</b><small>Confirmación por WhatsApp</small></div></div></section>' +
      '<section class="demo-section" style="background:#fff;color:#1c1917"><p class="eyebrow" style="color:#a07d1f">SERVICIOS Y PRECIOS</p><h3>Elegí tu corte</h3>' +
      '<div class="demo-grid cols-2">' + services.map((s) =>
        '<article class="demo-tile"' + (s[4] ? ' style="border-color:#d4af37;background:#fff9e6"' : "") + ">" +
        (s[4] ? '<span style="float:right;background:#d4af37;font-size:10px;font-weight:800;padding:3px 8px;border-radius:999px">Más elegido</span>' : "") +
        "<h4>" + s[0] + '</h4><b style="color:#a07d1f">' + s[1] + "</b><p>" + s[3] + "</p>" +
        '<div style="display:flex;justify-content:space-between;align-items:center;gap:8px"><small>⏱ ' + s[2] + "</small>" +
        '<button class="btn grad-btn" data-reservar="' + esc(s[0] + " — " + s[1] + " / " + s[2]) + '" style="background:#1c1917;padding:8px 14px;font-size:12px">Reservar</button></div></article>'
      ).join("") + "</div></section>" +
      '<section class="demo-section"><p class="eyebrow" style="color:#d4af37">OPINIONES</p><h3>Clientes que ya pasaron por la silla</h3>' +
      '<div class="demo-grid cols-3">' + [
        "Saque turno en un minuto y me confirmaron por WhatsApp. El corte quedó impecable.",
        "Se nota el cuidado en cada detalle. Es mi barbería de siempre.",
        "Reservé desde el celular sin vueltas. El Corte + Barba es un golazo.",
      ].map((q, i) => '<figure class="demo-tile"><div style="color:#d4af37">★★★★★</div><blockquote style="margin:8px 0;font-size:14px">«' + q + '»</blockquote><small>Cliente ' + (i + 1) + " · 4.9 ★</small></figure>").join("") + "</div></section>" +
      '<section id="elcorte-turno" class="demo-section" style="background:#d4af37;color:#000;text-align:center"><h3>Sacá tu turno</h3>' +
      "<p>Dejá tus datos y te confirmamos por WhatsApp. Sin llamados, sin espera.</p>" +
      '<div id="elcorteFormWrap"><form id="elcorteForm" class="demo-form">' +
      '<label>Tu nombre *<input id="ecNombre" required placeholder="¿Cómo te llamás?"></label>' +
      '<label>Servicio<select id="ecServicio"><option>Corte clásico — $8.000 / 30 min</option><option>Corte + Barba — $12.000 / 45 min</option><option>Barba premium — $6.000 / 30 min</option><option>Corte infantil — $6.500 / 30 min</option></select></label>' +
      '<label>Día preferido *<input id="ecDia" type="date" required></label>' +
      '<button class="btn grad-btn" type="submit" style="background:#000">Confirmar turno por WhatsApp</button></form></div>' +
      "<p style=\"margin-top:24px;font-size:12px;opacity:.6\">© El Corte · Barbería &amp; Peluquería — Demo creada con NEXUS</p></section></div>";
  }

  /* ---------- Demo: Eco Limpio ---------- */
  function demoEco() {
    const categorias = [
      ["⌂", "Hogar y multiusos", "Para toda la casa, todos los días."],
      ["♨", "Cocina y superficies", "Grasa, mesadas y pisos impecables."],
      ["✧", "Higiene y desinfección", "Cuidado para tu familia y tu espacio."],
      ["▤", "Institucional", "Para oficinas, locales y consorcios."],
    ];
    const productos = [
      ["Detergente multiusos", "Hogar y multiusos", "Limpia, desengrasa y deja rico aroma.", "Más vendido"],
      ["Desengrasante cocina", "Cocina y superficies", "Potente contra la grasa de todos los días.", ""],
      ["Desinfectante", "Higiene y desinfección", "Higiene profunda para baños y superficies.", ""],
    ];
    return '<div class="demo-page" style="background:#f6fbf8;color:#1c1917">' +
      '<div class="demo-nav light"><b class="demo-brand"><span style="color:#0f9d6e">ECO</span> LIMPIO <span style="color:#0f9d6e">✦</span></b>' +
      '<span class="demo-nav-links"><span>Categorías</span><span>Productos</span><span>Ofertas</span></span>' +
      '<button class="demo-pill" style="background:#0f9d6e;color:#fff" data-scroll="ecolimpio-pedido">Pedir por WhatsApp</button></div>' +
      '<section class="demo-hero"><span class="service-tag" style="background:#d9f5e6;color:#0f7a55">TIENDA DE LIMPIEZA · HOGAR Y NEGOCIOS</span>' +
      '<h2>Todo limpio, <span style="color:#0f9d6e">sin vueltas.</span></h2>' +
      "<p>Catálogo moderno para hogar y negocios, con pedidos y cotizaciones por WhatsApp.</p>" +
      '<div class="demo-btn-row"><button class="btn grad-btn" style="background:#22c55e" data-scroll="ecolimpio-pedido">Pedir por WhatsApp</button>' +
      '<button class="btn ghost-btn" style="border-color:#d6d3d1;color:#1c1917" data-scroll="ecolimpio-productos">Ver catálogo</button></div>' +
      '<div class="demo-stats"><div><b>Catálogo</b><small>Ordenado por categorías</small></div><div><b>Ofertas</b><small>Combos para ahorrar</small></div><div><b>WhatsApp</b><small>Pedidos y cotizaciones</small></div></div></section>' +
      '<section class="demo-section" style="background:#fff"><p class="eyebrow" style="color:#0f9d6e">CATEGORÍAS</p><h3>Encontrá lo que necesitás</h3>' +
      '<div class="demo-grid cols-3" style="grid-template-columns:repeat(4,1fr)">' + categorias.map((c) =>
        '<button type="button" class="demo-tile" data-scroll="ecolimpio-productos" style="text-align:left"><span style="display:grid;place-items:center;width:40px;height:40px;border-radius:12px;background:#d9f5e6;color:#0f7a55;font-size:20px">' + c[0] + "</span>" +
        "<h4 style=\"margin-top:12px\">" + c[1] + "</h4><p>" + c[2] + "</p></button>"
      ).join("") + "</div></section>" +
      '<section id="ecolimpio-productos" class="demo-section"><p class="eyebrow" style="color:#0f9d6e">PRODUCTOS DESTACADOS</p><h3>Los más elegidos</h3>' +
      '<div class="demo-grid cols-3">' + productos.map((p) =>
        '<article class="demo-tile"><div style="height:80px;display:grid;place-items:center;border-radius:12px;background:linear-gradient(135deg,#d9f5e6,#fff);font-size:32px">🧴</div>' +
        (p[3] ? '<span style="display:inline-block;margin-top:12px;background:#0f9d6e;color:#fff;font-size:11px;font-weight:800;padding:4px 10px;border-radius:999px">' + p[3] + "</span>" : "") +
        "<h4>" + p[0] + "</h4><p>" + p[2] + '</p><small style="color:#0f7a55;font-weight:800">' + p[1] + "</small>" +
        '<button type="button" class="btn grad-btn" data-add-eco="' + esc(p[0]) + '" style="background:#1c1917;width:100%;margin-top:12px;font-size:13px">Agregar al pedido</button></article>'
      ).join("") + "</div></section>" +
      '<section class="demo-section" style="background:#fff"><p class="eyebrow" style="color:#0f9d6e">OFERTAS Y COMBOS</p><h3>Combos para ahorrar</h3>' +
      '<div class="demo-grid cols-2">' + [
        ["Combo Hogar Esencial", "Lo básico para la casa, en un solo pedido."],
        ["Combo Negocio", "Stock para tu local u oficina, con cotización a medida."],
      ].map((c) => '<div class="demo-tile"><span style="background:#d9f5e6;color:#0f7a55;font-size:11px;font-weight:800;padding:4px 10px;border-radius:999px">OFERTA</span>' +
        "<h4 style=\"margin-top:12px\">" + c[0] + "</h4><p>" + c[1] + "</p>" +
        '<button type="button" class="btn grad-btn" data-add-eco="' + esc(c[0]) + '" style="background:#0f9d6e;font-size:13px">Consultar combo</button></div>').join("") + "</div></section>" +
      '<section id="ecolimpio-pedido" class="demo-section" style="background:#0f3d2a;color:#fff;text-align:center"><h3>Hacé tu pedido o cotización</h3>' +
      "<p>Contanos qué necesitás y te armamos tu pedido por WhatsApp.</p>" +
      '<p id="ecoPedidoList" hidden style="margin-top:16px;background:rgba(255,255,255,.1);display:inline-block;padding:8px 16px;border-radius:12px;font-weight:800"></p>' +
      '<div id="ecoFormWrap"><form id="ecoForm" class="demo-form">' +
      '<label>Tu nombre *<input id="ecoNombre" required placeholder="¿Cómo te llamás?"></label>' +
      '<label>¿Qué necesitás?<select id="ecoNecesidad"><option>Hogar y multiusos</option><option>Cocina y superficies</option><option>Higiene y desinfección</option><option>Institucional</option><option>Todavía no lo sé</option></select></label>' +
      '<button class="btn grad-btn" type="submit" style="background:#22c55e">Pedir por WhatsApp</button></form></div>' +
      '<p style="margin-top:24px;font-size:12px;opacity:.4">© Eco Limpio · Tienda de Limpieza — Demo creada con NEXUS</p></section></div>';
  }

  /* ---------- Demo: Estudio Jurídico ---------- */
  const AB_AREAS = [
    ["Derecho Civil", "Cuando un acuerdo, un daño o un conflicto cotidiano necesita una solución justa y en regla.", ["Daños y perjuicios", "Contratos y reclamos", "Mediaciones y acuerdos"]],
    ["Derecho Laboral", "Defendemos tu trabajo y tus derechos, con la claridad que necesitás para tomar decisiones.", ["Despidos e indemnizaciones", "Trabajo no registrado", "Accidentes laborales"]],
    ["Derecho de Familia", "Acompañamiento cercano y respetuoso en los momentos más sensibles de tu vida.", ["Divorcios y acuerdos", "Cuota alimentaria", "Cuidado personal y visitas"]],
    ["Derecho Penal", "Una defensa seria, estratégica y comprometida con tus garantías en cada instancia.", ["Defensa penal", "Denuncias y querellas", "Excarcelaciones"]],
    ["Accidentes y ART", "Que un accidente no se convierta en otro problema: gestionamos tu reclamo de principio a fin.", ["Accidentes de tránsito", "Reclamos ante ART", "Indemnizaciones"]],
    ["Sucesiones y Contratos", "Ordenamos lo importante para tu familia y tu patrimonio, sin vueltas ni letra chica.", ["Sucesiones", "Testamentos", "Contratos y locaciones"]],
  ];
  const AB_BENEFICIOS = [
    ["Primera consulta sin cargo", "Contanos tu caso sin compromiso. Escuchamos, evaluamos y te decimos con honestidad qué camino conviene."],
    ["Honorarios claros, sin sorpresas", "Antes de avanzar sabés cuánto va a costar, cómo se paga y qué incluye cada etapa. Todo por escrito."],
    ["Acompañamiento en todo el proceso", "No te dejamos solo con papeles y plazos. Te explicamos cada paso en un lenguaje que se entiende."],
    ["Atención personalizada", "Tu caso lo sigue una persona, no un sistema. Conocemos tu historia y respondemos cuando nos necesitás."],
  ];
  const AB_PASOS = [
    ["01", "Contanos tu caso", "Escribinos por el formulario o por WhatsApp. Contanos qué pasó, sin tecnicismos y a tu ritmo."],
    ["02", "Analizamos y te proponemos una estrategia", "Revisamos la documentación, evaluamos las opciones y te presentamos un plan claro y realista."],
    ["03", "Te acompañamos hasta resolverlo", "Gestionamos, negociamos o litigamos según lo que tu caso necesite, y te mantenemos al tanto."],
  ];
  const AB_TESTIMONIOS = [
    ["Mariana G.", "Reclamo laboral", "Me explicaron todo con una paciencia enorme. Sabía en qué etapa estaba mi caso y nunca me sentí sola en el proceso."],
    ["Carlos y Lucía R.", "Sucesión familiar", "Un tema delicado, resuelto con mucho respeto y orden. Nos dieron tranquilidad en un momento muy difícil para la familia."],
    ["Diego M.", "Accidente de tránsito", "Se ocuparon de todo: la ART, los papeles, los plazos. Yo solo tuve que enfocarme en recuperarme."],
  ];
  const AB_FAQS = [
    ["¿Cuánto cuesta una consulta?", "La primera consulta es sin cargo. Después, te enviamos una propuesta clara con honorarios, formas de pago y alcance del trabajo, para que decidas con toda la información."],
    ["¿Cuánto tarda un caso?", "Depende del tipo de caso y de la vía que convenga: un acuerdo puede resolverse en semanas, mientras que un juicio lleva más tiempo. En la primera entrevista te damos un panorama realista y honesto."],
    ["¿Qué documentos necesito para empezar?", "Con tu DNI y todo lo que tengas relacionado con el caso alcanza para empezar: contratos, mensajes, fotos, informes médicos o notificaciones. Si falta algo, te decimos exactamente qué conseguir."],
    ["¿Atienden online?", "Sí. Atendemos de forma presencial y online, por videollamada o WhatsApp. Si estás en otra ciudad o tenés horarios complicados, nos adaptamos."],
  ];

  function demoAbogado() {
    const cards = (items) => items.map((x) =>
      '<article class="card"><span class="icon-tile" aria-hidden="true" style="background:#0a1c33;color:#e4c87a">' + (x[0] || "⚖") + "</span>" +
      "<h3>" + esc(x[1] || x[0]) + "</h3><p>" + esc(x[2] || x[1]) + "</p>" +
      (x[3] ? "<ul>" + x[3].map((i) => "<li><span>✓</span><span>" + esc(i) + "</span></li>").join("") + "</ul>" : "") + "</article>"
    ).join("");

    return '<div class="abogado-demo">' +
      '<header style="position:sticky;top:0;z-index:40;background:rgba(7,19,35,.96);color:#fff;border-bottom:1px solid rgba(255,255,255,.15)">' +
      '<div class="ab-nav-wrap" style="display:flex;align-items:center;justify-content:space-between;gap:16px;max-width:1280px;margin:auto;padding:14px 28px">' +
      '<a href="#abogado-inicio" style="display:flex;align-items:center;gap:10px;font-family:Playfair Display,serif;font-weight:700"><span style="display:grid;place-items:center;width:40px;height:40px;border:1px solid #c39a3b;color:#e4c87a">⚖</span><span>ESTUDIO JURÍDICO<small style="display:block;font-size:10px;letter-spacing:.2em;color:#e4c87a">Confianza · Claridad · Compromiso</small></span></a>' +
      '<nav class="ab-nav" aria-label="Navegación de la demo" style="display:flex;gap:24px;font-size:13px;font-weight:700">' +
      '<a href="#abogado-areas">Áreas de práctica</a><a href="#abogado-por-que">Por qué elegirnos</a><a href="#abogado-como">Cómo trabajamos</a><a href="#abogado-preguntas">Preguntas frecuentes</a></nav>' +
      '<a class="ab-btn" href="#abogado-contacto">Consulta gratuita</a>' +
      '<button type="button" id="abMenuBtn" aria-label="Abrir menú" style="display:none;background:none;border:1px solid rgba(255,255,255,.3);color:#fff;padding:8px 12px">☰</button></div>' +
      '<nav id="abMenu" hidden style="padding:0 28px 16px;display:flex;flex-direction:column;gap:8px">' +
      '<a href="#abogado-areas">Áreas de práctica</a><a href="#abogado-por-que">Por qué elegirnos</a><a href="#abogado-como">Cómo trabajamos</a><a href="#abogado-preguntas">Preguntas frecuentes</a><a href="#abogado-contacto" style="color:#e4c87a;font-weight:800">Consulta gratuita</a></nav></header>' +

      '<section id="abogado-inicio" class="ab-section ab-navy"><div class="ab-hero-grid">' +
      '<div><div class="ab-eyebrow">Estudio jurídico en Argentina</div>' +
      '<h1 style="font-size:clamp(2rem,6vw,3.4rem)">Defendemos tus derechos con <em style="color:#e4c87a;text-decoration:underline;text-underline-offset:8px">experiencia</em> y compromiso</h1>' +
      '<p class="ab-lead">Cuando un problema legal aparece, lo último que necesitás es sentirte solo o confundido. Te escuchamos, te explicamos cada paso en palabras simples y trabajamos para lograr el mejor resultado posible para tu caso.</p>' +
      '<div class="demo-btn-row" style="justify-content:flex-start"><a class="ab-btn" href="#abogado-contacto">Agendar consulta gratuita →</a><a class="ab-btn ab-outline" href="#abogado-areas">Ver áreas de práctica</a></div>' +
      '<div class="ab-stats"><div><b>+15</b><small>años de experiencia</small></div><div><b>+500</b><small>casos resueltos</small></div><div><b>24 hs</b><small>tiempo de respuesta</small></div></div></div>' +
      '<div><img src="assets/abogado-hero.webp" alt="Abogado en su estudio jurídico" class="ab-hero-img" style="border:8px solid #f2e7c9">' +
      '<div style="display:flex;gap:12px;background:#fff;color:#071323;padding:14px;margin-top:-20px;margin-left:16px;max-width:360px;box-shadow:0 12px 30px rgba(0,0,0,.3);position:relative"><b style="font-size:22px;color:#8a6a18">✦</b><div><b>Atención humana, primero</b><p style="font-size:12px;color:#475569">Tu caso importa. Y tu tranquilidad también.</p></div></div></div></div></section>' +

      '<section class="ab-section ab-cream"><div style="text-align:center;max-width:640px;margin:auto"><div class="ab-gold-rule" style="margin:auto"></div><div class="ab-eyebrow">Qué ofrecemos</div>' +
      '<h2>QUÉ OFRECEMOS</h2><p class="ab-lead" style="margin-left:auto;margin-right:auto">Acompañamiento claro y cercano para resolver lo importante, sin vueltas ni letra chica.</p></div>' +
      '<div class="ab-grid" style="grid-template-columns:1fr 1.05fr 1fr;margin-top:32px;align-items:center">' +
      '<div style="display:grid;gap:16px">' +
      cardAbogado("♥", "Divorcio", "Acompañamiento respetuoso y ordenado para cerrar una etapa y empezar otra con tranquilidad.", ["Divorcios y acuerdos", "Cuota alimentaria", "Cuidado personal y visitas"]) +
      cardAbogado("🚗", "Accidentes", "Que un accidente no se convierta en otro problema: gestionamos tu reclamo de principio a fin.", ["Accidentes de tránsito", "Reclamos ante ART", "Indemnizaciones"]) + "</div>" +
      '<figure style="display:grid;place-items:center;margin:0"><img src="assets/abogado-justicia.webp" alt="Estatua dorada de la Justicia" class="ab-justice"></figure>' +
      '<div style="display:grid;gap:16px">' +
      cardAbogado("▤", "Reclamos de Dinero", "Cuando te deben dinero o un acuerdo no se cumple, trabajamos para que recuperes lo que te corresponde.", ["Daños y perjuicios", "Contratos y reclamos", "Mediaciones y acuerdos"]) +
      cardAbogado("▣", "Tierras y Propiedades", "Ordenamos lo importante para tu familia y tu patrimonio, sin vueltas ni letra chica.", ["Sucesiones", "Testamentos", "Contratos y locaciones"]) + "</div></div></section>" +

      '<section id="abogado-areas" class="ab-section"><div class="ab-gold-rule"></div><div class="ab-eyebrow">Áreas de práctica</div>' +
      '<h2>Un equipo para cada momento importante</h2><p class="ab-lead">Sea cual sea tu situación, hay un camino legal. Estas son las áreas en las que te podemos acompañar.</p>' +
      '<div class="ab-grid cols-3">' + AB_AREAS.map((a) => cardAbogado("⚖", a[0], a[1], a[2])).join("") + "</div></section>" +

      '<section id="abogado-por-que" class="ab-section ab-navy"><div class="ab-hero-grid">' +
      '<div><div class="ab-gold-rule"></div><div class="ab-eyebrow">¿Por qué elegirnos?</div><h2>La tranquilidad de estar bien representado</h2>' +
      '<p class="ab-lead">Sabemos que buscar un abogado puede dar nervios. Por eso trabajamos con una regla simple: que siempre sepas dónde estás parado, qué viene después y cuánto cuesta.</p>' +
      '<div style="border:1px solid rgba(255,255,255,.15);background:rgba(255,255,255,.05);padding:20px;margin-top:32px"><strong>Promesa del estudio:</strong> ninguna pregunta es tonta y ninguna decisión se toma sin vos.</div></div>' +
      '<div class="ab-grid cols-2" style="margin-top:0">' + AB_BENEFICIOS.map((b, i) =>
        '<article class="card navy-card"><span style="color:#e4c87a;font-size:12px">0' + (i + 1) + "</span><h3>" + b[0] + "</h3><p>" + b[1] + "</p></article>"
      ).join("") + "</div></div></section>" +

      '<section id="abogado-como" class="ab-section"><div style="text-align:center;max-width:640px;margin:auto"><div class="ab-gold-rule" style="margin:auto"></div><div class="ab-eyebrow">Cómo trabajamos</div><h2>Tres pasos, sin vueltas</h2></div>' +
      '<div class="ab-grid cols-3">' + AB_PASOS.map((p) =>
        '<article class="card" style="position:relative;padding-top:36px"><span style="position:absolute;top:-16px;left:24px;background:#c39a3b;color:#071323;padding:4px 12px;font-weight:800">' + p[0] + "</span><h3>" + p[1] + "</h3><p>" + p[2] + "</p></article>"
      ).join("") + "</div></section>" +

      '<section class="ab-section" style="background:rgba(242,231,201,.6)"><div style="display:flex;flex-wrap:wrap;gap:16px;align-items:end;justify-content:space-between">' +
      '<div><div class="ab-gold-rule"></div><div class="ab-eyebrow">Testimonios</div><h2>Lo que dicen nuestros clientes</h2></div><p style="max-width:320px;color:#617083">Historias reales de personas que llegaron con dudas y se fueron con una solución.</p></div>' +
      '<div class="ab-grid cols-3">' + AB_TESTIMONIOS.map((t) =>
        '<figure class="card"><div style="color:#c39a3b">★★★★★</div><blockquote style="margin:16px 0;flex:1">“' + t[2] + '”</blockquote><figcaption style="border-top:1px solid #d9d7cd;padding-top:16px"><b>' + t[0] + '</b><small style="display:block;color:#9a7a23;font-size:12px;font-weight:800;letter-spacing:.08em">' + t[1] + "</small></figcaption></figure>"
      ).join("") + "</div></section>" +

      '<section id="abogado-preguntas" class="ab-section"><div class="ab-hero-grid">' +
      '<div><div class="ab-gold-rule"></div><div class="ab-eyebrow">Preguntas frecuentes</div><h2>Dudas comunes, respuestas claras</h2><p class="ab-lead">Si tu pregunta no está acá, escribinos. Te respondemos en menos de 24 horas hábiles.</p>' +
      '<a href="#abogado-contacto" style="font-weight:800;text-decoration:underline;text-underline-offset:6px">Hacer una consulta →</a></div><div>' +
      AB_FAQS.map((f, i) => '<div class="ab-faq-item"><button type="button" class="ab-faq-q" data-faq="' + i + '" aria-expanded="' + (i === 0) + '"><span>' + esc(f[0]) + '</span><span aria-hidden="true">⌄</span></button>' +
        '<p class="ab-faq-a"' + (i === 0 ? "" : " hidden") + ' id="ab-faq-a-' + i + '">' + esc(f[1]) + "</p></div>").join("") +
      "</div></div></section>" +

      '<section id="abogado-contacto" class="ab-section ab-navy"><div class="ab-hero-grid"><div><div class="ab-gold-rule"></div><div class="ab-eyebrow">Consulta gratuita</div>' +
      '<h2>Contanos tu caso.<br>Te respondemos en 24 hs.</h2><p class="ab-lead">Completá el formulario y contanos qué está pasando. Sin compromiso, sin letra chica y con la confidencialidad que tu caso merece.</p>' +
      '<div style="display:grid;gap:16px;margin-top:32px"><div style="display:flex;align-items:center;gap:12px"><svg class="icon" aria-hidden="true"><use href="#icon-whatsapp"></use></svg><div><b>Teléfono / WhatsApp</b><p style="color:#cbd5e1">+54 11 4567-8900</p></div></div>' +
      "<div><b>Correo</b><p style=\"color:#cbd5e1\">consultas@estudiojuridico.com.ar</p></div><div><b>Estudio</b><p style=\"color:#cbd5e1\">Av. Corrientes 1234, 5° piso · Buenos Aires</p></div>" +
      "<div><b>Horario de atención</b><p style=\"color:#cbd5e1\">Lunes a viernes, de 9 a 18 hs · Consultas online en todo el país</p></div></div>" +
      '<p style="border-left:2px solid #c39a3b;background:rgba(255,255,255,.05);padding:16px;margin-top:32px;font-size:14px">Toda la información que compartas es confidencial. La primera consulta es sin cargo y sin obligación de contratar.</p></div>' +
      '<form id="abForm" class="ab-form" aria-label="Formulario de consulta gratuita"><h3>Quiero mi consulta gratuita</h3><p style="color:#617083;font-size:13px">Completá tus datos y te contactamos.</p>' +
      '<label>Nombre completo<input id="ab-nombre" required placeholder="Ej.: María Fernández"></label>' +
      '<label>Teléfono / WhatsApp<input id="ab-telefono" type="tel" required placeholder="Ej.: 11 1234-5678"></label>' +
      '<label>Tipo de caso<select id="ab-tipo"><option>Derecho Civil</option><option>Derecho Laboral</option><option>Derecho de Familia</option><option>Derecho Penal</option><option>Accidentes y ART</option><option>Sucesiones y Contratos</option><option>Otro / No estoy seguro</option></select></label>' +
      '<label>Contanos brevemente qué pasó<textarea id="ab-mensaje" rows="5" required placeholder="Contanos lo más importante de tu caso…"></textarea></label>' +
      '<button class="ab-btn" type="submit" id="abSubmit">Quiero mi consulta gratuita →</button>' +
      '<p id="abResultado" role="status" hidden></p>' +
      '<p style="text-align:center;font-size:12px;color:#64748b">Demo interactiva: el formulario no envía consultas reales.</p></form></div></section>' +
      '<footer style="background:#040c18;color:#cbd5e1;padding:32px 28px;text-align:center"><b style="color:#fff;font-family:Playfair Display,serif">ESTUDIO JURÍDICO</b><p style="font-size:13px;margin-top:8px">Atención presencial y online en todo el país. Primera consulta sin cargo.</p></footer>' +
      '<a href="https://wa.me/5491145678900?text=Hola%2C%20quiero%20mi%20consulta%20gratuita" target="_blank" rel="noopener" class="ab-wa" aria-label="Abrir WhatsApp para una consulta gratuita"><svg class="icon" aria-hidden="true"><use href="#icon-whatsapp"></use></svg></a></div>';
  }

  function cardAbogado(icon, title, desc, items) {
    return '<article class="card"><span class="icon-tile" aria-hidden="true" style="background:#0a1c33;color:#e4c87a">' + icon + "</span>" +
      "<h3>" + esc(title) + "</h3><p>" + esc(desc) + "</p>" +
      (items ? "<ul>" + items.map((i) => "<li><span>✓</span><span>" + esc(i) + "</span></li>").join("") + "</ul>" : "") + "</article>";
  }

  /* ---------- Conexión de las demos ---------- */
  function wireDemo(which, root) {
    $$("[data-scroll]", root).forEach((btn) => btn.addEventListener("click", () => {
      const target = document.getElementById(btn.dataset.scroll);
      if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
    }));

    if (which === "elcorte") {
      $$("[data-reservar]", root).forEach((btn) => btn.addEventListener("click", () => {
        $("#ecServicio", root).value = btn.dataset.reservar;
        $("#elcorte-turno", root).scrollIntoView({ behavior: "smooth" });
      }));
      $("#elcorteForm", root).addEventListener("submit", (e) => {
        e.preventDefault();
        if ($("#ecNombre", root).value.trim() && $("#ecDia", root).value) {
          $("#elcorteFormWrap", root).innerHTML = '<p role="status" style="margin-top:20px;background:#000;color:#d4af37;padding:14px 18px;border-radius:12px;font-weight:800">¡Pedido recibido! Te confirmamos tu turno por WhatsApp a la brevedad.</p>';
        }
      });
    }

    if (which === "ecolimpio") {
      const items = [];
      const list = $("#ecoPedidoList", root);
      $$("[data-add-eco]", root).forEach((btn) => btn.addEventListener("click", () => {
        if (!items.includes(btn.dataset.addEco)) items.push(btn.dataset.addEco);
        list.textContent = "Tu pedido incluye: " + items.join(" · ");
        list.hidden = items.length === 0;
        $("#ecolimpio-pedido", root).scrollIntoView({ behavior: "smooth" });
      }));
      $("#ecoForm", root).addEventListener("submit", (e) => {
        e.preventDefault();
        if ($("#ecoNombre", root).value.trim()) {
          $("#ecoFormWrap", root).innerHTML = '<p role="status" style="margin-top:20px;background:rgba(52,211,153,.15);border:1px solid rgba(52,211,153,.3);color:#6ee7b7;padding:14px 18px;border-radius:12px;font-weight:800">¡Pedido recibido! Te escribimos por WhatsApp con precios y entrega.</p>';
        }
      });
    }

    if (which === "abogado") {
      const menuBtn = $("#abMenuBtn", root);
      const menu = $("#abMenu", root);
      const setMenu = (open) => {
        menu.hidden = !open;
        menuBtn.textContent = open ? "✕" : "☰";
        menuBtn.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
      };
      menuBtn.addEventListener("click", () => setMenu(menu.hidden));
      $$("#abMenu a", root).forEach((a) => a.addEventListener("click", () => setMenu(false)));

      $$("[data-faq]", root).forEach((btn) => btn.addEventListener("click", () => {
        const open = btn.getAttribute("aria-expanded") === "true";
        $$("[data-faq]", root).forEach((b) => {
          b.setAttribute("aria-expanded", "false");
          $("#ab-faq-a-" + b.dataset.faq, root).hidden = true;
        });
        if (!open) {
          btn.setAttribute("aria-expanded", "true");
          $("#ab-faq-a-" + btn.dataset.faq, root).hidden = false;
        }
      }));

      $("#abForm", root).addEventListener("submit", (e) => {
        e.preventDefault();
        const nombre = $("#ab-nombre", root).value.trim();
        const telefono = $("#ab-telefono", root).value.trim();
        const mensaje = $("#ab-mensaje", root).value.trim();
        const result = $("#abResultado", root);
        if (!nombre || !telefono || !mensaje) {
          result.hidden = false;
          result.setAttribute("role", "alert");
          result.textContent = "Completá nombre, teléfono y un breve mensaje para que podamos ayudarte.";
          return;
        }
        const submit = $("#abSubmit", root);
        submit.disabled = true;
        submit.textContent = "Enviando tu consulta…";
        setTimeout(() => {
          result.hidden = false;
          result.setAttribute("role", "status");
          result.textContent = "¡Listo, " + nombre + "! Esta es una demo: la consulta se validó pero no se envió a ningún servicio real.";
          $("#abForm", root).reset();
          submit.disabled = false;
          submit.textContent = "Quiero mi consulta gratuita →";
        }, 600);
      });
    }
  }

  function openDemo(key) {
    if (!DEMO_URLS[key]) return;
    let html = "";
    let wire = null;
    if (key === "elcorte") { html = demoElCorte(); wire = (root) => wireDemo("elcorte", root); }
    else if (key === "ecolimpio") { html = demoEco(); wire = (root) => wireDemo("ecolimpio", root); }
    else if (key === "abogado") { html = demoAbogado(); wire = (root) => wireDemo("abogado", root); }
    else if (key === "kchick") {
      html = '<iframe src="' + CONFIG.kchick + '" class="demo-frame" title="Vista previa interactiva de K-CHICK"></iframe>';
    }
    openModal(DEMO_URLS[key], html, wire);
  }

  /* ---------- Formulario principal ---------- */
  let solicitudes = 0;
  let enviando = false;

  function buildBody(form, plan) {
    return [
      "Nombre: " + form.nombre,
      "Email: " + form.email,
      "Tipo de negocio: " + form.tipo,
      "Necesidad: " + (plan || form.necesidad),
      "",
      "Mensaje:",
      form.mensaje,
    ].join("\n");
  }

  async function sendLead(form, plan) {
    const asunto = "Solicitud de presupuesto — " + form.tipo;
    const cuerpo = buildBody(form, plan);

    if (CONFIG.whatsapp) {
      const texto = "Hola NEXUS, quiero pedir un presupuesto.\n\n" + cuerpo;
      window.open("https://wa.me/" + CONFIG.whatsapp + "?text=" + encodeURIComponent(texto), "_blank", "noopener,noreferrer");
    }

    if (CONFIG.formEndpoint) {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 6000);
      try {
        const res = await fetch(CONFIG.formEndpoint, {
          method: "POST",
          headers: { Accept: "application/json", "Content-Type": "application/json" },
          body: JSON.stringify({
            nombre: form.nombre,
            email: form.email,
            tipo: form.tipo,
            necesidad: plan || form.necesidad,
            mensaje: form.mensaje,
            _subject: asunto,
          }),
          signal: controller.signal,
        });
        if (!res.ok) throw new Error("Error " + res.status);
        return "email";
      } catch (err) {
        if (!CONFIG.email) throw new Error("No pudimos enviar el email y no hay un correo de respaldo configurado.");
      } finally {
        clearTimeout(timeout);
      }
    }

    if (CONFIG.email) {
      window.location.href = "mailto:" + CONFIG.email + "?subject=" + encodeURIComponent(asunto) + "&body=" + encodeURIComponent(cuerpo);
      return "draft";
    }

    throw new Error("Configurá el endpoint o el email para recibir las solicitudes.");
  }

  function updateCounter() {
    const el = $("#contador");
    el.textContent = "✓ " + solicitudes + (solicitudes === 1 ? " solicitud iniciada" : " solicitudes iniciadas") + " desde este dispositivo";
    el.hidden = solicitudes === 0;
  }

  function abrirFormulario() {
    $("#formWrap").hidden = false;
    $("#formSuccess").hidden = true;
    $("#formError").hidden = true;
    $("#formError").textContent = "";
  }

  function resetForm() {
    $("#leadForm").reset();
    $("#fNecesidad").value = "Landing Page que vende";
    $("#planElegido").hidden = true;
    $("#planElegido").textContent = "";
    abrirFormulario();
  }

  function setNecesidad(texto) {
    const select = $("#fNecesidad");
    if (!$$("option", select).some((o) => o.value === texto)) {
      const option = document.createElement("option");
      option.value = texto;
      option.textContent = texto;
      select.appendChild(option);
    }
    select.value = texto;
  }

  function irContacto(texto) {
    abrirFormulario();
    if (texto) {
      $("#planElegido").textContent = "Te interesa: " + texto;
      $("#planElegido").hidden = false;
    }
    $("#contacto").scrollIntoView({ behavior: "smooth" });
  }

  function elegirPlan(plan) {
    setNecesidad(plan);
    irContacto(plan);
  }

  function pedirComoEjemplo(ejemplo) {
    abrirFormulario();
    $("#fMensaje").value = "Quiero una página como la de " + ejemplo;
    setNecesidad("Página como la de " + ejemplo);
    $("#planElegido").textContent = "Te interesa: Página como la de " + ejemplo;
    $("#planElegido").hidden = false;
    $("#contacto").scrollIntoView({ behavior: "smooth" });
  }

  function showError(texto) {
    $("#formError").textContent = texto;
    $("#formError").hidden = false;
  }

  let toastTimer = null;

  function mostrarToast(texto) {
    const toast = $("#toast");
    toast.textContent = texto;
    toast.hidden = false;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => { toast.hidden = true; }, 3500);
  }

  function copiarEmail(link, e) {
    e.preventDefault();
    const email = CONFIG.email;
    const label = $(".email-label", link);
    const original = label ? label.textContent : "";
    const gmail = "https://mail.google.com/mail/?view=cm&fs=1&to=" + encodeURIComponent(email);
    let resuelto = false;

    mostrarToast("Email: " + email + " — abriendo Gmail…");
    if (label) label.textContent = "Abriendo…";
    window.open(gmail, "_blank", "noopener,noreferrer");

    const finish = (copiado) => {
      if (resuelto) return;
      resuelto = true;
      mostrarToast(copiado ? "Email copiado: " + email + " · Gmail abierto en otra pestaña" : "Email: " + email + " · pegalo en tu correo");
      if (label) {
        label.textContent = copiado ? "¡Copiado!" : original;
        setTimeout(() => { label.textContent = original; }, 2200);
      }
    };

    setTimeout(() => finish(false), 700);

    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(email).then(() => finish(true)).catch(() => finish(false));
      return;
    }

    try {
      const ta = document.createElement("textarea");
      ta.value = email;
      ta.setAttribute("readonly", "");
      ta.style.cssText = "position:fixed;top:0;left:0;opacity:0";
      document.body.appendChild(ta);
      ta.select();
      const copiado = document.execCommand("copy");
      document.body.removeChild(ta);
      finish(copiado);
    } catch (err) {
      finish(false);
    }
  }

  async function onSubmit(e) {
    e.preventDefault();
    if (enviando) return;
    const form = {
      nombre: $("#fNombre").value.trim(),
      email: $("#fEmail").value.trim(),
      tipo: $("#fTipo").value.trim(),
      necesidad: $("#fNecesidad").value,
      mensaje: $("#fMensaje").value.trim(),
    };
    if (!form.nombre || !form.email || !form.tipo || !form.mensaje) {
      showError("Completá nombre, email, tipo de negocio y mensaje para enviar tu solicitud.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      showError("Ingresá un email válido para que podamos responderte.");
      return;
    }
    enviando = true;
    $("#submitBtn").disabled = true;
    $("#submitBtn").textContent = "Enviando…";
    $("#formError").hidden = true;
    try {
      const plan = $("#planElegido").hidden ? "" : $("#planElegido").textContent.replace("Te interesa: ", "");
      const result = await sendLead(form, plan);
      const first = form.nombre.split(/\s+/)[0];
      $("#successTitle").textContent = "¡Listo, " + first + "!";
      $("#successText").textContent =
        (result === "email"
          ? "Tu solicitud fue enviada por email. También abrimos WhatsApp con el mensaje listo."
          : "Abrimos WhatsApp y el borrador de tu correo. Confirmá el envío en tu app de mail.") +
        " Te voy a contactar para charlar sobre tu proyecto " + form.tipo + " y tu idea de " + form.necesidad + ".";
      solicitudes++;
      try { localStorage.setItem("nexus_solicitudes_count", String(solicitudes)); } catch (err) { /* storage no disponible */ }
      updateCounter();
      $("#formWrap").hidden = true;
      $("#formSuccess").hidden = false;
    } catch (err) {
      showError(err && err.message ? err.message : "No pudimos enviar tu solicitud. Intentá de nuevo en unos minutos.");
    } finally {
      enviando = false;
      $("#submitBtn").disabled = false;
      $("#submitBtn").textContent = "Quiero mi página ↗";
    }
  }

  /* ---------- Eventos generales ---------- */
  function toggleMenu() {
    const btn = $("#menuBtn");
    const menu = $("#menuMovil");
    const open = menu.hidden;
    menu.hidden = !open;
    btn.textContent = open ? "✕" : "☰";
    btn.setAttribute("aria-expanded", String(open));
    btn.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
  }

  function closeMenu() {
    $("#menuMovil").hidden = true;
    $("#menuBtn").textContent = "☰";
    $("#menuBtn").setAttribute("aria-expanded", "false");
    $("#menuBtn").setAttribute("aria-label", "Abrir menú");
  }

  function initEvents() {
    document.addEventListener("click", (e) => {
      const el = e.target.closest("[data-contacto],[data-plan],[data-ejemplo],[data-demo],[data-nav],#menuBtn,#otraSolicitud,#contactoEmail,#footerEmail");
      if (!el) return;
      if (el.id === "menuBtn") { toggleMenu(); return; }
      if (el.id === "otraSolicitud") { resetForm(); return; }
      if (el.id === "contactoEmail" || el.id === "footerEmail") { copiarEmail(el, e); return; }
      if (el.dataset.demo) { openDemo(el.dataset.demo); return; }
      if (el.dataset.plan) { elegirPlan(el.dataset.plan); return; }
      if (el.dataset.ejemplo) { pedirComoEjemplo(el.dataset.ejemplo); return; }
      if (el.hasAttribute("data-contacto")) { closeMenu(); irContacto(); return; }
      if (el.hasAttribute("data-nav")) {
        closeMenu();
        if (el.getAttribute("href") === "#contacto") abrirFormulario();
      }
    });

    $("#leadForm").addEventListener("submit", onSubmit);
    $("#demoModal").addEventListener("click", (e) => { if (e.target.id === "demoModal") closeModal(); });
    $("#modalClose").addEventListener("click", closeModal);
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeModal(); });
  }

  function setLinks() {
    $$("#headerInstagram,#menuInstagram,#contactoInstagram,#footerInstagram").forEach((a) => { a.href = CONFIG.instagram; });
    $$("#contactoWhatsapp,#footerWhatsapp").forEach((a) => { a.href = "https://wa.me/" + CONFIG.whatsapp; });
    $$("#contactoEmail,#footerEmail").forEach((a) => { a.href = "mailto:" + CONFIG.email; });
    const emailDisplay = $("#emailDisplay");
    if (emailDisplay) emailDisplay.textContent = CONFIG.email;
  }

  /* ---------- Arranque ---------- */
  function init() {
    renderSections();
    setLinks();
    observeReveals(document);
    initEditor();
    initEvents();
    $("#anio").textContent = String(new Date().getFullYear());
    try { solicitudes = Number(localStorage.getItem("nexus_solicitudes_count") || 0) || 0; } catch (err) { solicitudes = 0; }
    updateCounter();
  }

  init();
})();

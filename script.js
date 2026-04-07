/**
 * script.js — SPA Navigation · CV Héctor Gael Morales Moreno
 * Maneja la navegación entre secciones sin recargar la página.
 */

(function () {
  'use strict';

  /* ── Secciones válidas ── */
  const SECTIONS = ['header', 'experiencia', 'educacion', 'skills', 'certificaciones', 'intereses', 'lenguajes'];
  const DEFAULT_SECTION = 'header';

  /* ── Referencias al DOM ── */
  const navLinks  = document.querySelectorAll('.nav-link');
  const sections  = document.querySelectorAll('.section');
  const navToggle = document.getElementById('navToggle');
  const navLinksEl = document.getElementById('navLinks');

  /* ======================================================
     showSection(id)
     Muestra la sección indicada y oculta el resto.
     También actualiza el enlace activo de la nav.
     ====================================================== */
  function showSection(id) {
    /* Normalizar el id eliminando el '#' si viene de un hash */
    const sectionId = (id || DEFAULT_SECTION).replace(/^#/, '');

    /* Validar que sea una sección conocida */
    const target = SECTIONS.includes(sectionId) ? sectionId : DEFAULT_SECTION;

    /* Actualizar secciones */
    sections.forEach(function (sec) {
      sec.classList.remove('active');
    });

    const activeSection = document.getElementById(target);
    if (activeSection) {
      /* Re-lanzar la animación quitando y volviendo a añadir la clase */
      activeSection.style.animation = 'none';
      activeSection.offsetHeight;           /* reflow para reiniciar animación */
      activeSection.style.animation = '';
      activeSection.classList.add('active');
    }

    /* Actualizar enlace activo */
    navLinks.forEach(function (link) {
      link.classList.remove('active');
      if (link.dataset.section === target) {
        link.classList.add('active');
      }
    });

    /* Actualizar hash de la URL sin recargar */
    if (history.replaceState) {
      history.replaceState(null, '', '#' + target);
    }

    /* Cerrar el menú móvil si está abierto */
    if (navLinksEl) {
      navLinksEl.classList.remove('open');
    }

    /* Scroll al tope del contenido */
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  /* ======================================================
     Menú hamburguesa (móvil)
     ====================================================== */
  if (navToggle && navLinksEl) {
    navToggle.addEventListener('click', function () {
      navLinksEl.classList.toggle('open');
    });

    /* Cerrar el menú si se hace clic fuera de él */
    document.addEventListener('click', function (e) {
      if (!navLinksEl.contains(e.target) && !navToggle.contains(e.target)) {
        navLinksEl.classList.remove('open');
      }
    });
  }

  /* ======================================================
     Navegación por los enlaces del menú
     ====================================================== */
  navLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const sectionId = this.dataset.section;
      if (sectionId) {
        showSection(sectionId);
      }
    });
  });

  /* ======================================================
     Soporte para el botón "atrás / adelante" del navegador
     ====================================================== */
  window.addEventListener('popstate', function () {
    const hash = window.location.hash.replace('#', '') || DEFAULT_SECTION;
    showSection(hash);
  });

  /* ======================================================
     Inicialización
     Carga la sección indicada en el hash de la URL
     o muestra la sección por defecto.
     ====================================================== */
  function init() {
    const hash = window.location.hash.replace('#', '');
    showSection(hash || DEFAULT_SECTION);
  }

  /* Exponer showSection globalmente para los botones inline del HTML */
  window.showSection = showSection;

  /* Iniciar cuando el DOM esté listo */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

}());

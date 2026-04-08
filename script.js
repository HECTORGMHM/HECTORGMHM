/**
 * Hash-based SPA navigation.
 * Highlights the nav link that matches the current URL hash or
 * the section closest to the top of the viewport while scrolling.
 */

const sections = Array.from(document.querySelectorAll('main section[id]'));
const navLinks = Array.from(document.querySelectorAll('nav a[href^="#"]'));

/**
 * Remove the "active" class from all nav links, then add it to the
 * link whose href matches the given section id.
 * @param {string} id - Section id to mark as active.
 */
function setActiveLink(id) {
  navLinks.forEach((link) => {
    link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
  });
}

/**
 * Determine which section is currently in view and update the
 * active nav link accordingly.
 */
function onScroll() {
  const scrollY = window.scrollY;

  // Find the last section whose top is at or above the current scroll position
  let current = sections[0];
  sections.forEach((section) => {
    if (section.offsetTop - 80 <= scrollY) {
      current = section;
    }
  });

  if (current) {
    setActiveLink(current.id);
  }
}

// Highlight on hash change (e.g. clicking a nav link)
window.addEventListener('hashchange', () => {
  const id = window.location.hash.slice(1);
  if (id) setActiveLink(id);
});

// Highlight on scroll
window.addEventListener('scroll', onScroll, { passive: true });

// Set initial active link on page load
(function init() {
  const hash = window.location.hash.slice(1);
  if (hash) {
    setActiveLink(hash);
  } else {
    onScroll();
  }
})();

/**
 * Animates skill bar fills when they scroll into view.
 * Each .skill-bar__fill element reads its target width from data-width (0–100).
 */

function animateSkillBars(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const fill = entry.target;
      const targetWidth = fill.getAttribute('data-width') || 0;
      fill.style.width = targetWidth + '%';
      observer.unobserve(fill);
    }
  });
}

const skillFills = Array.from(document.querySelectorAll('.skill-bar__fill'));

if (skillFills.length > 0) {
  const observer = new IntersectionObserver(animateSkillBars, {
    threshold: 0.2,
  });
  skillFills.forEach((fill) => observer.observe(fill));
}

/* ── BIDIRECTIONAL SCROLL ANIMATION ── */
(function(){
  const els = document.querySelectorAll('.anim');
  // track which elements are "above" viewport (already scrolled past)
  function update(){
    const vh = window.innerHeight;
    els.forEach(el => {
      const r = el.getBoundingClientRect();
      if (r.top < vh * 0.88 && r.bottom > 0) {
        // in viewport — show
        el.classList.add('in');
        el.classList.remove('out');
      } else if (r.bottom <= 0) {
        // scrolled above — fade out upward
        el.classList.remove('in');
        el.classList.add('out');
      } else {
        // below viewport — reset to initial state (slide up on next entry)
        el.classList.remove('in', 'out');
      }
    });
  }
  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update, { passive: true });
  update();
})();

/* ── NAV SCROLL ── */
const nav = document.getElementById('nav');

function updateNavState(){
  nav.style.background = window.scrollY > 40 ? 'rgba(11,10,9,0.98)' : 'rgba(11,10,9,0.9)';
}
window.addEventListener('scroll', updateNavState, { passive: true });
window.addEventListener('resize', updateNavState, { passive: true });
window.addEventListener('load', updateNavState);
updateNavState();

/* ── ANCHOR LINKS: JS-based smooth scroll (replaces CSS scroll-behavior:smooth,
   which was removed because it conflicts with GSAP ScrollTrigger's pinning in
   the Pillars/Team section) ── */
(function(){
  document.addEventListener('click', (e) => {
    const a = e.target.closest('a[href^="#"]');
    if (!a) return;
    const id = a.getAttribute('href');
    if (!id || id === '#') return;
    const target = document.querySelector(id);
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
})();

/* ── NAV: MOBILE MENU TOGGLE ── */
(function(){
  const toggle   = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  const scrim    = document.getElementById('navScrim');

  function openMenu(){
    toggle.classList.add('open');
    navLinks.classList.add('open');
    scrim.classList.add('open');
    document.body.classList.add('nav-open');
    toggle.setAttribute('aria-expanded', 'true');
  }
  function closeMenu(){
    toggle.classList.remove('open');
    navLinks.classList.remove('open');
    scrim.classList.remove('open');
    document.body.classList.remove('nav-open');
    toggle.setAttribute('aria-expanded', 'false');
  }
  toggle.addEventListener('click', () => {
    navLinks.classList.contains('open') ? closeMenu() : openMenu();
  });
  scrim.addEventListener('click', closeMenu);
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
  window.addEventListener('resize', () => {
    if (window.innerWidth > 860) closeMenu();
  });
})();

/* ── NAV: ACTIVE LINK HIGHLIGHT WHILE SCROLLING (single continuous page) ── */
(function(){
  const navLinkEls = [...document.querySelectorAll('#navLinks a[href^="#"]')];
  const sections = navLinkEls
    .map(a => document.querySelector(a.getAttribute('href')))
    .filter(Boolean);

  function updateActiveLink(){
    const y = window.scrollY + window.innerHeight * 0.3;
    let current = sections[0];
    sections.forEach(sec => { if (sec.offsetTop <= y) current = sec; });
    navLinkEls.forEach(a => a.classList.remove('active'));
    const idx = sections.indexOf(current);
    if (idx > -1) navLinkEls[idx].classList.add('active');
  }
  window.addEventListener('scroll', updateActiveLink, { passive: true });
  window.addEventListener('load', updateActiveLink);
  updateActiveLink();

  // Recalculate scroll-triggered reveals once everything is laid out on one page
  if (window.ScrollTrigger) requestAnimationFrame(() => window.ScrollTrigger.refresh());

  // Kept for the splash landing page's "Work With Us" button
  window.zyphoraShowContact = function(){
    const contact = document.getElementById('contact');
    if (contact) contact.scrollIntoView({ behavior: 'smooth' });
  };
})();


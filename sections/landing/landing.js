/* ── SPLASH LANDING HERO — photo carousel + scroll-down buttons ── */
(function(){
  const landing = document.getElementById('landingPage');
  if (!landing) return;

  /* Carousel: advances to the next photo every 3 seconds */
  const stack = landing.querySelector('#lpHeroMedia');
  const dotsWrap = landing.querySelector('#lpHeroMediaDots');
  if (stack && dotsWrap) {
    const slides = [...stack.querySelectorAll('img')];
    if (slides.length > 1) {
      slides.forEach((_, i) => {
        const d = document.createElement('span');
        if (i === 0) d.classList.add('is-active');
        dotsWrap.appendChild(d);
      });
      const dots = [...dotsWrap.children];
      let current = 0;
      function goTo(next){
        slides[current].classList.remove('is-active');
        dots[current].classList.remove('is-active');
        current = next;
        slides[current].classList.add('is-active');
        dots[current].classList.add('is-active');
      }
      let timer = setInterval(() => goTo((current + 1) % slides.length), 3000);
      stack.addEventListener('mouseenter', () => clearInterval(timer));
      stack.addEventListener('mouseleave', () => {
        timer = setInterval(() => goTo((current + 1) % slides.length), 3000);
      });
    }
  }

  /* Explore / Work With Us: smooth-scroll further down the single page */
  const lpExplore = document.getElementById('lpExplore');
  const lpWork = document.getElementById('lpWork');
  const aboutSection = document.getElementById('aboutPage');
  const contactSection = document.getElementById('contact');

  if (lpExplore && aboutSection) {
    lpExplore.addEventListener('click', () => {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    });
  }
  if (lpWork && contactSection) {
    lpWork.addEventListener('click', () => {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    });
  }
})();


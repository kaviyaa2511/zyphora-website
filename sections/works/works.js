/* ── WORKS: FILTER TABS + STAGGERED REVEAL ── */
(function(){
  const cards      = document.querySelectorAll('#worksPage .work-card');
  const filterBtns = document.querySelectorAll('#worksPage .w-filter-btn');
  const noResults  = document.getElementById('worksNoResults');

  function applyStagger(){
    let visibleIndex = 0;
    cards.forEach(card => {
      if (!card.classList.contains('is-hidden')) {
        card.style.animation = 'none';
        void card.offsetWidth; // force reflow so the animation can restart
        card.style.animation = '';
        card.style.animationDelay = `${Math.min(visibleIndex * 60, 480)}ms`;
        visibleIndex++;
      }
    });
  }

  function filterWorks(category){
    let visibleCount = 0;
    cards.forEach(card => {
      const match = category === 'all' || card.dataset.category === category;
      card.classList.toggle('is-hidden', !match);
      if (match) visibleCount++;
    });
    if (noResults) noResults.hidden = visibleCount > 0;
    applyStagger();
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      filterWorks(btn.dataset.filter);
    });
  });

  // All videos autoplay muted/looped and always keep playing —
  // nudge playback in case a browser paused it (e.g. tab was backgrounded).
  document.querySelectorAll('#worksPage .w-media video').forEach(video => {
    video.play().catch(() => {});
    video.addEventListener('pause', () => video.play().catch(() => {}));
  });

  // Re-trigger the entrance animation whenever the Works page is opened via nav
  window.zyphoraReplayWorksCards = applyStagger;

  applyStagger();
})();


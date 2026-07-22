/* ── PILLARS SECTION — infinite marquee of flip-to-reveal team cards ── */
(function(){

  /* Placeholder shown until a real photo URL is added to a team member below */
  const PLACEHOLDER_SVG = `
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round">
  <rect x="3" y="5" width="18" height="14" rx="2"/>
  <circle cx="9" cy="10" r="2"/>
  <path d="M21 15l-4.5-4.5a2 2 0 0 0-2.8 0L5 19"/>
</svg>`;

  /* Each person now takes TWO separate images:
       - photoFront: shown on the card's cover (before hover/flip)
       - photoBack : shown on the reverse side (after hover/flip reveals the bio)
     Just set both to a path or URL, e.g.
       photoFront: "sections/pillars/images/harshini-cover.jpg",
       photoBack: "sections/pillars/images/harshini-detail.jpg"
     (paths are relative to the site root, since this loads inside /index.html).
     Leave either blank to fall back to the placeholder icon for that side. */
  const TEAM = [
    { name: "Harshini", role: "Founder &bull; CEO &bull; Creative &amp; Growth Director",
      photoFront: "sections/pillars/images/Clienttalk-sample.png",
      photoBack: "sections/pillars/images/Editing-sample.png",
      about: "Leads Zyphora's vision, business growth, and creative direction, working closely with clients to develop impactful strategies.",
      duties: ["Business Development","Brand Strategy","Team Leadership","Quality Assurance"] },
    { name: "Jaswanth", role: "Co-Founder &bull; Finance &amp; Operations Head",
      photoFront: "sections/pillars/images/Editing-sample.png",
      photoBack: "sections/pillars/images/Clienttalk-sample.png",
      about: "Manages the financial and operational backbone of Zyphora, keeping the agency organized, profitable, and ready to grow.",
      duties: ["Budgeting &amp; Invoicing","Financial Planning","Operations Management","Process Optimization"] },
    { name: "Sathvika", role: "Content Strategist &amp; Copywriter", photoFront: "", photoBack: "",
      about: "Transforms ideas into engaging content through research, storytelling, and strategic planning that builds digital presence.",
      duties: ["Content Research &amp; Strategy","Copywriting","Brand Storytelling","Digital Presence Building"] },
    { name: "Ganesh", role: "Lead Videographer", photoFront: "", photoBack: "",
      about: "Brings stories to life through powerful visuals, leading creative shoots that capture each brand's true identity.",
      duties: ["Shoot Planning &amp; Direction","Videography &amp; Cinematography","Visual Storytelling","Brand Identity Capture"] },
    { name: "Kaviyaa", role: "Web Developer", photoFront: "", photoBack: "",
      about: "Develops responsive websites and landing pages that combine functionality with modern design for every client.",
      duties: ["Responsive Web Development","Landing Page Design","UI/UX Implementation","Performance Optimization"] },
    { name: "Nidharshana", role: "Account Manager &amp; Post Production Manager", photoFront: "", photoBack: "",
      about: "The bridge between clients and the creative team, managing communication, coordination, and approvals on every project.",
      duties: ["Client Communication","Project Coordination","Approval Management","Timeline Oversight"] },
    { name: "Shiv Nandhana", role: "Videographer", photoFront: "", photoBack: "",
      about: "Supports the production team by capturing engaging visual content and keeping every shoot organized from start to finish.",
      duties: ["On-set Assistance","Visual Content Capture","Equipment &amp; Logistics","Production Organization"] },
    { name: "Dhanish", role: "Lead Video Editor", photoFront: "", photoBack: "",
      about: "Transforms raw footage into compelling stories through creative editing, pacing, and visual storytelling.",
      duties: ["Video Editing &amp; Post Production","Motion Graphics &amp; Effects","Color Grading &amp; Sound Sync","Storyboarding &amp; Visual Flow"] },
    { name: "Dhakshaiya Shree", role: "Graphic Designer", photoFront: "", photoBack: "",
      about: "Creates visually impactful designs that strengthen brand identity across social media and campaign assets.",
      duties: ["Brand Visual Design","Social Media Creatives","Campaign Asset Design","Visual Identity Development"] }
  ];

  function photoMarkup(photo, name){
    return photo
      ? `<img src="${photo}" alt="${name}" loading="lazy">`
      : `<div class="pillar-placeholder">${PLACEHOLDER_SVG}<span>Add Photo</span></div>`;
  }

  function cardHTML(m){
    return `
    <div class="pillar-slot">
      <div class="pillar-card">
        <div class="pillar-card-inner">
          <div class="pillar-face pillar-front">
            <div class="pillar-face-inner">
              ${photoMarkup(m.photoFront, m.name)}
              <div class="pillar-front-info">
                <div class="pillar-front-name">${m.name}</div>
                <div class="pillar-front-role">${m.role}</div>
              </div>
            </div>
          </div>
          <div class="pillar-face pillar-back">
            <div class="pillar-face-inner">
              <div class="pillar-back-photo">${photoMarkup(m.photoBack, m.name)}</div>
              <div class="pillar-back-content">
                <h3 class="pillar-back-name">${m.name}</h3>
                <div class="pillar-back-role">${m.role}</div>
                <div class="pillar-back-divider"></div>
                <p class="pillar-back-bio">${m.about}</p>
                <div class="pillar-back-expertise-label">Expertise</div>
                <ul class="pillar-back-expertise">
                  ${m.duties.map(d => `<li>${d}</li>`).join("")}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>`;
  }

  const track = document.getElementById('pillarsTrack');
  if (!track) return;

  /* Render the team twice back-to-back so the marquee can loop seamlessly:
     we translate the track by exactly -50% (one full set) then snap back
     to 0 — invisible to the eye since the second half is an identical
     copy of the first. */
  const setHTML = TEAM.map(cardHTML).join("");
  track.innerHTML = setHTML + setHTML;

  /* ── Marquee motion: driven by JS (rAF), not a CSS @keyframes animation ──
     Safari/WebKit (macOS *and* iOS — both share the same engine) has a
     long-standing bug where flipping `animation-play-state` from paused
     back to running does not reliably resume a @keyframes animation from
     where it was paused; it can silently jump the animation back to 0%.
     Because the marquee needs to pause every time a card is tapped open
     (and resume when it's closed), that bug meant the track kept getting
     reset to the very start — i.e. right back to Harshini/Jaswanth, the
     first two cards — instead of ever scrolling further. Managing the
     x-offset ourselves with requestAnimationFrame and pausing via a plain
     boolean means there's no animation state for the browser to corrupt. */
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let offset = 0;
  let paused = false;
  let halfWidth = 0;
  let lastTime = null;

  function measure(){ halfWidth = track.scrollWidth / 2; }

  /* Same feel as the old per-breakpoint animation durations (46s / 34s /
     26s to cross one full set), just expressed as pixels-per-second so a
     resize doesn't require restarting anything. */
  function speed(){
    const w = window.innerWidth;
    const duration = w <= 560 ? 26 : w <= 900 ? 34 : 46;
    return halfWidth / duration;
  }

  function tick(now){
    if (lastTime === null) lastTime = now;
    const dt = (now - lastTime) / 1000;
    lastTime = now;
    if (!paused && halfWidth > 0) {
      offset -= speed() * dt;
      if (offset <= -halfWidth) offset += halfWidth;
      track.style.transform = `translateX(${offset}px)`;
    }
    requestAnimationFrame(tick);
  }

  measure();
  window.addEventListener('resize', measure);
  if (!reduceMotion) requestAnimationFrame(tick);

  /* Touch/tap support: since hover doesn't exist on touch devices,
     tapping a card toggles the flip via an .is-open class instead. */
  const isTouch = window.matchMedia('(hover: none), (pointer: coarse)').matches;
  if (isTouch) {
    document.addEventListener('click', (e) => {
      const slot = e.target.closest('.pillar-slot');
      const withinTrack = e.target.closest('#pillarsTrack');
      if (slot && withinTrack) {
        const wasOpen = slot.classList.contains('is-open');
        track.querySelectorAll('.pillar-slot.is-open').forEach(s => s.classList.remove('is-open'));
        if (!wasOpen) slot.classList.add('is-open');
      } else {
        track.querySelectorAll('.pillar-slot.is-open').forEach(s => s.classList.remove('is-open'));
      }
      paused = !!track.querySelector('.pillar-slot.is-open');
    });
  } else {
    /* Desktop mouse: pause on hover, same as the old :hover CSS rule. */
    track.addEventListener('mouseenter', () => { paused = true; });
    track.addEventListener('mouseleave', () => { paused = false; });
  }
})();

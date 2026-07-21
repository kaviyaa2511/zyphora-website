/* ══════════════════════════════════════════════
   SERVICES PAGE LOGIC (merged from zyphora-services.html)
   ══════════════════════════════════════════════ */
(function(){
"use strict";
/* Resolve this script's own folder so the `${__ASSET_BASE__}images/...` paths below work
   correctly whether this file is loaded standalone (from this section's
   own .html) or included from the merged /index.html at the site root. */
const __ASSET_BASE__ = (document.currentScript && document.currentScript.src)
  ? document.currentScript.src.replace(/[^\/]+$/, '')
  : '';

/* ================================================================
   DATA — every service tile + full detail content lives here.
   IMAGE URLS are grouped in IMAGES so they can be swapped for
   real brand photography later without touching layout logic.
================================================================ */
const IMAGES = {
  strategy:   `${__ASSET_BASE__}images/Editing-sample.png`,
  website:    `${__ASSET_BASE__}images/Editing-sample.png`,
  campaign:   `${__ASSET_BASE__}images/Editing-sample.png`,
  seo:        `${__ASSET_BASE__}images/Editing-sample.png`,
  social:     `${__ASSET_BASE__}images/Editing-sample.png`,
  creative:   `${__ASSET_BASE__}images/Editing-sample.png`,
  performance:`${__ASSET_BASE__}images/Editing-sample.png`,
  video:      `${__ASSET_BASE__}images/Editing-sample.png`
};

const SERVICES = [
  {
    num:"01", size:"h-lg",
    title:"DIGITAL STRATEGY & BRAND GROWTH",
    statement:"Direction before execution. Purpose before noise.",
    image:IMAGES.strategy,
    heroHeading:"Build with clarity. Grow with direction.",
    intro:[
      "Every successful digital presence begins long before the first post, advertisement, or campaign goes live.",
      "It begins with understanding.",
      "We work closely with businesses to understand where they are, where they want to go, who they want to reach, and what stands between them and meaningful growth. From there, we create a clear strategic direction that connects business goals with real market opportunities.",
      "At Zyphora, strategy is not a document that gets forgotten. It is the foundation behind every decision that follows."
    ],
    challenge:"Many businesses enter the digital world with ambition but without a clear direction. They post content, run advertisements, redesign websites, and follow trends—yet struggle to understand what is actually moving them forward. Without strategy, activity can easily become noise.",
    approach:"We begin by understanding the business from the inside out. We study its goals, audience, market position, competitors, customer journey, challenges, and opportunities. We then transform these insights into a practical roadmap designed to guide future marketing, communication, and growth decisions.",
    whatWeDo:["Business and Digital Strategy","Brand Positioning","Competitor Analysis","Audience Understanding","Customer Journey Planning","Market Opportunity Analysis","Growth Roadmap","Strategic Consulting"],
    outcome:"A brand that knows where it stands, who it speaks to, and where it is going."
  },
  {
    num:"02", size:"h-md",
    title:"WEBSITE DESIGN & DEVELOPMENT",
    statement:"Your digital presence deserves more than a place on the internet.",
    image:IMAGES.website,
    heroHeading:"Designed to be seen. Built to be experienced.",
    intro:[
      "A website is often the first place where someone truly meets your brand.",
      "Before a conversation begins, before an enquiry is made, and before trust is established, your website is already communicating who you are.",
      "We design and develop digital experiences that do more than look beautiful. They guide attention, communicate clearly, build confidence, and help visitors take meaningful action."
    ],
    challenge:"A website can be visually impressive and still fail. Confusing navigation, poor mobile experiences, unclear messaging, slow performance, and weak calls to action can turn interested visitors away before they ever understand the value of a business.",
    approach:"We bring together strategy, visual design, user experience, content structure, and development. Every page is created with a purpose. Every interaction is designed to feel natural. Every visual decision supports the identity of the brand.",
    whatWeDo:["Business Websites","Landing Pages","UI/UX Design","Responsive Web Development","E-commerce Solutions","Conversion-Focused Page Design","Website Redesign","Performance Optimization"],
    outcome:"A website that does not simply exist online—but represents the brand, earns trust, and supports growth."
  },
  {
    num:"03", size:"h-sm",
    title:"DIGITAL MARKETING & CAMPAIGN STRATEGY",
    statement:"Every campaign should know where it is going.",
    image:IMAGES.campaign,
    heroHeading:"Marketing with intention behind every move.",
    intro:[
      "Being visible is important. Being visible to the right people, with the right message, at the right moment, is what creates impact.",
      "We develop and execute digital marketing strategies that connect business goals with carefully planned campaigns, channels, audiences, and measurable outcomes."
    ],
    challenge:"Digital marketing often becomes a collection of disconnected activities. One campaign runs here. Content is posted there. Trends are followed. Budgets are spent. But without a unified direction, businesses struggle to understand what is working and why.",
    approach:"We connect every marketing activity to a larger purpose. From audience selection and campaign planning to execution, performance analysis, and optimization, we continuously refine the strategy based on what the data and audience behaviour reveal.",
    whatWeDo:["Digital Marketing Planning","Campaign Strategy","Campaign Management","Audience Targeting","Channel Strategy","Campaign Execution","Performance Optimization","Analytics and Reporting"],
    outcome:"Marketing that moves with purpose instead of simply staying active."
  },
  {
    num:"04", size:"h-lg",
    title:"SEARCH ENGINE OPTIMIZATION",
    statement:"Be discovered when people are already looking.",
    image:IMAGES.seo,
    heroHeading:"Visibility that continues to grow.",
    intro:[
      "People search every day for answers, services, products, and businesses.",
      "The question is whether they find you.",
      "Our SEO strategies help businesses improve their search visibility, strengthen their websites, and build sustainable organic growth over time."
    ],
    challenge:"A great business can remain invisible if search engines and potential customers cannot easily understand, trust, or discover its website.",
    approach:"We look beyond keywords. We study search behaviour, website structure, technical performance, content relevance, local visibility, and competitive opportunities to build an SEO foundation designed for long-term growth.",
    whatWeDo:["Keyword Research","Search Intent Analysis","On-Page SEO","Technical SEO","Local SEO","SEO Audits","Content Optimization","Organic Performance Tracking"],
    outcome:"Stronger search visibility, more relevant organic traffic, and a digital presence that becomes easier to discover over time."
  },
  {
    num:"05", size:"h-md",
    title:"SOCIAL MEDIA & CONTENT MARKETING",
    statement:"Do not just appear in the feed. Mean something in it.",
    image:IMAGES.social,
    heroHeading:"Content people want to stop for.",
    intro:[
      "Social media is crowded with brands trying to be seen.",
      "We believe the brands people remember are the ones that understand how to communicate—not simply how often to post.",
      "We create content strategies that help brands become more consistent, relevant, relatable, and meaningful to the audiences they want to reach."
    ],
    challenge:"Posting regularly does not automatically create connection. Without a clear voice, content direction, audience understanding, and purpose, even active social media accounts can feel invisible.",
    approach:"We begin with the audience. What captures their attention? What matters to them? What makes them trust, respond, remember, or return? From there, we build content systems that combine strategy, storytelling, consistency, and creativity.",
    whatWeDo:["Social Media Management","Content Strategy","Content Planning","Community Engagement","Campaign Execution","Website Content","Blog Writing","Copywriting","Brand Storytelling","Performance Tracking"],
    outcome:"A brand presence that feels consistent, human, and worth following."
  },
  {
    num:"06", size:"h-md",
    title:"CREATIVE DESIGN & BRAND COMMUNICATION",
    statement:"Before people understand a brand, they feel it.",
    image:IMAGES.creative,
    heroHeading:"Give every idea a visual voice.",
    intro:[
      "Design is more than decoration.",
      "It shapes first impressions, influences perception, communicates personality, and determines how consistently a brand is remembered.",
      "We create visual communication that helps brands express who they are across the digital spaces where their audiences meet them."
    ],
    challenge:"When every post, advertisement, and marketing material looks different, the brand itself becomes difficult to recognize.",
    approach:"We combine creative thinking with brand consistency. Every visual is designed not only to attract attention, but to communicate the right message and strengthen the larger identity of the brand.",
    whatWeDo:["Social Media Creatives","Digital Campaign Visuals","Brand Identity Design","Marketing Materials","Advertising Creatives","Digital Graphics","Visual Content Systems"],
    outcome:"A visual presence that feels distinctive, consistent, and unmistakably yours."
  },
  {
    num:"07", size:"h-lg",
    title:"PERFORMANCE MARKETING & PAID ADVERTISING",
    statement:"Reach matters. Results matter more.",
    image:IMAGES.performance,
    heroHeading:"Put your message in front of the people who matter.",
    intro:[
      "Paid advertising can create powerful growth—but only when strategy, audience, creative, budget, and measurement work together.",
      "We plan and manage targeted advertising campaigns focused on reaching relevant audiences and generating measurable business outcomes."
    ],
    challenge:"Spending more does not guarantee better results. Without the right audience, campaign structure, creative direction, tracking, and continuous optimization, advertising budgets can disappear without creating meaningful returns.",
    approach:"We treat every campaign as a learning system. We plan, launch, measure, test, and optimize continuously—using real performance data to improve how budgets are spent and how audiences respond.",
    whatWeDo:["Meta Advertising","Google Advertising","Campaign Setup","Audience Targeting","Creative Direction","Budget Optimization","Conversion Tracking","ROI Analysis"],
    outcome:"Advertising built around measurable growth—not vanity numbers."
  },
  {
    num:"08", size:"h-sm",
    title:"VIDEO PRODUCTION & POST-PRODUCTION",
    statement:"Some stories need to move before they can move people.",
    image:IMAGES.video,
    heroHeading:"Turn moments into stories people remember.",
    intro:[
      "Video brings together movement, emotion, sound, people, and ideas in a way few other formats can.",
      "From capturing the first frame to shaping the final edit, we create video content designed to communicate stories, showcase brands, and hold attention across digital platforms."
    ],
    challenge:"People scroll quickly. A video has only moments to earn attention—and even less time to give someone a reason to continue watching.",
    approach:"We think beyond recording and editing. We consider the story, platform, audience, pace, emotion, and purpose behind every piece of video content.",
    whatWeDo:["Corporate Videos","Product Shoots","Event Coverage","Promotional Videos","Brand Storytelling","Reels and Shorts Editing","YouTube Video Editing","Motion Graphics","Colour Grading","Subtitles and Sound Enhancement"],
    outcome:"Video content that does not simply play—it communicates, connects, and stays with the audience."
  }
];

const SUPPORT = [
  {
    num:"01", title:"Email Marketing & Automation",
    statement:"Stay remembered beyond the first interaction.",
    description:"Build lasting customer relationships through personalized email communication designed to nurture leads, encourage return engagement, and strengthen customer retention.",
    includes:["Newsletter Design","Promotional Campaigns","Automated Email Sequences","Customer Retention Campaigns","Audience Segmentation","Campaign Analytics"]
  },
  {
    num:"02", title:"Website Care & Maintenance",
    statement:"A strong website should stay strong after launch.",
    description:"We provide ongoing technical care to keep websites secure, updated, optimized, and performing reliably.",
    includes:["Website Updates","Security Monitoring","Performance Optimization","Bug Fixes","Backups","Technical Support"]
  },
  {
    num:"03", title:"Analytics, Reporting & Growth Insights",
    statement:"Know what changed. Understand why. Decide what comes next.",
    description:"We turn performance data into clear insights that help businesses understand progress, identify opportunities, and make better future decisions.",
    includes:["Website Analytics","Social Media Performance","SEO Reporting","Advertising Results","Lead and Conversion Analysis","Growth Recommendations"]
  }
];

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
gsap.registerPlugin(ScrollTrigger);

/* ================================================================
   RENDER — core service tile grid
================================================================ */
const tilesGrid = document.getElementById("tilesGrid");

function renderTile(s, i){
  return `
  <button class="tile ${s.size}" data-index="${i}" style="order:${i}" aria-haspopup="dialog">
    <span class="tile__edge-line" aria-hidden="true"></span>
    <span class="tile__img-wrap">
      <img class="tile__img" src="${s.image}" alt="" loading="${i < 2 ? 'eager' : 'lazy'}">
    </span>
    <span class="tile__overlay"></span>
    <span class="tile__content">
      <span class="tile__number">${s.num}</span>
      <span>
        <span class="tile__title">${s.title}</span>
        <span class="tile__statement">${s.statement}</span>
      </span>
      <span class="tile__footer">
        <span></span>
        <span class="tile__explore">Explore ↗</span>
      </span>
    </span>
  </button>`;
}

// Split alternately into two independent columns (0,2,4,6 / 1,3,5,7) so each
// column's total height is its own business — no shared-row gap problem.
const colA = SERVICES.map((s,i)=>({s,i})).filter(({i}) => i % 2 === 0);
const colB = SERVICES.map((s,i)=>({s,i})).filter(({i}) => i % 2 === 1);

tilesGrid.innerHTML = `
  <div class="tiles-col">${colA.map(({s,i}) => renderTile(s,i)).join("")}</div>
  <div class="tiles-col">${colB.map(({s,i}) => renderTile(s,i)).join("")}</div>
`;

/* Tile hover parallax (desktop pointer only) */
if (!reduceMotion && window.matchMedia("(hover:hover)").matches){
  tilesGrid.querySelectorAll(".tile").forEach(tile => {
    const img = tile.querySelector(".tile__img");
    const title = tile.querySelector(".tile__title");
    const moveImg = gsap.quickTo(img, "x", {duration:0.6, ease:"power3.out"});
    const moveImgY = gsap.quickTo(img, "y", {duration:0.6, ease:"power3.out"});
    const moveTitle = gsap.quickTo(title, "x", {duration:0.6, ease:"power3.out"});
    tile.addEventListener("mousemove", (e) => {
      const r = tile.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      moveImg(px * -14);
      moveImgY(py * -10);
      moveTitle(px * 4);
    });
    tile.addEventListener("mouseleave", () => { moveImg(0); moveImgY(0); moveTitle(0); });
  });
}

/* ================================================================
   RENDER — ongoing support accordion rows
================================================================ */
const supportRows = document.getElementById("supportRows");
supportRows.innerHTML = SUPPORT.map((row, i) => `
  <div class="support-row" data-index="${i}">
    <button class="support-row__trigger" aria-expanded="false">
      <span class="support-row__num">${row.num}</span>
      <span class="support-row__title">${row.title}</span>
      <span class="support-row__statement">${row.statement}</span>
      <span class="support-row__plus" aria-hidden="true"></span>
    </button>
    <div class="support-row__panel">
      <div class="support-row__panel-inner">
        <p>${row.description}</p>
        <ul class="support-row__includes">
          ${row.includes.map(item => `<li>${item}</li>`).join("")}
        </ul>
      </div>
    </div>
  </div>
`).join("");

let openSupportRow = null;
supportRows.querySelectorAll(".support-row__trigger").forEach(trigger => {
  trigger.addEventListener("click", () => {
    const row = trigger.closest(".support-row");
    const panel = row.querySelector(".support-row__panel");
    const isOpen = row.classList.contains("is-open");

    if (openSupportRow && openSupportRow !== row){
      const prevPanel = openSupportRow.querySelector(".support-row__panel");
      openSupportRow.classList.remove("is-open");
      openSupportRow.querySelector(".support-row__trigger").setAttribute("aria-expanded","false");
      gsap.to(prevPanel, {height:0, duration:reduceMotion?0:0.5, ease:"power2.inOut"});
    }

    if (isOpen){
      row.classList.remove("is-open");
      trigger.setAttribute("aria-expanded","false");
      gsap.to(panel, {height:0, duration:reduceMotion?0:0.5, ease:"power2.inOut"});
      openSupportRow = null;
    } else {
      row.classList.add("is-open");
      trigger.setAttribute("aria-expanded","true");
      const inner = panel.querySelector(".support-row__panel-inner");
      gsap.to(panel, {height:inner.offsetHeight, duration:reduceMotion?0:0.6, ease:"power2.inOut"});
      openSupportRow = row;
    }
  });
});

/* ================================================================
   SCROLL REVEALS
================================================================ */
if (!reduceMotion){
  document.querySelectorAll(".reveal").forEach(el => {
    ScrollTrigger.create({
      trigger: el, start:"top 88%",
      onEnter: () => el.classList.add("is-visible"),
      once:true
    });
  });
  gsap.utils.toArray(".tile").forEach((tile, i) => {
    ScrollTrigger.create({
      trigger: tile, start:"top 92%", once:true,
      onEnter: () => gsap.fromTo(tile, {opacity:0, y:30}, {opacity:1, y:0, duration:0.7, delay:(i%2)*0.08, ease:"power3.out"})
    });
  });
} else {
  document.querySelectorAll(".reveal").forEach(el => el.classList.add("is-visible"));
}

/* ================================================================
   SERVICE TRANSITION SYSTEM
   Shared-element style transition: the clicked tile's image and
   title "become" the detail hero, then an ivory content canvas
   rises beneath it. Reversed exactly on close.
================================================================ */
const detailStage      = document.getElementById("detailStage");
const detailHero        = document.getElementById("detailHero");
const detailHeroImg     = document.getElementById("detailHeroImg");
const detailNumber      = document.getElementById("detailNumber");
const detailTitle       = document.getElementById("detailTitle");
const detailStatement   = document.getElementById("detailStatement");
const detailBack        = document.getElementById("detailBack");
const detailCanvas      = document.getElementById("detailCanvas");
const detailCanvasInner = document.getElementById("detailCanvasInner");

let currentIndex = null;
let lastScrollY = 0;
let lastFocusedTile = null;
let mainTl = null;

function heroTargetHeight(){
  const h = Math.min(window.innerHeight * 0.58, window.innerHeight - 160);
  return Math.max(h, 460) + "px";
}

/* document.documentElement.clientWidth excludes the scrollbar, unlike the
   100vw unit (which includes it in most browsers) — using clientWidth here
   is what prevents a thin black gap from appearing on the right edge of the
   full-bleed hero image. */
function viewportWidth(){
  return document.documentElement.clientWidth + "px";
}

function buildDetailContent(s){
  detailCanvasInner.innerHTML = `
    <div class="d-section d-intro">
      <div>
        <span class="d-label">Introduction</span>
        <p class="d-intro__statement">${s.heroHeading}</p>
      </div>
      <div class="d-intro__body">${s.intro.map(p => `<p>${p}</p>`).join("")}</div>
    </div>

    <div class="d-section d-flow">
      <div class="d-flow__num">01</div>
      <div>
        <span class="d-label">The Challenge</span>
        <div class="d-flow__text" style="margin-top:14px;"><p>${s.challenge}</p></div>
      </div>
    </div>

    <div class="d-section d-flow">
      <div class="d-flow__num">02</div>
      <div>
        <span class="d-label">Our Approach</span>
        <div class="d-flow__text" style="margin-top:14px;"><p>${s.approach}</p></div>
      </div>
    </div>

    <div class="d-section">
      <span class="d-label">What We Do</span>
      <ul class="d-capabilities">
        ${s.whatWeDo.map((item,i) => `
          <li>
            <span class="d-cap-index">${String(i+1).padStart(2,"0")}</span>
            <span class="d-cap-name">${item}</span>
          </li>`).join("")}
      </ul>
    </div>

    <div class="d-section d-outcome">
      <span class="d-outcome__label">The Outcome</span>
      <p class="d-outcome__text">${s.outcome}</p>
    </div>
  `;
}

function lockScroll(){
  lastScrollY = window.scrollY;
  document.body.classList.add("detail-open");
  document.body.style.top = -lastScrollY + "px";
}
function unlockScroll(){
  document.body.classList.remove("detail-open");
  document.body.style.top = "";
  window.scrollTo(0, lastScrollY);
}

/* Open a service tile into the full detail experience */
function openService(index, tileEl){
  currentIndex = index;
  lastFocusedTile = tileEl;
  const s = SERVICES[index];
  const rect = tileEl.getBoundingClientRect();

  lockScroll();
  detailStage.classList.add("is-active");
  detailStage.setAttribute("aria-hidden","false");

  // Populate hero + content ahead of animation
  detailHeroImg.src = s.image;
  detailNumber.textContent = s.num;
  detailTitle.textContent = s.title;
  detailStatement.textContent = s.statement;
  buildDetailContent(s);
  detailStage.scrollTop = 0;

  const otherTiles = [...tilesGrid.querySelectorAll(".tile")].filter(t => t !== tileEl);
  const targetH = heroTargetHeight();

  gsap.set(detailHero, {position:"fixed", top:rect.top, left:rect.left, width:rect.width, height:rect.height, borderRadius:6});
  gsap.set(detailCanvas, {position:"fixed", top:window.innerHeight, left:0, right:0, bottom:0, height:"auto", marginTop:0, overflowY:"auto"});
  gsap.set([detailNumber, detailTitle, detailStatement], {opacity:0, y:14});
  gsap.set(tileEl, {opacity:0});

  const dur = reduceMotion ? 0.01 : 1.05;
  mainTl = gsap.timeline({
    onComplete: () => {
      /* Release the hero and canvas into normal document flow so that
         scrolling the page carries the hero up and away along with the
         content beneath it, instead of leaving it permanently pinned. */
      gsap.set(detailHero, {position:"relative", top:"auto", left:"auto", width:"100%", height:targetH, borderRadius:0});
      gsap.set(detailCanvas, {position:"relative", top:"auto", left:"auto", right:"auto", bottom:"auto", width:"100%", height:"auto", marginTop:-24, overflowY:"visible"});
      /* Switching from fixed to in-flow layout can trigger the browser's
         scroll anchoring, which nudges scrollTop to compensate — reset it
         so the detail page always opens fresh instead of appearing
         pre-scrolled (compact back button, cramped heading). */
      detailStage.scrollTop = 0;
      detailBack.classList.remove("is-compact");
      detailBack.focus();
    }
  });
  mainTl
    .to(otherTiles, {opacity:0, scale:0.94, y:16, duration:dur*0.5, stagger:0.02, ease:"power2.out"}, 0)
    .to(detailHero, {top:0, left:0, width:viewportWidth(), height:targetH, borderRadius:0, duration:dur, ease:"power3.inOut"}, 0)
    .to([detailNumber, detailTitle, detailStatement], {opacity:1, y:0, duration:dur*0.6, stagger:0.06, ease:"power2.out"}, dur*0.35)
    .to(detailCanvas, {top: () => window.scrollY + parseFloat(targetH) - 24, opacity:1, duration:dur*0.85, ease:"power3.inOut"}, dur*0.28);
}

/* Cross-fade from one open service straight to the next (no grid return) */
function goToService(nextIndex){
  currentIndex = nextIndex;
  const s = SERVICES[nextIndex];
  const dur = reduceMotion ? 0.01 : 0.6;

  const tl = gsap.timeline();
  tl.to([detailHeroImg, detailNumber, detailTitle, detailStatement], {opacity:0, y:-10, duration:dur*0.5, ease:"power2.in"})
    .to(detailCanvasInner, {opacity:0, duration:dur*0.5, ease:"power2.in"}, 0)
    .call(() => {
      detailHeroImg.src = s.image;
      detailNumber.textContent = s.num;
      detailTitle.textContent = s.title;
      detailStatement.textContent = s.statement;
      buildDetailContent(s);
      detailStage.scrollTop = 0;
      gsap.set(detailCanvasInner, {opacity:0});
    })
    .to([detailHeroImg, detailNumber, detailTitle, detailStatement], {opacity:1, y:0, duration:dur*0.6, ease:"power2.out"})
    .to(detailCanvasInner, {opacity:1, duration:dur*0.6, ease:"power2.out"}, "<");

  gsap.set([detailNumber, detailTitle, detailStatement], {y:0});
}

/* Reverse the transition back to the exact originating tile */
function closeService(){
  if (currentIndex === null) return;
  const tileEl = tilesGrid.querySelectorAll(".tile")[currentIndex];
  const rect = tileEl.getBoundingClientRect();
  const otherTiles = [...tilesGrid.querySelectorAll(".tile")].filter(t => t !== tileEl);
  const dur = reduceMotion ? 0.01 : 0.95;

  /* The hero and canvas were released into normal scroll flow while open,
     so re-pin them to fixed positioning at their exact current on-screen
     location (whatever the scroll position happens to be) before running
     the reverse shared-element animation back down to the tile. */
  const heroRect = detailHero.getBoundingClientRect();
  const canvasRect = detailCanvas.getBoundingClientRect();
  gsap.set(detailHero, {position:"fixed", top:heroRect.top, left:heroRect.left, width:heroRect.width, height:heroRect.height});
  gsap.set(detailCanvas, {position:"fixed", top:canvasRect.top, left:0, right:0, bottom:"auto", height:canvasRect.height, marginTop:0, overflowY:"hidden"});

  const tl = gsap.timeline({
    onComplete: () => {
      detailStage.classList.remove("is-active");
      detailStage.setAttribute("aria-hidden","true");
      unlockScroll();
      gsap.set(tileEl, {opacity:1});
      gsap.set(otherTiles, {opacity:1, scale:1, y:0});
      currentIndex = null;
      if (lastFocusedTile) lastFocusedTile.focus();
    }
  });
  tl.to(detailCanvas, {opacity:0, top: window.innerHeight, duration:dur*0.6, ease:"power3.inOut"}, 0)
    .to([detailNumber, detailTitle, detailStatement], {opacity:0, y:10, duration:dur*0.3, ease:"power2.in"}, 0)
    .to(detailHero, {top:rect.top, left:rect.left, width:rect.width, height:rect.height, borderRadius:6, duration:dur, ease:"power3.inOut"}, dur*0.08)
    .to(otherTiles, {opacity:1, scale:1, y:0, duration:dur*0.5, stagger:0.02, ease:"power2.out"}, dur*0.45);
}

/* Tile click / keyboard activation */
tilesGrid.addEventListener("click", (e) => {
  const tile = e.target.closest(".tile");
  if (!tile) return;
  openService(parseInt(tile.dataset.index, 10), tile);
});

detailBack.addEventListener("click", closeService);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && detailStage.classList.contains("is-active")){
    closeService();
  }
});

/* Compact back button once the hero has scrolled up out of the way */
detailStage.addEventListener("scroll", () => {
  detailBack.classList.toggle("is-compact", detailStage.scrollTop > 110);
});

/* Recalculate hero target height on resize while open */
window.addEventListener("resize", () => {
  if (currentIndex !== null && detailStage.classList.contains("is-active")){
    gsap.set(detailHero, {width:viewportWidth(), height:heroTargetHeight()});
  }
});

/* Expose to the main site's page-switcher so it can close any open
   service detail panel before navigating away from the Services page. */
window.zyphoraCloseServiceDetail = closeService;

/* "Work With Us" CTA at the bottom of the services page opens the
   main site's Contact page rather than living as its own destination. */
const servicesCtaContact = document.getElementById("servicesCtaContact");
if (servicesCtaContact) {
  servicesCtaContact.addEventListener("click", (e) => {
    e.preventDefault();
    closeService();
    document.getElementById("navContact").click();
  });
}

})();


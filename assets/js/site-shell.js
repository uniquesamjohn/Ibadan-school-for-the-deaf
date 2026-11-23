/**
 * Ibadan School for the Deaf — Shared Layout Shell (ES6+ Vanilla JS)
 * Injects consistent accessible top bar, header navigation, mobile drawer,
 * footer, accessibility toolbar, reading guide, and back-to-top control.
 * Supports root-level and nested pages cleanly via data-base-path on <body>.
 */
(function initSiteShell() {
  'use strict';

  const body = document.body;
  if (!body) return;

  const base = body.dataset.basePath || './';
  const currentPage = body.dataset.page || 'home';
  const year = new Date().getFullYear();

  const href = (relPath) => `${base}${relPath}`;
  const isCurrent = (key) => (currentPage === key ? ' aria-current="page"' : '');
  const isGroupActive = (keys) => (keys.includes(currentPage) ? ' is-active' : '');

  const aboutKeys = ['who-we-are', 'our-people-and-team', 'our-partner'];
  const newsKeys = ['news-and-events', 'achievements', 'gallery', 'news', 'events'];

  // Update placeholder '#' values below when official social media URLs are ready
  const socialLinks = {
    facebook: 'https://web.facebook.com/ibadanschoolforthedeaf?locale=en_GB',
    instagram: '#',
    x: '#',
    youtube: '#'
  };

  const chevronSvg = `
    <svg class="nav-caret" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2.2" aria-hidden="true">
      <path d="M5 7.5L10 12.5L15 7.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`;

  const headerMarkup = `
    <a class="skip-link" href="#main-content">Skip to main content</a>

    <div class="top-bar" role="region" aria-label="School contact summary">
      <div class="top-bar-inner">
        <div class="top-bar-contact">
          <a href="tel:+2348035851464" aria-label="Call Ibadan School for the Deaf on +234-803-585-1464">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            <span>+234-803-585-1464</span>
          </a>
          <a href="tel:+2348060060642" aria-label="Call Ibadan School for the Deaf on +234-806-006-0642">
            <span>+234-806-006-0642</span>
          </a>
          <a href="mailto:ibadanschoolforthedeaf@gmail.com" aria-label="Email Ibadan School for the Deaf at ibadanschoolforthedeaf@gmail.com">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            <span>ibadanschoolforthedeaf@gmail.com</span>
          </a>
          <a href="mailto:info@ibadanschoolforthedeaf.com.ng" aria-label="Email Ibadan School for the Deaf at info@ibadanschoolforthedeaf.com.ng">
            <span>info@ibadanschoolforthedeaf.com.ng</span>
          </a>
        </div>
        <div class="top-bar-meta">Polytechnic Road, Ijokodo Junction, Ibadan &middot; Est. 1963</div>
      </div>
    </div>

    <header class="site-header" id="site-header">
      <div class="nav-bar">
        <a class="nav-brand" href="${href('index.html')}" aria-label="Ibadan School for the Deaf — Home">
          <img src="${href('assets/images/logo.png')}" alt="Ibadan School for the Deaf Logo" class="nav-logo" width="58" height="58">
          <span class="nav-brand-text">
            <span class="nav-brand-name">Ibadan School<br>for the Deaf</span>
            <span class="nav-brand-tag">Est. 1963</span>
          </span>
        </a>

        <nav class="main-nav" aria-label="Main navigation">
          <ul class="nav-list">
            <li class="nav-item">
              <a class="nav-link" href="${href('index.html')}"${isCurrent('home')}>Home</a>
            </li>

            <li class="nav-item has-dropdown${isGroupActive(aboutKeys)}">
              <button type="button" class="nav-dropdown-btn" aria-expanded="false" aria-haspopup="true" aria-controls="menu-about">
                <span>About Us</span>
                ${chevronSvg}
              </button>
              <div class="dropdown-panel" id="menu-about" role="menu" aria-label="About Us subpages">
                <a class="dropdown-link" role="menuitem" href="${href('about/who-we-are.html')}"${isCurrent('who-we-are')}>Who We Are</a>
                <a class="dropdown-link" role="menuitem" href="${href('about/our-people-and-team.html')}"${isCurrent('our-people-and-team')}>Our People and Team</a>
                <a class="dropdown-link" role="menuitem" href="${href('about/our-partner.html')}"${isCurrent('our-partner')}>Our Partner</a>
              </div>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="${href('programs/index.html')}"${isCurrent('programs')}>Programs</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="${href('admissions/index.html')}"${isCurrent('admissions')}>Admissions</a>
            </li>

            <li class="nav-item has-dropdown${isGroupActive(newsKeys)}">
              <button type="button" class="nav-dropdown-btn" aria-expanded="false" aria-haspopup="true" aria-controls="menu-news">
                <span>News and Events</span>
                ${chevronSvg}
              </button>
              <div class="dropdown-panel" id="menu-news" role="menu" aria-label="News and Events subpages">
                <a class="dropdown-link" role="menuitem" href="${href('news-and-events/index.html')}"${isCurrent('news-and-events')}>Overview</a>
                <a class="dropdown-link" role="menuitem" href="${href('news-and-events/achievements.html')}"${isCurrent('achievements')}>Achievements</a>
                <a class="dropdown-link" role="menuitem" href="${href('news-and-events/gallery.html')}"${isCurrent('gallery')}>Gallery</a>
                <a class="dropdown-link" role="menuitem" href="${href('news-and-events/news.html')}"${isCurrent('news')}>News</a>
                <a class="dropdown-link" role="menuitem" href="${href('news-and-events/events.html')}"${isCurrent('events')}>Events</a>
              </div>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="${href('careers/index.html')}"${isCurrent('careers')}>Careers</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="${href('contact/index.html')}"${isCurrent('contact')}>Contact Us</a>
            </li>
          </ul>
        </nav>

        <div class="nav-actions">
          <a class="nav-cta-donate" href="${href('donate/index.html')}"${isCurrent('donate')}>Donate</a>
          <a class="nav-cta-enroll" href="${href('enroll/index.html')}"${isCurrent('enroll')}>Enroll a Child</a>
        </div>

        <button type="button" class="menu-toggle" id="menu-toggle" aria-label="Open navigation menu" aria-expanded="false" aria-controls="mob-drawer">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <nav class="mob-drawer" id="mob-drawer" aria-label="Mobile navigation" hidden>
        <div class="mob-nav-list">
          <a class="mob-nav-link" href="${href('index.html')}"${isCurrent('home')}>Home</a>

          <button type="button" class="mob-sub-toggle" aria-expanded="false" aria-controls="mob-about">
            <span>About Us</span>
            ${chevronSvg}
          </button>
          <div class="mob-sub-list" id="mob-about" hidden>
            <a href="${href('about/who-we-are.html')}"${isCurrent('who-we-are')}>Who We Are</a>
            <a href="${href('about/our-people-and-team.html')}"${isCurrent('our-people-and-team')}>Our People and Team</a>
            <a href="${href('about/our-partner.html')}"${isCurrent('our-partner')}>Our Partner</a>
          </div>

          <a class="mob-nav-link" href="${href('programs/index.html')}"${isCurrent('programs')}>Programs</a>
          <a class="mob-nav-link" href="${href('admissions/index.html')}"${isCurrent('admissions')}>Admissions</a>

          <button type="button" class="mob-sub-toggle" aria-expanded="false" aria-controls="mob-news">
            <span>News and Events</span>
            ${chevronSvg}
          </button>
          <div class="mob-sub-list" id="mob-news" hidden>
            <a href="${href('news-and-events/index.html')}"${isCurrent('news-and-events')}>Overview</a>
            <a href="${href('news-and-events/achievements.html')}"${isCurrent('achievements')}>Achievements</a>
            <a href="${href('news-and-events/gallery.html')}"${isCurrent('gallery')}>Gallery</a>
            <a href="${href('news-and-events/news.html')}"${isCurrent('news')}>News</a>
            <a href="${href('news-and-events/events.html')}"${isCurrent('events')}>Events</a>
          </div>

          <a class="mob-nav-link" href="${href('careers/index.html')}"${isCurrent('careers')}>Careers</a>
          <a class="mob-nav-link" href="${href('contact/index.html')}"${isCurrent('contact')}>Contact Us</a>
        </div>

        <div class="mob-cta-row">
          <a class="nav-cta-donate" href="${href('donate/index.html')}">Donate</a>
          <a class="nav-cta-enroll" href="${href('enroll/index.html')}">Enroll a Child</a>
        </div>
      </nav>
    </header>`;

  const footerMarkup = `
    <footer class="site-footer" role="contentinfo">
      <div class="footer-grid">
        <div>
          <div class="footer-brand-top">
            <a class="footer-brand" href="${href('index.html')}" aria-label="Ibadan School for the Deaf — Home">
              <img src="${href('assets/images/logo.png')}" alt="Ibadan School for the Deaf Logo" class="footer-logo" width="64" height="64" loading="lazy">
              <span class="footer-brand-text">
                <span class="footer-brand-name">Ibadan School<br>for the Deaf</span>
                <span class="footer-brand-tag">Est. 1963</span>
              </span>
            </a>
          </div>
          <p class="footer-desc">
            Founded in 1963 as a pioneer school for the deaf in Nigeria, dedicated to providing the best education possible for hearing-impaired children — intellectually, physically, emotionally, and socially.
          </p>
          <p class="footer-est">Ijokodo, Ibadan &middot; Oyo State, Nigeria</p>
          <div class="footer-social" aria-label="Official social media channels">
            <a class="footer-social-link" href="${socialLinks.facebook}" target="_blank" rel="noopener noreferrer" aria-label="Ibadan School for the Deaf on Facebook" title="Facebook">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z"/>
              </svg>
            </a>
            <a class="footer-social-link" href="${socialLinks.instagram}" aria-label="Ibadan School for the Deaf on Instagram" title="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
              </svg>
            </a>
            <a class="footer-social-link" href="${socialLinks.x}" aria-label="Ibadan School for the Deaf on X" title="X">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a class="footer-social-link" href="${socialLinks.youtube}" aria-label="Ibadan School for the Deaf on YouTube" title="YouTube">
              <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
        </div>

        <div class="footer-col">
          <h3>Quick Links</h3>
          <ul class="footer-links">
            <li><a href="${href('about/who-we-are.html')}">Who We Are</a></li>
            <li><a href="${href('about/our-people-and-team.html')}">Our People and Team</a></li>
            <li><a href="${href('about/our-partner.html')}">Our Partner</a></li>
            <li><a href="${href('admissions/index.html')}">Admissions</a></li>
            <li><a href="${href('news-and-events/achievements.html')}">Achievements</a></li>
            <li><a href="${href('news-and-events/gallery.html')}">Gallery</a></li>
            <li><a href="${href('careers/index.html')}">Careers</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h3>Programs &amp; Actions</h3>
          <ul class="footer-links">
            <li><a href="${href('programs/index.html#pre-primary')}">Pre-Primary Education</a></li>
            <li><a href="${href('programs/index.html#primary')}">Primary Education</a></li>
            <li><a href="${href('programs/index.html#secondary')}">Secondary Education</a></li>
            <li><a href="${href('programs/index.html#vocational')}">Vocational Training &amp; Boarding</a></li>
            <li><a href="${href('enroll/index.html')}">Enroll a Child</a></li>
            <li><a href="${href('donate/index.html')}">Support &amp; Donate</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h3>Contact Us</h3>
          <ul class="footer-contact-list">
            <li><strong>Campus:</strong> Polytechnic Road, Ijokodo Junction, Ibadan, Oyo State, Nigeria.</li>
            <li><strong>Postal:</strong> P.O. Box 1965, Dugbe, Ibadan.</li>
            <li><strong>Telephone:</strong> <a href="tel:+2348035851464">+234-803-585-1464</a>, <a href="tel:+2348060060642">+234-806-006-0642</a></li>
            <li><strong>Email:</strong> <a href="mailto:ibadanschoolforthedeaf@gmail.com">ibadanschoolforthedeaf@gmail.com</a><br><a href="mailto:info@ibadanschoolforthedeaf.com.ng">info@ibadanschoolforthedeaf.com.ng</a></li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <p>&copy; ${year} Ibadan School for the Deaf, Ijokodo, Ibadan. All rights reserved.</p>
        <div class="footer-bottom-links">
          <a href="${href('contact/index.html')}">Contact &amp; Directions</a>
          <a href="${href('donate/index.html')}">Donate</a>
          <a href="${href('enroll/index.html')}">Enroll a Child</a>
        </div>
      </div>
    </footer>

    <div class="reading-guide" id="reading-guide" aria-hidden="true"></div>

    <aside class="a11y-widget" aria-label="Accessibility preferences">
      <button type="button" class="a11y-fab-btn" id="a11y-toggle" aria-label="Open accessibility preferences" aria-expanded="false" aria-controls="a11y-panel">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" aria-hidden="true">
          <circle cx="12" cy="4.5" r="2"/>
          <path d="M4 9h16M12 9v11M9 20l3-6 3 6" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
      <div class="a11y-panel" id="a11y-panel" role="dialog" aria-label="Accessibility settings">
        <div class="a11y-panel-title">Accessibility Options</div>
        <div class="a11y-group-label">Text Size</div>
        <div class="a11y-font-row">
          <button type="button" class="a11y-fz-btn" data-fz="-1" aria-label="Decrease text size">A-</button>
          <span class="a11y-fz-val" id="a11y-fz-val" aria-live="polite">100%</span>
          <button type="button" class="a11y-fz-btn" data-fz="1" aria-label="Increase text size">A+</button>
          <button type="button" class="a11y-fz-btn" data-fz="0" aria-label="Reset text size">Reset</button>
        </div>
        <div class="a11y-group-label">Display &amp; Reading</div>
        <div class="a11y-grid">
          <button type="button" class="a11y-opt" data-a11y-mode="a11y-hc" aria-pressed="false">High Contrast</button>
          <button type="button" class="a11y-opt" data-a11y-mode="a11y-dm" aria-pressed="false">Dark Mode</button>
          <button type="button" class="a11y-opt" data-a11y-mode="a11y-dy" aria-pressed="false">Readable Font</button>
          <button type="button" class="a11y-opt" data-a11y-mode="a11y-ls" aria-pressed="false">Line Spacing</button>
          <button type="button" class="a11y-opt" data-a11y-mode="a11y-rg" aria-pressed="false">Reading Guide</button>
          <button type="button" class="a11y-opt" data-a11y-mode="a11y-rm" aria-pressed="false">Reduce Motion</button>
        </div>
        <button type="button" class="a11y-reset-btn" id="a11y-reset-all">Reset All Preferences</button>
      </div>
    </aside>

    <button type="button" class="back-top" id="back-top" aria-label="Back to top">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" aria-hidden="true">
        <path d="M18 15l-6-6-6 6" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>`;

  const headerHost = document.getElementById('site-header-mount');
  const footerHost = document.getElementById('site-footer-mount');

  if (headerHost) {
    headerHost.outerHTML = headerMarkup;
  } else {
    body.insertAdjacentHTML('afterbegin', headerMarkup);
  }

  if (footerHost) {
    footerHost.outerHTML = footerMarkup;
  } else {
    body.insertAdjacentHTML('beforeend', footerMarkup);
  }

  initHeroBackgroundFx();
})();

/**
 * Interactive Luminous Aurora Waves, Magnetic Constellation & Shockwave FX
 * Automatically enhances every .hero and .page-hero section across all pages.
 * Respects WCAG prefers-reduced-motion, Accessibility Reduce Motion, and High Contrast.
 */
function initHeroBackgroundFx() {
  'use strict';

  const heroes = Array.from(document.querySelectorAll('.hero, .page-hero'));
  if (!heroes.length) return;

  const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  const shouldReduceMotion = () =>
    reducedMotionQuery.matches ||
    document.body.classList.contains('a11y-rm') ||
    document.body.classList.contains('a11y-hc');

  heroes.forEach((hero) => {
    if (hero.querySelector('.hero-fx-canvas')) return;

    // 1. Layered CSS volumetric aurora & light-beam backdrop
    const auroraLayer = document.createElement('div');
    auroraLayer.className = 'hero-fx-layer';
    auroraLayer.setAttribute('aria-hidden', 'true');
    auroraLayer.innerHTML =
      '<span class="hero-aurora-orb hero-aurora-orb--1"></span>' +
      '<span class="hero-aurora-orb hero-aurora-orb--2"></span>' +
      '<span class="hero-aurora-orb hero-aurora-orb--3"></span>' +
      '<span class="hero-fx-beam"></span>';

    // 2. Interactive 60fps HTML5 Canvas for waves, constellations, meteors & shockwaves
    const canvas = document.createElement('canvas');
    canvas.className = 'hero-fx-canvas';
    canvas.setAttribute('aria-hidden', 'true');

    hero.insertBefore(canvas, hero.firstChild);
    hero.insertBefore(auroraLayer, canvas);

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let dpr = 1;
    let particles = [];
    const ripples = [];
    const meteors = [];
    const pointer = { x: 0, y: 0, active: false };
    let rafId = null;
    let isVisible = true;
    let time = 0;
    let nextMeteorAt = 1.6 + Math.random() * 2.2;

    const palette = [
      'rgba(147, 197, 253,', // Sky blue #93C5FD
      'rgba(96, 165, 250,',  // Electric glow #60A5FA
      'rgba(59, 130, 246,',  // Bright royal #3B82F6
      'rgba(232, 240, 254,'  // Crisp ice highlight #E8F0FE
    ];

    const seedParticles = () => {
      const isCompact = width < 700;
      const targetCount = Math.min(isCompact ? 26 : 58, Math.max(20, Math.round((width * height) / 14500)));
      particles = Array.from({ length: targetCount }, (_, i) => {
        const depth = 0.45 + Math.random() * 0.95;
        return {
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.65 * depth,
          vy: (Math.random() - 0.5) * 0.45 * depth,
          r: (1.1 + Math.random() * 2.1) * depth,
          phase: Math.random() * Math.PI * 2,
          color: palette[i % palette.length],
          depth
        };
      });
    };

    const resize = () => {
      const rect = hero.getBoundingClientRect();
      width = Math.max(1, Math.round(rect.width));
      height = Math.max(1, Math.round(rect.height));
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seedParticles();
      if (shouldReduceMotion()) drawFrame(0.016, true);
    };

    const spawnMeteor = () => {
      const startX = width * (0.15 + Math.random() * 0.85);
      const speed = 7 + Math.random() * 5;
      meteors.push({
        x: startX,
        y: -12,
        vx: -speed * (0.95 + Math.random() * 0.35),
        vy: speed * (0.42 + Math.random() * 0.25),
        len: 75 + Math.random() * 75,
        life: 1
      });
    };

    const drawWaves = (t) => {
      const waveConfigs = [
        { amp: height * 0.11, freq: 0.0052, speed: 1.35, yRatio: 0.62, alpha: 0.26, width: 2.2 },
        { amp: height * 0.085, freq: 0.0078, speed: -1.05, yRatio: 0.44, alpha: 0.2, width: 1.6 },
        { amp: height * 0.13, freq: 0.0038, speed: 0.82, yRatio: 0.78, alpha: 0.17, width: 2.6 }
      ];

      ctx.save();
      ctx.globalCompositeOperation = 'lighter';

      waveConfigs.forEach((w, idx) => {
        const grad = ctx.createLinearGradient(0, 0, width, 0);
        grad.addColorStop(0, 'rgba(0, 90, 224, 0)');
        grad.addColorStop(0.25, `rgba(96, 165, 250, ${w.alpha})`);
        grad.addColorStop(0.55, `rgba(147, 197, 253, ${w.alpha * 1.25})`);
        grad.addColorStop(0.8, `rgba(37, 99, 235, ${w.alpha})`);
        grad.addColorStop(1, 'rgba(0, 90, 224, 0)');

        ctx.beginPath();
        const step = width > 900 ? 18 : 14;
        for (let x = 0; x <= width + step; x += step) {
          const yBase = height * w.yRatio;
          const y =
            yBase +
            Math.sin(x * w.freq + t * w.speed + idx * 1.8) * w.amp +
            Math.cos(x * w.freq * 0.55 - t * w.speed * 0.7) * (w.amp * 0.42);
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.strokeStyle = grad;
        ctx.lineWidth = w.width;
        ctx.stroke();
      });

      ctx.restore();
    };

    const drawFrame = (dt, isStatic = false) => {
      ctx.clearRect(0, 0, width, height);
      if (!isStatic) time += dt;

      // Flowing glowing energy waves
      drawWaves(time);

      // Interactive pointer aura
      if (pointer.active && !isStatic) {
        const aura = ctx.createRadialGradient(pointer.x, pointer.y, 0, pointer.x, pointer.y, 170);
        aura.addColorStop(0, 'rgba(147, 197, 253, 0.24)');
        aura.addColorStop(0.45, 'rgba(0, 90, 224, 0.12)');
        aura.addColorStop(1, 'rgba(0, 90, 224, 0)');
        ctx.fillStyle = aura;
        ctx.beginPath();
        ctx.arc(pointer.x, pointer.y, 170, 0, Math.PI * 2);
        ctx.fill();
      }

      const linkDist = width < 700 ? 105 : 140;
      const pointerDist = 175;

      // Update & render glowing constellation particles
      for (let i = 0; i < particles.length; i += 1) {
        const p = particles[i];
        if (!isStatic) {
          p.x += p.vx + Math.sin(time * 0.8 + p.phase) * 0.14;
          p.y += p.vy + Math.cos(time * 0.7 + p.phase) * 0.11;

          // Gentle magnetic attraction & swirl near cursor
          if (pointer.active) {
            const dx = pointer.x - p.x;
            const dy = pointer.y - p.y;
            const distSq = dx * dx + dy * dy;
            if (distSq > 25 && distSq < pointerDist * pointerDist) {
              const dist = Math.sqrt(distSq);
              const pull = (1 - dist / pointerDist) * 0.045;
              p.vx += (dx / dist) * pull - (dy / dist) * pull * 0.45;
              p.vy += (dy / dist) * pull + (dx / dist) * pull * 0.45;
            }
          }

          // Smooth speed damping
          const speed = Math.hypot(p.vx, p.vy);
          const maxSpeed = 1.65 * p.depth;
          if (speed > maxSpeed) {
            p.vx *= 0.96;
            p.vy *= 0.96;
          }

          // Seamless edge wrap
          if (p.x < -16) p.x = width + 16;
          if (p.x > width + 16) p.x = -16;
          if (p.y < -16) p.y = height + 16;
          if (p.y > height + 16) p.y = -16;
        }

        // Synaptic links between neighboring particles
        for (let j = i + 1; j < particles.length; j += 1) {
          const q = particles[j];
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const d = Math.hypot(dx, dy);
          if (d < linkDist) {
            const alpha = (1 - d / linkDist) * 0.36;
            ctx.strokeStyle = `rgba(147, 197, 253, ${alpha.toFixed(3)})`;
            ctx.lineWidth = 0.85;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.stroke();
          }
        }

        // Bright energy filaments tethered to pointer
        if (pointer.active && !isStatic) {
          const dx = p.x - pointer.x;
          const dy = p.y - pointer.y;
          const d = Math.hypot(dx, dy);
          if (d < pointerDist) {
            const alpha = (1 - d / pointerDist) * 0.62;
            ctx.strokeStyle = `rgba(191, 219, 254, ${alpha.toFixed(3)})`;
            ctx.lineWidth = 1.1;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(pointer.x, pointer.y);
            ctx.stroke();
          }
        }

        // Twinkling glowing star node
        const twinkle = 0.55 + 0.45 * Math.sin(time * 2.4 + p.phase);
        ctx.fillStyle = `${p.color} ${(0.55 + twinkle * 0.42).toFixed(3)})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();

        if (p.r > 2.0) {
          ctx.fillStyle = `${p.color} ${(0.16 * twinkle).toFixed(3)})`;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r * 3.1, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      if (isStatic) return;

      // Occasional shooting starlight meteors
      if (time >= nextMeteorAt) {
        spawnMeteor();
        nextMeteorAt = time + 2.4 + Math.random() * 3.2;
      }

      for (let m = meteors.length - 1; m >= 0; m -= 1) {
        const met = meteors[m];
        met.x += met.vx;
        met.y += met.vy;
        met.life -= 0.018;

        const tailX = met.x - met.vx * (met.len / 11);
        const tailY = met.y - met.vy * (met.len / 11);
        const grad = ctx.createLinearGradient(met.x, met.y, tailX, tailY);
        grad.addColorStop(0, `rgba(232, 240, 254, ${Math.max(0, met.life).toFixed(3)})`);
        grad.addColorStop(0.35, `rgba(96, 165, 250, ${Math.max(0, met.life * 0.65).toFixed(3)})`);
        grad.addColorStop(1, 'rgba(0, 90, 224, 0)');

        ctx.strokeStyle = grad;
        ctx.lineWidth = 2;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(met.x, met.y);
        ctx.lineTo(tailX, tailY);
        ctx.stroke();

        if (met.life <= 0 || met.x < -160 || met.y > height + 160) {
          meteors.splice(m, 1);
        }
      }

      // Click shockwave sonar rings
      for (let r = ripples.length - 1; r >= 0; r -= 1) {
        const rip = ripples[r];
        rip.radius += 5.2;
        rip.alpha *= 0.945;

        ctx.strokeStyle = `rgba(147, 197, 253, ${rip.alpha.toFixed(3)})`;
        ctx.lineWidth = 2.2;
        ctx.beginPath();
        ctx.arc(rip.x, rip.y, rip.radius, 0, Math.PI * 2);
        ctx.stroke();

        if (rip.radius > 16) {
          ctx.strokeStyle = `rgba(96, 165, 250, ${(rip.alpha * 0.5).toFixed(3)})`;
          ctx.lineWidth = 1.2;
          ctx.beginPath();
          ctx.arc(rip.x, rip.y, rip.radius * 0.66, 0, Math.PI * 2);
          ctx.stroke();
        }

        if (rip.alpha < 0.02) ripples.splice(r, 1);
      }
    };

    let lastTs = 0;
    const loop = (ts) => {
      if (!isVisible || document.hidden || shouldReduceMotion()) {
        rafId = null;
        return;
      }
      const dt = lastTs ? Math.min((ts - lastTs) / 1000, 0.05) : 0.016;
      lastTs = ts;
      drawFrame(dt, false);
      rafId = requestAnimationFrame(loop);
    };

    const syncLoopState = () => {
      if (shouldReduceMotion()) {
        if (rafId) {
          cancelAnimationFrame(rafId);
          rafId = null;
        }
        drawFrame(0.016, true);
        return;
      }
      if (isVisible && !document.hidden && !rafId) {
        lastTs = 0;
        rafId = requestAnimationFrame(loop);
      }
    };

    hero.addEventListener('pointermove', (event) => {
      const rect = hero.getBoundingClientRect();
      pointer.x = event.clientX - rect.left;
      pointer.y = event.clientY - rect.top;
      pointer.active = true;
    });

    hero.addEventListener('pointerleave', () => {
      pointer.active = false;
    });

    hero.addEventListener('click', (event) => {
      if (shouldReduceMotion()) return;
      const rect = hero.getBoundingClientRect();
      const cx = event.clientX - rect.left;
      const cy = event.clientY - rect.top;
      ripples.push({ x: cx, y: cy, radius: 8, alpha: 0.82 });

      // Outward kinetic pulse on nearby particles
      particles.forEach((p) => {
        const dx = p.x - cx;
        const dy = p.y - cy;
        const dist = Math.hypot(dx, dy);
        if (dist > 1 && dist < 210) {
          const boost = (1 - dist / 210) * 3.2;
          p.vx += (dx / dist) * boost;
          p.vy += (dy / dist) * boost;
        }
      });
    });

    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver(
        (entries) => {
          isVisible = entries[0] ? entries[0].isIntersecting : true;
          syncLoopState();
        },
        { threshold: 0.02 }
      );
      io.observe(hero);
    }

    if ('ResizeObserver' in window) {
      const ro = new ResizeObserver(() => resize());
      ro.observe(hero);
    } else {
      window.addEventListener('resize', resize);
    }

    document.addEventListener('visibilitychange', syncLoopState);
    if (typeof reducedMotionQuery.addEventListener === 'function') {
      reducedMotionQuery.addEventListener('change', syncLoopState);
    }

    // React immediately when user toggles Reduce Motion or High Contrast in Accessibility Toolbar
    const bodyObserver = new MutationObserver(syncLoopState);
    bodyObserver.observe(document.body, { attributes: true, attributeFilter: ['class'] });

    resize();
    syncLoopState();
  });
}

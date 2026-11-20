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

  const chevronSvg = `
    <svg class="nav-caret" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2.2" aria-hidden="true">
      <path d="M5 7.5L10 12.5L15 7.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`;

  const headerMarkup = `
    <a class="skip-link" href="#main-content">Skip to main content</a>

    <div class="top-bar" role="region" aria-label="School contact summary">
      <div class="top-bar-inner">
        <div class="top-bar-contact">
          <a href="tel:+2348035851464" aria-label="Call Ibadan School for the Deaf on 08035851464">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            <span>08035851464</span>
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
          <img src="${href('assets/images/logo.png')}" alt="Ibadan School for the Deaf Logo" class="nav-logo" width="70" height="70">
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
            <a href="${href('index.html')}" aria-label="Ibadan School for the Deaf — Home">
              <img src="${href('assets/images/logo.png')}" alt="Ibadan School for the Deaf Logo" class="footer-logo" width="72" height="72" loading="lazy">
            </a>
          </div>
          <p class="footer-desc">
            Founded in 1963 as a pioneer school for the deaf in Nigeria, dedicated to providing the best education possible for hearing-impaired children — intellectually, physically, emotionally, and socially.
          </p>
          <p class="footer-est">Ijokodo, Ibadan &middot; Oyo State, Nigeria</p>
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
            <li><strong>Telephone:</strong> <a href="tel:+2348035851464">08035851464</a>, <a href="tel:+2348060060642">+234-806-006-0642</a></li>
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
})();

/**
 * Ibadan School for the Deaf — Core Interactive Behaviour (ES6+ Vanilla JS)
 * Accessible dropdowns, mobile navigation, WCAG 2.2 AA preferences toolbar,
 * scroll reveals, gallery filters + keyboard lightbox, testimonials carousel,
 * FAQ accordions, and honest client-side form validation.
 */
function bootApp() {
  'use strict';

  document.documentElement.classList.add('js-ready');

  initHeaderAndDropdowns();
  initMobileNavigation();
  initAccessibilityToolbar();
  initScrollUtilities();
  initGalleryAndLightbox();
  initCarousel();
  initAccordions();
  initValidatedForms();
  initCopyButtons();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', bootApp);
} else {
  bootApp();
}

/* ==========================================================================
   1. STICKY HEADER & ACCESSIBLE DESKTOP DROPDOWNS
   ========================================================================== */
function initHeaderAndDropdowns() {
  const header = document.getElementById('site-header');
  const dropdownItems = Array.from(document.querySelectorAll('.nav-item.has-dropdown'));
  const closeTimers = new WeakMap();

  const clearTimer = (item) => {
    const id = closeTimers.get(item);
    if (id) {
      clearTimeout(id);
      closeTimers.delete(item);
    }
  };

  const setItemOpen = (item, open, pinned = false) => {
    clearTimer(item);
    item.classList.toggle('is-open', open);
    item.dataset.pinned = open && pinned ? 'true' : 'false';
    const btn = item.querySelector('.nav-dropdown-btn');
    if (btn) btn.setAttribute('aria-expanded', String(open));
  };

  const closeAllDropdowns = (exceptItem = null) => {
    dropdownItems.forEach((item) => {
      if (item === exceptItem) return;
      setItemOpen(item, false, false);
    });
  };

  dropdownItems.forEach((item) => {
    const btn = item.querySelector('.nav-dropdown-btn');
    const menuLinks = Array.from(item.querySelectorAll('.dropdown-link'));
    if (!btn) return;

    // Mouse hover open with invisible bridge + 150ms leave grace delay
    item.addEventListener('pointerenter', (event) => {
      if (event.pointerType !== 'mouse') return;
      clearTimer(item);
      if (!item.classList.contains('is-open')) {
        closeAllDropdowns(item);
        setItemOpen(item, true, false);
      }
    });

    item.addEventListener('pointerleave', (event) => {
      if (event.pointerType !== 'mouse') return;
      if (item.dataset.pinned === 'true') return;
      clearTimer(item);
      const timerId = setTimeout(() => {
        if (item.dataset.pinned !== 'true') {
          setItemOpen(item, false, false);
        }
      }, 150);
      closeTimers.set(item, timerId);
    });

    // Click / tap / keyboard activation cleanly toggles or pins open
    btn.addEventListener('click', (event) => {
      event.preventDefault();
      event.stopPropagation();
      const isOpen = item.classList.contains('is-open');
      const isPinned = item.dataset.pinned === 'true';

      if (isOpen && isPinned) {
        setItemOpen(item, false, false);
      } else if (isOpen && !isPinned) {
        // Opened by hover, user clicked it -> keep it open if pointer, or toggle cleanly
        setItemOpen(item, true, true);
      } else {
        closeAllDropdowns(item);
        setItemOpen(item, true, true);
      }
    });

    btn.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowDown') {
        event.preventDefault();
        closeAllDropdowns(item);
        setItemOpen(item, true, true);
        if (menuLinks[0]) menuLinks[0].focus();
      } else if (event.key === 'ArrowUp') {
        event.preventDefault();
        closeAllDropdowns(item);
        setItemOpen(item, true, true);
        if (menuLinks[menuLinks.length - 1]) menuLinks[menuLinks.length - 1].focus();
      } else if (event.key === 'Escape') {
        closeAllDropdowns();
        btn.focus();
      }
    });

    menuLinks.forEach((link, idx) => {
      link.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
          event.preventDefault();
          closeAllDropdowns();
          btn.focus();
        } else if (event.key === 'ArrowDown') {
          event.preventDefault();
          menuLinks[(idx + 1) % menuLinks.length].focus();
        } else if (event.key === 'ArrowUp') {
          event.preventDefault();
          menuLinks[(idx - 1 + menuLinks.length) % menuLinks.length].focus();
        }
      });
    });

    // Close when keyboard focus leaves the dropdown item completely
    item.addEventListener('focusout', (event) => {
      if (!event.relatedTarget || !item.contains(event.relatedTarget)) {
        setItemOpen(item, false, false);
      }
    });
  });

  document.addEventListener('click', (event) => {
    if (!event.target.closest('.nav-item.has-dropdown')) {
      closeAllDropdowns();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeAllDropdowns();
    }
  });

  if (header) {
    const onScroll = () => {
      header.classList.toggle('is-scrolled', window.scrollY > 12);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }
}

/* ==========================================================================
   2. MOBILE DRAWER & SUBMENU ACCORDIONS
   ========================================================================== */
function initMobileNavigation() {
  const header = document.getElementById('site-header');
  const toggleBtn = document.getElementById('menu-toggle');
  const drawer = document.getElementById('mob-drawer');
  if (!toggleBtn || !drawer) return;

  const setSubOpen = (subBtn, open) => {
    const targetId = subBtn.getAttribute('aria-controls');
    const panel = targetId ? document.getElementById(targetId) : null;
    if (!panel) return;
    subBtn.setAttribute('aria-expanded', String(open));
    panel.hidden = !open;
    panel.classList.toggle('is-open', open);
  };

  const setOpen = (open) => {
    toggleBtn.setAttribute('aria-expanded', String(open));
    toggleBtn.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
    drawer.classList.toggle('is-open', open);
    drawer.hidden = !open;

    if (open) {
      // Auto-expand submenu containing the active page for clarity
      drawer.querySelectorAll('.mob-sub-toggle').forEach((subBtn) => {
        const targetId = subBtn.getAttribute('aria-controls');
        const panel = targetId ? document.getElementById(targetId) : null;
        if (panel && panel.querySelector('[aria-current="page"]')) {
          setSubOpen(subBtn, true);
        }
      });
    }
  };

  toggleBtn.addEventListener('click', (event) => {
    event.stopPropagation();
    setOpen(drawer.hidden);
  });

  drawer.querySelectorAll('.mob-sub-toggle').forEach((subBtn) => {
    subBtn.addEventListener('click', (event) => {
      event.preventDefault();
      event.stopPropagation();
      const expanded = subBtn.getAttribute('aria-expanded') === 'true';
      setSubOpen(subBtn, !expanded);
    });
  });

  document.addEventListener('click', (event) => {
    if (!drawer.hidden && header && !header.contains(event.target)) {
      setOpen(false);
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !drawer.hidden) {
      setOpen(false);
      toggleBtn.focus();
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 1120 && !drawer.hidden) {
      setOpen(false);
    }
  });
}

/* ==========================================================================
   3. WCAG 2.2 AA ACCESSIBILITY TOOLBAR (Persisted in localStorage)
   ========================================================================== */
function initAccessibilityToolbar() {
  const toggleBtn = document.getElementById('a11y-toggle');
  const panel = document.getElementById('a11y-panel');
  const fzVal = document.getElementById('a11y-fz-val');
  const resetAllBtn = document.getElementById('a11y-reset-all');
  const readingGuide = document.getElementById('reading-guide');
  if (!toggleBtn || !panel) return;

  const STORAGE_KEY = 'isd_a11y_prefs_v1';
  const defaultState = { fz: 16, modes: {} };
  let state = loadState();

  function loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return { fz: 16, modes: {} };
      const parsed = JSON.parse(raw);
      return {
        fz: typeof parsed.fz === 'number' ? Math.min(22, Math.max(14, parsed.fz)) : 16,
        modes: parsed.modes && typeof parsed.modes === 'object' ? parsed.modes : {}
      };
    } catch {
      return { fz: 16, modes: {} };
    }
  }

  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      /* ignore storage errors in restricted browsing modes */
    }
  }

  function applyState() {
    document.documentElement.style.setProperty('--fz-base', `${state.fz}px`);
    if (fzVal) {
      fzVal.textContent = `${Math.round((state.fz / 16) * 100)}%`;
    }
    panel.querySelectorAll('[data-a11y-mode]').forEach((btn) => {
      const mode = btn.dataset.a11yMode;
      const active = Boolean(state.modes[mode]);
      document.body.classList.toggle(mode, active);
      btn.setAttribute('aria-pressed', String(active));
    });
  }

  applyState();

  const setPanelOpen = (open) => {
    panel.classList.toggle('is-open', open);
    toggleBtn.setAttribute('aria-expanded', String(open));
    toggleBtn.setAttribute('aria-label', open ? 'Close accessibility preferences' : 'Open accessibility preferences');
  };

  toggleBtn.addEventListener('click', (event) => {
    event.stopPropagation();
    setPanelOpen(!panel.classList.contains('is-open'));
  });

  panel.querySelectorAll('[data-fz]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const delta = Number(btn.dataset.fz);
      state.fz = delta === 0 ? 16 : Math.min(22, Math.max(14, state.fz + delta));
      applyState();
      saveState();
    });
  });

  panel.querySelectorAll('[data-a11y-mode]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const mode = btn.dataset.a11yMode;
      const next = !state.modes[mode];
      // High Contrast and Dark Mode are mutually exclusive for clear contrast predictability
      if (mode === 'a11y-hc' && next) state.modes['a11y-dm'] = false;
      if (mode === 'a11y-dm' && next) state.modes['a11y-hc'] = false;
      state.modes[mode] = next;
      applyState();
      saveState();
    });
  });

  if (resetAllBtn) {
    resetAllBtn.addEventListener('click', () => {
      state = { fz: defaultState.fz, modes: {} };
      applyState();
      saveState();
    });
  }

  if (readingGuide) {
    document.addEventListener('mousemove', (event) => {
      if (document.body.classList.contains('a11y-rg')) {
        readingGuide.style.transform = `translateY(${event.clientY - 23}px)`;
      }
    }, { passive: true });
  }

  document.addEventListener('click', (event) => {
    if (panel.classList.contains('is-open') && !event.target.closest('.a11y-widget')) {
      setPanelOpen(false);
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && panel.classList.contains('is-open')) {
      setPanelOpen(false);
      toggleBtn.focus();
    }
  });
}

/* ==========================================================================
   4. SCROLL REVEALS & BACK-TO-TOP
   ========================================================================== */
function initScrollUtilities() {
  const backTop = document.getElementById('back-top');
  if (backTop) {
    const onScroll = () => {
      backTop.classList.toggle('is-visible', window.scrollY > 420);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    backTop.addEventListener('click', () => {
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
        document.body.classList.contains('a11y-rm');
      window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' });
    });
  }

  const revealEls = document.querySelectorAll('.reveal');
  if (!revealEls.length) return;

  if (!('IntersectionObserver' in window)) {
    revealEls.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
  );

  revealEls.forEach((el) => observer.observe(el));
}

/* ==========================================================================
   5. GALLERY CATEGORY FILTERS & KEYBOARD-ACCESSIBLE LIGHTBOX
   ========================================================================== */
function initGalleryAndLightbox() {
  const filterBtns = Array.from(document.querySelectorAll('[data-gallery-filter]'));
  const galleryGrid = document.querySelector('[data-gallery-grid]');
  const cards = Array.from(document.querySelectorAll('.gallery-card'));
  const triggers = Array.from(document.querySelectorAll('[data-lightbox-src]'));
  const loadMoreBtn = document.getElementById('gallery-load-more');
  const showAllBtn = document.getElementById('gallery-show-all');
  const loadWrap = loadMoreBtn ? loadMoreBtn.closest('.gallery-load-wrap') : null;
  const countEl = document.getElementById('gallery-count');

  const pageSize = galleryGrid && galleryGrid.dataset.pageSize
    ? parseInt(galleryGrid.dataset.pageSize, 10)
    : 0;

  let activeCategory = 'all';
  let visibleLimit = pageSize > 0 ? pageSize : cards.length;

  function applyGalleryView() {
    if (!cards.length) return;
    const matched = cards.filter((card) => (
      activeCategory === 'all' || card.dataset.category === activeCategory
    ));
    const shownCount = pageSize > 0 ? Math.min(visibleLimit, matched.length) : matched.length;
    const shownSet = new Set(matched.slice(0, shownCount));

    cards.forEach((card) => {
      card.hidden = !shownSet.has(card);
    });

    if (countEl) {
      countEl.textContent = `Showing ${shownCount} of ${matched.length} photographs`;
    }
    const remaining = matched.length - shownCount;
    if (loadMoreBtn) {
      loadMoreBtn.hidden = remaining <= 0;
      if (remaining > 0) {
        const nextBatch = Math.min(pageSize || remaining, remaining);
        loadMoreBtn.textContent = `Load ${nextBatch} More Photos (${remaining} remaining)`;
      }
    }
    if (showAllBtn) {
      showAllBtn.hidden = remaining <= 0;
    }
    if (loadWrap) {
      loadWrap.hidden = remaining <= 0;
    }
  }

  if (filterBtns.length && cards.length) {
    filterBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        activeCategory = btn.dataset.galleryFilter || 'all';
        visibleLimit = pageSize > 0 ? pageSize : cards.length;
        filterBtns.forEach((b) => b.setAttribute('aria-pressed', String(b === btn)));
        applyGalleryView();
      });
    });
  }

  if (loadMoreBtn && pageSize > 0) {
    loadMoreBtn.addEventListener('click', () => {
      visibleLimit += pageSize;
      applyGalleryView();
    });
  }

  if (showAllBtn && pageSize > 0) {
    showAllBtn.addEventListener('click', () => {
      visibleLimit = cards.length;
      applyGalleryView();
    });
  }

  if (pageSize > 0) {
    applyGalleryView();
  }

  if (!triggers.length) return;

  // Create reusable lightbox dialog once per page that has lightbox triggers
  const lightbox = document.createElement('div');
  lightbox.className = 'lightbox';
  lightbox.setAttribute('role', 'dialog');
  lightbox.setAttribute('aria-modal', 'true');
  lightbox.setAttribute('aria-label', 'Photograph preview');
  lightbox.hidden = true;
  lightbox.innerHTML = `
    <div class="lightbox-dialog">
      <img class="lightbox-img" id="lb-img" src="" alt="">
      <p class="lightbox-caption" id="lb-cap"></p>
      <div class="lightbox-controls">
        <button type="button" class="lightbox-btn" id="lb-prev" aria-label="Previous photograph">&larr; Prev</button>
        <span class="lightbox-counter" id="lb-counter" aria-live="polite"></span>
        <button type="button" class="lightbox-btn" id="lb-next" aria-label="Next photograph">Next &rarr;</button>
        <button type="button" class="lightbox-btn" id="lb-close" aria-label="Close photograph preview">Close &times;</button>
      </div>
    </div>`;
  document.body.appendChild(lightbox);

  const imgEl = lightbox.querySelector('#lb-img');
  const capEl = lightbox.querySelector('#lb-cap');
  const counterEl = lightbox.querySelector('#lb-counter');
  const prevBtn = lightbox.querySelector('#lb-prev');
  const nextBtn = lightbox.querySelector('#lb-next');
  const closeBtn = lightbox.querySelector('#lb-close');

  let activeList = [];
  let currentIndex = 0;
  let lastTrigger = null;

  function visibleTriggers() {
    return triggers.filter((t) => {
      const parentCard = t.closest('.gallery-card');
      return !parentCard || !parentCard.hidden;
    });
  }

  function renderSlide() {
    const item = activeList[currentIndex];
    if (!item) return;
    imgEl.src = item.dataset.lightboxSrc;
    imgEl.alt = item.dataset.lightboxAlt || '';
    capEl.textContent = item.dataset.lightboxCaption || item.dataset.lightboxAlt || '';
    counterEl.textContent = `${currentIndex + 1} / ${activeList.length}`;
  }

  function openLightbox(trigger) {
    activeList = visibleTriggers();
    currentIndex = Math.max(0, activeList.indexOf(trigger));
    lastTrigger = trigger;
    renderSlide();
    lightbox.hidden = false;
    requestAnimationFrame(() => lightbox.classList.add('is-open'));
    closeBtn.focus();
  }

  function closeLightbox() {
    lightbox.classList.remove('is-open');
    lightbox.hidden = true;
    if (lastTrigger) lastTrigger.focus();
  }

  triggers.forEach((trigger) => {
    trigger.addEventListener('click', () => openLightbox(trigger));
  });

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + activeList.length) % activeList.length;
    renderSlide();
  });

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % activeList.length;
    renderSlide();
  });

  closeBtn.addEventListener('click', closeLightbox);

  lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) closeLightbox();
  });

  document.addEventListener('keydown', (event) => {
    if (lightbox.hidden) return;
    if (event.key === 'Escape') {
      closeLightbox();
    } else if (event.key === 'ArrowLeft') {
      currentIndex = (currentIndex - 1 + activeList.length) % activeList.length;
      renderSlide();
    } else if (event.key === 'ArrowRight') {
      currentIndex = (currentIndex + 1) % activeList.length;
      renderSlide();
    }
  });
}

/* ==========================================================================
   6. ACCESSIBLE ALUMNI & COMMUNITY VOICES CAROUSEL
   ========================================================================== */
function initCarousel() {
  const wrap = document.querySelector('[data-carousel]');
  if (!wrap) return;

  const track = wrap.querySelector('[data-carousel-track]');
  const slides = Array.from(wrap.querySelectorAll('[data-carousel-slide]'));
  const prevBtn = wrap.querySelector('[data-carousel-prev]');
  const nextBtn = wrap.querySelector('[data-carousel-next]');
  const dots = Array.from(wrap.querySelectorAll('[data-carousel-dot]'));
  if (!track || slides.length <= 1) return;

  let index = 0;

  function goTo(nextIdx) {
    index = (nextIdx + slides.length) % slides.length;
    track.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach((dot, i) => {
      dot.setAttribute('aria-selected', String(i === index));
    });
  }

  if (prevBtn) prevBtn.addEventListener('click', () => goTo(index - 1));
  if (nextBtn) nextBtn.addEventListener('click', () => goTo(index + 1));

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => goTo(i));
  });
}

/* ==========================================================================
   7. ACCESSIBLE FAQ ACCORDIONS
   ========================================================================== */
function initAccordions() {
  document.querySelectorAll('.faq-trigger').forEach((trigger) => {
    trigger.addEventListener('click', () => {
      const panelId = trigger.getAttribute('aria-controls');
      const panel = panelId ? document.getElementById(panelId) : null;
      if (!panel) return;
      const isExpanded = trigger.getAttribute('aria-expanded') === 'true';
      trigger.setAttribute('aria-expanded', String(!isExpanded));
      panel.hidden = isExpanded;
    });
  });
}

/* ==========================================================================
   8. HONEST FRONTEND FORM VALIDATION (NO SIMULATED SUBMISSIONS)
   ========================================================================== */
function initValidatedForms() {
  const forms = document.querySelectorAll('form[data-validate-form]');
  forms.forEach((form) => {
    const feedback = form.querySelector('.form-feedback');
    const formTitle = form.dataset.formTitle || 'School Form';

    form.addEventListener('submit', (event) => {
      event.preventDefault();
      let firstInvalid = null;

      const fields = Array.from(form.querySelectorAll('input, select, textarea'));
      fields.forEach((field) => {
        const errorEl = form.querySelector(`#${field.id}-error`);
        const value = field.value.trim();
        let message = '';

        if (field.hasAttribute('required') && !value) {
          message = 'This field is required.';
        } else if (field.type === 'email' && value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          message = 'Please enter a valid email address.';
        } else if (field.type === 'tel' && value && value.replace(/[^0-9+]/g, '').length < 7) {
          message = 'Please enter a valid telephone number.';
        }

        if (message) {
          field.setAttribute('aria-invalid', 'true');
          if (errorEl) errorEl.textContent = message;
          if (!firstInvalid) firstInvalid = field;
        } else {
          field.removeAttribute('aria-invalid');
          if (errorEl) errorEl.textContent = '';
        }
      });

      if (firstInvalid) {
        if (feedback) {
          feedback.className = 'form-feedback is-visible is-error';
          feedback.innerHTML = '<strong>Please review the highlighted fields</strong> before continuing.';
        }
        firstInvalid.focus();
        return;
      }

      // Form inputs are valid — DO NOT simulate backend storage!
      // Clearly inform the visitor that backend submission integration is pending
      // and provide an honest mailto draft option to the school's verified email.
      const summaryLines = fields
        .filter((f) => f.name && f.value.trim())
        .map((f) => {
          const label = form.querySelector(`label[for="${f.id}"]`);
          const cleanLabel = label ? label.textContent.replace(/\*/g, '').trim() : f.name;
          return `${cleanLabel}: ${f.value.trim()}`;
        });

      const mailSubject = encodeURIComponent(`${formTitle} — Ibadan School for the Deaf Website`);
      const mailBody = encodeURIComponent(summaryLines.join('\n'));
      const mailtoHref = `mailto:ibadanschoolforthedeaf@gmail.com?subject=${mailSubject}&body=${mailBody}`;

      if (feedback) {
        feedback.className = 'form-feedback is-visible is-pending';
        feedback.innerHTML = `
          <p><strong>Validation passed — online submission backend pending integration.</strong></p>
          <p style="margin-top:0.45rem;">This static website does not store or transmit form entries to a server yet. No data has been submitted automatically.</p>
          <p style="margin-top:0.65rem;">To send your details directly to Ibadan School for the Deaf right now, you can open a pre-filled email draft or call <strong>+234-803-585-1464</strong> / <strong>+234-806-006-0642</strong>:</p>
          <p style="margin-top:0.75rem;">
            <a class="btn btn-primary btn-sm" href="${mailtoHref}">Open Pre-Filled Email Draft</a>
          </p>`;
        feedback.focus();
      }
    });
  });
}

/* ==========================================================================
   9. ACCESSIBLE ONE-CLICK COPY BUTTONS (Bank Account Numbers)
   ========================================================================== */
function initCopyButtons() {
  const buttons = document.querySelectorAll('[data-copy-value]');
  if (!buttons.length) return;

  const fallbackCopy = (text) => {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.setAttribute('readonly', '');
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    let ok = false;
    try {
      ok = document.execCommand('copy');
    } catch {
      ok = false;
    }
    document.body.removeChild(ta);
    return ok;
  };

  buttons.forEach((btn) => {
    const origLabel = btn.textContent.trim();
    const statusId = btn.dataset.copyStatus;
    const statusEl = statusId ? document.getElementById(statusId) : null;
    let resetTimer = null;

    const announce = (copied, value) => {
      if (resetTimer) clearTimeout(resetTimer);
      if (copied) {
        btn.textContent = 'Account Number Copied';
        if (statusEl) statusEl.textContent = `Account number ${value} copied to clipboard.`;
      } else if (statusEl) {
        statusEl.textContent = `Please copy manually: ${value}`;
      }
      resetTimer = setTimeout(() => {
        btn.textContent = origLabel;
        if (statusEl) statusEl.textContent = '';
      }, 3000);
    };

    btn.addEventListener('click', () => {
      const value = btn.dataset.copyValue || '';
      if (!value) return;

      if (navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
        navigator.clipboard.writeText(value)
          .then(() => announce(true, value))
          .catch(() => announce(fallbackCopy(value), value));
      } else {
        announce(fallbackCopy(value), value);
      }
    });
  });
}

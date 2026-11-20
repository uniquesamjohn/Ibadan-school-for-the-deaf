# Ibadan School for the Deaf — Website Redesign

A modern, responsive, accessible static website redesign for **Ibadan School for the Deaf** (Polytechnic Road, Ijokodo Junction, Ibadan, Oyo State, Nigeria — Est. 1963), built strictly with **HTML5**, **CSS3**, and **Vanilla JavaScript (ES6+)** with zero frontend frameworks.

---

## Brand Identity & Visual Design

- **Primary Source of Truth**: `https://ibadanschoolforthedeaf.com.ng/` and the school's uploaded 40th/50th Anniversary archive documents.
- **Exact Preserved Brand Palette** (extracted from `ibadanschoolforthedeaf.com.ng/css/style.css`):
  - Primary Brand Blue: `#005AE0` (`--primary-blue`)
  - Deep Institutional Navy: `#0A192F` (`--dark-blue`)
  - Soft Light Blue Tint: `#E8F0FE` (`--light-blue`)
  - Accent Blue: `#2563EB` (`--accent`)
  - Pure White / Off-White: `#FFFFFF` / `#F8FAFC`
  - Main Ink / Accessible Muted Slate: `#1E293B` / `#475569` (darkened slightly from `#64748B` on body copy for AAA readability)
  - Accessible tonal variations derived strictly from the school's blue family: `#0044AD`, `#132B52`, `#EFF6FF`, `#93C5FD`, `#60A5FA`.
- **Visual Design Inspiration**: Structural rhythm, editorial typography pairing (`Fraunces` display + `Outfit` body/UI), card styling, sticky navigation, dark showcase bands, and floating WCAG accessibility toolbar inspired strictly by `https://ajofaspecialeducation.com/` — using 100% Ibadan School for the Deaf colours, photography, and verified content.
- **Information Architecture**: Matches `Website Design.docx` exactly.

---

## Project File Structure

```text
/
├── index.html                           # Homepage
├── about/
│   ├── who-we-are.html                  # History, vision, values, founder legacy
│   ├── our-people-and-team.html         # Founders, archive records, staff directory placeholders
│   └── our-partner.html                 # Verified historic & institutional partners
├── programs/
│   └── index.html                       # Pre-Primary, Primary, Secondary, Vocational & Boarding
├── admissions/
│   └── index.html                       # Admissions overview, steps, parent guidance, FAQs
├── news-and-events/
│   ├── index.html                       # News & Events hub
│   ├── achievements.html                # Verified milestones & alumni excellence
│   ├── gallery.html                     # 104-photo filterable gallery (86 live campus + 18 archive) + progressive Load More & lightbox
│   ├── news.html                        # Parent awareness guide & institutional essays
│   └── events.html                      # Historical events & upcoming schedule notice
├── careers/
│   └── index.html                       # Careers overview & current vacancy status
├── contact/
│   └── index.html                       # Verified contact cards, map directions, enquiry form
├── donate/
│   └── index.html                       # Verified priority needs & pending payment notice
├── enroll/
│   └── index.html                       # Enrolment enquiry form (honest frontend validation)
├── assets/
│   ├── css/
│   │   ├── tokens.css                   # Brand variables, spacing, typography, a11y modes
│   │   ├── base.css                     # Reset, typography, buttons, forms, grids, focus styles
│   │   └── components.css               # Header, dropdowns, hero, cards, lightbox, footer, a11y FAB
│   ├── js/
│   │   ├── site-shell.js                # Reusable header, dropdowns, mobile drawer, footer, a11y FAB
│   │   └── main.js                      # Dropdown/drawer keyboard nav, a11y preferences, lightbox, carousel, FAQ, form validation
│   └── images/                          # Official logo.png, 19 archival photos, and gallery/ (86 optimised live campus JPEGs)
├── CONTENT-VERIFICATION-CHECKLIST.md    # Verified vs. excluded vs. pending confirmation audit
├── PENDING-INTEGRATIONS.md              # Required future backend, payment, CMS & media integrations
└── README.md                            # This file
```

---

## Running Locally

Because the site uses pure static HTML5, CSS3, and ES6+ JavaScript with relative asset paths, you can run it with any lightweight local static server from the project root:

### Option 1 — Python 3
```bash
python -m http.server 8080
```
Open `http://localhost:8080` in your browser.

### Option 2 — Node.js (`npx serve`)
```bash
npx serve -l 8080 .
```

### Option 3 — VS Code Live Server
Open the project folder in VS Code, right-click `index.html`, and select **Open with Live Server**.

---

## Static Hosting Deployment

This project requires **no build step** and deploys directly to:

- **Netlify**: Drag and drop the project root folder, or connect the Git repository with an empty build command and publish directory `.`.
- **Vercel**: Import the repository as a Static Site with output directory `.`.
- **GitHub Pages**: Push to `main` and enable GitHub Pages from the repository root (`/`). Relative paths (`./` and `../`) ensure all routes and assets resolve cleanly even on project subpaths.

---

## Accessibility Highlights (WCAG 2.2 Level AA)

- Semantic HTML5 landmarks (`header`, `nav`, `main`, `section`, `article`, `aside`, `footer`) and logical single-`h1` heading hierarchies.
- Skip-to-main-content link and high-visibility `:focus-visible` focus rings on light and dark surfaces.
- Mouse, touchscreen, and full keyboard-operable navigation dropdowns (`ArrowDown`, `ArrowUp`, `Escape`) and mobile drawer.
- Keyboard-operable Gallery Lightbox (`ArrowLeft`, `ArrowRight`, `Escape`, focus restoration) with descriptive `alt` text and visible captions.
- Floating **Accessibility Options** toolbar persisted in `localStorage`: Text Size (`A- / A+ / Reset`), High Contrast Mode, Dark Mode, Readable Font, Increased Line Spacing, Reading Guide, and Reduce Motion.
- Respects `prefers-reduced-motion: reduce`; zero autoplay audio; minimum `44px` interactive touch targets.

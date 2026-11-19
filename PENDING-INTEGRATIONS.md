# Pending Backend & External Integrations

Because this website is built strictly with **HTML5**, **CSS3**, and **Vanilla JavaScript (ES6+)** for static hosting (Netlify, Vercel, GitHub Pages), features that require server-side processing, database storage, or payment settlement have been prepared on the frontend with **honest pending-integration notices** and **no simulated submissions or payments**.

---

## 1. Contact Enquiry Form (`contact/index.html`)

- **Current Frontend Behaviour**: Performs accessible client-side validation (`aria-invalid`, inline alerts, focus management), informs the user honestly that server submission is pending, and generates a pre-filled `mailto:ibadanschoolforthedeaf@gmail.com` draft.
- **Required Integration**: Connect the `<form>` action or `fetch()` handler to one of:
  - A static-host form processor (e.g. **Netlify Forms**, **Formspree**, or **Web3Forms**), or
  - A lightweight backend endpoint (Node.js / PHP / Serverless Function) with server-side validation, spam protection (honeypot / rate limiting), and SMTP delivery to `ibadanschoolforthedeaf@gmail.com`.

---

## 2. Child Enrolment Application Workflow (`enroll/index.html`)

- **Current Frontend Behaviour**: Collects non-sensitive parent/guardian contact info and placement preferences, validates inputs, explains that no database submission occurs yet, and offers a pre-filled email draft to the school office.
- **Required Integration**:
  - Secure HTTPS backend endpoint + database storage (or authenticated admissions portal) with Nigeria Data Protection Act (NDPA) compliance, confirmation reference numbers, and admin email alerts.
  - Only add document upload fields (birth certificate, prior school reports, audiogram) once encrypted server-side storage and access controls are in place.

---

## 3. Donation & Online Payment Processing (`donate/index.html`)

- **Current Frontend Behaviour**: Displays verified institutional priority needs and directs prospective donors to verify official channels via phone (`08035851464`) or email (`ibadanschoolforthedeaf@gmail.com`). **No bank account details or payment links are fabricated.**
- **Required Integration**:
  - Verified official school bank account details approved in writing by the Board of Governors / School Management.
  - Optional Nigerian payment gateway integration (**Paystack** or **Flutterwave**) with server-side webhook verification and automated donor receipts.

---

## 4. News, Events, Vacancies & Staff Management (Optional Headless CMS)

- **Current Frontend Behaviour**: Static semantic HTML pages that are fast, reliable, and easy to edit directly in Git.
- **Optional Future Upgrade**: If non-technical staff need to publish news posts, term calendars, vacancies, or gallery albums without editing HTML, connect a lightweight static-friendly CMS (e.g. **Decap CMS** / **Sanity** / **Strapi**) or JSON data feed.

---

## 5. Official Media & Sign-Language Video Accessibility

- **Official Logo**: Installed at `assets/images/logo.png` (sourced directly from `https://ibadanschoolforthedeaf.com.ng/images/logo.png`) and displayed as a circular seal in the header, footer, and browser favicon.
- **Video Hosting**: When publishing campus or sign-language videos (`news-and-events/gallery.html`), host MP4/WebM assets or privacy-enhanced YouTube embeds with synchronized `<track kind="captions">` WebVTT captions, full text transcripts, and Nigerian Sign Language (NSL) interpretation where appropriate.

---

## 6. Interactive Campus Map Embed (Optional)

- **Current Frontend Behaviour**: Accessible external link to Google Maps directions for `Polytechnic Road, Ijokodo Junction, Ibadan, Nigeria` (zero third-party tracking cookies or API keys required).
- **Optional Future Upgrade**: Embed a verified Google Maps / OpenStreetMap iframe once exact campus entrance GPS coordinates are confirmed by the school.

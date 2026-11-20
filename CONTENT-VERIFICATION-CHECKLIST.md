# Content Verification Checklist — Ibadan School for the Deaf

This audit separates **verified source content**, **questionable legacy-website template artifacts intentionally excluded**, **reference access limitations**, and **items requiring confirmation from school administration**.

---

## 1. Reference Access & Inspection Log

| Source | Access Status | Notes |
| --- | --- | --- |
| `https://ibadanschoolforthedeaf.com.ng/` (Homepage HTML) | **Verified Live** | Retrieved full HTML (`42,153` bytes): contact info, vision statement, learning pathways, campus life pillars, image paths. |
| `https://ibadanschoolforthedeaf.com.ng/css/style.css` | **Verified Live** | Retrieved full stylesheet (`12,090` bytes): extracted exact HEX tokens (`#005AE0`, `#0A192F`, `#E8F0FE`, `#2563EB`, `#FFFFFF`, `#F8FAFC`, `#1E293B`, `#64748B`) and `'Outfit'` font. |
| `https://ibadanschoolforthedeaf.com.ng/images/logo.png` | **Verified & Installed** | Retrieved untouched official circular seal PNG (`1080×1072`, `619 KB`) and installed at `assets/images/logo.png`, masked cleanly with CSS `border-radius: 50%` across header, footer, and favicons. |
| `https://ibadanschoolforthedeaf.com.ng/gallery.php` (86 Campus Photos) | **Verified & Imported** | Extracted all 86 live campus PNG photographs (`258.45 MB` raw) and optimised them into web-ready JPEGs (`10.57 MB` total) in `assets/images/gallery/`, integrated into `news-and-events/gallery.html`, Homepage, Programs, and Co-Founder profile. |
| `https://ibadanschoolforthedeaf.com.ng/leadership.php` | **Verified Live** | Confirmed official Leadership Team roles (**Chairman — Board of Directors** using user-supplied studio portrait `assets/images/chairman-portrait.jpg` and **Matron — Welfare & Care** via `campus-67.jpg`) alongside the Co-Founders, integrated into `about/our-people-and-team.html`. |
| `https://ibadanschoolforthedeaf.com.ng/*.php` (Other internal pages) | **Gated** | Server returned LiteSpeed Altcha bot verification on earlier bulk crawl. Per strict policy, no anti-bot bypass was attempted. |
| `https://ajofaspecialeducation.com/` (HTML, `main.css`, `components.css`, `page-shell.js`) | **Verified Live** | Used strictly for visual layout, typography pairing, section rhythm, and accessibility-toolbar inspiration. Zero Ajofa text, colours, logos, bank accounts, or photos were copied. |
| Uploaded School Archive `.docx` Files & `Website Design.docx` | **Verified Locally** | Extracted full historical texts, 19 authentic archival photographs (cropped and optimised in `assets/images/`), and exact site navigation hierarchy. |

---

## 2. Verified Institutional Information Published on the Site

- [x] **Official Name**: Ibadan School for the Deaf (founded 1963 as *Home for the Young Deaf* -> *Home School for the Deaf*).
- [x] **Campus Address**: Polytechnic Road, Ijokodo Junction, Ibadan, Oyo State, Nigeria.
- [x] **Postal Address**: P.O. Box 1965, Dugbe, Ibadan.
- [x] **Telephone**: `08035851464`, `+234-806-006-0642`.
- [x] **Official Email**: `ibadanschoolforthedeaf@gmail.com`, `info@ibadanschoolforthedeaf.com.ng`.
- [x] **Official Vision Statement**: Verbatim from `ibadanschoolforthedeaf.com.ng` homepage.
- [x] **Founders**: Late Chief (Mrs.) Omodele Adelaide Oyesola (M.O.N., J.P.; Iya Abiye of Ibadanland) and Late Chief Jacob Oluseye Oyesola.
- [x] **Learning Pathways**: Pre-Primary Education, Primary Education, Secondary Education (integrated pathways connected with Ijokodo High School), and Vocational Training with Boarding Facilities.
- [x] **Holistic Campus Pillars**: Dining, Sports, Dormitory, Curricular Activities, Audiology Clinic.
- [x] **Verified Alumni & Board Testimonials**: Mr. Bamidele Wasiu Raji (Lecturer, FCE Special Oyo), Mr. Tunwase Adedeji Dele (1975 Set), Mr. J.A. Gbegbin (Board Secretary, Archive), and Rot. Jare Oyesola (Board Chairman, 50th Anniversary Archive).
- [x] **Verified Historic Partners & Past Donors**: Oyo State Government, Federal Government of Nigeria, Anglican Diocese of Ibadan, World Council of Churches, Rotary Clubs (Ibadan, Eleyele, Agodi, District 9130), Commonwealth Society for the Deaf (Britain), Netherlands Children Used Stamps Group, University of Ibadan Dept. of Special Education, YWCA/YMCA, and documented faith/community donors.
- [x] **Verified Priority Support Needs**: Documented from the school's 50th Anniversary Planning Committee appeal.
- [x] **Campus & Archival Photographs**: 86 optimised live campus photographs from `gallery.php` in `assets/images/gallery/` plus 19 cropped historical archival photographs from the uploaded school archive in `assets/images/`.

---

## 3. Questionable Legacy-Website & OCR Content Intentionally Excluded

The following items appeared on the old live website or OCR scan but were **excluded** to prevent publishing inaccurate or leftover template claims:

| Excluded Item | Source Found | Reason Excluded |
| --- | --- | --- |
| *"We offer a world-class IB Diploma curriculum"* | Live homepage under Vocational Training & Testimonial 2 | Clear leftover placeholder from a generic international-school template. |
| *"Ibadan School For The Deaf International"* | Live homepage `<title>` and footer | Appears to be a generic template suffix rather than official school name. |
| *"Top 10 Schools in Africa"*, *"20,000 Students Enrolled"*, *"100% Passing to Universities"*, *"100% Vocation Pass Rate"*, *"100 Certified Teachers"* | Live homepage stat blocks | Unverified template figures; replaced with verified historical facts (`1963`, `60+ Years`, `4 Pathways`, `Day & Boarding`). |
| Fictional testimonials (*"Mrs. Adebayo"*, *"Chuka O."*, *"Mr. David M."*, *"Dr. Sarah Cole"*) | Live homepage testimonial slider | Generic template quotes referencing IB Diploma and Year 8; replaced with verified alumni voices from the school's anniversary archive. |
| Founder birth year *"25th July, 1980"* | OCR text in `Journey of Greatness` | Obvious OCR/typographical error (she graduated UMC in 1948 and married in 1954). Birth date omitted pending archival confirmation. |
| Land acreage discrepancy (*"twenty acres"* in 40th Anniversary Founder's Desk vs. *"10 Acres"* in Journey of Greatness) | Uploaded anniversary texts | Described accurately as "permanent campus land at Ijokodo" without asserting a conflicting acreage figure. |

---

## 4. Content Awaiting Confirmation From School Administration

- [x] **Official Logo File (`logo.png`)**: Retrieved directly from `https://ibadanschoolforthedeaf.com.ng/images/logo.png` and installed at `assets/images/logo.png`.
- [ ] **Recent Campus Photographs & Captioned Videos**: Supply modern high-resolution photos of current classrooms, dormitories, dining hall, vocational labs, and captioned/sign-interpreted videos.
- [ ] **Current Leadership & Staff Directory (`about/our-people-and-team.html`)**: Confirm current Head Teacher/Principal, Board of Governors roster, and teaching/support staff names, titles, photos, and short biographies.
- [ ] **Current Active Partners (`about/our-partner.html`)**: Confirm current active NGO, corporate, and government partners and provide approved partner logos with written permission.
- [ ] **Admissions Details (`admissions/index.html`)**: Confirm current academic session application dates, official fee schedule (or public-school tuition status), age requirements, and exact required documents list.
- [ ] **Active Vocational Trades (`programs/index.html`)**: Confirm which vocational trades are actively running in the current term.
- [ ] **Official News Releases & Upcoming Calendar (`news-and-events/news.html`, `events.html`)**: Supply dated current-term announcements, PTA dates, open days, and celebrations.
- [ ] **Current Job Vacancies (`careers/index.html`)**: Confirm if any open roles or Oyo State TESCOM/SUBEB recruitment notices should be listed.
- [ ] **Official Social Media Accounts (`contact/index.html` & Footer)**: Confirm official Facebook, Instagram, YouTube, or WhatsApp URLs if maintained by the school.
- [x] **Official Donation Bank Account (`donate/index.html` & `index.html`)**: Wema Bank — Account Name: `Ibadan School for the Deaf` — Account Number: `0120628463` (direct bank transfer active; optional online card gateway checkout remains pending).

# Marlon Ramos Photography — 2026 Website Redesign

A modern, high-end wedding photography portfolio website for Marlon Ramos Photography, serving the Hudson Valley and Tri-State area.

## 🌐 Live Site

**Production:** [https://marlon-ramos-photo.vercel.app](https://marlon-ramos-photo.vercel.app)
**GitHub Repository:** [https://github.com/cqdesignsny/Marlon-Ramos_Photo](https://github.com/cqdesignsny/Marlon-Ramos_Photo)
**Vercel Dashboard:** [https://vercel.com/dashboard](https://vercel.com/dashboard)

---

## 📋 Project Overview

This is a complete custom-coded redesign of the Marlon Ramos Photography website, built with modern web technologies to showcase intimate, documentary-style wedding photography. The site features an elegant, editorial aesthetic with a warm, earthy color palette inspired by the Hudson Valley landscape.

**Key Features:**
- 🎨 Custom earthy color palette (Isabelline, Southern Sand, Taupe, Pine Tree)
- 📱 Fully responsive, mobile-first design
- ✨ Smooth page transitions and scroll animations
- 🖼️ Dynamic portfolio with filterable categories
- 🔍 SEO-optimized with dynamic meta tags
- 📝 50+ client testimonials
- 🎯 Service-specific landing pages
- 📧 HoneyBook contact form integration

---

## 🛠 Tech Stack

### Core Framework
- **React** `19.2.0` — UI library
- **Vite** `7.3.1` — Build tool & dev server

### Styling & UI
- **Tailwind CSS** `4.1.18` — Utility-first CSS framework
- **Framer Motion** `12.34.0` — Animation library
- **Lucide React** `0.563.0` — Icon library

### Routing & Navigation
- **React Router DOM** `7.13.0` — Client-side routing

### Additional Libraries
- **Swiper** `12.1.0` — Touch slider/carousel

### Development Tools
- **ESLint** `9.39.1` — Code linting
- **PostCSS** `8.5.6` — CSS processing
- **Autoprefixer** `10.4.24` — CSS vendor prefixing

---

## 🎨 Design System

### Color Palette

The site uses an earthy, organic color palette that complements wedding photography:

| Color Name      | Hex       | RGB            | Usage                                    |
|-----------------|-----------|----------------|------------------------------------------|
| **Isabelline**  | `#F4EEEB` | 244, 238, 232  | Primary background, light text on dark   |
| **Southern Sand** | `#EDE3D6` | 237, 227, 214 | Secondary backgrounds, borders           |
| **Taupe**       | `#B3A696` | 179, 166, 150  | Accent color, CTAs, links, highlights    |
| **Vintage Coin** | `#7A6B5E` | 122, 107, 94  | Secondary text, muted labels, hover states |
| **Pine Tree**   | `#292E1E` | 41, 46, 30     | Primary text, dark backgrounds, footer   |

### Typography

- **Headings:** Cormorant Garamond (serif) — Editorial, elegant feel
- **Body Text:** Inter (sans-serif) — Clean, highly readable
- **Google Fonts Import:** Both fonts loaded via CDN

### Spacing & Layout

- **Section Spacing:** Responsive clamp (`5rem` to `10rem`)
- **Container Max Width:** `container` utility (responsive)
- **Grid System:** CSS Grid and Flexbox throughout

---

## 📂 Project Structure

```
New MR Site/
├── public/                  # Static assets
│   ├── favicon.svg          # Custom camera icon
│   └── vite.svg             # Default Vite logo
│
├── src/
│   ├── components/
│   │   ├── home/            # Homepage-specific components
│   │   │   ├── Hero.jsx           # Hero section with slideshow
│   │   │   ├── Intro.jsx          # About/Bio intro section
│   │   │   ├── Experience.jsx     # Process/workflow section
│   │   │   ├── FeaturedStories.jsx # Portfolio highlights
│   │   │   └── TestimonialFeature.jsx # Testimonial showcase
│   │   │
│   │   ├── layout/          # Core layout components
│   │   │   ├── Layout.jsx         # Main layout wrapper
│   │   │   ├── Navbar.jsx         # Fixed navbar with Services dropdown
│   │   │   └── Footer.jsx         # Expanded footer with links, social, newsletter
│   │   │
│   │   ├── shared/          # Reusable components
│   │   │   └── SEOHead.jsx        # Dynamic meta tags component
│   │   │
│   │   └── ui/              # UI components
│   │       └── CustomCursor.jsx   # Custom cursor component
│   │
│   ├── content/             # Data files
│   │   ├── portfolioData.js       # 20+ portfolio projects
│   │   └── testimonialsData.js    # 50+ client testimonials
│   │
│   ├── hooks/               # Custom React hooks
│   │   └── useScroll.js           # Scroll position tracking
│   │
│   ├── pages/               # Page components
│   │   ├── Home.jsx               # Homepage
│   │   ├── Portfolio.jsx          # Portfolio gallery (filterable)
│   │   ├── StoryDetail.jsx        # Individual project detail page
│   │   ├── About.jsx              # About Marlon
│   │   ├── Investment.jsx         # Pricing packages
│   │   ├── KindWords.jsx          # Testimonials page
│   │   ├── Journal.jsx            # Blog listing
│   │   ├── Venues.jsx             # Hudson Valley venues
│   │   ├── Contact.jsx            # Contact form (HoneyBook)
│   │   │
│   │   └── services/        # Service landing pages
│   │       ├── WeddingPackages.jsx
│   │       ├── ElopementPackages.jsx
│   │       ├── EngagementPackages.jsx
│   │       └── PortraitPackages.jsx
│   │
│   ├── styles/              # Additional styles (currently empty)
│   ├── assets/              # Image assets
│   ├── App.jsx              # Main App component with routing
│   ├── main.jsx             # React entry point
│   ├── App.css              # App-level styles
│   └── index.css            # Tailwind directives + global styles
│
├── index.html               # HTML entry point
├── vite.config.js           # Vite configuration
├── postcss.config.js        # PostCSS configuration
├── eslint.config.js         # ESLint configuration
├── package.json             # Dependencies and scripts
└── README.md                # This file
```

---

## 🗺 Site Map & Routes

### Main Pages
- `/` — Home
- `/portfolio` — Portfolio gallery (filterable)
- `/portfolio/:slug` — Individual story detail pages
- `/about` — About Marlon
- `/investment` — Pricing & packages
- `/kind-words` — Client testimonials
- `/journal` — Blog/articles
- `/venues` — Hudson Valley venues
- `/contact` — Contact form

### Service Pages
- `/wedding-photo-packages` — Wedding photography services
- `/elopement-photographer` — Elopement photography services
- `/engagements` — Engagement session services
- `/portraits` — Portrait photography services

---

## 📊 Data Structure

### Portfolio Data (`src/content/portfolioData.js`)

**Total Projects:** 20+

**Categories:**
- **Weddings:** 9 projects (mix of real and placeholder data)
- **Elopements:** 3 projects
- **Engagements:** 3 projects
- **Portraits:** 3 projects

**Data Schema:**
```javascript
{
  id: Number,
  slug: String,           // URL-friendly slug
  type: String,           // 'wedding' | 'elopement' | 'engagement' | 'portrait'
  couple: String,         // Couple names or session title
  venue: String,          // Venue name or location
  image: String,          // Hero image URL
  images: Array<String>,  // Gallery image URLs
  description: String     // Project description
}
```

**Image Sources:** Currently pulling from `marlonramosphotography.com` (existing WordPress site). Some entries use placeholder/duplicate images and are intended to be replaced with final high-res assets.

### Testimonials Data (`src/content/testimonialsData.js`)

**Total Testimonials:** 50+

**Data Schema:**
```javascript
{
  name: String,     // Client name
  date: String,     // Review date (e.g., "February 2026")
  quote: String     // Testimonial text
}
```

**Source:** Real client testimonials from Google Reviews and direct client feedback.

---

## 💻 Getting Started

### Prerequisites
- **Node.js** (v18+ recommended)
- **npm** or **yarn**

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/cqdesignsny/Marlon-Ramos_Photo.git
   cd Marlon-Ramos_Photo
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5173`

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build locally
npm run lint     # Run ESLint
```

---

## 🔄 Working Across Multiple Machines

This project is connected to GitHub and Vercel. Here's how to work on it from any machine:

### First Time Setup on a New Machine

1. **Clone the repository:**
   ```bash
   git clone https://github.com/cqdesignsny/Marlon-Ramos_Photo.git
   cd Marlon-Ramos_Photo
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start developing:**
   ```bash
   npm run dev
   ```

### Daily Workflow

**Before you start working:**
```bash
# Pull latest changes from GitHub
git pull origin main
```

**After making changes:**
```bash
# Check what files changed
git status

# Add your changes
git add .

# Commit with a descriptive message
git commit -m "Description of what you changed"

# Push to GitHub
git push origin main
```

**What happens automatically:**
- ✅ GitHub receives your changes
- ✅ Vercel detects the push and starts building
- ✅ 2-3 minutes later, your changes are live at https://marlon-ramos-photo.vercel.app
- ✅ You'll get a deployment notification from Vercel

### Working from Desktop/Laptop/Another Location

**The workflow is exactly the same:**
1. Clone the repo (first time only)
2. `git pull` before starting work
3. Make your changes
4. `git add` → `git commit` → `git push`
5. Vercel auto-deploys

**Pro Tip:** Always `git pull` before starting work to avoid merge conflicts!

---

## 🚀 Deployment (Already Connected!)

### Current Status: ✅ Live & Auto-Deploying

**Live Site:** https://marlon-ramos-photo.vercel.app
**Status:** Connected to GitHub and auto-deploying

### How It Works Now

This project is already connected to Vercel with **continuous deployment** enabled:

1. **You push code to GitHub** → `git push origin main`
2. **Vercel automatically detects the change**
3. **Vercel builds the project** (runs `npm run build`)
4. **Vercel deploys to production** (2-3 minutes total)
5. **Your changes are live!**

### Viewing Deployments

- **Dashboard:** [https://vercel.com/dashboard](https://vercel.com/dashboard)
- **See all deployments:** Click on your project → "Deployments" tab
- **View logs:** Click on any deployment to see build logs

### Manual Deploy (Only if needed)

If you ever need to manually trigger a deploy:

**Option 1: Via Vercel Dashboard**
- Go to your project → Deployments → Click "Redeploy"

**Option 2: Via Vercel CLI**
```bash
npm install -g vercel  # Install CLI (one-time)
vercel login           # Login (one-time)
vercel --prod          # Manual deploy
```

### No Action Needed!

Since Vercel is connected to GitHub, you don't need to do anything special. Just:
- Write code
- Commit and push to GitHub
- Vercel handles the rest automatically ✨

### Build Configuration

Vercel should auto-detect Vite settings, but confirm:

- **Framework:** Vite
- **Build Command:** `npm run build` or `vite build`
- **Output Directory:** `dist`
- **Install Command:** `npm install`
- **Node Version:** 18.x or 20.x

### Environment Variables

If you need environment variables (e.g., for analytics, contact forms):

1. Go to Vercel Dashboard → Project Settings → Environment Variables
2. Add variables (e.g., `VITE_HONEYBOOK_URL`, `VITE_GA_ID`)
3. Prefix all variables with `VITE_` to expose them to the client
4. Redeploy after adding variables

---

## 📝 Content Updates

### Updating Portfolio Projects

1. Open `src/content/portfolioData.js`
2. Modify, add, or remove project objects
3. Ensure all image URLs are valid
4. Update `slug` to create unique URLs

### Updating Testimonials

1. Open `src/content/testimonialsData.js`
2. Add new testimonials to the array
3. Format: `{ name: "...", date: "...", quote: "..." }`

### Updating SEO Meta Tags

Each page uses the `SEOHead` component. Update in individual page files:

```javascript
<SEOHead
  title="Your Custom Title"
  description="Your custom description for SEO"
/>
```

---

## 🎯 SEO & Performance

### Current SEO Implementation
- ✅ Dynamic page titles via `SEOHead` component
- ✅ Dynamic meta descriptions
- ✅ Semantic HTML structure
- ✅ Optimized heading hierarchy
- ✅ Alt text for images (in progress)
- ✅ Clean URLs with React Router

### Performance Optimizations
- ✅ Vite for fast builds and HMR
- ✅ Code splitting via React Router
- ✅ Lazy loading images (can be enhanced)
- ✅ Minified production builds
- ⏳ Image optimization (needs implementation)

### Next Steps for SEO
- [ ] Add structured data (Schema.org for LocalBusiness & Photographer)
- [ ] Implement image lazy loading library
- [ ] Add Open Graph tags for social sharing
- [ ] Create XML sitemap
- [ ] Add robots.txt
- [ ] Optimize images (WebP format, responsive srcsets)

---

## ✅ Completed Features (Feb 2026)

### Design & UI
- [x] Custom earthy color palette implementation
- [x] Responsive navbar with Services dropdown
- [x] Mobile hamburger menu with overlay
- [x] Expanded footer with brand logo, links, contact, service areas
- [x] Smooth page transitions with Framer Motion
- [x] Scroll-triggered navbar background change
- [x] Typography system (Cormorant Garamond + Inter)

### Pages & Routing
- [x] Homepage with Hero, Intro, Experience, Featured Stories, Testimonials
- [x] Portfolio page with filterable categories
- [x] Dynamic story detail pages (`/portfolio/:slug`)
- [x] About page
- [x] Investment/Pricing page
- [x] Kind Words (testimonials) page
- [x] Journal (blog) page
- [x] Venues page
- [x] Contact page with HoneyBook embed
- [x] 4 service landing pages (Weddings, Elopements, Engagements, Portraits)

### Data & Content
- [x] Portfolio data structure with 20+ projects
- [x] Testimonials data with 50+ reviews
- [x] SEO meta tags for all pages
- [x] Scroll-to-top on route change

### Development
- [x] Vite build setup
- [x] Tailwind CSS v4 configuration
- [x] ESLint configuration
- [x] Custom hooks (`useScroll`)
- [x] Component architecture
- [x] Git repository setup

---

## 📋 Next Steps & Roadmap

### Content
- [ ] Replace placeholder portfolio images with final high-res assets
- [ ] Finalize About page copy and images
- [ ] Add real wedding stories with couple names, venues, and narratives
- [ ] Create blog posts for Journal section
- [ ] Populate Venues page with Hudson Valley venue details

### Features
- [ ] Implement image lightbox for gallery viewing
- [ ] Add newsletter signup functionality
- [ ] Integrate HoneyBook contact form properly
- [ ] Add Google Analytics or Plausible tracking
- [ ] Implement real testimonial rotation/carousel
- [ ] Add "Load More" or pagination for portfolio

### SEO & Performance
- [ ] Add Schema.org structured data
- [ ] Implement lazy loading for images
- [ ] Optimize images (WebP, responsive srcsets)
- [ ] Add Open Graph and Twitter Card meta tags
- [ ] Create XML sitemap
- [ ] Add robots.txt

### Testing & QA
- [ ] Cross-browser testing (Chrome, Safari, Firefox, Edge)
- [ ] Mobile device testing (iOS Safari, Chrome Mobile)
- [ ] Accessibility audit (WCAG 2.1 AA)
- [ ] Performance audit (Lighthouse)
- [ ] Form submission testing

### Deployment
- [ ] Deploy to Vercel production
- [ ] Configure custom domain (marlonramosphotography.com)
- [ ] Set up SSL certificate
- [ ] Configure redirects from old WordPress URLs
- [ ] Update Google Business Profile with new site URL

---

## 🐛 Known Issues

- Some portfolio entries use placeholder/duplicate images (intentional for mockup)
- Newsletter signup form needs backend integration
- Mobile menu accessibility needs keyboard navigation improvements
- Image optimization not yet implemented
- Contact form needs proper HoneyBook integration

---

## 👨‍💻 Development Notes

### Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge) — last 2 versions
- Mobile Safari (iOS 14+)
- Chrome Mobile (Android 10+)

### Code Style
- ESLint configured with React best practices
- Component naming: PascalCase
- File naming: PascalCase for components, camelCase for utilities
- CSS: Tailwind utility classes preferred

### Git Workflow
- `main` branch for production-ready code
- Feature branches for new development
- Commit messages: Descriptive and clear

---

## 📞 Contact & Credits

**Client:** Marlon Ramos Photography
**Website:** [marlonramosphotography.com](https://marlonramosphotography.com)
**Phone:** 914-733-2309
**Email:** mramos@marlonramosphotography.com

**Developed by:** CQ Marketing (Cesar)
**Build Date:** February 2026
**Platform:** Custom coded React + Vite application

---

## 📄 License

This project is proprietary and confidential. All rights reserved by Marlon Ramos Photography and CQ Marketing.

---

**Last Updated:** February 11, 2026

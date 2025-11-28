# Portfolio Website

> A modern, professional portfolio website built with Next.js 15, TypeScript, and Tailwind CSS

[![Next.js](https://img.shields.io/badge/Next.js-15.1.6-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61dafb?style=flat-square&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178c6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)

**Live Demo:** [https://www.samankassou.com/](https://www.samankassou.com/)

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Customization](#customization)
- [Development Commands](#development-commands)
- [Deployment](#deployment)
- [Architecture](#architecture)
- [Screenshots](#screenshots)
- [License](#license)

---

## Features

### Portfolio Sections

- **Hero Section** - Eye-catching introduction with animated wave background
- **Services** - Showcase of professional services with icons and descriptions
- **Education** - Academic background and qualifications
- **Experience** - Professional work history and achievements
- **Certifications** - Professional credentials (Microsoft Azure, SCRUM, ITIL)
- **Portfolio** - Project showcase with category filtering
- **Testimonials** - Client feedback with star ratings
- **Blog** - Latest blog posts and articles
- **Contact** - Contact form and information

### Technical Features

- **🎨 Dark Mode** - Three-state theme system (System/Dark/Light) with localStorage persistence
- **📱 Responsive Design** - Mobile-first approach with three-column desktop layout
- **⚡ Performance Optimized** - Next.js Image optimization, WebP/AVIF support
- **🎭 Smooth Animations** - Framer Motion for polished interactions
- **♿ Accessible** - Reduced motion support, semantic HTML
- **🎯 Type-Safe** - Full TypeScript implementation with centralized type definitions
- **🎨 Custom Theme** - Tailwind CSS with custom color system and dark mode
- **📊 Categorized Skills** - Advanced skill organization system (6 major categories)
- **🔍 Project Filtering** - Interactive portfolio filtering by category

---

## Tech Stack

### Core Framework

- **[Next.js 15.1.6](https://nextjs.org/)** - React framework with App Router
- **[React 19](https://react.dev/)** - UI library
- **[TypeScript 5.9](https://www.typescriptlang.org/)** - Type safety and developer experience

### Styling & UI

- **[Tailwind CSS 3.4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Framer Motion 12](https://www.framer.com/motion/)** - Animation library
- **[next-themes 0.4](https://github.com/pacocoursey/next-themes)** - Theme management
- **[React Icons 5.5](https://react-icons.github.io/react-icons/)** - Icon library

### Development Tools

- **[Prettier](https://prettier.io/)** - Code formatting with Tailwind class sorting
- **[ESLint](https://eslint.org/)** - Code linting
- **TypeScript Compiler** - Type checking

---

## Getting Started

### Prerequisites

- **Node.js** 18.x or higher
- **npm** or **yarn**

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   http://localhost:3000
   ```

### Build for Production

```bash
# Create optimized production build
npm run build

# Start production server
npm start
```

---

## Project Structure

```
portfolio/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # Root layout with theme provider
│   ├── page.tsx             # Main homepage (all sections)
│   ├── globals.css          # Global styles and Tailwind imports
│   └── components/
│       ├── layout/          # Layout components (Navbar, Sidebars, Footer)
│       ├── sections/        # Section components (Hero, Services, etc.)
│       ├── ui/              # Reusable UI components (Button, ThemeToggle)
│       └── providers/       # React Context providers (ThemeProvider)
│
├── lib/                      # Shared libraries and utilities
│   ├── types/               # TypeScript type definitions
│   │   └── index.ts         # Centralized interfaces
│   ├── data/                # Content data layer (edit to customize)
│   │   ├── siteConfig.ts    # Site metadata and social links
│   │   ├── profile.ts       # Profile data, contact info, skills
│   │   ├── services.ts      # Services data
│   │   ├── education.ts     # Education history
│   │   ├── experience.ts    # Work experience
│   │   ├── certifications.ts # Professional certifications
│   │   ├── projects.ts      # Portfolio projects + categories
│   │   ├── testimonials.ts  # Testimonials data
│   │   └── blogs.ts         # Blog posts
│   ├── constants/           # Shared constants
│   │   ├── theme.ts         # Theme mode constants
│   │   └── colors.ts        # Color class constants (COMMON_CLASSES)
│   └── utils/               # Utility functions (future use)
│
├── public/                   # Static assets
│   └── img/                 # Images organized by type
│       ├── profile/         # Profile images
│       ├── hero/            # Hero section images
│       ├── projects/        # Project images
│       └── blog/            # Blog images
│
└── Configuration files
    ├── tailwind.config.js   # Tailwind CSS configuration
    ├── next.config.mjs      # Next.js configuration
    ├── tsconfig.json        # TypeScript configuration
    └── package.json         # Dependencies and scripts
```

### Architecture Pattern

This portfolio follows a **three-layer architecture**:

1. **Type Layer** (`lib/types/`) - Centralized TypeScript interfaces
2. **Data Layer** (`lib/data/`) - All content in typed TypeScript files
3. **Component Layer** (`app/components/`) - Presentational components

**Benefits:**

- Clear separation of concerns
- Easy content updates without touching code
- Type safety across the entire application
- Reusable, maintainable components

---

## Customization

### Update Personal Information

All content is centralized in the `lib/data/` directory. Edit these TypeScript files to customize:

**Profile & Contact:**

```typescript
// lib/data/profile.ts
export const profile = {
  name: "Your Name",
  title: "Your Title",
  email: "your.email@example.com",
  // ... more fields
};
```

**Services:**

```typescript
// lib/data/services.ts
export const services: Service[] = [
  {
    icon: "analytics",
    title: "Your Service",
    description: "Service description",
  },
  // ... add more services
];
```

**Projects:**

```typescript
// lib/data/projects.ts
export const projects: Project[] = [
  {
    title: "Project Name",
    category: "Web Templates",
    image: "/img/projects/project.jpg",
    link: "https://...",
  },
  // ... add more projects
];
```

**Other Data Files:**

- `lib/data/education.ts` - Education history
- `lib/data/experience.ts` - Work experience
- `lib/data/certifications.ts` - Professional certifications
- `lib/data/testimonials.ts` - Client testimonials
- `lib/data/blogs.ts` - Blog posts

### Change Colors

Edit the Tailwind color system in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        DEFAULT: '#F78F42',  // Orange - your brand color
        // ... other shades
      },
      accent: {
        DEFAULT: '#3CC288',  // Green - highlights
        // ... other shades
      },
    }
  }
}
```

### Modify Styling

The project uses **reusable CSS constants** for consistent styling:

```typescript
import { COMMON_CLASSES } from "@/lib/constants/colors";

// Use predefined classes for cards, backgrounds, text, etc.
<div className={COMMON_CLASSES.CARD_BG}>
  {/* Card content */}
</div>
```

**Available Constants:**

- `COMMON_CLASSES.CARD_BG` - Card backgrounds
- `COMMON_CLASSES.PAGE_BG` - Page backgrounds
- `COMMON_CLASSES.INPUT_BG` - Input backgrounds
- `COMMON_CLASSES.TEXT` - Text colors
- `COMMON_CLASSES.TEXT_MUTED` - Muted text
- `COMMON_CLASSES.DIVIDER` - Divider colors

---

## Development Commands

```bash
# Start development server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint

# Type check without emitting files
npm run type-check

# Format code with Prettier
npx prettier --write .
```

---

## Deployment

### Deploy to Vercel (Recommended)

This portfolio is optimized for [Vercel](https://vercel.com/) deployment:

1. **Push to Git repository** (GitHub, GitLab, or Bitbucket)
2. **Import project** in Vercel dashboard
3. **Deploy** - Vercel auto-detects Next.js and configures build settings

**Zero configuration needed!** Vercel handles:

- Automatic builds on git push
- Image optimization
- Edge caching
- SSL certificates

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/portfolio)

### Other Deployment Options

**Netlify:**

```bash
npm run build
# Deploy the .next folder
```

**Docker:**

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
CMD ["npm", "start"]
```

**Traditional Node Hosting:**

```bash
npm run build
npm start
# Runs on port 3000
```

---

## Architecture

### Dark Mode Implementation

Custom **three-state theme system** using React Context:

1. **System** (default) - Follows OS preference
2. **Dark** - Forced dark mode
3. **Light** - Forced light mode

**Features:**

- Stored in `localStorage` with key `"theme"`
- Inline script in `layout.tsx` prevents flash of unstyled content
- Theme toggle component cycles through all three states
- Fully typed with TypeScript

### Component Organization

Components follow a **List/Item pattern**:

- `index.tsx` - Imports data from `lib/data/` and maps over items
- `*Item.tsx` or `*Card.tsx` - Presentational component with typed props

**Example:**

```
sections/Services/
├── index.tsx        # Maps over services data
└── ServiceCard.tsx  # Displays individual service
```

### Performance Optimizations

- **Image Optimization** - Next.js Image component with WebP/AVIF
- **Code Splitting** - Automatic with Next.js App Router
- **Reduced Motion** - Respects user preferences for accessibility
- **Efficient Animations** - Framer Motion with GPU acceleration

### Type Safety

- **Centralized Types** - All interfaces in `lib/types/index.ts`
- **Data Layer Typing** - All data files properly typed
- **Component Props** - Fully typed with TypeScript interfaces
- **Path Aliases** - `@/*` resolves to root directory for clean imports

---

## Screenshots

### Desktop View

![Desktop Screenshot](./screenshots/desktop.png)
_Full three-column layout with left sidebar, main content, and right sidebar_

### Mobile View

![Mobile Screenshot](./screenshots/mobile.png)
_Responsive mobile design with slide-out navigation_

### Dark Mode

![Dark Mode Screenshot](./screenshots/dark-mode.png)
_Custom dark theme with optimized colors for readability_

> **Note:** Add screenshots to a `screenshots/` folder in the root directory to display them in the README.

---

## License

This project is licensed under the **MIT License** - see below for details:

```
MIT License

Copyright (c) 2025 Saman Kassou

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## Contact

**Live Demo:** [https://www.samankassou.com/](https://www.samankassou.com/)

**Author:** Samankassou

For inquiries or collaboration opportunities, please visit the live site and use the contact form.

---

<div align="center">
  <p>Built with ❤️ using Next.js, TypeScript, and Tailwind CSS</p>
  <p>⭐ Star this repo if you find it helpful!</p>
</div>

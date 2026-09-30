# ByteSpace 🚀

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

## 📖 Brief Overview
**ByteSpace** is a modern, trust-building, and visually compelling landing page for an online learning platform. It is designed to communicate ByteSpace's value proposition: providing learners with access to hundreds of courses across diverse categories while empowering educators with easy course creation tools. 

Built with React 19, Vite, and Tailwind CSS, ByteSpace provides a pixel-perfect, fully responsive (mobile-first), and fast frontend experience.

## 📸 Landing Page Screenshot
![Landing Page Preview](./Landing-Page.png)

## 🧠 Mind Map & Folder Structure

```text
ByteSpace/
├── client/
│   ├── public/              # Static assets (favicon, etc.)
│   ├── src/                 # Source files
│   │   ├── assets/          # Images, SVGs, ornaments
│   │   ├── components/      # React Components
│   │   │   ├── layout/      # Navbar, Footer
│   │   │   ├── sections/    # Hero, Courses, Categories, Testimonials, etc.
│   │   │   └── ui/          # Reusable UI elements (Buttons, Cards, Badges)
│   │   ├── data/            # Static data (courses, categories, testimonials)
│   │   ├── App.jsx          # Root component
│   │   ├── index.css        # Tailwind directives and custom styling
│   │   └── main.jsx         # Entry point
│   ├── index.html
│   ├── package.json
│   ├── tailwind.config.js   # Tailwind customizations (colors, fonts, spacing)
│   └── vite.config.js
├── docs/                    # Project documentation (PRD, Architecture, Rules, etc.)
├── Frame Details/           # Detailed Figma frame exports
└── hero-section/            # Hero section specific assets and design files
```

## ✨ List of Features
- **Hero Section**: Engaging headline, interactive search bar, floating UI cards, and decorative 3D elements.
- **Discover Courses**: A scrollable pill-tab category filter featuring a responsive 3×2 course card grid.
- **Detailed Course Cards**: Includes thumbnails, stats, pricing, creator info, and star ratings.
- **Explore Categories**: Beautiful icon cards representing various learning paths (Design, Development, Business, etc.).
- **Creator & Growth Sections**: Split-layout sections highlighting platform growth statistics and creator benefits.
- **Call-to-Action (CTA)**: A bold, full-width banner encouraging users to join as creators.
- **Testimonials**: Community feedback showcased via gradient-styled testimonial cards.
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop screens (mobile-first approach).
- **Fast & Accessible**: Built with semantic HTML, optimized images, and Vite for blazing-fast performance.

## ⚙️ Installation Instructions

1. **Clone the repository:**
   ```bash
   git clone https://github.com/shamsur-rahman-rifat/ByteSpace.git
   ```

2. **Navigate to the project directory:**
   ```bash
   cd "client"
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```
   *Note: Ensure you have Node.js installed on your system.*

## 🚀 Usage Guide

To run the development server locally:

```bash
# Make sure you are in the client/ directory
npm run dev
```
Once the server is running, open your browser and navigate to the URL provided in your terminal (typically `http://localhost:5173`).

To build the project for production:
```bash
npm run build
```

## 🤝 Contribution Guidelines

Contributions, issues, and feature requests are welcome! 
1. Fork the project.
2. Create your feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

Please ensure that your code matches the existing code style and structure. Test your changes locally before submitting a PR.

## 📄 License
Distributed under the MIT License. See `LICENSE` for more information.

## 🙌 Credits / References
- **Design Inspiration**: Figma files & UI/UX guidelines provided.
- **Icons**: [Lucide React](https://lucide.dev/)
- **Fonts**: [Google Fonts - Inter](https://fonts.google.com/specimen/Inter)
- **Logos**: [Logoipsum](https://logoipsum.com/)

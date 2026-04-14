# 🛒 Amazon Clone

A pixel-perfect frontend clone of the [Amazon](https://www.amazon.com) e-commerce website, built with **React** and **Vite**. This project replicates Amazon's iconic UI — including the navigation bar, hero banner, product category grid, and footer — as a hands-on learning exercise.

---

## 🖼️ Preview

> A faithful recreation of Amazon's homepage featuring the navbar, hero section, product category boxes, and footer.

---

## ✨ Features

- **Responsive Navbar** — Amazon logo, delivery location, search bar with category selector, account/sign-in, returns & orders, and shopping cart icon
- **Navigation Panel** — Secondary menu bar with links to Bestsellers, Today's Deals, Mobiles, Prime, Customer Service, and more
- **Hero Banner** — Full-width background image with a region-redirect message (amazon.com → amazon.in)
- **Product Category Grid** — 8 product category cards:
  - 👗 Clothes
  - 💊 Health Care
  - 🛋️ Furniture
  - 💻 Electronics
  - 💄 Makeup
  - 🐾 Petcare
  - ✈️ Flight Tickets
  - 👟 Fashion
- **Footer** — Multi-column links (Careers, Blog, About Amazon, etc.) and copyright notice

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| [React 19](https://react.dev/) | UI component library |
| [Vite (rolldown-vite)](https://vite.dev/) | Lightning-fast build tool & dev server |
| [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/tree/main/packages/plugin-react-swc) | Fast Refresh via SWC |
| [Font Awesome](https://fontawesome.com/) | Icons (cart, location, search, bars) |
| CSS | Custom styles mimicking Amazon's design |

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm (comes with Node.js)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/Atharv-M-Patil/clone.git
cd clone

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open your browser and navigate to `http://localhost:5173`.

---

## 📜 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the local development server with HMR |
| `npm run build` | Create a production-ready build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint to check for code issues |

---

## 📁 Project Structure

```
amazon-clone/
├── public/                 # Static assets
├── src/
│   ├── assets/             # Images (logo, hero, category boxes)
│   ├── components/
│   │   ├── Navbar.jsx      # Top navigation bar + panel
│   │   ├── Hero.jsx        # Hero banner section
│   │   ├── BoxGrid.jsx     # Product category cards grid
│   │   └── Footer.jsx      # Site footer
│   ├── App.jsx             # Root component
│   ├── main.jsx            # React entry point
│   └── style.css           # Global styles
├── index.html
├── vite.config.js
├── eslint.config.js
└── package.json
```

---

## 📌 Note

This project is built **purely for educational purposes** to practice React component architecture, CSS styling, and Vite tooling. It is **not affiliated with or endorsed by Amazon**.

---

## 👤 Author

**Atharv M Patil**
- GitHub: [@Atharv-M-Patil](https://github.com/Atharv-M-Patil)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

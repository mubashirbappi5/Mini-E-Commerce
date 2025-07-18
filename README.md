# 🛍️ Mini E-Commerce SPA

A modern, responsive single-page e-commerce web application built with React.js. Users can browse products, view detailed info, add to cart, and simulate a checkout — all without authentication.

## 🚀 Live Demo

🔗 [Live Site on Netlify](https://luxury-palmier-0fde02.netlify.app/)

## 📦 Tech Stack

- ⚛️ React.js TypeScript
- 📦 React Router DOM
- 🎨 Tailwind CSS
- 🛒 Context API (Cart State)
- 🗃️ Dummy Product Data (local JSON)
- 🌍 Netlify for Deployment

## ✨ Features

- SPA architecture using React Router
- Product listing with image, title, price, and add-to-cart
- Product detail page with full product info
- Slide-in cart sidebar with:
  - Quantity control
  - Total calculation
  - Checkout button
- Modal checkout form (Name, Email, Address)
- Responsive design for mobile and desktop








## 🛠️ Getting Started

### ✅ Prerequisites

- Node.js and npm installed

### 📦 Installation

```bash
git clone https://github.com/mubashirbappi5/Mini-E-Commerce.git
cd Mini-E-Commerce
npm install
npm run dev






# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

# E-commerce Prototype

This project is a prototype of an e-commerce platform built with React. It allows users to browse products, add them to a cart, and view the cart's contents. The cart data is persisted using IndexedDB to ensure data remains intact across sessions.

## Features

- **Product Browsing:** Users can view a list of available products.
- **Product Details:** Detailed information for each product is accessible.
- **Shopping Cart:** Users can add products to a cart, view cart contents, and remove items.
- **Persistent Cart Data:** Cart contents are saved using IndexedDB, allowing data to persist across sessions.

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Darioba87/ecommerce-proto.git
   ```
2. **Navigate to the project directory:**
   ```bash
   cd ecommerce-proto
   ```
3. **Install dependencies:**
   ```bash
   npm install
   ```

## Usage

1. **Start the development server:**
   ```bash
   npm start
   ```
2. **Open your browser and navigate to:**
   ```
   http://localhost:yourPort
   ```

## Project Structure

```
ecommerce-proto/
├── public/
├── src/
│   ├── components/
│   │   ├── Cart.jsx
│   │   ├── CategoryFilter.jsx
│   │   ├── FeaturedProducts.jsx
│   │   ├── Footer.jsx
│   │   ├── HeroSection.jsx
│   │   ├── LogoSlider.jsx
│   │   ├── Navbar.jsx
│   │   ├── ProductDetail.jsx
│   │   ├── ProductItem.jsx
│   │   ├── ProductList.jsx
│   │   ├── ReviewSection.jsx
│   ├── data/
│   │   ├── fake-reviews.json
│   │   ├── logos.json
│   ├── hooks/
│   │   ├── fetchProducts.js
│   │   ├── filterProducts.js
│   │   ├── formatPrice.js
│   │   ├── loadChecker.jsx
│   │   ├── useCart.js
│   │   ├── useTruncateText.js
│   ├── pages/
│   │   ├── CartPage.jsx
│   │   ├── Home.jsx
│   │   ├── Impressum.jsx
│   │   ├── ProductDetailPage.jsx
│   │   ├── Products.jsx
│   ├── styles/
│   │   ├── global.css
│   ├── App.jsx
│   ├── main.jsx
│   ├── productsApi.js
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.cjs
├── vite.config.cjs
└── README.md
```

- `components/`: Reusable UI components such as the navigation bar and cart.
- `hooks/`: Custom React hooks for managing cart state and interactions with IndexedDB.
- `pages/`: Page components representing different routes in the application.
- `App.js`: Main application component that sets up routing.
- `index.js`: Entry point of the application.

## Dependencies

### Core Dependencies

- **[@animxyz/core](https://www.npmjs.com/package/@animxyz/core):** Animation library for smooth UI effects.
- **[@animxyz/react](https://www.npmjs.com/package/@animxyz/react):** React integration for `@animxyz/core`.
- **[@tanstack/react-query](https://react-query-v3.tanstack.com/):** Data-fetching and state management library.
- **[bulma](https://bulma.io/):** CSS framework for responsive design.
- **[idb](https://www.npmjs.com/package/idb):** Lightweight wrapper for IndexedDB.
- **[open-props](https://open-props.style/):** A collection of CSS variables.
- **[react](https://reactjs.org/):** Frontend library for building user interfaces.
- **[react-dom](https://reactjs.org/docs/react-dom.html):** React rendering library for web applications.
- **[react-router-dom](https://reactrouter.com/):** Library for routing in React applications.
- **[react-spinners](https://www.npmjs.com/package/react-spinners):** Loading spinners for React.
- **[redaxios](https://github.com/developit/redaxios):** Lightweight Axios alternative for HTTP requests.
- **[swiper](https://swiperjs.com/):** Modern touch slider.
- **[uuid](https://www.npmjs.com/package/uuid):** Library for generating unique IDs.

### Development Dependencies

- **[@eslint/js](https://eslint.org/):** Linter for identifying JavaScript code issues.
- **[@tanstack/eslint-plugin-query](https://github.com/TanStack/query):** ESLint plugin for React Query.
- **[@tanstack/react-query-devtools](https://tanstack.com/query/devtools):** Devtools for debugging React Query.
- **[@types/react](https://www.npmjs.com/package/@types/react):** TypeScript type definitions for React.
- **[@types/react-dom](https://www.npmjs.com/package/@types/react-dom):** TypeScript type definitions for ReactDOM.
- **[@vitejs/plugin-react](https://www.npmjs.com/package/@vitejs/plugin-react):** Vite plugin for React fast refresh.
- **[cssnano](https://cssnano.co/):** CSS minifier for production.
- **[eslint](https://eslint.org/):** JavaScript linter.
- **[eslint-plugin-jsx-a11y](https://www.npmjs.com/package/eslint-plugin-jsx-a11y):** Accessibility linting for JSX.
- **[eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react):** React-specific linting rules.
- **[eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks):** Linting rules for React Hooks.
- **[eslint-plugin-react-refresh](https://www.npmjs.com/package/eslint-plugin-react-refresh):** Linting for React Fast Refresh.
- **[gh-pages](https://www.npmjs.com/package/gh-pages):** Publish files to GitHub Pages.
- **[globals](https://www.npmjs.com/package/globals):** Global variable definitions.
- **[postcss-import](https://www.npmjs.com/package/postcss-import):** PostCSS plugin for handling imports.
- **[postcss-jit-props](https://www.npmjs.com/package/postcss-jit-props):** JIT compiler for CSS props.
- **[postcss-preset-env](https://www.npmjs.com/package/postcss-preset-env):** Plugin for modern CSS features.
- **[vite](https://vitejs.dev/):** Modern frontend build tool.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

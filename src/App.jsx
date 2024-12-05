import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy, useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./hooks/ScrollToTop";
import { XyzTransition } from "@animxyz/react";
import { useLoadingAndError } from "./hooks/loadChecker";

const Home = lazy(() => import("./pages/Home"));
const Products = lazy(() => import("./pages/Products"));
const ProductDetailPage = lazy(() => import("./pages/ProductDetailPage"));
const CartPage = lazy(() => import("./pages/CartPage"));
const Impressum = lazy(() => import("./pages/Impressum"));
const NotFound = lazy(() => import("./pages/NotFound"));

export default function App() {
  const basename =
    // eslint-disable-next-line no-undef
    process.env.NODE_ENV === "production" ? "/ecommerce-proto/" : "/";

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(false);
    setError(null);
  }, []);

  const loadingChecker = useLoadingAndError(loading, error);
  return (
    <Router basename={basename}>
      <ScrollToTop />
      <div className="app">
        <Navbar />
        <main>
          <Suspense fallback={loadingChecker}>
            <Routes>
              {/* Animated Routes */}
              <Route
                path="/"
                element={
                  <XyzTransition xyz="fade duration-10 ease-in-out">
                    <Home />
                  </XyzTransition>
                }
              />
              <Route
                path="/products"
                element={
                  <XyzTransition xyz="fade duration-10 ease-in-out">
                    <Products />
                  </XyzTransition>
                }
              />
              <Route
                path="/product/:id"
                element={
                  <XyzTransition xyz="fade duration-10 ease-in-out">
                    <ProductDetailPage />
                  </XyzTransition>
                }
              />
              <Route
                path="/cart"
                element={
                  <XyzTransition xyz="fade duration-10 ease-in-out">
                    <CartPage />
                  </XyzTransition>
                }
              />
              <Route
                path="/impressum"
                element={
                  <XyzTransition xyz="fade duration-10 ease-in-out">
                    <Impressum />
                  </XyzTransition>
                }
              />
              <Route
                path="*"
                element={
                  <XyzTransition xyz="fade duration-10 ease-in-out">
                    <NotFound />
                  </XyzTransition>
                }
              />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

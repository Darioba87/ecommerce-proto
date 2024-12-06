import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy, useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./hooks/ScrollToTop";
import { XyzTransition } from "@animxyz/react";
import { useLoadingAndError } from "./hooks/loadChecker";
import "@animxyz/core";

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
                    <div>
                      <Home />
                    </div>
                  </XyzTransition>
                }
              />
              <Route
                path="/products"
                element={
                  <XyzTransition xyz="fade duration-10 ease-in-out">
                    <div>
                      <Products />
                    </div>
                  </XyzTransition>
                }
              />
              <Route
                path="/product/:id"
                element={
                  <XyzTransition xyz="fade duration-10 ease-in-out">
                    <div>
                      <ProductDetailPage />
                    </div>
                  </XyzTransition>
                }
              />
              <Route
                path="/cart"
                element={
                  <XyzTransition xyz="fade duration-10 ease-in-out">
                    <div>
                      <CartPage />
                    </div>
                  </XyzTransition>
                }
              />
              <Route
                path="/impressum"
                element={
                  <XyzTransition xyz="fade duration-10 ease-in-out">
                    <div>
                      <Impressum />
                    </div>
                  </XyzTransition>
                }
              />
              <Route
                path="*"
                element={
                  <XyzTransition xyz="fade duration-10 ease-in-out">
                    <div>
                      <NotFound />
                    </div>
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

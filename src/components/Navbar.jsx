import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { openDB } from "idb";

export default function Navbar() {
  const [cartLength, setCartLength] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  const updateCartLength = async () => {
    try {
      const db = await openDB("cartDB", 1);
      const count = await db.count("cart");
      setCartLength(count || 0); // Update the state with the number of items in the cart
    } catch (error) {
      console.error("Failed to fetch cart length from IndexedDB:", error);
    }
  };

  useEffect(() => {
    // Load initial cart length
    updateCartLength();

    // Listener for cartUpdated events
    const handleCartUpdate = () => {
      updateCartLength();
    };

    window.addEventListener("cartUpdated", handleCartUpdate);

    return () => {
      // Cleanup the listener on unmount
      window.removeEventListener("cartUpdated", handleCartUpdate);
    };
  }, []);

  return (
    <nav
      className="navbar is-primary"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            <h1 className="title is-4 has-text-white">My Shop</h1>
          </Link>
          <button
            className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
            aria-label="menu"
            aria-expanded="false"
            onClick={toggleMenu}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </button>
        </div>

        <div className={`navbar-menu ${isActive ? "is-active" : ""}`}>
          <div className="navbar-start">
            <Link
              className="navbar-item"
              to="/"
              onClick={() => setIsActive(false)}
            >
              Home
            </Link>
            <Link
              className="navbar-item"
              to="/products"
              onClick={() => setIsActive(false)}
            >
              Products
            </Link>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <Link
                className="button is-light"
                to="/cart"
                onClick={() => setIsActive(false)}
              >
                <span className="icon">
                  <i className="fas fa-shopping-cart"></i>
                </span>
                <span>Cart</span>
                {cartLength > 0 && <span className="ml-2">({cartLength})</span>}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

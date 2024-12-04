import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../hooks/useCart";

export default function Navbar() {
  const [isActive, setIsActive] = useState(false);
  const [cartLength, setCartLength] = useState(0);
  const { getCartLength } = useCart();

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    const fetchCartLength = async () => {
      const length = await getCartLength(); // Fetch cart length
      setCartLength(length); // Update state
    };

    fetchCartLength();
  }, [getCartLength]);

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

          <a
            role="button"
            className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
            aria-label="menu"
            aria-expanded="false"
            onClick={toggleMenu}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
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

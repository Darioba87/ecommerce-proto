import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section
      className="hero is-large"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="hero-body"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      >
        <div className="container">
          <h1 className="title is-1 has-text-white">Welcome to Our Shop</h1>
          <h2 className="subtitle is-3 has-text-white mb-6">
            Discover amazing products at great prices
          </h2>
          <Link to="/products" className="button is-primary is-large">
            Shop Now
          </Link>
        </div>
      </div>
    </section>
  );
}

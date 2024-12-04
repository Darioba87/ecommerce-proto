import { Link } from "react-router-dom";
import { formatPrice } from "../hooks/formatPrice";
import useTruncateText from "../hooks/useTruncateText";
import { useCart } from "../hooks/useCart";

export default function ProductItem({ product }) {
  // Usa un valor predeterminado para evitar errores cuando product es null o undefined
  const title = product?.title || "Unnamed Product";
  const description = product?.description || "Unknown Description";
  const truncatedTitle = useTruncateText(title, 4);
  const truncateDesription = useTruncateText(description, 4);

  const { addToCart } = useCart();

  if (!product) {
    return (
      <div className="notification is-warning">Product not available.</div>
    );
  }

  const { id, image, price, category, rating } = product;

  return (
    <div className="card">
      <Link to={`/product/${id}`}>
        <div className="card-image">
          <figure className="image is-3by4">
            <img src={image} alt={title} />
          </figure>
        </div>
        <div className="card-content">
          <p className="title is-6">{truncatedTitle}</p>
          <hr />
          <p className="subtitle is-6">{formatPrice(price)}</p>
          <p className="subtitle is-6 has-text-grey">{truncateDesription}</p>
          <div className="tags has-addons">
            <span className="tag">Category</span>
            <span className="tag is-primary">
              {" "}
              <strong>{category || "Unknown Category"}</strong>
            </span>
          </div>
          <span className="tag is-info">{rating.rate}</span>
        </div>
      </Link>
      <footer className="card-footer">
        <button
          className="card-footer-item button is-primary"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>
      </footer>
    </div>
  );
}

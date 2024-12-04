import { formatPrice } from "../hooks/formatPrice";
import { useCart } from "../hooks/useCart";

export default function ProductDetail({
  image,
  name,
  price,
  description,
  category,
  id,
}) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    const product = {
      image,
      name,
      price,
      description,
      category,
      id,
    };
    addToCart(product);
  };

  return (
    <div className="columns">
      <div className="column is-half">
        <figure className="image iis-2by3">
          <img src={image} alt={name} />
        </figure>
      </div>
      <div className="column is-half">
        <h1 className="title">{name}</h1>
        <hr />

        <div className="content">
          <p>{description}</p>
        </div>

        <div className="tags has-addons">
          <span className="tag">Category</span>
          <span className="tag is-primary">
            {" "}
            <strong>{category || "Unknown Category"}</strong>
          </span>
        </div>

        <div className="is-flex is-justify-content-space-between is-align-items-center	">
          <p className="subtitle is-4 mb-0">{formatPrice(price)}</p>
          <button
            onClick={handleAddToCart}
            className="button is-primary is-large"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

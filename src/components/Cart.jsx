import { formatPrice } from "../hooks/formatPrice";
import { useCart } from "../hooks/useCart";

export default function Cart() {
  const { cart, removeFromCart } = useCart();

  const delivery = 3.99;
  const Ust = 19;
  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const tax = (subtotal * Ust) / 100; // 19% de impuestos sobre el subtotal
  const total = subtotal + tax + delivery;
  return (
    <>
      {cart.length === 0 ? (
        <div className="box">
          <p className="has-text-centered">Your cart is empty</p>
        </div>
      ) : (
        cart.map((item) => (
          <div className="cart box" key={item.id}>
            <div className="columns is-vcentered">
              <div className="column is-2">
                <figure className="image is-128x128 is-square">
                  <img src={item.image} alt={item.name} />
                </figure>
              </div>
              <div className="column">
                <p className="title is-5">{item.title}</p>
                <hr />
                <p className="title is-6">Amount: {item.quantity}</p>
              </div>
              <div className="column is-2">
                <p className="subtitle">
                  {formatPrice(item.price * item.quantity)}
                </p>
              </div>
              <div className="column is-2">
                <button
                  className="button is-danger is-small"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))
      )}

      <div className="is-flex is-justify-content-flex-end	">
        <div className="box has-background-info-light is-flex is-flex-direction-column	">
          <p className="title is-4 has-text-right">
            Subtotal: {formatPrice(subtotal)}
          </p>
          <p className="title is-4 has-text-right">
            Tax ({Ust}%): {formatPrice(tax)}
          </p>
          <p className="title is-4 has-text-right">
            Delivery: {formatPrice(delivery)}
          </p>
          <hr />
          <p className="title is-4 has-text-right">
            <strong>Total: {formatPrice(total)}</strong>
          </p>
        </div>
      </div>
    </>
  );
}

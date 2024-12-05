import { useFetchData } from "../hooks/fetchProducts";
import { useLoadingAndError } from "../hooks/loadChecker";
import ProductItem from "./ProductItem";
import { XyzTransitionGroup } from "@animxyz/react";

export default function FeaturedProducts() {
  const { data: products, loading, error } = useFetchData("");

  const loadingChecker = useLoadingAndError(loading, error);

  if (loadingChecker) {
    return loadingChecker;
  }

  /**
   * Only products with a rating of 4 or higher.
   */
  const productsFilter = products.filter(
    (product) => product.rating && product.rating.rate > 4
  );

  /**
   * Get random products with a rating of 4 or higher.
   */
  const randomProducts = productsFilter
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  return (
    <section className="section">
      <div className="container">
        <h2 className="title is-2 has-text-centered mb-6">Featured Products</h2>
        {/* Animated transition for products */}
        <XyzTransitionGroup
          className="columns is-multiline"
          xyz="fade small out-right stagger duration-10 ease-in-out"
        >
          {randomProducts.map((product) => (
            <div className="column is-4" key={product.id}>
              <ProductItem product={product} />
            </div>
          ))}
        </XyzTransitionGroup>
      </div>
    </section>
  );
}

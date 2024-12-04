import { useFetchData } from "../hooks/fetchProducts";
import { useLoadingAndError } from "../hooks/loadChecker";
import ProductItem from "./ProductItem";

export default function FeaturedProducts() {
  const { data: products, loading, error } = useFetchData("");

  const loadingChecker = useLoadingAndError(loading, error);

  if (loadingChecker) {
    return loadingChecker;
  }

  /**
   * only products with rate 4 or more
   */
  const productsFilter = products.filter(
    (product) => product.rating && product.rating.rate > 4
  );

  /**
   * get randon products with rate 4 or more
   */

  const randomProducts = productsFilter
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  return (
    <section className="section">
      <div className="container">
        <h2 className="title is-2 has-text-centered mb-6">Featured Products</h2>
        <div className="columns is-multiline">
          {randomProducts.slice(0, 3).map((product) => (
            <div className="column is-4" key={product.id}>
              <ProductItem product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

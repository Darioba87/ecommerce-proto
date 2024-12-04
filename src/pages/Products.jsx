import { useState, useEffect } from "react";
import ProductList from "../components/ProductList";
import CategoryFilter from "../components/CategoryFilter";
import { getProducts } from "../productsApi";
import { filterProducts, getCategories } from "../hooks/filterProducts";
import { useLoadingAndError } from "../hooks/loadChecker";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsData = await getProducts();
        setProducts(productsData);

        const uniqueCategories = getCategories(productsData);
        setCategories(uniqueCategories);
      } catch (err) {
        setError(`Failed to fetch products or categories: ${err.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = loading
    ? []
    : filterProducts(products, selectedCategory);

  const loadingChecker = useLoadingAndError(loading, error);

  if (loadingChecker) {
    return loadingChecker;
  }

  return (
    <section className="section">
      <div className="container">
        <div className="columns">
          <div className="column">
            <h1 className="title">Our Products</h1>
          </div>
          <div className="column is-narrow">
            <CategoryFilter
              categories={categories}
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
            />
          </div>
        </div>
        <ProductList products={filteredProducts} />
      </div>
    </section>
  );
}

import ProductItem from "./ProductItem";

export default function ProductList({ products }) {
  if (!products || products.length === 0) {
    return <div>No products available.</div>;
  }

  return (
    <div className="columns is-multiline">
      {products.map((product) => (
        <div className="column is-3" key={product.id}>
          <ProductItem product={product} />
        </div>
      ))}
    </div>
  );
}

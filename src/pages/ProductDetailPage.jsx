import { useParams, useNavigate } from "react-router-dom";
import ProductDetail from "../components/ProductDetail";
import { useFetchData } from "../hooks/fetchProducts";
import { useLoadingAndError } from "../hooks/loadChecker";

export default function ProductDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data: product, loading, error } = useFetchData(`/${id}`);

  const loadingChecker = useLoadingAndError(loading, error);

  if (loadingChecker) {
    return loadingChecker;
  }

  if (!product) {
    return (
      <section className="section">
        <div className="container">
          <div className="notification is-danger">
            Product not found
            <button
              className="button is-light ml-4"
              onClick={() => navigate("/products")}
            >
              Back to Products
            </button>
          </div>
        </div>
      </section>
    );
  }

  const { image, title: name, price, description, category } = product;

  return (
    <section className="section">
      <div className="container">
        <ProductDetail
          image={image}
          name={name}
          price={price}
          description={description}
          category={category}
          id={Number(id)}
        />
      </div>
    </section>
  );
}

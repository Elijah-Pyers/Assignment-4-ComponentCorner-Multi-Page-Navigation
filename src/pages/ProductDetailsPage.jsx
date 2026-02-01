import { Link, useParams } from "react-router-dom";

function ProductDetailsPage({ products, addToCart }) {
  const { id } = useParams();
  const productId = Number(id);
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return (
      <main className="page">
        <h2>Product Not Found</h2>
        <p>The product you're looking for doesn't exist.</p>
        <Link to="/products">← Back to Products</Link>
      </main>
    );
  }

  return (
    <main className="page">
      <Link to="/products">← Back to Products</Link>

      <h2 style={{ marginTop: "16px" }}>{product.name}</h2>
      <p>
        <strong>${product.price.toFixed(2)}</strong>
      </p>

      <img
        src={product.image}
        alt={product.name}
        style={{ width: "100%", maxWidth: "640px", borderRadius: "12px" }}
      />

      <p style={{ marginTop: "12px" }}>{product.description}</p>

      <button
        className="btn btn-primary"
        style={{ marginTop: "16px" }}
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </button>
    </main>
  );
}

export default ProductDetailsPage;

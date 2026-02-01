import "./ProductCard.css";
import { Link } from "react-router-dom";

function ProductCard({ product, onAddToCart }) {
  return (
    <article className="product-card">
      <Link
        to={`/products/${product.id}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <img className="product-image" src={product.image} alt={product.name} />
        <h3 className="product-name">{product.name}</h3>
      </Link>

      <p className="product-price">${product.price.toFixed(2)}</p>
      <p className="product-description">{product.description}</p>

      <div className="product-actions">
        <button
          className="btn btn-primary"
          type="button"
          onClick={() => onAddToCart(product)}
        >
          Add to Cart
        </button>

        <Link className="btn btn-ghost" to={`/products/${product.id}`}>
          View
        </Link>
      </div>
    </article>
  );
}

export default ProductCard;

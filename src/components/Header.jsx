import "./Header.css";
import { Link, NavLink } from "react-router-dom";

export default function Header({ storeName = "ComponentCorner", cartCount = 0 }) {
  return (
    <header className="site-header">
      <div className="header-inner">
        <h1 className="brand">
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            {storeName}
          </Link>
        </h1>

        <nav className="nav">
          <NavLink className="nav-link" to="/">
            Home
          </NavLink>
          <NavLink className="nav-link" to="/products">
            Products
          </NavLink>
          <NavLink className="nav-link" to="/cart">
            Cart
          </NavLink>
        </nav>

        <Link to="/cart" className="cart-container" aria-label="Shopping cart">
          <span className="cart-icon" aria-hidden="true">
            🛒
          </span>
          {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
        </Link>
      </div>
    </header>
  );
}

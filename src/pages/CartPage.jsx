import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";

function CartPage({ cart, cartTotal, removeFromCart }) {
  return (
    <main className="page">
      <h2 className="section-title">Your Cart</h2>

      {cart.length === 0 ? (
        <div className="empty-cart">
          <h3>Your cart is empty</h3>
          <p>Add an item to see it appear here.</p>
          <Link to="/products">Go to Products →</Link>
        </div>
      ) : (
        <>
          <div className="cart-items">
            {cart.map((item, index) => (
              <CartItem
                key={`${item.id}-${index}`}
                item={item}
                index={index}
                onRemove={removeFromCart}
              />
            ))}
          </div>

          <div className="cart-total">
            <span>Total:</span>
            <strong>${cartTotal.toFixed(2)}</strong>
          </div>
        </>
      )}
    </main>
  );
}

export default CartPage;

import "./CartItem.css";

function CartItem({ item, index, onRemove }) {
  return (
    <div className="cart-item">
      <img className="cart-item-image" src={item.image} alt={item.name} />

      <div className="cart-item-details">
        <div className="cart-item-name">{item.name}</div>
        <div className="cart-item-price">${item.price.toFixed(2)}</div>
      </div>

      <button className="remove-btn" type="button" onClick={() => onRemove(index)}>
        Remove
      </button>
    </div>
  );
}

export default CartItem;

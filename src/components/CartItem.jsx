function CartItem({
  item,
  increaseQuantity,
  decreaseQuantity,
  removeItem
}) {
  return (
    <div className="cart-item">
      <img
        src={item.image}
        alt={item.name}
      />

      <div className="cart-item-info">
        <h3>{item.name}</h3>

        <p>
          Rs. {item.price.toLocaleString()}
        </p>

        <div className="quantity">
          <button onClick={() => decreaseQuantity(item.id)}>
            -
          </button>

          <span>{item.quantity}</span>

          <button onClick={() => increaseQuantity(item.id)}>
            +
          </button>
        </div>

        <p>
          Subtotal: Rs.{" "}
          {(item.price * item.quantity).toLocaleString()}
        </p>

        <button
          className="remove-btn"
          onClick={() => removeItem(item.id)}
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default CartItem;
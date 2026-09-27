import { Link } from "react-router-dom";

function CartSummary({ cart }) {
  const subtotal = cart.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  const shipping = cart.length > 0 ? 100 : 0;

  const total = subtotal + shipping;

  const itemCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <div className="cart-summary">
      <h2>Cart Summary</h2>

      <div className="summary-row">
        <span>Items</span>
        <span>{itemCount}</span>
      </div>

      <div className="summary-row">
        <span>Subtotal</span>
        <span>Rs. {subtotal.toLocaleString()}</span>
      </div>

      <div className="summary-row">
        <span>Shipping</span>
        <span>Rs. {shipping}</span>
      </div>

      <hr />

      <div className="summary-total">
        <span>Total</span>
        <span>Rs. {total.toLocaleString()}</span>
      </div>

      <Link
        to="/checkout"
        className="checkout-btn"
      >
        Proceed to Checkout
      </Link>
    </div>
  );
}

export default CartSummary;
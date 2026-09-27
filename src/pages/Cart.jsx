import { Link } from "react-router-dom";

import CartItem from "../components/CartItem";
import CartSummary from "../components/CartSummary";

function Cart({
  cart,
  increaseQuantity,
  decreaseQuantity,
  removeItem
}) {
  if (cart.length === 0) {
    return (
      <div className="empty-cart">
        <h1>Your Cart is Empty</h1>

        <p>
          You haven't added any products yet.
        </p>

        <Link
          to="/"
          className="hero-btn"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <main className="cart-page">
      <h1>Shopping Cart</h1>

      <div className="cart-layout">
        <div className="cart-list">
          {cart.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              increaseQuantity={increaseQuantity}
              decreaseQuantity={decreaseQuantity}
              removeItem={removeItem}
            />
          ))}
        </div>

        <CartSummary cart={cart} />
      </div>
    </main>
  );
}

export default Cart;
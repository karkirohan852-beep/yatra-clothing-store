import { useState } from "react";
import { Link } from "react-router-dom";

function Checkout({ cart }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: ""
  });

  const [success, setSuccess] = useState(false);

  const subtotal = cart.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  const shipping = cart.length > 0 ? 100 : 0;

  const total = subtotal + shipping;

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    setSuccess(true);
  }

  if (cart.length === 0) {
    return (
      <div className="empty-cart">
        <h1>No items to checkout</h1>

        <Link
          to="/"
          className="hero-btn"
        >
          Go Shopping
        </Link>
      </div>
    );
  }

  return (
    <main className="checkout-page">
      <h1>Checkout</h1>

      <div className="checkout-layout">

        <form
          className="checkout-form"
          onSubmit={handleSubmit}
        >
          <h2>Customer Information</h2>

          <label>Full Name</label>

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label>Email</label>

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label>Phone</label>

          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <label>Address</label>

          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />

          <button
            type="submit"
            className="checkout-btn"
          >
            Place Demo Order
          </button>

          {success && (
            <div className="success-message">
              Order placed successfully!
              <br />
              This is a demo order. No real
              payment was processed.
            </div>
          )}
        </form>

        <div className="order-summary">
          <h2>Order Summary</h2>

          {cart.map((item) => (
            <div
              className="order-item"
              key={item.id}
            >
              <span>
                {item.name} × {item.quantity}
              </span>

              <span>
                Rs.{" "}
                {(
                  item.price * item.quantity
                ).toLocaleString()}
              </span>
            </div>
          ))}

          <hr />

          <div className="summary-row">
            <span>Subtotal</span>
            <span>
              Rs. {subtotal.toLocaleString()}
            </span>
          </div>

          <div className="summary-row">
            <span>Shipping</span>
            <span>Rs. {shipping}</span>
          </div>

          <div className="summary-total">
            <span>Total</span>

            <span>
              Rs. {total.toLocaleString()}
            </span>
          </div>
        </div>

      </div>
    </main>
  );
}

export default Checkout;
function ProductCard({ product, addToCart }) {
  return (
    <>
    <div className="product-card">
      <img
        src={product.image}
        alt={product.name}
      />

      <div className="product-info">
        <span className="category">
          {product.category}
        </span>

        <h3>{product.name}</h3>

        <p>{product.description}</p>

        <h4>Rs. {product.price.toLocaleString()}</h4>

        <button
          className="add-btn"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
    </>
  );
}

export default ProductCard;
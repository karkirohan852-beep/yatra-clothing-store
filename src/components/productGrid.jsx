import ProductCard from "./productCard";

function ProductGrid({ products, addToCart }) {
  if (products.length === 0) {
    return (
      <div className="empty-products">
        <h3>No products found</h3>
        <p>Try another search or category.</p>
      </div>
    );
  }

  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          addToCart={addToCart}
        />
      ))}
    </div>
  );
}

export default ProductGrid;
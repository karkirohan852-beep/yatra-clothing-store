import { useState } from "react";

import SearchBar from "../components/searchBar";
import CategoryFilter from "../components/CategoryFilter";
import ProductGrid from "../components/productGrid";

function Home({ products, addToCart }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("default");

  let filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" ||
      product.category === category;

    return matchesSearch && matchesCategory;
  });

  if (sort === "low") {
    filteredProducts.sort(
      (a, b) => a.price - b.price
    );
  }

  if (sort === "high") {
    filteredProducts.sort(
      (a, b) => b.price - a.price
    );
  }

  if (sort === "az") {
    filteredProducts.sort(
      (a, b) => a.name.localeCompare(b.name)
    );
  }

  if (sort === "za") {
    filteredProducts.sort(
      (a, b) => b.name.localeCompare(a.name)
    );
  }

  return (
    <main>
      <section className="hero">
        <div>
          <p className="hero-small">
            YATRA CLOTHING STORE
          </p>

          <h1>
            Discover Your Style
          </h1>

          <p>
            Modern clothing for everyday life.
          </p>

          <a href="#products" className="hero-btn">
            Shop Now
          </a>
        </div>
      </section>

      <section
        className="products-section"
        id="products"
      >
        <div className="section-title">
          <h2>Latest Collection</h2>

          <SearchBar
            search={search}
            setSearch={setSearch}
          />
        </div>

        <div className="controls">
          <CategoryFilter
            category={category}
            setCategory={setCategory}
          />

          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="default">
              Sort By
            </option>

            <option value="low">
              Price: Low to High
            </option>

            <option value="high">
              Price: High to Low
            </option>

            <option value="az">
              Name: A-Z
            </option>

            <option value="za">
              Name: Z-A
            </option>
          </select>
        </div>

        <ProductGrid
          products={filteredProducts}
          addToCart={addToCart}
        />
      </section>
    </main>
  );
}

export default Home;


 


















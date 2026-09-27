function CategoryFilter({ category, setCategory }) {
  const categories = [
    "All",
    "T-Shirts",
    "Hoodies",
    "Jeans",
    "Jackets",
    "Shoes"
  ];

  return (
    <div className="filter-container">
      {categories.map((item) => (
        <button
          key={item}
          className={category === item ? "active-filter" : ""}
          onClick={() => setCategory(item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
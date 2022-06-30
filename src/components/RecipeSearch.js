function RecipeSearch() {
  return (
    <section className="search-section">
      <h1>Look for Ingredient</h1>
      <div>
        <input
          name="search-input"
          type="text"
          placeholder="Type Ingredient here"
        />
        <button className="search-btn" type="submit">
          Search
        </button>
      </div>
    </section>
  );
}

export default RecipeSearch;
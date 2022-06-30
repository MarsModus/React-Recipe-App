import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import { StyledEngineProvider } from '@mui/material/styles';
import Header from "./layouts/Header/Header";
import Footer from "./layouts/Footer";
//import RecipeSearch from "./components/RecipeSearch";
import Recipe from "./components/Recipe/Recipe";


function App() {
  const APP_ID = "cbc5cc8d";
  const APP_KEY = "8b4acc656bdd0ca3ed5218adf2b0fdba";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("pork");

  useEffect(() => {
    getRecipe().then(res=> setRecipes(res.data.hits));
  }, [query]);

  async function getRecipe() {
    const res = await axios.get(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    return res;
  }

  function updateSearch(e) {
    setSearch(e.target.value);
  }

  function getSearch(e) {
    e.preventDefault();
    setQuery(search);
  }

  return (
    <>
      <Header />
      <main>
        <section className="search-section">
          <h1>Look for Ingredient</h1>
          <div>
            <form onSubmit={getSearch} className="search-form">
              <input
                name="search-input"
                type="text"
                placeholder="Type Ingredient here"
                value={search}
                onChange={updateSearch}
              />
              <button className="search-btn" type="submit">
                Search
              </button>
            </form>
          </div>
        </section>
        <section>
          {recipes.map((recipe) => (
            <Recipe
              key={recipe.recipe.uri}
              title={recipe.recipe.label}
              calories={Math.floor(recipe.recipe.calories)}
              image={recipe.recipe.image}
              ingredients={recipe.recipe.ingredients}
            />
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;

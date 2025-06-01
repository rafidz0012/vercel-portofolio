import { useEffect, useState } from "react";
import Recipes from "./Recipes";
import "../style/Home.css";
import HomeSlideBanner from "./HomeSlideBanner";

const Home = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((recipes) => {
        setRecipes(recipes);
      });
  }, []);

  return (
    <div className="home">
      <h1 style={{ marginBottom: "1.5rem" }}>Welcome to Masak Yuk</h1>
      <h3>Makan mulu tapi gak pernah masak</h3>
      <HomeSlideBanner />

      <div className="recipe-container">
        {recipes.map((recipe) => (
          <Recipes recipe={recipe} key={recipe.id} />
        ))}
      </div>
    </div>
  );
};
export default Home;

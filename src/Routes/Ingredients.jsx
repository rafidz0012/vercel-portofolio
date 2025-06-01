import { useEffect, useState } from "react";
import IngredientsCard from "./IngredientsCard";
import "../style/Ingredients.css";

const Ingredients = () => {
  const [ingredients, setingredients] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((ingredients) => {
        setingredients(ingredients);
      });
  }, []);
  return (
    <div className="container">
      {ingredients.map((ingredients) => (
        <IngredientsCard ingredients={ingredients} key={ingredients.id} />
      ))}
    </div>
  );
};

export default Ingredients;

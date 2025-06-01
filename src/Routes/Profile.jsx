import "../style/Profile.css";
import profile from "../asset/profil.jpg";
import pencil from "../asset/pencil-svgrepo-com.svg";
import Recipes from "./Recipes";
import { useEffect, useState } from "react";

const ProfilePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((recipes) => {
        setRecipes(recipes);
      });
  }, []);
  return (
    <div className="profile-box">
      <div className="container-img">
        <div className="cover-img"></div>
        <div className="profile-container">
          <img src={profile} alt="foto profile" className="profile-img" />
          <img src={pencil} alt="pencil" className="pencil" />
        </div>
        <h1>Your Name</h1>
      </div>
      <div className="post-template">
        <h2>Postingan</h2>
        <div className="line-stripe"></div>
      </div>
      <div className="user-recipe">
        {recipes.map((recipe) => (
          <Recipes recipe={recipe} key={recipe.id} />
        ))}
      </div>
    </div>
  );
};
export default ProfilePage;

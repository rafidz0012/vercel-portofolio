import React from "react";
import { Link } from "react-router-dom";
import "../style/NavBar.css";
import profile from "../asset/profil.jpg";

const NavBar = () => {
  return (
    <nav>
      <Link to="/home" className="link logo">
        Masak Yuk
      </Link>
      <ul>
        <li>
          <Link to="/home" className="link">
            Resep
          </Link>
        </li>
        <li>
          <Link to="/recipeForm" className="link">
            Resepmu
          </Link>
        </li>
        <li>
          <Link to="/ingredients" className="link">
            Bahan
          </Link>
        </li>
        <li>
          <Link to="/profile" className="link">
            <img src={profile} alt="profile" className="profile" />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./Routes/Home";
import Ingredients from "./Routes/Ingredients";
import RecipeForm from "./Routes/RecipeForm";
import Profile from "./Routes/Profile";
import Login from "./Routes/Login";
import NotFound from "./Routes/NotFound";
import SignUp from "./Routes/SignUp";
import "./App.css";

function App() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const isNotFound =
    location.pathname !== "/" &&
    location.pathname !== "/home" &&
    location.pathname !== "/student" &&
    location.pathname !== "/ingredients" &&
    location.pathname !== "/recipeForm" &&
    location.pathname !== "/profile";
  return (
    <div className="app">
      {!(isHome || isNotFound) && <NavBar />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/ingredients" element={<Ingredients />} />
        <Route path="/recipeForm" element={<RecipeForm />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

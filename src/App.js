import React, { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Edit from "./pages/Edit";
import Home from "./pages/Home";
import Index from "./pages/Index";
import New from "./pages/New";
import NotFound from "./pages/NotFound";
import Show from "./pages/Show";

import mockUsers from "./mockUsers";
import mockRecipes from "./mockRecipes";
import mockReviews from "./mockReviews";

import { Routes, Route } from "react-router-dom";
import "./App.css";

const App = () => {
  const [currentUser, setCurrentUser] = useState(mockUsers);
  const [recipe, setRecipe] = useState(mockRecipes);
  const [review, setReview] = useState(mockReviews);
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);

  const readRecipe = () => {
    fetch(
      "https://api.spoonacular.com/recipes/FindByIngredients/generate?apiKey=bb08e25c20e84b7983251abaf19edcbf"
    )
      .then((response) => response.json())
      .then((data) => {
        setRecipe(data);
      })
      .catch((error) => console.log("Recipe read errors: ", error));
  };

  const handleChange1 = () => {
    setChecked1(!checked1);
  };
  const handleChange2 = () => {
    setChecked2(!checked2);
  };


  return (
    <div>
      <Header />
      <div>
        <h2>Pick your Protein</h2>
        <Checkbox label="Beef" value={checked1} onChange={handleChange1} />
        <br/>
        <Checkbox label="Chicken" value={checked2} onChange={handleChange2} />

      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/index" element={<Index />} />
        <Route path="/show" element={<Show />} />
        <Route path="/new" element={<New />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};
const Checkbox = ({ label, value, onChange }) => {
  return (
    <label>
      <input type="checkbox" checked={value} onChange={onChange} />
      {label}
    </label>
  );
};

export default App;

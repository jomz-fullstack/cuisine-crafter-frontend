import React, { useState, useEffect } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Edit from "./pages/Edit";
import Home from "./pages/Home";
import Index from "./pages/Index";
import New from "./pages/New";
import NotFound from "./pages/NotFound";
import Show from "./pages/Show";
import ReviewShow from "./pages/ReviewShow";

import mockUsers from "./mockUsers";
import mockRecipes from "./mockRecipes";
import mockReviews from "./mockReviews";

import { Routes, Route} from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";

import "./App.css";

const App = () => {
  const navigate = useNavigate();
  const location = useLocation()
  const isHomePage = location.pathname === "/";
  const [currentUser, setCurrentUser] = useState(mockUsers);
  const [recipe, setRecipe] = useState(mockRecipes);
  const [review, setReview] = useState(mockReviews);
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);

  useEffect(() => {
    readRecipe();
    readReview()
  }, []);

  const url = "http://localhost:3000/";

  const readRecipe = () => {
    fetch(`${url}index`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setRecipe(data);
      })
      .catch((error) => console.error("Recipe read errors: ", error));
  };

  const readReview = () => {
    fetch(`${url}reviews/:recipeId`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setReview(data);
      })
      .catch((error) => console.error("Review read errors: ", error));
  };

  const handleChange1 = () => {
    setChecked1(!checked1);
  };
  const handleChange2 = () => {
    setChecked2(!checked2);
  };

  const createReview = (review) => {
    console.log(review);
  };



  return (
    <div>
      <Header />
      {isHomePage && (
        <div>
          <h2>Pick your Protein</h2>
          <Checkbox label="Beef" value={checked1} onChange={handleChange1} />
          <br />
          <Checkbox label="Chicken" value={checked2} onChange={handleChange2} />
        </div>
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/index" element={<Index recipe={recipe} />} />
        <Route path="/reviews/:recipeId" element={<ReviewShow reviews={review} />} />
        <Route path="/show/:id" element={<Show recipes={recipe} />} />
        <Route path="/new" element={<New createReview={createReview} />} />
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

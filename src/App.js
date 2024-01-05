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

  return (
    <div>
      <Header />
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

export default App;

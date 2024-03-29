import React, { useState, useEffect } from "react";
import SuggestedRecipes from "../components/SuggestedRecipes";
import HomeImage from "../assets/HomeImage.png";
import { Link } from "react-router-dom";

const Home = ({recipe}) => {

  return (
    <div className="checkbox-container">
      <img src={HomeImage} style={{ width:"100%", height:"auto", borderBottom:"5px solid black"}}/>
      <SuggestedRecipes recipes={recipe} />
    </div>
  );
};

export default Home;
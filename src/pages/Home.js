import React, { useState, useEffect } from "react";
import SuggestedRecipes from "../components/SuggestedRecipes";
import HomeImage from "../assets/HomeImage.png";
import { Link } from "react-router-dom";

const Home = ({recipe}) => {
  const [checkedItems, setCheckedItems] = useState({});

  return (
    <div className="checkbox-container">
      <img src={HomeImage} style={{ width:"100%", height:"auto", borderBottom:"5px solid black"}}/>
      <div className="middle-container">
        <h1>Hello There.</h1>
      </div>
      <SuggestedRecipes recipes={recipe} />
    </div>
  );
};

export default Home;
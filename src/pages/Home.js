import React, { useState } from "react";
import SuggestedRecipes from "../components/SuggestedRecipes";
import mockRecipes from "../mockRecipes";
import HomeImage from "../assets/HomeImage.png";

const Home = ({recipe}) => {
  const [checkedItems, setCheckedItems] = useState({});
  const proteinOptions = [
    "Beef",
    "Chicken",
    "Tofu",
    "Duck",
    "Veal",
    "Pork",
    "Turkey",
    "Lamb",
    "Crab",
    "Oyster",
    "Scallops",
    "Clams",
    "Eggs",
  ];

  const handleChange = (protein) => {
    setCheckedItems((prevItems) => ({
      ...prevItems,
      [protein]: !prevItems[protein],
    }));
  };


  return (
    <div className="checkbox-container">
      <img src={HomeImage} style={{ width:"100%", height:"auto", borderBottom:"5px solid black"}}/>
      <p className="home-header" >Pick your Protein</p>
      {proteinOptions.map((protein) => (
        <label key={protein} className="checkboxes">
          <input
            type="checkbox"
            checked={checkedItems[protein] || false}
            onChange={() => handleChange(protein)}
          />
          {protein}
        </label>
      ))}
      <br />
      <button>Find Recipes</button>
      <SuggestedRecipes recipes={recipe} />
    </div>
  );
};

export default Home;

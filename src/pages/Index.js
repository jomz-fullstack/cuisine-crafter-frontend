// Index.js
import React from "react";
import { Link } from "react-router-dom";

const Index = ({ recipe }) => {
  return (
    <div>
      <h1>Recipe Page</h1>
      {recipe &&
        recipe.map((recipeItem) => (
          <div key={recipeItem.id}>
            <h2>{recipeItem.name}</h2>
            <Link to={`/reviews/${recipeItem.id}`}>View Reviews</Link>
            <p>{recipeItem.image}</p>
            <p>Ingredients: {recipeItem.ingredients}</p>
            <p>{recipeItem.protein}</p>
            <p>Instructions: {recipeItem.instructions}</p>
            <p>{recipeItem.nutrition}</p>
          </div>
        ))}
    </div>
  );
};

export default Index;

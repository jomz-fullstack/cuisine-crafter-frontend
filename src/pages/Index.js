import React from "react";
import { Link } from "react-router-dom";

const Index = ({ recipe }) => {
  return (
    <div>
      {recipe.map((recipeItem) => (
          <div key={recipeItem.id}>
            <Link to={`/show/${recipeItem.id}`}><h1>{recipeItem.name}</h1></Link>

            <img src={recipeItem.image} alt={recipeItem.name} style={{ height: "500px", width: "500px"}}/>
            <br/>
            <Link to={`/reviews/${recipeItem.id}`}>View Reviews</Link>
            <p>Ingredients: {recipeItem.protein},{" "}{recipeItem.ingredients}</p>
            <p>Instructions: {recipeItem.instructions}</p>
            <p>{recipeItem.nutrition}</p>
          </div>
        ))}
    </div>
  );
};

export default Index;

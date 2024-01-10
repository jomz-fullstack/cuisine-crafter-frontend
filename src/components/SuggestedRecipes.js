import React from "react";
import { Link } from "react-router-dom";

const SuggestedRecipes = ({ recipes }) => {
  const selectedRecipes = recipes.slice(2, 5);

  return (
    <div>
      <h2>Suggested Recipes</h2>
      <div className="suggested-recipes-container">
        {selectedRecipes.map((recipe) => (
          <Link to={`/show/${recipe.id}`} key={recipe.id} className="suggested-recipe">
            <div className="circular-image">
              <img src={recipe.image} alt={`Recipe ${recipe.id}`} />
            </div>
            <p>{recipe.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SuggestedRecipes;

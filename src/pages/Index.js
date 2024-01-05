import React from "react"
import { Link } from "react-router-dom"

const Index = ({ recipe, reviews }) => {
  return (
    <div>
      <h1>Recipe Page</h1>
      {recipe &&
        recipe?.map((recipe, index) => {
          return (
            <div key={index}>
              <h2>{recipe.name}</h2>
              <Link to={`/reviews/${recipe.recipe_id}`}>View Reviews</Link>
              <p>{recipe.image}</p>
              <p>Ingredients: {recipe.ingredients}</p>
              <p>{recipe.protein}</p>
              <p>Instructions: {recipe.instructions}</p>
              <p>{recipe.nutrition}</p>
            </div>
          )
        })}
    </div>
  )
}

export default Index

import React, { useState, useEffect } from "react";
import { Input } from "reactstrap";
import { Card, CardBody, CardTitle } from "reactstrap";

const Index = () => {
  const [data, setData] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [input, setInput] = useState("");
  const apiKey = process.env.REACT_APP_API_KEY;

  const fetchRecipeDetails = (recipeId) => {
    fetch(
      `https://api.spoonacular.com/recipes/${recipeId}/analyzedInstructions?stepBreakdown=true&apiKey=${apiKey}`
    )
      .then((response) => response.json())
      .then(async (steps) => {
        const nutritionResponse = await fetch(
          `https://api.spoonacular.com/recipes/${recipeId}/nutritionWidget.json?apiKey=${apiKey}`
        );
        const nutritionData = await nutritionResponse.json();

        const selectedRecipeDetails = {
          instructions: steps.flatMap((instruction) => instruction.steps),
          nutrition: nutritionData,
        };
        setSelectedRecipe(selectedRecipeDetails);
      })
      .catch((error) => console.log("errors: ", error));
  };

  const searchRecipes = () => {
    fetch(
      `https://api.spoonacular.com/recipes/complexSearch?query=${input}&number=6&limitLicense=true&apiKey=${apiKey}`
    )
      .then((response) => response.json())
      .then(async (payload) => {
        console.log(payload);
        const searchedRecipes = payload.results.map(async (recipe) => {
          const nutritionResponse = await fetch(
            `https://api.spoonacular.com/recipes/${recipe.id}/nutritionWidget.json?apiKey=${apiKey}`
          );
          const nutritionData = await nutritionResponse.json();

          return {
            id: recipe.id,
            title: recipe.title,
            image: recipe.image,
            nutrition: nutritionData,
          };
        });

        Promise.all(searchedRecipes)
          .then((recipesWithNutrition) => setData([...recipesWithNutrition]))
          .catch((error) => console.log("errors: ", error));
      })
      .catch((error) => console.log("errors: ", error));
  };

  return (
    <>
      {selectedRecipe ? (
        <div>
          <h2>{selectedRecipe.title}</h2>
          <h3>Instructions:</h3>
          <ol>
            {selectedRecipe.instructions.map((step, index) => (
              <li key={index}>{step.step}</li>
            ))}
          </ol>
          <h3>Nutrition:</h3>
          <ul>
            {selectedRecipe.nutrition &&
              selectedRecipe.nutrition.nutrients
                .filter(
                  (nutrient) =>
                    nutrient.name === "Protein" || nutrient.name === "Calories"
                )
                .map((nutrient) => (
                  <li key={nutrient.name}>
                    {nutrient.name}: {nutrient.amount} {nutrient.unit}
                  </li>
                ))}
          </ul>
          <button onClick={() => setSelectedRecipe(null)}>
            Back to Recipes
          </button>
        </div>
      ) : (
        <>
          <Input
            type="text"
            name="header"
            onChange={(e) => setInput(e.target.value)}
            value={input}
            placeholder="Beef Wellington, etc."
            className="search-input"
          />
          <br />
          <button onClick={searchRecipes} className="edit-submit">
            Search
          </button>
          <div className="recipe-cards">
            {data.map((recipe) => (
              <Card
                key={recipe.id}
                className="recipe-card"
                onClick={() => fetchRecipeDetails(recipe.id)}
              >
                <CardBody style={{ textAlign: "center" }}>
                  <CardTitle
                    tag="h5"
                    style={{
                      fontSize: "30px",
                    }}
                  >
                    <h2>{recipe.title}</h2>
                  </CardTitle>
                  {recipe.image && (
                    <img
                      src={recipe.image}
                      alt={recipe.title}
                      style={{ width: "100%", height: "auto" }}
                    />
                  )}
                </CardBody>
              </Card>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default Index;

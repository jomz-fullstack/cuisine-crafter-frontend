import React, { useState, useEffect } from "react";
import SuggestedRecipes from "../components/SuggestedRecipes";
import mockRecipes from "../mockRecipes";
import HomeImage from "../assets/HomeImage.png";
import { Link } from "react-router-dom";

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

  const [data, setData] = useState([])
  const [selectedRecipe, setSelectedRecipe] = useState(null)
  const [input, setInput] = useState("")
  const apiKey = process.env.REACT_APP_API_KEY

  const searchRecipes = () => {
      const selectedProteins = Object.keys(checkedItems).filter(
        (protein) => checkedItems[protein]
      );

      const query = encodeURIComponent(input);
      const proteinsQuery = selectedProteins.map((protein) =>
        encodeURIComponent(protein)
      );

      const proteinsQueryString = proteinsQuery.join(",");

      fetch(
        `https://api.spoonacular.com/recipes/complexSearch?query=${query}&includeIngredients=${proteinsQueryString}&number=3&limitLicense=true&apiKey=${apiKey}`
      )

      .then((response) => response.json())
      .then(async (payload) => {
        console.log(payload)
        const searchedRecipes = payload.results.map(async (recipe) => {
          const nutritionResponse = await fetch(
            `https://api.spoonacular.com/recipes/${recipe.id}/nutritionWidget.json?apiKey=${apiKey}`
          )
          const nutritionData = await nutritionResponse.json()

          return {
            id: recipe.id,
            title: recipe.title,
            image: recipe.image,
            nutrition: nutritionData,
          }
        });

        Promise.all(searchedRecipes)
          .then((recipesWithNutrition) => setData([...recipesWithNutrition]))
          .catch((error) => console.log("errors: ", error))
      })
      .catch((error) => console.log("errors: ", error))
  }

  // const fetchRandomRecipes = (count) => {
  //   fetch(
  //     `https://api.spoonacular.com/recipes/random?number=${count}&limitLicense=true&apiKey=${apiKey}`
  //   )
  //     .then((response) => response.json())
  //     .then((payload) => {
  //       console.log(payload)

  //       const randomRecipes = payload.recipes.map(async (recipe) => {
  //         const nutritionResponse = await fetch(
  //           `https://api.spoonacular.com/recipes/${recipe.id}/nutritionWidget.json?apiKey=${apiKey}`
  //         )
  //         const nutritionData = await nutritionResponse.json()

  //         return {
  //           id: recipe.id,
  //           title: recipe.title,
  //           image: recipe.image,
  //           nutrition: nutritionData,
  //         }
  //       })

  //       Promise.all(randomRecipes)
  //         .then((recipesWithNutrition) => setData([...recipesWithNutrition]))
  //         .catch((error) => console.log("errors: ", error))
  //     })
  //     .catch((error) => console.log("errors: ", error))
  // }

  const fetchRecipeDetails = (recipeId) => {
    fetch(
      `https://api.spoonacular.com/recipes/${recipeId}/analyzedInstructions?stepBreakdown=true&apiKey=${apiKey}`
    )
      .then((response) => response.json())
      .then(async (steps) => {
        const nutritionResponse = await fetch(
          `https://api.spoonacular.com/recipes/${recipeId}/nutritionWidget.json?apiKey=${apiKey}`
        )
        const nutritionData = await nutritionResponse.json()

        const selectedRecipeDetails = {
          instructions: steps.flatMap((instruction) => instruction.steps),
          nutrition: nutritionData,
        }
        setSelectedRecipe(selectedRecipeDetails)
      })
      .catch((error) => console.log("errors: ", error))
  }

  

  const handleChange = (protein) => {
    setCheckedItems((prevItems) => ({
      ...prevItems,
      [protein]: !prevItems[protein],
    }));
  };

  useEffect(() => {
    // fetchRandomRecipes(3)
    fetchRecipeDetails(3)
  }, [])


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
      <Link to={"/filter"}>
      <button onClick={searchRecipes}>Find Recipes</button>
      </Link>
      <SuggestedRecipes recipes={recipe} />
    </div>
  );
};

export default Home;
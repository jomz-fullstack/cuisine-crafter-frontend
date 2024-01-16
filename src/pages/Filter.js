// import React from 'react';

// const Filter = ({ setSelectedRecipe, selectedRecipe }) => {
//     // if (!setSelectedRecipe || !setSelectedRecipe.instructions) {
//     //     return <div>No instructions available</div>; 
//     // }
//   const apiKey = process.env.REACT_APP_API_KEY;
  
//   const fetchRecipeDetails = (recipeId) => {
//     fetch(
//       `https://api.spoonacular.com/recipes/${recipeId}/analyzedInstructions?stepBreakdown=true&apiKey=${apiKey}`
//     )
//       .then((response) => response.json())
//       .then(async (steps) => {
//         const nutritionResponse = await fetch(
//           `https://api.spoonacular.com/recipes/${recipeId}/nutritionWidget.json?apiKey=${apiKey}`
//         );
//         const nutritionData = await nutritionResponse.json();

//         const selectedRecipeDetails = {
//           instructions: steps.flatMap((instructions) => instructions.steps),
//           nutrition: nutritionData,
//         };
//         setSelectedRecipe(selectedRecipeDetails);
//       })
//       .catch((error) => console.log("errors: ", error));
//   };
// console.log("selectedRecipe" , selectedRecipe )

//   return (
//         <>
//           {selectedRecipe ? (
//             <div>
//               <h2>{selectedRecipe.title}</h2>
//               <h3>Instructions:</h3>
//               <ol>
//                 {selectedRecipe.instructions.map((step, index) => (
//                   <li key={index}>{step.step}</li>
//                 ))}
//               </ol>
//               <h3>Nutrition:</h3>
//               <ul>
//                 {selectedRecipe.nutrition &&
//                   selectedRecipe.nutrition.nutrients
//                     .filter(
//                       (nutrient) =>
//                         nutrient.name === "Protein" || nutrient.name === "Calories"
//                     )
//                     .map((nutrient) => (
//                       <li key={nutrient.name}>
//                         {nutrient.name}: {nutrient.amount} {nutrient.unit}
//                       </li>
//                     ))}
//               </ul>
//               <button onClick={() => setSelectedRecipe(null)}>
//                 Back to Recipes
//               </button>
//             </div>
//           ) : (
//             // Your other content here
//             <>
//               {/* ... */}
//             </>
//           )}
//         </>
//       );
//     };
        
// // <div>
// //        {selectedRecipe.map && (
// //         <div>
// //           <h1>{setSelectedRecipe.name}</h1>
// //           <ul>
// //             {setSelectedRecipe.instructions.map((step, index) => (
// //               <li key={index}>{step}</li>
// //             ))}
// //           </ul>
// //         </div>
// //       )}
// export default Filter;

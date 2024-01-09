import React from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"


const Show = ({ recipes }) => {
    const { id } = useParams()
    let selectedRecipe = recipes?.find((recipe) => recipe.id === +id)

    return(
        <div>
            {selectedRecipe && (
                <div className="recipe-container">
                <img src={selectedRecipe.image}/>
                <h1>{selectedRecipe.name}</h1>
                <h3>Ingredients:<br/>
                {selectedRecipe.protein}{", "}{selectedRecipe.ingredients}</h3>
                <h2>Instructions: <br/>
                {selectedRecipe.instructions}</h2>
                <h3>Nutritional Facts: <br/>
                {selectedRecipe.nutrition}</h3>
                </div>
            )}
        </div>
    )
}

export default Show


import React from "react"
import { useParams } from "react-router-dom"


const Show = ({ recipes }) => {
    const { id } = useParams()
    let selectedRecipe = recipes?.find((recipe) => recipe.id === +id)

    return(
        <div>
            {selectedRecipe && (
                <>
                <img src={selectedRecipe.image} />
                <h1>{selectedRecipe.name}</h1>
                <h2>{selectedRecipe.instructions}</h2>
                <h3>{selectedRecipe.protein}</h3>
                <h3>{selectedRecipe.nutrition}</h3>
                </>
            )}


        </div>

    )
}

export default Show


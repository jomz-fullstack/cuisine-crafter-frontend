// ReviewIndex.js
import React from "react"

const ReviewIndex = ({ reviews, recipeId }) => {
  const recipeReviews = reviews?.filter(
    (review) => review.recipe_id === parseInt(recipeId)
  )

  return (
    <div>
      <h1>Reviews for Recipe {recipeId}</h1>
      {recipeReviews &&
        recipeReviews.map((review, index) => (
          <div key={index}>
            <h2>{review.header}</h2>
            <p>{review.body}</p>
            <p>Stars: {review.stars}</p>
          </div>
        ))}
    </div>
  )
}

export default ReviewIndex

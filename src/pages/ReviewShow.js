import React from "react"
import { useParams, Link } from "react-router-dom"
import { Button } from "reactstrap"

const ReviewShow = ({ reviews }) => {
  const { recipeId } = useParams()
  const recipeReviews = reviews.filter(
    (review) => review.recipe_id === +recipeId
  )

  return (
    <div>
      <h1>All Reviews</h1>
      {recipeReviews.map((reviewItem) => (
        <div key={reviewItem.id}>
          <h2>{reviewItem.header}</h2>
          <p>{reviewItem.body}</p>
          <p>Stars: {reviewItem.stars}</p>
        </div>
      ))}
      <Link to={`/new/${recipeId}`}>
        <button> Create a New Review</button>{" "}
      </Link>
    </div>
  )
}

export default ReviewShow

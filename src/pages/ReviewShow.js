import React from "react"
import { useParams, Link } from "react-router-dom"

const ReviewShow = ({ reviews, deleteReview }) => {
  const { recipeId } = useParams()
  const recipeReviews = reviews.filter(
    (review) => review.recipe_id === +recipeId
  )

  const renderStars = (rating) => {
    const starElements = []
    for (let i = 1; i <= 5; i++) {
      starElements.push(
        <span
          key={i}
          style={{
            color: i <= rating ? "gold" : "black",
            fontSize: "20px",
            marginRight: "1px",
          }}
        >
          ★
        </span>
      )
    }
    return starElements
  }

  return (
    <div>
      <h1>All Reviews</h1>
      <Link to={`/new/${recipeId}`}>
        <button>Create New Review</button>
      </Link>
      {recipeReviews.map((reviewItem) => (
        <div key={reviewItem.id}>
          <h2>
            {reviewItem.header}{" "}
            <Link to={`/edit/${reviewItem.id}`}>
              {" "}
              <button>Edit Review</button>
            </Link>
          </h2>
          <p>{reviewItem.body}</p>
          {renderStars(reviewItem.stars)}
          <br />
          <Link to={"/reviews/:recipeId"}>
            <button onClick={() => deleteReview(reviewItem.id)}>
              Delete Review
            </button>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default ReviewShow

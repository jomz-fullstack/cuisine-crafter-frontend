import React from "react"
import { useParams, Link } from "react-router-dom"

const ReviewShow = ({ reviews, deleteReview, newReview }) => {


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
    <div className="review-container">
      <h1>All Reviews</h1>
      <Link to={`/new`}>
        <button className="create-review-button">Create New Review</button>
      </Link>
      {reviews.map((reviewItem) => (
        <div key={reviewItem.id}>
          <h2>
            {reviewItem.header}
          </h2>
          <p>{reviewItem.body}</p>
          {renderStars(reviewItem.stars)}
          <br />
          <Link to={`/edit/${reviewItem.id}`}>
              <button className="update-button">Edit Review</button>
            </Link>{"|"}
          <Link to={"/reviews"}>
            <button className="update-button" onClick={() => deleteReview(reviewItem.id)}>
              Delete Review
            </button>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default ReviewShow

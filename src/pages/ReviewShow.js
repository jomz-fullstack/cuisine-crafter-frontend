import React from "react";
import { useParams } from "react-router-dom";

const ReviewShow = ({ reviews }) => {
  const { recipeId } = useParams();
  const recipeReviews = reviews.filter((review) => review.recipe_id === +recipeId);

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
    </div>
  );
};

export default ReviewShow;
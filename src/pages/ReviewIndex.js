import React from "react";

const ReviewIndex = ({ review }) => {
  return (
    <div>
      <h1>All Reviews</h1>
      {review.map((review) => (
        <div key={review.id}>
          <h2>{review.header}</h2>
          <p>{review.body}</p>
          <p>Stars: {review.stars}</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewIndex;

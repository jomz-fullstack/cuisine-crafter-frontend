import React, { useState } from "react";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";
import { useNavigate, useParams } from "react-router-dom";
import ReactStarRating from "react-star-ratings-component";

const Edit = ({ reviews, updateReview, currentUser }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  let selectedReview = reviews?.find((review) => review.id === +id);
  const [editReview, setEditReview] = useState({
    id: selectedReview?.id || "",
    header: selectedReview?.header || "",
    body: selectedReview?.body || "",
    stars: selectedReview?.stars || "",
  });
  const handleChange = (e) => {
    setEditReview({ ...editReview, [e.target.name]: e.target.value });
  };

  const handleRatingChange = (newRating) => {
    setEditReview({ ...editReview, stars: newRating });
  };

  const handleSubmit = () => {
    if (selectedReview) {
      updateReview(editReview);
      navigate("/reviews");
    } else {
      console.error("Selected review not found");
    }
  };

  return (
    <div className="edit-container">
      <h1>Edit Review</h1>
      <div className="input-container">
        <Form>
          <FormGroup>
            <Label for="header" style={{ fontSize: "25px" }}>
              Review Header
            </Label>
            <br />
            <Input
              type="text"
              name="header"
              onChange={handleChange}
              value={editReview.header}
              className="input-box"
            />
          </FormGroup>
          <FormGroup>
            <Label for="body" style={{ fontSize: "25px" }}>
              <br />
              Review Body
            </Label>
            <br />
            <Input
              type="text"
              name="body"
              onChange={handleChange}
              value={editReview.body}
              className="input-box"
            />
          </FormGroup>
          <FormGroup>
            <Label for="stars" style={{ fontSize: "25px" }}><br/>
              Rating
            </Label>
            <div className="star-rating">
              <ReactStarRating
                numberOfStar={5}
                rating={editReview.stars}
                colorFilledStar="gold"
                colorEmptyStar="black"
                starSize="50px"
                spaceBetweenStar="10px"
                disableOnSelect={false}
                onSelectStar={handleRatingChange}
              />
            </div>
          </FormGroup><br/>
        </Form>
        <Button onClick={handleSubmit} name="submit" className="edit-submit">
          Submit Review
        </Button>
      </div>
    </div>
  );
};

export default Edit;

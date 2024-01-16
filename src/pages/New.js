import React, { useState, useEffect } from "react"
import { Form, FormGroup, Input, Label, Button } from "reactstrap"
import { useNavigate, useParams } from "react-router-dom"
import ReactStarRating from "react-star-ratings-component"

const New = ({ createReview, currentUser }) => {
  const {} = useParams()
  const navigate = useNavigate()
  const [newReview, setNewReview] = useState({
    header: "",
    body: "",
    stars: 0,
    user_id: currentUser ? currentUser.id : null,
  })

  useEffect(() => {
    if (currentUser) {
      setNewReview((prevReview) => ({
        ...prevReview,
        user_id: currentUser.id,
      }))
    }
  }, [currentUser])

  const handleChange = (e) => {
    setNewReview({ ...newReview, [e.target.name]: e.target.value })
  }

  const handleRatingChange = (newRating) => {
    setNewReview({ ...newReview, stars: newRating })
  }

  const handleSubmit = () => {
    if (!newReview.header || !newReview.body || newReview.stars === 0) {
      // If any field is missing, prevent form submission
      alert("Please fill in all required fields.");
      return;
    }
    createReview(newReview) 
    navigate("/reviews")
  }

  return (
    <div className="edit-container">
      <h1>New Review</h1>
      <div className="input-container">
      <Form>
        <FormGroup>
        <Label for="header" style={{ fontSize: "25px" }}>Review Header</Label><br/>
          <Input
            type="text"
            name="header"
            onChange={handleChange}
            value={newReview.header}
            className="input-box"
            required
          />
        </FormGroup>
        <FormGroup>
        <Label for="body" style={{ fontSize: "25px" }}>Review Body</Label><br/>
          <Input
            type="text"
            name="body"
            onChange={handleChange}
            value={newReview.body}
            className="input-box"
            required
          />
        </FormGroup>
        <FormGroup>
        <Label for="stars" style={{ fontSize: "25px" }}><br/>Rating</Label>
        <div className="star-rating">
          <ReactStarRating
            numberOfStar={5}
            rating={newReview.stars}
            colorFilledStar="gold"
            colorEmptyStar="black"
            starSize="50px"
            spaceBetweenStar="10px"
            disableOnSelect={false}
            onSelectStar={handleRatingChange}
            required
          /></div>
        </FormGroup>
      </Form>
      <Button onClick={handleSubmit} name="submit" className="edit-submit">
        Submit Review
      </Button>
      </div>
    </div>
  )
}

export default New

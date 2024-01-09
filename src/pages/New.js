import React, { useState } from "react"
import { Form, FormGroup, Input, Label, Button } from "reactstrap"
import { useNavigate, useParams } from "react-router-dom"
import ReactStarRating from "react-star-ratings-component"
const New = ({ createReview }) => {
  const { recipeId } = useParams()
  const navigate = useNavigate()
  const [newReview, setNewReview] = useState({
    header: "",
    body: "",
    stars: 0,
  })

  const handleChange = (e) => {
    setNewReview({ ...newReview, [e.target.name]: e.target.value })
  }

  const handleRatingChange = (newRating) => {
    setNewReview({ ...newReview, stars: newRating })
  }

  const handleSubmit = () => {
    createReview(newReview, recipeId)
    navigate(`/reviews/${recipeId}`)
    console.log(handleSubmit)
  }

  return (
    <div>
      <h1>Review Page</h1>
      <Form>
        <FormGroup>
          <Label for="header">Review Header</Label>
          <Input type="text" name="header" onChange={handleChange} />
        </FormGroup>
        <FormGroup>
          <Label for="body">Review Body</Label>
          <Input type="text" name="body" onChange={handleChange} />
        </FormGroup>
        <FormGroup>
          <Label for="stars">Rating</Label>
          <ReactStarRating
            numberOfStar={5}
            rating={newReview.stars}
            colorFilledStar="gold"
            colorEmptyStar="black"
            starSize="50px"
            spaceBetweenStar="10px"
            disableOnSelect={false}
            onSelectStar={handleRatingChange}
          />
        </FormGroup>
      </Form>
      <Button onClick={handleSubmit} name="submit">
        Submit Review
      </Button>
    </div>
  )
}

export default New

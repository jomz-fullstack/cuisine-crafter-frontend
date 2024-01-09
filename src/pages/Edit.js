import React, { useState } from "react"
import { Form, FormGroup, Input, Label, Button } from "reactstrap"
import { useNavigate, useParams } from "react-router-dom"
import ReactStarRating from "react-star-ratings-component"

const Edit = ({ reviews, updateReview, currentUser }) => {
    const { id } = useParams()
    const navigate = useNavigate()
    let selectedReview = reviews?.find((review) => review.id === +id)
    const [editReview, setEditReview] = useState({
      header: selectedReview.header,
      body: selectedReview.body,
      stars: selectedReview.stars,
      id: selectedReview.id,
      user_id: currentUser.id
    })
  
    const handleChange = (e) => {
      setEditReview({ ...editReview, [e.target.name]: e.target.value })
    }
  
    const handleRatingChange = (newRating) => {
      setEditReview({ ...editReview, stars: newRating })
    }
  
    const handleSubmit = () => {
      updateReview(editReview, selectedReview.id)
      navigate(`/reviews/${id}`)
    }
  
    return (
      <div>
        <h1>Review Page</h1>
        <Form>
          <FormGroup>
            <Label for="header">Review Header</Label>
            <Input type="text" name="header" onChange={handleChange} value={editReview.header}/>
          </FormGroup>
          <FormGroup>
            <Label for="body">Review Body</Label>
            <Input type="text" name="body" onChange={handleChange} value={editReview.body} />
          </FormGroup>
          <FormGroup>
            <Label for="stars">Rating</Label>
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
          </FormGroup>
        </Form>
        <Button onClick={handleSubmit} name="submit">
          Submit Review
        </Button>
      </div>
    )
  }
  
export default Edit
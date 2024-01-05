import React, { useState } from "react"
import { Form, FormGroup, Input, Label, Button } from "reactstrap"
import { useNavigate } from "react-router-dom"


const New = ({ creteReivew }) => {
    const handleChange= (e) => {
        setNewReview({ ...newReview, [e.target.name]: e.target.value})
    }
    
    const handleSubmit = () => {
        setNewReview(newReview)
    }
    const navigate = useNavigate()
    const [newReview, setNewReview] = useState({
        header: "",
        body: "",
        // rating: "",
    })
    return(
 <div>
        <h1>Review Page</h1>
        <Form>
  <FormGroup>
    <Label for="name">Review</Label>
    <Input type="text" name="header" />
    {/* <Input type="text" name="rating" /> */}
    <Input type="text" name="body" onChange={handleChange} value={newReview.name} />
  </FormGroup>
</Form>
<Button onClick={handleSubmit} name="submit">
  Submit Cat
</Button>
</div>
    )
}

export default New
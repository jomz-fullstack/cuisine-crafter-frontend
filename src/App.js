import React, { useState, useEffect } from "react"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Edit from "./pages/Edit"
import Home from "./pages/Home"
import Index from "./pages/Index"
import New from "./pages/New"
import NotFound from "./pages/NotFound"
import Show from "./pages/Show"
import ReviewShow from "./pages/ReviewShow"

import mockUsers from "./mockUsers"
import mockRecipes from "./mockRecipes"
import mockReviews from "./mockReviews"

import { Routes, Route } from "react-router-dom"

import "./App.css"

const App = () => {
  const [currentUser, setCurrentUser] = useState(mockUsers)
  const [recipe, setRecipe] = useState(mockRecipes)
  const [review, setReview] = useState(mockReviews)

  useEffect(() => {
    readRecipe()
    readReview()
  }, [])

  const url = "http://localhost:3000/"

  const readRecipe = () => {
    fetch(`${url}index`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`)
        }
        return response.json()
      })
      .then((data) => {
        console.log(data)
        setRecipe(data)
      })
      .catch((error) => console.error("Recipe read errors: ", error))
  }

  const readReview = (recipeId) => {
    fetch(`${url}reviews/${recipeId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`)
        }
        return response.json()
      })
      .then((data) => {
        console.log(data)
        setReview(data)
      })
      .catch((error) => console.error("Review read errors: ", error))
  }

  const createReview = (createReview, recipeId) => {
    fetch(`${url}new/${recipeId}`, {
      body: JSON.stringify(createReview),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    })
      .then((response) => response.json())
      .then(() => readReview())
      .catch((error) => console.log("Review create errors:", error))

  };

  const updateReview = (selectedReview, id) => {
    console.log("selectedReview", selectedReview)
    console.log("id" , id)
    fetch(`${url}reviews/${id}` , {
    body: JSON.stringify(selectedReview),
    headers: {
      "Content-Type": "application/json",
    },
    method: "PATCH",
  })
  .then((response) => response.json())
  .then(() => readReview())
  .catch((error) => console.log("Update review errors: ", error))
  }

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/index" element={<Index recipe={recipe} />} />
        <Route
          path="/reviews/:recipeId"
          element={<ReviewShow reviews={review} />}
        />
        <Route path="/show/:id" element={<Show recipes={recipe} />} />
        <Route
          path="/new/:recipeId"
          element={<New createReview={createReview} />}
        />
        <Route path="/edit/:id" element={<Edit updateReview={updateReview} reviews={review} currentUser={currentUser}/>}  />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App

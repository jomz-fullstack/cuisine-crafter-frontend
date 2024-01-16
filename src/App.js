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
import AboutUs from "./pages/AboutUs"
import LogIn from "./pages/LogIn"
import { Routes, Route, useParams, useNavigate } from "react-router-dom"

import "./App.css"

const App = () => {
  const [currentUser, setCurrentUser] = useState(null)
  const [recipe, setRecipe] = useState([])
  const [review, setReview] = useState([])
   const apiKey = process.env.REACT_APP_API_KEY


  useEffect(() => {
    const loggedInUser = localStorage.getItem("user")
    if (loggedInUser) {
      setCurrentUser(JSON.parse(loggedInUser))
    }
    readRecipe()
    readReview()
  }, [])

  const url = "https://cuisine-crafter-be.onrender.com/"

  const readRecipe = () => {
    fetch(`${url}recipes`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setRecipe(data)
      })
      .catch((error) => console.error("Recipe read errors: ", error))
  }

  const readReview = () => {
    fetch(`${url}reviews`)
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
  const createReview = (createReview) => {
    const reviewData = { ...createReview, }

    fetch(`${url}reviews`, {
      body: JSON.stringify(reviewData),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`)
        }
        return response.json()
      })
      .then(() => readReview())
      .catch((error) => console.log("Review create errors:", error))
  }

  const updateReview = (selectedReview) => {
    console.log("selectedReview", selectedReview)
    console.log("id")
    fetch(`${url}reviews/${selectedReview.id}`, {
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

  const deleteReview = (id) => {
    fetch(`${url}reviews/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => readReview())
      .catch((errors) => console.log("delete errors:", errors))
  }

  const login = (userInfo) => {
    fetch(`${url}login`, {
      body: JSON.stringify(userInfo),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      method: "POST",
    })
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText)
        }
        localStorage.setItem("token", response.headers.get("Authorization"))
        return response.json()
      })
      .then((payload) => {
        localStorage.setItem("user", JSON.stringify(payload))
        setCurrentUser(payload)
      })
      .catch((error) => console.log("login errors: ", error))
  }

  const signup = (userInfo) => {
    fetch(`${url}signup`, {
      body: JSON.stringify(userInfo),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      method: "POST",
    })
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText)
        }
        localStorage.setItem("token", response.headers.get("Authorization"))
        return response.json()
      })
      .then((payload) => {
        localStorage.setItem("user", JSON.stringify(payload))
        setCurrentUser(payload)
      })
      .catch((error) => console.log("signup errors: ", error))
  }

  const logout = () => {
    fetch(`${url}/logout`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
      method: "DELETE",
    })
      .then((payload) => {
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        setCurrentUser(null)
      })
      .catch((error) => console.log("log out errors: ", error))
  }


  return (
    <div>
      <Header currentUser={currentUser} logout={logout} />
      <Routes>
        <Route path="/" element={<Home recipe={recipe} />} />
        <Route path="/login" element={<LogIn login={login} signup={signup} />} />
        <Route path="/index" element={<Index recipe={recipe} />} />
        <Route
          path="/reviews"
          element={<ReviewShow reviews={review} deleteReview={deleteReview} />}
        />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/show/:id" element={<Show recipes={recipe} />} />
        {
          <>
            currentUser && (
            <Route
              path="/new"
              element={
                <New createReview={createReview} currentUser={currentUser} />
              }
            />
            <Route
              path="/edit/:id"
              element={
                <Edit
                  updateReview={updateReview}
                  reviews={review}
                  currentUser={currentUser}
                />
              }
            />
            )
          </>
        }
        {/* <Route path="/filter" element={<Filter />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
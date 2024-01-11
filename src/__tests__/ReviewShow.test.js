import { render, screen } from "@testing-library/react"
import ReviewShow from "../pages/ReviewShow"
import mockReviews from "../mockReviews"
import { MemoryRouter, Route, Routes } from "react-router-dom"

const renderReviewShow = () => {
  const recipeReviews = mockReviews.filter((review) => review.recipe_id === 1)

  render(
    <MemoryRouter initialEntries={["/reviews/1"]}>
      <Routes>
        <Route
          path="/reviews/:recipeId"
          element={<ReviewShow reviews={recipeReviews} />}
        />
      </Routes>
    </MemoryRouter>
  )
}

describe("<ReviewShow />", () => {
  it("renders without crashing", () => {
    renderReviewShow()
  })

  it("renders review headers", () => {
    renderReviewShow()
    const recipeReviews = mockReviews.filter((review) => review.recipe_id === 1)

    recipeReviews.forEach((reviewItem) => {
      expect(
        screen.getByText(reviewItem.header, { exact: false })
      ).toBeInTheDocument()
    })
  })

  it("renders a review", () => {
    renderReviewShow()
    expect(
      screen.getByText(mockReviews[0].header, { exact: false })
    ).toBeInTheDocument()
  })
})

import { BrowserRouter } from "react-router-dom"
import { render, screen } from "@testing-library/react"
import New from "../pages/New"

describe("<New />", () => {
  const renderNew = () => {
    render(
      <BrowserRouter>
        <New />
      </BrowserRouter>
    )
  }
  it("renders without crashing", () => {
    renderNew()
    screen.logTestingPlaygroundURL()
  })
  it("renders review title", () => {
    renderNew()

    const reviewTitle = screen.getByRole("heading", {
      name: /review page/i,
    })
    expect(reviewTitle).toBeInTheDocument()
  })
  it("renders a review form", () => {
    renderNew()

    const headerInput = screen.getByText(/review header/i)

    expect(headerInput).toBeInTheDocument()

    const bodyInput = screen.getByText(/review body/i)

    expect(bodyInput).toBeInTheDocument()

    const ratingInput = screen.getByText(/rating/i)

    expect(ratingInput).toBeInTheDocument()

    const submitButton = screen.getByRole("button", {
      name: /submit review/i,
    })
    expect(submitButton).toBeInTheDocument()
  })
})

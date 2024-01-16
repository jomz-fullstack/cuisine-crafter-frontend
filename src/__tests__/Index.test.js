import { BrowserRouter } from "react-router-dom"
import { render, screen, waitFor } from "@testing-library/react"
import Index from "../pages/Index"

describe("<Index />", () => {
  const renderIndex = (recipe) =>
    render(
      <BrowserRouter>
        <Index recipe={recipe} />
      </BrowserRouter>
    )

  it("renders without crashing", () => {
    const mockRecipe = [
      {
        id: 1,
        name: "Test Recipe 1",
        image: "test-image-1.jpg",
      },
    ]

    renderIndex(mockRecipe)
    const cardContainer = screen.getByTestId("card-container")

    expect(cardContainer).toBeInTheDocument()
  })
})

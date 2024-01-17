import React from "react"
import { render, screen } from "@testing-library/react"
import Show from "../pages/Show"
import { MemoryRouter, Route, Routes } from "react-router-dom"

const mockRecipes = [
  {
    id: 1,
    name: "Test Recipe",
    image: "test-image.jpg",
    protein: "Protein",
    ingredients: "Ingredient 1, Ingredient 2",
    instructions: "Test instructions",
    nutrition: "Test nutrition",
  },
]

const renderRecipeShow = () => {
  render(
    <MemoryRouter initialEntries={["/show/1"]}>
      <Routes>
        <Route path="/show/:id" element={<Show recipes={mockRecipes} />} />
      </Routes>
    </MemoryRouter>
  )
}

describe("<Show />", () => {
  it("renders without crashing", () => {
    renderRecipeShow()
  })

  it("renders a recipe name", () => {
    renderRecipeShow()
    expect(
      screen.getByText(mockRecipes[0].name, { exact: false })
    ).toBeInTheDocument()
  })

  it("renders an image", () => {
    renderRecipeShow()
    expect(screen.getByRole("img")).toBeInTheDocument()
  })

  it("renders ingredients", () => {
    renderRecipeShow()
    expect(
      screen.getByText(
        `${mockRecipes[0].protein}, ${mockRecipes[0].ingredients}`,
        { exact: false }
      )
    ).toBeInTheDocument()
  })

  it("renders instructions", () => {
    renderRecipeShow()
    expect(
      screen.getByText(`Instructions: ${mockRecipes[0].instructions}`, {
        exact: false,
      })
    ).toBeInTheDocument()
  })

  it("renders nutritional facts", () => {
    renderRecipeShow()
    expect(
      screen.getByText(`Nutritional Facts: ${mockRecipes[0].nutrition}`, {
        exact: false,
      })
    ).toBeInTheDocument()
  })
})
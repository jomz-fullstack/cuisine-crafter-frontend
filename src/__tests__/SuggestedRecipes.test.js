import { BrowserRouter } from "react-router-dom"
import { render, screen } from "@testing-library/react"
import SuggestedRecipes from "../components/SuggestedRecipes"

describe("<SuggestedRecipes />", () => {
  const renderSuggestedRecipes = () =>
    render(
      <BrowserRouter>
        <SuggestedRecipes />
      </BrowserRouter>
    )
  it("renders without crashing", () => {
    renderSuggestedRecipes()
    // screen.logTestingPlaygroundURL()
  })
})

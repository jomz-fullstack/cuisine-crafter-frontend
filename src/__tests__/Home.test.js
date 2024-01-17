import { BrowserRouter } from "react-router-dom"
import { render, screen } from "@testing-library/react"
import Home from "../pages/Home"

describe("<Home />", () => {
  const renderHome = () =>
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    )
  it("renders without crashing", () => {
    renderHome()
    screen.logTestingPlaygroundURL()
  })

  it("renders Suggested Recipes", () => {
    renderHome()
    expect(
      screen.getByRole('heading', {
        name: /suggested recipes/i
      })
    )
  })
  it("renders an image", () => {
    renderHome()
    expect(screen.getByRole('img')).toBeInTheDocument()
  })
  it("renders the SuggestedRecipes component", () => {
    renderHome();
    expect(screen.getByRole('heading', { name: /suggested recipes/i })).toBeInTheDocument();
  });
})
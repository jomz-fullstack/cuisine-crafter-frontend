import { BrowserRouter } from "react-router-dom"
import { render, screen } from "@testing-library/react"
import Header from "../components/Header"

describe("<Header />", () => {
  const renderHeader = () =>
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )

  it("renders without crashing", () => {
    renderHeader()
  })

  it("renders the logo", () => {
    renderHeader()
    const logo = screen.getByAltText("Logo")
    expect(logo).toBeInTheDocument()
  })

  it("renders the main heading", () => {
    renderHeader()
    const mainHeading = screen.getByRole("heading", {
      name: /Cuisine Crafter/i,
    })
    expect(mainHeading).toBeInTheDocument()
  })

  it("renders navigation links", () => {
    renderHeader()
    const homeLink = screen.getByText(/Home/i)
    const recipesLink = screen.getByText(/Recipes/i)
    const aboutUsLink = screen.getByText(/About Us/i)

    expect(homeLink).toBeInTheDocument()
    expect(recipesLink).toBeInTheDocument()
    expect(aboutUsLink).toBeInTheDocument()
  })

  it("renders the sign-in link", () => {
    renderHeader()
    const signInLink = screen.getByText(/Sign In/i)
    expect(signInLink).toBeInTheDocument()
  })
})

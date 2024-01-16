import { BrowserRouter } from "react-router-dom"
import { render, screen } from "@testing-library/react"
import AboutUs from "../pages/AboutUs"

describe("<AboutUs />", () => {
  const renderAboutUs = () =>
    render(
      <BrowserRouter>
        <AboutUs />
      </BrowserRouter>
    )
  it("renders without crashing", () => {
    renderAboutUs()
    // screen.logTestingPlaygroundURL()
  })
})

import { BrowserRouter } from "react-router-dom"
import { render, screen } from "@testing-library/react"
import Footer from "../components/Footer"

describe("<Footer />", () => {
  const renderFooter = () =>
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    )
  it("renders without crashing", () => {
    renderFooter()
  })
  it("renders the footer text", () => {
    renderFooter()

    const footerText = screen.getByText(/© 2023 Cuisine Crafter \| JOMZ/i, {
      selector: "p",
    })
    expect(footerText).toBeInTheDocument()
  })
})

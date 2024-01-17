
import { BrowserRouter } from "react-router-dom"
import { render, screen } from "@testing-library/react"
import NotFound from "../pages/NotFound"

describe("<NotFound />", () => {
  const renderNotFound = () =>
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    );
  it("renders without crashing", () => {
    renderNotFound()
    screen.logTestingPlaygroundURL()
  })
  it("renders an image", () => {
    renderNotFound()
    expect(screen.getByRole('img')).toBeInTheDocument()
  })
  it("renders a header", () => {
    renderNotFound()
    expect(
      screen.getByRole('heading', {
        name: /oops! page not found\. not found image/i
      })
    )
  })
})

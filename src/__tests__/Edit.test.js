import { BrowserRouter } from "react-router-dom"
import { render, screen } from "@testing-library/react"
import Edit from "../pages/Edit"

describe("<Edit />", () => {
  const renderEdit = () =>
    render(
      <BrowserRouter>
        <Edit />
      </BrowserRouter>
    )

  it("renders without crashing", () => {
    renderEdit()
    // screen.logTestingPlaygroundURL()
  })
  it("renders Edit Review", () => {
    renderEdit()
    expect(
      screen.getByRole('heading', {
        name: /edit review/i
      })
    )
  })
  it("renders Review Header", () => {
    renderEdit()
    expect(screen.getByText(/review header/i))
  })
  it("renders Review Body", () => {
    renderEdit()
    expect(screen.getByText(/review body/i))
  })
  it("renders Rating", () => {
    renderEdit()
    expect(screen.getByText(/rating/i))
  })
  it("renders submit button", () => {
    renderEdit()
    expect(screen.getByRole('button', {
      name: /submit review/i
    }))
  })
}) 



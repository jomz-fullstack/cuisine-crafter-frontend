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
    screen.logTestingPlaygroundURL()
  })

  it("renders review edit header", () => {
    renderEdit()

    const editPage = screen.getByRole("heading", {
      name: /review page/i,
    })
    expect(editPage).toBeInTheDocument()
  })
  it("renders an edit form", () => {
    renderEdit()

    const editHeader = screen.getByText(/review header/i)
    expect(editHeader).toBeInTheDocument()
    const editBody = screen.getByText(/review body/i)
    expect(editBody).toBeInTheDocument()
    const editStars = screen.getByText(/rating/i)
    expect(editStars).toBeInTheDocument()
    const submitButton = screen.getByRole("button", {
      name: /submit review/i,
    })
    expect(submitButton).toBeInTheDocument()
  })
})

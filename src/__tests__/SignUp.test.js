import { BrowserRouter } from "react-router-dom"
import { render, screen } from "@testing-library/react"
import SignUp from "../pages/SignUp"

describe("<SignUp />", () => {
  const renderSignUp = () =>
    render(
      <BrowserRouter>
        <SignUp />
      </BrowserRouter>
    )

  it("renders without crashing", () => {
    renderSignUp()
  })

  it("renders the 'No Login? Sign up today!' header", () => {
    renderSignUp()
    expect(screen.getByText("No Login? Sign up today!")).toBeInTheDocument()
  })

  it("renders the email input field", () => {
    renderSignUp()
    expect(screen.getByPlaceholderText("email")).toBeInTheDocument()
  })

  it("renders the password input field", () => {
    renderSignUp()
    expect(screen.getByPlaceholderText("password")).toBeInTheDocument()
  })

  it("renders the confirm password input field", () => {
    renderSignUp()
    expect(screen.getByPlaceholderText("confirm password")).toBeInTheDocument()
  })

  it("renders 'Show Password' button for password field", () => {
    renderSignUp()
    const showPasswordButtons = screen.getAllByRole("img", {
      name: /show password/i,
    })

    expect(showPasswordButtons.length).toBeGreaterThan(0)
    const specificButton = showPasswordButtons[0]
    expect(specificButton).toBeInTheDocument()
  })

  it("renders 'Show Password' button for confirm password field", () => {
    renderSignUp()
    const showPasswordButtons = screen.getAllByRole("img", {
      name: /show password/i,
    })

    expect(showPasswordButtons.length).toBeGreaterThan(0)
    const specificButton = showPasswordButtons[0]
    expect(specificButton).toBeInTheDocument()
  })

  it("renders the 'Submit' button", () => {
    renderSignUp()
    expect(screen.getByText("Submit")).toBeInTheDocument()
  })
})
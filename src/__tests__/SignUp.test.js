import { BrowserRouter } from "react-router-dom"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event";
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
    screen.logTestingPlaygroundURL()

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

  it("submits the form correctly", () => {
    renderSignUp();

    // Mock console.log to capture the output
    const consoleSpy = jest.spyOn(console, "log").mockImplementation();

    // Simulate form input
    userEvent.type(screen.getByPlaceholderText("email"), "test@example.com");
    userEvent.type(screen.getByPlaceholderText("password"), "password123");
    userEvent.type(screen.getByPlaceholderText("confirm password"), "password123");

    // Trigger form submission
    userEvent.click(screen.getByText("Submit"));

    // Check if the expected user info is logged to the console
    expect(consoleSpy).toHaveBeenCalledWith(
      "user info: ",
      {
        user: {
          email: "test@example.com",
          password: "password123",
        },
      }
    );

    // Restore the original console.log implementation
    consoleSpy.mockRestore();
  });
  
}) 
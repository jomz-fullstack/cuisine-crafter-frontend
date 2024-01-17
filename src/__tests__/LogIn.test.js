import { BrowserRouter } from "react-router-dom";
import { render, screen, fireEvent, within } from "@testing-library/react";
import LogIn from "../pages/LogIn";

describe("<LogIn />", () => {
  const renderLogin = () =>
    render(
      <BrowserRouter>
        <LogIn />
      </BrowserRouter>
    );

  it("renders without crashing", () => {
    renderLogin();
    screen.logTestingPlaygroundURL();
  });

  it("renders 'No login? Sign up today!' heading", () => {
    renderLogin();
    expect(
      screen.getByRole("heading", {
        name: /no login\? sign up today!/i,
      })
    ).toBeInTheDocument();
  });

  it("renders 'Login' button", () => {
    renderLogin();
    expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument();
  });

  it("renders password input box", () => {
    renderLogin();
    const views = screen.getAllByText(/email: password:/i);
    views.forEach(view => {
      within(view).getByRole('textbox');
    });
  });
  it("renders confirm password input box", () => {
    renderLogin()
    expect(screen.getByPlaceholderText(/confirm password/i))
  })
  it("renders both password and confirm", () => {
    renderLogin()
    expect(screen.getByText(/email: password: confirm password:/i))
  })
});

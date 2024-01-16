import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import Index from "../pages/Index";

describe("<Index />", () => {
  const renderIndex = (recipe) =>
    render(
      <BrowserRouter>
        <Index recipe={recipe} />
      </BrowserRouter>
    );

  it("renders without crashing", () => {
    renderIndex();
    // screen.logTestingPlaygroundURL()
  });
  it("renders a textbox", () => {
    renderIndex()
    expect(screen.getByRole('textbox'))
  })
  it("renders a search button", () => {
    renderIndex()
    expect(screen.getByRole('button', {
      name: /search/i
    }))
  })
});

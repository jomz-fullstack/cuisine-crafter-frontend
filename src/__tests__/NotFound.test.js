
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
    renderNotFound();
    const headingElement = screen.getByText(/NotFound Page/i);
    expect(headingElement).toBeInTheDocument();


  });
});
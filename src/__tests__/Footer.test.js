import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import Footer from "../components/Footer";

describe("<Footer />", () => {
  const renderHome = () =>
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );
    it("renders cuisine crafter", () => {
      renderHome()
      expect(screen.getByText(/© 2023 cuisine crafter \|/i))
    })
});

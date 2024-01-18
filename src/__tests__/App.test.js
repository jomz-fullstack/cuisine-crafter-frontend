import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import App from "../App"; // Replace with the correct path

describe("<App />", () => {
    const renderApp = () => 
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

  it("renders without crashing", () => {
    renderApp()
  });
});

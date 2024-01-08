import { render, screen } from "@testing-library/react"
import  mockRecipes  from "../mockRecipes"
import Show from "../pages/Show";
import { MemoryRouter, Route, Routes } from "react-router-dom";


const renderRecipeShow = () => {
    render(
      <MemoryRouter initialEntries={["/show/1"]}>
        <Routes>
          <Route
            path="/show/:id"
            element={<Show recipes={mockRecipes} />}
          />
        </Routes>
      </MemoryRouter>
    );
  };
  describe("<Show />", () => {
    it("renders without crashing", () => {
      renderRecipeShow();
      screen.logTestingPlaygroundURL();
    });
    it("renders a recipe", () => {
        renderRecipeShow();
        expect(
          screen.getByText(mockRecipes[0].name, { exact: false })
      ).toBeInTheDocument();
    });
});

  
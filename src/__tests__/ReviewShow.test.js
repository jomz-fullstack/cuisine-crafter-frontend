import { render, screen } from "@testing-library/react";
import ReviewShow from "../pages/ReviewShow";
import mockReviews from "../mockReviews";
import { MemoryRouter, Route, Routes } from "react-router-dom";

const renderReviewShow = () => {
  render(
    <MemoryRouter initialEntries={["/reviews/1"]}>
      <Routes>
        <Route
          path="/reviews/:recipeId"
          element={<ReviewShow reviews={mockReviews} />}
        />
      </Routes>
    </MemoryRouter>
  );
};
describe("<ReviewShow />", () => {
  it("renders without crashing", () => {
    renderReviewShow();
  });

  it("renders review headers", () => {
    renderReviewShow();
   
  });
  it("renders a review", () => {
    renderReviewShow();
    expect(
      screen.getByText(mockReviews[0].header, { exact: false })
    ).toBeInTheDocument();
  });
});

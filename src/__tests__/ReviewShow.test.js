import { render, screen } from "@testing-library/react";
import ReviewShow from "../pages/ReviewIndex";
import mockReviews from "../mockReviews";
import { BrowserRouter } from "react-router-dom";

describe("<ReviewShow />", () => {
  const renderReviewShow = () =>
    render(
      <BrowserRouter>
        <ReviewShow reviews={mockReviews} />
      </BrowserRouter>
    );

  it("renders without crashing", () => {
    renderReviewShow();
  });

  it("renders review headers", () => {
    renderReviewShow();
    screen.logTestingPlaygroundURL();

    mockReviews.forEach((review) => {
      const reviewHeader = screen.getByText(review.header);
      expect(reviewHeader).toBeInTheDocument(
        `Review header "${review.header}" should be present`
      );
    });
  });

  // mockReviews.forEach((review) => {
  //   const reviewHeader = screen.getByText(review.header);
  //   expect(reviewHeader, {exact: false}).toBeInTheDocument();
});

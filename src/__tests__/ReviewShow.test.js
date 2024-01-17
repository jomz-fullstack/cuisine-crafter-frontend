import { render, screen, fireEvent } from "@testing-library/react";
import ReviewShow from "../pages/ReviewShow";
import { BrowserRouter } from "react-router-dom";

describe("<ReviewShow />", () => {
  const reviews = [
    { id: 1, header: "Review 1", body: "This is a review.", stars: 3 },
    { id: 2, header: "Review 2", body: "Another review.", stars: 5 },
  ];

  const deleteReviewMock = jest.fn();

  const renderReviewShow = () => {
    return render(
      <BrowserRouter>
        <ReviewShow reviews={reviews} deleteReview={deleteReviewMock} newReview={() => {}} />
      </BrowserRouter>
    );
  };

  it("renders without crashing", () => {
    renderReviewShow();
  });

  it("renders All Reviews", () => {
    renderReviewShow();
    expect(screen.getByRole("heading", { name: /all reviews/i })).toBeInTheDocument();
  });

  it("renders a Create New Review button", () => {
    renderReviewShow();
    expect(screen.getByRole("button", { name: /create new review/i })).toBeInTheDocument();
  });

  it("renders reviews with correct content and buttons", () => {
    renderReviewShow();
    reviews.forEach((review) => {
      expect(screen.getByText(review.header)).toBeInTheDocument();
      expect(screen.getByText(review.body)).toBeInTheDocument();
    });
  });

  it("navigates to New Review page when 'Create New Review' button is clicked", () => {
    renderReviewShow();
    fireEvent.click(screen.getByRole("button", { name: /create new review/i }));
  });

  it("navigates to Edit Review page when 'Edit Review' button is clicked", () => {
    renderReviewShow();
    fireEvent.click(screen.getAllByRole("button", { name: /edit review/i })[0]);
  });

  it("calls deleteReview function when 'Delete Review' button is clicked", () => {
    renderReviewShow();
    fireEvent.click(screen.getAllByRole("button", { name: /delete review/i })[0]);
    expect(deleteReviewMock).toHaveBeenCalledWith(reviews[0].id);
  });

});

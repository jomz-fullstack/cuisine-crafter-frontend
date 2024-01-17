import React from "react";
import NotFoundImg from "../assets/NotFound.png";

const NotFound = () => {
  return (
    <div className="not-found-container">
      <h1>
        Oops! Page Not Found.
        <br />
        <img src={NotFoundImg} alt="not found image" style={{}} />
      </h1>
    </div>
  );
};
export default NotFound;
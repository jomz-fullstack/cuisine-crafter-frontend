import React from "react";
import J from "../assets/J.JPG";
import O from "../assets/O.JPG";
import M from "../assets/M.JPG";
import Z from "../assets/Z.jpg";
import LinkedInLogo from "../assets/LinkedIn.png";
import GitHubLogo from "../assets/GitHub.png";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <>
      <div className="aboutus-container">
        <div className="single-box">
          <h2>Product Manager</h2>
          <h3>Joseph McMorris II</h3>
          <img src={J} />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div className="external-links">
            <a href="https://github.com/JosephMcMorrisII">
              <img src={GitHubLogo} />
            </a>{" "}
            <a href="https://www.linkedin.com/in/joseph-mcmorris-ii-431455260/">
              <img src={LinkedInLogo} />
            </a>
          </div>
        </div>
        <div className="single-box">
          <h2>Tech Lead</h2>
          <h3>Oscar Troncoso</h3>
          <img src={O} />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div className="external-links">
            <a href="https://github.com/0Tron">
              <img src={GitHubLogo} />
            </a>{" "}
            <a href="https://www.linkedin.com/in/oscar-troncoso/">
              <img src={LinkedInLogo} />
            </a>
          </div>

        </div>
        <div className="single-box">
          <h2>Design Lead</h2>
          <h3>Marinda Vang</h3>
          <img src={M} />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div className="external-links">
            <a href="https://github.com/Mvangg">
              <img src={GitHubLogo} />
            </a>{" "}
            <a href="https://www.linkedin.com/in/mvanggg">
              <img src={LinkedInLogo} />
            </a>
          </div>
        </div>
        <div className="single-box">
          <h2>Project Manager</h2>
          <h3>Zenia Varela</h3>
          <img src={Z} />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div className="external-links">
            <a href="https://github.com/zeniavarela">
              <img src={GitHubLogo} />
            </a>{" "}
            <a href="https://www.linkedin.com/in/zeniavarela/">
              <img src={LinkedInLogo} />
            </a>
          </div>

        </div>
      </div>
    </>
  );
};

export default AboutUs;

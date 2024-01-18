import React from "react";
import J from "../assets/J.JPG";
import O from "../assets/O.JPG";
import M from "../assets/M.JPG";
import Z from "../assets/Z.jpg";
import LinkedInLogo from "../assets/LinkedIn.png";
import GitHubLogo from "../assets/GitHub.png";
import Avacado from "../assets/Avocado.png"
import Banana from "../assets/Banana.png"
import Bread from "../assets/Bread.png"
import Egg from "../assets/Egg.png"
import Eggplant from "../assets/Eggplant.png"
import Steak from "../assets/Steak.png"

const AboutUs = () => {
  return (
    <>
      <div className="aboutus-container">
        <div className="single-box">
          <h2>Product Manager</h2>
          <h3>Joseph McMorris II</h3>
          <img src={J} />
          <p>
         
            Hello, I'm Joseph—a full-stack web developer with a military background and a decade of experience in civil engineering. Outside of coding, I enjoy Brazilian Jiu-Jitsu and volleyball. Let's create something exceptional!
          </p>
          <div className="external-links">
            <a data-testid="github-link" href="https://github.com/JosephMcMorrisII">
              <img src={GitHubLogo} alt="GitHub" />
            </a>{" "}
            <a href="https://www.linkedin.com/in/joseph-mcmorris-ii-431455260/">
              <img src={LinkedInLogo} alt="LinkedIn" />
            </a>
          </div>
        </div>
        <div className="single-box">
          <h2>Tech Lead</h2>
          <h3>Oscar Troncoso</h3>
          <img src={O} />
          <p>
          Hi, I’m Oscar— a Full Stack Web Developer with a Military and Electrical background. After spending several years leading Marines as a Platoon Sergeant and illuminating spaces as an Electrician, I decided to shift my focus towards tech. 💡
          </p>
          <div className="external-links">
            <a data-testid="github-link" href="https://github.com/0Tron">
              <img src={GitHubLogo} alt="GitHub" />
            </a>{" "}
            <a href="https://www.linkedin.com/in/oscar-troncoso/">
              <img src={LinkedInLogo} alt="LinkedIn" />
            </a>
          </div>

        </div>
        <div className="single-box">
          <h2>Design Lead</h2>
          <h3>Marinda Vang</h3>
          <img src={M} />
          <p>
          Hi! I'm a full-stack web developer, prior US Marine with 9 years of data analysis experience. I specialize in user-centric frontend development and bring a unique blend of skills from my military background. Beyond tech, I'm a food enthusiast exploring diverse cuisines with two delightful dogs. Join me on this journey where technology meets creativity, and every meal is a celebration of flavors!
          </p>
          <div className="external-links">
            <a data-testid="github-link" href="https://github.com/Mvangg">
              <img src={GitHubLogo} alt="GitHub" />
            </a>{" "}
            <a href="https://www.linkedin.com/in/mvanggg">
              <img src={LinkedInLogo} alt="LinkedIn" />
            </a>
          </div>
        </div>
        <div className="single-box">
          <h2>Project Manager</h2>
          <h3>Zenia Varela</h3>
          <img src={Z} />
          <p>
          Hey there! I'm Zenia, a full-stack web developer transitioning from military intelligence to tech. I'm passionate about creating innovative and secure digital solutions. Let's connect and explore collaborations on exciting web development projects! 
          </p>
          <div className="external-links">
            <a data-testid="github-link" href="https://github.com/zeniavarela">
              <img src={GitHubLogo} alt="GitHub" />
            </a>{" "}
            <a href="https://www.linkedin.com/in/zeniavarela/">
              <img src={LinkedInLogo}  alt="LinkedIn" />
            </a>
          </div>

        </div>
      </div>
    </>
  );
};

export default AboutUs;
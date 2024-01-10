import React, { formRef } from "react";
import { NavLink } from "react-router-dom";
import { Nav, NavItem } from "reactstrap";

const LogIn = () => {
  const handleSubmit = () => {};

  return (
    <>
      <h1>Log in Page</h1>
      <form ref={formRef} onSubmit={handleSubmit} className="input-container">
        Email: <input type="email" name="email" placeholder="email" required className="login-input-box"/>
        <br />
        Password:{" "}
        <input type="password" name="password" placeholder="password" required className="login-input-box"/>
        <br />
        <button type="sumbit" value="Submit" className="login-submit">Log In</button>
        <br />
      </form>
      <Nav className="sign-up">
        <NavItem>
          <NavLink to="/signup">
            <h3>No account? Sign up!</h3>
          </NavLink>
        </NavItem>
      </Nav>
    </>
  );
};

export default LogIn;

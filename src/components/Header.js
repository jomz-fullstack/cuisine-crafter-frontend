import React from "react";
import { Nav, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";


const Header = () => {
    return (
      <div className="header">
        <div className="header-container" >
        <h1>
            Cuisine Crafter
          </h1>
          <div className="center" style={{ marginTop:"-20px"}}>
            <Nav>
              <NavItem>
                <NavLink active to="/" className="nav-link">
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/index" className="nav-link">See all Recipes</NavLink>
              </NavItem>
            </Nav>
          </div>
        </div>
      </div>
    );
  };
  
  export default Header;
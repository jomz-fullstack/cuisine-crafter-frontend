import React from "react"
import { Nav, NavItem, Navbar, NavbarBrand, Button } from "reactstrap"
import { NavLink, useNavigate } from "react-router-dom"

const Header = () => {

    return (
        <Navbar className="my-2" color="secondary" dark>
          <NavbarBrand>Cuisine Crafter</NavbarBrand>
          <Nav justified>
            <NavItem>
              <NavLink to="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/index">See Recipes</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/reviews">See All Reviews</NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      )
    }
    
    export default Header
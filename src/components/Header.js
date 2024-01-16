import React, { useState, formRef } from "react"
import { Nav, NavItem } from "reactstrap"
import { NavLink, useNavigate } from "react-router-dom"
import Logo from "../assets/CC2.png"
import HoverLogo from "../assets/CC2Reverse.png"

const Header = ({currentUser, logout}) => {
  const [isHovered, setIsHovered] = useState(false)

  const navigate = useNavigate()

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  const renderAuthButton = () => {
    if (currentUser) {
      return (
        <NavItem>
          <NavLink className="sign-in" onClick={logout}>
            Log Off
          </NavLink>
        </NavItem>
      );
    } else {
      return (
        <NavItem>
          <NavLink to="/login" className="sign-in">
            Sign In
          </NavLink>
        </NavItem>
      );
    }
  };

  return (
    <div className="header-container">
      <div className="logo-container">
        <NavItem>
          <NavLink active to="/">
            <img
              src={isHovered ? HoverLogo : Logo}
              className="logo"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              alt="Logo"
            />
          </NavLink>
        </NavItem>
      </div>
      <div className="text-container">
        <h1 className="main-head">
          <span>Cuisine</span>
          <span>Crafter</span>
        </h1>
      </div>
      <div>
        <Nav className="navlink-container">
          <NavItem>
            <NavLink active to="/" className="header-link">
              {"|"}Home{"|"}
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/index" className="header-link">
              {"|"}Recipes{"|"}
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/reviews" className="header-link">
              {"|"}Reviews{"|"}
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/aboutus" className="header-link">
              {"|"}About Us{"|"}
            </NavLink>
          </NavItem>
          {renderAuthButton()}
        </Nav>
      </div>
    </div>
  )
}

export default Header

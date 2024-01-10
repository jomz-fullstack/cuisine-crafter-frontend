import React, { useState, formRef } from "react"
import { Nav, NavItem } from "reactstrap"
import { NavLink, useNavigate } from "react-router-dom"
import Logo from "../assets/CC2.png"
import HoverLogo from "../assets/CC2Reverse.png"
import {
  Button,
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap"

const Header = () => {
  const [isHovered, setIsHovered] = useState(false)

  const navigate = useNavigate()

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

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
            <NavLink to="/aboutus" className="header-link">
              {"|"}About Us{"|"}
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/login" className="sign-in">
              Sign In
            </NavLink>
          </NavItem>
        </Nav>
      </div>
    </div>
  )
}

export default Header

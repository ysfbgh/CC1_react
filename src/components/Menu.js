import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";
import DarkMode from "./DarkMode/DarkMode";
import './Menu.css'


const Menu = () => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/"> Acceuil</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="ml-auto">
            <NavItem to="/App1" text="Calculatrice" />
            <NavItem to="/App2" text="Slider" />
            <NavItem to="/App3" text="TodoList" />
            <NavItem to="/App4" text="API" />
            <li className="nav-item">
              <DarkMode />
            </li>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      
    </>
  );
};

const NavItem = ({ to, text }) => (
  <LinkContainer to={to}>
    <Nav.Link>{text}</Nav.Link>
  </LinkContainer>
);

export default Menu;

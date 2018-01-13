import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  NavItem,
  NavDropdown,
  MenuItem,
  Nav
} from "react-bootstrap";

export default class CustomNavbar extends Component {
  render() {
    return <div>
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#brand">@Chaos Warrios 2018</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} href="#">
                Home
              </NavItem>
              <NavItem eventKey={2} href="#">
                About
              </NavItem>
              <NavItem eventKey={2} href="#">
                Contact
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>;
  }
}
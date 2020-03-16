import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";

const NavBar = props => {
  return (
    <Nav className="ml-auto" navbar>
      <NavItem>
        <NavLink href="/components/">Components</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="https://github.com/reactstrap/reactstrap">
          GitHub
        </NavLink>
      </NavItem>
    </Nav>
  );
};

export default NavBar;

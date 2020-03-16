import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";

const NavBar = props => {
  return (
    <Nav className="ml-auto" navbar>
      <NavItem>
        <NavLink href="/components/">About</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/components/">CV</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/components/">Approach</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/components/">Toolset</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="https://github.com/reactstrap/reactstrap">
          Contact
        </NavLink>
      </NavItem>
    </Nav>
  );
};

export default NavBar;

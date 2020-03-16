import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";

const NavBar = props => {
  return (
    <div>
      <Nav>
        <NavLink href="#">Link</NavLink> <NavLink href="#">Link</NavLink>{" "}
        <NavLink href="#">Another Link</NavLink>{" "}
      </Nav>
    </div>
  );
};

export default NavBar;

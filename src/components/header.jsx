import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from "reactstrap";

import NavBar from "./navbar";

const Search = props => (
  <div>
    <i class="fa fa-search" aria-hidden="true"></i>
  </div>
);

const Logo = props => <NavbarBrand href="/">KirillBylkov</NavbarBrand>;
const Header = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <Logo />
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <NavBar />
          <Search />
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;

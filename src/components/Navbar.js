import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import { Link } from 'react-router-dom';

const Navigation = props => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar className='nav' color="faded" light>
        <NavbarBrand href="/" className="mr-auto">
          lorenzo simpson
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <Link to='/' onClick={toggleNavbar}>
              <NavItem>
                <NavLink>Home</NavLink>
              </NavItem>
            </Link>

            <Link to='/about' onClick={toggleNavbar}>
            <NavItem>
              <NavLink>About</NavLink>
            </NavItem>
            </Link>

            <Link to='/contact' onClick={toggleNavbar}>
              <NavItem>
                <NavLink>Contact</NavLink>
              </NavItem>
            </Link>
  
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;

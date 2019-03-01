import React, { Component } from 'react';
import { Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';
import logo from '../../logo.svg';

class Navigation extends Component {
    render() {
      return (
        <Navbar expand="md">
            <NavbarBrand href="/"><img style={{maxWidth: '100px'}}src={logo} /></NavbarBrand>
            <NavbarToggler onClick={this.toggle}>MENU</NavbarToggler>
            <Collapse isOpen={true} navbar>
                <Nav className="ml-auto" navbar>
                <NavItem>
                    <NavLink href="/zengrid">Zen Grids</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/zenfleet">Zen Fleets</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/#contact">Contact</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="https://medium.com/met3r" target="_blank">Our news</NavLink>
                </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
      );
    }
  }
  
  export default Navigation;
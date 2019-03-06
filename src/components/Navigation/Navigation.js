import React, { Component } from 'react';
import { Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  } from 'reactstrap';
import onClickOutside from 'react-onclickoutside';
import { StyledIcon, StyledNavLink } from '../StyledComponents/StyledComponents';
import NavImage from '../../images/logo_temp.png';


class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen : false,
    }
  }

  toggleNavbar = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  
  render() {
    return (
      <Navbar expand="md">
          <NavbarBrand href="/"><img src={NavImage} style={{maxWidth: '200px'}} /></NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar}>
            <StyledIcon icon="bars" size="lg"/>
          </NavbarToggler>
          <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
              <NavItem>
                  <StyledNavLink href="/zengrid">Zen Grids</StyledNavLink>
              </NavItem>
              <NavItem>
                  <StyledNavLink href="/zenfleet">Zen Fleets</StyledNavLink>
              </NavItem>
              <NavItem>
                  <StyledNavLink href="/#contact">Contact</StyledNavLink>
              </NavItem>
              <NavItem>
                  <StyledNavLink href="https://medium.com/met3r" target="_blank">Our news</StyledNavLink>
              </NavItem>
              </Nav>
          </Collapse>
      </Navbar>
    );
  }
  }
  
  export default onClickOutside(Navigation);
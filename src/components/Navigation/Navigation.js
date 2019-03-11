import React, { Component } from 'react';
import { Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  } from 'reactstrap';
import styled from 'styled-components';
import onClickOutside from 'react-onclickoutside';
import { StyledIcon } from '../StyledComponents/StyledComponents';
import NavImage from '../../images/logo-met3r-white.png';
import AnimLink from './AnimLink';

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
      <Navbar expand="md" className="px-0">
          <NavbarBrand href="/"><img src={NavImage} style={{maxWidth: '200px'}} /></NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar}>
            <StyledIcon icon="bars" size="lg"/>
          </NavbarToggler>
          <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto mr-2 mr-sm-0 text-right" navbar>
              <NavItem>
                  <AnimLink text={'ZenGrids'} path={'/zengrid'} />
              </NavItem>
              <NavItem>
                  <AnimLink text={'ZenFleets'} path={"/zenfleet"} />
              </NavItem>
              <NavItem>
                <AnimLink text={'Contact'} path={"/#contact"} />
              </NavItem>
              <NavItem>
                <AnimLink text={'Our news'} path={"https://medium.com/met3r"} />
              </NavItem>
              </Nav>
          </Collapse>
      </Navbar>
    );
  }
  }
  
  export default onClickOutside(Navigation);
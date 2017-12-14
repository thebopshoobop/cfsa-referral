import React, { Component } from "react";
import {
<<<<<<< HEAD
  Container,
  Navbar,
  NavbarToggler,
  Nav,
  NavLink,
  NavbarBrand,
  Collapse,
  NavDropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu
} from "reactstrap";
import { LinkContainer } from "react-router-bootstrap";
import { setLanguage } from "translation";
=======
    Col,
    Container,
    Navbar,
    NavbarToggler,
    Nav,
    NavLink,
    NavbarBrand,
    Collapse,
    NavDropdown,
    DropdownItem,
    DropdownToggle,
    DropdownMenu,
    Row
} from 'reactstrap';
import { LinkContainer } from 'react-router-bootstrap';
import {setLanguage} from 'translation';
import translation from 'translation';
import imgLogo from './images/dcgov_logo.jpg';
>>>>>>> cb09b624d4873ce42288dce36fb96850c98d2d95

export default class Linkbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuOpen: false,
      languageOpen: false
    };
  }

  toggleOpen = element => () => {
    element += "Open";
    this.setState({ [element]: !this.state[element] });
  };

  navigate = destination => {
    return {
      onClick: () => this.props.history.push(destination),
      className: this.props.location.pathname === destination ? "current" : ""
    };
  };

<<<<<<< HEAD
  render() {
    return (
      <Container fluid={true}>
        <Navbar color="faded" light toggleable>
          <LinkContainer exact to="/">
            <NavbarBrand>CFSA Referral Program</NavbarBrand>
          </LinkContainer>
          <NavbarToggler right onClick={this.toggleOpen("menu")} />
          <Collapse
            className="navbar-toggleable-md"
            isOpen={this.state.menuOpen}
            navbar
          >
            <Nav navbar className="ml-auto">
              <NavDropdown
                isOpen={this.state.languageOpen}
                toggle={this.toggleOpen("language")}
              >
                <DropdownToggle nav caret>
                  Language
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem onClick={() => setLanguage("en")}>
                    English
                  </DropdownItem>
                  <DropdownItem onClick={() => setLanguage("es")}>
                    Español
                  </DropdownItem>
                </DropdownMenu>
              </NavDropdown>
              <LinkContainer to="/about">
                <NavLink>About</NavLink>
=======
  render(){
    const {history} = this.props;
    return (
      <Container fluid={true} className="mb-5 navbar-container">
        <Row>
          <Col md={12}>
            <Navbar light toggleable>
              <img className="dcgov_logo" src={imgLogo} alt="DCGov Logo" />
              <LinkContainer exact to="/">
                <NavbarBrand className="dark-blue">CFSA Referral Program</NavbarBrand>
>>>>>>> cb09b624d4873ce42288dce36fb96850c98d2d95
              </LinkContainer>
              <NavbarToggler right onClick={this.toggleOpen('menu')} />
              <Collapse className="navbar-toggleable-md" isOpen={this.state.menuOpen} navbar>
                <Nav navbar className="ml-auto">
                  <NavDropdown isOpen={this.state.languageOpen} toggle={this.toggleOpen('language')} >
                    <DropdownToggle nav caret>
                      {translation.t('LANGUAGE')}
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem onClick={() => setLanguage('en', history)}>
                        English
                      </DropdownItem>
                      <DropdownItem onClick={() => setLanguage('es', history)}>
                        Español
                      </DropdownItem>
                    </DropdownMenu>
                  </NavDropdown>
                  <LinkContainer to="/about">
                    <NavLink>{translation.t('ABOUT')}</NavLink>
                  </LinkContainer>
                  <LinkContainer to="/contact">
                    <NavLink>{translation.t('CONTACT')}</NavLink>
                  </LinkContainer>
                </Nav>
              </Collapse>
            </Navbar>
          </Col>
        </Row>
      </Container>
    );
  }
}

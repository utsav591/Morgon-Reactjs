import React from 'react';
import logo from '../../Assets/logo.png';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



function Header(){
    return(
          <>
      <Navbar expand="lg" className="bg-body-tertiary p-4">
      <Container fluid>
        <Navbar.Brand href="/"><img src={logo} alt="logo"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto nav-pad">
            <Nav.Link href="/" activeClassName="selected" >Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/services">Services</Nav.Link>
            <Nav.Link href="/contact">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar> 
      </>
    )
}

export default Header;
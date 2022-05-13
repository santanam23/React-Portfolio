import React from "react";
import { Container } from "react-bootstrap";
import { Navbar, Nav } from "react-bootstrap";

function NavTabs() {
  return (
    <header>
      <Navbar style={{ background: "teal", color: "white" }} expand="lg">
        <Container>
          <Navbar.Brand href="#home">Miriam-Portfolio</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#homeSection">Home</Nav.Link>
              <Nav.Link href="#projectSection">Projects</Nav.Link>
              <Nav.Link href="#skillsSection">Skills</Nav.Link>
              <Nav.Link href="#aboutSection">About</Nav.Link>
              <Nav.Link href="#contactSection">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
export default NavTabs;

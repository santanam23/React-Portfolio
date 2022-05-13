import React from "react";
import { Container } from "react-bootstrap";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <header>
      
      <Navbar style={{background:'teal', color:'white'}} expand="lg">
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
      
      
      {/* <div className="navbar">
        <h2>
          <a data-testid="link" href="/">
            Miriams Portfolio
          </a>
        </h2>
        <nav>
          <ul className="flex-row">
            <li className="mx-2">
              <a
                href="#home"
                onClick={() => handlePageChange("Home")}
                className={
                  currentPage === "Home" ? "nav-link active" : "nav-link"
                }
              >
                Home
              </a>
            </li>
            <li className="mx-2">
              <a
                href="#about"
                onClick={() => handlePageChange("About")}
                className={
                  currentPage === "About" ? "nav-link active" : "nav-link"
                }
              >
                About me
              </a>
            </li>
            <li className="mx-2">
              <a
                href="#contact"
                onClick={() => handlePageChange("Contact")}
                className={
                  currentPage === "Contact" ? "nav-link active" : "nav-link"
                }
              >
                Contact
              </a>
            </li>
            <li className="mx-2">
              <a
                href="#project"
                onClick={() => handlePageChange("Project")}
                className={
                  currentPage === "Project" ? "nav-link active" : "nav-link"
                }
              >
                Project
              </a>
            </li>
            <li className="mx-2">
              <a
                href="#resume"
                onClick={() => handlePageChange("Resume")}
                className={
                  currentPage === " Resume" ? "nav-link active" : "nav-link"
                }
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>
      </div> */}
    </header>
  );
}
export default NavTabs;

import React, { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import "./style.scss";


const Header = ({ goToProjects, goToExperiences, goToHome, goToAbout, bodyColor, navbarPos, marginBotton, page }) => {

  const [textColor, setTextColor] = useState("black");

  useEffect(() => {
    if (bodyColor === "white") setTextColor("black")
    else setTextColor("white")

  }, [bodyColor, page])


  return (

    <Navbar
      variant={bodyColor === "white" ? "light" : "dark"}
      collapseOnSelect
      expand="lg"
      className={navbarPos === "fixed" ? "navbar transition-nav" : "navbar"}
      style={{ backgroundColor: bodyColor, color: textColor, position: navbarPos, marginBottom: marginBotton }}
      fixed={navbarPos === "fixed" ? "top" : ""}

    >
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="nav"  >
            <Nav.Link className="nav-link-op" style={page === 0 ? { color: "#388697", fontWeight: "550" } : { color: textColor }} onClick={() => goToHome()}>Home</Nav.Link>
            <Nav.Link className="nav-link-op middleNavOption" style={page === 1 ? { color: "#388697", fontWeight: "550" } : { color: textColor }} onClick={() => goToProjects(1)}>Projetos</Nav.Link>
            <Nav.Link className="nav-link-op middleNavOption" style={page === 2 ? { color: "#388697", fontWeight: "550" } : { color: textColor }} onClick={() => goToExperiences()}>Experiences</Nav.Link>
            <Nav.Link className="nav-link-op middleNavOption" style={page === 3 ? { color: "#388697", fontWeight: "550" } : { color: textColor }} onClick={() => goToAbout()}>About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

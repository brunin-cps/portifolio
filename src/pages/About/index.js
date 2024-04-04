import React, { useState, useEffect } from "react";
// import Carousel from 'react-bootstrap/Carousel';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import "./style.scss";
import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ArrowUpBlack from '../../assets/up-arrow.png'
import ArrowUpWhite from '../../assets/up-arrow-wt.png'
// import getAllExperiences from "../../utils/experiences";



//criando o componente do rodapé para que possa ser exportado
const About = React.forwardRef((props, ref) => {
  // const [abouts] = useState(getAllExperiences())
  const [textColor, setTextColor] = useState("black");


  useEffect(() => {
    if (props.bodyColor === "white") setTextColor("black")
    else setTextColor("white")
  }, [props.bodyColor])

  return (
    <div ref={ref} style={{ scrollSnapAlign: "center" }}>
      <Container fluid className="about-section" style={{ color: textColor, backgroundColor: props.bodyColor }}>

        {/* {abouts.map((about, key) => */}
        <Row className="about-body">
          <Col xs={12} sm={12} md={12} lg={3} xl={3} xxl={3} className="about-description">
            <span className="title-about">Software Development</span ><br />
            <span className="description-about"> I am capable of working on full stack projects using HTML, CSS, JavaScript, React.js (with or without TypeScript), Vue.js and Node.js (3 years). And as undergraduate I also development with C/C++ (3 years) and with with Python (2 year).</span>
          </Col>
          <Col xs={12} sm={12} md={12} lg={3} xl={3} xxl={3} className="about-description">
            <span className="title-about">Testing</span ><br />
            <span className="description-about">Writing and executing testcases with JIRA. Creating automated end-to-end tests with Cypress and Pytest with Appium(1 year)</span>
          </Col>
          <Col xs={12} sm={12} md={12} lg={3} xl={3} xxl={3} className="about-description">
            <span className="title-about">Web Desing</span ><br />
            <span className="description-about">Developing Mockups of websites and aplications with Figma plataform and studing about UX/UI and Accessibility(1 year)</span>

          </Col>
          <Col xs={12} sm={12} md={12} lg={3} xl={3} xxl={3} className="about-description m-0">
            <span className="title-about">Others</span ><br />
            <span className="description-about">Problem Solving (Leetcode), Linux, Git, MySQL, MariaDB, Express.js, REST API, Sharepoint, advanced English (speaking, writing and reading) and native Portuguese.</span>

          </Col>
        </Row>
        <Row className="about-links">
          <Col className="d-flex justify-content-end align-items-center">
            <span className="contact-me">Contact me:</span>
          </Col>
          <Col>
            <Row className="linkedin-media" xxl={6}>
              <a href="https://www.linkedin.com/in/bruno-dsan/" target="_blank" rel="noopener noreferrer" className="links"><FontAwesomeIcon icon={faLinkedin} className="icon-space color-linkedin" />/bruno-dsan</a>
            </Row>
            <Row className="github-media" xxl={6} >
              <a className="links" href="https://github.com/brunin-cps" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} className="icon-space" />/brunin-cps</a>

            </Row>

          </Col>
        </Row>
        {/* )} */}

      </Container >
      <Row className="back-box-ab">
        <Col className="previous-box-ab">
          <span style={{ color: textColor, cursor: "pointer" }} onClick={() => props.goToHome()} className="title-about">Back to Start</span>
          <div className="icon-prev-box-ab">
            <img src={textColor === "white" ? ArrowUpWhite : ArrowUpBlack} alt="Arrow down with the text next" style={{ cursor: "pointer" }} className="back-icon" onClick={() => props.goToHome()}></img>
          </div>
        </Col>
      </Row>
    </div >

  );
});

export default About;

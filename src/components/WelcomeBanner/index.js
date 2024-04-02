import React, { useState, useEffect } from "react";
// import NavDropdown from 'react-bootstrap/NavDropdown';
import "./style.scss";
import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Img from '../../assets/selfie.jpg'
//criando o componente do rodapé para que possa ser exportado
const WelcomeBanner = ({ bodyColor, size, marginBotton }) => {

  const [textColor, setTextColor] = useState("black");

  useEffect(() => {
    if (bodyColor === "white") setTextColor("black")
    else setTextColor("white")
  }, [bodyColor])

  return (
    <Container fluid className="welcome-banner" style={{ height: size, marginBottom: marginBotton }}>
      <Row className="rowC">
        <Col sm={12} md={7} lg={8} xxl={6} className="description-banner">
          <p className="regular-sentence mb-4" style={{ color: textColor }}>Hello there! My name is <span className="name">Bruno Santos</span></p>
          <p className="h1-sentence mb-0">I'm a Software Engineer </p>
          <span className="regular-sentence" style={{ color: textColor }}>interested in Full stack development and Testing</span>

        </Col>
        <Col sm={12} md={5} lg={4} xxl={6} className="image-banner">
          <div className="image-box">
            <img src={Img} className="selfie-img" alt="selfie"></img>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default WelcomeBanner;

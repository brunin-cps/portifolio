import React, { useState, useEffect } from "react";
// import Carousel from 'react-bootstrap/Carousel';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import "./style.scss";
import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ArrowUpBlack from '../../assets/up-arrow.png'
import ArrowUpWhite from '../../assets/up-arrow-wt.png'
import getAllExperiences from "../../utils/experiences";


//criando o componente do rodapé para que possa ser exportado
const Experience = React.forwardRef((props, ref) => {
  const [experiences] = useState(getAllExperiences())
  const [textColor, setTextColor] = useState("black");


  useEffect(() => {
    if (props.bodyColor === "white") setTextColor("black")
    else setTextColor("white")
  }, [props.bodyColor])

  return (
    <div ref={ref} style={{ scrollSnapAlign: "center" }}>
      <Container fluid className="experience-section" style={{ color: textColor, backgroundColor: props.bodyColor }}>

        {experiences.map((experience, key) =>
          <Row className="experience-body" key={key}>
            <Col xs={2} sm={2} md={2} lg={2} xl={2} xxl={2} className="experience-image">
              <div className="experience-imgs-box">
                <img src={experience.imagem} className="project-img" alt="selfie"></img>
              </div>
            </Col>
            <Col xs={10} sm={11} md={10} lg={10} xl={10} xxl={10} className="experience-description">
              <span className="experience-date">{experience.data}</span>
              <span className="title-style">{experience.titulo}</span >
              <span className="xp-description">
                {experience.decricao}
              </span>
            </Col>
          </Row>
        )}
      </Container >
      <Row className="back-box-xp" >
        <Col className="previous-box-xp">
          <span style={{ color: textColor, cursor: "pointer" }} onClick={() => props.goToHome()}>Back to Start</span>
          <div className="icon-prev-box-xp">
            <img src={textColor === "white" ? ArrowUpWhite : ArrowUpBlack} alt="Arrow down with the text next" style={{ cursor: "pointer" }} className="back-icon" onClick={() => props.goToHome()}></img>
          </div>
        </Col>
      </Row>
    </div>

  );
});

export default Experience;

import React, { useState, useEffect } from "react";
import Carousel from 'react-bootstrap/Carousel';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import "./style.scss";
import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ArrowDownBlack from '../../assets/down-arrow.png'
import ArrowDownWhite from '../../assets/down-arrow-wt.png'
import ArrowUpBlack from '../../assets/up-arrow.png'
import ArrowUpWhite from '../../assets/up-arrow-wt.png'


//criando o componente do rodapé para que possa ser exportado
const Projetos = React.forwardRef((props, ref) => {

  const [textColor, setTextColor] = useState("black");
  const [project] = useState(props.project)


  useEffect(() => {
    // console.log(props.bodyColor, props.project.titulo, props.lengthProjects)
    // console.log(props, ref)

    if (props.bodyColor === "white") setTextColor("black")
    else setTextColor("white")
  }, [props.bodyColor])

  return (
    <Container fluid className="project-section" ref={ref} style={{ color: textColor, backgroundColor: project.color }}>
      <Container fluid className="project-body">

        <div className="vl" style={project.id > 1 ? { top: "calc((" + project.id + " * 100vh))", height: "41vh", borderColor: textColor } : { display: "none" }} ></div>
        <span className="indicators" style={{ top: "calc((" + project.id + " * 100vh) + 42vh)" }}>{project.data}</span>
        {props.lengthProjects !== project.id ? <div className="vl" style={{ borderColor: textColor, top: "calc((" + project.id + " * 100vh) + 46vh)" }}></div> : <></>}

        <Row className="project-box">
          <Col sm={12} md={8} lg={12} xl={5} xxl={4} className="content-banner">
            <span className="title-style">{project.titulo}</span ><br />
            {project.decricao}<br />
            <a href={project.link} className="link-project">Access project</a>
          </Col>
          <Col sm={12} md={8} lg={12} xl={7} xxl={8} className="project-banner">
            <div className="project-imgs-box">
              <Carousel data-bs-theme="dark" className="carrousel-details">
                {project.imagens.map((img, key) =>
                  <Carousel.Item key={key}>
                    <img src={img} className="project-img" alt="selfie"></img>
                  </Carousel.Item>
                )}
              </Carousel>
            </div>
          </Col>
        </Row>
        <Row className="control-box" >

          <Col xs={6} sm={6} md={6} lg={6} xxl={6} className="previous-box">
            {
              project.id > 1 ?
                <span style={{ color: textColor, cursor: "pointer" }} onClick={() => props.goToProjects(project.id - 1)}>Previous</span> :
                <span style={{ color: textColor, cursor: "pointer", }} onClick={() => props.goToHome()}>Back to Start</span>
            }
            <div className="icon-prev-box">
              {
                project.id > 1 ?
                  <img src={textColor === "white" ? ArrowUpWhite : ArrowUpBlack} alt="Arrow down with the text next" className="back-icon" style={{ marginRight: "16px" }} onClick={() => props.goToProjects(project.id - 1)}></img> :
                  <img src={textColor === "white" ? ArrowUpWhite : ArrowUpBlack} style={{ marginRight: "33px" }} alt="Arrow down with the text next" className="back-icon" onClick={() => props.goToHome()}></img>
              }
            </div>
          </Col>

          <Col xs={6} sm={6} md={6} lg={6} xxl={6} className="next-box">
            {
              props.lengthProjects !== project.id ?
                <span style={{ color: textColor, cursor: "pointer" }} onClick={() => props.goToProjects(project.id + 1)}>Next</span> :
                <span style={{ color: textColor, cursor: "pointer" }} onClick={() => props.goToHome()}>Back to Start</span>
            }

            <div className="icon-next-box">
              {
                props.lengthProjects !== project.id ?
                  <img src={textColor === "white" ? ArrowDownWhite : ArrowDownBlack} style={{ marginLeft: "1px" }} alt="Arrow down with the text next" className="next-icon" onClick={() => props.goToProjects(project.id + 1)}></img> :
                  <img src={textColor === "white" ? ArrowUpWhite : ArrowUpBlack} style={{ marginLeft: "32px" }} alt="Arrow down with the text next" className="back-icon" onClick={() => props.goToHome()}></img>
              }

            </div>
          </Col>

        </Row>

      </Container>

    </Container >
  );
});

export default Projetos;

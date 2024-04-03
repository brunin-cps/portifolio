import React, { useState, useEffect, useRef } from "react";
import Header from "../../components/Header";
import "./style.scss";
import WelcomeBanner from "../../components/WelcomeBanner";
import LightOn from "../../assets/lightbulb-on.png"
import LightOff from "../../assets/lightbulb-off.png"
import Projetos from "../Projetos";
import getAllProjects from "../../utils/projects";
import Experience from "../Experiencies";
import About from "../About";
// import Brasil from "../../assets/brazil.png"
// import Form from 'react-bootstrap/Form';

const Home = () => {
  const [bodyColor, setBodyColor] = useState('white');
  const [scrollPos, setScrollPos] = useState(0)

  const [page, setPage] = useState(0)
  // const [language, setLanguage] = useState("ingles")


  const [itens] = useState(getAllProjects());
  const { innerHeight: height } = window;
  const [scrollSize, setScrollSize] = useState(height / 3)

  const itemsRef = useRef([]);
  const welcomeBannerRef = useRef(null)
  const experienceRef = useRef(null)
  const aboutRef = useRef(null)

  const goToHome = () => {
    setScrollSize(height / 3)
    welcomeBannerRef.current.scrollIntoView({ behavior: 'auto' })
  }

  const goToExperiences = () => {
    if (scrollPos <= height / 2) setScrollSize(height * 3)
    experienceRef.current.scrollIntoView({ behavior: 'auto' })
  }

  const goToProjects = (projecId) => {

    setScrollSize(height / 3)
    if (!itemsRef.current) return;
    itemsRef.current[projecId - 1]?.scrollIntoView({ behavior: 'auto' })
  }

  const goToAbout = () => {

    if (scrollPos <= height / 2) setScrollSize(height * 4)
    aboutRef.current.scrollIntoView({ behavior: 'auto' })
  }

  const changeColors = () => {
    if (bodyColor === "black") setBodyColor("white")
    else setBodyColor("black")
  }

  const handleScroll = () => {
    const position = document.getElementById('bodyDiv').scrollTop;

    if (position < height - 10) setPage(0)
    else if (position >= height - 10 && position <= 5 * height - 10) setPage(1)
    else if (position > 5 * height - 10 && position <= 6 * height - 10) {
      setPage(2)
      setScrollSize(height / 3)
    }
    else if (position > 6 * height - 10) {
      setPage(3)
      setScrollSize(height / 3)
    }
    // console.log(position, height, page)
    setScrollPos(position);
  };

  useEffect(() => {
    itemsRef.current = itemsRef.current.slice(0, itens.length);

  }, [itens]);

  return (
    <div id="bodyDiv" className="totalBody" style={{ backgroundColor: bodyColor }} onScroll={() => handleScroll()}>
      <div ref={welcomeBannerRef} style={{ display: "hidden" }}></div>

      {scrollPos <= scrollSize ? <WelcomeBanner bodyColor={bodyColor} size={"50vh"} marginBotton={"0vh"}></WelcomeBanner> : <Header goToProjects={goToProjects} goToExperiences={goToExperiences} goToHome={goToHome} goToAbout={goToAbout} bodyColor={bodyColor} navbarPos={"fixed"} marginBotton={"0vh"} page={page} ></Header>}
      {scrollPos > scrollSize ? <WelcomeBanner bodyColor={bodyColor} size={"58vh"} marginBotton={"42vh"}></WelcomeBanner> : <Header goToProjects={goToProjects} goToExperiences={goToExperiences} goToHome={goToHome} goToAbout={goToAbout} bodyColor={bodyColor} navbarPos={"relative"} marginBotton={"42vh"} page={page}></Header>}

      {itens.map((project, i) =>
        <Projetos ref={el => itemsRef.current[i] = el} goToProjects={goToProjects} goToHome={goToHome} bodyColor={bodyColor} lengthProjects={itens.length} project={project} key={i}></Projetos>
      )}

      <Experience ref={experienceRef} goToHome={goToHome} bodyColor={bodyColor} ></Experience>
      <About ref={aboutRef} goToHome={goToHome} bodyColor={bodyColor}></About>

      <div className="lightbub-box">
        <img alt="lightbub" src={bodyColor === "white" ? LightOn : LightOff} className="lightbub" onClick={() => changeColors()}></img>
      </div>
      {/* <div className="language-box">
        <img alt="lightbub" src={Brasil} className="language-icon"></img>

        <Form.Select aria-label="Default select example" defaultValue={1}>
          <option value="1">En</option>
          <option value="2">Pt</option>
        </Form.Select>
      </div> */}
    </div>
  );
};

export default Home;

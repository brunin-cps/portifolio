import React from "react";
import Header from "../../components/Header";
import "./style.scss";
import WelcomeBanner from "../../components/WelcomeBanner";


const HomePage = ({ bodyColor, scrollSize, scrollPos, goToProjects, goToExperiences, goToHome, goToAbout, page }) => {
  return (
    <div>
      {scrollPos <= scrollSize ? <WelcomeBanner bodyColor={bodyColor} size={"50vh"} marginBotton={"0vh"}></WelcomeBanner> : <Header goToProjects={goToProjects} goToExperiences={goToExperiences} goToHome={goToHome} goToAbout={goToAbout} bodyColor={bodyColor} navbarPos={"fixed"} marginBotton={"0vh"} page={page} ></Header>}
      {scrollPos > scrollSize ? <WelcomeBanner bodyColor={bodyColor} size={"58vh"} marginBotton={"42vh"}></WelcomeBanner> : <Header goToProjects={goToProjects} goToExperiences={goToExperiences} goToHome={goToHome} goToAbout={goToAbout} bodyColor={bodyColor} navbarPos={"relative"} marginBotton={"42vh"} page={page}></Header>}
    </div>
  );
};

export default HomePage;

import React from "react";
import NavTabs from "../NavTabs";
import Home from "../Home";
import About from "../About";
import Contact from "../Contact";
import Project from "../Project";
import TechSkills from "../TechSkills";

export default function PortfolioContainer() {

  return (
    <div>
      <NavTabs />
      {/* {renderPage()} */}
      <div
        id="homeSection"
        style={{
          minHeight:'80vh',
          display:'flex',
          flexDirection:'column',
          justifyContent:'center',
          backgroundImage: "linear-gradient(180deg, #dfe5dc, transparent)",
        }}
      >
        <Home />
      </div>
      <div
        style={{
          maxWidth: "1300px",
          marginLeft: "auto",
          marginRight: "auto",
          padding: "0px 20px",
        }}
      >
        <div
          id="projectSection"
          style={{ marginTop: "10px", marginBottom: "10px" }}
        >
          <Project />
        </div>
        <div id="skillsSection" style={{marginTop:"50px"}}>
          <TechSkills />
        </div>
        <div id="aboutSection">
          <About />
        </div>
        <div id="contactSection" style={{ marginBottom: "100px" }}>
          <Contact />
        </div>
      </div>
    </div>
  );
}

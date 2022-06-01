import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import foodFest from "../../assets/images/foodFest.png";
import notetaker from "../../assets/images/notetaker.png";
import passwordGen from "../../assets/images/passwordGen.png";
import weatherDash from "../../assets/images/weatherDash.png";
import houstonVolleyballSocial from "../../assets/images/houstonVolleyballSocial.png";
import ProjectCard from "./Project_card";
import SectionTitle from "../common/SectionTitle/index";

const projectList = [
  {
    name: "Food Fest",
    description: "This is a link to my Food Fest PWA",
    image: foodFest,
    Link: "https://santanam23.github.io/food-festival/",
  },
  {
    name: "Notetaker",
    description: "This is a link to Notetaker app",
    image: notetaker,
    Link: "https://gentle-atoll-41675.herokuapp.com/",
  },
  {
    name: "Password Generator",
    description: "This is a link to my Food Fest PWA",
    image: passwordGen,
    Link: "https://santanam23.github.io/Password-Generator/",
  },
  {
    name: "Weather Dashboard",
    description: "This is a link to Notetaker app",
    image: weatherDash,
    Link: "https://santanam23.github.io/Weather-Dashboard/",
  },
  {
    name: "Houston Volleyball Social",
    description: "This is a link to Notetaker app",
    image: houstonVolleyballSocial,
    Link: "https://secret-beyond-82045.herokuapp.com/",
  },
];

function Project() {
  return (
    <section id="project">
      <SectionTitle
        title="Projects"
        description={
          "These are some projects that I'm so happy to share with you."
        }
      />
      <br />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3} justifyContent="center">
          {projectList.map((val, key) => {
            return (
              <Grid item key={key}>
                <ProjectCard
                  name={val.name}
                  description={val.description}
                  image={val.image}
                  Link={val.Link}
                />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </section>
  );
}
export default Project;

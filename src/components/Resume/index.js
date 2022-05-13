import { Grid, Typography } from "@mui/material";
import React from "react";
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";
import SectionTitle from "../common/SectionTitle";
import SkillList from "./SkillList";

const skills = [
  {
    title: "Front-End Proficiency",
    skillList: [
      {
        skill: "HTML",
        image:
          "https://cdn.radikadilanka.com/radikadilanka.com.assets/HomePage/skill_logos/reactjs.svg",
      },
      {
        skill: "CSS",
        image:
          "https://cdn.radikadilanka.com/radikadilanka.com.assets/HomePage/skill_logos/mui.png",
      },
      {
        skill: "Javascript",
        image:
          "https://cdn.radikadilanka.com/radikadilanka.com.assets/HomePage/skill_logos/reactjs.svg",
      },
      {
        skill: "Responsive Design",
        image:
          "https://cdn.radikadilanka.com/radikadilanka.com.assets/HomePage/skill_logos/reactjs.svg",
      },
      {
        skill: "React JS",
        image:
          "https://cdn.radikadilanka.com/radikadilanka.com.assets/HomePage/skill_logos/reactjs.svg",
      },
    ],
  },
  {
    title: "Back-End Proficiency",
    skillList: [
      {
        skill: "HTML",
        image:
          "https://cdn.radikadilanka.com/radikadilanka.com.assets/HomePage/skill_logos/reactjs.svg",
      },
      {
        skill: "CSS",
        image:
          "https://cdn.radikadilanka.com/radikadilanka.com.assets/HomePage/skill_logos/reactjs.svg",
      },
      {
        skill: "Javascript",
        image:
          "https://cdn.radikadilanka.com/radikadilanka.com.assets/HomePage/skill_logos/reactjs.svg",
      },
      {
        skill: "Responsive Design",
        image:
          "https://cdn.radikadilanka.com/radikadilanka.com.assets/HomePage/skill_logos/reactjs.svg",
      },
      {
        skill: "React JS",
        image:
          "https://cdn.radikadilanka.com/radikadilanka.com.assets/HomePage/skill_logos/reactjs.svg",
      },
    ],
  },
];

function Resume() {
  const first = ["HTML", "CSS", "Javascript", "responsive design", "react"];
  const firstList = first.map((first) => <ul>{first}</ul>);
  const second = [
    "APIs",
    "Node",
    "Express",
    "MySQL, Sequeulze",
    "MongoDB",
    "Rest",
  ];
  const secondList = second.map((second) => <ul>{second}</ul>);
  return (
    <section>
      <SectionTitle
        title={"Technical Skills"}
        description="I've gained the following skills so far and willing to level up my skills further."
      />
      <Grid container justifyContent="space-between">
        {skills.map((val, key) => {
          return (
            <Grid item xs={12} sm={6} key={key}>
              <div>
                <Typography style={{ margin: "20px 0px", fontWeight: "600" }}>
                  {val.title}
                </Typography>
                <br />
                <SkillList skillList={val.skillList} />
              </div>
            </Grid>
          );
        })}
      </Grid>

      {/* <div>
      <h1 className="Resume" id="resume">Front-End Proficiency</h1>
    {firstList}
    </div>
    <div>
      <h1 className="Resume" id="resume">Back-End Proficiency</h1>
    {secondList}
    </div> */}
    </section>
  );
}

export default Resume;

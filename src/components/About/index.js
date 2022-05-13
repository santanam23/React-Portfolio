import { Grid } from "@mui/material";
import React from "react";
import coverImage from "../../assets/images/coverImage.jpeg";
function About() {
  return (
    <div className="my-5" id="about">
      <h1>Who am I?</h1>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <p>
            I graduated from the University of Houston with a BA in
            Communications in 2015. After college, I decided to stay in my line
            of work and become a General Manager for Chipotle Mexican Grill. I
            was a General Manager for six years. During the pandemic, I realized
            I wanted to go back to school and focus on my passion for tech. In
            May 2020, I placed my resignation and decided to enroll in a coding
            boot camp. Rice University had a program starting in November so I
            decided to wait until Novenmber to start school.
          </p>
        </Grid>
        <Grid item xs={12} sm={6}>
          <img
            src={coverImage}
            style={{ width: "50%", borderRadius:'10px' }}
            alt="cover"
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default About;

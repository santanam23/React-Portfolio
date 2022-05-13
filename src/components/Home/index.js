import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import myImage from "../../assets/images/coverImage.jpeg";
import { Typography } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function Home() {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={1}
          justifyContent={"center"}
          alignItems="center"
        >
          <Grid item xs={12} sm={7}>
            <div style={{ textAlign: "center" }}>
              <h1>I'm  <span style={{fontSize:"50px"}}> 
              Miriam Santana
                </span></h1>
              <Typography> A frontend developer with React</Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={4} container justifyContent={"center"}>
            <img
              src={
                "https://writestylesonline.com/wp-content/uploads/2019/01/What-To-Wear-For-Your-Professional-Profile-Picture-or-Headshot.jpg"
              }
              style={{ borderRadius: "20px", width: "80%" }}
              alt="Miriam Santana"
              title="Miriam Santana"
              
            />
          </Grid>
        </Grid>
      </Box>
      {/* <h1>Welcome To Miriam's Portfolio!</h1>
        <p>
         I am so excited you have come across my homepage. I have created this react style website for you to read a little about me. Although the react app site needs a little bit more design, I hope you like what you see so far. Feel free to reach out to me if you have any questions or corners.
        </p> */}
    </div>
  );
}

export default Home;

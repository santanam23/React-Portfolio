import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
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
                "https://scontent.fhou1-2.fna.fbcdn.net/v/t1.6435-9/71262373_10211568710532556_3625974823378747392_n.jpg?stp=dst-jpg_s552x414&_nc_cat=103&ccb=1-6&_nc_sid=da31f3&_nc_ohc=hF7PYl0ZV9QAX-F36xi&_nc_ht=scontent.fhou1-2.fna&oh=00_AT8RHq0kRhHdkqMQcxJgt2ZrsskBtoBALPu_akoQviq5_A&oe=62A2A69F"
              }
              style={{ borderRadius: "20px", width: "80%" }}
              alt="Miriam Santana"
              title="Miriam Santana"
              
            />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default Home;

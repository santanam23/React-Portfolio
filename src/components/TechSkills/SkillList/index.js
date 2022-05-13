import { Grid } from "@mui/material";
import React from "react";
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";

export default function({ skillList }) {
  return (
    <div>
      <Grid container>
        {skillList.map((val, key) => {
          return (
            <div
            style={{marginRight:'5px', marginBottom:'5px'}}
              key={key}
            >
              <Chip
                avatar={
                  <Avatar
                    style={{ padding: "3px" }}
                    alt={val.skill}
                    src={val.image}
                  />
                }
                label={val.skill}
                variant="outlined"
              />
            </div>
          );
        })}
      </Grid>
    </div>
  );
}

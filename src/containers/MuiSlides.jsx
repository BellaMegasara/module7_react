import React from "react";
import { Box } from "@mui/material";
import CustomCard from "../components/CustomCard";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import BasicGrid from "../components/BasicGrid";

export const MuiSlides = () => {
  // states/var
  // functions
  // return
  return (
    <Box>
      <h1>MuiSlides</h1>
      <Box border={"red 1px solid"} p={"10px"}>
        <CustomCard
          title="First Card"
          ctionButtonOne={{
            label: "Two",
            action: () => {
              console.log("one fired");
            },
          }}
          actionButtonTwo={{
            label: "Two",
            action: () => {
              console.log("two fired");
            },
          }}
        />
      </Box>
    </Box>
  );
};

import React from "react";
import "./TimeLine.css";
import { Box, useColorModeValue, Badge } from "@chakra-ui/react";

import experienceData from "../../data/experience.json";
const TimeLine = ({date, name, institution, description}) => {
  return (
    <Box
      color={useColorModeValue("black", "black")}
      pb="5vh"
      className="timeline"
    >
      <div className="date">
        <Badge colorScheme="blue">{date}</Badge>
      </div>
      <div className="expcontainer right">
        <div className="content">
          <h2 className="name-style">
            {name} <span> | {institution}</span>
          </h2>
          <p>{description}</p>
        </div>
      </div>
    </Box>
  );
};

export default TimeLine;

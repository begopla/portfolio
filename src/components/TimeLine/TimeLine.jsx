import React from "react";
import "./TimeLine.css";
import { Box, useColorModeValue, Badge } from "@chakra-ui/react";

import experienceData from "../../data/experience.json";
const TimeLine = () => {
  return (
    <Box
      color={useColorModeValue("black", "black")}
      pb='5vh'
      className="timeline"
    >

   
    
      {experienceData.map((experience) => {
        console.log(experience);
        return (
          <>
          <div className="date">
            <Badge colorScheme='blue' >{experience.date}</Badge>
          </div>  
          <div className="expcontainer right">
            <div className="content">
              <h2 className="name-style">{experience?.name} <span> | {experience?.institution}</span></h2>
              <p>
               {experience.description}
              </p>
            </div>
          </div>
          </>
        );
      })}
    
    </Box>
  );
};

export default TimeLine;

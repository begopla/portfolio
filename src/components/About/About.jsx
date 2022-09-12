import React from "react";
import {
  Flex,
  Box,
  Text,
  useColorModeValue,
  Show,
  Hide,
  Center,
} from "@chakra-ui/react";

import "./About.css";
import Skills from "../Skills/Skills";
const About = () => {
  return (
    <Box
      className="about-container"
      id="about"
      color={useColorModeValue("black", "black")}
      pb='5vh'
    >
      <Flex direction="column" align="center">
        <Box as="h2" fontSize="3xl" fontWeight="600" mt="8vh">
          <span className="about-heading">ABOUT ME</span>
        </Box>
        <Center><Text mt="2vh" mb="2vh" ml="5vw" mr="5vw" fontSize="large">
          Here you can find more information about what I do, my current
          programming and technological skills
        </Text></Center>
      </Flex>
      <Show above="768px">
        <Flex>
          <Box mt="10vh" ml="5vw" mr="5vw" width="35%">
           <Center> <Box as="h4" fontSize="3xl" fontWeight="600">
              Get to know me!
            </Box></Center>
            <Text mt="2vh" >
              {/* Passioned about technology, I'm devoted to make people's life easier
          by making technology available.*/}
              I'm a well-rounded engineer and I have found my passion in
              bulding successfull products.
            </Text>
            <Text mt='1vh'>
            I build{" "}
          <span className="highlighted"> front and backend websites </span> and
          web applications, check you my work in the{" "}
          <span className="highlighted">projects</span> section.
            </Text>
            <Text mt="1vh">
              I'm open to new projects and{" "}
              <span className="highlighted">job opportunities </span> where I can
              contribute, learn and grow. If you have any opportunity that
              matches my skills and experience,{" "}
              <span className="highlighted">contact me!</span>
            </Text>
          </Box>

          <Skills />
        </Flex>
      </Show>

      <Hide above="768px">
        <Center> <Box
          as="h4"
          fontSize="3xl"
          fontWeight="600"
          mt="4vh"
          ml="5vw"
          mr="5vw"
        >
          Get to know me!
        </Box></Center>
        <Text mt="1vh" mb="2vh" ml="5vw" mr="5vw">
          Passioned about technology, I'm devoted to make people's life easier
          by making technology available. I'm a well-rounded engineer and I have
          found my passioned in bulding successfull products. I build{" "}
          <span className="highlighted"> front and backend websites </span> and
          web application, check you my work in the{" "}
          <span className="highlighted">projects</span> section.
        </Text>
        <Text mt="1vh" mb='-5vh' ml="5vw" mr="5vw">
          I'm open to new projects and{" "}
          <span className="highlighted">job oppotunities </span> where I can
          contribute, learn and grow. If you have an oppotunities that matches
          my skills and experience,{" "}
          <span className="highlighted">contact me!</span>
        </Text>
        
        <Skills />
      </Hide>
    </Box>
  );
};

export default About;

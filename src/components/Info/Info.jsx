import React from "react";
import {
  Text,
  Box,
  Center,
  Flex,
  useColorModeValue,
  Button,
  IconButton,
  Link,
  VStack,
  Hide,
  Show
} from "@chakra-ui/react";

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { HashLink } from "react-router-hash-link";
import "./Info.css";

const Info = () => {
  return (
    <Box className="mainInfo" color={useColorModeValue("black", "gray.500")}>
      <Text height="6rem"></Text>

      <Flex direction="column" align="center">
      <Hide below='768px'>
      <Box
          as="h1"
          color={useColorModeValue("black", "black")}
          fontSize="5xl"
          fontWeight="700"
          mt='15vh'
        >
          HEY, I'M
        </Box>

        <Box
          as="h2"
          color={useColorModeValue("black", "black")}
          fontSize="5xl"
          mt="3vh"
          fontWeight="700"
        >
          BEGOÑA PLA
        </Box>
        <Center>
          <Box as="h5" fontSize="xl" mt="5vh" width="50vw" align="center">
            I'm a full stack developer, building the front and backend of successfull websites and web applications 
          </Box>
        </Center>
        <Button
          bg={useColorModeValue("blue.200", "gray.800")}
          color={useColorModeValue("black", "white")}
          width="20vw"
          height='7vh'
          mt="12vh"
          mb="18vh"
        >
          <HashLink to="#projects">PROJECTS</HashLink>
        </Button>
      </Hide>

      <Show below='768px'>

        <Box
          as="h2"
          color={useColorModeValue("black", "black")}
          fontSize="3xl"
          fontWeight="600"
          mt={5}
        >
          HEY, I'M
        </Box>

        <Box
          as="h2"
          color={useColorModeValue("black", "black")}
          fontSize="3xl"
          mt="1vh"
          fontWeight="600"
        >
          BEGOÑA PLA
        </Box>
        <Center>
          <Box as="h5" fontSize="xl" mt="2vh" width="80vw" align="center">
            I'm a full stack developer, building the front and backend of successfull websites and web applications 
          </Box>
        </Center>
        <Button
          bg={useColorModeValue("blue.200", "gray.800")}
          color={useColorModeValue("black", "white")}
          width="20vw"
          mt="5vh"
          mb="6rem"
        >
          <HashLink to="#projects">PROJECTS</HashLink>
        </Button>
      </Show>

        <Hide below="768px">
          <Box className="contact-socials">
            <VStack>
              <IconButton
                as={Link}
                href={"https://github.com/begopla"}
                size={"lg"}
                icon={<FaGithub />}
                aria-label={"Github account"}
                bg={useColorModeValue("white", "gray.200")}
                _hover={{
                  textDecoration: "none",
                  bg: useColorModeValue("gray.200", "gray.900"),
                }}
              />
              <IconButton
                as={Link}
                href={"https://www.linkedin.com/in/begonaplarubio"}
                size={"lg"}
                icon={<FaLinkedin />}
                aria-label={"Linkedin account"}
                bg={useColorModeValue("white", "gray.200")}
                _hover={{
                  textDecoration: "none",
                  bg: useColorModeValue("gray.200", "gray.900"),
                }}
              />
            </VStack>
          </Box>
        </Hide> 
      </Flex>
    </Box>
  );
};

export default Info;

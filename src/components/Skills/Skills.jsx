import React from "react";
import {
  Flex,
  Box,
  Wrap,
  WrapItem,
  Button,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue
} from "@chakra-ui/react";
const Skills = () => {
  return (
    <Box id="skills" >
      <Flex direction="column" align="flexStart" >
        <Box as="h4" fontSize="3xl" fontWeight="600" mt="10vh" ml='5vw' >
          My skills
        </Box>
        <Flex direction="column" align="center" margin='0 2rem 0 2rem ' >
        <SimpleGrid columns={[1, 2, 1, 2]} >
          {/* Main Languagues */}
          <Box
            p={4}
            display={{ md: "flex" }}
            maxWidth="32rem"
            borderWidth={2}
            borderRadius={5}
            margin={2}
          >
            <Stack>
              <Text fontWeight="500">Main Languages</Text>
              <Wrap spacing={4} mt="4vh">
                <WrapItem>
                  <Button bg={useColorModeValue("blue.100", "gray.200")}>HTML5</Button>
                </WrapItem>
                <WrapItem>
                  <Button bg={useColorModeValue("blue.100", "gray.200")}>CSS3</Button>
                </WrapItem>
                <WrapItem>
                  <Button bg={useColorModeValue("blue.100", "gray.200")}>SASS</Button>
                </WrapItem>
                <WrapItem>
                  <Button bg={useColorModeValue("blue.100", "gray.200")}>JavaScript</Button>
                </WrapItem>
                <WrapItem>
                  <Button bg={useColorModeValue("blue.100", "gray.200")}>TypeScript</Button>
                </WrapItem>
                <WrapItem>
                  <Button bg={useColorModeValue("blue.100", "gray.200")}>C programming</Button>
                </WrapItem>
              </Wrap>
            </Stack>
          </Box>
          {/* JS Frameworks */}
          <Box
            p={4}
            display={{ md: "flex" }}
            maxWidth="32rem"
            borderWidth={2}
            borderRadius={5}
            margin={2}
          >
            <Stack>
             <Text fontWeight="500">JS Frameworks</Text>
             <Wrap spacing={4} mt="4vh">
                <WrapItem>
                  <Button bg={useColorModeValue("blue.100", "gray.200")}>Node.js</Button>
                </WrapItem>
                <WrapItem>
                  <Button bg={useColorModeValue("blue.100", "gray.200")}>Handlebard</Button>
                </WrapItem>
                <WrapItem>
                  <Button bg={useColorModeValue("blue.100", "gray.200")}>Bootstrap</Button>
                </WrapItem>
                <WrapItem>
                  <Button bg={useColorModeValue("blue.100", "gray.200")}>Material UI</Button>
                </WrapItem>
                <WrapItem>
                  <Button bg={useColorModeValue("blue.100", "gray.200")}>Chakra UI</Button>
                </WrapItem>
              </Wrap>
            </Stack>
          </Box>

          {/* JS Libraries */}

          <Box
            p={4}
            display={{ md: "flex" }}
            maxWidth="32rem"
            borderWidth={2}
            borderRadius={5}
            margin={2}
          >
            <Stack>
              <Text fontWeight="500">JS Libraries</Text>
              <Wrap spacing={4} mt="4vh">
                <WrapItem>
                  <Button bg={useColorModeValue("blue.100", "gray.200")}>React</Button>
                </WrapItem>

                {/* <WrapItem>
                        <Buttonbg={useColorModeValue("blue.100", "gray.200")}>Vue</Button>
                    </WrapItem>
                  
                   */}
              </Wrap>
            </Stack>
          </Box>

          {/* Backend */}
          <Box
            p={4}
            display={{ md: "flex" }}
            maxWidth="32rem"
            borderWidth={2}
            borderRadius={5}
            margin={2}
          >
            <Stack>
              <Text fontWeight="500">Backend</Text>
              <Wrap spacing={4} mt="4vh">
                <WrapItem>
                  <Button bg={useColorModeValue("blue.100", "gray.200")}>Postman</Button>
                </WrapItem>
                <WrapItem>
                  <Button bg={useColorModeValue("blue.100", "gray.200")}>Axios</Button>
                </WrapItem>
                <WrapItem>
                  <Button bg={useColorModeValue("blue.100", "gray.200")}>REST API</Button>
                </WrapItem>
              </Wrap>
            </Stack>
          </Box>

          {/* Database */}

          <Box
            p={4}
            display={{ md: "flex" }}
            maxWidth="32rem"
            borderWidth={2}
            borderRadius={5}
            margin={2}
          >
            <Stack>
              <Text fontWeight="500">Database</Text>
              <Wrap spacing={4} mt="4vh">
                <WrapItem>
                  <Button bg={useColorModeValue("blue.100", "gray.200")}>SQL</Button>
                </WrapItem>
                <WrapItem>
                  <Button bg={useColorModeValue("blue.100", "gray.200")}>MongoDB</Button>
                </WrapItem>
                <WrapItem>
                  <Button bg={useColorModeValue("blue.100", "gray.200")}>mongoose</Button>
                </WrapItem>
              </Wrap>
            </Stack>
          </Box>

          {/* Version Control  */}
          
        <Box
            p={4}
            display={{ md: "flex" }}
            maxWidth="32rem"
            borderWidth={2}
            borderRadius={5}
            margin={2}
          >
            <Stack>
              <Text fontWeight="500">Version Control</Text>
              <Wrap spacing={4} mt="4vh">
                <WrapItem>
                  <Button bg={useColorModeValue("blue.100", "gray.200")}>GitHub</Button>
                </WrapItem>
                <WrapItem>
                  <Button bg={useColorModeValue("blue.100", "gray.200")}>Netlify</Button>
                </WrapItem>
              </Wrap>
            </Stack>
          </Box>
          
        </SimpleGrid>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Skills;

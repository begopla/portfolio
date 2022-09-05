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
import './Skills.css'
const Skills = () => {
  return (
    <Box id="skills" color={useColorModeValue('black', 'black' )}>
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
                  <Button colorScheme="gray">HTML5</Button>
                </WrapItem>
                <WrapItem>
                  <Button colorScheme="gray">CSS3</Button>
                </WrapItem>
                <WrapItem>
                  <Button colorScheme="gray">SASS</Button>
                </WrapItem>
                <WrapItem>
                  <Button colorScheme="gray">JavaScript</Button>
                </WrapItem>
                <WrapItem>
                  <Button colorScheme="gray">TypeScript</Button>
                </WrapItem>
                <WrapItem>
                  <Button colorScheme="gray">C programming</Button>
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
                  <Button colorScheme="gray">Node.js</Button>
                </WrapItem>
                <WrapItem>
                  <Button colorScheme="gray">Handlebard</Button>
                </WrapItem>
                <WrapItem>
                  <Button colorScheme="gray">Bootstrap</Button>
                </WrapItem>
                <WrapItem>
                  <Button colorScheme="gray">Chakra UI</Button>
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
                  <Button colorScheme="gray">React</Button>
                </WrapItem>

                {/* <WrapItem>
                        <Button colorScheme='gray'>Vue</Button>
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
                  <Button colorScheme="gray">Postman</Button>
                </WrapItem>
                <WrapItem>
                  <Button colorScheme="gray">Axios</Button>
                </WrapItem>
                <WrapItem>
                  <Button colorScheme="gray">REST API</Button>
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
                  <Button colorScheme="gray">SQL</Button>
                </WrapItem>
                <WrapItem>
                  <Button colorScheme="gray">MongoDB</Button>
                </WrapItem>
                <WrapItem>
                  <Button colorScheme="gray">mongoose</Button>
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
                  <Button colorScheme="gray">GitHub</Button>
                </WrapItem>
                <WrapItem>
                  <Button colorScheme="gray">Netlify</Button>
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

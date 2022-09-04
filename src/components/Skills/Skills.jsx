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
  Center,
} from "@chakra-ui/react";
const Skills = () => {
  return (
    <section id="skills">
      <Flex direction="column" align="flexStart" ml="10vw">
        <Box as="h4" fontSize="3xl" fontWeight="600" mt="10vh" ml='15vw'>
          My skills
        </Box>
        <Flex direction="column" align="center" ml='10vw'>
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
              <Center>
                <Text fontWeight="500">Main Languages</Text>
              </Center>
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
              <Center>
                <Text fontWeight="500">JS Frameworks</Text>
              </Center>
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
              <Center>
                <Text fontWeight="500">JS Libraries</Text>
              </Center>
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
              <Center>
                <Text fontWeight="500">Backend</Text>
              </Center>
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
              <Center>
                <Text fontWeight="500">Database</Text>
              </Center>
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
              <Center>
                <Text fontWeight="500">Version Control</Text>
              </Center>
              <Wrap spacing={4} mt="4vh" width="80vw">
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
    </section>
  );
};

export default Skills;

import React from 'react';
import {
    Flex,
    Box,
    Wrap,
    WrapItem,
    Button
  } from '@chakra-ui/react';
const Skills = () => {
  return (
    <section id='skills'>
     <Flex direction="column" align="center">
        <Box  as="h3" fontSize="3xl" fontWeight="600" mt='10vh' >
            My skills
        </Box>
        <Wrap spacing={4}>
          <WrapItem>
            <Button colorScheme='gray'>HTML</Button>
          </WrapItem>
          <WrapItem>
            <Button colorScheme='gray'>HTML</Button>
          </WrapItem>
          <WrapItem>
            <Button colorScheme='gray'>HTML</Button>
          </WrapItem>
          <WrapItem>
            <Button colorScheme='gray'>HTML</Button>
          </WrapItem>
          <WrapItem>
            <Button colorScheme='gray'>HTML</Button>
          </WrapItem>
          <WrapItem>
            <Button colorScheme='gray'>HTML</Button>
          </WrapItem>
          <WrapItem>
            <Button colorScheme='gray'>HTML</Button>
          </WrapItem>
          <WrapItem>
            <Button colorScheme='gray'>HTML</Button>
          </WrapItem>
          <WrapItem>
            <Button colorScheme='gray'>HTML</Button>
          </WrapItem>
          <WrapItem>
            <Button colorScheme='gray'>HTML</Button>
          </WrapItem>
          <WrapItem>
            <Button colorScheme='gray'>HTML</Button>
          </WrapItem>
        </Wrap> 
     </Flex>
    </section>

  )
}

export default Skills
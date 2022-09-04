import React from 'react'
import {Flex,
        Box,
        Text,
        Button,
        useColorModeValue
      } from '@chakra-ui/react';
import { HashLink } from 'react-router-hash-link';
const Experience = () => {
  return (
    <section id='experience'>
    <Flex direction="column" align="center">
    
    <Box  as="h2" fontSize="3xl" fontWeight="600" mt='10vh' >
      EXPERIENCE
    </Box>
    
    <Text>Hello</Text> 

    <Button bg={useColorModeValue('blue.200', 'gray.900')} width ='20vw' mt='5vh'  ><HashLink to="#top">ABOUT</HashLink> </Button>
    </Flex>
    </section>
  )
}

export default Experience
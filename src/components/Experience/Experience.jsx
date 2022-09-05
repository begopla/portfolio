import React from 'react'
import {Flex,
        Box,
        Text,
        Button,
        useColorModeValue
      } from '@chakra-ui/react';
import { HashLink } from 'react-router-hash-link';
import CV from '../../assets/CV Begona Pla Rubio .pdf'
import experienceData from "../../data/experience.json";
const Experience = () => {
  return (
    <section id='experience'>
    <Flex direction="column" align="center">
    
    <Box  as="h2" fontSize="3xl" fontWeight="600" mt='10vh' >
      EXPERIENCE
    </Box>
    
    <Flex >

    <Button bg={useColorModeValue('blue.200', 'gray.900')} width ='20vw' mt='5vh'  > <a href={CV} download> Download complete CV </a></Button>
    <Button bg={useColorModeValue('blue.200', 'gray.900')} width ='20vw' mt='5vh' ml='5vw' ><HashLink to="#top">Go up</HashLink> </Button>
    </Flex>
    </Flex>
    </section>
  )
}

export default Experience
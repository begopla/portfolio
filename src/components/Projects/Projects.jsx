import React from 'react'
import {Flex,
        Box,
        Text,
      
      } from '@chakra-ui/react';
import Oneproject from '../OneProject/Oneproject';


const Projects = () => {
  return (
    <section id='projects'>
     <Flex direction="column" align="center">
      <Box  as="h2" fontSize="3xl" fontWeight="600" mt='10vh' >
      PROJECTS
      </Box>
      <Text>Here will go the projects:</Text>

      <Oneproject/>
      <Oneproject/>
      <Oneproject/>
      <Oneproject/>
     </Flex>
    </section>
  )
}

export default Projects
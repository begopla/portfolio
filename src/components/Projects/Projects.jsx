import React from 'react'
import {Flex,
        Box,
        useColorModeValue,
      } from '@chakra-ui/react';
import Oneproject from '../OneProject/Oneproject';
import projectData from '../../data/projects.json'
import './Projects.css';

const Projects = () => {
  return (
    <Box 
      className='projects-container'
      id='projects'
      color={useColorModeValue("black", "black")}>
     <Flex direction="column" align="center">
      <Box  as="h2" fontSize="3xl" fontWeight="600" mt='10vh' >
      PROJECTS
      </Box>
     </Flex>
      <Flex flexWrap='wrap' justifyContent='center'>

      {
        projectData.map((project)=>{
          return <Oneproject {...project} key={project.id} />
        })
      }
      
      

      </Flex>

    </Box>
  )
}

export default Projects
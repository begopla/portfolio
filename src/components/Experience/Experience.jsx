import React from 'react'
import {Flex,
        Box,
        Button,
        useColorModeValue,
        Hide,
        Show
      } from '@chakra-ui/react';
import { HashLink } from 'react-router-hash-link';
import CV from '../../assets/CV Begona Pla Rubio .pdf'
import TimeLine from '../TimeLine/TimeLine.jsx';
import '../TimeLine/TimeLine.css'
const Experience = () => {
  return (
    <section id='experience'>
    <Flex direction="column" align="center">
    
    <Box  as="h2" fontSize="3xl" fontWeight="600" mt='10vh' mb='2vh' >
      EXPERIENCE
    </Box>
    </Flex>
    
    <TimeLine/>
    <Hide below='900px'>
    <Flex justifyContent='center'>
    <Button className='timeline-buttons' bg={useColorModeValue('blue.200', 'gray.900')} width ='20vw' mt='5vh'  > <a href={CV} download> Download complete CV </a></Button>
    <Button bg={useColorModeValue('blue.200', 'gray.900')} width ='20vw' mt='5vh' ml='5vw' mb='3vh'><HashLink to="#top">Go up</HashLink> </Button>
    </Flex>
    </Hide>

    <Show below='900px'>
   
    <Flex  flexDirection='column' alignItems='center'>
    <Button className='timeline-buttons' bg={useColorModeValue('blue.200', 'gray.900')} width ='40vw'   > <a href={CV} download> Download full CV </a></Button>
    <Button bg={useColorModeValue('blue.200', 'gray.900')} width ='40vw' mt='5vh'  mb='3vh'><HashLink to="#top">Go up</HashLink> </Button>
    </Flex>
    </Show>
    
    </section>
  )
}

export default Experience
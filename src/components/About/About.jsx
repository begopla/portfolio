import React from 'react'
import {Flex,
        Box,
        Divider,
        Text,
      
      } from '@chakra-ui/react';

const About = () => {
  return (
    <section className='about-container' id='about'>
     <Flex direction="column" align="center">
    
    <Box  as="h2" fontSize="3xl" fontWeight="600" mt='10vh' >
      ABOUT
    </Box>
    
    <Text>Hello</Text> 
    <hr
      aria-orientation='horizontal'
    />
    

    </Flex>
    </section>
  )
}

export default About
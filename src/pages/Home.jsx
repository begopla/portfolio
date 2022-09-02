import React from 'react'
import {Text, 
        Box,
        Center,
        Flex,
        useColorModeValue,
	      useColorMode,
        Button
      } from '@chakra-ui/react';
import './Home.css'



const Home = () => {

  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <div>
      
    <Box bg={useColorModeValue('white', 'gray.700')} height='95vh' className='home'>
    <Text height='9rem'></Text>
   
    <Flex direction="column" align="center">
    
          <Box  as="h2" fontSize="3xl" fontWeight="600" mt={5} >
            HEY, I'M
          </Box>
           
          <Box as="h2" fontSize="3xl" mt='1vh' fontWeight="600">
            BEGOÑA PLA
          </Box>
         <Center>
         <Box as='h5' fontSize='xl' mt='2vh' width='50vw' align='center'>
         I'm a full stack developer, with mechanical engineer roots. I am tech lover and experienced project manager.
         </Box>
         </Center>
         <Button bg={useColorModeValue('blue.100', 'gray.900')} width ='20vw' mt='5vh'  >PROJECTS</Button>
    </Flex>


    </Box>
    
    
    
    </div>
  )
}

export default Home
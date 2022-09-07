import React from 'react'
import {
  Box,
  Container,
  Stack,
  Text,
  useColorModeValue,
  Link,
  Flex

} from '@chakra-ui/react';


const Footer = () => {
  return (
    <>

    <Box
      bg={useColorModeValue( 'gray.900' ,'gray.50',)}
      color={useColorModeValue('gray.200', 'gray.700')}>
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
      >        
       <Flex justifyContent='center'>
        <Text>© 2022. Made by <Link href='/#about' isExternal>Begoña Pla Rubio</Link>.</Text>
       </Flex>
    
      </Container>
    </Box>


    </>
  )
}

export default Footer
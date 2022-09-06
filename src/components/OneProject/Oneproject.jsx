import React from "react";
import {
  Box,
  Flex,
  Button,
  Icon,
  Image,
  Text,
  useColorModeValue,
  Link
} from "@chakra-ui/react";
import './Onproject.css';
const Oneproject = ({name, image, github_url,website_url, description,technologies}) => {
  let boxBg = useColorModeValue("gray.100", "#111c44");
  let secondaryBg = useColorModeValue("gray.50", "whiteAlpha.100");
  let mainText = useColorModeValue("gray.800", "white");
  let iconBox = useColorModeValue("gray.100", "whiteAlpha.200");
  let iconColor = useColorModeValue("brand.200", "white");
  return (
    <Box m='2rem 1rem 2rem 1rem'
          >
      <Flex
        borderWith={2}
        borderRadius='20px'
        border='solid #e2e8f0'
        bg={boxBg}
        h="60vh"
        w={{ base: "310px", md: "345px" }}
        direction="column"
      >
      <Link href={website_url} isExternal>
        <Box >
          <Flex w="100%" mb="3px" p="10px 30px" >
            <Image src={image} maxHeight='18vh'/>
          </Flex>
          <Box>
            <Text fontWeight="600" color={mainText} w="100%" fontSize="2xl" pl='20px' mb='0.5vh' >
              {name}
            </Text>
          </Box>
        </Box>
        </Link>
        <Flex
          bg={secondaryBg}
          w="100%"
          p="10px 2px 10px 20px"
          borderBottomLeftRadius="inherit"
          borderBottomRightRadius="inherit"
          height="100%"
          direction="column"
        >
          <Text
            fontSize="sm"
            color="gray.500"
            lineHeight="24px"
            pe="15px"
            fontWeight="500"
            mb="auto"
          >
           {description}
          </Text>
          <div className="technologies-container">
            {technologies.map((eachTechnology) => {
              return <div className="technologies">{eachTechnology}</div>;
            })}
          </div>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Oneproject;

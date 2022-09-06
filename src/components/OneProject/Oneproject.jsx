import React from "react";
import {
  Box,
  Flex,
  Button,
  Icon,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { MdTimer, MdVideoLibrary } from "react-icons/md";
const Oneproject = () => {
  let boxBg = useColorModeValue("yellow !important", "#111c44 !important");
  let secondaryBg = useColorModeValue("gray.50", "whiteAlpha.100");
  let mainText = useColorModeValue("gray.800", "white");
  let iconBox = useColorModeValue("gray.100", "whiteAlpha.200");
  let iconColor = useColorModeValue("brand.200", "white");
  return (
    <Box m='2rem 1rem 2rem 1rem'>
      <Flex
        borderRadius="20px"
        border="5px solid red"
        bg={boxBg}
        h="345px"
        w={{ base: "315px", md: "345px" }}
        direction="column"
      >
        <Box p="20px">
          <Flex w="100%" mb="10px">
            <img src="./project-view.jpg" />
          </Flex>
          <Box>
            <Text fontWeight="600" color={mainText} w="100%" fontSize="2xl">
              Venus Product
            </Text>
          </Box>
        </Box>
        <Flex
          bg={secondaryBg}
          w="100%"
          p="20px"
          borderBottomLeftRadius="inherit"
          borderBottomRightRadius="inherit"
          height="100%"
          direction="column"
        >
          <Text
            fontSize="sm"
            color="gray.500"
            lineHeight="24px"
            pe="40px"
            fontWeight="500"
            mb="auto"
          >
            You have the opportunity to play this game of life you need to
            appreciate every moment.
          </Text>
          {/* <Flex>
            <Flex me="25px">
              <Icon as={MdTimer} w="20px" h="20px" me="6px" color="green.400" />
              <Text color={mainText} fontSize="sm" my="auto" fontWeight="500">
                85 mins
              </Text>
            </Flex>
            <Flex>
              <Icon
                as={MdVideoLibrary}
                w="20px"
                h="20px"
                me="6px"
                color="red.500"
              />
              <Text color={mainText} fontSize="sm" my="auto" fontWeight="500">
                Video Format
              </Text>
            </Flex>
          </Flex> */}
        </Flex>
      </Flex>
    </Box>
  );
};

export default Oneproject;

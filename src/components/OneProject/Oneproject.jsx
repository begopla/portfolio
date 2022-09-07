import React from "react";
import {
  Box,
  Flex,
  IconButton,
  Image,
  Text,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import "./Onproject.css";
import { FaGithub } from "react-icons/fa";
import { MdLaptop } from "react-icons/md";
const Oneproject = ({
  name,
  image,
  github_url,
  website_url,
  description,
  technologies,
}) => {
  let boxBg = useColorModeValue("gray.100", "#111c44");
  let secondaryBg = useColorModeValue("gray.50", "whiteAlpha.100");
  let mainText = useColorModeValue("gray.800", "white");
  return (
    <Box m="2rem 1rem 2rem 1rem">
      <Flex
        borderWith={2}
        borderRadius="20px"
        border="solid #e2e8f0"
        bg={boxBg}
        h="60vh"
        w={{ base: "310px", md: "345px" }}
        direction="column"
      >
          <Box>
            <Flex w="100%" mb="3px" p="10px 30px">
               <Link href={website_url} isExternal>
                 <Image src={image} maxHeight="18vh" />
               </Link>
            </Flex>
            <Flex >
            <Box>
              <Text
                fontWeight="600"
                color={mainText}
                w="100%"
                fontSize="2xl"
                pl="20px"
                mb="0.5vh"
              >
                {name}
              </Text>
            </Box>
            <Box>
            <IconButton
                    as={Link}
                    id='icon-buttons'
                    ml='8vw'
                    href={github_url}
                    size={"md"}
                    icon={<FaGithub />}
                    aria-label={"project directory"}
                    _hover={{
                      textDecoration: "none",
                      
                    }}
                  />
            </Box>
            <Box>
            <IconButton
                    as={Link}
                    href={website_url}
                    size={"md"}
                    icon={<MdLaptop />}
                    aria-label={"project website "}
                    _hover={{
                      textDecoration: "none",
                    }}
                  />
            </Box>
            </Flex>
          </Box>
       
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
            id='project-description'
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
              return (
                <div className="technologies" key={eachTechnology}>
                  {eachTechnology}
                </div>
              );
            })}
          </div>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Oneproject;

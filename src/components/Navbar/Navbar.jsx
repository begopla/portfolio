import { HashLink } from "react-router-hash-link";
import {
  Avatar,
	Box,
	Flex,
	Button,
  IconButton,
  Link,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	useColorModeValue,
	Stack,
	useColorMode,
	Text,
	Hide,
  Show,
  HStack,
  Icon
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import {GiHamburgerMenu} from 'react-icons/gi'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BiRocket } from "react-icons/bi";
import { BsCheckCircle } from "react-icons/bs";
import { MdTimeline } from "react-icons/md";
import { BsBook } from "react-icons/bs";

export default function Navbar() {
	
	const { colorMode, toggleColorMode } = useColorMode();
  const menuProps = {
    bg: useColorModeValue("gray.200", "gray.900"),
    color: useColorModeValue("blue.500", "blue.200")
  };
	return (
		<>
			<Box bg={useColorModeValue('white', 'gray.900')} px={4} pos={'fixed'} width={'100%'} zIndex={3} boxShadow={"sm"}>
				<Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
					<HashLink to='#top'>
						<Flex alignItems={'center'}>
						  <Avatar name='Begona Pla' size='md' src='https://res.cloudinary.com/dhdkj4oxv/image/upload/v1662112095/avatar_profile_picture_Begona_Pla_pkaclo.png'/>
							<Hide below='800px'><Text className="name" fontWeight="600" ml='2vw'>BEGOÑA PLA</Text></Hide>
						</Flex>
					</HashLink>
					<Flex alignItems={'center'}>
						<Stack direction={'row'} spacing={7}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>

							  <Hide below ='768px'>
                  <HashLink to='/#about'><Text fontWeight="500" mr='2vw'>ABOUT </Text></HashLink>
									{/* <HashLink to='/#skills'><Text  fontWeight="500" mr='2vw'>SKILLS</Text></HashLink> */}
									<HashLink  to='/#projects'><Text fontWeight="500" mr='2vw'>PROJECTS </Text></HashLink>
                  <HashLink to='/#experience'><Text fontWeight="500" mr='2vw'>EXPERIENCE</Text></HashLink> 
                  <HashLink to='/#contact'><Text  fontWeight="500" mr='2vw'>CONTACT</Text></HashLink>
                </Hide>
                <Hide below ='350px'>
                  <IconButton
                    as={Link}
                    mr='1vw'
                    href={"https://github.com/begopla"}
                    size={"md"}
                    icon={<FaGithub />}
                    aria-label={"Github account"}
                    bg={useColorModeValue("white", "gray.700")}
                    _hover={{
                      textDecoration: "none",
                      bg: useColorModeValue("gray.200", "gray.900")
                    }}
                  />
                  <IconButton
                    as={Link}
                    mr='1vw'
                    href={"https://www.linkedin.com/in/begonaplarubio"}
                    size={"md"}
                    icon={<FaLinkedin />}
                    aria-label={"Linkedin account"}
                    bg={useColorModeValue("white", "gray.700")}
                    _hover={{
                      textDecoration: "none",
                      bg: useColorModeValue("gray.200", "gray.900")
                    }}
                  />
                  <Button onClick={toggleColorMode}>
								    {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
							    </Button>
                </Hide>
                <Show below="350px">
                  <Button onClick={toggleColorMode}>
								      {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
							    </Button> 
                </Show>
                </Flex>
              <Show below ='768px'>
              				                
              <Menu >
                <MenuButton
                  as={Button}
                  variant="ghost"
                  size="sm"
                  px={2}
                  py={1.5}
                  fontSize={"1em"}
                  rounded={"md"}
                  height={"auto "}
                  cursor={'pointer'}
                  _hover={menuProps}
                  _expanded={menuProps}
                  _focus={{ boxShadow: "outline" }}
                  
                ><GiHamburgerMenu size={22} />
                </MenuButton>
                  
                 <MenuList >
                  <HashLink to="/#about">
                    <MenuItem>
                      <HStack>
                        <Icon
                          as={BiRocket}
                          size={18}
                          color={useColorModeValue("blue.500", "blue.200")}
                        />
                        <Text>About</Text>
                      </HStack>
                    </MenuItem>
                  </HashLink>
                  <HashLink to="/#projects">
                    <MenuItem>
                      <HStack>
                        <Icon
                          as={BsBook}
                          size={18}
                          color={useColorModeValue("blue.500", "blue.200")}
                        />
                        <Text>Projects</Text>
                      </HStack>
                    </MenuItem>
                  </HashLink>          
                  <HashLink to="/#experience">
                    <MenuItem>
                      <HStack>
                        <Icon
                          as={MdTimeline}
                          size={18}
                          color={useColorModeValue("blue.500", "blue.200")}
                        />
                        <Text>Experience</Text>
                      </HStack>
                    </MenuItem>
                  </HashLink>
                  <HashLink  to="/#contact">
                    <MenuItem>
                      <HStack>
                        <Icon
                          as={BsCheckCircle}
                          size={18}
                          color={useColorModeValue("blue.500", "blue.200")}
                        />
                        <Text>Contact</Text>
                      </HStack>
                    </MenuItem>
                  </HashLink>
                    <Hide above="350px"> 
                    <MenuItem>
                      <HStack>
                       <IconButton
                      as={Link}
                      mr='1vw'
                      href={"https://github.com/begopla"}
                      size={"md"}
                      icon={<FaGithub />}
                      aria-label={"Github account"}
                      bg={useColorModeValue("white", "gray.700")}
                      _hover={{
                        textDecoration: "none",
                        bg: useColorModeValue("gray.200", "gray.900")
                      }}
                      />
                      <IconButton
                        as={Link}
                        mr='1vw'
                        href={"https://www.linkedin.com/in/begonaplarubio"}
                        size={"md"}
                        icon={<FaLinkedin />}
                        aria-label={"Linkedin account"}
                        bg={useColorModeValue("white", "gray.700")}
                        _hover={{
                          textDecoration: "none",
                          bg: useColorModeValue("gray.200", "gray.900")
                        }}
                      /> 
                      </HStack>
                    </MenuItem> 
                    </Hide>
                </MenuList>  
              </Menu>             
              </Show>	
						</Stack>
					</Flex>
				</Flex>
        
			</Box>
			
		</>
	);
}
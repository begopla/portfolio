import { NavLink, Outlet } from "react-router-dom"



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
	MenuDivider,
	useColorModeValue,
	Stack,
	useColorMode,
	Center,
	Text,
	Hide,
  Show,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import {GiHamburgerMenu} from 'react-icons/gi'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa"


export default function Navbar() {
	
	const { colorMode, toggleColorMode } = useColorMode();

	return (
		<>
			<Box bg={useColorModeValue('white', 'gray.900')} px={4} pos={'fixed'} width={'100%'} zIndex={1} boxShadow={"lg"}>
				<Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
					<NavLink to='/'>
						<Flex alignItems={'center'}>
						  <Avatar name='Begona Pla' size='md' src='https://res.cloudinary.com/dhdkj4oxv/image/upload/v1662112095/avatar_profile_picture_Begona_Pla_pkaclo.png'/>
							<Hide below='800px'><Text className="name" fontWeight="600" ml='2vw'>BEGOÑA PLA</Text></Hide>
						</Flex>
					</NavLink>
					<Flex alignItems={'center'}>
						<Stack direction={'row'} spacing={7}>
							
							
							
							
								<Hide below ='768px'>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                  <NavLink to='/#'><Text fontWeight="500" mr='2vw'>ABOUT </Text></NavLink>
									<NavLink  to='/#'><Text fontWeight="500" mr='2vw'>PROJECTS </Text></NavLink>
									<NavLink to='/#'><Text  fontWeight="500" mr='2vw'>SKILLS</Text></NavLink>
                  <NavLink to='/#'><Text fontWeight="500" mr='2vw'>EXPERIENCE</Text></NavLink>
                  {/* <Button mr='1vw'>Contact me</Button> */}
                  {/* <Button mr='1vw'>Download my CV</Button> */}
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
                  </Flex>
                </Hide>
                <Show below ='768px'>
                <Button onClick={toggleColorMode}>
								{colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
							  </Button>
									<Menu>
										<MenuButton
											as={Button}
											rounded={'full'}
											variant={'link'}
											cursor={'pointer'}
											minW={0}>
                      
                      <GiHamburgerMenu size={22} />						
										</MenuButton>

										<MenuList >
											
											<MenuItem><NavLink to='/#'>About me</NavLink></MenuItem>
											<MenuItem><NavLink to='/#'>Portfolio </NavLink></MenuItem>
											<MenuItem><NavLink to='/#'>Skills</NavLink></MenuItem>
                      <MenuItem><NavLink to='/#'>Experience</NavLink></MenuItem>
                      {/* <Flex flexDirection='column' align='rigth'>
                      <Button mt='1vh' mr='20vw' ml='2vw'>Contact me</Button>
                      
                      <Button mt='1vh' mr='20vw' ml='2vw'>Download my CV</Button>
                      </Flex> */}
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
										</MenuList>
									</Menu>
                </Show>
							
							
							
						</Stack>
					</Flex>
				</Flex>
        
			</Box>
			<Outlet />
		</>
	);
}
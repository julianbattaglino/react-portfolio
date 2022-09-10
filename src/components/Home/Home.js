import "./Home.css";
import { Box, Image, Badge } from '@chakra-ui/react'
import { SiGithub, SiLinkedin } from "react-icons/si";
import { ImFilePdf } from "react-icons/im";

const Home = () => {



    return (
        <>
            <div className="intro-container">
                <h1 className="main-title">Julian Battaglino</h1>
                <h2 className="subtitle">Front End Developer</h2>
                <div className="icon-container">
                    <SiGithub size={30} className="icon" />
                    <SiLinkedin size={30} className="icon" />
                    <ImFilePdf size={30} className="icon" />
                </div>
                <img className="profile-img" src="/img/profile-pic.png" alt="profile-img" />
            </div>

            {/* <div className="grid-container">
                <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
                    <Image src="/img/1.jpg" alt="" />

                    <Box p='6'>
                        <Box display='flex' alignItems='baseline'>
                            <Badge borderRadius='full' px='2' colorScheme='teal'>
                                Categoria destacada
                            </Badge>
                            <Box
                                color='gray.500'
                                fontWeight='semibold'
                                letterSpacing='wide'
                                fontSize='xs'
                                textTransform='uppercase'
                                ml='2'
                            >
                                Zapatillas
                            </Box>
                        </Box>

                        <Box
                            mt='1'
                            fontWeight='semibold'
                            as='h4'
                            lineHeight='tight'
                            noOfLines={1}
                        >
                            Air Jordan 3
                        </Box>

                        <Box>
                            <Box as='span' color='gray.600' fontSize='sm'>
                                U$D 150
                            </Box>
                        </Box>
                    </Box>
                </Box>

                <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
                    <Image src="/img/1.jpg" alt="" />

                    <Box p='6'>
                        <Box display='flex' alignItems='baseline'>
                            <Badge borderRadius='full' px='2' colorScheme='teal'>
                                Categoria destacada
                            </Badge>
                            <Box
                                color='gray.500'
                                fontWeight='semibold'
                                letterSpacing='wide'
                                fontSize='xs'
                                textTransform='uppercase'
                                ml='2'
                            >
                                Zapatillas
                            </Box>
                        </Box>

                        <Box
                            mt='1'
                            fontWeight='semibold'
                            as='h4'
                            lineHeight='tight'
                            noOfLines={1}
                        >
                            Air Jordan 3
                        </Box>

                        <Box>
                            <Box as='span' color='gray.600' fontSize='sm'>
                                U$D 150
                            </Box>
                        </Box>
                    </Box>
                </Box>


                <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
                    <Image src="/img/1.jpg" alt="" />

                    <Box p='6'>
                        <Box display='flex' alignItems='baseline'>
                            <Badge borderRadius='full' px='2' colorScheme='teal'>
                                Categoria destacada
                            </Badge>
                            <Box
                                color='gray.500'
                                fontWeight='semibold'
                                letterSpacing='wide'
                                fontSize='xs'
                                textTransform='uppercase'
                                ml='2'
                            >
                                Zapatillas
                            </Box>
                        </Box>

                        <Box
                            mt='1'
                            fontWeight='semibold'
                            as='h4'
                            lineHeight='tight'
                            noOfLines={1}
                        >
                            Air Jordan 3
                        </Box>

                        <Box>
                            <Box as='span' color='gray.600' fontSize='sm'>
                                U$D 150
                            </Box>
                        </Box>
                    </Box>
                </Box>

                <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
                    <Image src="/img/1.jpg" alt="" />

                    <Box p='6'>
                        <Box display='flex' alignItems='baseline'>
                            <Badge borderRadius='full' px='2' colorScheme='teal'>
                                Categoria destacada
                            </Badge>
                            <Box
                                color='gray.500'
                                fontWeight='semibold'
                                letterSpacing='wide'
                                fontSize='xs'
                                textTransform='uppercase'
                                ml='2'
                            >
                                Zapatillas
                            </Box>
                        </Box>

                        <Box
                            mt='1'
                            fontWeight='semibold'
                            as='h4'
                            lineHeight='tight'
                            noOfLines={1}
                        >
                            Air Jordan 3
                        </Box>

                        <Box>
                            <Box as='span' color='gray.600' fontSize='sm'>
                                U$D 150
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </div> */}

        </>
    );
}

export default Home;
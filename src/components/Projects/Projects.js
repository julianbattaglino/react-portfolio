import "./Projects.css";
import { Box, Image } from '@chakra-ui/react'


const Projects = () => {
  return (

    <>
      <div className="intro-container">
        <h1 className="main-title"><span class="underline-nice">Projects</span></h1>
      </div>

      <div className="grid-container">
        <Box className="card-item" maxW='100%' borderWidth='1px' borderRadius='lg' overflow='hidden'>
          <Image src="/img/portfolio/arcos4259.webp" alt="" />

          <Box p='6'>
            <Box display='flex' alignItems='baseline'>
              <Box
                color='gray.500'
                fontWeight='semibold'
                letterSpacing='wide'
                fontSize='xs'
                textTransform='uppercase'

              >
                Desarrollos Inmobiliarios
              </Box>
            </Box>

            <Box className="project-title"
              mt='1'
              fontWeight='semibold'
              as='h4'
              lineHeight='tight'
              noOfLines={1}
            >
              Arcos 4259
            </Box>

            <Box>
              <Box as='span' color='gray.600' fontSize='sm'>
                Nuñez, Buenos Aires, Argentina.
              </Box>
            </Box>
          </Box>
        </Box>

        <Box className="card-item" maxW='100%' borderWidth='1px' borderRadius='lg' overflow='hidden'>
          <Image src="/img/portfolio/haemprendimientos.webp" alt="" />

          <Box p='6'>
            <Box display='flex' alignItems='baseline'>
              <Box
                color='gray.500'
                fontWeight='semibold'
                letterSpacing='wide'
                fontSize='xs'
                textTransform='uppercase'
              >
                Desarrollos Inmobiliarios
              </Box>
            </Box>

            <Box className="project-title"
              mt='1'
              fontWeight='semibold'
              as='h4'
              lineHeight='tight'
              noOfLines={1}
            >
              HA Emprendimientos
            </Box>

            <Box>
              <Box as='span' color='gray.600' fontSize='sm'>
                Beccar Buenos Aires, Argentina.
              </Box>
            </Box>
          </Box>
        </Box>


        <Box className="card-item" maxW='100%' borderWidth='1px' borderRadius='lg' overflow='hidden'>
          <Image src="/img/portfolio/sensemanantiales.webp" alt="" />

          <Box p='6'>
            <Box display='flex' alignItems='baseline'>
              <Box
                color='gray.500'
                fontWeight='semibold'
                letterSpacing='wide'
                fontSize='xs'
                textTransform='uppercase'
              >
                Desarrollos Inmobiliarios.
              </Box>
            </Box>

            <Box className="project-title"
              mt='1'
              fontWeight='semibold'
              as='h4'
              lineHeight='tight'
              noOfLines={1}
            >
              Sense Manantiales
            </Box>

            <Box>
              <Box as='span' color='gray.600' fontSize='sm'>
                Maldonado, Uruguay.
              </Box>
            </Box>
          </Box>
        </Box>

        <Box className="card-item" maxW='100%' borderWidth='1px' borderRadius='lg' overflow='hidden'>
          <Image src="/img/portfolio/senselibertador.webp" alt="" />

          <Box p='6'>
            <Box display='flex' alignItems='baseline'>
              <Box
                color='gray.500'
                fontWeight='semibold'
                letterSpacing='wide'
                fontSize='xs'
                textTransform='uppercase'
              >
                Desarrollos Inmobiliarios.
              </Box>
            </Box>

            <Box className="project-title"
              mt='1'
              fontWeight='semibold'
              as='h4'
              lineHeight='tight'
              noOfLines={1}
            >
              Sense Libertador
            </Box>

            <Box>
              <Box as='span' color='gray.600' fontSize='sm'>
                Accasuso, Buenos Aires, Argentina.
              </Box>
            </Box>
          </Box>
        </Box>
      </div>



    </>

  );
}

export default Projects;
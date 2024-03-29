import "./Projects.css";
import { Box, Image, Link } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { SiGithub } from "react-icons/si";
import { GrDeploy } from "react-icons/gr";
import ProjectsMock from "../ProjectsMock/ProjectsMock";
import React, { useState, useEffect } from "react";


const Projects = () => {

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(ProjectsMock);
  }, []);


  //map projects to display on page 
  const projecstGrid = projects.map((project) => {
    console.log(project);

    return (
      <>

        <Box className="card-item" key={project.id} maxW='100%' borderWidth='1px' borderRadius='lg' overflow='hidden'>

          <Image src={project.image} alt="" />

          <Box p='6'>
            <Box display='flex' alignItems='baseline'>
              <Box color='gray.500' fontWeight='semibold' letterSpacing='wide' fontSize='xs' textTransform='uppercase'>
                {project.category}
              </Box>
            </Box>

            <Box className="project-title" mt='1' fontWeight='semibold' as='h4' lineHeight='tight' noOfLines={1}>
              {project.title}
            </Box>

            <Box className="pb-10 border-bottom">
              <Box as='span' color='gray.600' fontSize='sm'>
                {project.description}
              </Box>
            </Box>

            <Box className="pd-10">
              <Link href={project.deployed} isExternal>
              <GrDeploy className="inline" /> Project deploy 
              </Link>
            </Box>
            <Box className="pd-5">
              <Link href={project.repo} isExternal>
              <SiGithub className="inline" /> Project repo 
              </Link>
            </Box>



          </Box>
        </Box>
      </>

    );
  });

  return (
    <div className="intro-container">
      <h1 className="main-title"><span class="underline-nice">Projects</span></h1>
      <div className="grid-container">{projecstGrid}</div>

    </div>
  );
};

export default Projects;
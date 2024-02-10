import React from "react";
import { motion } from "framer-motion";
import LinkButton from "./LinkButton";
import { useMediaQuery } from 'react-responsive';

const Projects: React.FC = () => {
  const isSmallScreen = useMediaQuery({ query: '(max-width: 767px)' });

  const projects = [
    {
      id: 1,
      imageUrl: "https://mybucketimagesnew.s3.amazonaws.com/devops-1.png",
      linkUrl: "https://diractime.com",
      buttonText: "View Diractime"
    },
    {
      id: 2,
      imageUrl: "https://mybucketimagesnew.s3.amazonaws.com/client-project.png",
      linkUrl: "https://www.aijourney.co.uk",
      buttonText: "View Aijourney"
    },
    {
      id: 3,
      imageUrl: "https://mybucketimagesnew.s3.amazonaws.com/aws-project.png",
      linkUrl: "https://www.example3.com",
      buttonText: "View Wolkenhost"
    },
    {
      id: 4,
      imageUrl: "https://mybucketimagesnew.s3.amazonaws.com/wordpress.png",
      linkUrl: "https://alkcourier.com/",
      buttonText: "View Alkcourier"
    },
  ];

  return (
    <div className="relative flex flex-col text-center md:text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-20">
      <h3 className="absolute uppercase tracking-[20px] top-12 text-gray-500 text-2xl">
        Projects
      </h3>

      <div
        className={`relative w-full flex ${isSmallScreen ? 'flex-col' : 'overflow-x-scroll overflow-y-hidden flex-row'} snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80`}
      >
        {projects.map((project) => (
          <div
            className={`flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-evenly ${isSmallScreen ? 'p-10' : 'p-20 md:p-44'} h-screen`}
            key={project.id}
          >
            <motion.img
              initial={{
                y: isSmallScreen ? 0 : -300,
                opacity: 0,
              }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src={project.imageUrl}
              alt="portfolio"
              className={`w-[${isSmallScreen ? '90%' : '75%'}] h-[${isSmallScreen ? '50%' : '65%'}]`}
            />
            <LinkButton url={project.linkUrl} text={project.buttonText} />
          </div>
        ))}
      </div>
      {isSmallScreen ? null : (
        <div className="w-full absolute to-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12"></div>
      )}
    </div>
  );
};

export default Projects;

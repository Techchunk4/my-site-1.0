import React from "react";
import { motion } from "framer-motion";

type Props = {};

function Projects({}: Props) {
  const projects = [
    {
      id: 1,
      imageUrl: "https://mybucketimagesnew.s3.amazonaws.com/dirac.svg",
      
     
    },
    {
      id: 2,
      imageUrl: "https://mybucketimagesnew.s3.amazonaws.com/goal.svg",
    
    },
    {
      id: 3,
      imageUrl: "https://mybucketimagesnew.s3.amazonaws.com/perport.svg",
    
    },
    {
      id: 4,
      imageUrl: "https://mybucketimagesnew.s3.amazonaws.com/cicd.svg",
     
    },
  ];

  return (
    <div className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-20">
      <h3 className="absolute uppercase tracking-[20px] top-24 text-gray-500 text-2xl">
        Projects
      </h3>

      <div
        className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80"
      >
        {projects.map((project) => (
          <div className="flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-evenly p-20 md:p-44 h-screen" key={project.id}>
            <motion.img
              initial={{
                y: -300,
                opacity: 0,
              }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src={project.imageUrl} // Use the image URL from the project object
              alt="portfolio"
              className="w-[60%] h-[50%]"
            />
            {/* Other project details rendering */}
          </div>
        ))}
      </div>
      <div className="w-full absolute to-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12"></div>
    </div>
  );
}

export default Projects;

import React from "react";
import { motion } from "framer-motion";

type Props = {};

function Projects({}: Props) {
  const projects = [1, 2, 3, 4, 5];
  return (
    <div className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-20">
      <h3 className="absolute uppercase tracking-[20px] top-24 text-gray-500 text-2xl">
        Projects
      </h3>

      <div
        className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20
         scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80"
      >
        {projects.map((project, i) => (
          <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-evenly p-20 md:p-44 h-screen">
            <motion.img
              initial={{
                y: -300,
                opacity: 0,
              }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src="https://mybucketimagesnew.s3.amazonaws.com/portfolioimg.png"
              alt="portfolio"
            />
            <div className="space-y-10 px-0 md:px-0 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-[#F7AB0A]/50">
                  Case study {i + 1} of {projects.length}:
                </span>{" "}
                My Portfolio
              </h4>
              <p className="text-lg text-center md:text-left">
                his Next.js app, with TailwindCSS and Framer Motion, offers a
                seamless, stylish user experience with fluid animations. It
                utilizes React Hook Form for efficient, user-friendly form
                management and validations. Additionally, react-social-icons
                enable quick navigation to social platforms, making the app
                interconnected and user-centric. The synergy of these
                technologies results in a modern, efficient, and aesthetically
                pleasing application.
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute to-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12"></div>
    </div>
  );
}

export default Projects;

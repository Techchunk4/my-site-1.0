import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import profilePic2 from "../images/google.png";
import profilePic3 from '../images/java.png'
import profilePic4 from '../images/python.png'
import profilePic5 from '../images/kubernettes.png'

type Props = {};

export default function ExpierenceCard({}: Props) {
  return (
    <>
      <article
        className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] h-[500px] md:w-[600px] xl:w-[900px]
    snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden"
      >
        <motion.div
          initial={{
            y: -100,
            opacity: 0,
          }}
          transition={{ duration: 1.2 }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            y: -100,
          }}
          viewport={{
            once: true,
          }}
        >
          <Image
            src={profilePic2}
            alt="profile"
            className="w-32 h-32 rounded-full xl:w-[150px]  xl:h-[150px] object-cover object-center"
          />
        </motion.div>
        <div className="px-0 md:px-10">
          <h4 className="text-4xl font-light">Google</h4>
          <p className="font-bold text-2xl mt-1">Developer</p>
          <div className="flex space-x-2 my-2">
            <Image 
            src={profilePic3}
            alt="profile"
            className="w-10 h-10 rounded-full"
            />
            <Image 
            src={profilePic4}
            alt="profile"
            className="w-10 h-10 rounded-full"
            />
            <Image 
            src={profilePic5}
            alt="profile"
            className="w-10 h-10 rounded-full"
            />
            </div>
            <p className="uppercase py-5 text-gray-300">2014 - Present</p>
            <ul className="list-disc space-y-4 ml-5 text-lg">
                <li>Developer</li>
                <li>Cloud Computing</li>
                <li>Linux Admin</li>
            </ul>
          
        </div>
      </article>
    </>
  );
}

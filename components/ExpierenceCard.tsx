import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import profilePic1 from "../images/db logo.png";
import profilePic2 from "../images/google.png";
import profilePic4 from '../images/cisco.png';
import profilePic5 from '../images/server.png';
import profilePic6 from '../images/tsn.png';
import profilePic7 from '../images/prius.png';
import profilePic8 from '../images/tfl.png';
import profilePic9 from '../images/uber.png';
import profilePic10 from '../images/linux.png';
import profilePic11 from '../images/python.png';
import profilePic12 from '../images/ubuntu.png';

type Props = {};

export default function ExperienceCard({}: Props) {
  const companies = [
    {
      name: "Deutsche Bahn AG",
      title: "Network Engineer",
      images: [profilePic1, profilePic10, profilePic4, profilePic5],
      duration: "2002 - 2010",
      responsibilities: [
        "Troubleshouting",
        "Network Design",
        "Mini Cab",
      ],
    },
    {
      name: "Uber",
      title: "Driver",
      images: [profilePic9, profilePic7, profilePic8, profilePic2],
      duration: "2014 - 2020",
      responsibilities: [
        "Driving customers aroud",
        "Mini Cab",
        
      ],
    },
    {
      name: "TSN",
      title: "Linux Sys Admin",
      images: [profilePic6, profilePic10, profilePic11, profilePic12],
      duration: "2021 - 2022",
      responsibilities: [
        " Managed Linux servers",
        "Cloud Architecture",
        "AWS Services Integration",
      ],
    },
  ];

  return (
    <>
      {companies.map((company, index) => (
        <article
          key={index}
          className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] h-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden"
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
              src={company.images[0]}
              alt="profile"
              className="w-32 h-32 rounded-full xl:w-[150px]  xl:h-[150px] object-cover object-center"
            />
          </motion.div>
          <div className="px-0 md:px-10">
            <h4 className="text-4xl font-light">{company.name}</h4>
            <p className="font-bold text-2xl mt-1">{company.title}</p>
            <div className="flex space-x-2 my-2">
              {company.images.slice(1).map((image, idx) => (
                <Image
                  key={idx}
                  src={image}
                  alt="profile"
                  className="w-10 h-10 rounded-full"
                />
              ))}
            </div>
            <p className="uppercase py-5 text-gray-300">{company.duration}</p>
            <ul className="list-disc space-y-4 ml-5 text-lg">
              {company.responsibilities.map((responsibility, idx) => (
                <li key={idx}>{responsibility}</li>
              ))}
            </ul>
          </div>
        </article>
      ))}
    </>
  );
}

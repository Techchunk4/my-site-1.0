import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import profilePic1 from "../images/profile.jpg";
import { useMediaQuery } from 'react-responsive';

type Props = {};

export default function About({}: Props) {
  const isSmallScreen = useMediaQuery({ query: '(max-width: 767px)' });

  return (
    <div
      className="flex flex-col relative h-screen text-center first-letter: md:text-left md:text-row max-w-7xl px-5 md:px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.div
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <Image
          className={`mb-0 md:mb-0 flex-shrink-0 w-56 h-56 mt-20 rounded-full object-cover ${isSmallScreen ? 'w-40 h-40' : ''}`}
          src={profilePic1}
          alt="profile"
        />
      </motion.div>

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
          background
        </h4>
        <p className="text-base">
          Hi, I'm a Full Stack Developer with over 3 years of experience in
          building web and mobile applications. I specialize in using
          technologies such as AWS, Next.js, WordPress, React, and React Native.
        </p>
      </div>
    </div>
  );
}

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import profilePic1 from "../images/profile.jpg";

type Props = {};

export default function About({}: Props) {
  return (
    <div
      className="flex flex-col relative h-screen text-center first-letter: md:text-left md:text-row max-w-7xl px-10 justify-evenly
    mx-auto items-center"
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
          className="mb-0 md:mb-0 flex-shrink-0 w-56 h-56 mt-20 rounded-full object-cover"
          src={profilePic1}
          alt="profile"
        />
      </motion.div>
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
            Here is a {" "}
            <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
            background
        </h4>
        <p className="text-base">
          I'm a skilled and expierenced Fullstack Engineer with strong background in Next.js | AWS | WordPress | DNS | Linux | Docker | Git | CD/CI | & etc.
        </p>
      </div>
    </div>
  );
}

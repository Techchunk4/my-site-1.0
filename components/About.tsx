import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import profilePic1 from "../images/profile.jpg";
import { useMediaQuery } from "react-responsive";

type Props = {};

export default function About({}: Props) {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 767px)" });

  return (
    <div className="flex flex-col relative h-screen text-center first-letter: md:text-left md:text-row max-w-7xl px-5 md:px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-6 uppercase tracking-[20px] text-gray-500 text-2xl">
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
          className={`mb-0 md:mb-0 flex-shrink-0 w-56 h-56 mt-20 rounded-full object-cover ${
            isSmallScreen ? "w-40 h-40" : ""
          }`}
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
          👨‍💻 About Me: Tech Enthusiast & Developer Hey, I'm [Your Name]! 🚀 I'm
          passionate about tech and specialize in MERN, WordPress, and AWS.
          Here's a glimpse into my journey: 🌐 Tech Explorer: I love diving into
          the latest tech trends, always eager to embrace innovations. 💻 MERN &
          React Developer: Crafting seamless user experiences with MongoDB,
          Express.js, React, and Node.js. 🎨 WordPress Wizard: Turning ideas
          into visually stunning and functional WordPress websites. ☁️ Cloud
          Architect: Navigating AWS for scalable and secure cloud solutions. 🤝
          Let's Connect: Join me on this tech journey! 💡 #WebDeveloper
          #MERNStack #WordPress #AWS
        </p>
      </div>
    </div>
  );
}

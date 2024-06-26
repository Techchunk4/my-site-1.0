import React from "react";
import Image from "next/image";
import profilePic from "../images/profile-pic.png";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Link from "next/link";

type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi, The name is Abdelkader",
      "A Guy-who-loves-coding.tsx",
      "<ButlovesCloudComputing more />",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <img
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src="https://mybucketimagesnew.s3.amazonaws.com/hero-bg.jpg"
        alt="profile"
      />
      <div className="z-20">
        <h2 className="text-xs uppercase text-gray-500 tracking-[15px]">
          Fullstack Developer
        </h2>
        <h1 className="text-3xl lg:text-6xl font-semibold px-5 lg:px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
        <div className="pt-5 space-y-4">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#expierence">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
          <Link href="#contact">
            <button className="heroButton">Contact</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

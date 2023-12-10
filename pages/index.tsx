import React from "react";
import About from "@/components/About";
import Hero from "@/components/Hero";
import Header from "@/components/Header";
import WorkExpierence from "@/components/WorkExpierence";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import ContactMe from "@/components/ContactMe";
import Link from "next/link";

type Props = {};

function index({}: Props) {
  return (
    <div
      className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll
    overflow-x-hidden z-0"
    >
      <header>
        <title>Abdelkader's Portfolio</title>
      </header>

      <Header />

      <section id="hero" className="snap-start">
        <Hero />
      </section>

      <section id="about" className="snap-center">
        <About />
      </section>

      <section id="expierence" className="snap-center">
        <WorkExpierence />
      </section>

      <section id="skills" className="snap-start">
        <Skills />
      </section>

      <section id="projects" className="snap-start">
        <Projects />
      </section>

      <section id="contact" className="snap-start">
        <ContactMe />
      </section>

      <Link href={"#hero"}>
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 6.75L12 3m0 0l3.75 3.75M12 3v18"
            />
          </svg>
        </footer>
      </Link>
    </div>
  );
}

export default index;

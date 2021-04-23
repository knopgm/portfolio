import React from "react";

import { Navbar } from "./components/Navbar/Navbar";
import { Welcome } from "./sections/Welcome/Welcome";
import { Projects } from "./sections/Projects/Projects";
import { Contact } from "./sections/Contact/Contact";
import {
  drumMachineCoverImage,
  quoteMachineCoverImage,
  calculatorCoverImage,
  portfolioCoverImage,
} from "./images";

import "./styles/all.scss";
import "./styles.scss";

const myDetails = {
  name: "Gabriela",
  subtitleFrase: "A Web Developer, Frontend aspiring / enthusiastic",
  // aboutMe:
  //   "My interest in web development started back in 2016 when I first work in an IT companie enviroment as a trainee in Business administration. At that time, it looks like an impossible job for me, but in 2019 I had the oportunity to do some online trial of programing courses, when I realize that could be possible to change my career. I'm looking for working in a team, learning and improving the accessibility and dinamic of the companies products.",
  technologies: ["JavaScript (ES6+)", "React", "Node.js", "HTML", "CSS"],
};

const projectList = [
  {
    links: {
      github: "https://github.com/knopgm/portfolio",
      website: undefined,
    },
    imgUrl: portfolioCoverImage,
    title: "My Portfolio",
    description:
      "My first personal project - A freecodecamp challenge that I improved and personalized to present myself. I used React and hosted it on Netlify.",
  },
  {
    links: {
      github: "https://github.com/knopgm/drum-machine",
      website: "https://github.com/knopgm/drum-machine",
    },
    imgUrl: drumMachineCoverImage,
    title: "Drum Machine",
    description:
      "Understanding useState - Training useState, eventlistners and how to animate buttons with Framer Motion.",
  },
  {
    links: {
      github: "https://github.com/knopgm/calculator",
      website: "https://knopgm-calculator.netlify.app/",
    },
    imgUrl: calculatorCoverImage,
    title: "Calculator",
    description:
      "Challanging project - Training logic and conditions to reproduce a calculator.",
  },
  {
    links: {
      github: "https://github.com/knopgm/Quote-machine",
      website: "https://github.com/knopgm/Quote-machine",
    },
    imgUrl: quoteMachineCoverImage,
    title: "Quote Machine",
    description:
      "A fetch data lesson - Training how to fetch external data on the internet to reproduce a quote-machine",
  },
];

export function App() {
  return (
    <>
      <Navbar />
      <Welcome {...myDetails} />
      <Projects projects={projectList} />
      <Contact />
    </>
  );
}

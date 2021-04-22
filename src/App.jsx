import React from "react";

import { Navbar } from "./components/Navbar/Navbar";
import { Welcome } from "./sections/Welcome/Welcome";
import { Projects } from "./sections/Projects/Projects";
import { Contact } from "./sections/Contact/Contact";
import {
  drumMachineCoverImage,
  quoteMachineCoverImage,
  calculatorCoverImage,
} from "./images";

import "./styles/all.scss";
import "./styles.scss";

const myDetails = {
  name: "Gabriela",
  aspiringFrase: "A Web Developer, Frontend aspiring / entusiastic",
  // aboutMe:
  //   "My interest in web development started back in 2016 when I first work in an IT companie enviroment as a trainee in Business administration. At that time, it looks like an impossible job for me, but in 2019 I had the oportunity to do some online trial of programing courses, when I realize that could be possible to change my career. I'm looking for working in a team, learning and improving the accessibility and dinamic of the companies products.",
  technologies: ["JavaScript (ES6+)", "React", "Node.js", "HTML", "CSS"],
};

const projectList = [
  {
    links: {
      github: "https://github.com/knopgm/drum-machine",
      website: "https://github.com/knopgm/drum-machine",
    },
    imgUrl: drumMachineCoverImage,
    title: "Drum Machine",
    description:
      "A nice project - Training useState conditions to animate buttons",
  },
  {
    links: {
      github: "https://github.com/knopgm/calculator",
      website: "https://github.com/knopgm/calculator",
    },
    imgUrl: calculatorCoverImage,
    title: "Calculator",
    description:
      "Challanging project - Training logic and conditions to reproduce a calculator",
  },
  {
    links: {
      github: "https://github.com/knopgm/Quote-machine",
      website: "https://github.com/knopgm/Quote-machine",
    },
    imgUrl: quoteMachineCoverImage,
    title: "Quote Machine",
    description: "Fun project - Training fetch and reproducing a quote-machine",
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

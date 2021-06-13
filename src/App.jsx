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
  subscriptionFlowCoverImage,
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
      github: "https://github.com/knopgm/subscription-flow",
      website: "https://knopgm-subscription-flow.netlify.app",
    },
    imgUrl: subscriptionFlowCoverImage,
    title: "Subscription Flow",
    description:
      "A 5-days challenge where I did practice React Router and also other external libraries to rendering data from my forms.",
  },
  {
    links: {
      github: "https://github.com/knopgm/portfolio",
      website: undefined,
    },
    imgUrl: portfolioCoverImage,
    title: "My Portfolio",
    description:
      "My first personal project - A freecodecamp challenge that I improved and personalized to introduce myself. I used React and hosted it on Netlify.",
  },
  {
    links: {
      github: "https://github.com/knopgm/drum-machine",
      website: "https://knopgm-drum-machine.netlify.app",
    },
    imgUrl: drumMachineCoverImage,
    title: "Drum Machine",
    description:
      "Exciting freecodecamp project which I had the oportunity to practice event listeners, callback functions, JS media (audio) API and handle animations with the Framer Motion library.",
  },
  {
    links: {
      github: "https://github.com/knopgm/calculator",
      website: "https://knopgm-calculator.netlify.app/",
    },
    imgUrl: calculatorCoverImage,
    title: "Calculator",
    description:
      "A Challenging project for a beginner with lots of logical conditions to properly handle the functionality of a simple calculator.",
  },
  {
    links: {
      github: "https://github.com/knopgm/quote-machine",
      website: "https://knopgm-quote-machine.netlify.app",
    },
    imgUrl: quoteMachineCoverImage,
    title: "Quote Machine",
    description:
      'A fetch lesson - Training how to retrieve data from an external API to reproduce a "quote-machine", as well as managing its internal state and applying a few animations.',
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

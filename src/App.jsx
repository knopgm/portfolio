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
  aboutMe:
    "My interest in web development started back in 2016 when I first work in an IT companie enviroment as a trainee in Business administration. At that time, it looks like an impossible job for me, but in 2019 I had the oportunity to do some online trial of programing courses, when I realize that could be possible to change my career. I'm looking for working in a team, learning and improving the accessibility and dinamic of the companies products.",
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
  // {
  //   url:
  //     "https://lh3.googleusercontent.com/ElL7ucayvm359Oafl5s--vQmnSCaEdji9wTLoD1k45YHHHxBs9s5YEFd5JIlEYF1oYuOTVF7mzOLhaGJtyfajGavR8iaezdYnxSEZ8TxxZ_8kAK3ClsP0uXtaHkZnb2JowQwKK-6bl0=w2400?source=screenshot.guru",
  //   imgUrl:
  //     "https://lh3.googleusercontent.com/ElL7ucayvm359Oafl5s--vQmnSCaEdji9wTLoD1k45YHHHxBs9s5YEFd5JIlEYF1oYuOTVF7mzOLhaGJtyfajGavR8iaezdYnxSEZ8TxxZ_8kAK3ClsP0uXtaHkZnb2JowQwKK-6bl0=w423-h315-p-k",
  //   title: "Tribute Page",
  // },
  // {
  //   url:
  //     "https://lh3.googleusercontent.com/sacxFEOYc3lNRunhN_Krq2Yeuuea7Y3Mrq1nJrHIMGt4Rmcb5UO4iDr02IVTdyivfbMWvG2u6CDSyWj-UQQ-biCAYh4xYdDDkYng3vBeOOmy4_0YKWBR20hXhUTgeffKIUBY3RMjT3M=w2400?source=screenshot.guru",
  //   imgUrl:
  //     "https://lh3.googleusercontent.com/sacxFEOYc3lNRunhN_Krq2Yeuuea7Y3Mrq1nJrHIMGt4Rmcb5UO4iDr02IVTdyivfbMWvG2u6CDSyWj-UQQ-biCAYh4xYdDDkYng3vBeOOmy4_0YKWBR20hXhUTgeffKIUBY3RMjT3M=w453-h315-p-k",
  //   title: "Traveling Survey",
  // },
  // {
  //   url:
  //     "https://lh3.googleusercontent.com/YZDAH3Vy_HCHSaH3e0gDSprAkxvot3-7eUiqyoe20DpRkRxPR5k-QfhkpDOsen9okhYPDVW_PQw0NSvxzy6LVl-ueetGUlUSo7D19FKJdmzBdUTK7V8vhp9mTFbYjIXdDx76L8ZgXTc=w2400?source=screenshot.guru",
  //   imgUrl:
  //     "https://lh3.googleusercontent.com/YZDAH3Vy_HCHSaH3e0gDSprAkxvot3-7eUiqyoe20DpRkRxPR5k-QfhkpDOsen9okhYPDVW_PQw0NSvxzy6LVl-ueetGUlUSo7D19FKJdmzBdUTK7V8vhp9mTFbYjIXdDx76L8ZgXTc=w575-h315-p-k",
  //   title: "Product Landing Page",
  // },
  // {
  //   url:
  //     "https://lh3.googleusercontent.com/Oh8zgf6FU50I3BbL3XzdnvJrg1eGglMA_0WuF1mXRoUFvMrgIgis8bhXZTSVMRAft7olUUNzaI5CX5p-qZ2JhtNLqY1D7o4zZBlNqghbTBe61tWmVKEo7UszrP9iAFFSeeBg3ZW2hqY=w2400?source=screenshot.guru",
  //   imgUrl:
  //     "https://lh3.googleusercontent.com/Oh8zgf6FU50I3BbL3XzdnvJrg1eGglMA_0WuF1mXRoUFvMrgIgis8bhXZTSVMRAft7olUUNzaI5CX5p-qZ2JhtNLqY1D7o4zZBlNqghbTBe61tWmVKEo7UszrP9iAFFSeeBg3ZW2hqY=w411-h308-p-k",
  //   title: "Documentation Page",
  // },
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

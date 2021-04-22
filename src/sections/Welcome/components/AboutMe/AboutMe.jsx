import React from "react";
import { Technologies } from "../Technologies/Technologies";

import "./style.scss";

export function AboutMe(props) {
  return (
    <div className="about-me__wrapper">
      <p className="about-me__paragraph">{`My interest in web development started back in 2012 when I first work in an IT companie enviroment as a trainee in Business administration.`}</p>
      <p className="about-me__paragraph">{`At that time, I could just imagine the fun job my colleges have, but in 2019 I had the oportunity to do some online trial of programing courses, and finally experienced the emotions of interacting with internet creations.`}</p>
      <p className="about-me__paragraph">{`Since there, I still learning, practicing and studing a lot to change my carrer path.`}</p>
      <p className="about-me__paragraph__important">{`I'm looking for working with a team, learning and improving my skills and the company products interface and accessibility.`}</p>
      <Technologies technologies={props.technologies} />
    </div>
  );
}

import React from "react";
import { Technologies } from "../Technologies/Technologies";

import "./style.scss";

export function AboutMe(props) {
  return (
    <div className="about-me__wrapper">
      <p className="about-me__paragraph1">{`My interest in web development started back in 2012 when I first worked in an IT company environment as a trainee in Business administration.`}</p>
      <p className="about-me__paragraph">{`At that time, I could just imagine the fun job my colleges have, but in 2019 I had the opportunity to do some online trial of programming courses, and finally experienced the emotions of interacting with internet creations.`}</p>
      <p className="about-me__paragraph">{`Since then, I am still learning, practising and studying a lot to change my career path.`}</p>
      <p className="about-me__paragraph__important">{`I'm looking for working with a team, where I can help improve the company's products while learning and strengthening my skills.`}</p>
      <Technologies technologies={props.technologies} />
    </div>
  );
}

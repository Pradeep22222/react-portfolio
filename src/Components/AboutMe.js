import React from "react";
import profileAbout from "./../assets/profile_about.png";

export const AboutMe = () => {
  return (
    <div>
      <div className="container about mt-5 py-5" id="about">
        <div className="title">
          <span>About Me</span>
        </div>
        <div className=" about_row about row mt-5">
          <div className="col">
            <img className="tilt about_pic" src={profileAbout} alt="" />
          </div>
          <div className="col mt-3">
            <p>
              I am an international student currently at last trimester of my
              bachelor degree. I have a great passion on development. I have
              been actively learning web development for last couple of years. I
              am currently enrolled in a MERN full stack webdevelpment bootcamp
              at Dented Code which I am finishing by Mid-September. At the
              moment I am seeking for webdevelpment internship with preference
              on MERN stack.
            </p>
            <p>Please feel free to reach out to me if you have any opportunities for me.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

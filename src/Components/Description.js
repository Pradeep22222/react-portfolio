import React from "react";
import profile from "./../assets/my_profile.png";
export const Description = () => {
  return (
    <div>
      <div className="container description mt-5 p-5">
        <div className="row">
          <div className="col-md-5 text-center order-md-2">
            <img src={profile} width="80%" alt="" />
          </div>
          <div className="col-md-7 mt-5 ">
            <p className="hi ">
              hi <span className="wave">👋</span> i'm
            </p>
            <div className="fs-1 fw-bolder mb-4 name">Pradeep Kumar Dhital</div>
            <p>
              I am currently at last trimester of my bachelor degree. I have
              been learning coding for couple of years and currently attending
              Mern Stack technology for full stack web app development bootcamp
              at dented code.
            </p>
            <button className="btn hire_button">
              <a href="mailto:pradeepdhital124@gmail.com" className="kill_link">
                Hire Me
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

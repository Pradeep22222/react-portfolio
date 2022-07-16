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
              Hi <span className="wave">👋</span> I'm
            </p>
            <div className="fs-1 fw-bolder mb-4 name">Pradeep Kumar Dhital</div>
            <p>
              I am currently at last trimester of my bachelor degree. I have
              been learning coding for couple of years and currently attending
              Mern Stack technology for full stack web app development bootcamp
              at dented code.
            </p>
            <div class="descriptionButtons_div">
              <button className="btn button_hire">
                <a
                  href="mailto:pradeepdhital124@gmail.com"
                  className="kill_link"
                >
                  Hire Me
                </a>
              </button>
              <button className="btn button_resume">
                <a
                  href="mailto:pradeepdhital124@gmail.com"
                  className="kill_link"
                >
                  Download Resume
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

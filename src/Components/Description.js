import React from "react";
import profile from "./../assets/my_profile.png";
export const Description = () => {
  return (
    <div>
      <div className="container description mt-5 p-5">
        <div className="row">
          <div className="col-md-5 text-center order-md-2">
            <img src={profile} width="80%" alt="" className="description_img" />
          </div>
          <div className="col-md-7 mt-5 ">
            <div className="short_intro">
              <p className="hi ">
                Hi <span className="wave">👋</span> I'm
              </p>
              <div className="fs-1 fw-bolder mb-4 name">
                Pradeep Kumar <span className="last_name">Dhital</span>
              </div>
            </div>

            <p>
              I just completed bachelor degree. I have
              been learning webdevelpment for couple of years and currently finished 
              attending MERN Stack technology for full stack web app development
              bootcamp at Dented Code Academy.
              <p>
                At the moment I am seeking for web develpment internship with
                preference on MERN stack.
              </p> 
            </p>
            <button className="btn button_hire">
              <a href="mailto:pradeepdhital124@gmail.com" className="kill_link">
                Email Me
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

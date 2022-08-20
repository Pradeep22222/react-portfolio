import React from "react";
import adobe from "./../assets/adobe.png";
import mongo from "./../assets/mongodb.png";
import rest from "./../assets/restapi.png";

import "./../index.css";
export const Skills = () => {
  return (
    <div>
      <div className="container" id="skills">
        <div className="row mt-5">
          <div className="col">
            {/* <!-- title --> */}
            <div className="title">
              <span>Skills</span>
            </div>

            {/* <!-- icons --> */}
            <div className="icons fw-bolder d-flex flex-wrap justify-content-around">
              <div className="skill_div">
                <i className="fa-brands fa-html5 text-warning"></i>
                <span>HTML5</span>
              </div>
              <div className="skill_div">
                <i className="fa-brands fa-css3-alt text-primary"></i>
                <span>CSS3</span>
              </div>
              <div className="skill_div">
                <i className="fa-brands fa-js-square text-warning"></i>
                <span>JavaScript</span>
              </div>
              <div className="skill_div">
                <i className="fa-brands fa-bootstrap text-primary"></i>
                <span>Bootstrap</span>
              </div>
              <div className="skill_div">
                <i className="fa-brands fa-sass  color_pink"></i>
                <span class="text_sass">Saas</span>
              </div>
              <div className="skill_div">
                <i className="fa-brands fa-github-square"></i>
                <span>Github</span>
              </div>

              <div className="skill_div">
                <i className="fa-brands fa-react text-info"></i>
                <span class="text_react">React</span>
              </div>
              <div className="skill_div">
                <i class="fa-brands fa-node text-success skill_div_item"></i>
                <span class="text_node d-inline-block skill_div_item">
                  NodeJS with ExpressJS
                </span>
              </div>
              <div className="skill_div">
                <img src={rest} alt="" className="skills_pic rest_pic" />
                <span class="">REST API</span>
              </div>
              <div className="skill_div">
                <img src={mongo} alt="" className="skills_pic mongo_pic" />
                <span class="text_mongo">MongoDB with mongoose</span>
              </div>
              <div className="skill_div">
                <img src={adobe} alt="" className="skills_pic adobe_pic" />
                <span class="text_adobe">Adobe Photoshop</span>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          {/* <div className="col"> */}
          {/* <!-- title --> */}
          {/* <div className="title">
              <span>Experience With</span>
            </div> */}

          {/* <!-- icons --> */}
          {/* <div className="icons fw-bolder d-flex flex-wrap justify-content-around">
              <div>
                <i className="fa-brands fa-node text-danger"></i> Node Js
              </div>
              <div> */}
          {/* <img src={mongo} alt="" className="skills_pic" />
                <p calssName="adobe-para">MongoDb</p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

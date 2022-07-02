import React from "react";
import adobe from "./../assets/adobe.png";
import mongo from "./../assets/Mongo.png";
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
              <div>
                <i className="fa-brands fa-html5 text-warning"></i> HTML5
              </div>
              <div>
                <i className="fa-brands fa-css3-alt text-primary"></i> CSS3
              </div>
              <div>
                <i className="fa-brands fa-js-square text-warning"></i>{" "}
                JavaScript
              </div>
              <div>
                <i className="fa-brands fa-bootstrap text-primary"></i>{" "}
                Bootstrap
              </div>
              <div>
                <i className="fa-brands fa-react text-info"></i> react
              </div>
              <div>
                <i className="fa-brands fa-github-square"></i> Github
              </div>
              <div>
                <i className="fa-brands fa-sass  color_pink"></i> sass
              </div>
              <div>
                <img src={adobe} alt="" className="skills_pic adobe_pic" />
                <p calssName="adobe-para">adobe photoshop</p>
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

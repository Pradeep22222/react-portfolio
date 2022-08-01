import React from "react";

import "./../index.css";
export const Header = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-light t">
      <div className="container">
        <a
          className="navbar-brand nav-font"
          href="https://github.com/Pradeep22222"
          target="_blank"
        >
          <i class="fa-brands fa-github github"></i>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse nav-font"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="section nav-link active  p-1 m-1
                "
                aria-current="page"
                href="#skills"
              >
                Skills
              </a>
            </li>

            <li className=" nav-item">
              <a
                className=" section nav-link active  p-1 m-1"
                aria-current="page"
                href="#projects"
              >
                Projects
              </a>
            </li>

            <li className="nav-item">
              <a
                className=" section nav-link active p-1 m-1"
                aria-current="page"
                href="#about"
              >
                About Me
              </a>
            </li>

            <li className="nav-item">
              <a
                className=" section nav-link active  p-1 m-1"
                aria-current="page"
                href="#contact"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

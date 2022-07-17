import React from "react";

export const Contact = () => {
  return (
    <div>
      <div className="container contact mt-5 mb-5" id="contact">
        <div className="title">
          <span className="d-inline-block">Contact Me</span>
        </div>

        <div className="row ">
          <div className="col d-flex justify-content-around">
            <a href="tel:+61451644397" className="text-secondary contact_icon">
              <i class="fa-solid fa-mobile-retro contact_icon"></i>
            </a>

            <a
              href="mailto:pradeepdhital124@gmail.com"
              className="text-warning contact_icon"
            >
              <i className="fa-solid fa-envelope contact_icon"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/pradeepkumardhital"
              target="_blank"
              className="text-primary contact_icon"
            >
              <i className="fa-brands fa-linkedin contact_icon"></i>
            </a>
            <a
              href="https://www.facebook.com/pk.dheetaal"
              className="text-primary contact_icon"
              target="_blank"
            >
              <i className="fa-brands fa-facebook-square contact_icon"></i>
            </a>
            <a
              href="https://www.instagram.com/p_k_dhee_taal"
              target="_blank"
              className="text-danger contact_icon"
            >
              <i className="fa-brands fa-instagram-square contact_icon"></i>
            </a>
          </div>
        </div>
      </div>
      <div>&nbsp;</div>
    </div>
  );
};

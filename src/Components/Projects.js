import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

export const Projects = () => {
  return (
    <div>
      <section className="projects py-5" id="projects">
        <div className="title">
          <span>Projects</span>
        </div>
        <div className="container">
          <Row className="d-flex justify-content-start ">
            <Col lg={6} className="mt-3">
              <Card className="projects_card">
                <iframe
                  height="500"
                  src="https://www.youtube-nocookie.com/embed/PixTybFj5i8"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
                <Card.Body>
                  <Card.Title> Not To Do List / React</Card.Title>
                  <hr></hr>
                  <Card.Text className="project_text">
                    Main technologies used are handling states, properties
                    delegation, switching, deleting etc.
                  </Card.Text>
                  {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
              </Card>
            </Col>
            <Col lg={6} className="mt-3">
              <Card className="projects_card">
                <iframe
                  height="500"
                  src="https://www.youtube-nocookie.com/embed/xaN55pePRb0"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
                <Card.Body>
                  <Card.Title>Country Info / React</Card.Title>
                  <hr></hr>
                  <Card.Text className="project_text">
                    Main task was state handling, calling API, storing and
                    accessing data, error hadnling etc.
                  </Card.Text>
                  {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
              </Card>
            </Col>
            <Col lg={6} className="mt-3">
              <Card className="projects_card">
                <iframe
                  height="500"
                  src="https://www.youtube-nocookie.com/embed/jtWIaMGLy8o"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
                <Card.Body>
                  <Card.Title>Movie Album / React</Card.Title>
                  <hr />
                  <Card.Text className="project_text">
                    Main task was state handling, calling API, storing and
                    accessing data, error hadnling etc, setting up categories,
                    switching categories, grid and list view etc
                  </Card.Text>
                  {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
              </Card>
            </Col>
            <Col lg={6} className="mt-3">
              <Card className="projects_card">
                <iframe
                  height="500"
                  src="https://www.youtube-nocookie.com/embed/Yb_aa_F-1hU"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
                <Card.Body>
                  <Card.Title>Calculator / React</Card.Title>
                  <hr></hr>
                  <Card.Text className="project_text">
                    Main task was using learning JavaScript functions well,
                    handling functions and data flow.
                    <div>&nbsp;</div>
                  </Card.Text>
                  {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
              </Card>
            </Col>
            <Col lg={6} className="mt-3">
              <Card className="projects_card">
                <iframe
                  height="500"
                  src="https://www.youtube-nocookie.com/embed/WGSFmQZlww8"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
                <Card.Body>
                  <Card.Title>Down Syndrome / Queensland</Card.Title>
                  <hr></hr>
                  <Card.Text className="project_text">
                    It is a real life project I am developing for Down Syndrome
                    Queensland for my Project 2 for the bachelor degeree
                    completion. It is still on going, and has a lot to fix. The
                    main feature to be applied is the event booking for the
                    events the organization on different occasion. The languages
                    used are HTML, CSS and JavaScript. Sass was used for the CSS
                    compilation
                  </Card.Text>

                  {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
              </Card>
            </Col>
            <Col className="mt-3">
              <Card className="projects_card">
                <iframe
                  height="500"
                  src="https://www.youtube-nocookie.com/embed/qQoR-N0m2ls"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
                <Card.Body>
                  <Card.Title>
                    Oasis Fancy Collection / Just HTML and CSS
                  </Card.Title>
                  <hr></hr>
                  <Card.Text className="project_text">
                    Is was a simple website I built for one of my subject, Human
                    Computer Interaction in Bachelor Degree. It us just built by
                    Html, CSS and I used Saas for css compilation. On this
                    project I got a chance to learn HTML and CSS in details.
                    <div>&nbsp;</div>
                    <div>&nbsp;</div>
                  </Card.Text>
                  {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </section>
    </div>
  );
};

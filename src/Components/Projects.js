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
                    Main tasks are states handling, properties delegation,
                    switching, deleting etc.
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
                    Main tasks are state handling, calling API, storing and
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
                    Main tasks are state handling, calling API, storing and
                    accessing data, error handling etc, setting up categories,
                    switching categories, grid and list view etc.
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
                  src="https://www.youtube.com/embed/dlfuU8w5LnM"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
                <Card.Body>
                  <Card.Title>Down Syndrome / Queensland</Card.Title>
                  <hr></hr>
                  <Card.Text className="project_text">
                    It is a real life project I developed for Down Syndrome
                    Queensland. It was a part of the curriculum that we develop
                    a programme for a real client upon their request and
                    necessities. It has already been handed to the client but I
                    am still voluntarily working to make it better. The main
                    feature applied was event booking with the help of the
                    calendar. The organization organizes different events on
                    different dates, and the events were supposed to have
                    different individual links and those links to be inserted on
                    the calendar on the specific day the event is on. The
                    languages used are HTML, CSS and JavaScript. Sass was used
                    for the CSS compilation.
                  </Card.Text>

                  {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
              </Card>
            </Col>
            <Col lg={6} className="mt-3">
              <Card className="projects_card">
                <iframe
                  height="500"
                 
                  src="https://www.youtube.com/embed/qQoR-N0m2ls"
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
                  <Card.Text className="project_text project_text_human">
                    Is was a simple website I built for one of my subject, Human
                    Computer Interaction in Bachelor Degree. It was  built by just
                    Html, CSS and I used Saas for CSS compilation. On this
                    project I got a chance to learn HTML and CSS in much more
                    details.
                  </Card.Text>
                  {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
              </Card>
            </Col>
            <Col lg={6} className="mt-3">
              <Card className="projects_card">
                <iframe
                  height="500"
                  src="https://www.youtube.com/embed/nDeLZu49BCk"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
                <Card.Body>
                  <Card.Title>
                    Expenses Tracker / Full Stack/ Multiple Users/ Hosted on
                    Heroku
                  </Card.Title>
                  <hr></hr>
                  <Card.Text className="project_text project_text_human">
                    It is a full stack multiple user react app built using
                    NodeJs with expressJs on backend and MongoDB with Mongoose
                    for the database.
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

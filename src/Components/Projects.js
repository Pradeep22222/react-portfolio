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
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={6} className="mt-3">
              <Card>
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
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={6} className="mt-3">
              <Card>
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
                  <hr className="project_hr" />
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={6} className="mt-3">
              <Card>
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
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={6} className="mt-3">
              <Card>
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
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col className="mt-3">
              <Card>
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
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </section>
    </div>
  );
};

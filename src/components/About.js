import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import aboutImg from "../girl_coding.png"; // FIXED PATH

const About = () => (
  <section id="about" className="py-5">
    <Container className="container2">
      <h2 className="mb-3">About Me</h2>
      <Row>
        <Col md={5}>
          
          <div className="col-md-5">
            <img
              src={aboutImg}
              alt="Nargish Gul"
              
            />
          </div>

        </Col>
        <Col md={7}>
        <div className="col-md-7">
          <p>I am a passionate developer building full-stack and frontend applications focusing on clean UI, performance and maintainable code.</p>
          <ul>
            <li>Frontend: React, Bootstrap, HTML, CSS, JS</li>
            <li>Backend: Python, Django, REST APIs</li>
            <li>DB: MySQL</li>
          </ul>
          </div>
          <a href="D:\Portfolio\portfolio\public\Nargish_Gul Resume.pdf" download className="btn btn-primary mt-2">Download Resume</a>
        </Col>
      </Row>
    </Container>
  </section>
);

export default About;

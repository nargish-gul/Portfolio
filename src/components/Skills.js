import React from "react";
import { Container, Row, Col, ProgressBar } from "react-bootstrap";

const skills = [
  {name:"Python", val:85},
  {name:"React.js", val:85},
  {name:"Django", val:70},
  {name:"MySQL", val:70},
  {name:"Bootstrap/CSS", val:90},
  {name:"REST APIs", val:80},
  {name:"Git/GitHub", val:85}
];

const Skills = () => (
  <section id="skills" className="py-5 bg-light text-dark">
    <Container>
      <h2 className="mb-3">Skills</h2>
      <Row>
        {skills.map(s => (
          <Col md={6} key={s.name} className="mb-3">
            <h6>{s.name}</h6>
            <ProgressBar now={s.val} label={`${s.val}%`} />
          </Col>
        ))}
      </Row>
    </Container>
  </section>
);

export default Skills;

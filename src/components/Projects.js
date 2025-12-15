import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import ProjectCard from "./ProjectCard";

const allProjects = [
  {id:1, title:"College Website", tech:["html","css","js","mysql","php"], desc:"College website with registration forms."},
  {id:2, title:"Employee Management", tech:["django","mysql","drf","bootstrap"], desc:"Django app with admin & APIs."},
  {id:3, title:"Portfolio", tech:["react","bootstrap","django"], desc:"This portfolio built with React & Bootstrap."},
  
];

const tags = ["all","react","django","html","css","js","mysql","drf","bootstrap"];

const Projects = () => {
  const [filter, setFilter] = useState("all");
  const visible = allProjects.filter(p => filter === "all" ? true : p.tech.includes(filter));
  return (
    <section id="projects" className="py-5">
      <Container>
        <h2 className="mb-3">Projects</h2>
        <div className="mb-4">
          {tags.map(t => (
            <Button key={t} variant={t===filter ? "primary" : "outline-primary"} className="me-2 mb-2" onClick={()=>setFilter(t)}>
              {t.toUpperCase()}
            </Button>
          ))}
        </div>
        <Row>
          {visible.map(p => (
            <Col md={4} key={p.id}><ProjectCard project={p} /></Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;

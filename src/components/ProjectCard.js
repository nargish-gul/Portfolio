import React from "react";
import { Card, Button } from "react-bootstrap";

const ProjectCard = ({ project }) => (
  <Card className="mb-4 card-project">
    <Card.Body>
      <div style={{height:140, borderRadius:8, marginBottom:12, background:"linear-gradient(135deg,#e6f0ff,#dbeafe)"}}/>
      <Card.Title>{project.title}</Card.Title>
      <Card.Text>{project.desc}</Card.Text>
      <div className="mb-2">
        {project.tech.map((t,i)=>(<span key={i} className="badge bg-secondary me-1">{t}</span>))}
      </div>
      <Button className="me-2">View</Button>
      <Button variant="outline-primary">Code</Button>
    </Card.Body>
  </Card>
);

export default ProjectCard;

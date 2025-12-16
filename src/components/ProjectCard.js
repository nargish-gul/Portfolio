import React from "react";
import { Card, Button } from "react-bootstrap";

const ProjectCard = ({ project }) => (
  <Card className="card-project">
    <Card.Body>

      <div
        className="project-container1"
        style={{ height: 140, borderRadius: 8, marginBottom: 12 }}
      >
        <img
          src={project.image}
          alt={project.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: 8
          }}
        />
      </div>

      <Card.Title className="card-title">{project.title}</Card.Title>
      <Card.Text className="card-desc">{project.desc}</Card.Text>

      <div className="mb-2">
        {project.tech.map((t, i) => (
          <span key={i} className="badge bg-secondary me-1">{t}</span>
        ))}
      </div>

      
      <Button variant="outline-primary"
      href={project.code}
        target="_blank">Code</Button>

    </Card.Body>
  </Card>
);

export default ProjectCard;

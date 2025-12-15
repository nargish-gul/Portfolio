import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => (
  <footer className="py-4 text-center">
    <Container>
      <div>© {new Date().getFullYear()} Nargish Gul — Python Full Stack Developer</div>
      <div className="mt-2">
        <a href="https://github.com/nargish-gul" target="_blank" rel="noopener" className="me-3">GitHub</a>
        <a href="https://www.linkedin.com/in/nargish-gul-a22458246" target="_blank" rel="noopener">LinkedIn</a>
      </div>
    </Container>
  </footer>
);

export default Footer;

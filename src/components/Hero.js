import React from "react";
import { Container, Button } from "react-bootstrap";
import { motion } from "framer-motion";

const Hero = () => (
  <section id="home" className="hero">
    <Container className="text-light">
      <motion.div initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{duration:0.6}}>
        <h1 className="display-5 fw-bold">Hello, I’m <span style={{color:"var(--primary)"}}>Nargish Gul</span></h1>
        <p className="lead">Python Full Stack Developer · Frontend Developer · Web Developer · React Developer · Django Developer</p>
        <p>I build modern, responsive web applications using React.js, Django , MySQL and Bootstrap.</p>
        <div className="mt-3">
          <Button href="#projects" className="me-2">View Projects</Button>
          <Button variant="outline-light">
  <a href="/Nargish_Gul Resume.PDF" download style={{ color: 'inherit', textDecoration: 'none' }}>
    Download Resume
  </a>
</Button>

        </div>
      </motion.div>
    </Container>
  </section>
);

export default Hero;

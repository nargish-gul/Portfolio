import React, { useEffect, useState } from "react";
import NavbarComp from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AOS from "aos";

function App(){
  useEffect(()=>{ AOS.init({duration:700, once:true}); },[]);

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
  useEffect(()=>{
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  },[theme]);

  return (
    <>
      <NavbarComp theme={theme} setTheme={setTheme} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;

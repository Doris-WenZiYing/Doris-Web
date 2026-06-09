import React from "react";
import TopNav from "./components/TopNav";
import Intro from "./components/Intro";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import "./App.css";
import "./styles/Global.css";

function App() {
  return (
    <div className="app">
      <TopNav />
      <div className="app-content">
        <Intro />
        <About />
        <Services />
        <Projects />
        <Experience />
        <Contact />
      </div>
    </div>
  );
}

export default App;

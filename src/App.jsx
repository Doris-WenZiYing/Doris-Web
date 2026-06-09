import React from "react";
import SidebarNav from "./components/SidebarNav";
import Intro from "./components/Intro";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./App.css";
import "./styles/Global.css";

function App() {
  return (
    <div className="app-layout">
      <SidebarNav />
      <main className="app-main" id="content">
        <Intro />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;

import React from "react";
import Navbar from "./components/pages/Navbar";
import Hero from "./components/Pages/Hero";
import About from "./components/Pages/About";
import Project from "./components/Pages/Project";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Project/>
      
    </div>
  );
};

export default App;

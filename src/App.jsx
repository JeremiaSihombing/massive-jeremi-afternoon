import React from "react";
import Navbar from "./components/pages/Navbar";
import Hero from "./components/Pages/Hero";
import About from "./components/Pages/About";
import Project from "./components/Pages/Project";
import Contact from "./components/Pages/Contact";
import Footer from "./components/Pages/Footer";


const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Project />
      <Contact />
      <Footer/>
     
    </div>
  );
};

export default App;

import { TypeAnimation } from "react-type-animation";
import Profil from "/public/profil.png";
import React from 'react'

const Hero = () => {
  return (
    <div className=" min-h-screen bg-gray-900 flex flex-wrap  font-bold text-white  " id="home">
      <div className="w-1/2 mx-auto pt-56 ">
        <span style={{ fontSize: "2.5em" }}>
          <span className="font-black">Hello, I'm </span>
          <TypeAnimation sequence={["Jeremia Jordan  ", 1000, "Front End Developer", 1000, "UI/UX Designer", 1000]} repeat={Infinity} />
        </span>

        <p className="font-medium pb-4 text-4lg">
          Hi! I am Jeremia Jordan Sihombing, a web designer/developer focused on crafting great web experiences. Designing and Coding have been my passion since the days I started working with computers but I found myself into web
          design/development since 2023. I enjoy creating beautifully designed, intuitive and functional websites.
        </p>
        <div className="flex flex-wrap gap-2 text-sm">
          <button className="bg-[#7562E0] text-white py-3 px-10 rounded-md">Contact Me</button>
          <button className="bg-transparent border text-white py-3 px-10 rounded-md ">My CV</button>
        </div>
      </div>

      <div className="w-1/4 mx-auto pt-28 hidden md:block  sm:block ">
        <img className="translate-x-3" src={Profil} alt="" />
      </div>
    </div>
  );
};

export default Hero;

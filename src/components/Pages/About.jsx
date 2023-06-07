import React from "react";
import Profile2 from "/public/profil2.png";
import { TypeAnimation } from "react-type-animation";
import Html from '/public/html.png'
import Css from '/public/css.png'
import Js from '/public/js.png'
import Logoreact from '/public/react.png'


const About = () => {
  return (
    <>
      <div className="pt-20 text-[#1F232D]  " id="about">
        <h1 className="text-center font-bold text-[40px]">About Me</h1>
      </div>
      <div className=" min-h-screen bg-white flex flex-wrap  font-bold text-[#181824]  ">
        <div className="w-1/4 mx-auto pt-28 hidden md:block  sm:block ">
          <img className="translate-x-3" src={Profile2} alt="" />
        </div>

        <div className="w-1/2 mx-auto pt-36 font-light ">
          <span style={{ fontSize: "30px" }}>
            <span className="text-[#181824] font-semibold">Hi Guyss, </span>
            <TypeAnimation
              sequence={[
                "my name is Jeremia Jordan Sihombing, a six-semester student at State Medan University. I have an interest in and expertise in front-end development. Currently, I am focusing on studying ReactJS, a popular JavaScript Library for developing a dynamic and responsive user interface (UI). ",
                1000,
              ]}
              repeat={Infinity}
            />
          </span>
        </div>
      </div>
      <div className="  text-[#1F232D] ">
        <h1 className="ml-52 font-bold text-[40px]">My Skill</h1>
      </div>
      <div className="flex flex-wrap gap-3 pt-6 justify-start ml-52 pb-32">
        <img className="w-[150px]" src={Html} alt="" />
        <img className="w-[150px]" src={Css} alt="" />
        <img className="w-[150px]" src={Js} alt="" />
        <img className="w-[150px]" src={Logoreact} alt="" />
      </div>
    </>
  );
};

export default About;

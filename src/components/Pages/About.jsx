import React from "react";
import Profile2 from "/public/profil2.png";
import { TypeAnimation } from "react-type-animation";
import { FaReact } from "react-icons/fa";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Html from '/public/html.png'
import Css from '/public/css.png'
import Js from '/public/js.png'
import Logoreact from '/public/react.png'
import Sd from '/public/sd.png'
import Smp from '/public/smp.png'
import Sma from '/public/sma.jpg'
import Kuliah from '/public/kuliah.png'


const About = () => {
  return (
    <>
      <div className=" text-white bg-gray-900 " id="about">
        <h1 className="text-center font-bold text-[40px]">About Me</h1>
      </div>
      <div className=" min-h-screen bg-gray-900 flex flex-wrap  font-bold text-white  ">
        <div className="w-1/4 mx-auto pt-28 hidden md:block  sm:block ">
          <img className="translate-x-3" src={Profile2} alt="" />
        </div>

        <div className="w-1/2 mx-auto pt-36 font-light ">
          <span style={{ fontSize: "30px" }}>
            <span className="text-white font-semibold">Hi Guyss, </span>
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

      <div className="  text-white bg-gray-900">
        <h1 className="ml-52 font-bold text-[40px]">My Skill</h1>
        <div className="flex flex-wrap gap-3 pt-6 justify-start ml-52 pb-32">
          <img className="w-[150px]" src={Html} alt="" />
          <img className="w-[150px]" src={Css} alt="" />
          <img className="w-[150px]" src={Js} alt="" />
          <img className="w-[150px]" src={Logoreact} alt="" />
        </div>
      </div>

      <div className="bg-gray-900">
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ color: "#fff" }}
            contentArrowStyle={{
              borderRight: "7px solid rgb(255, 255, 255)",
              color: "#fff",
            }}
            date="2007-2013"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<FaReact />}>
            <div className="text-black">
              <h3 className="text-xl font-bold">SD</h3>
              <h4 className="vertical-timeline-element-subtitle">SD Cinta Rakyat 2 Pematang Siantar</h4>
              <p className="pb-3 ">During the period of 2007-2013, I underwent my early education at SD Cinta Rakyat 2 located in Pematangsiantar.</p>
            </div>
            <img className="w-20 mx-auto" src={Sd} alt="sdf" />
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ color: "#fff" }}
            contentArrowStyle={{
              borderRight: "7px solid rgb(255, 255, 255)",
              color: "#fff",
            }}
            date="2013-2016"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<FaReact />}>
            <div className="text-black">
              <h3 className="text-xl font-bold">SMP</h3>
              <h4 className="vertical-timeline-element-subtitle">SMP Negeri 3 </h4>
              <h4 className="vertical-timeline-element-subtitle">During the period of 2013-2016, I underwent my education at SMP Negeri 3 located in Pematangsiantar.</h4>
            </div>
            <img className="w-20 mx-auto" src={Smp} alt="sdf" />
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ color: "#fff" }}
            contentArrowStyle={{
              borderRight: "7px solid rgb(255, 255, 255)",
              color: "#fff",
            }}
            date="2016-2019"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<FaReact />}>
            <div className="text-black">
              <h3 className="text-xl font-bold">SMA</h3>
              <h4 className="vertical-timeline-element-subtitle">SMA Negeri 4 </h4>
              <p>During the period of 2013-2016, I underwent my education at SMA Negeri 4 located in Pematangsiantar.,</p>
            </div>
            <img className="w-20 mx-auto" src={Sma} alt="sdf" />
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ color: "#fff" }}
            contentArrowStyle={{
              borderRight: "7px solid rgb(255, 255, 255)",
              color: "#fff",
            }}
            date="2020-now"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<FaReact />}>
            <div className="text-black">
              <h3 className="text-xl font-bold">University</h3>
              <h4 className="vertical-timeline-element-subtitle">State Medan University</h4>
              <p>During the period of 2019, I pursued my studies at State Medan Univerisity located in Medan.</p>
             
            </div>
            <img className="w-20 mx-auto" src={Kuliah} alt="sdf" />
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};

export default About;

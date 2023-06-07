import React from "react";
import Project1 from '/public/project1.png'
import Project2 from '/public/project2.jpg'

const Project = () => {
  return (
    <>
      <div className="pt-14 text-white bg-[#]  bg-gray-900 pb-32 " id="projects">
        <h1 className="text-center font-bold text-[40px]">Project</h1>

        <div className="flex flex-wrap justify-center items-center pt-6 mx-14  gap-5">
          <div className="bg-white rounded-lg shadow-md p-6 mx-2 w-[400px]">
            <img src={Project1} alt="Card Image" className=" object-cover  rounded-xl" />
            <h2 className="text-xl font-semibold mt-4 text-gray-900">Slicing </h2>
            <p className="text-gray-600 mt-2">The purpose of this project is to implement a design created in Figma into HTML and CSS code using the Visual Studio Code (VS Code) </p>
            <a href="https://buildcodee.netlify.app" className="text-white bg-gray-900 py-4 px-5  font-medium mt-4 inline-block">
              Read More
            </a>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 mx-2 w-[400px]">
            <img src={Project2} alt="Card Image" className="  object-cover  rounded-xl" />
            <h2 className="text-xl font-semibold mt-4 text-gray-900">Well-Being </h2>
            <p className="text-gray-600 mt-2">The Well-being project is a nutrition website designed to assist individuals in achieving a healthy lifestyle by providing valuable information and resources related to nutrition. </p>
            <a href="https://wellbeing-ivory.vercel.app/" className="text-white bg-gray-900 py-4 px-5  font-medium mt-4 inline-block">
              Read More
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;

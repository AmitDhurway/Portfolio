import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/js.png";
import mongo from "../assets/mongodb.png";
import express from "../assets/express.png";
import react from "../assets/react.png";
import node from "../assets/nodejs.png";
function Experiance() {
  const cardItem = [
    {
      id: 1,
      logo: html,
      name: "MongoDB",
    },
    {
      id: 2,
      logo: css,
      name: "CSS",
    },
    {
      id: 3,
      logo: javascript,
      name: "JavaScript",
    },
    {
      id: 4,
      logo: mongo,
      name: "MongoDB",
    },
    {
      id: 5,
      logo: express,
      name: "Express.JS",
    },
    {
      id: 6,
      logo: react,
      name: "React.JS",
    },
    {
      id: 7,
      logo: node,
      name: "Node.JS",
    },
  ];
  return (
    <div
      name="Experiance"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Experiance</h1>
        <p className="  ">
        MERN stack intern contributing to full-stack development projects, mastering React.js, Node.js, Express.js, and MongoDB while collaborating in an Agile environment.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-7 my-3">
          {cardItem.map(({ id, logo, name }) => (
            <div
              className=" flex flex-col items-center justify-center border-[2px] rounded-full md:w-[200px] md:h-[200px] shadow-md p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img src={logo} className="w-[150px] rounded-full" alt="" />
              <div>
                <div className="">{name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experiance;
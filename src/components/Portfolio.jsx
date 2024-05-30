import React from "react";
import port from "../assets/port.png";
import crud from "../assets/crud.png";
import news from "../assets/news.png";
import ghr from "../assets/ghr.png";
import github from "../assets/github.png";

function PortFolio() {
  const cardItem = [
    {
      id: 1,
      logo: port,
      name: "PortFolio",
      desc: "A modern, responsive portfolio built with React for dynamic content and Tailwind CSS for streamlined styling.",
      sourceCodeLink: "https://github.com/AmitDhurway/Portfolio.git",
    },
    {
      id: 2,
      logo: crud,
      name: "TODO with EJ",
      desc: "A streamlined to-do web app built with Node.js, Express, and Tailwind CSS for efficient task management and stylish UI.",
      sourceCodeLink: "https://github.com/AmitDhurway/CRUD_WITH_EJS.git",
    },
    {
      id: 3,
      logo: news,
      name: "NEWS Web-App",
      desc: "A dynamic news web app built with JavaScript, utilizing APIs to deliver real-time updates and trending stories.",
      sourceCodeLink: "https://github.com/AmitDhurway/news2.git",
    },
    {
      id: 4,
      logo: ghr,
      name: "gretHR",
      desc: "Building a fully functional Greythr web app using the MERN stack and Tailwind CSS for efficient HR management and streamlined UI design.",
      sourceCodeLink: "https://github.com/AmitDhurway/greytHR.git",
    },
    // {
    //   id: 5,
    //   logo:myntra,
    //   name: "Myntra Clone",
    //   desc: "Node.js project: Real-time Chat Application facilitating instant messaging, user authentication, and message encryption.",
    //   sourceCodeLink: "",
    // },
    {
      id: 5,
      logo: github,
      name: "More Projects",
      desc: "Developed and maintained various projects on GitHub, demonstrating skills in Mern.",
      sourceCodeLink: "https://github.com/AmitDhurway",
    },
  ];

  return (
    <div
      name="Portfolio"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-16"
    >
      <div>
        <h1 className="text-3xl text-blue-600 font-bold mb-5">PortFolio</h1>
        <span className="underline font-semibold text-xl text-white">Projects</span>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-5">
          {cardItem.map(({ id, logo, name, desc, sourceCodeLink }) => (
            <div
              className="md:w-[300px] md:h-[400px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-105 duration-200 flex flex-col justify-center items-center text-center"
              key={id}
            >
              <img
                src={logo}
                className="w-[110px] h-[160px] p-1 w-full rounded border-[2px]"
                alt=""
              />
              <div>
                <div className="px-2 pt-2 font-bold text-xl mb-2">{name}</div>
                <p className="px-2 text-gray-500">{desc}</p>
              </div>
              <div className="px-6 py-4 space-x-3 justify-around">
                <a
                  href={sourceCodeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-700 hover:bg-blue-500 text-white font-bold px-4 py-2 rounded"
                >
                  Source code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <br />
      <br />
      <br />
      <hr />
    </div>
  );
}

export default PortFolio;

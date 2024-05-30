import React from 'react'
import logo2 from '../assets/logo2.png';

import { AiFillInstagram } from "react-icons/ai";
import { IoLogoGithub } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";

import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";

import { ReactTyped } from "react-typed";




export default function Home() {
    return (
        <>
            <div name="Home" className="max-w-screen-2xl container mx-auto px-4 md:px-20 py-20 pt-4">
                <div className='flex flex-col md:flex-row '>
                    <div className='md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1'>
                        <span className='font-semibold'>Welcome To My Portfolio Website</span>
                        <div>
                            <div className='flex space-x-1 md:text-4xl'>
                                <h1 className='font-bold'>Hello, I'm a </h1>
                                {/* <span className='text-red-600 font-bold'> Developer</span> */}
                                <ReactTyped
                                    className='text-blue-600 font-bold'
                                    strings={["Developer", "Programmer", "Coder"]}
                                    typeSpeed={40}
                                    backSpeed={50}
                                    loop={true}
                                />
                            </div>
                            <br />
                            <p className='text-sm md:text-md text-justify'>I'm a MERN stack developer adept at building dynamic web applications, with expertise in MongoDB, Express.js, React.js, and Node.js. I thrive on solving complex challenges, staying updated with the latest technologies, and collaborating effectively to deliver innovative solutions that enhance user experiences.</p>
                        </div>
                        <br />
                        <a type="submit" className='border border-white text-sm p-1 h-7 text-white bg-blue-600 rounded-full cursor-pointer hover:scale-105 hover:text-black duration200' href="/amitkumardhurway.pdf" target='_blank'>Download CV!</a>

                        <div className='flex justify-between items-center pt-8 flex-col md:flex-row space-y-5 md:space-y-0'>
                            <div className='space-y-2 text-xl'>
                                <h1 className='font-bold'>Available on</h1>
                                <ul className='flex space-x-5'>
                                    <a href="https://github.com/AmitDhurway" target='_blank'>
                                        <li>
                                            {""}
                                            <IoLogoGithub />
                                        </li>
                                    </a>
                                    <a href="https://www.linkedin.com/in/akdhurway/" target='_blank'>
                                        <li>
                                            {""}
                                            <FaLinkedin />
                                        </li>
                                    </a>
                                    <a href="https://www.instagram.com/_amit.dev" target='_blank'>
                                        <li>
                                            {""}
                                            <AiFillInstagram />
                                        </li>
                                    </a>
                                    <a href="https://t.me/Amitkumardhurway" target='_blank'>
                                        <li>
                                            {""}
                                            <FaTelegram />
                                        </li>
                                    </a>

                                </ul>
                            </div>
                            <div className='space-y-2 text-xl'>
                                <h1 className='font-bold'>Currently working on</h1>
                                <div className='flex space-x-10'>
                                    < SiMongodb className='text-xl md:3xl hover:scale-110 duration-200 rounded-full border-2' />
                                    < SiExpress className='text-xl md:3xl hover:scale-110 duration-200 rounded-full border-2' />
                                    < FaReact clasclassName='text-xl md:3xl hover:scale-110 duration-200 rounded-full border-2' />
                                    < FaNodeJs className='text-xl md:3xl hover:scale-110 duration-200 rounded-full border-2' />
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='md:w-1/2 md:ml-80 md:mt-20 mt-10 order-1 '>
                        <img className=" md:h-[350px] md:w-[450]" src={logo2} alt="" /></div>
                </div>
                <br />
                <br />
                <br />
                <br />
                <hr />
            </div>
        </>
    )
}
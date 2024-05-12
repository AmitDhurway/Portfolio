import React, { useState } from 'react';
import logo from '../assets/logo1.png';
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-scroll";

function Header() {
    const [menu, setMenu] = useState(false);
    const navItems = [
        {
            id: 1,
            text: "Home"
        },
        {
            id: 2,
            text: "About"
        },
        {
            id: 3,
            text: "Portfolio"
        },
        {
            id: 4,
            text: "Experiance"
        },
        {
            id: 5,
            text: "Contact"
        },
    ];
    return (
        <>
            <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 pt-4 shadow-md h-20 fixed top-0 right-0 left-0 bg-white">
                <div className='flex justify-between items-center'>
                    <a href="/Home.jsx"> <div className='flex justify-between space-x-2 cursor-pointer'>
                        <img className='h-12 w-12' src={logo} alt="Logo" />
                        <div className='flex justify-between'>
                            <h1 className='font-bold'>Am<span className='font-bold text-red-600'>i</span>t
                                <p className='text-sm'>Web Developer</p></h1>

                        </div>
                    </div>
                    </a>
                    {/* desktop navbar */}
                    <div>
                        <ul className='hidden md:flex space-x-4'>
                            {
                                navItems.map(({ id, text }) => (
                                    <li className='hover:scale-105 duration-200 cursor-pointer' key={id}><Link to={text}
                                    smooth={true}
                                    duration={500}
                                    offset={-70}
                                    activeClass="active"
                                >{text}
                                </Link></li>
                                

                                ))
                            }
                            <a type="submit" className='border border-black text-sm p-1 h-7 text-white bg-orange-600 rounded-full cursor-pointer hover:scale-105 hover:text-black duration200' href="/resume.pdf" target='_blank'>View CV!</a>
                        </ul>
                        
                        <div onClick={() => setMenu(!menu)} className='md:hidden'>
                            {menu ? <IoCloseSharp size={24}/> : <AiOutlineMenu size={24}/>}

                        </div>
                    </div>
                </div>
                

                {/* mobile navbar */}
                <div  className='bg-white'>
                    <ul className={menu ? 'flex flex-col space-y-4 h-screen items-center justify-center md:hidden' : 'hidden md:hidden cursor-pointer'}>
                        {
                            navItems.map(({ id, text }) => (
                                <li className='hover:scale-105 duration-200 cursor-pointer font-semibold' key={id}>
                                    <Link 
                                    onClick={() => setMenu(!menu)}
                                    to={text}
                                    smooth={true}
                                    duration={500}
                                    offset={-70}
                                    activeClass="active"
                                >{text}
                                </Link>
                                </li>
                                 ))
                        }
                         <a type="submit" className='border border-black text-sm p-1 h-7 text-white bg-orange-600 rounded-full cursor-pointer hover:scale-105 hover:text-black duration200' href="/resume.pdf" target='_blank'>View CV!</a>
                    </ul>
                </div>
            </div>

        </>

    );
};
export default Header;

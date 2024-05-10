import React, { useState } from 'react';
import logo from '../assets/logo1.png';
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";

function Header() {
    const [menu, setMenu] = useState(false);
    const navItems=[
        {
            id:1,
            text:"Home"
        },
        {
            id:1,
            text:"About"
        },
        {
            id:1,
            text:"Portfolio"
        },
        {
            id:1,
            text:"Experiance"
        },
        {
            id:1,
            text:"Conatct"
        },
    ];
    return (
        <>
            <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 shadow-md h-20 fixed top-0 right-0 left-0">
                <div className='flex justify-between h-20 items-center'>
                    <div className='flex justify-between space-x-2 cursor-pointer'>
                        <img className='h-12 w-12' src={logo} alt="Logo" />
                        <div className='flex justify-between'>
                            <h1 className='font-bold'>Am<span className='font-bold text-yellow-500'>i</span>t
                                <p className='text-sm'>Web Developer</p></h1>

                        </div>
                    </div>
                    {/* desktop navbar */}
                    <div>
                        <ul className='hidden md:flex space-x-4'>
                            {
                                navItems.map(({id, text})=>(
                                    <li className='hover:scale-105 duration-200 cursor-pointer' key={id}>{text}</li>

                                ))
                            }
                        </ul>
                        <div onClick={() => setMenu(!menu)} className='md:hidden'>
                           {menu ?  <IoCloseSharp />: <AiOutlineMenu />}

                        </div>
                    </div>
                </div>

                {/* mobile navbar */}
                <div>
                    <ul className={menu ?  'flex flex-col space-y-4 h-screen items-center justify-center md:hidden' : 'hidden md:hidden cursor-pointer'}>
                    {
                                navItems.map(({id, text})=>(
                                    <li className='hover:scale-105 duration-200 cursor-pointer font-semibold' key={id}>{text}</li>

                                ))
                            }
                    </ul>
                </div>
            </div>

        </>

    );
};
export default Header;

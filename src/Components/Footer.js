import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { GiRocket } from "react-icons/gi";

function Footer() {
    return (
        <>
            <div className='mt-36 bg-gray-950 py-10 md:px-20 px-5 '>
                <a href='#home' className="px-3 py-2 rounded-lg bg-gray-800 text-gray-300 hover:text-white animate-bounce w-fit mx-auto flex items-center justify-center gap-1">Go to Top <GiRocket  className='text-[1.3rem] rotate-[225deg]' /></a>
                <div className="flex items-center lg:justify-between justify-center flex-wrap">
                    <div className="flex items-center justify-center w-fit gap-2 pl-2 pr-5 py-1 rounded-full bg-gray-900 scale-90">
                        <div className="ml-2 p-1">
                            <div className="text-[1.3rem] font-[600] text-gray-100">BARATH</div>
                            <a href='barath2112000@gmail.com' className="text-[12px] text-gray-600">barath2112000@gmail.com</a>
                        </div>
                    </div>
                    <div className="flex items-center justify-center gap-5 md:mt-0 mt-5">
                        <a href="#about" className='text-gray-400'>About</a>
                        <a href="#skills"  className='text-gray-400'>Skills</a>
                        <a href="#projects"  className='text-gray-400'>Projects</a>
                    </div>
                </div>
                <div className="flex items-center gap-5 mt-10 px-3 py-1 rounded-full bg-gray-900 w-fit xl:mx-0 mx-auto">
                    <a title='Connect with Email' href="mailto:barath2112000@gmail.com" className='text-gray-500' ><IoIosMail className='text-[2.3rem]' /></a>
                    <Link title='Connect with GitHub' to={"https://github.com/barath211"} target='_blank' className='text-gray-500' ><FaGithub className='text-[2rem]' /></Link>
                    <Link title='Connect with Linked In' to={"https://www.linkedin.com/in/barath-s-560aa1278/"} target='_blank' className='text-gray-500' ><FaLinkedin className='text-[2rem]' /></Link>
                </div>
            </div>
            <div className="py-5 tracking-wider font-[200] text-center bg-black text-white">Copyright 2024 by Barath</div>
        </>
    )
}
export default Footer
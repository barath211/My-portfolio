import React from 'react';
import { FaCloudMoon } from "react-icons/fa";
import { MdSunny } from "react-icons/md";
import VoicePack from './NanoAnimation/VoicePack';

function About() {
    return (
        <div className='w-[1000px] mx-auto max-w-[93%] mt-10' id='about'>
            <br /> <br />
            <div className="">
                <div className="font-[700] text-center text-[3rem] text-white">About</div>
                <div className="text-center text-gray-500">Something About me</div>
            </div>
            <div className="mt-10 relative">
                <div class="flex -space-x-2 rtl:space-x-reverse bg-gray-500 w-fit px-3 py-1 rounded-full">
                    <img class="w-10 h-10 rounded-full " src="https://www.wovlene.com/cm-admin/uploads/image/testimonial-3.jpg" alt="" />
                    <img class="w-10 h-10 rounded-full " src="https://www.wovlene.com/cm-admin/uploads/image/testimonial-2.jpg" alt="" />
                    <img class="w-10 h-10 rounded-full " src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" alt="" />
                    <a class="flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-gray-700 rounded-full" href="#">+99</a>
                </div>
                <div className="px-5 py-3 rounded-r-2xl rounded-bl-2xl mt-5 flex items-center justify-normal w-fit hover:ring-4 hover:ring-gray-700 bg-gray-800 flex-col">
                    <div className='text-gray-300 flex items-center justify-normal w-full'>{new Date().getHours() > 12 ? <div className='flex items-center justify-center gap-2'><span>Hi, Good AfterNoon</span> <span><FaCloudMoon /></span></div> : <div className='flex items-center justify-center gap-2'><span>Good Morning</span> <span><MdSunny /></span></div>}</div>
                    <div className="w-full text-gray-400 flex items-center justify-center gap-2 "> <VoicePack /> Tell me About Your self ...</div>
                </div>
            </div>
            <div className="mt-3 flex items-center justify-between w-full relative">
                <div className=""></div>
                <div className="md:w-[80%] w-full">
                    <div className="py-5 px-7 rounded-l-2xl rounded-br-2xl mt-5 hover:ring-4 hover:ring-gray-700 flex leading-3 relative items-center justify-normal w-fit bg-gray-800 flex-col">
                        <div className='text-gray-300 flex items-center justify-normal absolute left-5 top-4 px-3 py-1 rounded-full w-fit bg-gray-500'>{new Date().getHours() > 12 ? <div className='flex items-center justify-center gap-2'><span>Hi, Good AfterNoon</span> <span><FaCloudMoon /></span></div> : <div className='flex items-center justify-center gap-2'><span>Good Morning</span> <span><MdSunny /></span></div>}</div> <br />
                        <div className="w-full leading-7 tracking-wider mt-7 lg:text-left text-justify indent-10 text-gray-400">
                            I am a passionate computer science professional with a focus on website development and the MERN stack. 
                            With a solid foundation in HTML, CSS, and JavaScript, 
                            I have hands-on experience in front-end development using frameworks like Bootstrap and Tailwind CSS. 
                            I led the front-end development for the "One Stop" project and completed official training in full-stack web development at Skill Safari Institute. 
                            During my internship, I worked on converting their website using React JS, Tailwind CSS, and Firebase as the backend. 
                            I am eager to leverage my skills in a dynamic professional environment. </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
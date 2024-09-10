import React, { useState } from 'react'
import Church from "../Images/church.png";
import Earphones from "../Images/earphones.png";
import Rock from "../Images/rock paper.png";
import SolarSystem from "../Images/SolarSystem.png";
import { Link } from 'react-router-dom';
import { GrAchievement } from "react-icons/gr";
import "./Extra.css"



function Projects() {

    const [showProjects, setShowProjects] = useState(false);

    return (
        <div className='mt-20' id='projects'>
            <div className="text-center font-[700] text-white text-[4rem]">Projects</div>
            <div className="text-center text-gray-200 tracking-wider px-4 w-fit mx-auto py-2 rounded-full bg-gray-500 flex items-center justify-center gap-1"><GrAchievement className='text-[1.5rem]' />Achievement </div>
            <div className={`w-[1200px] ${showProjects ? "h-fit" : "h-[500px] overflow-y-hidden"} py-10 mx-auto max-w-full mt-10 flex items-center justify-center flex-wrap gap-10 Projects-box `}>
                <Link to={'https://bethelicrmcoimbatore.in/'} target='_blank' className=" p-3 md:hover:translate-y-[-20px] duration-300 transition-all rounded-2xl bg-gray-800 w-[350px] hover:bg-gray-950 shadow-3xl project  ">
                    <img src={Church} alt="#" className='w-[350px] h-[190px] rounded-xl object-cover hover:border-2 hover:border-sky-600 project-card' />
                    <div className="text-[1.1rem] font-[600] text-white mt-5 mb-3 text-center">bethelicrmcoimbatore.in</div>
                    <div className="text-[14px] px-2 project-info text-gray-400">
                    Developed and hosted a live project for Bethel ICRM Coimbatore using the MERN stack, fully customized to meet
client needs for managing church member details and events.
                    </div>
                </Link>
                <Link to={'https://aesthetic-earphones.vercel.app/'} target='_blank' className=" p-3 rounded-2xl md:hover:translate-y-[-20px] duration-300 transition-all bg-gray-800 w-[350px] hover:bg-gray-950 shadow-3xl project">
                    <img src={Earphones} alt="" className='w-[350px] h-[190px] rounded-xl hover:border-2 hover:border-sky-600 project-card' />
                    <div className="text-[1.1rem] font-[600] text-white mt-5 mb-3 pl-4 whitespace-nowrap text-ellipsis text-center">Aesthetic Earphones Landing Page</div>
                    <div className="text-[14px] px-2 project-info text-gray-400">
                    Developed an engaging earphone website landing page with captivating animations to enhance user interaction and
visual appeal. Employed React JS and Tailwind CSS.
                    </div>
                </Link>
                <Link to={'https://rock-paper-sicssor.vercel.app/'} target='_blank' className=" p-3 md:hover:translate-y-[-20px] duration-300 transition-all rounded-2xl bg-gray-800 w-[350px] hover:bg-gray-950 shadow-3xl project">
                    <img src={Rock} alt="" className='w-[350px] h-[190px] rounded-xl hover:border-2 hover:border-sky-600 project-card' />
                    <div className="text-[1.1rem] font-[600] text-white mt-5 mb-3 pl-4 whitespace-nowrap text-ellipsis text-center">Rock-Paper-Scissors game 
                    </div>
                    <div className="text-[14px] px-2 project-info text-gray-400">
                    Implemented game logic and functionality with JavaScript, allowing users to play against the computer. Ensured cross-browser compatibility and smooth performance across different devices.
                    </div>
                </Link>
                <Link to={'https://solarsystem-tau.vercel.app/'} target='_blank' className="md:hover:translate-y-[-20px] duration-300 transition-all p-3 rounded-2xl bg-gray-800 w-[350px] hover:bg-gray-950 shadow-3xl project">
                    <img src={SolarSystem} alt="" className='w-[350px] h-[190px] rounded-xl hover:border-2 hover:border-sky-600 project-card' />
                    <div className="text-[1.1rem] font-[600] text-white mt-5 mb-3 pl-4 whitespace-nowrap text-ellipsis text-center">
                        Solar System</div>
                    <div className="text-[14px] px-2 project-info text-gray-400">
                        A Demo Model of Solar System, Implemented with Html, Css, Only. No Images Designed with only CSS.
                    </div>
                </Link>
            </div>
            <div className={`text-center ${showProjects ? "translate-y-[0px] mt-5" : 
            "bg-gradient-to-t from-black via-[#00000084] to-transparent py-10 translate-y-[-98px]"} w-[1200px] 
            mx-auto max-w-full rounded-xl `}>
                <button className='text-gray-300 px-3 py-1 rounded-full bg-red-600' 
                onClick={() => setShowProjects(!showProjects)}>{showProjects ? "Show Off":"See All Project"}</button>
            </div>
        </div>
    )
}

export default Projects
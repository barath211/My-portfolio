import React from 'react'
import { FaReact } from 'react-icons/fa6'
import { DiHtml5 } from 'react-icons/di';
import { FaCss3 } from 'react-icons/fa6';

function Experience() {
    return (
        <div className='w-[95%] p-6 md:p-10 rounded-3xl mx-auto max-w-full mt-20 bg-gray-800' id='experience'>
            <div className="font-[600] text-[3rem] text-white px-3 border-l-4 border-gray-300 ">Experince</div>
            <ol class="relative border-s border-gray-700 mt-10">
                <li class="mb-10 ms-6 px-1 md:px-3">
                    <span class="absolute flex items-center justify-center w-6 h-6 rounded-full -start-3 ring-8 ring-gray-900 bg-blue-900">
                        <svg class="w-2.5 h-2.5 text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 
                            2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                        </svg>
                    </span>
                    <h3 class="flex items-center mb-1 text-[1rem] md:text-lg font-semibold text-white">Frontend Developer - Intership <span class=" text-sm font-medium me-2 px-2.5 py-0.5 rounded bg-blue-900 text-blue-300 ms-3">Latest</span></h3>
                    <time class="block mb-2 text-sm font-normal leading-none text-gray-400 ">Relearn School March 2024 - May 2024</time>
                    <time class="block mb-2 text-sm font-normal leading-none text-gray-300">Coimbatore - Tamil Nadu</time>
                    <p class="mb-4 text-base font-normal text-justify text-gray-400 indent-10 mt-5">
                    The recreation of the Skill Safari website using modern web development technologies, achieving a 30% improvement in page
                            load speed. <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Developed a responsive and dynamic user interface with React JS, resulting in a 25% increase in user engagement. <br />  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Integrated Tailwind CSS for efficient and customized styling significantly improving the website's overall aesthetic and usability.

                    </p>
                    <div className="">
                        <div className="font-[600] mb-2">Technologies Handled:</div>
                        <div className="flex items-center justify-normal gap-3 flex-wrap">       
                            <div className="flex items-center gap-2 px-2 py-1 rounded-full text-white bg-orange-600"><span><DiHtml5 className='text-[1.3rem]' /></span><span>HTML</span></div>
                            <div className="flex items-center gap-2 px-2 py-1 rounded-full text-white bg-sky-600">
                                <span><FaCss3 className='text-[1.3rem]' /></span><span>CSS</span></div>
                            <div className="flex items-center gap-2 px-2 py-1 rounded-full text-white bg-cyan-600">
                                <span><FaReact className='text-[1.3rem]' /></span><span>React Js</span></div>
                        </div>
                    </div>
                </li>
            </ol>
        </div>


    )
}

export default Experience
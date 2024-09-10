import React from "react";

function Education(){
    return (
        <div className='w-[95%] p-6 md:p-10 rounded-3xl mx-auto max-w-full mt-20 bg-gray-800' id='experience'>
            <div className="font-[600] text-[3rem] text-white px-3 border-l-4 border-gray-300 ">Education</div>
            <ol class="relative border-s border-gray-700 mt-10">
                <li class="mb-10 ms-6 px-1 md:px-3">
                    <span class="absolute flex items-center justify-center w-6 h-6 rounded-full -start-3 ring-8 ring-gray-900 bg-blue-900">
                        <svg class="w-2.5 h-2.5 text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                        </svg>
                    </span>
                    <h3 class="flex items-center mb-1 text-[1rem] md:text-lg font-semibold text-white">MBA (Human Resource Management)</h3>
                    <time class="block mb-2 text-sm font-normal leading-none text-gray-400 ">Alagappa University
 &nbsp;&nbsp;(September 2022 - May 2024)</time>
                    <time class="block mb-2 text-sm font-normal leading-none text-gray-300">Coimbatore - Tamil Nadu</time>
                </li>
                <li class="mb-10 ms-6 px-1 md:px-3">
                    <span class="absolute flex items-center justify-center w-6 h-6 rounded-full -start-3 ring-8 ring-gray-900 bg-blue-900">
                        <svg class="w-2.5 h-2.5 text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                        </svg>
                    </span>
                    <h3 class="flex items-center mb-1 text-[1rem] md:text-lg font-semibold text-white">MERN Stack Development <span class=" text-sm font-medium me-2 px-2.5 py-0.5 rounded bg-blue-900 text-blue-300 ms-3">Latest</span></h3>
                    <time class="block mb-2 text-sm font-normal leading-none text-gray-400 ">Skill Safari </time>
                    <time class="block mb-2 text-sm font-normal leading-none text-gray-300">Coimbatore - Tamil Nadu</time>
                </li>
            </ol>
        </div>


    )
}

export default Education;
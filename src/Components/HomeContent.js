import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { FaCode } from "react-icons/fa6";
import Resume from "../PDF/BARATH.resume.pdf";
import { AiOutlineCloudDownload } from "react-icons/ai";
import { MdOutlineFileDownloadDone } from "react-icons/md";
import { FaGithub } from 'react-icons/fa6';

function HomeContent() {
    const [downloadSuccess, setDownloadSuccess] = useState(false);

    function DownloadSuccessFunc() {
        setDownloadSuccess(true)

        setTimeout(() => {
            setDownloadSuccess(false)

        }, 2000);
    }
    return (
        <section class=" mt-20">
            <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
                <h1 class="mb-4 w-fit mx-auto border px-3 py-2 rounded-md border-gray-700 shadow-xl text-2xl sm:text-4xl font-extrabold tracking-tight leading-none text-gray-200 md:text-5xl lg:text-6xl relative">
                    <div className=" absolute -top-4 right-2 px-3 py-1 rounded-md bg-sky-600 text-white w-fit flex items-center text-[10px] md:text-[12px] justify-center gap-2 font-normal tracking-wide"><FaCode className='text-[10px] md:text-[12px]' />Coder</div>
                    B A R A T H
                </h1>
                <p class="mb-3 text-md font-normal text-gray-500  lg:text-xl sm:px-16 lg:px-48  tracking-wider">an Official <span className='text-white font-[600]'>MERN Stack Developer</span>, Specializing in Develop Website and Webapplication.</p>
                <p class="mb-8 text-[12px] font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 tracking-wider">A Web Developer is in
                 charge of ensuring websites look good and function properly. Web developers collaborate with website and graphic designers, monitor website traffic, troubleshoot website problems when they arise, and update websites as necessary.</p>
                <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 md:px-0 px-5">
                    <Link to='https://github.com/barath211' href="#" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium tracking-wide text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4
                     focus:ring-blue-900">
                        GitHub
                        <FaGithub class="w-3.5 h-3.5 ms-2 rtl:rotate-180"></FaGithub>
                    </Link>
                    <a href={Resume} onClick={() => DownloadSuccessFunc()} download className={`py-3 flex items-center justify-center gap-2 px-5 sm:ms-4 text-sm font-medium  focus:outline-none  tracking-wide rounded-lg border focus:z-10
                     focus:ring-4 focus:ring-gray-100  ${downloadSuccess ? "bg-emerald-600 text-white" : "bg-gray-800 text-gray-400 border-gray-600"}`}>
                        {downloadSuccess ? "Downloaded Successfully" : "Download CV"}
                        {downloadSuccess ? <MdOutlineFileDownloadDone className='text-[1.3rem]' /> : <AiOutlineCloudDownload 
                        className='text-[1.3rem]' />}
                    </a>
                </div>
            </div>
        </section>
    )
}

export default HomeContent
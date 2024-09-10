import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";

function Header() {
  return (
    <div
      className="w-[100%] mx-auto px-5 py-4 shadow-xl flex items-center justify-between selection:bg-transparent"
      id="home"
    >
      <div className="font-[600] text-[1.25rem] text-gray-200">
        <a href="./">Portfolio.</a>
      </div>
      <div className="flex items-center justify-center gap-3">
        <div className="flex items-center justify-center gap-4">
          <Link
            to="https://www.linkedin.com/in/barath-s-560aa1278/"
            title="Shedule a Virtual Meeting"
            className="bg-gray-800 hover:shadow-xl text-white px-3 py-[3px] rounded-md flex items-center gap-1 hover:bg-gray-500"
          >
            <span>Linkedin</span> &nbsp;
            <span>
              <FaLinkedin />
            </span>
          </Link>
          <a
            href="mailto:barath2112000@gmail.com"
            className=" bg-gradient-to-br duration-300 flex items-center gap-1 transition-all hover:from-violet-600
             hover:to-sky-400 from-cyan-600 to-violet-600 text-white px-3 py-[3px] rounded-md"
          >
            <span>Mail</span> &nbsp;
            <span>
              <IoIosMail />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;

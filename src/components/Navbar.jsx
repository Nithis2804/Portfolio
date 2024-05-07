// eslint-disable-next-line no-unused-vars
import React, { useNavigate } from "react";
import GNR from "../assets/GNR.avif";

import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

function Navbar() {
  // const navigate = useNavigate();
  // function handleClick1() {
  //   navigate("https://www.linkedin.com/in/nithisraj/");
  // }
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img src={GNR} alt="GNR" className="mx-2 w-[90px] h-auto" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/nithisraj/"
          target="_blank"
          className="hover:border-[1px] border-gray-400 transition-all duration-100 ease-in-out rounded-sm"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Nithis2804"
          target="_blank"
          className="hover:border-[1px] border-gray-400 transition-all duration-100 ease-in-out rounded-sm"
        >
          <FaGithub />
        </a>
        <a
          href="https://twitter.com/nithis2804"
          target="_blank"
          className="hover:border-[1px] border-gray-400 transition-all duration-100 ease-in-out rounded-sm"
        >
          <FaSquareXTwitter />
        </a>
        <a
          href="https://www.instagram.com/lifestylefactors_nithis/"
          target="_blank"
          className="hover:border-[1px] border-gray-400 transition-all duration-100 ease-in-out rounded-sm"
        >
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;

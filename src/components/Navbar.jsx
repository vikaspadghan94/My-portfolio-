// import React from 'react'
import logo from "../assets/logo.png"
import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {FaSquareXTwitter} from "react-icons/fa6";
import {FaInstagram} from "react-icons/fa";

const Navbar = () => {
  return <nav className=" mb-20 flex items-center justify-between py-6">
    <div className="flex flex-shrink-0 items-center">
        <img className="mx-1 w-32 h-32" src={logo}  alt="logo" />
    </div>
    <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/vikas-padghan/" target="_blank"><FaLinkedin /></a>
        <a href="https://github.com/vikaspadghan94" target="_blank"><FaGithub /></a>
        <a href="https://www.instagram.com/vikas_padghan/" target="_blank"><FaInstagram /></a>
        <a href="https://x.com/vik93306" target="_blank"><FaSquareXTwitter /></a>
    </div>
  </nav>
}

export default Navbar


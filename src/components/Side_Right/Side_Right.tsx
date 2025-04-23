import React, { useEffect } from 'react'
// import "./Side_Right.css"
import { useState } from "react";

import {
  CircleX,
  MoonIcon,
  Menu,
  X,
  SunIcon,
} from "lucide-react";


import { Link } from 'react-router-dom';
import AppRouter from '../../routers/AppRouter';
import { dark } from '@mui/material/styles/createPalette';

const Side_Right = ({ toggleSidebar }) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme"))

  useEffect(() => {
    localStorage.setItem("theme", theme as string);
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const [isOpen, setIsOpen] = useState(false);

  const HandleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <div className="flex flex-col flex-1 overflow-hidden lg:rounded-xl border-white">
      <header className={`flex items-center justify-between  ps-5 py-5 ${theme === 'light' ? 'bg-white , text-black' : 'bg-[#1f1e1f]  , text-white'} `}>

        <div className="left-Header ">
          <div className="flex items-center ">
            <button onClick={toggleSidebar} className="text-gray-500 focus:outline-none lg:hidden cursor-pointer">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 6H20M4 12H20M4 18H11" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                  strokeLinejoin="round"></path>
              </svg>
            </button>
          </div>
        </div>


        <div className="Right-Header relative h-full py-3 ">

          <div className="up absolute flex lg:justify-between justify-end items-center gap-10 md:gap-10 pt-3 right-0 rounded-s-2xl rounded-t-none lg:bg-[#2e2d2fd9] lg:w-150 lg:-mt-8 -mt-6 lg:p-4 px-4">

            {/* Nav */}
            <nav className=" text-white">
              <div className="container flex justify-between items-center gap-5">

                {/* Hamburger Menu */}
                <button
                  className="lg:hidden rounded-md text-white cursor-pointer"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  {isOpen ? <X size={25} color='#6a7282' /> : <Menu size={25} color='#6a7282' />}
                </button>

                {/* Links (Desktop) */}
                <ul className="hidden lg:flex gap-6">
                  <li><Link to="/" className="hover:text-gray-400">Home</Link></li>
                  <li><Link to="about" className="hover:text-gray-400">About</Link></li>
                  <li><Link to="skills" className="hover:text-gray-400">Skills</Link></li>
                  <li><Link to="services" className="hover:text-gray-400">Services</Link></li>
                  <li><Link to="project" className="hover:text-gray-400">Projects</Link></li>
                  <li><Link to="contact" className="hover:text-gray-400">Contact us</Link></li>
                </ul>
              </div>

              {/* Mobile Menu (Opens from Right) */}
              <div
                className={`fixed top-0 right-0 h-full w-64 bg-[#3b393c] z-29 text-white p-6 transform ${isOpen ? "md:translate-x-15 sm:translate-x-25 translate-x-35" : "translate-x-70"
                  } transition-transform duration-400 ease-in-out lg:hidden`}
              >
                <button
                  className="absolute top-3 left-4 text-white cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  <CircleX size={20} />
                </button>
                <ul className="mt-10 flex flex-col gap-6">
                  <li><Link to="/" className="hover:text-gray-400">Home</Link></li>
                  <li><Link to="about" className="hover:text-gray-400">About</Link></li>
                  <li><Link to="skills" className="hover:text-gray-400">Skills</Link></li>
                  <li><Link to="services" className="hover:text-gray-400">Services</Link></li>
                  <li><Link to="project" className="hover:text-gray-400">Projects</Link></li>
                  <li><Link to="contact" className="hover:text-gray-400">Contact us</Link></li>
                </ul>
              </div>
            </nav>


            {/* Theme */}
            <div className="theme">
              <button
                className="rounded-md focus:outline-none focus:shadow-outline-purple cursor-pointer mt-1 "
                onClick={HandleTheme}
                aria-label="Toggle color mode"
              >
                {theme === 'dark' ? (
                  <SunIcon className="w-5 h-5" aria-hidden="true" color='white' />
                ) : (
                  <MoonIcon className="w-5 h-5" aria-hidden="true" color='white' />
                )}
              </button>
            </div>
          </div>

        </div>

      </header >

      <main className={`${theme === 'light' ? 'bg-white , text-black' : 'bg-[#1f1e1f] , text-white'} p-2 flex-1 overflow-x-hide overflow-y-auto `}>
        <div className="container px-6 py-2 mx-auto ">
          <AppRouter />
        </div>
      </main>

    </div>
  );
};

export default Side_Right;
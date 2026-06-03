import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav
      className={`fixed top-0 left-0 z-50 w-full px-6 md:px-20 py-6 transition-colors duration-300 bg-[#f2f1ef]`}
    >
      <div className="container m-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <h1 className="text-red-500 font-semibold text-4xl">✺</h1>
          <h1 className="font-bai font-semibold text-3xl cursor-pointer">deepak.</h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-6 font-bai font-semibold">
          <li className="hover:text-red-500">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-red-500">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:text-red-500">
            <Link to="/skills">Skills</Link>
          </li>
          <li className="hover:text-red-500">
            <Link to="/projects">Projects</Link>
          </li>
          <li className="hover:text-red-500">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        {/* Resume Button */}
        <button className="hidden md:block px-6 py-2 border font-bai font-medium hover:bg-black hover:text-white cursor-pointer transition-all duration-300 ease-in-out hover:scale-110">
          Resume
        </button>

        {/* Mobile Button */}
        <button
          onClick={() => setShowMenu(!showMenu)}
          className={`md:hidden text-2xl px-2 py-1 transition-all duration-300 cursor-pointer
          ${showMenu ? "bg-red-500 text-white" : "bg-black text-white"}`}
        >
          {showMenu ? <FaXmark /> : <FaBars />}
        </button>
      </div>

      {/* MOBILE MENU (SLIDE DOWN) */}
      <div
        className={`md:hidden absolute left-0 w-full bg-white transition-all duration-600 ease-in-out  overflow-hidden shadow-md
        ${showMenu ? "top-full opacity-100 max-h-[400px]" : "top-[-400px] opacity-0 max-h-0"}`}
      >
        <ul className="flex flex-col items-center space-y-6 font-bai font-semibold py-8">
          <li className="hover:text-red-500" onClick={() => setShowMenu(false)}>
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-red-500" onClick={() => setShowMenu(false)}>
            <Link to="/about">About</Link>
          </li>
          <li className="hover:text-red-500" onClick={() => setShowMenu(false)}>
            <Link to="/skills">Skills</Link>
          </li>
          <li className="hover:text-red-500" onClick={() => setShowMenu(false)}>
            <Link to="/projects">Projects</Link>
          </li>
          <li className="hover:text-red-500" onClick={() => setShowMenu(false)}>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        <div className="flex justify-center pb-6">
          <button className="border px-4 py-2 font-bai hover:bg-black hover:text-white cursor-pointer">
            Resume
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

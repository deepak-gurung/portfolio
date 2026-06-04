import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const navItems = [
    { to: "home", label: "Home" },
    { to: "about", label: "About" },
    { to: "skills", label: "Skills" },
    { to: "projects", label: "Projects" },
    { to: "contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 z-50 w-full px-6 md:px-20 py-6 bg-[#f2f1ef]">
      <div className="container m-auto flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-3xl font-bold cursor-pointer"><span className="text-red-500 font-semibold text-3xl">✺ </span>deepak.</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 font-semibold">
          {navItems.map((item) => (
            <li key={item.to} className="cursor-pointer hover:text-red-500">
              <ScrollLink
                to={item.to}
                smooth={true}
                duration={500}
                offset={-80}
              >
                {item.label}
              </ScrollLink>
            </li>
          ))}
        </ul>

        {/* Resume */}
        <button className="hidden md:block border px-4 py-2 hover:bg-black hover:text-white cursor-pointer">
          Resume
        </button>

        {/* Mobile toggle */}
        <button onClick={() => setShowMenu(!showMenu)} className="md:hidden cursor-pointer">
          {showMenu ? <FaXmark /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute left-0 w-full bg-white transition-all duration-300 overflow-hidden ${
          showMenu
            ? "top-full opacity-100 max-h-[400px]"
            : "top-[-400px] opacity-0 max-h-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-6 py-8 font-semibold">
          {navItems.map((item) => (
            <li key={item.to}>
              <ScrollLink
                to={item.to}
                smooth={true}
                duration={500}
                offset={-80}
                onClick={() => setShowMenu(false)}
              >
                {item.label}
              </ScrollLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

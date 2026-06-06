import React from "react";
import { FaGithub, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#111] text-gray-300 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold text-white">Deepak Gurung</h2>
          <p className="text-sm">MERN Stack Developer</p>
        </div>

        {/* Links */}
        <div className="flex gap-5 text-sm">
          <a href="#home" className="hover:text-white">
            Home
          </a>
          <a href="#about" className="hover:text-white">
            About
          </a>
          <a href="#projects" className="hover:text-white">
            Projects
          </a>
          <a href="#contact" className="hover:text-white">
            Contact
          </a>
        </div>

        {/* Social */}
        <div className="flex gap-4 text-lg">
          <a href="https://github.com/deepak-gurung" target="_blank" rel="noreferrer">
            <FaGithub className="hover:text-white" />
          </a>
          <a href="https://www.linkedin.com/in/deepak-gurung-7971a02b2/" target="_blank" rel="noreferrer">
            <FaLinkedin className="hover:text-blue-400" />
          </a>
          <a href="https://www.facebook.com/deepak.ghotaney.gurung.2025" target="_blank" rel="noreferrer">
            <FaFacebook className="hover:text-blue-500" />
          </a>
          <a href="https://www.instagram.com/_deepakgurung_/" target="_blank" rel="noreferrer">
            <FaInstagram className="hover:text-pink-400" />
          </a>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-gray-500 text-xs mt-6">
        © {new Date().getFullYear()} All rights reserved
      </div>
    </footer>
  );
};

export default Footer;

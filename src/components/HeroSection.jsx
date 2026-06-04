import React from "react";
import heroimg from "../assets/dd.jpeg";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="bg-[#f2f1ef] min-h-screen flex items-center pt-30 pb-14"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          {/* Left */}
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-5xl md:text-7xl font-semibold">
              Hi, I'm Deepak.
            </h1>

            <h2 className="text-2xl text-red-500 md:text-4xl font-semibold mt-4">
              Full-Stack Developer ✺
            </h2>

            <p className="text-gray-600 mt-6 max-w-xl">
              I build modern web apps using MERN stack.
            </p>

            {/* Buttons */}
            <div className="flex gap-4 mt-8">
              <ScrollLink
                to="projects"
                smooth={true}
                duration={500}
                offset={-80}
                className="px-6 py-3 bg-black text-white cursor-pointer"
              >
                View Projects
              </ScrollLink>

              <ScrollLink
                to="contact"
                smooth={true}
                duration={500}
                offset={-80}
                className="px-6 py-3 border cursor-pointer"
              >
                Contact Me
              </ScrollLink>
            </div>

            {/* Social Links (external) */}
            <div className="flex gap-4 mt-8">
              <a href="https://facebook.com" target="_blank">
                <FaFacebook className="w-10 h-10 p-2 border rounded-full" />
              </a>

              <a href="https://instagram.com" target="_blank">
                <FaInstagram className="w-10 h-10 p-2 border rounded-full" />
              </a>

              <a href="https://linkedin.com" target="_blank">
                <FaLinkedin className="w-10 h-10 p-2 border rounded-full" />
              </a>

              <a href="https://github.com" target="_blank">
                <FaGithub className="w-10 h-10 p-2 border rounded-full" />
              </a>
            </div>
          </div>

          {/* Right */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src={heroimg}
              className="w-80 h-80 rounded-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

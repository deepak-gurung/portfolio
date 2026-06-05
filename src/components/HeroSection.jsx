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
              I build modern, responsive, and scalable web applications using
              MongoDB, Express.js, React, and Node.js. Passionate about creating
              clean UI and seamless user experiences.
            </p>

            {/* Buttons */}
            <div className="flex items-center justify-center md:items-start md:justify-start gap-4 mt-8">
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
            <div className="flex items-center justify-center md:items-start md:justify-start gap-4 mt-8">
              <a href="https://www.facebook.com/deepak.ghotaney.gurung.2025" target="_blank">
                <FaFacebook className="w-10 h-10 p-2 border rounded-full" />
              </a>

              <a href="https://www.instagram.com/_deepakgurung_/" target="_blank">
                <FaInstagram className="w-10 h-10 p-2 border rounded-full" />
              </a>

              <a href="https://www.linkedin.com/in/deepak-gurung-7971a02b2/" target="_blank">
                <FaLinkedin className="w-10 h-10 p-2 border rounded-full" />
              </a>

              <a href="https://github.com/deepak-gurung" target="_blank">
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

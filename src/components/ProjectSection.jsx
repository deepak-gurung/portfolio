import React from "react";
import project1 from "../assets/project1.png";
import { FaChrome, FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "GlobeSprint Travel Website",
    desc: "A modern travel agency website built with React.js for booking trips and exploring destinations.",
    image: project1,
    github: "https://github.com/deepak-gurung/globesprint",
    live: "https://globesprint-app.netlify.app/",
    tech: ["React", "Tailwind"],
  },
  {
    title: "Project Two",
    desc: "Another responsive web application built using modern frontend tools.",
    image: project1,
    github: "https://github.com/deepak-gurung/globesprint",
    live: "https://globesprint-app.netlify.app/",
    tech: ["React", "Tailwind"],
  },
  {
    title: "Project Three",
    desc: "A clean and responsive UI project with modern design principles.",
    image: project1,
    github: "https://github.com/deepak-gurung/globesprint",
    live: "https://globesprint-app.netlify.app/",
    tech: ["React", "Tailwind"],
  },
];

const ProjectSection = () => {
  return (
    <section
      id="projects"
      className="bg-gray-200 py-20 px-6 md:px-14"
    >
      {/* Title */}
      <h1 className="text-4xl md:text-6xl font-bold text-center mb-4">
        Featured Projects
      </h1>

      <hr className="w-24 border-2 border-orange-500 mx-auto mb-14" />

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
          >
            {/* Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-52 object-cover object-center"
            />

            {/* Content */}
            <div className="p-5 flex flex-col gap-3">
              <h2 className="text-xl font-semibold">
                {project.title}
              </h2>

              <p className="text-gray-600 text-sm leading-relaxed">
                {project.desc}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs bg-gradient-to-r from-orange-400 to-red-500 text-white rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4 pt-2">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-2 border rounded-lg hover:bg-gray-900 hover:text-white transition-all duration-300"
                  >
                    <FaGithub /> Code
                  </a>
                )}

                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-2 border rounded-lg hover:bg-orange-500 hover:text-white transition-all duration-300"
                  >
                    <FaChrome /> Live
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
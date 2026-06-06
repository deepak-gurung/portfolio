import React from "react";
import html from "../assets/html5.svg";
import css from "../assets/css_old.svg";
import javascript from "../assets/javascript.svg";
import react from "../assets/react_light.svg";
import node from "../assets/nodejs.svg";
import express from "../assets/expressjs.svg";
import mongodb from "../assets/mongodb-icon-light.svg";
import tailwind from "../assets/tailwindcss-wordmark.svg";
import nextjs from "../assets/nextjs_logo_light.svg";
import typescript from "../assets/typescript.svg";
import postman from "../assets/postman.svg";
import redux from "../assets/redux.svg";
import docker from "../assets/docker.svg";

const SkillsSection = () => {
  const skills = [
    { name: "HTML", img: html },
    { name: "CSS", img: css },
    { name: "JavaScript", img: javascript },
    { name: "React", img: react },
    { name: "Node.js", img: node },
    { name: "Express", img: express },
    { name: "MongoDB", img: mongodb },
    { name: "Tailwind", img: tailwind },
    { name: "Next.js", img: nextjs },
    { name: "TypeScript", img: typescript },
    { name: "Postman", img: postman },
    { name: "Redux", img: redux },
    { name: "Docker", img: docker },
  ];

  return (
    <section
      id="skills"
      className="bg-[#f2f1ef] py-18 px-6 lg:px-20"
    >
      <div className="container mx-auto text-center">

        <h2 className="text-4xl font-bold text-gray-800">
          My Skills
        </h2>

        <div className="w-24 h-1 bg-orange-500 mx-auto mt-3 mb-10"></div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center justify-center hover:scale-105 transition-all duration-300"
            >
              <img
                src={skill.img}
                alt={skill.name}
                className="h-16 w-16 object-contain"
              />
              <h3 className="mt-3 text-black font-semibold">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SkillsSection;
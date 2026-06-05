import React from "react";
import aboutimg1 from "../assets/pp.jpeg";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="scroll-mt-24 bg-gray-200 flex items-center py-16"
    >
      <div className="container mx-auto px-6 lg:px-20">
        
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Image */}
          <div className="flex justify-center w-full lg:w-auto">
            <img
              src={aboutimg1}
              alt="Deepak Gurung"
              className="h-[320px] w-[320px] md:h-[400px] md:w-[400px] object-cover rounded-2xl shadow-lg"
            />
          </div>

          {/* Content */}
          <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
            
            <h2 className="text-3xl font-bold text-gray-800">
              About Me
            </h2>

            <div className="w-24 h-1 bg-orange-500 rounded-full mb-2"></div>

            {/* Intro */}
            <p className="text-gray-700 leading-8 text-lg">
              Hello! I'm <span className="font-semibold">Deepak Gurung</span>{" "}
              from Ghorahi, Dang, Nepal. I am a passionate MERN Stack Developer
              who enjoys building modern, responsive, and user-friendly web
              applications.
            </p>

            <p className="text-gray-700 leading-8 text-lg mt-2">
              I love turning ideas into real-world projects and continuously
              improving my development skills through practice and learning new
              technologies.
            </p>

            {/* Education */}
            <div className="mt-2 w-full">
              
              <h3 className="text-xl font-semibold text-gray-800">
                Education
              </h3>

              <div className="w-20 h-1 bg-orange-500 rounded-full mb-2 mx-auto lg:mx-0"></div>

              <div className="space-y-2 text-gray-700 text-lg">
                
                <div>
                  <p className="font-semibold">School (Class 10)</p>
                  <p>Janajyoti Vidyamandir School</p>
                </div>

                <div>
                  <p className="font-semibold">High School (+2)</p>
                  <p>Gorkha International Public Secondary School</p>
                </div>

                <div>
                  <p className="font-semibold">Bachelor’s (BEIT)</p>
                  <p>NCIT (Nepal College of Information Technology)</p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
import React from "react";
import { CgMail } from "react-icons/cg";
import { FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMail, IoPerson } from "react-icons/io5";

const ContactSection = () => {
  return (
    <section id="contact" className="bg-[#f2f1ef] py-20 px-6 md:px-12">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-2">
          Contact Me
        </h1>
        <hr className="w-[120px] border-2 border-orange-500 mb-14" />

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full items-center">
          {/* Left Side */}
          <div className="flex flex-col gap-6 justify-center items-center md:items-start">
            <div className="flex items-center gap-4 md:pl-45">
              <div className="p-3 bg-green-600 text-white rounded-full">
                <FaPhone />
              </div>
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p className="text-gray-600">+977 9843734500</p>
              </div>
            </div>

            <div className="flex items-center gap-4 pl-20 md:pl-45">
              <div className="p-3 bg-green-600 text-white rounded-full">
                <CgMail />
              </div>
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-gray-600">deepakgurung459@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4 pl-3 md:pl-45">
              <div className="p-3 bg-green-600 text-white rounded-full">
                <FaLocationDot />
              </div>
              <div>
                <h3 className="font-semibold">Location</h3>
                <p className="text-gray-600">Ghorahi, Dang, Nepal</p>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <form className="flex flex-col gap-4 bg-white p-6 rounded-xl shadow-md w-full">
            <div className="flex items-center bg-gray-100 px-4 py-3 rounded-lg gap-2">
              <IoPerson className="text-gray-500" />
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-transparent outline-none"
              />
            </div>

            <div className="flex items-center bg-gray-100 px-4 py-3 rounded-lg gap-2">
              <IoMail className="text-gray-500" />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-transparent outline-none"
              />
            </div>

            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full bg-gray-100 px-4 py-3 rounded-lg outline-none resize-none"
            ></textarea>

            <button className="bg-green-700 text-white py-3 rounded-lg transition cursor-pointer hover:bg-green-800">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

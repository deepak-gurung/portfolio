import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import SkillsSection from "../components/SkillsSection";


const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
    </div>
  );
};

export default Home;
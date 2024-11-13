import React from "react";
import HeroSection from "../Components/HeroSection/HeroSection";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import Features1 from "../Components/Features/Features1";
import Education from "../Components/Education/Education";
import Projects from '../Components/Projects/Projects';
import Experience from "../Components/Experience/Experience";
import ScrollToTopButton from '../Components/ScrollToUp/ScrollToUp';
function ProvideRouter() {
  return (
    <>
      <Header />

<ScrollToTopButton/>
<section id="about">
      <HeroSection /></section>
      <section id="work">
      <Features1 /></section>
      <section id="education">
        <Education />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <Footer />
    </>
  );
}

export default ProvideRouter;

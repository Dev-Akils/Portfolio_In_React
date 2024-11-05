import React from "react";
import HeroSection from "../Components/HeroSection/HeroSection";
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import Features1 from "../Components/Features/Features1";
import Education from "../Components/Education/Education";
function ProvideRouter() {
  return (
    <>
      <Header />

      <HeroSection />
      <Features1/>
<Education/>
      <Footer />
    </>
  );
}

export default ProvideRouter;

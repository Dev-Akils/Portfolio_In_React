import React from "react";
import hero from "../../assets/heroback.webp";
import heroimg from "../../assets/heroimg1.webp";
function HeroSection() {
  return (
    <>
      <div className="w-full h-auto">
        <section
          className="relative h-64 sm:h-80 lg:h-96 bg-gray-100 bg-cover bg-center mb-5"
          // style={{ backgroundImage: `url(${hero})` }}
        >
          {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}

          <div className="relative flex flex-col md:flex-row items-center justify-center h-full mx-auto max-w-screen-xl px-6 md:px-10">
            <div className="flex flex-col items-center justify-center text-center md:text-left md:w-1/2 space-y-4">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-darkPurple to-purple-400 text-transparent bg-clip-text sm:text-4xl lg:text-5xl">
                Hi! All...
                <br />
                I'm a React JS Developer
              </h2>
              <div className="space-y-4 mx-5  self-center md:self-start">
              <button className="bg-gradient-to-l from-darkPurple to-purple-300 p-2 text-white rounded-lg">
                My Resume
              </button>
              </div>
            </div>

            <div className="flex p-2 items-center justify-center mt-6 md:mt-0 md:w-1/2 h-full overflow-hidden">
              <img
                src={heroimg}
                className="w-full h-full object-cover z-30"
                alt="Hero"
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default HeroSection;

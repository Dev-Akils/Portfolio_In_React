import React from "react";
import hero from "../../assets/heroback.webp";
import heroimg from "../../assets/heroimg1.webp";
function HeroSection() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/AKILA. S.pdf";  // Ensure the PDF file is in the public folder
    link.download = "AKILA. S.pdf";  // Specify the downloaded file name
    link.click(); // Trigger the download
  };

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
                I'm Akila,Working as a React JS Developer.
              </h2>
              <div className="flex gap-5 self-center md:self-start">
              <div>
                <button
                  // onClick={handleDownload}
                  className="bg-gradient-to-l from-darkPurple to-purple-300 p-2 text-white rounded-lg inline-block text-center"
                >
                 <a href="https://www.naukri.com/mnjuser/homepage"> My Profile</a>
                </button>
                </div>
                <div>
                <button
                   onClick={handleDownload}
                  className="bg-gradient-to-l from-darkPurple to-purple-300 p-2 text-white rounded-lg inline-block text-center"
                >
                  My Resume
                </button>
                </div>
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

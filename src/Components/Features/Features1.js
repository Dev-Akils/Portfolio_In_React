import React from "react";
// import fullstackdev from "../../assets/Full-Stack-Developer.jpg";
// import devwomen from '../../assets/devworking.jpg'  c:\Users\Dell\Downloads\view-3d-woman-using-laptop.jpg
import devwomen from "../../assets/view-3d-woman-using-laptop.jpg";
import one from "../../assets/html1.png";
import two from "../../assets/css1.png";
// import three from '../../assets/js.webp';
import three from "../../assets/js1.jpg";
import four from "../../assets/react.jpg";
import five from "../../assets/tailwind.jpg";
import six from "../../assets/bootstrap.jpg";
function Features1() {
  return (
    <>
      <div className="mx-10 container max-w-screen-lg w-full justify-center text-center items-center">
        <h2 className="font-bold text-3xl py-4">What I do?</h2>
        <p className="text-lg py-4">
          CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK.
        </p>
      </div>
      <div className="mx-10 w-full justify-center text-center gap-5 items-start py-3 flex xs:flex-row md:flex-row flex-col overflow-hidden">
        <div className="md:w-1/2 p-3 xs:w-1/2 w-full">
          <img src={devwomen} alt="Dev Woman" className="w-full h-auto" />
        </div>
        <div className="md:w-1/2 xs:w-1/2 p-3 w-full flex flex-col justify-start items-start">
          <p className="py-3">
            ⚡ Building responsive Single-Page-Apps (SPA) in React.js
          </p>
          <p className="py-3">
            ⚡ Building responsive static websites using Next.js
          </p>
          <p className="py-3">
            ⚡ Using Tailwind CSS and Bootstrap for Designing Purpose.
          </p>
          <h2 className="font-bold text-3xl py-3">TECH STACK</h2>
          <div className="gap-3 grid md:grid-cols-3 xs:grid-cols-3 grid-cols-2">
            <div className="w-[200px] h-[200px] p-2">
              <img
                src={one}
                className="w-full h-full object-cover rounded-full"
                alt="Image 1"
              />
            </div>
            <div className="w-[200px] h-[200px] p-2">
              <img
                src={two}
                className="w-full h-full object-cover rounded-full"
                alt="Image 2"
              />
            </div>
            <div className="w-[200px] h-[200px] p-2">
              <img
                src={three}
                className="w-full h-full object-cover rounded-full"
                alt="Image 3"
              />
            </div>
            <div className="w-[200px] h-[200px] p-2">
              <img
                src={four}
                className="w-full h-full object-cover rounded-full"
                alt="Image 4"
              />
            </div>
            <div className="w-[200px] h-[200px] p-2">
              <img
                src={five}
                className="w-full h-full object-cover rounded-full"
                alt="Image 5"
              />
            </div>
            <div className="w-[200px] h-[200px] p-2">
              <img
                src={six}
                className="w-full h-full object-cover rounded-full"
                alt="Image 6"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Features1;

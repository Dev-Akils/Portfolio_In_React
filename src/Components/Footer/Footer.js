import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-scroll";
import contact from '../../assets/contact.webp';
import UseAnimations from "react-useanimations";
import linkedin from 'react-useanimations/lib/linkedin';
import facebook from 'react-useanimations/lib/facebook';
import instagram from 'react-useanimations/lib/instagram'

function Footer() {
  return (
  
    <>
      <div className="w-full h-auto  bg-darkPurple text-[#fff]">
        <div className="mx-10 my-5 p-14 m-5  grid grid-cols-1 md:grid-cols-3 gap-5 ">
          <div>
            <Link
              to="about"
              smooth={true}
              duration={500}
              spy={true}
              offset={-70}
            >
              <h2 className="text-xl font-bold py-2 hover:underline"> Reach Out to me!</h2>
            </Link>
            <div className="flex space-x-4 py-5">
              <a
                href="https://facebook.com/gethu_akil"
                className="bg-blue-600 p-2 rounded-full hover:bg-blue-700"
              >
                  <UseAnimations animation={facebook} size={40} />
              </a>
              <a
                href="https://linkedin.com/in/akila-s-02a8ab244"
                className="bg-blue-400 p-2 rounded-full hover:bg-blue-500"
              >
                <UseAnimations animation={linkedin} size={40} />
              </a>
              <a
                href="https://www.instagram.com/gethu_akil/profilecard/?igsh=ZGZxdjVpaG5qNWE="
                className="bg-pink-600 p-2 rounded-full hover:bg-pink-700"
              >
                  <UseAnimations animation={instagram} size={40} />
              </a>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-bold">Quick Links</h2>
            <ul className="py-5">
              <Link to="about">
                <li className="hover:text-[18px] text-[17px] font-medium hover:font-bold py-2 cursor-pointer">About Me</li>
              </Link>
              <Link
                to="work"
                smooth={true}
                duration={500}
                spy={true}
                offset={-70}
              >
                <li className="hover:text-[18px] text-[17px] font-medium hover:font-bold py-2 cursor-pointer">My Work</li>
              </Link>

              <Link
                to="projects"
                smooth={true}
                duration={500}
                spy={true}
                offset={-70}
              >
                <li className="hover:text-[18px] text-[17px] font-medium hover:font-bold py-2 cursor-pointer">My Projects</li>
              </Link>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="justify-center flex items-center ">
            
           <img src={contact} className="rounded-full" />
          </div>

          <div></div>
        </div>

        {/* bottom */}

        <div className="flex  justify-center p-5 my-5 border-t border-[#fff]">
          <p>
            <span className="text-white font-bold">2024 </span>©{" "}
            {new Date().getFullYear} Akils Portfolio. All Rights Reserved.{" "}
          </p>
        </div>
      </div>
    </>)
  
}

export default Footer;

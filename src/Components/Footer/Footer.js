import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-scroll";
import contact from '../../assets/contact.webp';
function Footer() {
  return (
  
    <>
      <div className="w-full h-auto  bg-darkPurple text-[#fff]">
        <div className="mx-10 my-5 p-5 m-2  grid grid-cols-1 md:grid-cols-3 gap-5 ">
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
                href="https://facebook.com"
                className="bg-blue-600 p-2 rounded-full hover:bg-blue-700"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://twitter.com"
                className="bg-blue-400 p-2 rounded-full hover:bg-blue-500"
              >
                <FaTwitter />
              </a>
              <a
                href="https://instagram.com"
                className="bg-pink-600 p-2 rounded-full hover:bg-pink-700"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-bold">Quick Links</h2>
            <ul className="py-5">
              <Link to="#">
                <li className="hover:underline py-2">About</li>
              </Link>
              <Link
                to="my-creation"
                smooth={true}
                duration={500}
                spy={true}
                offset={-70}
              >
                <li className="hover:underline py-2">Features</li>
              </Link>

              <Link
                to="contact"
                smooth={true}
                duration={500}
                spy={true}
                offset={-70}
              >
                <li className="hover:underline py-2">Projects</li>
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
            {new Date().getFullYear} Sports Club. All Rights Reserved.{" "}
          </p>
        </div>
      </div>
    </>)
  
}

export default Footer;

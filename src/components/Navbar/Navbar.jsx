import React, { useEffect } from "react";
import "./Navbar.css";
import { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
// import { useLocation } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { auth } from "../../firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [user] = useAuthState(auth);

  const location = useLocation();
  const help = location.state;

  const clickButton = () => {
    document.getElementById("contactUs").click();
  };
  useEffect(() => {
    if (help) {
      clickButton();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <nav className="w-full bg-transparent fixed !h-16 top-0 glass ">
      <div className="justify-between px-4 mx-auto lg:max-w-8xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:block ">
            <a href="/">
              <h1 className="text-2xl md:text-3xl xl:text-4xl font-bold tracking-tight text-white ">
                Ezzy<span className="text-primary">Split</span>
              </h1>
            </a>
            <div className="md:hidden glass">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {/* navbar == true -> display the nav links and so cross icon is shown to close them */}
                {navbar ? (
                  <img
                    h-2
                    src="./images/maki_cross.svg"
                    alt="hamburger-1"
                  ></img>
                ) : (
                  <img src="./images/hamburger.svg" alt="hamburger-2"></img>
                )}
              </button>
            </div>
          </div>
        </div>
        <div className="hamburger">
          <div
            // className={navbar ? "hidden" : "block"}
            className={` flex-1 justify-self-center pb-5 pt-5  md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul
              className="items-center justify-center space-y-8
            md:flex md:space-x-6 md:space-y-0"
            >
              <li className="p-2 space-x-8 text-gray-300 h-10  rounded-md hover:text-primary hover:font-bold cursor-pointer">
                <Link
                  activeClass="active"
                  to="Hero"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                >
                  Home
                </Link>
              </li>
              <li className="p-2  text-gray-300 h-10 hover:text-primary hover:font-bold cursor-pointer">
                <Link
                  activeClass="active"
                  to="Feature"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                >
                  Features
                </Link>
              </li>
              <li className="p-2 space-x-8 text-gray-300  h-10 hover:text-primary hover:font-bold cursor-pointer">
                <Link
                  activeClass="active"
                  to="Contact"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={1000}
                  id="contactUs"
                >
                  Contact Us
                </Link>
              </li>
              <li className="p-2 space-x-8 text-gray-300  h-10 hover:text-primary hover:font-bold cursor-pointer">
                <a href="/team">Our Team</a>
              </li>
              {!user && (
                <li>
                  <a
                    href="/login"
                    className="inline-block rounded-md  px-6 outline-1 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-indigo-600 hover:bg-indigo-700 hover:ring-indigo-700"
                  >
                    LogIn
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

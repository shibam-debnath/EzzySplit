import React from "react";
const Footer = () => {
  
  
  return (
    <footer className="bg-footerColor pt-20">
      <div className="w-full">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-2 lg:grid-cols-4 text-center">
          <div>
            <h3 className="mb-6  font-semibold  uppercase text-white">
              Company
            </h3>
            <ul className="text-gray-500 dark:text-gray-400">
              <li className="mb-2">
                <a href="/team" className=" hover:text-gray-300">
                 Teams
                </a>
              </li>
              <li className="mb-2">
                <a href="/" className="hover:text-gray-300">
              About
                </a>
              </li>
              <li className="mb-2">
                <a href="/" className="hover:text-gray-300">
                  Brand Center
                </a>
              </li>
              <li className="mb-2">
                <a href="/" className="hover:text-gray-300">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-6  font-semibold text-white uppercase ">
              Help center
            </h3>
            <ul className="text-gray-500 dark:text-gray-400">
              <li className="mb-2">
                <a href="/" className="hover:text-gray-300">
                  Discord Server
                </a>
              </li>
              <li className="mb-2">
                <a href="/" className="hover:text-gray-300">
                  Twitter
                </a>
              </li>
              <li className="mb-2">
                <a href="/" className="hover:text-gray-300">
                  Facebook
                </a>
              </li>
              <li className="mb-3">
                <a href="/" className="hover:text-gray-300">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-6  font-semibold text-white uppercase ">Legal</h3>
            <ul className="text-gray-500 dark:text-gray-400">
              <li className="mb-2">
                <a href="/" className="hover:text-gray-300">
                  Privacy Policy
                </a>
              </li>

              <li className="mb-2">
                <a href="/" className="hover:text-gray-300">
                  Terms
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-6 font-semibold text-white uppercase ">
              Use Case
            </h3>
            <ul className="text-gray-500 dark:text-gray-400">
              <li className="mb-2">
                <a href="/" className="hover:text-gray-300">
                  Holidays & weekends
                </a>
              </li>
              <li className="mb-2">
                <a href="/" className="hover:text-gray-300">
                  Shared house
                </a>
              </li>
              <li className="mb-2">
                <a href="/" className="hover:text-gray-300">
                  Bachelor party
                </a>
              </li>
              <li className="mb-2">
                <a href="/" className="hover:text-gray-300">
                  other
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-4">
          <ul className="flex justify-center space-x-5">
            <li className="hover:scale-[1.5]">
              <a href="/">
                <img src="./images/facebook.svg" alt=" " className="h-8 "></img>
              </a>
            </li>
            <li className="hover:scale-[1.5]">
              <a href="/">
                <img src="./images/twitter.svg" alt=" " className="h-8"></img>
              </a>
            </li>
            <li className="hover:scale-[1.5]">
              <a href="/">
                <img
                  src="./images/instagram.svg"
                  alt=" "
                  className="h-8 "
                ></img>
              </a>
            </li>
          </ul>
        </div>
        <div className="text-center  mt-6">
          <a
            href="/"
            className="flex items-center justify-center mb-5 text-2xl font-semibold  text-gray-500"
          >
            <img
              src="./images/logo.jpg"
              className="h-6 mr-3 sm:h-9"
              alt="EzzySplit Logo"
            />
            EzzySplit
          </a>
          <span className="block pb-6 text-sm text-center text-gray-500 dark:text-gray-400">
            © 2022 EzzySplit™. All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

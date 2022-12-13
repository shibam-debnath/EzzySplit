import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <div className="flex p-2 bg-gray-900 justify-between ">
        <div className="p-4">
          <div className="flex justify-between gap-2">
            <a href="/">
              <h1 className="text-2xl md:text-3xl xl:text-4xl font-bold tracking-tight text-white mb-8">
                Ezzy
                <span className="text-primary">Split</span>
              </h1>
            </a>
          </div>
        </div>

        <div className="p-4 mx-4">
          <a
            href="/login"
            class="inline-block rounded-md  px-6 outline-1 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-indigo-600 hover:bg-indigo-700 hover:ring-indigo-700"
          >
            LogIn
          </a>
          <a
            href="/signup"
            class="inline-block rounded-lg px-4 py-1.5 text-base font-semibold leading-7 text-white "
          >
            SignUp
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

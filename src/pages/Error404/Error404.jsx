import React from "react";

const Error404 = () => {
  return (
    <div className="bg-primary !h-screen md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
      <div className=" w-full xl:w-1/2 relative ">
        <div className="flex flex-col">
          <div className="flex items-center justify-center">
            <img src="./images/404-2.png" alt="404" />
          </div>
          <div className="">
            <div className="">
              <h1 className="my-2 text-gray-800 font-bold text-2xl">
                Looks like you've found the doorway to the great nothing
              </h1>
            </div>
          </div>
          <div className="mt-10">
            <a
              href="/"
              className="mt-10 sm:w-full lg:w-auto my-2 border rounded md py-4 px-8 text-center bg-white text-primary hover:bg-gray-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50"
            >
              Take me there!
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error404;

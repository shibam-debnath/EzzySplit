import React from "react";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <div id="Hero">
      <section >
        <div className=" px-6 py-12 lg:my-0 md:px-12 text-gray-800 text-center lg:text-left">
          <div className="container mx-auto xl:px-32">
            <div className="lg:flex justify-between items-center  sm:flex-row">
              <div className="my-10">
                <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold tracking-tight text-white mt-16 mb-16">
                  Split bills <br />
                  <span>easily among</span>
                  {/* <span className="text-primary">among</span> */}
                  <span className="text-primary">
                    <Typewriter
                      options={{
                        autoStart:true,
                        loop:true,
                        delay:100,
                        strings:[
                          "friends",
                          "roommates",
                          "neighbours"
                        ],
                      }} />
                    </span>
                </h1>
                <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-lg dark:text-gray-400">
                  Make sharing expenses simple for travel, activities and daily
                  life.
                </p>
                <a
                  href="/login"
                  className="items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center bg-primary text-white hover:bg-transparent hover:outline rounded-lg"
                >
                  Get started
                </a>
              </div>
              <div className="grid place-items-center max-sm:hidden mt-10">
                <img
                  className=""
                  src="./images/hero-img.svg"
                  alt="React Logo"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;

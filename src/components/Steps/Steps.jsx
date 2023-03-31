import React, { useState, useEffect } from "react";
import StepL from "./StepL";
import StepR from "./StepR";
import ArrSteps from "./ArrSteps";
import './Steps.css';

const Steps = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Function to handle scrolling
  function handleScroll() {
    if (window.scrollY > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
    // setIsVisible(false);
  }

  // Add event listener to window on mount
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className={`animated  ${isVisible ? "bounceIn" : "fadeOutDown"}`}>
        <div className="w-full bg-transparent">
          <div className="w-5/6 m-auto my-0 py-0 ">
            <div>
              <p className="text-2xl md:text-3xl xl:text-4xl font-semibold tracking-wide text-white mt-0 pt-14 pb-10 px-3">
                Ezzy
                <span className="text-primary">Split </span>
                in 3 easy steps
              </p>
            </div>
            {ArrSteps.map((ele, id) => {
              if (id % 2 === 0) {
                return (
                  <StepL
                    img={ele.img}
                    step={ele.step}
                    heading={ele.heading}
                    step1={ele.step1}
                    step2={ele.step2}
                    step3={ele.step3}
                  />
                );
              } else {
                return (
                  <StepR
                    img={ele.img}
                    step={ele.step}
                    heading={ele.heading}
                    step1={ele.step1}
                    step2={ele.step2}
                    step3={ele.step3}
                  />
                );
              }
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Steps;

import React from "react";
import Left from "./DashComp/LeftSection/Left";
import Mid from "./DashComp/MidSection/Mid";
import Right from "./DashComp/RightSection/Right";

const DashBoard = () => {
  return (
    <>
      <div className=" bg-purple-200">
        <div className="bg-amber-200 w-[98%] m-auto flex">
          {/* left section */}
          <div className="bg-slate-300 w-[20%] text-left">
            <Left />
          </div>
          {/* mid+right */}
          <div className="bg-red-300 w-[80%]">
            <div className="bg-green-200 w-[96%] m-auto flex justify-between">
              {/* mid */}
              <div className="bg-blue-200 w-[69%]">
                <Mid />
              </div>
              {/* right */}
              <div className="bg-emerald-300 w-[29%]">
                <Right />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoard;

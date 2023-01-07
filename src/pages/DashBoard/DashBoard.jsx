import React from "react";
import DashBoardContent from "../../components/DashBoardContent/DashBoardContent";
import RightSideNav from "../../components/RightSideNav/RightSideNav";
import SideNav from "../../components/Sidenav/SideNav";

const DashBoard = () => {
  return (
    <>
      <SideNav />
      <div className="ml-64 flex space-between">
        <div className="bg-gray-300 min-h-screen w-full  ">
          <DashBoardContent />
        </div>
        <div className=" w-1/3 bg-primary text-left">
          <RightSideNav />
        </div>
      </div>
    </>
  );
};

export default DashBoard;

import React from "react";
import { Outlet } from "react-router-dom";
// import DashBoardContent from "../../components/DashBoardContent/DashBoardContent";
import SideNav from "../../components/Sidenav/SideNav";
import RightSideNav from "../../components/RightSideNav/RightSideNav";
import TopNav from "../../components/TopNav/TopNav";

const DashBoard = () => {
  return (
    <>
      <div className="flex flex-row">
        <div className=" bg-primary text-left">
          <SideNav />
        </div>
        <div className="w-full">
          <div>
            <TopNav />
          </div>
          <div className="flex flex-row">
            <div className="bg-gray-300 min-h-screen w-full  ">
              {/* <DashBoardContent /> */}
              <Outlet />
            </div>
            <div className=" w-1/3 bg-primary text-left">
              <RightSideNav />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoard;

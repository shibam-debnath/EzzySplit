import React from "react";
import { Outlet } from "react-router-dom";
import SideNav from "../../components/Sidenav/SideNav";
import TopNav from "../../components/TopNav/TopNav";

const DashBoard = () => {
  return (
    <>
      <div className="flex flex-row">
        <div className=" bg-white text-left">
          <SideNav />
        </div>
        <div className="bg-gray-200 w-full">
          <div>
            <TopNav />
          </div>
          <div className="flex flex-row">
            <div className="bg-gray-200 min-h-screen w-full  ">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoard;

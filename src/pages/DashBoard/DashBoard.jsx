import React from "react";
import { Outlet } from "react-router-dom";
import SideNav from "../../components/Sidenav/SideNav";
import TopNav from "../../components/TopNav/TopNav";

const DashBoard = () => {
  return (
    <>
      <div className="flex flex-row">
        <div className="fixed bg-white text-left h-full">
          <SideNav />
        </div>
        <div className="ml-[18rem] bg-gray-200 w-full">
          <div>
            <TopNav />
          </div>
          <div className="flex flex-row">
            <div className="bg-dashboardBG min-h-[90vh] w-full  ">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoard;

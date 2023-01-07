import React from "react";
import Groups from "../../components/groups/Groups";
import SideNav from "../../components/Sidenav/SideNav";

const DashBoard = () => {
  return (
    <>
      <SideNav />
      <div className="ml-64 bg-gray-300  ">
        <Groups />
      </div>
    </>
  );
};

export default DashBoard;

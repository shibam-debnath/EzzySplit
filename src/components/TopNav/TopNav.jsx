import React, { useState } from "react";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import UserProfile from "./UserProfile";
import Notification from "./Notification";
// import avatar from "../../../public/images/avatar";

const NavButton = ({ customFunc, icon, color, dotColor }) => (
  <button
    type="button"
    onClick={() => customFunc()}
    style={{ color }}
    className="relative text-xl rounded-full p-3 hover:bg-light-gray"
  >
    <span
      style={{ background: dotColor }}
      className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
    />
    {icon}
  </button>
);

// const handleActiveMenu = () => setActiveMenu(!activeMenu);

// handle all conditional rendering
const initialMenu = {
  userProfile: false,
  notification: false,
};

const TopNav = () => {
  // temporary color
  const currentColor = "primary";

  // handles all menu and sets true eg - set UserProfile as true
  const [menu, setMenu] = useState(initialMenu);

  // this function sets the var as true
  const handleClick = (param) => {
    setMenu({
      ...initialMenu,
      [param]: true,
    });
  };

  return (
    <div className="flex bg-white border-l-2 justify-between">
      <div className="flex gap-2 items-center p-2 md:ml-2 md:mr-6">
        <img
          className="rounded-full w-9 h-9"
          src="../images/avatar.png"
          alt="user-profile"
        />
        <div className="text-left">
          <p className="font-semibold text-lg ">Shibam</p>
          <p className="text-gray-500 text-xs">Joined 8 months ago</p>
        </div>
      </div>
      <div className="flex flex-row-reverse p-2 md:ml-6 md:mr-6 relative">
        <div className="flex">
          <NavButton
            title="Chat"
            dotColor="#03C9D7"
            customFunc={() => handleClick("chat")}
            color="blue"
            icon={<BsChatLeft />}
          />
          <NavButton
            title="Notification"
            dotColor="rgb(254, 201, 15)"
            customFunc={() => handleClick("notification")}
            color={currentColor}
            icon={<RiNotification3Line />}
          />
          <div
            className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
            onClick={() => handleClick("userProfile")}
          >
            <img
              className="rounded-full w-8 h-8"
              src="../images/avatar.png"
              alt="user-profile"
            />
            <MdKeyboardArrowDown className="text-gray-400 text-14" />
          </div>
          {menu.userProfile && <UserProfile />}
          {menu.notification && <Notification />}
        </div>
      </div>
    </div>
  );
};

export default TopNav;

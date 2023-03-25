import React, { useState } from "react";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import UserProfile from "./UserProfile";
import Notification from "./Notification";


const TopNav = () => {
  // handles all menu and sets true eg - set UserProfile as true
  const [notification, setNotification] = useState(false);
  const [profile, setProfile] = useState(false);

  // Notification
  const openNotification = (e) => {
    e.preventDefault();
    setNotification(!notification);
    setProfile(false);
  }

  const closeNotification = (e) => {
    e.preventDefault();
    setNotification(false);
  }

  // Profile
  const openProfile = (e) => {
    e.preventDefault();
    setProfile(!profile);
    setNotification(false);
  }

  const closeProfile = (e) => {
    e.preventDefault();
    setProfile(false);
  }

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
          <button
            type="button"
            onClick={openNotification}
            className="relative text-xl text-blue-600 rounded-full p-3 hover:bg-light-gray"
          >
            <span
              className="absolute bg-[#03C9D7] inline-flex rounded-full h-2 w-2 right-2 top-2"
            />
            <RiNotification3Line />
          </button>

          <div
            className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
            onClick={openProfile}
          >
            <img
              className="rounded-full w-8 h-8"
              src="../images/avatar.png"
              alt="user-profile"
            />
            <MdKeyboardArrowDown className="text-gray-400 text-14" />
          </div>

           {/* conditional rendering */}
          {profile && <UserProfile closeProfile={closeProfile} />}
          {notification && <Notification closeNotification={closeNotification} />}
        
        </div>
      </div>
    </div>
  );
};

export default TopNav;

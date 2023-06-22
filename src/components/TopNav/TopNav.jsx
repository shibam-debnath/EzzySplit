import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import UserProfile from "./UserProfile";
import Notification from "./Notification";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const TopNav = () => {
  const userId = useRef("");
  const groupId = useRef("");
  const uid = useRef("");
  const [user] = useAuthState(auth);
  const [UserData, FgetUsersData] = useState({});
  const navigate = useNavigate();
  const [notification, setNotification] = useState(false);
  const [profile, setProfile] = useState(false);
  const [Url, setUrl] = useState("./images/avatar.png");
  var response;

  useEffect(() => {
    console.log("checking the user ");
    if (user == null) {
      return navigate("/login");
    } else {
      console.log("Accessing the user ");
      console.log(user.displayName);
      var temp = user.displayName.split("---");
      userId.current = temp[0];
      groupId.current = temp[1];
      console.log(userId.current);
      uid.current = user.uid;
    }
    // eslint-disable-next-line
  }, [user]);

  const getData = async () => {
    try {
      let config = {
        method: "get",
        url: `${process.env.REACT_APP_BASE_URL}/user/profile/${userId.current}`,
      };
      response = await axios(config);
      setUrl(response.data.users.imageUrl);
      FgetUsersData(response.data.users);
      // console.log("Url");
      // console.log(Url);
      console.log(`Data: ${UserData.name}`);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, []);

  // Notification
  const openNotification = (e) => {
    e.preventDefault();
    setNotification(!notification);
    setProfile(false);
  };

  const closeNotification = (e) => {
    e.preventDefault();
    setNotification(false);
  };

  // Profile
  const openProfile = (e) => {
    e.preventDefault();
    setProfile(!profile);
    setNotification(false);
  };

  const closeProfile = (e) => {
    e.preventDefault();
    setProfile(false);
  };

  return (
    <div className="flex bg-white border-l-2 justify-between">
      <div className="flex gap-2 items-center p-2 md:ml-2 md:mr-6">
        <img className="rounded-full w-9 h-9" src={Url} alt="user-profile" />
        <div className="text-left">
          <p className="font-semibold text-lg ">{UserData.name}</p>
          {UserData.joinedOn && (
            <p className="text-gray-500 text-xs">Joined on &nbsp;
              {UserData.joinedOn
                .substring(0, 10)
                .split("-")
                .reverse()
                .join("-")}
            </p>
          )}
          {!UserData.joinedOn && (
            <p className="text-gray-500 text-xs">Joined few months ago</p>
          )}
        </div>
      </div>
      <div className="flex flex-row-reverse p-2 md:ml-6 md:mr-6 relative">
        <div className="flex">
          <button
            type="button"
            onClick={openNotification}
            className="relative text-xl text-blue-600 rounded-full p-3 hover:bg-light-gray"
          >
            <span className="absolute bg-[#03C9D7] inline-flex rounded-full h-2 w-2 right-2 top-2" />
            <RiNotification3Line />
          </button>

          <div
            className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
            onClick={openProfile}
          >
            <img
              className="rounded-full w-8 h-8"
              src={Url}
              alt="user-profile"
            />
            <MdKeyboardArrowDown className="text-gray-400 text-14" />
          </div>

          {/* conditional rendering */}
          {profile && (
            <UserProfile
              getData={getData}
              UserData={UserData}
              closeProfile={closeProfile}
            />
          )}
          {notification && (
            <Notification closeNotification={closeNotification} />
          )}
        </div>
      </div>
    </div>
  );
};

export default TopNav;

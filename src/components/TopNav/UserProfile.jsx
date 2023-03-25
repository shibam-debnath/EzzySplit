import React, { useState, useEffect } from "react";
import Button from "../Button/Button";
import { MdOutlineCancel } from "react-icons/md";
import axios from "axios";

const UserProfile = (props) => {
  const [UserData, FgetUsersData] = useState({});

  const getData = async () => {
    try {
      let config = {
        method: "get",
        url: "http://localhost:8000/user/profile/63e9338f981886a213a65868",
      };
      var response;
      response = await axios(config);
      FgetUsersData(response.data.users);
      console.log(`Data: ${UserData}`);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <div className="nav-item absolute right-0 top-20 bg-slate-50 border-spacing-3 p-8 rounded-lg w-96">
        <div className="flex justify-between items-center">
          <p className="font-semibold text-primary">
            User Profile
          </p>
          <button className="bg-none text-2xl text-primary rounded-2xl" onClick={props.closeProfile}>
            <MdOutlineCancel />
          </button>
        </div>
        <div className="flex gap-5 items-center mt-6 border-color border-b-1 pb-6">
          <img
            className="rounded-full h-24 w-24"
            src="../images/avatar.png"
            alt="user-profile"
          />
          <div className="flex flex-col">
            <p className="font-semibold text-2xl text-primary">
              {UserData.name}
            </p>
            <p className="text-gray-500 text-sm">
              {UserData.emailId}
            </p>
          </div>
        </div>
        <div className="mt-5">
          <Button
            color="white"
            bgcolor="rgb(107 96 241 / var(--tw-bg-opacity)"
            text="Logout"
            borderradius="2xl"
            width="full"
          />
        </div>
      </div>
    </div>
  );
};

export default UserProfile;

// import React from "react";

// const UserProfile = () => {
//   return <>HELLOOOOo</>;
// };

// export default UserProfile;

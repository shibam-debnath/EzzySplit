import React, { useState, useEffect } from "react";
import Button from "../Button/Button";
import { MdOutlineCancel } from "react-icons/md";
import axios from "axios";

const UserProfile = () => {
  const [getUsersDet, FgetUsersDet] = useState({});

  const getData = async () => {
    try {
      let config = {
        method: "get",
        url: "http://localhost:8000/user/profile/63d3700f59aa96fcdb661477",
      };
      var response;
      response = await axios(config);
      console.log(response.data.users);
      FgetUsersDet(response.data.users);
      console.log(`Dtat: ${getUsersDet}`);
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
      <div className="nav-item absolute right-1 top-16 bg-slate-200 p-8 rounded-lg w-96">
        <div className="flex justify-between items-center">
          <p className="font-semibold text-lg dark:text-gray-200">
            User Profile
          </p>
          <Button
            icon={<MdOutlineCancel />}
            color="rgb(153, 171, 180)"
            bgHoverColor="light-gray"
            size="2xl"
            borderradius="50%"
          />
        </div>
        <div className="flex gap-5 items-center mt-6 border-color border-b-1 pb-6">
          <img
            className="rounded-full h-24 w-24"
            src="../images/avatar.png"
            alt="user-profile"
          />
          <div>
            <p className="font-semibold text-xl dark:text-gray-200">
              {getUsersDet.name}
            </p>
            <p className="text-gray-500 text-sm dark:text-gray-400">
              {" "}
              Developer{" "}
            </p>
            <p className="text-gray-500 text-sm font-semibold dark:text-gray-400">
              {" "}
              {getUsersDet.emailId}{" "}
            </p>
          </div>
        </div>
        {/* <div>
          {userProfileData.map((item, index) => {
            return (
              <div
                key={index}
                className="flex gap-5 border-b-1 border-color p-4 hover:bg-light-gray cursor-pointer  dark:hover:bg-[#42464D]"
              >
                <button
                  type="button"
                  style={{
                    color: item.iconColor,
                    backgroundColor: item.iconBg,
                  }}
                  className=" text-xl rounded-lg p-3 hover:bg-light-gray"
                >
                  {item.icon}
                </button>

                <div>
                  <p className="font-semibold dark:text-gray-200 ">
                    {item.title}
                  </p>
                  <p className="text-gray-500 text-sm dark:text-gray-400">
                    {" "}
                    {item.desc}{" "}
                  </p>
                </div>
              </div>
            );
          })}
        </div> */}
        <div className="mt-5">
          <Button
            color="white"
            bgcolor="rgb(107 96 241 / var(--tw-bg-opacity)"
            text="Logout"
            borderradius="10px"
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

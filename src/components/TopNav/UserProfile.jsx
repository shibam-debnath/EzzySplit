import React, { useState, useEffect } from "react";
import { MdOutlineCancel } from "react-icons/md";
import { logout } from "../../firebase/firebase";
import axios from "axios";

var response;

const UserProfile = (props) => {
  const groupId = "63f7a42883b9e985364c5a7c";
  const userId = "63f7a3a583b9e985364c5a6a";

  const [UserData, FgetUsersData] = useState({});
  
  async function handleLogout(e) {
    e.preventDefault();
    try {
      await logout();
    } catch (e) {
      alert("Logout unsuccessful");
    }
  }

  const getData = async () => {
    try {
      let config = {
        method: "get",
        url: `http://localhost:8000/user/profile/${userId}`,
      };
      response = await axios(config);
      FgetUsersData(response.data.users);
      console.log(`Data: ${UserData.name}`);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      {!UserData ? (
        <h2>Loading.....</h2>
      ) : (
        <div className="nav-item absolute right-0 top-20 bg-slate-50 border-spacing-3 p-8 rounded-lg w-96">
          <div className="flex justify-between items-center">
            <p className="font-semibold text-xl text-primary">User Profile</p>
            <button
              className="bg-none text-2xl text-primary rounded-2xl"
              onClick={props.closeProfile}
            >
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
              {!UserData.name ? (
                <p className="text-gray-500 text-xl">No data found</p>
              ) : (
                <>
                  <p className="font-semibold text-2xl text-primary">
                    {UserData.name}
                  </p>
                  <p className="text-gray-500 text-sm">{UserData.emailId}</p>
                </>
              )}
            </div>
          </div>
          <div className="mt-5">
            <button
              onClick={handleLogout}
              className="bg-primary text-2xl text-white pt-3 pb-3 w-full"
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfile;

// import React from "react";

// const UserProfile = () => {
//   return <>HELLOOOOo</>;
// };

// export default UserProfile;

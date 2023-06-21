import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

import axios from "axios";
import LastGroupModify from "./LastGroupModify";

const LastGroup = () => {
  const userId = useRef("");
  const groupId = useRef("");
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

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
    }
    // eslint-disable-next-line
  }, [user]);

  const [groupData, setgroupData] = useState({});

  const lastGroupData = async () => {
    try {
      await axios
        .get(`${process.env.REACT_APP_BASE_URL}/group/${userId.current}`, {
          responseType: "json",
        })
        .then(function (response) {
          console.log("response");
          console.log(response.data);
          setgroupData(response.data);
          console.log("grdata");
          console.log(groupData);
        });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    lastGroupData();
    // eslint-disable-next-line
  }, []);

  let count = 1;

  return (
    <>
      <div className="flex space-between ">
        <div className=" min-h-screen w-full  mt-5">
          <div className="pt-5 pb-2 text-primary font-semibold font-sans text-3xl">
            Your last Groups
          </div>
          <div className="mt-10">
            {groupData.groupid ? (
              groupData.groupid.map((group) => (
                <LastGroupModify
                  id={count++}
                  name={group.groupName}
                  created={group.createdOn}
                  groupid={group._id}
                  user={group.userId}
                  isSettled={group.isSettled}
                />
              ))
            ) : (
              <p>Null</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default LastGroup;

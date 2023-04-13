import React, { useState, useEffect,useContext } from "react";
import { auth } from "../../firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth, updateProfile } from "firebase/auth";

import axios from "axios";
import LastGroupModify from "./LastGroupModify";

const LastGroup = () => {
  const [user] = useAuthState(auth);
  var temp = user.displayName.split("---");
  console.log(temp);

  const groupId = temp[1];
  const userId = temp[0];

  const [groupData, setgroupData] = useState({});

  const lastGroupData = async () => {
    try {
      await axios
        .get(`http://localhost:8000/group/${userId}`, {
          responseType: "json",
        })
        .then(function (response) {
          console.log("response")
          console.log(response.data)
          setgroupData(response.data);
          console.log("grdata");
          console.log(groupData)
        });
    } catch (err) {
      console.log(err);
    }
  };


  useEffect(() => {
    lastGroupData();
  }, []);

  let count = 1;

  return (
    <>
      <div className="flex space-between ">
        <div className=" min-h-screen w-full  ">
          <div className="pt-5 pb-2 font-sans text-3xl">Your last Groups</div>
          <div>
            {groupData.groupid ? (
              groupData.groupid.map((group) => (
                <LastGroupModify
                  id={count++}
                  name={group.groupName}
                  created={group.createdOn}
                  groupid={group._id}
                  user={group.userId}
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

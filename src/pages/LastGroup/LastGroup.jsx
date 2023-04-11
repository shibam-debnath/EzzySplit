import React, { useState, useEffect } from "react";
// import SideNav from "../../components/Sidenav/SideNav";
import { LastGroupData } from "../../data/LastGroupData";
import axios from "axios";
import LastGroupModify from "./LastGroupModify";

const LastGroup = () => {
  const groupId = "63fb8b5629ce0c8a774c4159";
  const userId = "63ce3de792e27a2fabc7d06c";

  const [groupData, setgroupData] = useState({});

  const lastGroupData = async () => {
    try {
      await axios
        .get(`http://localhost:8000/group/${userId}`, {
          responseType: "json",
        })
        .then(function (response) {
          setgroupData(response.data);
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

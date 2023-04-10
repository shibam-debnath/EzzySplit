import React, { useState, useEffect } from "react";
// import SideNav from "../../components/Sidenav/SideNav";
import { LastGroupData } from "../../data/LastGroupData";
import axios from "axios";
import LastGroupModify from "./LastGroupModify";

const LastGroup = () => {
  const groupId = "64283b4cb3dc45d696bc578b";
  const userId = "642839ceb3dc45d696bc5786";

  const [groupData, setgroupData] = useState({});

  const lastGroupData = async () => {
    try {
      await axios
        .get(`http://localhost:8000/group/${userId}`, {
          responseType: "json",
        })
        .then(function (response) {
          setgroupData(response.data);
          console.log(response);
          console.log(groupData);
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
                  created={group.created}
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

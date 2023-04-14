import React, { useState,useContext } from "react";
import { BiRightArrow } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { getAuth, updateProfile } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export default function LastGroupModify(props) {
  const auth1 = getAuth();
  const [user] = useAuthState(auth);
  var temp = user.displayName.split("---");
  console.log(temp);
  const navigate = useNavigate();
  const [toggleDesc, FtoggleDesc] = useState(false);
  console.log("props");
  console.log(props);
  const callToggle = (e) => {
    e.preventDefault();
    FtoggleDesc(!toggleDesc);
  };

  const updateDisplayName = (newName) => {
    const user = auth1.currentUser;
    console.log(user);
    if (user) {
      updateProfile(user, {
        displayName: newName,
        // photoURL: "https://example.com/newProfilePhoto.jpg"
      })
      .then(() => {
        console.log('Display name updated successfully');
      })
      .catch((error) => {
        console.log(`Error updating display name: ${error}`);
      });
    }
  };
  const userId = temp[0];
  
  return (
    <>
      <div className="bg-white h-15 rounded-xl m-3 p-2 hover:bg-primary hover:text-white flex justify-between ">
        <button className="w-full" onClick={callToggle}>
          <div className="flex text-lg">
            <span className="pl-2 pr-2">{props.id}.</span>
            <p className="pl-2 hover:cursor-pointer">{props.name}</p>
            <p className="pl-6  text-[13px] font-light hover:cursor-pointer">
              Created on: {props.created.substring(0,10).split("-").reverse().join("-")}
            </p>
          </div>
        </button>
        <div>
          <button
            className="text-xl rounded-xl p-1 hover:cursor-pointer hover:text-emerald-300"
            onClick={(e) => {
              e.preventDefault();
              const temp1 = userId+"---"+props.groupid;
              updateDisplayName(temp1);
              navigate("/dashboard/", { state: { groupid: props.groupid } });
            }}
          >
            <BiRightArrow />
          </button>
        </div>
      </div>
      {toggleDesc && (
        <div className="flex justify-between ">
          <div className="max-w-md bg-white   h-52 rounded-xl w-full  m-3 bg-no-repeat bg-cover bg-center ">
            <div className="px-6 py-4 ">
              <div className="font-semibold text-sm mb-2 justify-between flex">
                <div>Group Member </div>
                <div> Amount Paid</div>
                <div>Join Date</div>
              </div>
              {/* <div className="bg-gray-200 h-15 rounded-xl w-full   flex space-x-24 overflow-x-visible"> */}
              {props.user.map((item) => (
                <div className="bg-gray-200 h-15 rounded-xl w-full mt-2  flex justify-between overflow-x-visible">
                  <div>{item.name}</div>
                  <div>expense</div>
                  <div className="pl-0">created</div>
                </div>
              ))}
            </div>
          </div>
          <div className="max-w-sm bg-white   h-52 rounded-xl w-full  m-3 bg-no-repeat bg-cover bg-center ">
            <div className="px-6 py-2 mt-10">
              <div className="font-semibold flex justify-between  mb-2">
                <div className="">Group Created on :</div>
                <div className="">12/03/2022</div>
              </div>
            </div>
            <div className="px-6 py-2">
              <div className="font-semibold flex justify-between  mb-2">
                <div className="">Group Created By :</div>
                <div className="">ncslc</div>
              </div>
            </div>
            <div className="font-bold  items-center">Expenses settle</div>
          </div>
        </div>
      )}
    </>
  );
}

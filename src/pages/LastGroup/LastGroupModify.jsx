import React, { useState, useEffect, useRef } from "react";
import { BiDownArrow } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export default function LastGroupModify(props) {
  const userId = useRef("");
  const groupId = useRef("");
  const [user] = useAuthState(auth);
  const [toggleDesc, FtoggleDesc] = useState(false);
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

  const callToggle = (e) => {
    e.preventDefault();
    FtoggleDesc(!toggleDesc);
  };

  const updateDisplayName = (newName) => {
    console.log(user);
    if (user) {
      updateProfile(user, {
        displayName: newName,
        // photoURL: "https://example.com/newProfilePhoto.jpg"
      })
        .then(() => {
          console.log("Display name updated successfully");
          navigate("/dashboard/", { state: { groupid: props.groupid } });
        })
        .catch((error) => {
          console.log(`Error updating display name: ${error}`);
        });
    }
  };

  return (
    <>
      <div className="bg-white h-15 rounded-xl m-3 p-[1rem] hover:bg-lgPrimary hover:text-white flex justify-between ">
        <button
          className="w-full flex flex-row"
          onClick={(e) => {
            e.preventDefault();
            const temp1 = userId.current + "---" + props.groupid;
            updateDisplayName(temp1);
          }}
        >
          <span className=" w-1 pl-2 pr-2">{props.id}.</span>
          <div className="grid grid-cols-4 justify-items-start text-lg">
            <p className="flex w-60 pl-10 font-semibold text-primary hover:cursor-pointer">
              {props.name}
            </p>
            <div className="flex flex-row pl-10">
              <img
                className="rounded-full w-8 h-8 "
                src={props.user[0].imageUrl}
                alt="user-profile"
              />
              <p className="hover:cursor-pointer font-light text-[16px] pl-3">
                {props.user[0].name}
              </p>
            </div>
            <p className="pl-10  text-[13px] font-light hover:cursor-pointer">
              Created on:{" "}
              {props.created.substring(0, 10).split("-").reverse().join("-")}
            </p>
            <div className="pl-10 flex flex-row items-center">
              {props.isSettled ? (
                <>
                  <div className="rounded-xl bg-red-400 h-3 w-3"></div>
                  <p className=" pl-[5px] text-[16px] font-light">Settled</p>
                </>
              ) : (
                <>
                  <div className="rounded-xl bg-green-400 h-3 w-3"></div>
                  <p className=" pl-[5px] text-[16px] font-light">Active</p>
                </>
              )}
            </div>
          </div>
        </button>
        <div>
          <button
            className="text-xl rounded-xl p-1 hover:cursor-pointer hover:text-emerald-300"
            onClick={callToggle}
          >
            <BiDownArrow />
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

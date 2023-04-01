import React, { useEffect, useState } from "react";
import { IoIosArrowDropright } from "react-icons/io";
import { BiChevronRight } from "react-icons/bi";
import { LastGroupMember } from "../../data/LastGroupMember";

export default function LastGroupModify(props) {
  const [toggleDesc, FtoggleDesc] = useState(false);

  const callToggle = (e) => {
    e.preventDefault();
    FtoggleDesc(!toggleDesc);
  };

  return (
    <>
      <div className="bg-white h-15 rounded-xl m-3 p-2 hover:bg-primary hover:text-white flex justify-between ">
        <button className="w-full" onClick={callToggle}>
        <div className="flex text-lg">
          <span className="pl-2 pr-2">{props.id}.</span>
          <p className="pl-2 hover:cursor-pointer">{props.name}</p>
          <p className="pl-2  text-[13px] font-light hover:cursor-pointer">
            Created on: {props.created}
          </p>
        </div>
        </button>
        <div>
          <button
            className="text-xl rounded-xl p-1 hover:cursor-pointer"
            
          >
            <BiChevronRight />
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
              {LastGroupMember.map((item) => (
                <div className="bg-gray-200 h-15 rounded-xl w-full mt-2  flex justify-between overflow-x-visible">
                  <div>{item.name}</div>
                  <div>{item.expenses}</div>
                  <div className="pl-0">{item.created}</div>
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

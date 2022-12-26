import React from "react";
import SideNav from "../../components/Sidenav/SideNav";
import { LastGroupData } from "../../data/LastGroupData";
import {IoIosArrowDropright} from "react-icons/io";
import {BiChevronDown} from "react-icons/bi";

const LastGroup = () =>{
    return(
        <>
      <div className="flex space-between ">
        <div className=" bg-primary text-left">
          <SideNav />
        </div>
        <div className=" min-h-screen w-full  ">
          <div className="pt-5 pb-2 font-sans text-3xl">
            Your last Groups
          </div>
          <div>
            {LastGroupData.map((item)=>(
              <div key={item.id} className="bg-gray-200 h-15 rounded-xl m-3 p-2 hover:bg-primary hover:text-white flex justify-between ">
                <div className="flex text-lg">
                  <span className="pl-2 pr-2">{item.id}.</span>
                  <p className="pl-2 hover:cursor-pointer">{item.name}</p>
                  <p className="pl-2  text-[13px] font-light hover:cursor-pointer">Created on: {item.created}</p>
                </div>
                <div>
                  <button className="text-xl rounded-xl p-1 hover:cursor-pointer">
                    <BiChevronDown />
                  </button>
                </div>

              </div>
            ))}
          </div>
          
        </div>
        <div className="w-1/3"></div>
        {/* <div className=" w-1/3 bg-primary text-left">
          <div className="p-10">Sorry guys yaha kuch daal denge : </div>
        </div> */}
      </div>
    </>
    );
};

export default LastGroup;
import React from "react";
import SideNav from "../../components/Sidenav/SideNav";
import { LastGroupData } from "../../data/LastGroupData";

import LastGroupModify from "./LastGroupModify";

const LastGroup = () =>{
    return(
        <>
      <div className="flex space-between ">
        <div className=" min-h-screen w-full  ">
          <div className="pt-5 pb-2 font-sans text-3xl">
            Your last Groups
          </div>
          <div>
            {LastGroupData.map((item)=>(
                  <LastGroupModify 
                    id = {item.id}
                    name={item.name}
                    created= {item.created}

                  />
            ))}
          </div>
          
        </div>
        
      </div>
    </>
    );
};

export default LastGroup;
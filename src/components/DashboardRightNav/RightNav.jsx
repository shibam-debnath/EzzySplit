import React, { useState } from 'react'
import Friend from './Friend'
import './rightNav.css'
import Spendings from './Spendings'
export default function RightNav() {
    const [toggle,Ftoggle] = useState({
      flag:1,
      clr:"red"
    });
    
    const toggleFriends=()=>{
      Ftoggle({
        flag:1,
        bg_clr_frnd:"white",
        clr_frnd:"red",
        bg_clr_exp:"#6B60F1",
        clr_exp:"black"
      });
    }
    const toggleExpenses=()=>{
      Ftoggle({
        flag:0,
        bg_clr_frnd:"#6B60F1",
        clr_frnd:"black",
        bg_clr_exp:"white",
        clr_exp:"red"
      });
    }
  return (
    <div className="color h-screen flex flex-col">
        <div className='flex  py-2  justify-around rounded-lg '>
            <button className=' text-white mx-2 text-2xl px-2 rounded-lg cursor-pointer hover:scale-90 hover:bg-white hover:text-pink-800 btn ' style={{background:toggle.bg_clr_frnd,color:toggle.clr_frnd,}} onClick={toggleFriends}  >Friends</button>
            <button className=' text-white mx-2 text-2xl px-2 rounded-lg cursor-pointer hover:scale-90 hover:bg-white hover:text-pink-800 btn' style={{background:toggle.bg_clr_exp,color:toggle.clr_exp}} onClick={toggleExpenses} >Expenses</button>
            
        </div>
        <div className="section ">
            {
              toggle.flag==1?<Friend/>:<Spendings/>
            }
        </div>
            
        <div className="CreateNewGroup  mt-auto rounded-lg mx-2 flex cursor-pointer hover:scale-95 hover:bg-gray-300" >
            <img src="https://img.icons8.com/color/96/null/add-user-group-man-man-skin-type-7.png"/>
        </div>
    </div>
  )
}

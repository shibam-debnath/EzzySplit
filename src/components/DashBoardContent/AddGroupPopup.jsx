import React from 'react';
import {
  TbLogout
} from "react-icons/tb";


const AddGroupPopup = (props) => {
  return (
    <>
    <div  className='border-2 border-emerald-600 w-[300px] my-auto rounded-xl mx-2'>
    <div className='bg-white rounded-2xl pb-3 '>
          <div className='bg-primary rounded-lg p-2 px-3 flex justify-between mb-1'>
            <h5 className=' text-white font-semibold text-lg'>Choose Group</h5>
            <button className='hover:text-red-500 text-xl' onClick={props.closeAdd}>
              <TbLogout />
            </button>
          </div>


          <div>
            <ul>
                <li className='cursor-pointer   text-gray-900 w-full text-start px-5 py-2  hover:bg-slate-200'>Ezzy Split</li>
                <li className='cursor-pointer  text-gray-900 w-full text-start px-5 py-2 font-medium hover:bg-slate-200'>Mumbai Indians</li>
                <li className='cursor-pointer  text-gray-900 w-full text-start px-5 py-2  hover:bg-slate-200'>Rajasthan Royals</li>
                <li className='cursor-pointer text-gray-900 w-full text-start px-5 py-2  hover:bg-slate-200'>Ninja Warriors</li>
            </ul>
          </div>
          </div>
    </div>
    </>
  )
}

export default AddGroupPopup
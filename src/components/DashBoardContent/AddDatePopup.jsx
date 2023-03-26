import React from 'react'
import { VscClose } from "react-icons/vsc";
import './AddDatePopupcss.css'
import Calendar from './Calendar.jsx'
const AddDatePopup = (props) => {
  return (
    <>
    <div className='border-2  border-blue-600 w-[330px] my-auto rounded-xl mx-2'>
   
    <div className='bg-primary rounded-lg p-2 px-3 flex justify-between '>
            <h5 className=' text-white font-semibold text-lg'>Calendar</h5>
            <button className='hover:text-red-500 text-xl' onClick={props.closeAdd}>
              <VscClose />
            </button>
          </div>
          <Calendar/> 
        
          
      </div>
          
    </>
  )
}

export default AddDatePopup
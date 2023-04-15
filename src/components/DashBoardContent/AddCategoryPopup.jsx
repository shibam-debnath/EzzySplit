import React from 'react';
import { VscClose } from "react-icons/vsc";

const AddCategoryPopup = (props) => {
  return (
    <div className=' w-[18%] my-auto rounded-md mx-2 shadow-2xl'>
      <div className='bg-white rounded-2xl pb-3 '>
        <div className='bg-primary rounded-t-lg p-2 px-3 flex justify-between mb-1'>
          <h5 className=' text-white font-semibold text-ml'>Choose a Category</h5>
          <button className='hover:text-red-500 text-xl' onClick={props.closeAdd}>
            <VscClose />
          </button>
        </div>
<div>

        <div className='mt-2'>
            <button className='cursor-pointer   text-gray-900 w-full text-start px-5 py-1 font-medium hover:bg-slate-200'
              onClick={
                (e) => {
                  e.preventDefault();
                 props.setcategory("Ticket")
                  props.closeAdd()
                }}
            >
           Ticket
            </button>
          </div>
          <div className='mt-1'>
            <button className='cursor-pointer   text-gray-900 w-full text-start px-5 py-1 font-medium hover:bg-slate-200'
              onClick={
                (e) => {
                  e.preventDefault();
                 props.setcategory("Food")
                  props.closeAdd()
                }}
            >
         Food
            </button>
          </div>
          <div className='mt-1'>
            <button className='cursor-pointer   text-gray-900 w-full text-start px-5 py-1 font-medium hover:bg-slate-200'
              onClick={
                (e) => {
                  e.preventDefault();
                 props.setcategory("Shopping")
                  props.closeAdd()
                }}
            >
          Shopping
            </button>
          </div>
          <div className='mt-1'>
            <button className='cursor-pointer   text-gray-900 w-full text-start px-5 py-1 font-medium hover:bg-slate-200'
              onClick={
                (e) => {
                  e.preventDefault();
                 props.setcategory("Hotel")
                  props.closeAdd()
                }}
            >
          Hotel
            </button>
          </div>
          <div className='mt-1'>
            <button className='cursor-pointer   text-gray-900 w-full text-start px-5 py-1 font-medium hover:bg-slate-200'
              onClick={
                (e) => {
                  e.preventDefault();
                 props.setcategory("Others")
                  props.closeAdd()
                }}
            >
           Others
            </button>
          </div>
           
        </div>
      </div>
    </div>
  )
}

export default AddCategoryPopup;
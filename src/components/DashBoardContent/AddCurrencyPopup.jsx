import React from 'react';
import { VscClose } from "react-icons/vsc";

const AddCurrencyPopup = (props) => {
  return (
    <div className='border-2 border-emerald-600 w-[18%] my-auto rounded-xl mx-2'>
        <div className='bg-white rounded-2xl pb-3 '>
          <div className='bg-primary rounded-lg p-2 px-3 flex justify-between mb-1'>
            <h5 className=' text-white font-semibold text-ml'>Choose a Currency</h5>
            <button className='hover:text-red-500 text-xl' onClick={props.closeAdd}>
              <VscClose />
            </button>
          </div>
          
          <div>
            <ul>
                <li className='cursor-pointer   text-gray-900 w-full text-start px-5 py-2 font-medium hover:bg-slate-200'>INR</li>
                <li className='cursor-pointer  text-gray-900 w-full text-start px-5 py-2  hover:bg-slate-200'>USD</li>
                <li className='cursor-pointer  text-gray-900 w-full text-start px-5 py-2  hover:bg-slate-200'>EUR</li>
                <li className='cursor-pointer text-gray-900 w-full text-start px-5 py-2  hover:bg-slate-200'>NPR</li>
            </ul>
          </div>
          </div>
    </div>
  )
}

export default AddCurrencyPopup;
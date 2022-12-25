import React, { useState } from 'react';
import {
  TbLogout
} from "react-icons/tb";

const PaidByPopup = (props) => {

  const [multiple, Fmultiple] = useState(false);

  const pmultiple = (e) => {
    e.preventDefault();
    Fmultiple(true);
  }
  return (
        <div  className='border-2 border-emerald-600 w-[350px] my-auto rounded-xl mx-2'>
      <form >
        <div className='bg-white rounded-2xl pb-3 '>
          <div className='bg-primary rounded-lg p-2 px-3 flex justify-between mb-1'>
            <h5 className=' text-white font-semibold text-lg'>Choose Payer</h5>
            <button className='hover:text-red-500 text-xl' onClick={props.closeAdd}>
              <TbLogout />
            </button>
          </div>

          {/* people in group add by fetching */}
          <div className='bg-white'>
            <div className=''>
              <div className='flex justify-start'>
                <button className='rounded-lg hover:border-primary hover:border-[1px] w-full text-start px-3 py-2'>
                  RituRaj
                </button>
              </div>
              <hr />
              <div className='flex justify-start '>
                <button className='rounded-lg hover:border-primary hover:border-[1px] w-full text-start px-3 py-2'>
                  RituRaj
                </button>
              </div>
              <hr />
              <div className='flex justify-start '>
                <button className=' hover:bg-slate-200 w-full text-start px-3 py-2'>
                  RituRaj
                </button>
              </div>
            </div>
            <hr />
          </div>
          {/* paid by multiple people */}
          <div className=''>
            <button className=' text-primary w-full text-start px-3 py-2 font-semibold hover:bg-slate-200'
              onClick={pmultiple}
            >
              Multiple people
            </button>
          </div>


          {multiple && <div>
            <div className='flex px-3' >
              <div>
              <input type="checkbox" className='rounded-lg '/>
              </div>
              <div className='px-2'>             
                 Each person paid their own shares 
              </div>
            </div>
            <div className='px-3'>
              <div className='text-start font-medium pt-2'>
                SuRaj Kumar
              </div>
              <div className='border-2 rounded-lg border-blue-300 flex items-center px-1'>
                <div>
                  INR
                </div>
                <input type="text" placeholder='Amount' className='w-full border-none focus:ring-0' />
              </div>
            </div>
            <div className='px-3'>
              <div className='text-start font-medium pt-2'>
                Aniket B
              </div>
              <div className='border-2 rounded-lg border-blue-300 flex items-center px-1'>
                <div className=''>
                  INR
                </div>
                <input type="text" placeholder='Amount' className='w-full border-none focus:ring-0' />
              </div>
            </div>
          </div>}
        </div>
      </form>
        </div>

  )
}

export default PaidByPopup
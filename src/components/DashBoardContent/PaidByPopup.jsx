import React, { useState } from 'react';
import { VscClose } from "react-icons/vsc";

const PaidByPopup = (props) => {

  const [multiple, Fmultiple] = useState(false);

  const pmultiple = (e) => {
    e.preventDefault();
    Fmultiple(!multiple);
  }
  return (
        <div  className='border-2 border-emerald-600 w-[350px] my-auto rounded-xl mx-2'>
        <div className='bg-white rounded-2xl pb-3 '>
          <div className='bg-primary rounded-lg p-2 px-3 flex justify-between mb-1'>
            <h5 className=' text-white font-semibold text-lg'>Choose Payer</h5>
            <button className='hover:text-red-500 text-xl' onClick={props.closeAdd}>
              <VscClose />
            </button>
          </div>

          {/* people in group add by fetching */}
          {
            props.groupDetails.userId.map((val)=>{
              return(
                <div className='bg-white'>
            <div className=''>
              <div className='flex justify-start'>
                <button className='rounded-lg hover:border-primary hover:border-[1px] w-full text-start px-3 py-2'>
                  {val.name}
                </button>
              </div>
              <hr />
            </div>
            <hr />
          </div>
              )
            })
          }
          
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
            {props.groupDetails.userId.map((val)=>{
              return (
                <div className='px-3'>
              <div className='text-start font-medium pt-2'>
              {val.name}
              </div>
              <div className='border-2 rounded-lg border-blue-300 flex items-center px-1'>
                <div>
                  INR
                </div>
                <input type="text" placeholder='Amount' className='w-full border-none focus:ring-0' />
              </div>
            </div>
              )
            })}
            
          </div>}
        </div>
        </div>

  )
}

export default PaidByPopup
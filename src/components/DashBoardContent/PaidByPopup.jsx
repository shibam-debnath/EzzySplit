import React, { useState } from 'react';
import { VscClose } from "react-icons/vsc";

const PaidByPopup = (props) => {

  const [multiple, Fmultiple] = useState(false);
  const [single, Fsingle] = useState(false);

  
  return (
        <div  className='border-2 border-emerald-600 w-[370px] my-auto rounded-xl mx-2 '>
        <div className='bg-white rounded-2xl pb-3 '>
          <div className='bg-primary rounded-lg p-2 px-3 flex justify-between mb-1'>
            <h5 className=' text-white font-semibold text-lg'>Choose Payer</h5>
            <button className='hover:text-red-500 text-xl' onClick={props.closeAdd}>
              <VscClose />
            </button>
          </div>

        <div className='overflow-y-auto max-h-80 scrollbar-thin scrollbar-w-[3px] scrollbar-thumb-slate-800'>

        <div className=''>
            <button className=' text-primary w-full text-start px-3 py-2 font-semibold hover:bg-slate-200'
              onClick={
                (e)=>{
                  e.preventDefault();
                  Fsingle(!single);
                  Fmultiple(false);
              }}
            >
              Single Payer
            </button>
          </div>
          {/* people in group add by fetching */}
          {
            single && <div>
              {
                props.paidByArr.map((val)=>{
                  return(
                    <div className='bg-white'>
                <div className=''>
                  <div className='flex justify-start'>
                    <button
                     className='rounded-lg hover:border-primary hover:border-[1px] w-full text-start px-3 py-2'
                     onClick={
                      (e)=>{
                        e.preventDefault();
                        props.setPayer(val.name);
                        props.inputAmountCngSingle(val.userId,val.name);
                        props.closeAdd();
                      }
                     }
                     >
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
            </div>
          }

          
          
          {/* paid by multiple people */}
          <div className=''>
            <button className=' text-primary w-full text-start px-3 py-2 font-semibold hover:bg-slate-200'
              onClick={
                (e)=>{
                  e.preventDefault();
                  Fmultiple(!multiple);
                  Fsingle(false);
                props.setPayer("Multiple P.");
              }}
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
            {props.paidByArr.map((val)=>{
              return (
                <div className='px-3'>
              <div className='text-start font-medium pt-2'>
              {val.name}
              </div>
              <div className='border-2 rounded-lg border-blue-300 flex items-center px-1'>
                <div>
                  INR
                </div>
                <input type="text"
                 placeholder='Amount'
                 name={val.userId}
                 value={val.amount}
                 onChange={(e)=>{
                  const name = e.target.name;
                  const value = e.target.value;
                  props.inputAmountCng(name,value);
                 }}
                 
                className='w-full border-none focus:ring-0' />
              </div>
            </div>
              )
            })}
            
          </div>}
        </div>
        </div>
        </div>

  )
}

export default PaidByPopup
import React, { useState } from 'react'

import { VscClose } from "react-icons/vsc";
import { FaPercent } from "react-icons/fa"
import { CgProfile } from "react-icons/cg";
import { BiDollar } from "react-icons/bi";
import { BsBarChartSteps } from "react-icons/bs";

const SplitPopup = (props) => {

  const [unequillyExpend, FunequillyExpend] = useState(false);
  const [textShareMethod, FtextShareMethod] = useState("Split by amount")
  const [placeholderShareMethod, FplaceholderShareMethod] = useState(1);

  return (
    <>

      {/* Add pop up section */}
      {/* <div className='bg-neutral-200 opacity-100 fixed inset-0 z-50 flex-col '>

        <div className=' h-3/5 my-auto align-middle '> */}
      <div className='border-2 border-emerald-600 bg-white w-[350px] my-auto rounded-xl mx-2'>


        <div className='bg-primary rounded-lg py-2 px-3 flex justify-between'>
          <h5 className=' text-white font-semibold text-lg'>Choose split method</h5>
          <button className='hover:text-red-500 text-xl' onClick={props.closeAdd} >
            <VscClose />
          </button>
        </div>

        {/* split exp div */}

        <div className='overflow-y-auto max-h-[350px] scrollbar-thin scrollbar-w-[3px] scrollbar-thumb-slate-800'>

          <div className='mt-2'>
            <button className=' text-primary w-full text-start px-3 py-2 font-semibold hover:bg-slate-200'
              onClick={
                (e) => {
                  e.preventDefault();
                  FunequillyExpend(false);
                }}
            >
              Split Equilly
            </button>
          </div>
          <div className=''>
            <button className=' text-primary w-full text-start px-3 py-2 font-semibold hover:bg-slate-200'
              onClick={
                (e) => {
                  e.preventDefault();
                  FunequillyExpend(!unequillyExpend);
                }}
            >
              Split Unequilly
            </button>
          </div>
          {/* Expend the method of uneuilly paid */}
          {
            unequillyExpend && <div className='mr-3 mt-3 py-0.5'>
              <div className="ml-4 flex justify-between mr-2 px-2 ">

                <button className='border-2 border-primary rounded-full py-1 px-2 hover:bg-slate-100 text-primary text-2xl font-bold '
                  onClick={(e) => {
                    e.preventDefault();
                    FtextShareMethod("Split by amount");
                    FplaceholderShareMethod(1);
                  }}
                ><BiDollar /></button>
                <button className='border-2 border-primary rounded-full py-1 px-3 hover:bg-slate-100 text-primary text-sm font-bold '
                  onClick={(e) => {
                    e.preventDefault();
                    FtextShareMethod("Split by percentage");
                    FplaceholderShareMethod(2);
                  }}
                ><FaPercent /></button>
                <button className='border-2 border-primary rounded-full py-1 px-3 hover:bg-slate-100 text-primary text-sm font-bold '
                  onClick={(e) => {
                    e.preventDefault();
                    FtextShareMethod("Split by share");
                    FplaceholderShareMethod(3);
                  }}
                ><BsBarChartSteps /></button>
              </div>
              <div className="m-4">
                <div className="font-semibold mb-1 text-lg text-left"> {textShareMethod}</div>
                <div >
                  {props.groupDetails.userId.map((item) => {

                    return <div key={item.id} className=" flex justify-between mb-4 mt-2">

                      <div className=" flex space-x-2 items-center pl-6">
                        <CgProfile />
                        <span className='font-semibold m-1'>{item.name}</span>

                      </div>
                      {placeholderShareMethod == 1 && <div className='flex items-center' >
                        <div className='border-[1px] rounded-l-lg px-2'>INR</div><input type="text" placeholder='00.00' className='rounded-r-lg h-7 w-[70px] ' />
                      </div>}
                      {placeholderShareMethod == 2 && <div className='flex items-center' >
                        <input type="text" placeholder='00' className='rounded-lg h-7 w-[50px] ' /><div className='px-2 font-bold'>%</div>
                      </div>}
                      {placeholderShareMethod == 3 && <div className='flex items-center' >
                        <input type="text" placeholder='0' className='rounded-lg h-7 w-[38px] ' /><div className='px-2 font-light text-xs'>Shares</div>
                      </div>}


                    </div>

                  })}
                  <hr />
                  {placeholderShareMethod == 1 && <div className='pt-4'>
                    <div className='flex justify-between'>
                      <div className='ml-6 font-semibold'>
                        Total
                      </div>
                      <div className='font-semibold flex'>
                        <div className='px-1'>INR</div>
                        <div> 1009</div>
                      </div>
                    </div>
                    <div className='flex justify-end'>
                      <div className='font-light flex text-[13px]'>
                        <div className='px-1'>INR</div>
                        <div>700</div>
                        <div className='pl-1'> left</div>
                      </div>
                    </div>
                  </div>}
                  {placeholderShareMethod == 2 && <div className='pt-4'>
                    <div className='flex justify-between'>
                      <div className='ml-6 font-semibold'>
                        Total
                      </div>
                      <div className='font-semibold flex'>
                        <div> 1009</div>
                        <div className='px-1'>%</div>
                      </div>
                    </div>
                    <div className='flex justify-end'>
                      <div className='font-light flex text-[13px]'>
                        <div>700</div>
                        <div className='px-1'>%</div>
                        <div className='pl-1'> left</div>
                      </div>
                    </div>
                  </div>}
                </div>
              </div>

            </div>
          }



          <div className='mb-2'>
            <button className=' text-primary w-full text-start px-3 py-2 font-semibold hover:bg-slate-200'
              onClick={
                (e) => {
                  e.preventDefault();
                  FunequillyExpend(false);
                }}
            >
              You own full amount
            </button>
          </div>

          {/* 3rd div */}

        </div>
      </div>

    </>
  )
}

export default SplitPopup
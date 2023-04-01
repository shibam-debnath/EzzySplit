import React, { useState } from 'react'

import { VscClose } from "react-icons/vsc";
import { FaPercent } from "react-icons/fa"
import { CgProfile } from "react-icons/cg";
import { BiDollar } from "react-icons/bi";
import { BsBarChartSteps } from "react-icons/bs";

const SplitPopup = (props) => {

  const [unequillyExpend, FunequillyExpend] = useState(false);

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
                  props.Fsplit_method("equally");
                  props.InputSplitEquilly();
                  props.closeAdd()
                }}
            >
              Split Equilly
            </button>
          </div>
          <div className='mb-3'>
            <button className=' text-primary w-full text-start px-3 py-2 font-semibold hover:bg-slate-200'
              onClick={
                (e) => {
                  e.preventDefault();
                  FunequillyExpend(!unequillyExpend);
                  props.Fsplit_method("amounts");
                }}
            >
              Split Unequilly
            </button>
          </div>
          {/* Expend the method of uneuilly paid */}
          {
            unequillyExpend && <div className='mr-3 mt-3 py-0.5'>
              <div className="mb-4 mx-4">
                <div className="font-semibold mb-1 text-lg text-left"> Split by amount</div>
                <div >
                  {props.splitBetween.map((item) => {

                    return <div key={item.id} className=" flex justify-between mb-4 mt-2">

                      <div className=" flex space-x-2 items-center pl-6">
                        <CgProfile />
                        <span className='font-semibold m-1'>{item.name}</span>

                      </div>
                      <div className='flex items-center' >
                        <div className='border-[1px] rounded-l-lg px-2'>INR</div>
                        <input
                          type="text"
                          placeholder='00.00'
                          className='rounded-r-lg h-7 w-[70px] '
                          name={item.user}
                          value={item.toPay}
                          onChange={(e) => {
                            const name = e.target.name;
                            const value = e.target.value;
                            props.InputSplitBetween(name, value);
                          }}
                        />
                      </div>
                    </div>

                  })}
                  <hr />
                </div>
              </div>

            </div>
          }



          

          {/* 3rd div */}

        </div>
      </div>

    </>
  )
}

export default SplitPopup
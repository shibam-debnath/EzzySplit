import React from 'react'

import { VscClose, VscChecklist, VscGrabber } from "react-icons/vsc";
import { CgProfile } from "react-icons/cg";

const SplitPopup = (props) => {
  return (
    <>

      {/* Add pop up section */}
      {/* <div className='bg-neutral-200 opacity-100 fixed inset-0 z-50 flex-col '>

        <div className=' h-3/5 my-auto align-middle '> */}
          <div className='border-2 border-emerald-600 bg-white w-[350px] my-auto rounded-xl mx-2'>


            <div className='bg-primary rounded-lg py-2 px-3 flex justify-between'>
              <h5 className=' text-white font-semibold text-lg'>Add an expenses</h5>
              <button className='hover:text-red-500 text-xl' onClick={props.closeAdd} >
                <VscClose />
              </button>
            </div>

            {/* split exp div */}

          <div className='overflow-y-auto max-h-[350px] scrollbar-thin scrollbar-w-[3px] scrollbar-thumb-slate-800'>

            <div className=' m-3 overflow-hidden '>
              <div className="flex"> <a className="bg-blue-500 block cursor-pointer text-center hover:bg-blue-700 text-white font-semibold py-2 px-5 rounded-full m-auto w-2/3">
                split the expences
              </a></div>
              <div className='flex m-2'> <a className="bg-white block m-auto hover:bg-gray-100 cursor-pointer text-center text-gray-800 font-semibold py-2  px-5 border border-gray-400  shadow rounded-full ">

                you owe the full amount
              </a></div>

              <div className="flex mb-2" ><a className="bg-white block hover:bg-gray-100 cursor-pointer text-center text-gray-800 font-semibold py-2 px-5 border border-gray-400 rounded-full shadow m-auto ">
                they owe the full amount
              </a></div>

              <hr />
            </div>

            {/* 3rd div */}
            <div className='m-3 py-0.5 '>
              <div className="ml-3 inline-flex ">


                <button className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1  px-3 '><VscChecklist /></button>
                <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1  px-3 ">1.23</button>
                <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1  px-3 "><VscGrabber /></button>
                <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1  px-3 rounded-r">+/-</button>
              </div>
              <div className="m-3">
                <div className="font-semibold mb-1 text-lg"> Split Equaly</div>
                <div >
                  {props.groupDetails.userId.map((item) => {

                    return <div key={item.id} className=" flex justify-between mb-4 mt-2">

                      <div className=" flex space-x-2 items-center">
                      <div>
              <input type="checkbox" className='rounded-lg '/>
              </div>
                        <CgProfile/>
                        <span className='font-semibold m-1'>{item.name}</span>

                      </div>
                      <div ><input type="text" placeholder='$ 0.00' className='rounded-lg h-7 w-20 ' /></div>
                    </div>

                  })}

                </div>
              </div>

            </div>


            </div>
          {/* </div>
        </div> */}
      </div>

    </>
  )
}

export default SplitPopup
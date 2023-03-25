import React from 'react';
import { VscClose } from "react-icons/vsc";

const AddNotePopup = (props) => {
  return (
    <div className='border-2 border-emerald-600 w-[350px] my-auto rounded-xl mx-2'>
        <div className='bg-white rounded-2xl pb-3 '>

          <div className='bg-primary rounded-lg p-2 px-3 flex justify-between mb-1'>
            <h5 className=' text-white font-semibold text-lg'>Add Image/Note</h5>
            <button className='hover:text-red-500 text-xl' onClick={props.closeAdd}>
              <VscClose />
             
             
            </button>
          </div>

          <div className='px-3 py-2'>
            <p className='text-start'>Attach an image or PDF</p>
            <div className='flex items-center mt-1 mb-4'>
              <button
                className='text-primary rounded-lg px-2 py-0 border-dotted border-emerald-300 border-2 hover:border-primary hover:border-solid'
              >Choose File</button>
              <div className='mx-2'>
                No Choosen file
              </div>
            </div>
            <hr />
            <div className='mt-3 items-start mb-2'>
              <textarea name="" cols="30" rows="8" placeholder='Add Note' className='rounded-lg'></textarea>
            </div>

            <hr />
            <div className='flex justify-end mt-3'>

              <div className='py-1 px-4 mr-3 text-base font-normal bg-primary text-gray-900 rounded-lg dark:text-white hover:bg-primary dark:hover:bg-gray-700 border-2 border-emerald-300 '>
                <button className=' text-lg opacity-0.9 text-white hover:drop-shadow-xl rounded-full' >
                  Done
                </button>
              </div>


            </div>
          </div>

        </div>
    </div>
  )
}

export default AddNotePopup
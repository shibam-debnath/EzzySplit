import React, { useState } from 'react';
import AddExpensePopup from './AddExpensePopup';

const AddExpenses = () => {
  const [popup, Fpopup] = useState(false);

  const addExp = (e) => {
    e.preventDefault();
    Fpopup(true);
  }

  const closeAdd = (e) => {
    e.preventDefault();
    Fpopup(false);
  }

  return (
    <>
      <div className='bg-gray-400 '>
        <div>

          <div className='flex items-center justify-between w-[94%] w- m-auto bg-emerald-200 py-4' >
            <div className='text-xl font-semibold px-4 py-3'>Group-1</div>
            <div className='p-2 px-4 mr-3 text-base font-normal bg-primary text-gray-900 rounded-lg dark:text-white hover:bg-gray-700 hover:border-2 hover:border-white'>
              <button className=' text-xl opacity-0.9 text-white hover:drop-shadow-xl rounded-full' onClick={addExp}>
                Add an expenses
              </button>
            </div>
          </div>
          <div>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. A, obcaecati.
          </div>
        </div>

        {/* Add pop up section */}
        {popup && <AddExpensePopup  closeAdd={closeAdd}/> } 
      </div>
    </>
  )
}

export default AddExpenses;
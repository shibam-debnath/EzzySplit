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
      <div className='fixed top-[90%] left-[62%]'>
        <div className='flex justify-end'>
          <div className='p-2 px-4 mr-3 text-base font-normal bg-primary text-gray-900 rounded-lg dark:text-white hover:bg-gray-700 hover:border-2 hover:border-white'>
            <button className=' text-xl opacity-0.9 text-white hover:drop-shadow-xl rounded-full' onClick={addExp}>
              Add an expenses
            </button>
          </div>
        </div>

        {/* Add pop up section */}
        {popup && <AddExpensePopup closeAdd={closeAdd} />}
      </div>
    </>
  )
}

export default AddExpenses;
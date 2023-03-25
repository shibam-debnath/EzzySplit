import React, { useState } from 'react';
import AddExpensePopup from './AddExpensePopup';
import { BiPlusMedical } from "react-icons/bi";

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
      <div className='fixed bottom-10 right-10 h-18 w-48'>
        <div className='flex justify-end'>
          <div className='p-5 text-base bg-lgPrimary text-white rounded-full hover:bg-[#554CBF] hover:cursor-pointer'>
            <BiPlusMedical/>
          </div>
        </div>

        {/* Add pop up section */}
        {popup && <AddExpensePopup closeAdd={closeAdd} />}
      </div>
    </>
  )
}

export default AddExpenses;
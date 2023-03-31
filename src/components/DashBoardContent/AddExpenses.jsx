import React, { useState } from 'react';
import AddExpensePopup from './AddExpensePopup';
import { BiPlusMedical } from "react-icons/bi";

const AddExpenses = (props) => {
  const [popup, Fpopup] = useState(false);

  const addExp = (e) => {
    e.preventDefault();
    Fpopup(true);
  }

  const closeAdd = (e) => {
    e.preventDefault();
    Fpopup(false);
  }
  // To stop page scrolling while using popup 
  popup?document.body.style.overflow="hidden":document.body.style.overflow="auto";

  return (
    <>     
      <div className='fixed bottom-10 right-10 h-18 w-48'>
        <div className='flex justify-end'>
          <div>
            <button className='p-5 text-base bg-lgPrimary text-white rounded-full hover:bg-[#554CBF]' onClick={addExp}>
              <BiPlusMedical /> 
            </button>
          </div>
        </div>

        {/* Add pop up section */}
        {popup && <AddExpensePopup closeAdd={closeAdd} groupDetails = {props.groupDetails} />}
      </div>
    </>
  )
}

export default AddExpenses;
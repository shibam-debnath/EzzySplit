import React, { useState } from "react";
import AddExpensePopup from "./AddExpensePopup";
import { BiPlusMedical } from "react-icons/bi";

const AddExpenses = () => {
  const [popup, Fpopup] = useState(false);

  const addExp = (e) => {
    e.preventDefault();
    Fpopup(true);
  };

  const closeAdd = (e) => {
    e.preventDefault();
    Fpopup(false);
  };

  //for div hovering
  const [hovering, setHovering] = useState(false);

  // Function to handle hovering over the div
  function handleHover() {
    setHovering(true);
  }

  // Function to handle moving the mouse off the div
  function handleMouseOut() {
    setHovering(false);
  }

  return (
    <>
      <div className="fixed bottom-10 right-10 h-18 w-48">
        <div className="flex justify-end">
          <div
            onMouseOver={handleHover}
            onMouseOut={handleMouseOut}
            className="flex "
          >
            {hovering && (
              <div className="flex m-2 p-2">
                <p>Add expense</p>
              </div>
            )}
            <button
              className="p-5 text-base bg-lgPrimary text-white rounded-full hover:bg-[#554CBF]"
              onClick={addExp}
            >
              <BiPlusMedical />
            </button>
          </div>
        </div>
        {popup && <AddExpensePopup closeAdd={closeAdd} />}
      </div>
    </>
  );
};

export default AddExpenses;

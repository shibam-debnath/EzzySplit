import React from "react";
import { VscClose } from "react-icons/vsc";
import "./AddDatePopupcss.css";
import Calendar from "./Calendar.jsx";
const AddDatePopup = (props) => {
  return (
    <>
      <div className=" w-[330px] my-auto rounded-xl mx-2 shadow-2xl">
        <div className="bg-primary rounded-t-lg p-2 px-3 flex justify-between ">
          <h5 className=" text-white font-semibold text-lg">Date of Expense</h5>
          <button
            className="hover:text-red-500 text-xl"
            onClick={props.closeAdd}
          >
            <VscClose />
          </button>
        </div>
        <Calendar cngExpDate={props.cngExpDate}
closeAdd={props.closeAdd}/>
      </div>
    </>
  );
};

export default AddDatePopup;

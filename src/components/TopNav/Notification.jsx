import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { NotificationData } from "../../data/NotificationData";
import Button from "../Button/Button";

const Notification = (props) => {
  return (
    <div className="nav-item absolute right-5 md:right-40 top-16 bg-white  p-8 rounded-lg w-96">
      <div className="flex justify-between items-center">
        <div className="flex gap-3">
          <p className="font-semibold text-lg text-primary">Notifications</p>
          <button
            type="button"
            // onClick=
            className="text-primary text-xs rounded p-1 px-2 bg-orange-theme "
          >
            {""}5 New
          </button>
        </div>
        <button className="bg-none text-2xl text-primary rounded-2xl" onClick={props.closeNotification}>
           <MdOutlineCancel />
        </button>
      </div>
      <div className="mt-5 ">
        {NotificationData?.map((item, index) => (
          <div
            key={index}
            className="flex items-center leading-8 gap-5 border-b-1 border-color p-3"
          >
            <img
              className="rounded-full h-10 w-10"
              src={item.image}
              alt={item.message}
            />
            <div>
              <p className="font-semibold text-gray-700">{item.message}</p>
              <p className="text-sm text-gray-400"> {item.desc} </p>
            </div>
          </div>
        ))}
        <div className="mt-5">
          <Button
            color="white"
            bgcolor="rgb(107 96 241 / var(--tw-bg-opacity)"
            text="See all notifications"
            borderradius="10px"
            width="full"
          />
        </div>
      </div>
    </div>
  );
};

export default Notification;

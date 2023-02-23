import React from "react";
const Feature = () => {
  return (
    <div id="Feature" className="w-full  bg-transparent p-6 text-white">
      <h1 className="font-bold text-2xl text-center sm:text-3xl  ">
        Key <span className=" text-bold text-primary">Features</span>{" "}
      </h1>
      <div className="flex flex-wrap justify-center ">
        <div className="flex flex-col cursor-pointer hover:!scale-110 hover:bg-indigo-300/[0.089] w-1/4 rounded-lg  m-2 overflow-hidden sm:w-52">
          <img
            src="./images/collaborative.svg"
            alt=""
            className=" h-10 sm:h-20 m-6 "
          />
          <h1 className="font-bold text-xs  text-slate-300 sm:text-sm">
            Everyone can add
          </h1>
          <div className="pb-3 px-3 mt-3 text-slate-400 text-sm"></div>
        </div>

        <div className="flex flex-col cursor-pointer  hover:!scale-110 hover:bg-indigo-300/[0.089]  w-1/4 rounded-lg  m-2 overflow-hidden sm:w-52">
          <img
            src="./images/notification.svg"
            alt=""
            className=" h-10 sm:h-20 m-6"
          />
          <h1 className="text-xs font-bold  text-slate-300 sm:text-sm">
            Get notified
          </h1>
          <div className="pb-3 px-3 mt-3 text-slate-400 text-sm"></div>
        </div>

        <div className="flex flex-col cursor-pointer  hover:!scale-110 hover:bg-indigo-300/[0.089] w-1/4 rounded-lg m-2 overflow-hidden sm:w-52">
          <img
            src="./images/currencies.svg"
            alt=""
            className="h-10 sm:h-20 m-6"
          />
          <h1 className="font-bold text-xs text-slate-300 sm:text-sm ">
            Use multiple currencies
          </h1>
          <div className="pb-3 px-3 mt-3 text-slate-400 text-sm"></div>
        </div>

        <div className="flex flex-col cursor-pointer  hover:!scale-110 hover:bg-indigo-300/[0.089] w-1/4 rounded-lg  m-2 overflow-hidden sm:w-52">
          <img
            src="./images/add-images.svg"
            alt=""
            className="h-10 sm:h-20 m-6"
          />
          <h1 className="font-bold text-xs text-slate-300 sm:text-sm">
            Add images to your expenses
          </h1>
          <div className="pb-3 px-3 mt-3 text-slate-400 text-sm"></div>
        </div>

        <div className="flex flex-col cursor-pointer hover:!scale-110 hover:bg-indigo-300/[0.089] w-1/4 rounded-lg  m-2 overflow-hidden sm:w-52">
          <img src="./images/uneven.svg" alt="" className="h-10 sm:h-20 m-6" />
          <h1 className="font-bold text-xs text-slate-300 sm:text-sm">
            Split expenses unevenly
          </h1>
          <div className="pb-3 px-3 mt-3 text-slate-400 text-sm"></div>
        </div>

        <div className="flex flex-col cursor-pointer  hover:!scale-110 hover:bg-indigo-300/[0.089] w-1/4 rounded-lg  m-2 overflow-hidden sm:w-52">
          <img src="./images/income.svg" alt="" className="h-10 sm:h-20 m-6" />
          <h1 className="font-bold text-xs  text-slate-300 sm:text-sm">
            Expense, income, transfer
          </h1>
          <div className="pb-3 px-3 mt-3 text-slate-400 text-sm"></div>
        </div>

        <div className="flex flex-col cursor-pointer hover:!scale-110 hover:bg-indigo-300/[0.089] w-1/4 rounded-lg  m-2 overflow-hidden sm:w-52">
          <img
            src="./images/language.svg"
            alt=""
            className="h-10 sm:h-20 m-6"
          />
          <h1 className="font-bold text-xs text-slate-300 sm:text-sm">
            Many Languages
          </h1>
          <div className="pb-3 px-3 mt-3 text-slate-400 text-sm"></div>
        </div>

        <div className="flex flex-col cursor-pointer hover:!scale-110 hover:bg-indigo-300/[0.089] w-1/4 rounded-lg  m-2 overflow-hidden sm:w-52">
          <img src="./images/chat.svg" alt="" className="h-10 sm:h-20 m-6" />
          <h1 className="font-bold text-xs text-slate-300 sm:text-sm">
            Live chat
          </h1>
          <div className="pb-3 px-3 mt-3 text-slate-400 text-sm"></div>
        </div>

        <div className="flex flex-col cursor-pointer  hover:!scale-110 hover:bg-indigo-300/[0.089] w-1/4 rounded-lg  m-2 overflow-hidden sm:w-52">
          <img src="./images/payment.svg" alt="" className="h-10 sm:h-20 m-6" />
          <h1 className="font-bold text-xs text-slate-300 sm:text-sm">
            Direct Payment
          </h1>
          <div className="pb-3 px-3 mt-3 text-slate-400 text-sm"></div>
        </div>
      </div>
    </div>
  );
};

export default Feature;

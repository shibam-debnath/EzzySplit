import React from "react";

const Feature = () => {
  return (
    <div className="w-full  bg-gray-900 p-6 text-white">
      <h1 className="font-bold text-3xl text-center  ">Key <span className=" text-bold text-primary">Features</span> </h1>
      <div className="flex flex-wrap justify-center">

        <div className="flex flex-col  rounded-lg w-full m-6 overflow-hidden sm:w-52">
          <img src="./images/collaborative.svg" alt="" className="h-20 m-6" />
          <h1 className="font-bold">Everyone can add</h1>
          <div className="pb-3 px-3 mt-3 text-slate-400 text-sm">Your friends can join via their phones or online to add expenses and check their balances.</div>
        </div>

        <div className="flex flex-col  rounded-lg w-full m-6 overflow-hidden sm:w-52">
          <img src="./images/notification.svg" alt="" className="h-20 m-6" />
          <h1 className="font-bold">Get notified</h1>
          <div className="pb-3 px-3 mt-3 text-slate-400 text-sm">Receive immediate updates whenever your friends add, edit or delete a shared expense.</div>
        </div>

        <div className="flex flex-col  rounded-lg w-full m-6 overflow-hidden sm:w-52">
          <img src="./images/currencies.svg" alt="" className="h-20 m-6" />
          <h1 className="font-bold">Use multiple currencies</h1>
          <div className="pb-3 px-3 mt-3 text-slate-400 text-sm">Convert every purchase to one currency, no matter where you go, for transparency across all your accounts.</div>
        </div>

        <div className="flex flex-col  rounded-lg w-full m-6 overflow-hidden sm:w-52">
          <img src="./images/add-images.svg" alt="" className="h-20 m-6" />
          <h1 className="font-bold">Add images to your expenses</h1>
          <div className="pb-3 px-3 mt-3 text-slate-400 text-sm">Save receipts, share spontaneous selfies and remember happy moments.</div>
        </div>

        <div className="flex flex-col  rounded-lg w-full m-6 overflow-hidden sm:w-52">
          <img src="./images/uneven.svg" alt="" className="h-20 m-6" />
          <h1 className="font-bold">Split expenses unevenly</h1>
          <div className="pb-3 px-3 mt-3 text-slate-400 text-sm">Not every cost will be split equally. Set a different level of reimbursement for each person.</div>
        </div>

        <div className="flex flex-col  rounded-lg w-full m-6 overflow-hidden sm:w-52">
          <img src="./images/offline.svg" alt="" className="h-20 m-6" />
          <h1 className="font-bold">Works offline</h1>
          <div className="pb-3 px-3 mt-3 text-slate-400 text-sm">You won't always have an internet connection on your holiday, but you'll still be able to add your expenses to EzzySplit.</div>
        </div>

        <div className="flex flex-col  rounded-lg w-full m-6 overflow-hidden sm:w-52">
          <img src="./images/income.svg" alt="" className="h-20 m-6" />
          <h1 className="font-bold">Expense, income, transfer</h1>
          <div className="pb-3 px-3 mt-3 text-slate-400 text-sm">You paid or received money for the group? You advanced money to your friend? Track it all easily!</div>
        </div>

      </div>
    </div>
  );
};

export default Feature;

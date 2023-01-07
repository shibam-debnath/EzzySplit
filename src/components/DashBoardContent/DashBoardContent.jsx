import React from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { earningData } from "../../data/DashBoardData";
import AddExpenses from "./AddExpenses";

const DashBoardContent = () => {
  const currentColor = "var(--primary-font)";
  return (
    <>
      <div className="fixed bottom-0 right-0 border-2 border-r-emerald-500 w-fit">
      <AddExpenses/>
      </div>
    <div className="mt-6">
      <div className="flex w-full flex-wrap justify-left ">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full p-8 pt-9 m-6 bg-no-repeat bg-cover bg-center">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-gray-400 flex">Hi,</p>
              <p className="text-gray-400 text-2xl font-bold">Shibam !</p>
            </div>
            <button
              type="button"
              className="text-2xl opacity-0.9 text-white hover:drop-shadow-xl rounded-full  p-4"
            >
              <BsCurrencyDollar />
            </button>
          </div>
          <div className="mt-0">
            <button
              color={currentColor}
              bgColor="black"
              text="Download"
              borderRadius="10px"
            />
          </div>
        </div>
        <div className="width-full flex m-6 flex-wrap justify-left gap-10  items-center">
          {earningData.map((item) => (
            <div
              key={item.title}
              className="bg-white h-44 dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56  p-4 pt-9 rounded-2xl "
            >
              <button
                type="button"
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className="text-2xl opacity-0.9 rounded-full  p-4 hover:drop-shadow-xl"
              >
                {item.icon}
              </button>
              <p className="mt-3">
                <span className="text-lg font-semibold">{item.amount}</span>
              </p>
              <p className="text-sm text-gray-400  mt-1">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default DashBoardContent;

import React, { useEffect, useState } from "react";
import axios from "axios";

import AddExpenses from "./AddExpenses";
import { BarLoader } from "react-spinners";

// icons
import { BsCurrencyDollar } from "react-icons/bs";
import { IoPeopleSharp } from "react-icons/io5";
import { GiReceiveMoney, GiPayMoney } from "react-icons/gi";

const DashBoardContent = () => {
  const currentColor = "var(--primary-font)";
  const [beforeFetch, fbeforeFetch] = useState(0);

  const [userData, setData] = useState([]);
  const [grData, setgroupData] = useState({});

  const set = () => {
    setTimeout(() => {
      fbeforeFetch(1);
    }, 500);
  };

  const groupData = async () => {
    try {
      await axios
        .get("http://localhost:8000/group/details/63fb8b5629ce0c8a774c4159", {
          responseType: "json",
        })
        .then(function (resp) {
          setgroupData(resp.data.group);
          console.log(resp);
          // console.log(response.data.group.expenseId);
          // console.log(response.data.group.expenseId[0].amount);
          // console.log(grData);
        });
    } catch (err) {
      console.log(err);
    }
  };

  // console.log(`hello1 :${temp[1]}`);
  const getData = async () => {
    try {
      await axios
        .get("http://localhost:8000/user/profile/63d38658cd073fceefefe135", {
          responseType: "json",
        })
        .then(function (response) {
          setData(response.data.users);
          set();
        });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    groupData();
  }, []);

  // console.log(userData);
  // console.log(grData.expenseId);
  // console.log(userData.users);

  const earningData = [
    {
      icon: <GiReceiveMoney />,
      title: "Total Spent",
      amount: userData.totalAmountToPay,
      // amount: userData.users.totalAmountpaid,
      iconColor: "#03C9D7",
      iconBg: "#E5FAFB",
    },
    {
      icon: <GiPayMoney />,
      title: "You Owe",
      amount: userData.totalAmountpaid,
      iconColor: "rgb(255 158 18)",
      iconBg: "rgb(255 211 55 / 21%)",
    },
    {
      icon: <IoPeopleSharp />,
      title: "Amount Left to Pay",
      amount: userData.totalAmountRecieved,
      iconColor: "rgb(228, 106, 118)",
      iconBg: "rgb(255, 244, 229)",
    },
  ];

  let valueDisplays = document.querySelectorAll(".num");
  let interval = 1;

  valueDisplays.forEach((valueDisplay) => {
    let startValue = 0;
    let endValue = valueDisplay.getAttribute("data-val");

    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function () {
      startValue += 1;
      valueDisplay.textContent = startValue;
      if (startValue >= endValue) {
        clearInterval(counter);
      }
    }, duration);
  });

  let count = 0;

  return (
    <>
      <div>
        <AddExpenses />
      </div>
      <div className="mt-6">
        <div className="flex w-full flex-wrap justify-left ">
          <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full p-8 pt-9 m-6 bg-no-repeat bg-cover bg-center">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-bold text-gray-400 flex">Hi,</p>
                {/* <p className="text-gray-400 text-2xl font-bold"> */}
                {beforeFetch === 1 && (
                  <div className="flex-col">
                    <p className="text-gray-400 text-2xl font-bold">
                      {userData.name} 
                    </p>
                  </div>
                )}
                {beforeFetch === 0 && (
                  <p className="text-gray-400 text-2xl font-bold">
                    <BarLoader color="#f5f5f5" height={25} />
                  </p>
                )}
                {/* </p> */}
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
                bgcolor="black"
                text="Download"
                borderradius="10px"
              />
            </div>
          </div>
          <div className="width-full flex m-6 justify-left gap-10  items-center">
            {earningData.map((item) => (
              <div
                key={item.title}
                className="bg-white h-44 dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56  p-4 pt-9 rounded-2xl "
              >
                <button
                  type="button"
                  style={{
                    color: item.iconColor,
                    backgroundColor: item.iconBg,
                  }}
                  className="text-2xl opacity-0.9 rounded-full  p-4 hover:drop-shadow-xl"
                >
                  {item.icon}
                </button>
                <p className="mt-3">
                  <span
                    className="text-lg font-semibold num"
                    data-val={item.amount}
                  >
                    0
                  </span>
                </p>
                <p className="text-sm text-gray-400  mt-1">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* expenses history content starting...*/}
      <div className="mt-6 flex flex-wrap">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-[32rem] rounded-xl w-full p-8 pt-6 m-6 bg-no-repeat bg-cover bg-center">
          <div className="text-gray-700 text-2xl font-bold pb-2 border-b-2 border-spacing-y-12  border-gray-200">
            {" "}
            Expenses History{" "}
          </div>
          <div className="text-gray-400 m-2 flex border-b-2 ">
            <div className="p-2 w-[4rem]">S.No.</div>
            <div className="p-2 w-1/4">Name</div>
            <div className="p-2 w-1/4">Amount</div>
            <div className="p-2 w-1/4">Paid by</div>
            <div className="p-2 w-1/4">Date</div>
          </div>
          <div className="overflow-hidden scrollbar-none scroll-smooth">
            {grData.expenseId ? (
              grData.expenseId.map((expenses) => (
                <div className="">
                  <div
                    key={expenses._id}
                    className="text-black m-2 flex border-b-2"
                  >
                    <div className="px-2 w-[4rem]">{count++}</div>
                    <div className="px-2 w-1/4">{expenses.notes}</div>
                    <div className="px-2 w-1/4">{expenses.amount}</div>
                    <div className="px-2 w-1/4">Paid by</div>
                    <div className="px-2 w-1/4">{expenses.date}</div>
                  </div>
                </div>
              ))
            ) : (
              <p>Add expenses and leave up to Us</p>
            )}

          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoardContent;

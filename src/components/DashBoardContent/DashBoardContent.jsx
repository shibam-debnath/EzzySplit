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

  const set = () => {
    setTimeout(() => {
      fbeforeFetch(1);
    }, 500);
  };

  const getData = async () => {
    try {
      axios
        .get("http://localhost:8000/user/profile/63f7a37883b9e985364c5a68", {
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

  // console.log(userData);
  // console.log(userData.name);

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
                  <p className="text-gray-400 text-2xl font-bold">
                    {userData.name}
                  </p>
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
                  style={{
                    color: item.iconColor,
                    backgroundColor: item.iconBg,
                  }}
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

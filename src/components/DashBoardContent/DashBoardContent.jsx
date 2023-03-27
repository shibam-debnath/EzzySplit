import React, { useEffect, useState } from "react";
import axios from "axios";
import AddExpenses from "./AddExpenses";
import { BarLoader } from "react-spinners";

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  plugins,
} from "chart.js";

import { Doughnut, Bar, Line } from "react-chartjs-2";

// icons
import { IoPeopleSharp } from "react-icons/io5";
import { GiReceiveMoney, GiPayMoney } from "react-icons/gi";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
);

const DashBoardContent = () => {
  const currentColor = "var(--primary-font)";
  const [beforeFetch, fbeforeFetch] = useState(0);

  const [userData, setData] = useState([]);
  const [grData, setgroupData] = useState({});
  // let userid = "63d38658cd073fceefefe135";

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
      axios
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
    groupData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // useEffect(() => {

  // }, []);

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

  const chartdata = {
    labels: ["Food", "Travel", "Hotel", "Shopping", "Rituraj"],
    datasets: [
      {
        backgroundColor: [
          "#F7EDE2",
          "#F5CAC3",
          "#FFCD7C",
          "#F28482",
          "#C3F5D4",
        ],
        borderColor: ["#F7EDE2", "#F5CAC3", "#FFCD7C", "#F28482", "#C3F5D4"],
        label: "Total Expenses",
        data: [5, 6, 7, 3, 2],
      },
    ],
  };

  const dailydata = {
    labels: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 28, 29, 30,
    ],
    datasets: [
      {
        backgroundColor: ["#6B60F1"],
        borderColor: ["#6B60F1"],
        label: "No of expenses added",
        fill: true,
        tension: 0.5,
        data: [
          2, 0, 1, 5, 3, 0, 8, 4, 4, 5, 5, 6, 7, 3, 2, 3, 4, 5, 6, 2, 1, 3, 2,
          4, 2, 5, 7, 6, 3, 1,
        ],
      },
    ],
  };

  let count = 1;

  return (
    <>
      <div>
        <AddExpenses />
      </div>
      <div className="mt-6">
        <div className="flex w-full flex-wrap justify-left ">
          <div className="bg-lgPrimary dark:text-gray-200  h-44 rounded-xl w-full pr-8 pl-8 mx-10 my-5 bg-no-repeat bg-cover bg-center">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-bold text-white flex">Hi,</p>
                {/* <p className="text-gray-400 text-2xl font-bold"> */}
                {beforeFetch === 1 && (
                  <div className="flex-col">
                    <p className="text-white text-2xl font-bold">
                      {userData.name}
                    </p>
                  </div>
                )}
                {beforeFetch === 0 && (
                  <p className="text-gray-400 text-2xl font-bold">
                    <BarLoader color="#f5f5f5" height={25} />
                  </p>
                )}
              </div>
              <div className="">
                <img className="h-48" src="../images/coin_banner.png" alt="" />
              </div>
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
          <div className="width-full flex mx-10 my-6 justify-left gap-10  items-center">
            {earningData.map((item) => (
              <div
                key={item.title}
                className="bg-white h-44 md:w-56  p-4 pt-9 rounded-2xl "
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
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-[32rem] rounded-xl w-full pt-6 m-6 bg-no-repeat bg-cover bg-center ">
          <div className="text-gray-700 text-2xl font-bold pb-2 border-b-2 border-spacing-y-12  border-gray-200">
            {" "}
            Expenses History{" "}
          </div>
          <div className="text-gray-400 ml-8 mr-8 m-2 flex border-b-2  ">
            <div className="p-2 w-[4rem]">S.No.</div>
            <div className="p-2 w-1/4">Name</div>
            <div className="p-2 w-1/4">Amount</div>
            <div className="p-2 w-1/4">Paid by</div>
            <div className="p-2 w-1/4">Date</div>
          </div>

          <div className="overflow-hidden scrollbar-none scroll-smooth">
            {grData.expenseId ? (
              grData.expenseId.map((expenses) => (
                <div className="overflow-auto scrollbar-none hover:overflow-scroll">
                  <div
                    key={expenses._id}
                    className="text-black ml-8 mr-8 m-2 flex border-b-2"
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

      {/*  strating of the different charts section... */}

      <div className="flex flex-col ">
        <div className="flex flex-row md:w-full">
          <div className="bg-white h-72 rounded-xl m-6 w-7/12">
            <div className="border-b-2 mt-2 mb-2 pb-2 pl-4 text-left text-black ">
              Members' Expenditure
            </div>
            <div className="flex justify-center m-auto  p-4  ">
              suraj $100000 shibam$100000
            </div>
          </div>

          <div className="bg-white h-72 rounded-xl m-6 w-5/12">
            <div className="border-b-2 mt-2 mb-2 pb-2 pl-4 text-left">
              Category wise Expenditure
            </div>
            <div className="flex justify-center m-auto h-60 p-4  ">
              <Doughnut data={chartdata} />{" "}
            </div>
          </div>
        </div>

        <div className="flex flex-row md:w-full">
          <div className="bg-white rounded-xl m-6 w-7/12">
            <div className="border-b-2 mt-2 mb-2 text-left  pb-2 pl-4">
              Frequency of expenses
            </div>
            <div className="flex justify-center h-80 w-auto p-2">
              <Line data={dailydata} />
            </div>
          </div>
          <div className="bg-white rounded-xl m-6 w-5/12"></div>
        </div>
      </div>
    </>
  );
};

export default DashBoardContent;

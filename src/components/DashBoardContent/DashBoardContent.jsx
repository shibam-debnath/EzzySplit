import React, { useEffect, useState } from "react";
import axios from "axios";
import AddExpenses from "./AddExpenses";
import { BarLoader } from "react-spinners";
import { BiX, BiRupee } from "react-icons/bi";

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
  elements,
} from "chart.js";

import { Doughnut, Line } from "react-chartjs-2";

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
  const [expend, setexpend] = useState([]);
  const [settleExpenseData, setsettleExpenseData] = useState({});
  const [displayExpenseData, setDisplayExpenseData] = useState(false);
  const [expenseId, setExpenseId] = useState({});
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
          console.log(resp.data);
        });
    } catch (err) {
      console.log(err);
    }
  };

  const getData = async () => {
    try {
      await axios
        .get("http://localhost:8000/user/profile/63ce3de792e27a2fabc7d06c", {
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

  const settleExpense = async () => {
    try {
      axios
        .get("http://localhost:8000/group/settle/63fb8b5629ce0c8a774c4159", {
          responseType: "json",
        })
        .then(function (response) {
          // console.log(response.data);
          setsettleExpenseData(response.data);
          // fexpend();
          // set();
        });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
    groupData();
    settleExpense();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    fexpend();
  }, [settleExpenseData]);

  // console.log(userData);
  // console.log(grData.expenseId);
  // console.log(userData.users);
  // console.log(settleExpenseData);
  const fexpend = async () => {
    const temp = [];
    if (settleExpenseData && grData) {
      for (var i = 0; i < grData.userId.length; i++) {
        const singleData = {
          name: "",
          paid: "",
          expense: "",
        };
        singleData.name = grData.userId[i].name;
        singleData.paid = settleExpenseData[1][grData.userId[i]._id];
        singleData.expense = settleExpenseData[0][grData.userId[i]._id];
        temp.push(singleData);
      }
    }
    if (temp) setexpend(temp);
  };

  useEffect(() => {
    console.log("expend");
    // console.log(expend);
    // expend.forEach((element) => {
    //   console.log(element.name);
    //   console.log(element.expense);
    // });
  }, [expend]);

  // useEffect(()=>{
  //   fexpend();
  // },[grData]);
  const settleExpenseCall = async () => {
    console.log("clicked");
    if (!grData.expend) {
      return <div className="bg-white text-black">No expense exist</div>;
    } else {
      return <div classname="bg-white text-black">Expense settled</div>;
    }
  };

  function displayExpense(expenses) {
    // expenses.preventdefault();
    // console.log("expense div clicked");
    // console.log(expenses);
    setDisplayExpenseData(true);
    setExpenseId(expenses);
  }

  const closeDisplayExpense = () => {
    setDisplayExpenseData(false);
  };
  const earningData = [
    {
      icon: <GiReceiveMoney />,
      title: "Total Spent",
      amount: userData.totalAmountToPay,
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
    labels: ["Food", "Travel", "Hotel", "Shopping", "Others"],
    datasets: [
      {
        backgroundColor: [
          "#a366ff",
          "#944dff",
          "#8533ff",
          "#751aff",
          "#6600ff",
        ],
        borderColor: ["#ffffff "],
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

  const style = {
    height: "-webkit-fill-available",
  };

  displayExpenseData
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "auto");
  return (
    <>
      <div>
        <AddExpenses groupDetails={grData} />
      </div>
      <div className="mt-6">
        <div className="flex w-full flex-wrap justify-left ">
          <div className="bg-lgPrimary dark:text-gray-200 h-44 rounded-xl w-full pr-8 pl-8 mx-10 my-5 bg-no-repeat bg-cover bg-center">
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
          <div className=" flex justify-between pb-2 pl-6 pr-8 border-b-2 border-spacing-y-12  border-gray-200">
            <div className="text-gray-700 text-2xl font-bold ">
              Expenses History
            </div>
            <button
              className="flex justify-end text-white p-2 bg-lgPrimary rounded-2xl"
              onClick={settleExpenseCall}
            >
              Settle expense
            </button>
          </div>
          <div className="text-gray-400 ml-8 mr-8 mt-2 flex border-b-2  ">
            <div className="p-2 w-[4rem]">S.No.</div>
            <div className="p-2 w-1/4">Name</div>
            <div className="p-2 w-1/4">Amount</div>
            <div className="p-2 w-1/4">Paid by</div>
            <div className="p-2 w-1/4">Expense Added on</div>
          </div>

          {/* to display the complete details of an expense starting... */}

          {displayExpenseData && (
            <div className="fixed inset-0 bg-white bg-opacity-70  backdrop-blur-sm bg-fixed flex justify-center">
              <div className=" h-3/5 mt-20 bg-white w-[425px] pb-3 text-black rounded-xl border-2 border-primary">
                <div className=" flex justify-between p-4  bg-primary rounded-t-xl">
                  <div className="text-white text-2xl">Expense Description</div>
                  <div>
                    <BiX
                      className=" text-2xl cursor-pointer"
                      onClick={closeDisplayExpense}
                    />
                  </div>
                </div>
                <div className="h-4/5 overflow-y-auto scrollbar-none smooth-scroll mt-2">
                  <div className="flex-row pt-0 p-4 ">
                    <div className="flex justify-start pt-1 p-2">
                      <div className="text-gray-500">Description:&nbsp;</div>
                      <div>{expenseId.description}</div>
                    </div>
                    <div className="flex justify-start p-2">
                      <div className="text-gray-500">Amount:&nbsp;</div>
                      <div>₹{expenseId.amount}</div>
                    </div>
                    <div className="flex justify-start p-2">
                      <div className="text-gray-500">
                        Date of Expense:&nbsp;
                      </div>
                      <div></div>
                    </div>
                    <div className="flex justify-start p-2">
                      <div className="text-gray-500">
                        Expense added on:&nbsp;
                      </div>
                      <div>
                        {expenseId.date
                          .substring(0, 10)
                          .split("-")
                          .reverse()
                          .join("-")}
                      </div>
                    </div>
                    <div className="flex justify-start p-2">
                      <div className="text-gray-500">Paid By: &nbsp;</div>
                      <div>
                        {expenseId.paidBy.map((items) => {
                          return (
                            <div>
                              {items.userId.name}-&nbsp;₹{items.amount}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    <div className="flex justify-start p-2">
                      <div className="text-gray-500">Split Method:&nbsp;</div>
                      <div>{expenseId.split_method}</div>
                    </div>
                    <div className="flex justify-start p-2">
                      <div className="text-gray-500">Split Between:&nbsp;</div>
                      <div>
                        {expenseId.split_between.length > 0 ? (
                          expenseId.split_between.map((items) => {
                            return (
                              <div>
                                {items.user.name}-&nbsp;₹{items.toPay}
                              </div>
                            );
                          })
                        ) : (
                          <div>All and equally</div>
                        )}
                      </div>
                    </div>
                    <div className="flex justify-start p-2">
                      <div className="text-gray-500">Notes:&nbsp;</div>
                      <div></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
{/* to display the complete details of an expense ends */}

          <div className="h-[26rem] overflow-y-auto scrollbar-none scroll-smooth">
            {grData.expenseId ? (
              grData.expenseId.map((expenses) => (
                <div className="">
                  <div
                    key={expenses._id}
                    className="text-black ml-8 mr-8  flex border-b-2 cursor-pointer hover:bg-gray-100"
                    onClick={() => displayExpense(expenses)}
                  >
                    <div className="px-2 py-2 w-[4rem]">{count++}</div>
                    <div className="px-2 py-2 w-1/4">
                      {expenses.description}
                    </div>
                    <div className="px-2 py-2 w-1/4">₹{expenses.amount}</div>
                    <div className="px-2 py-2 w-1/4 flex justify-center h-8 overflow-x-auto overflow-y-auto scrollbar-none">
                      {expenses.paidBy.length > 1 ? (
                        expenses.paidBy.map((items) => {
                          return (
                            <div className="flex">
                              {items.userId.name},&nbsp;
                            </div>
                          );
                        })
                      ) : (
                        <div className="flex">
                          {expenses.paidBy[0].userId.name}
                        </div>
                      )}
                    </div>
                    <div className="px-2 py-2 w-1/4">
                      {expenses.date
                        .substring(0, 10)
                        .split("-")
                        .reverse()
                        .join("-")}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="h-full w-full text-2xl">
                Add expenses and left leave up to Us
              </div>
            )}
          </div>
        </div>
      </div>

      {/*  strating of the different charts section... */}

      <div className="flex flex-col ">
        <div className="flex flex-row md:w-full">
          <div className="bg-white h-72 rounded-xl m-6 w-7/12">
            <div className="border-b-2 mt-2 mb-2 pb-2 pl-4 text-left text-black ">
              Group Members
            </div>
            <div className="text-gray-400 ml-8 mr-8 pb-2 flex border-b-2 scrollbar-none">
              <div className="px-2 w-1/3">Name </div>
              <div className="px-2 w-1/3">Paid</div>
              <div className="px-2 w-1/3">Expense</div>
            </div>

            <div className=" m-auto h-48 overflow-y-auto scrollbar-none">
              {expend.length > 0 ? (
                expend.map((element) => {
                  return (
                    <div className="text-black ml-8 mr-8 pb-2 flex ">
                      <div className="px-2 w-1/3">{element.name}</div>
                      <div className="px-2 w-1/3">₹{element.paid}</div>
                      <div className="px-2 w-1/3">₹{element.expense}</div>
                    </div>
                  );
                })
              ) : (
                <div className="text-gray-400 h-full w-full ">
                  Nothing to show here
                </div>
              )}
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
          <div className="bg-white rounded-xl h-80 m-6 p-4 w-5/12 flex justify-center">
            <img
              style={style}
              src="../images/boy.jpg"
              alt="Click Me to settle expense"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoardContent;

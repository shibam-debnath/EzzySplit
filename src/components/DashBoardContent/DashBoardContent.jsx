import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import AddExpenses from "./AddExpenses";
import { BarLoader } from "react-spinners";
import { useNavigate, useLocation } from "react-router";
import { auth } from "../../firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
} from "chart.js";

import { Doughnut, Line } from "react-chartjs-2";

// icons
import { IoPeopleSharp } from "react-icons/io5";
import { GiReceiveMoney, GiPayMoney, GiExpense } from "react-icons/gi";
import { BiX } from "react-icons/bi";
import { RiDeleteBin5Line } from "react-icons/ri";
import EditExpensesPopup from "./EditExpensesPopup";

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
  const location = useLocation();
  const userId = useRef("");
  const groupId = useRef("");
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("checking the user ");
    if (user === null) {
      return navigate("/login");
    } else {
      console.log("Accessing the user ");
      console.log(user.displayName);
      var temp = user.displayName.split("---");
      userId.current = temp[0];
      groupId.current = temp[1];

      if (groupId.current === "undefined") {
        console.log("idhar aaya hai dekhho");
        navigate("/dashboard/newGroup");
      }

      console.log(userId.current);
    }
    // eslint-disable-next-line
  }, [user]);

  console.log(location.state);
  if (location.state) {
    groupId.current = location.state.groupid;
  }

  const currentColor = "var(--primary-font)";
  const [isHovered, setIsHovered] = useState(false);
  const [beforeFetch, fbeforeFetch] = useState(0);
  const [userData, setData] = useState([]);
  const [grData, setgroupData] = useState({});

  const [expend, setexpend] = useState([]);
  const [cardData, setCardData] = useState({
    amount: "0",
    member: "0",
    paid: "0",
    expense: "0",
  });

  const [settleExpenseData, setsettleExpenseData] = useState({});
  const [displayExpenseData, setDisplayExpenseData] = useState(false);
  const [editExpenseData, seteditExpenseData] = useState(false);
  const [expenseId, setExpenseId] = useState({});

  const [groupMembers, setGroupMembers] = useState("");
  const [members, setMembers] = useState([]);
  console.log(members);

  const [settleCall, setSettleCall] = useState(false);
  const [settleCall2, setSettleCall2] = useState(false);
  const [settleCallData, setSettleCallData] = useState([]);

  const [deleteExpenseId, setDeleteExpenseId] = useState(false);
  const [expenseIdToDelete, setExpenseIdToDelete] = useState({});

  const [doughnutData, setDoughnutData] = useState([]);
  const [lineData, setLineData] = useState([]);
  const [lineDataLabel, setLineDataLabel] = useState([]);

  const set = () => {
    setTimeout(() => {
      fbeforeFetch(1);
    }, 500);
  };

  const getData = async () => {
    try {
      await axios
        .get(
          `${process.env.REACT_APP_BASE_URL}/user/profile/${userId.current}`,
          {
            responseType: "json",
          }
        )
        .then(function (response) {
          setData(response.data.users);
          set();
        });
    } catch (err) {
      console.log(err);
    }
  };

  const groupData = async () => {
    try {
      await axios
        .get(
          `${process.env.REACT_APP_BASE_URL}/group/details/${groupId.current}`,
          {
            responseType: "json",
          }
        )
        .then(function (resp) {
          settleExpense();
          setgroupData(resp.data.group);
          console.log(resp.data);
        });
    } catch (err) {
      console.log(err);
    }
  };

  function handleGroupMembers(event) {
    setGroupMembers(event.target.value);
    console.log("groupMembers called");
    console.log(groupMembers);
  }
  function handleSubmit(event) {
    event.preventDefault();
    if (groupMembers) {
      const temp = groupMembers.split(",");
      console.log("setmmbers called");
      console.log("inviteusers called");
      setMembers(temp);
      console.log(members);
    }

    // if (members) {
    //   inviteUsers();
    // }
    // handle form submission here
  }

  useEffect(() => {
    if (members.length > 0) inviteUsers();
  }, [members]);

  const inviteUsers = async () => {
    var flag = 0;
    for (let i = 0; i < members.length; i++) {
      // console.log("memebrs[i]")
      // console.log(members[i]);
      let config = {
        method: "post",
        url: `${process.env.REACT_APP_BASE_URL}/group/inviteUser`,
        data: {
          groupName: grData._name,
          emailId: members[i],
          groupId: grData._id,
        },
      };

      try {
        const response = await axios(config);
        console.log(response);
        if (response.status === 201) {
          if (flag === 0) {
            alert("Invitation sent");
            flag = 1;
          }
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  const settleExpense = async () => {
    try {
      axios
        .get(
          `${process.env.REACT_APP_BASE_URL}/group/settle/${groupId.current}`,
          {
            responseType: "json",
          }
        )
        .then(function (response) {
          console.log("response.data");
          console.log(response.data);
          setsettleExpenseData(response.data);
          // fexpend();
          // set();
        });

      console.log("IN settle exp 1");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
    groupData();
    // settleExpense();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // console.log(userData);
  // console.log(grData.expenseId);
  // console.log(userData.users);
  // console.log(settleExpenseData);

  // console.log("settleExpenseData1");
  // console.log(settleExpenseData);

  const fexpend = async () => {
    console.log("in fexap fun 3");
    const temp = [];
    const temp2 = {};
    const temp4 = { amount: "0", paid: "0", expense: "0", member: "0" };

    console.log("grData");
    console.log(grData);
    console.log(settleExpenseData);
    if (settleExpenseData && grData) {
      for (let i = 0; i < grData.userId.length; i++) {
        temp2[grData.userId[i]._id] = grData.userId[i].name;
        const singleData = {
          name: "",
          paid: "",
          expense: "",
        };
        singleData.name = grData.userId[i].name;
        singleData.paid = settleExpenseData[1][grData.userId[i]._id];
        singleData.expense = settleExpenseData[0][grData.userId[i]._id];
        temp.push(singleData);
        if (grData.userId[i]._id === userId.current) {
          temp4.amount = grData.total;
          temp4.member = grData.userId.length;
          if (
            settleExpenseData[1][grData.userId[i]._id] >
            settleExpenseData[0][grData.userId[i]._id]
          )
            temp4.paid =
              settleExpenseData[1][grData.userId[i]._id] -
              settleExpenseData[0][grData.userId[i]._id];
          else if (
            settleExpenseData[0][grData.userId[i]._id] >
            settleExpenseData[1][grData.userId[i]._id]
          )
            temp4.expense =
              settleExpenseData[0][grData.userId[i]._id] -
              settleExpenseData[1][grData.userId[i]._id];
        }
      }
    }

    setCardData(temp4);
    console.log("temp4");
    console.log(temp4);
    console.log("Temp:");
    console.log(temp);
    if (temp.length > 0) setexpend(() => [...temp]);

    const temp3 = [];
    if (settleExpenseData && grData) {
      for (let i = 0; i < settleExpenseData[2].length; i++) {
        const singleData = {
          payer: "",
          receiver: "",
          amount: "",
        };
        singleData.payer = temp2[settleExpenseData[2][i].payer];
        singleData.receiver = temp2[settleExpenseData[2][i].receiver];
        singleData.amount = settleExpenseData[2][i].amount;
        temp3.push(singleData);
      }
    }
    if (temp3) setSettleCallData(temp3);

    if (grData) {
      const temp5 = [0, 0, 0, 0, 0];
      const temp6 = [];
      const temp7 = [];
      for (var i = grData.expenseId.length - 1; i >= 0; i--) {
        if (grData.expenseId[i].category === "Ticket")
          temp5[0] += Number(grData.expenseId[i].amount);
        if (grData.expenseId[i].category === "Food")
          temp5[1] += Number(grData.expenseId[i].amount);
        if (grData.expenseId[i].category === "Shopping")
          temp5[2] += Number(grData.expenseId[i].amount);
        if (grData.expenseId[i].category === "Hotel")
          temp5[3] += Number(grData.expenseId[i].amount);
        else if (grData.expenseId[i].category === "Others")
          temp5[4] += Number(grData.expenseId[i].amount);

        const temp8 = grData.expenseId[i].date
          .substring(0, 10)
          .split("-")
          .reverse()
          .join("-");
        const date = temp8.substring(0, 5);
        console.log("date");
        console.log(date);
        const length = temp6.length;
        if (length < 30 || temp6[length - 1] === date) {
          if (temp6[length - 1] === date) {
            temp7[length - 1] =
              Number(temp7[length - 1]) + Number(grData.expenseId[i].amount);
          } else {
            temp6.push(date);
            temp7.push(grData.expenseId[i].amount);
          }
        }
      }
      setDoughnutData(temp5);
      console.log("temp5");
      console.log(temp5);

      temp6.reverse();
      temp7.reverse();
      setLineDataLabel(temp6);
      setLineData(temp7);
    }
  };

  useEffect(() => {
    console.log("In useeffect of fexpan2");
    fexpend();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [settleExpenseData]);

  useEffect(() => {}, [expend]);

  const settleExpenseCall = async () => {
    setSettleCall(true);
  };

  const settleExpenseCall2 = async () => {
    console.log("clicked2");
    console.log(settleCall2);
    setSettleCall2(true);
    setSettleCall(false);
    isSettled();
    console.log(settleCall2);
  };

  function isSettled() {
    try {
      axios
        .post(
          `${process.env.REACT_APP_BASE_URL}/group/isSettled/${groupId.current}/true`,
          {
            responseType: "json",
          }
        )
        .then(function (response) {
          console.log("response.data");
          console.log(response);
          // fexpend();
          // set();
          console.log(response.status);
        });
    } catch (err) {
      console.log(err);
    }
  }

  const fdeleteExpense = () => {
    console.log("expense");
    console.log(expenseIdToDelete._id);
    try {
      axios
        .delete(
          `${process.env.REACT_APP_BASE_URL}/expense/delete/${expenseIdToDelete._id}`,
          {
            responseType: "json",
          }
        )
        .then(function (response) {
          console.log("response.data after deleting call");
          console.log(response);
          setExpenseIdToDelete("");
          getData();
          groupData();
          // fexpend();
          // set();
          console.log(response.status);
        });
    } catch (err) {
      console.log(err);
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
    setSettleCall(false);
  };

  const closeDisplayExpense2 = () => {
    setSettleCall2(false);
    // navigate("/");
    // navigate("/dashboard/");
    getData();
    groupData();
  };

  const deleteExpense = (expenses) => {
    // expenses.preventdefault();
    // console.log("expense div clicked");
    // console.log(expenses);

    setDisplayExpenseData(false);
    setSettleCall(false);
    setSettleCall2(false);
    setDeleteExpenseId(true);
    console.log("expenseId deleting called");
    console.log(expenses);
    console.log(expenseIdToDelete);
    setExpenseIdToDelete(expenses);
    console.log(expenseIdToDelete);
    // setExpenseId(expenses);
  };

  const deleteExpenseCall = () => {
    fdeleteExpense();
    setDisplayExpenseData(false);
    setSettleCall(false);
    setSettleCall2(false);
    setDeleteExpenseId(false);
    // setExpenseIdToDelete('');
  };

  const closeDeleteExpense = () => {
    setDisplayExpenseData(false);
    setSettleCall(false);
    setSettleCall2(false);
    setDeleteExpenseId(false);
    setExpenseIdToDelete("");
    // setSettleCall(false);
  };

  const earningData = [
    {
      icon: <GiExpense />,
      title: "Total Spent",
      amount: grData.total,
      iconColor: "#03C9D7",
      iconBg: "#E5FAFB",
    },
    {
      icon: <IoPeopleSharp />,
      title: "Members count",
      amount: Number(cardData.member),
      iconColor: "rgb(228, 106, 118)",
      iconBg: "rgb(255, 244, 229)",
    },
    {
      icon: <GiReceiveMoney />,
      title: "You Owe",
      amount: Number(cardData.paid),
      iconColor: "rgb(255 158 18)",
      iconBg: "rgb(255 211 55 / 21%)",
    },
    {
      icon: <GiPayMoney />,
      title: "Amount Left to Pay",
      amount: Number(cardData.expense),
      iconColor: "rgb(228, 106, 118)",
      iconBg: "rgb(255, 244, 229)",
    },
  ];

  let valueDisplays = document.querySelectorAll(".num");

  valueDisplays.forEach((valueDisplay) => {
    let endValue = valueDisplay.getAttribute("data-val");
    let duration = 500; // duration in milliseconds
    let startTime = null;

    function updateValue(currentTime) {
      if (!startTime) startTime = currentTime;
      let elapsedTime = currentTime - startTime;
      let progress = elapsedTime / duration;
      let currentValue = Math.floor(progress * endValue);
      if (currentValue > endValue) currentValue = endValue;
      valueDisplay.textContent = currentValue;
      if (currentValue < endValue) {
        requestAnimationFrame(updateValue);
      }
    }

    requestAnimationFrame(updateValue);
  });

  const chartdata = {
    labels: ["Ticket", "Food", "Shopping", "Hotel", "Others"],
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
        label: "Expenses(₹)",
        data: doughnutData,
      },
    ],
  };

  const dailydata = {
    // labels: [
    //   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    //   22, 23, 24, 25, 26, 27, 28, 29, 30,
    // ],
    labels: lineDataLabel,
    datasets: [
      {
        backgroundColor: ["#6B60F1"],
        borderColor: ["#6B60F1"],
        label: "Expenses(₹)",
        fill: true,
        tension: 0.5,
        // data: [
        //   2, 0, 1, 5, 3, 0, 8, 4, 4, 5, 5, 6, 7, 3, 2, 3, 4, 5, 6, 2, 1, 3, 2,
        //   4, 2, 5, 7, 6, 3, 1,
        // ],
        data: lineData,
      },
    ],
  };

  let count = 1,
    count2 = 1;

  const style = {
    height: "-webkit-fill-available",
  };

  displayExpenseData
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "auto");
  return (
    <>
      <div>
        {
          !grData.isSettled && (
            <AddExpenses
              groupDetails={grData}
              groupData={groupData}
              getData={getData}
            />
          )

          // : (
          //   <div className="fixed bottom-10 right-10 h-18 w-62 bg-white text-black rounded-md shadow-md p-4">
          //     You can't add Expense as it is settled
          //   </div>
          // )
        }
      </div>
      <div className="mt-6">
        <div className="flex w-full flex-wrap justify-left ">
          <div className="top-card bg-lgPrimary dark:text-gray-200 h-44 rounded-xl w-full pr-8 pl-8 mx-6 my-5 bg-no-repeat bg-cover bg-center">
            <div className="flex justify-between items-center">
              <div>
                {beforeFetch === 1 && (
                  <div className="flex-col justify-start">
                    <div className=" text-white flex items-center">
                      <div className="pb-0 pl-0 p-2 font-bold">Hi</div>
                      <div className="text-white text-2xl font-bold pl-0 p-2">
                        {userData.name},
                      </div>
                    </div>
                    <div className="flex justify-start">
                      <div className="text-white flex  items-center">
                        <div className="text-small pb-0 pl-0 text-sm pt-0 p-2">
                          Welcome back to the group
                        </div>
                        <div className="text-medium font-bold pl-0 pt-0 pb-0 p-2">
                          {grData.groupName}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {beforeFetch === 0 && (
                  <p className="text-gray-400 text-2xl font-bold">
                    <BarLoader color="#f5f5f5" height={25} />
                  </p>
                )}
              </div>
              <div className="">
                <img
                  className="coin-png h-48"
                  src="../images/coin_banner.png"
                  alt=""
                />
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
          <div className="cards-dashboard width-full flex mx-6 my-6 justify-left gap-8 items-center">
            {earningData.map((item) => (
              <div
                key={item.title}
                className="card-dashboard bg-white h-44 md:w-52 p-4 pt-9 rounded-2xl "
              >
                <button
                  type="button"
                  style={{
                    color: item.iconColor,
                    backgroundColor: item.iconBg,
                  }}
                  className="card-icon text-2xl opacity-0.9 rounded-full  p-4 hover:drop-shadow-xl"
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
                <p className="text-small text-sm text-gray-400  mt-1">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {settleCall && (
        <div className="fixed inset-0 bg-white bg-opacity-80  backdrop-blur-sm bg-fixed flex justify-center">
          <div className=" h-[25%] mt-20 bg-white  pb-2  text-black rounded-md shadow-2xl">
            <div className="text-white text-md rounded-t-md p-2 bg-primary">
              Do you really want to close the group and settle up the expenses?
            </div>
            <div className="text-xs text-red-400 p-2">
              💀Warning: In future you will not be able to add any more expense
              in this group
            </div>
            <div className=" flex justify-between p-2">
              <div
                onClick={closeDisplayExpense}
                className="m-2 p-2 bg-primary rounded-md text-white w-1/2 cursor-pointer"
              >
                No
              </div>
              <div
                onClick={settleExpenseCall2}
                className="m-2 p-2 w-1/2 bg-slate-200 rounded-md cursor-pointer"
              >
                Yes
              </div>
            </div>
          </div>
        </div>
      )}

      {settleCall2 && (
        <div className="fixed inset-0 bg-white bg-opacity-80  backdrop-blur-sm bg-fixed flex justify-center">
          <div className=" h-3/5 mt-20 bg-white w-[425px] pb-3  text-black rounded-md shadow-2xl">
            <div className="text-white text-md rounded-t-md p-2 bg-primary flex justify-between">
              <div>Settled Expenses</div>
              <div>
                <BiX
                  onClick={closeDisplayExpense2}
                  className="text-2xl cursor-pointer"
                />
              </div>
            </div>
            <div className="p-2">
              The overall payment displaying who, to whom and what amount are as
              follows:
            </div>
            <div className=" pl-4 pr-2 h-4/6 overflow-y-auto scrollbar-none smooth-scroll">
              {settleCallData ? (
                settleCallData.map((items) => {
                  return (
                    <div className="flex jusify-start p-2 text-gray-400">
                      {count2++}.&nbsp;
                      <div className="text-black">{items.payer}</div>
                      &nbsp; needs to pay &nbsp;&nbsp;
                      <div className="text-black">₹{items.amount}</div>
                      &nbsp; to &nbsp;
                      <div className="text-black">{items.receiver}</div>
                    </div>
                  );
                })
              ) : (
                <div>Nothing to display here</div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* expenses history content starting...*/}
      <div className="sm:mt-0 md:mt-6 flex flex-wrap">
        <div className="exp-section bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-[32rem] rounded-xl w-full p-6 m-6 bg-no-repeat bg-cover bg-center ">
          <div className=" flex justify-between pb-2 pl-6 pr-8 border-b-2 border-spacing-y-12  border-gray-200">
            <div className="text-large text-gray-700 text-2xl font-bold ">
              Expenses History
            </div>

            {!grData.isSettled &&
              grData.expenseId &&
              grData.userId.length > 1 &&
              grData.expenseId.length > 0 && (
                <button
                  className="flex justify-end text-white p-2 bg-lgPrimary rounded-md hover:bg-primary"
                  onClick={settleExpenseCall}
                >
                  Settle Expense
                </button>
              )}
          </div>
          <div className="his-attributes text-gray-400 ml-8 mr-8 mt-2 flex border-b-2  ">
            <div className="text-medium p-2 w-[4rem]">S.No.</div>
            <div className="text-medium p-2 w-1/4">Name</div>
            <div className="text-medium p-2 w-1/4">Amount</div>
            <div className="text-medium p-2 w-1/4">Paid by</div>
            <div className="text-medium p-2 w-1/4">Expense Added on</div>
          </div>

          {/* to display the complete details of an expense starting... */}

          {displayExpenseData && (
            <div className="fixed inset-0 bg-white bg-opacity-80  backdrop-blur-sm bg-fixed flex justify-center">
              <div className=" h-3/5 mt-20 bg-white w-[425px] pb-3 text-black rounded-md shadow-2xl">
                <div className=" flex justify-between p-4  bg-primary rounded-t-md">
                  <div className="text-white text-xl">Expense Description</div>
                  <div className="flex">
                    {!grData.isSettled && (
                      <div
                        className="mr-4 pl-2 pr-2 rounded-md bg-white cursor-pointer flex justify-center"
                        onClick={(e) => {
                          e.preventDefault();
                          seteditExpenseData(true);
                          setDisplayExpenseData(false);
                        }}
                      >
                        Edit
                      </div>
                    )}
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
                      <div>
                        {expenseId.expDate
                          .substring(0, 10)
                          .split("-")
                          .reverse()
                          .join("-")}
                      </div>
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
                      <div className="text-gray-500">Category:&nbsp;</div>
                      <div>{expenseId.category}</div>
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
                    {expenseId.notes.length > 0 && (
                      <div className="flex justify-start p-2">
                        <div className="text-gray-500">Notes:&nbsp;</div>
                        <div>{expenseId.notes}</div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
          {/* edit expenses */}
          {editExpenseData && (
            <EditExpensesPopup
              closeDisplayExpense={closeDisplayExpense}
              expenseDetails={expenseId}
              groupDetails={grData}
              userId={userId.current}
              groupData={groupData}
              getData={getData}
            />
          )}
          {/* to display the complete details of an expense ends */}

          <div className="">
            {grData.expenseId && grData.expenseId.length > 0 ? (
              grData.expenseId.map((expenses) => (
                <div>
                  <div className="overflow-y-auto scrollbar-none scroll-smooth">
                    <div
                      key={expenses._id}
                      className="text-black ml-8 mr-8  flex border-b-2 cursor-pointer hover:bg-gray-100"
                      onClick={() => displayExpense(expenses)}
                    >
                      <div
                        className="text-small px-2 py-2 w-[4rem]"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                      >
                        {isHovered && !grData.isSettled ? (
                          <div className="flex justify-center">
                            <RiDeleteBin5Line
                              className="text-red-500 cursor:pointer"
                              onClick={() => deleteExpense(expenses)}
                            />
                          </div>
                        ) : (
                          <div>{count++}</div>
                        )}
                      </div>
                      <div className="text-small px-2 py-2 w-1/4">
                        {expenses.description}
                      </div>
                      <div className="text-small px-2 py-2 w-1/4">₹{expenses.amount}</div>
                      <div className="text-small px-2 py-2 w-1/4 flex justify-center h-8 overflow-x-auto overflow-y-auto scrollbar-none">
                        {expenses.paidBy.length > 1 ? (
                          expenses.paidBy.map((items) => {
                            return (
                              <div className="flex">
                                {items.userId._id === userId ? (
                                  <div>You,&nbsp;</div>
                                ) : (
                                  <div>{items.userId.name},&nbsp;</div>
                                )}
                              </div>
                            );
                          })
                        ) : (
                          <div className="flex">
                            {expenses.paidBy[0].userId._id ===
                            userId.current ? (
                              <div>You</div>
                            ) : (
                              <div>{expenses.paidBy[0].userId.name}</div>
                            )}
                          </div>
                        )}
                      </div>
                      <div className="text-small px-2 py-2 w-1/4">
                        {expenses.date
                          .substring(0, 10)
                          .split("-")
                          .reverse()
                          .join("-")}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="his-contents text-large w-full text-2xl text-gray-400 flex justify-center mt-16 p-10 m-2">
                Add expenses and rest leave up to Us 😎
              </div>
            )}
          </div>
        </div>
      </div>

      {deleteExpenseId && (
        <div className="fixed inset-0 bg-white bg-opacity-80  backdrop-blur-sm bg-fixed flex justify-center">
          <div className=" h-[20%] mt-20 bg-white  pb-2  text-black rounded-md shadow-2xl">
            <div className="text-white text-md rounded-t-md p-2 bg-primary">
              Do you really want to delete this expense?
            </div>

            <div className=" flex justify-between p-2">
              <div
                onClick={closeDeleteExpense}
                className="m-2 p-2 bg-primary rounded-md text-white w-1/2 cursor-pointer"
              >
                No
              </div>
              <div
                onClick={deleteExpenseCall}
                className="m-2 p-2 w-1/2 bg-slate-200 rounded-md cursor-pointer"
              >
                Yes
              </div>
            </div>
          </div>
        </div>
      )}

      {/*  strating of the different charts section... */}

      <div className="flex flex-col">
        <div className="flex card-group">
          <div className=" bg-white h-72 rounded-xl m-6 w-[60%]">
            <div className="text-medium border-b-2 mt-2 mb-2 text-center ztext-left text-black ">
              Group Members
            </div>
            <div className="card-group-attr text-gray-400 ml-8 mr-8 pb-2 flex border-b-2 scrollbar-none">
              <div className="text-medium px-2 w-1/3">Name </div>
              <div className="text-medium px-2 w-1/3">Paid</div>
              <div className="text-medium px-2 w-1/3">Expense</div>
            </div>

            {expend.length > 0 ? (
              expend.map((element) => {
                return (
                  <div className=" m-auto overflow-y-auto scrollbar-none">
                    <div className="card-group-attr text-black ml-8 mr-8 pb-2 flex ">
                      <div className="text-small px-2 w-1/3">{element.name}</div>
                      <div className="text-small px-2 w-1/3">₹{element.paid}</div>
                      <div className="text-small px-2 w-1/3">₹{element.expense}</div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="flex items-center min-h-[50%] justify-center">
                <div className="text-medium text-gray-400  w-full ">
                  Nothing to show here 😐
                </div>
              </div>
            )}
          </div>

          {grData.expenseId && grData.expenseId.length > 0 ? (
            grData.isSettled && (
              <div className=" h-80 m-2 p-4 w-5/12">
                <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg  rounded-xl  bg-no-repeat bg-cover bg-center ">
                  <div className=" flex justify-between pl-4 p-2 border-b-2 border-spacing-y-12  border-gray-200">
                    <div className="text-gray-700 ">Settled Expenses</div>
                  </div>

                  <div className="h-60 overflow-y-auto scrollbar-none scroll-smooth pb-4 p-2">
                    {settleCallData ? (
                      settleCallData.map((items) => {
                        return (
                          <div className="flex jusify-start p-2 text-gray-400">
                            {count2++}.&nbsp;
                            <div className="text-black">{items.payer}</div>
                            &nbsp; needs to pay &nbsp;
                            <div className="text-black">₹{items.amount}</div>
                            &nbsp; to &nbsp;
                            <div className="text-black">{items.receiver}</div>
                          </div>
                        );
                      })
                    ) : (
                      <div>Nothing to display here</div>
                    )}
                  </div>
                </div>
              </div>
            )
          ) : (
            <div className="card-invitation bg-white rounded-xl h-72 m-6 p-4 w-5/12 flex justify-center">
              <div className=" mb-2 h-full">
                <div className="text-medium block text-gray-700 border-b-2 mb-2">
                  Invite Members
                </div>
                <div className="mt-5">
                  <div className="text-small text-gray-400 m-2 text-sm">
                    Send invitation before adding expenses (Enter the email
                    addresses separated with comma)
                  </div>
                  <input
                    type="text"
                    id="members"
                    name="members"
                    className="text-medium shadow appearance-none border-gray-400 rounded w-full py-2  text-gray-500 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Enter email addresses separated by comma"
                    onChange={handleGroupMembers}
                    required
                  />
                  <div className="flex justify-center mt-2 ">
                    <div
                      className="text-medium pl-3 pr-3 button bg-primary hover:bg-opacity-90 p-2 text-white rounded-md w-1/3 cursor-pointer"
                      onClick={handleSubmit}
                    >
                      Invite
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="bot-cards items-center flex md:flex-row md:w-full">
          <div className="bot-card bg-white rounded-xl m-6 w-7/12">
            <div className="border-b-2 mt-2 mb-2 text-left  pb-2 pl-4">
              Expenses of last 30 days
            </div>
            <div className="flex justify-center h-72 w-auto p-2">
              <Line data={dailydata} />
            </div>
          </div>

          <div className="bot-card bg-white h-80 rounded-xl m-6 w-5/12">
            <div className="border-b-2 mt-2 mb-2 pb-2 pl-4 text-left">
              Category wise Expenditure
            </div>
            <div className="flex justify-center m-auto h-64 p-4  ">
              <Doughnut data={chartdata} />{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoardContent;

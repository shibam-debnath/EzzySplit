import React, { useEffect, useState } from "react";
import { VscClose } from "react-icons/vsc";
import AddDatePopup from "./AddDatePopup";
import AddNotePopup from "./AddNotePopup";
import SplitPopup from "./SplitPopup";
import PaidByPopup from "./PaidByPopup";
import AddCategoryPopup from "./AddCategoryPopup";
import { ToastContainer, toast, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThreeDots } from "react-loader-spinner";

const EditExpensesPopup = (props) => {
  const groupId = props.groupDetails._id;
  const userId = props.userId;
  const expenseId = props.expenseDetails._id;

  const tdDate = new Date(props.expenseDetails.expDate);
  const [expDate, FexpDate] = useState(tdDate);
  const cngExpDate = (val) => {
    FexpDate(val);
  };

  const [err, setErr] = useState(false);
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

  const handleCheck = () => {
    if (description.length <= 0 || amount.length <= 0) setErr(true);
    if (description.length > 0 && amount.length > 0) {
      setErr(false);
    }
  };

  const [notes, Fnotes] = useState(props.expenseDetails.notes);
  const cngNotes = (value) => {
    Fnotes(value);
  };
  const [tglSaveBtn, FtglSaveBtn] = useState(true);

  const notify = () => {
    toast.success("Expense edited successfully..!!", {
      autoClose: 1200,
      pauseOnFocusLoss: false,
      transition: Flip,
    });
  };
  const failed = () => {
    toast.error("Error occured..!!", {
      autoClose: 1200,
      pauseOnFocusLoss: false,
      transition: Flip,
    });
  };

  const cfailed = () => {
    toast.error("Total paidby or split between isn't equal to amount", {
      autoClose: 2000,
      pauseOnFocusLoss: false,
      transition: Flip,
    });
  };
  const set = () => {
    setTimeout(() => {
      FtglSaveBtn(true);
      notify();
      props.getData();
      props.groupData();
      Caddon(0);
    }, 2000);
  };

  console.log("expDetals");
  console.log(props.expenseDetails);
  const prevAmount = props.expenseDetails.amount;
  const [addon, Caddon] = useState(0);
  const [inputData, FinputData] = useState({
    amount: props.expenseDetails.amount,
    description: props.expenseDetails.description,
    groupId: `${groupId}`,
  });

  const [paidByArr, FpaidByArr] = useState([
    {
      userId: "",
      amount: "",
      name: "",
    },
  ]);
  const [paidBySingle, FpaidBySingle] = useState([
    {
      userId: "",
      amount: "",
      name: "",
    },
  ]);

  const InitailizePaidByArr = () => {
    var tempArr = props.groupDetails.userId.map((val) => ({
      userId: val._id,
      amount: "",
      name: val.name,
    }));

    for (var i = 0; i < props.expenseDetails.paidBy.length; i++) {
      var usId = props.expenseDetails.paidBy[i].userId._id;
      var value = props.expenseDetails.paidBy[i].amount;
      tempArr = tempArr.map((val) => {
        if (val.userId === usId) {
          return {
            userId: val.userId,
            amount: value,
            name: val.name,
          };
        } else {
          return {
            userId: val.userId,
            amount: val.amount,
            name: val.name,
          };
        }
      });
    }

    FpaidByArr(() => [...tempArr]);
  };

  useEffect(() => {
    InitailizePaidByArr();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // you or multiple
  var pyr = "You";
  if (props.expenseDetails.paidBy.length > 1) {
    pyr = "Multiple P.";
  }
  const [category, Fcategory] = useState(props.expenseDetails.category);
  const setcategory = (categor) => {
    Fcategory(categor);
  };
  const [payer, Fpayer] = useState(pyr);
  const setPayer = (text) => {
    Fpayer(text);
  };
  // name => userId and value => amount
  const inputAmountCng = (name, value) => {
    const tempArr = paidByArr.map((val) => {
      if (val.userId === name) {
        return {
          userId: val.userId,
          amount: value,
          name: val.name,
        };
      } else {
        return {
          userId: val.userId,
          amount: val.amount,
          name: val.name,
        };
      }
    });
    FpaidByArr([...tempArr]);
  };
  const inputAmountCngSingle = (name, perName) => {
    const tempArr = [
      {
        userId: name,
        amount: inputData.amount,
        name: perName,
      },
    ];
    // Payer is user who loggined
    if (name === `${userId}`) {
      Fpayer("You");
    }
    FpaidBySingle(() => [...tempArr]);
  };

  useEffect(() => {
    console.log("paid by Single:", paidBySingle);
  }, [paidBySingle]);
  const InputEvent = (name, value) => {
    FinputData({ ...inputData, [name]: value });
  };

  const paidBy1 = (e) => {
    e.preventDefault();
    Caddon(1);
  };
  const split = (e) => {
    e.preventDefault();
    Caddon(2);
  };
  const addDate = (e) => {
    e.preventDefault();
    Caddon(3);
  };
  const addNote = (e) => {
    e.preventDefault();
    Caddon(4);
  };
  const addCategory = (e) => {
    e.preventDefault();
    Caddon(6);
  };

  const closeAdd = () => {
    Caddon(0);
  };

  // Split method
  var spmtd = "equally";
  spmtd = props.expenseDetails.split_method;
  const [split_method, Fsplit_method] = useState(spmtd);
  const [splitBetween, FsplitBetween] = useState({
    user: "",
    toPay: "",
    name: "",
  });

  const InitailizeSplitBetween = () => {
    var tempArr = props.groupDetails.userId.map((val) => ({
      user: val._id,
      toPay: "",
      name: val.name,
    }));

    for (var i = 0; i < props.expenseDetails.split_between.length; i++) {
      var usId = props.expenseDetails.split_between[i].user._id;
      var value = props.expenseDetails.split_between[i].toPay;
      tempArr = tempArr.map((val) => {
        if (val.user === usId) {
          return {
            user: val.user,
            toPay: value,
            name: val.name,
          };
        } else {
          return {
            user: val.user,
            toPay: val.toPay,
            name: val.name,
          };
        }
      });
    }

    FsplitBetween(() => [...tempArr]);
  };
  useEffect(() => {
    InitailizeSplitBetween();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // name => userId and value => amount
  const InputSplitBetween = (name, value) => {
    const tempArr = splitBetween.map((val) => {
      if (val.user === name) {
        return {
          user: val.user,
          toPay: value,
          name: val.name,
        };
      } else {
        return {
          user: val.user,
          toPay: val.toPay,
          name: val.name,
        };
      }
    });
    FsplitBetween(() => [...tempArr]);
  };

  const InputSplitEquilly = () => {
    const IntAmount = parseInt(inputData.amount);
    const equl = IntAmount / splitBetween.length;
    const toStrEuql = equl.toString();

    const tempArr = splitBetween.map((val) => {
      return {
        user: val.user,
        toPay: toStrEuql,
        name: val.name,
      };
    });
    FsplitBetween(() => [...tempArr]);
  };

  //  posting addexpenses
  const postForm = async () => {
    try {
      var fnarr = [];
      if (payer === "You") {
        fnarr = [
          {
            userId: `${userId}`,
            amount: inputData.amount,
            name: "test1",
          },
        ];
      } else if (payer === "Multiple P.") {
        fnarr = paidByArr.filter((val) => val.amount !== "");
      } else {
        fnarr = paidBySingle;
      }

      var SplitArr = [];
      if (split_method === "equally") {
        const IntAmount = parseInt(inputData.amount);
        const equl = IntAmount / splitBetween.length;
        const toStrEuql = equl.toString();

        SplitArr = splitBetween.map((val) => {
          return {
            user: val.user,
            toPay: toStrEuql,
            name: val.name,
          };
        });
      } else {
        SplitArr = splitBetween.filter((val) => val.toPay !== "");
      }

      const { amount, descrbiption, groupId } = inputData;
      var totalPiadBy = 0;
      var totalSplitBetween = 0;

      for (var i = 0; i < fnarr.length; i++) {
        totalPiadBy = Number(totalPiadBy) + Number(fnarr[i].amount);
      }
      for (var i = 0; i < SplitArr.length; i++) {
        totalSplitBetween =
          Number(totalSplitBetween) + Number(SplitArr[i].toPay);
      }
      console.log("category before ppppop");
      console.log(category);

      if (totalPiadBy === amount && totalSplitBetween === amount) {
        const res = await fetch(
          `${process.env.REACT_APP_BASE_URL}/expense/${userId}/${groupId}/${expenseId}`,
          {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              amount,
              description,
              groupId,
              paidBy: fnarr,
              split_method,
              notes,
              expDate,
              category: category,
              split_between: SplitArr,
              prevAmount: prevAmount,
            }),
          }
        );
        await res.json();

        if (res.status === 200) {
          set();
          props.groupData();
        }
        FinputData({
          amount: "",
          description: "",
          groupId: `${groupId}`,
        });
      } else {
        cfailed();
        FtglSaveBtn(true);
      }
    } catch (error) {
      FtglSaveBtn(true);
      failed();
      console.log("Error in Adding Expenses");
    }
  };

  return (
    <div className="fixed inset-0 bg-white bg-opacity-80  backdrop-blur-sm bg-fixed text-black">
      <form method="PATCH">
        <div className="h-3/5 flex justify-center mt-16">
          <div className="rounded-lg w-[425px] my-auto bg-white shadow-2xl">
            <div className="bg-primary rounded-t-md p-2 px-3 flex justify-between">
              <h5 className=" text-white font-semibold text-lg">
                Edit expense
              </h5>
              <button
                className="hover:text-red-500 text-xl"
                onClick={props.closeDisplayExpense}
              >
                <VscClose />
              </button>
            </div>
            <div className="flex justify-start items-center px-3 py-1">
              <div>
                <h5>
                  With <span className="font-semibold">you</span> and{" "}
                  <span className="font-semibold">
                    {props.groupDetails.groupName}
                  </span>
                </h5>
              </div>
            </div>

            <div>
              <div className="flex items-center mt-3">
                <div className="w-2/6 ">
                  <div className="w-2/5 m-auto py-3 ">
                    <button
                      className="font-medium hover:text-slate-500"
                      onClick={addCategory}
                    >
                      <img src="../images/grocery.png" alt="Loading" />
                    </button>
                  </div>
                  <button
                    className="font-medium hover:text-slate-500"
                    onClick={addCategory}
                  >
                    <span className="text-blue-700 text-sm">
                      {" "}
                      <span className="text-black ">category:</span> {category}
                    </span>
                  </button>
                </div>
                <div className="w-3/5  ">
                  <div className="border-b-[1px] border-dotted border-emerald-500">
                    <input
                      type="text"
                      placeholder="Enter description"
                      className="rounded-lg h-7 w-full border-none focus:ring-0"
                      name="description"
                      value={inputData.description}
                      onChange={(e) => {
                        const name = e.target.name;
                        const value = e.target.value;
                        setDescription(value);
                        InputEvent(name, value);
                        handleCheck();
                        // console.log(value);
                      }}
                    />
                  </div>
                  {err && description.length <= 0 ? (
                    <label className="text-red-600 text-sm">
                      description can not be blank
                    </label>
                  ) : (
                    ""
                  )}
                  <div className="mt-1 flex items-center border-b-[1px] border-dotted border-emerald-500">
                    INR
                    <input
                      type="text"
                      placeholder="Amount"
                      className="rounded-lg h-7 w-52 border-none focus:ring-0"
                      name="amount"
                      value={inputData.amount}
                      onChange={(e) => {
                        const name = e.target.name;
                        const value = e.target.value;
                        setAmount(value);
                        handleCheck();
                        InputEvent(name, value);
                      }}
                    />
                  </div>
                  {err && amount.length <= 0 ? (
                    <label className="text-red-600 text-sm">
                      amount can not be zero
                    </label>
                  ) : (
                    ""
                  )}
                </div>
              </div>

              <div className="mt-6">
                <div>
                  <span>Paid by </span>
                  <span>
                    <button
                      className=" text-primary rounded-lg px-2 py-0 border-dotted border-emerald-300 border-2 hover:border-primary hover:border-solid"
                      onClick={paidBy1}
                    >
                      {payer}
                    </button>
                  </span>
                  <span> and split </span>
                  <span>
                    <button
                      className="text-primary rounded-lg px-2 py-0 border-dotted border-emerald-300 border-2 hover:border-primary hover:border-solid"
                      onClick={split}
                    >
                      {split_method}
                    </button>
                  </span>
                </div>
              </div>

              <div className="m-2"></div>

              {/* Buttond */}
              <div className="flex justify-evenly mt-6 mb-10">
                <div className="py-1 px-4 mr-3 text-base font-normal bg-gray-200 text-gray-900 rounded-lg dark:text-white hover:bg-opacity-60  ">
                  <button
                    className=" text-lg opacity-0.9 text-gray-700 hover:drop-shadow-xl rounded-full"
                    onClick={addDate}
                  >
                    {expDate.toString().substring(4, 15)}
                  </button>
                </div>
                <div className="py-1 px-4 mr-3 text-base font-normal bg-gray-200 text-gray-900 rounded-lg dark:text-white hover:bg-opacity-60 ">
                  <button
                    className=" text-lg opacity-0.9 text-gray-700 hover:drop-shadow-xl rounded-full"
                    onClick={addNote}
                  >
                    Add Image/Note
                  </button>
                </div>
              </div>

              <hr />

              {tglSaveBtn ? (
                <div className="flex justify-end py-3">
                  <div className=" mr-3 text-base font-normal bg-gray-200 rounded-lg text-black hover:bg-opacity-60 ">
                    <button
                      className="py-1 px-4 it text-lg opacity-0.9 text-gray-700 hover:drop-shadow-xl rounded-full"
                      onClick={props.closeDisplayExpense}
                    >
                      Cancel
                    </button>
                  </div>
                  <div className=" mr-3 text-base font-normal bg-primary text-gray-900 rounded-lg dark:text-white hover:bg-opacity-60  ">
                    <button
                      className="py-1 px-4 text-lg opacity-0.9 text-white hover:drop-shadow-xl rounded-full"
                      onClick={(e) => {
                        e.preventDefault();
                        FtglSaveBtn(false);
                        handleCheck();
                        if (description.length === 0 || amount.length === 0) {
                          //console.log()
                          failed();
                          FtglSaveBtn(true);
                        } else {
                          postForm();
                        }
                      }}
                    >
                      Save
                    </button>
                  </div>
                </div>
              ) : (
                <div className=" justify-end flex mr-10 py-2">
                  <ThreeDots
                    height="50"
                    width="50"
                    radius="9"
                    color="#6B60F1"
                    ariaLabel="three-dots-loading"
                    wrapperStyle={{}}
                    wrapperClassName=""
                    visible={true}
                  />
                </div>
              )}
            </div>
          </div>
          {addon === 1 && (
            <PaidByPopup
              closeAdd={closeAdd}
              paidByArr={paidByArr}
              setPayer={setPayer}
              inputAmountCng={inputAmountCng}
              inputAmountCngSingle={inputAmountCngSingle}
            />
          )}
          {addon === 2 && (
            <SplitPopup
              closeAdd={closeAdd}
              Fsplit_method={Fsplit_method}
              splitBetween={splitBetween}
              InputSplitBetween={InputSplitBetween}
              InputSplitEquilly={InputSplitEquilly}
            />
          )}
          {addon === 3 && (
            <AddDatePopup cngExpDate={cngExpDate} closeAdd={closeAdd} />
          )}
          {addon === 4 && (
            <AddNotePopup
              cngNotes={cngNotes}
              closeAdd={closeAdd}
              notes={notes}
            />
          )}
          {addon === 6 && (
            <AddCategoryPopup closeAdd={closeAdd} setcategory={setcategory} />
          )}
          {/* </div> */}
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default EditExpensesPopup;

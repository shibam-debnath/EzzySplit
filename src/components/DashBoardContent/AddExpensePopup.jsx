import React, { useEffect, useState } from 'react';
import { VscClose } from "react-icons/vsc";
import AddDatePopup from './AddDatePopup';
import AddNotePopup from './AddNotePopup';
import SplitPopup from './SplitPopup';
import PaidByPopup from './PaidByPopup';
import AddCurrencyPopup from './AddCurrencyPopup';
import axios from 'axios';
import { ToastContainer, toast, Zoom, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Dna } from 'react-loader-spinner'


const AddExpensePopup = (props) => {

    const [tglSaveBtn, FtglSaveBtn] = useState(true);

    const notify = () => {
        toast.success("Expense added successfully..!!", {
            autoClose: 1200,
            pauseOnFocusLoss: false,
            transition: Flip
        }
        );
    };
    const failed = () => {
        toast.error("Error occured..!!", {
            autoClose: 1200,
            pauseOnFocusLoss: false,
            transition: Flip
        }
        );
    };

    const set = () => {
        setTimeout(() => {
            FtglSaveBtn(true);
            notify();
            Caddon(0);

        }, 2000);
    };

    const [addon, Caddon] = useState(0);
    const [inputData, FinputData] = useState({
        amount: "",
        description: "",
        groupId: "63e28d86e007610a77e259da"
    });

    const [paidByArr, FpaidByArr] = useState([
        {
            userId: "",
            amount: "",
            name: ""
        }
    ]);
    const [paidBySingle, FpaidBySingle] = useState([
        {
            userId: "",
            amount: "",
            name: ""
        }
    ]);



    const InitailizePaidByArr = () => {
        const tempArr = props.groupDetails.userId.map((val) => ({
            userId: val._id,
            amount: "",
            name: val.name
        }));

        FpaidByArr(() => [...tempArr]);

    }

    useEffect(() => {
        InitailizePaidByArr();
    }, []);


    // you or multiple
    const [payer, Fpayer] = useState("You");
    const setPayer = (text) => {
        Fpayer(text);
    }
    // name => userId and value => amount
    const inputAmountCng = (name, value) => {
        const tempArr = paidByArr.map((val) => {
            if (val.userId === name) {
                return {
                    userId: val.userId,
                    amount: value,
                    name: val.name
                }
            }
            else {
                return {
                    userId: val.userId,
                    amount: val.amount,
                    name: val.name
                }
            }
        });
        FpaidByArr([...tempArr]);
    }
    const inputAmountCngSingle = (name, perName) => {
        const tempArr = [{
            userId: name,
            amount: inputData.amount,
            name: perName
        }];
        // Payer is user who loggined
        if (name === '63d645f7e653329b6cab4ef8') {
            Fpayer("You");
        }
        FpaidBySingle(() => [...tempArr]);
    }

    useEffect(() => {
        console.log("paid by Single:", paidBySingle);
    }, [paidBySingle]);
    const InputEvent = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        FinputData({ ...inputData, [name]: value });
    }

    const paidBy1 = (e) => {
        e.preventDefault();
        Caddon(1);
    }
    const split = (e) => {
        e.preventDefault();
        Caddon(2);
    }
    const addDate = (e) => {
        e.preventDefault();
        Caddon(3);
    }
    const addNote = (e) => {
        e.preventDefault();
        Caddon(4);
    }
    const addCurrency = (e) => {
        e.preventDefault();
        Caddon(6);
    }

    const closeAdd = () => {
        Caddon(0)
    }


    // Split method 
    const [split_method, Fsplit_method] = useState('equally');
    const [splitBetween, FsplitBetween] = useState({
        user: "",
        toPay: "",
        name: ""
    })

    const InitailizeSplitBetween = () => {
        const tempArr = props.groupDetails.userId.map((val) => ({
            user: val._id,
            toPay: "",
            name: val.name
        }));
        FsplitBetween(() => [...tempArr]);
    }
    useEffect(() => {
        InitailizeSplitBetween();
    }, []);

    // name => userId and value => amount
    const InputSplitBetween = (name, value) => {
        const tempArr = splitBetween.map((val) => {
            if (val.user === name) {
                return {
                    user: val.user,
                    toPay: value,
                    name: val.name
                }
            }
            else {
                return {
                    user: val.user,
                    toPay: val.toPay,
                    name: val.name
                }
            }
        });
        FsplitBetween(() => [...tempArr]);
    }

    const InputSplitEquilly = () => {

        const IntAmount = parseInt(inputData.amount);
        const equl = IntAmount / (splitBetween.length);
        const toStrEuql = equl.toString();

        const tempArr = splitBetween.map((val) => {
            return {
                user: val.user,
                toPay: toStrEuql,
                name: val.name
            }
        });
        FsplitBetween(() => [...tempArr]);
    }


    //  posting addexpenses
    const postForm = async () => {
        try {
            var fnarr = [];
            if (payer === "You") {
                fnarr = [
                    {
                        userId: '63d645f7e653329b6cab4ef8',
                        amount: inputData.amount,
                        name: 'test1'
                    }
                ]
            }
            else if (payer === "Multiple P.") {
                fnarr = paidByArr.filter(val => val.amount !== '');
            }
            else {
                fnarr = paidBySingle;
            }

            var SplitArr = [];
            if (split_method == "equally") {
                const IntAmount = parseInt(inputData.amount);
                const equl = IntAmount / (splitBetween.length);
                const toStrEuql = equl.toString();

                SplitArr = splitBetween.map((val) => {
                    return {
                        user: val.user,
                        toPay: toStrEuql,
                        name: val.name
                    }
                });
            }
            else{
                SplitArr = splitBetween.filter(val => val.toPay !== '');
            }

            const { amount, description, groupId } = inputData;
            const res = await fetch("http://localhost:8000/expense/addExpense", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    amount, description, groupId, paidBy: fnarr, split_method, split_between: SplitArr
                })
            })
            const data = await res.json();

            if (res.status === 200) {
                set();
            }
            FinputData({
                amount: "",
                description: "",
                groupId: "63e28d86e007610a77e259da"
            })

        } catch (error) {
            failed();
            console.log("Error in Adding Expenses");
        }
    }





    return (
        <>
            {/* <div className='bg-neutral-200 opacity-90 fixed inset-0 z-50 flex-col '> */}
            <div className='fixed inset-0 bg-white bg-opacity-50  backdrop-blur-sm bg-fixed'>

                <form method='POST' >
                    <div className='h-3/5 flex justify-center mt-16'>
                        <div className='border-2 border-primary rounded-xl w-[425px] my-auto bg-white'>
                            <div className='bg-primary rounded-lg p-2 px-3 flex justify-between'>
                                <h5 className=' text-white font-semibold text-lg'>Add an expenses</h5>
                                <button className='hover:text-red-500 text-xl' onClick={props.closeAdd}>
                                    <VscClose />
                                </button>
                            </div>
                            <div className='flex justify-start items-center px-3 py-1'>
                                <div>
                                    <h5>With <span className='font-semibold'>you</span>  and <span className='font-semibold'>{props.groupDetails.groupName}</span></h5>
                                </div>
                            </div>

                            <div>
                                <div className='flex items-center mt-3'>
                                    <div className='w-2/6 '>
                                        <div className='w-2/5 m-auto py-3 '>

                                            <img src='../images/grocery.png' alt='Loading' />
                                        </div>
                                    </div>
                                    <div className='w-3/5  '>
                                        <div className='border-b-[1px] border-dotted border-emerald-500'>
                                            <input type="text"
                                                placeholder='Enter description'
                                                className='rounded-lg h-7 w-full border-none focus:ring-0'
                                                name='description'
                                                value={inputData.description}
                                                onChange={InputEvent}
                                            />
                                        </div>
                                        <div className='mt-1 flex items-center border-b-[1px] border-dotted border-emerald-500'>
                                            <button className='font-medium hover:text-slate-500' onClick={addCurrency}>INR</button>
                                            <input type="text"
                                                placeholder='Amount'
                                                className='rounded-lg h-7 w-52 border-none focus:ring-0'
                                                name='amount'
                                                value={inputData.amount}
                                                onChange={InputEvent}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className='mt-6'>
                                    <div>
                                        <span>Paid by </span>
                                        <span><button className=' text-primary rounded-lg px-2 py-0 border-dotted border-emerald-300 border-2 hover:border-primary hover:border-solid'
                                            onClick={paidBy1}>
                                            {payer}
                                        </button></span>
                                        <span> and split </span>
                                        <span><button
                                            className='text-primary rounded-lg px-2 py-0 border-dotted border-emerald-300 border-2 hover:border-primary hover:border-solid'
                                            onClick={split}
                                        >{split_method}</button></span>
                                    </div>
                                </div>


                                <div className='m-2'>
                                    
                                </div>

                                {/* Buttond */}
                                <div className='flex justify-evenly mt-6 mb-10'>
                                    <div className='py-1 px-4 mr-3 text-base font-normal bg-primary text-gray-900 rounded-lg dark:text-white hover:bg-primary dark:hover:bg-gray-700  '>
                                        <button className=' text-lg opacity-0.9 text-white hover:drop-shadow-xl rounded-full' onClick={addDate}>
                                            25 Dec 2022
                                        </button>
                                    </div>
                                    <div className='py-1 px-4 mr-3 text-base font-normal bg-primary text-gray-900 rounded-lg dark:text-white hover:bg-primary dark:hover:bg-gray-700 '>
                                        <button className=' text-lg opacity-0.9 text-white hover:drop-shadow-xl rounded-full' onClick={addNote} >
                                            Add Image/Note
                                        </button>
                                    </div>
                                </div>

                                <hr />


                                {
                                    tglSaveBtn ? <div className='flex justify-end py-3'>
                                        <div className=' mr-3 text-base font-normal bg-slate-500 text-gray-900 rounded-lg dark:text-white hover:bg-primary dark:hover:bg-gray-600  '>
                                            <button className='py-1 px-4 it text-lg opacity-0.9 text-white hover:drop-shadow-xl rounded-full'
                                                onClick={props.closeAdd} >
                                                Cancel
                                            </button>
                                        </div>
                                        <div className=' mr-3 text-base font-normal bg-primary text-gray-900 rounded-lg dark:text-white hover:bg-primary dark:hover:bg-gray-700 border-2 border-emerald-300 '>
                                            <button className='py-1 px-4 text-lg opacity-0.9 text-white hover:drop-shadow-xl rounded-full'
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    FtglSaveBtn(false);
                                                    postForm();
                                                }}  >
                                                Save
                                            </button>
                                        </div>
                                    </div> :
                                        <div className=' justify-end flex mr-10 py-2'>
                                            <Dna
                                                visible={true}
                                                height="60"
                                                width="80"
                                                ariaLabel="dna-loading"
                                                wrapperStyle={{}}
                                                wrapperClass="dna-wrapper"
                                            />
                                        </div>
                                }

                            </div>
                            {/* {
                                paidByArr.map((val)=>{
                                    return(
                                        <div>
                                           { val.name}
                                        </div>
                                    )
                                })
                            } */}

                        </div>


                        {/* Add seconaadry popup */}
                        {/* <div className='border-2 border-emerald-600 w-[28%] my-auto rounded-xl mx-2'> */}

                        {addon === 1 && <PaidByPopup
                            closeAdd={closeAdd}
                            paidByArr={paidByArr}
                            setPayer={setPayer}
                            inputAmountCng={inputAmountCng}
                            inputAmountCngSingle={inputAmountCngSingle}
                        />}
                        {addon === 2 && <SplitPopup
                            closeAdd={closeAdd}
                            Fsplit_method={Fsplit_method}
                            splitBetween={splitBetween}
                            InputSplitBetween={InputSplitBetween}
                            InputSplitEquilly={InputSplitEquilly}
                        />}
                        {addon === 3 && <AddDatePopup />}
                        {addon === 4 && <AddNotePopup closeAdd={closeAdd} />}
                        {addon === 6 && <AddCurrencyPopup closeAdd={closeAdd} />}
                        {/* </div> */}
                    </div>



                </form>
                <ToastContainer />
            </div>
        </>
    )
}

export default AddExpensePopup
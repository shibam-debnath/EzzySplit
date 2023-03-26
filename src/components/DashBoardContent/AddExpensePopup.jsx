import React, { useState } from 'react';
import { VscClose } from "react-icons/vsc";
import AddDatePopup from './AddDatePopup';
import AddNotePopup from './AddNotePopup';
import AddGroupPopup from './AddGroupPopup';
import SplitPopup from './SplitPopup';
import PaidByPopup from './PaidByPopup';
import AddCurrencyPopup from './AddCurrencyPopup';

const AddExpensePopup = (props) => {

    const [addon,Caddon] = useState(0);

    const paidBy=(e)=>{
        e.preventDefault();
        Caddon(1);
    }
    const split=(e)=>{
        e.preventDefault();
        Caddon(2);
    }
    const addDate=(e)=>{
        e.preventDefault();
        Caddon(3);
    }
    const addNote=(e)=>{
        e.preventDefault();
        Caddon(4);
    }
    const addGroup=(e)=>{
        e.preventDefault();
        Caddon(5);
    }
    const addCurrency=(e)=>{
        e.preventDefault();
        Caddon(6);
    }

    const closeAdd = ()=>{
        Caddon(0)
    }

    return (
        <>
            <div className='bg-neutral-200 opacity-90 fixed inset-0 z-50 flex-col '>

                <div className=' h-3/5 flex justify-center mt-16'>
                    <div className='border-2 border-emerald-600 rounded-xl w-[425px] my-auto bg-white'>
                        <form >
                            <div className='bg-primary rounded-lg p-2 px-3 flex justify-between'>
                                <h5 className=' text-white font-semibold text-lg'>Add an expenses</h5>
                                <button className='hover:text-red-500 text-xl' onClick={props.closeAdd}>
                                    <VscClose />
                                </button>
                            </div>
                            <div className='flex justify-start items-center px-3 py-1'>
                                <div>
                                    <h5>With <span className='font-semibold'>you</span>  and: </h5>
                                </div>
                                <div className=''>
                                    <input type="search" placeholder='Group or Person' className='border-none rounded-full ml-2 h-7 mt-1' />
                                </div>
                            </div>


                            <div className='flex items-center mt-3'>
                                <div className='w-2/6 '>
                                    <div className='w-2/5 m-auto py-3 '>

                                        <img src='../images/grocery.png' alt='Loading' />
                                    </div>
                                </div>
                                <div className='w-3/5  '>
                                    <div className='border-b-[1px] border-dotted border-emerald-500'>
                                        <input type="text" placeholder='Enter description' className='rounded-lg h-7 w-full border-none focus:ring-0' />
                                    </div>
                                    <div className='mt-1 flex items-center border-b-[1px] border-dotted border-emerald-500'>
                                        <button className='font-medium hover:text-slate-500' onClick={addCurrency}>INR</button>
                                        <input type="text" placeholder='Amount' className='rounded-lg h-7 w-52 border-none focus:ring-0' />
                                    </div>
                                </div>
                            </div>

                            <div className='mt-6'>
                                <div>
                                    <span>Paid by </span>
                                    <span><button className=' text-primary rounded-lg px-2 py-0 border-dotted border-emerald-300 border-2 hover:border-primary hover:border-solid' onClick={paidBy}>
                                        You
                                    </button></span>
                                    <span> and split </span>
                                    <span><button
                                        className='text-primary rounded-lg px-2 py-0 border-dotted border-emerald-300 border-2 hover:border-primary hover:border-solid'
                                        onClick={split}
                                    >equilly</button></span>
                                </div>
                            </div>


                            <div className='m-2'>
                                <p>(20$/person)</p>
                            </div>

                            {/* Buttond */}
                            <div className='flex justify-evenly mt-6'>
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


                            <div className='w-44 m-auto mt-4 mb-6'>
                                <div className='py-1 px-4 mr-3 text-base font-normal bg-primary text-gray-900 rounded-lg dark:text-white hover:bg-primary dark:hover:bg-gray-700 '>
                                    <button className=' text-lg opacity-0.9 text-white hover:drop-shadow-xl rounded-full' onClick={addGroup} >
                                        Group 1
                                    </button>
                                </div>
                            </div>
                            <hr  />


                            <div className='flex justify-end py-3'>
                                <div className='py-1 px-4 mr-3 text-base font-normal bg-slate-500 text-gray-900 rounded-lg dark:text-white hover:bg-primary dark:hover:bg-gray-600  '>
                                    <button className=' text-lg opacity-0.9 text-white hover:drop-shadow-xl rounded-full' >
                                        Cancel
                                    </button>
                                </div>
                                <div className='py-1 px-4 mr-3 text-base font-normal bg-primary text-gray-900 rounded-lg dark:text-white hover:bg-primary dark:hover:bg-gray-700 border-2 border-emerald-300 '>
                                    <button className=' text-lg opacity-0.9 text-white hover:drop-shadow-xl rounded-full' >
                                        Save
                                    </button>
                                </div>
                            </div>

                        </form>
                    </div>


                {/* Add seconaadry popup */}
                    {/* <div className='border-2 border-emerald-600 w-[28%] my-auto rounded-xl mx-2'> */}

                {addon===1 && <PaidByPopup closeAdd={closeAdd}/> }
                {addon===2 && <SplitPopup closeAdd={closeAdd}/> }
                {addon===3 && <AddDatePopup closeAdd={closeAdd}/> }
                {addon===4 && <AddNotePopup closeAdd={closeAdd} /> }
                {addon===5 && <AddGroupPopup closeAdd={closeAdd} /> }
                {addon===6 && <AddCurrencyPopup closeAdd={closeAdd}/> }
                    {/* </div> */}
                </div>



            </div>
        </>
    )
}

export default AddExpensePopup
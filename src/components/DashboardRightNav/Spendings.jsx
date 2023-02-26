import React from 'react';
import './rightNav.css';
const products=[['Travel Cost',100], ['Hostel Rent',-100], ['Bus Fare',200], ['Resturent Bill',150],['Mohit',-50]];

function Spendings() {
  return (
    <div className=' px-2 rounded-2xl my-3'>
      {products.map(filteredName => (
        <div className='flex items  py-1  my-2 rounded-lg cursor-pointer text-white hover:scale-105 hover:bg-gray-200 hover:text-black'>
          <div className=' px-5'>{filteredName[0]}</div>
          <div className=' px-5 font-bold'>{filteredName[1]}</div>
        </div>
      ))}
    </div>
  );
}

export default Spendings;
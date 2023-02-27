import React from 'react';
import './rightNav.css';
const names=[['Shibam',100], ['Suraj',-100], ['Nikhil',200], ['Aniket',-150],['Mohit',-50],['askhavdhavsdhd',-98]];

function Friend() {
  return (
    <div className=' px-2  rounded-2xl my-3'>
      {names.filter(name => name[1]<0).map(filteredName => (
        <div className='flex items py-2  space-x-40 space-between my-2 rounded-lg cursor-pointer  text-white  hover:bg-gray-200  hover:text-black '>
          {/* items  py-1  my-2 rounded-lg cursor-pointer hover:scale-105 text-white hover:bg-gray-200 */}
          <div className=' px-3 break-all'>{filteredName[0]}</div>
          <div className=' px-3 '>{filteredName[1]}</div>
        </div>
      ))}
      {names.filter(name => name[1]>0).map(filteredName => (
        <div className='flex items py-2  space-x-40 space-between my-2 rounded-lg cursor-pointer  text-white  hover:bg-gray-200  hover:text-black '>
          {/* flex items py-2  */}
          <div className=' px-3 break-all'>{filteredName[0]}</div>
          <div className=' px-3'>{filteredName[1]}</div>
        </div>
      ))}
    </div>
  );
}

export default Friend;

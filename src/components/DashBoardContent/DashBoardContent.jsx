import React, { useEffect, useState } from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { earningData } from "../../data/DashBoardData";
import AddExpenses from "./AddExpenses";
import axios from "axios";

const DashBoardContent = () => {
  const currentColor = "var(--primary-font)";
  const [getUsersDet, FgetUsersDet] = useState({});

  const getData = async () => {
    try {
      let config = {
        method: "get",
        url: "http://localhost:8000/user/profile/63d3700f59aa96fcdb661477",
      };
      var response;
      response = await axios(config);
      console.log(response.data.users);
      FgetUsersDet(response.data.users);
      console.log(`Dtat: ${getUsersDet}`);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

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
                <p className="text-gray-400 text-2xl font-bold">
                  {getUsersDet.name}
                </p>
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

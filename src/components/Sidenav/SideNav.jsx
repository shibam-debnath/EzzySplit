import React from "react";
import {
  TbLayoutDashboard,
  TbBrandHipchat,
  TbFriends,
  TbLogout,
} from "react-icons/tb";
import { HiOutlineUserGroup } from "react-icons/hi";

const SideNav = () => {
  return (
    <div class="flex md:w-64 md:ml-5 flex-col ">
      <h1 className="mt-6 px-5 text-2xl md:text-3xl xl:text-4xl font-bold tracking-tight text-white">
        Ezzy<span className="text-blue-900">Split</span>
      </h1>
      <div class="mt-12  py-4 px-3 bg-primary rounded">
        <ul class="space-y-2">
          <li>
            <a
              href="/dashboard"
              class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-primary dark:hover:bg-gray-700"
            >
              <button className="text-2xl opacity-0.9 text-white hover:drop-shadow-xl rounded-full">
                <TbLayoutDashboard />
              </button>
              <span class="ml-3">Dashboard</span>
            </a>
          </li>
          <li>
            <a
              href="/dashboard"
              class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-primary dark:hover:bg-gray-700"
            >
              <button className="text-2xl opacity-0.9 text-white hover:drop-shadow-xl rounded-full">
                <HiOutlineUserGroup />
              </button>
              <span class="flex-1 ml-3 whitespace-nowrap">Last Groups</span>
            </a>
          </li>
          <li>
            <a
              href="/dashboard"
              class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-primary dark:hover:bg-gray-700"
            >
              <button className="text-2xl opacity-0.9 text-white hover:drop-shadow-xl rounded-full">
                <TbBrandHipchat />
              </button>
              <span class="flex-1 ml-3 whitespace-nowrap">Inbox</span>
              <span class="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200">
                3
              </span>
            </a>
          </li>
          <li>
            <a
              href="/dashboard"
              class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-primary dark:hover:bg-gray-700"
            >
              <button className="text-2xl opacity-0.9 text-white hover:drop-shadow-xl rounded-full">
                <TbFriends />
              </button>
              <span class="flex-1 ml-3 whitespace-nowrap">Friends</span>
            </a>
          </li>
          <li>
            <a
              href="/"
              class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-primary dark:hover:bg-gray-700"
            >
              <button className="text-2xl opacity-0.9 text-white hover:drop-shadow-xl rounded-full">
                <TbLogout />
              </button>
              <span class="flex-1 ml-3 whitespace-nowrap">Log Out</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideNav;

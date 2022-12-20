import React from "react";
import { IoPeopleSharp } from "react-icons/io5";
import { GiReceiveMoney, GiPayMoney } from "react-icons/gi";

export const data = [
  {
    id: "1",
    name: "Shibam debnath",
  },
  {
    id: "2",
    name: "Aniket Bose",
  },
];

export const earningData = [
  {
    icon: <GiReceiveMoney />,
    title: "Total Spent",
    amount: "39,354",
    iconColor: "#03C9D7",
    iconBg: "#E5FAFB",
  },
  {
    icon: <GiPayMoney />,
    title: "You Owe",
    amount: "4,396",
    iconColor: "rgb(255 158 18)",
    iconBg: "rgb(255 211 55 / 21%)",
  },
  {
    icon: <IoPeopleSharp />,
    title: "Peole Left to Pay",
    amount: "4",
    iconColor: "rgb(228, 106, 118)",
    iconBg: "rgb(255, 244, 229)",
  },
];

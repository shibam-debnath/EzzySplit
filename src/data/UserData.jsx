import { BsCurrencyDollar } from "react-icons/bs";
import React, { useEffect, useState } from "react";
import axios from "axios";

export const userProfileData = {
  // const [getUsersDet, FgetUsersDet] = useState({});

  // const getData = async () => {
  //   try {
  //     let config = {
  //       method: "get",
  //       url: `${process.env.REACT_APP_BASE_URL}/user/profile/63d3700f59aa96fcdb661477`,
  //     };
  //     var response;
  //     response = await axios(config);
  //     console.log(response.data.users);
  //     FgetUsersDet(response.data.users);
  //     console.log(`Dtat: ${getUsersDet}`);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // useEffect(() => {
  //   getData();
  // }, []);
  icon: <BsCurrencyDollar />,
  title: "My Profile",
  desc: "Account Settings",
  iconColor: "#03C9D7",
  iconBg: "#E5FAFB",
};

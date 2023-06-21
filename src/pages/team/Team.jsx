import React from "react";
import "./Team.css";
import Navbar from "../../components/Navbar/Navbar";

const Team = () => {
  const teamMembers = [
    {
      name: "Suraj Kumar",
      image: "/images/Suraj.jpg",
      github: "https://github.com/Suraj1520",
      linkedIn: "https://www.linkedin.com/in/suraj-kumar-75b56020a/",
    },
    {
      name: "Shibam Debnath",
      image: "/images/shibam.jpeg",
      github: "https://github.com/shibam-debnath",
      linkedIn: "https://www.linkedin.com/in/shibam-debnath-25b235206/",
    },
    {
      name: "Nikhil Vinay",
      image: "/images/Nikhil1.jpg",
      github: "https://github.com/Suraj1520",
      linkedIn: "https://www.linkedin.com/in/nikhil-vinay-67580a221/",
    },
    {
      name: "Mohit Ranjan",
      image: "/images/mohit.jpg",
      github: "https://github.com/Suraj1520",
      linkedIn: "https://www.linkedin.com/in/mohit-2001/",
    },
    {
      name: "Rituraj Chanda",
      image: "/images/rituraj.jpeg",
      github: "https://github.com/Suraj1520",
      linkedIn: "https://www.linkedin.com/in/riturajchanda2001/",
    },
  ];
  return (
    <div className="bg-BG2">
        <div >
          <Navbar/>
        </div>
          
        <link rel="stylesheet" href="https://cdn.materialdesignicons.com/6.5.95/css/materialdesignicons.min.css"/>
        <div class="flex items-center justify-center min-h-screen py-10">
            <div class="flex flex-col">
                <div class="flex flex-col mt-6">
                    <div class="container max-w-7xl px-4">
                        <div class="flex flex-wrap justify-center text-center mb-14">
                            <div class="w-full lg:w-6/12 px-4">
                                <h1 class="text-slate-300 text-4xl font-semibold">
                                    Meet the Team
                                </h1>
                            </div>
                        </div>
                         {/* members  */}
                        <div class="flex justify-center flex-wrap gap-2 lg:px-20">
                            {teamMembers.map((item)=>(
                                <div class="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4 lg:mx-5">
                                    <div class="flex flex-col items-center">
                                          <img alt="img" class="h-36 w-36 rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                                                src={item.image}/>

                                        {/* <!-- Details --> */}
                                        <div class="text-center mt-6">

                                            <h1 class="text-slate-400 text-xl font-sans font-semibold  mb-1">
                                                {item.name}
                                            </h1>
                                            <div class="flex items-center justify-center opacity-50 hover:opacity-100
                                            transition-opacity duration-300">
                                                <a href={item.linkedIn} class="flex rounded-full hover:bg-indigo-50 h-10 w-10">
                                                    <i class="mdi mdi-linkedin text-indigo-500 mx-auto mt-2"></i>
                                                </a>
                                                <a href={item.github} class="flex rounded-full hover:bg-blue-50 h-10 w-10">
                                                    <i class="mdi mdi-twitter text-blue-300 mx-auto mt-2"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
      );
}

export default Team;

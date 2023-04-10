import React from 'react'
import "./Team.css";
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
const Team = () => {
    return (
        <>
            <div class="back1">
                <Navbar />
                <section class="md:h-full flex items-center text-white">
                    <div class="container px-5 pt-16 pb-2 mx-auto">
                        <div class="text-center mb-12">
                            <h5 class="text-base md:text-lg text-indigo-700  mt-6 mb-1">See Our Team Members</h5>
                            <h3 class="text-4xl md:text-6xl text-white font-semibold">Team members</h3>
                        </div>
                        <div class="flex flex-wrap -m-2">
                            <div class="p-4 sm:w-1/2 lg:w-1/4">
                                <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                    <img class="lg:h-72 md:h-48 w-full object-cover object-center"
                                        src="https://picsum.photos/id/188/720/400" alt="blog"></img>
                                    <div class="p-6 hover:bg-indigo-700 hover:text-white transition duration-300 ease-in">
                                       
                                        <h1 class="text-2xl font-semibold mb-3">Shibham Debnath</h1>
                                        <p class="leading-relaxed mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Aperiam modi, expedita quos doloremque autem ipsum itaque incidunt ipsam reprehenderit
                                            fuga! Dolores quisquam eius cum accusamus?</p>
                                            <div className="flex justify-center flex-wrap mt-4">
                                            <ul className="flex justify-center space-x-5">
                                               
                                                <li className="hover:scale-[1.5]">
                                                    <a href="/">
                                                        <img src="./images/github.svg" alt=" " className="h-8"></img>
                                                    </a>
                                                </li>
                                                <li className="hover:scale-[1.5]">
                                                    <a href="/">
                                                        <img
                                                            src="./images/linkedin.svg"
                                                            alt=" "
                                                            className="h-8 "
                                                        ></img>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="p-4 sm:w-1/2 lg:w-1/4">
                                <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                    <img class="lg:h-72 md:h-48 w-full object-cover object-center"
                                        src="/images/suraj.jfif" alt="blog"></img>
                                    <div class="p-6 hover:bg-indigo-700 hover:text-white transition duration-300 ease-in">
                                       
                                        <h1 class="text-2xl font-semibold mb-3">Suraj Kumar</h1>
                                        <p class="leading-relaxed mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Aperiam modi, expedita quos doloremque autem ipsum itaque incidunt ipsam reprehenderit
                                            fuga! Dolores quisquam eius cum accusamus?</p>
                                            <div className="flex justify-center flex-wrap mt-4">
                                            <ul className="flex justify-center space-x-5">
                                               
                                                <li className="hover:scale-[1.5]">
                                                    <a href="/">
                                                        <img src="./images/github.svg" alt=" " className="h-8"></img>
                                                    </a>
                                                </li>
                                                <li className="hover:scale-[1.5]">
                                                    <a href="/">
                                                        <img
                                                            src="./images/linkedin.svg"
                                                            alt=" "
                                                            className="h-8 "
                                                        ></img>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="p-4 sm:w-1/2 lg:w-1/4">
                                <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                    <img class="lg:h-72 md:h-48 w-full object-cover object-center"
                                        src="/images/nikhil.jfif" alt="blog"></img>
                                    <div class="p-6 hover:bg-indigo-700 hover:text-white transition duration-300 ease-in">
                                        <h1 class="text-2xl font-semibold mb-3">Nikhil Vinay</h1>
                                        <p class="leading-relaxed mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Aperiam modi, expedita quos doloremque autem ipsum itaque incidunt ipsam reprehenderit
                                            fuga! Dolores quisquam eius cum accusamus?</p>
                                            <div className="flex justify-center flex-wrap mt-4">
                                            <ul className="flex justify-center space-x-5">
                                               
                                                <li className="hover:scale-[1.5]">
                                                    <a href="/">
                                                        <img src="./images/github.svg" alt=" " className="h-8"></img>
                                                    </a>
                                                </li>
                                                <li className="hover:scale-[1.5]">
                                                    <a href="/">
                                                        <img
                                                            src="./images/linkedin.svg"
                                                            alt=" "
                                                            className="h-8 "
                                                        ></img>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="p-4 sm:w-1/2 lg:w-1/4">
                                <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                    <img class="lg:h-72 md:h-48 w-full object-cover object-center"
                                        src="/images/mohit.jpg" alt="blog"></img>
                                    <div class="p-6 hover:bg-indigo-700 hover:text-white transition duration-300 ease-in">
                                     
                                        <h1 class="text-2xl font-semibold mb-3">Mohit Ranjan</h1>
                                        <p class="leading-relaxed mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Aperiam modi, expedita quos doloremque autem ipsum itaque incidunt ipsam reprehenderit
                                            fuga! Dolores quisquam eius cum accusamus?</p>
                                            <div className="flex justify-center flex-wrap mt-4">
                                            <ul className="flex justify-center space-x-5">
                                                
                                                <li className="hover:scale-[1.5]">
                                                    <a href="/">
                                                        <img src="./images/github.svg" alt=" " className="h-8"></img>
                                                    </a>
                                                </li>
                                                <li className="hover:scale-[1.5]">
                                                    <a href="/">
                                                        <img
                                                            src="./images/linkedin.svg"
                                                            alt=" "
                                                            className="h-8 "
                                                        ></img>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            

                        </div>
                    </div>

                </section>
                <Footer />
            </div>
        </>
    )
}

export default Team
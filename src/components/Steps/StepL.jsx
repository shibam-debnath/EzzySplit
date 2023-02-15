import React from "react";

const StepL = (props) => {
    return <>
        
                    {/* long */}
                    <div className="hidden  lg:flex lg:justify-between lg:mt-10 lg:pb-14">
                        <div className="img ">
                            <div className=" ">
                                <img src={props.img} alt="Loading steps Images"
                                    className="w-80" />
                            </div>

                        </div>

                        <div className="text w-1/2 p-3 text-left h-[370px]">
                            <div className="text-gray-400 h-[370px]">
                                <h6 className="max-w-2xl font-light mb-4 md:text-lg lg:text-lg text-primary">
                                    {props.step}
                                </h6>

                                <h4 className=" text-2xl md:text-3xl xl:text-4xl font-semibold tracking-wide text-white " >
                                    {props.heading}
                                </h4>
                                <p className="mt-4">
                                   <span className="text-primary">▸ </span> {props.step1}
                                </p>
                                <p className="mt-4">
                                <span className="text-primary">▸ </span>{props.step2}
                                </p>
                                <p className="mt-4">
                                <span className="text-primary">▸ </span>{props.step3}
                                </p>
                               
                            </div>
                        </div>

                    </div>
                    {/* small */}
                    <div className="lg:hidden lg:justify-between pb-14">
                        <div className="text w-4/5 p-3 text-left m-auto pb-10 ">
                            <div className="text-gray-400  ">
                                <h6 className="max-w-2xl font-light mb-4 md:text-lg lg:text-lg text-primary">
                                    {props.step}
                                </h6>

                                <h4 className=" text-2xl md:text-3xl xl:text-4xl font-semibold tracking-wide text-white " >
                                    {props.heading}
                                </h4>
                                <p className="mt-4">
                                   <span className="text-primary">▸ </span> {props.step1}
                                </p>
                                <p className="mt-4">
                                <span className="text-primary">▸ </span>{props.step2}
                                </p>
                                <p className="mt-4">
                                <span className="text-primary">▸ </span>{props.step3}
                                </p>
                               
                            </div>
                        </div>

                        <div className="img w-80 m-auto">
                            <div className=" ">
                                <img src={props.img} alt="Loading steps Images"
                                    className="w-80" />
                            </div>

                        </div>

                    </div>

    </>
}

export default StepL;
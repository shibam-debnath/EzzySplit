import React from "react";
import { useForm } from "react-hook-form";

const Contact = () => {
    //handle events
    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        mode:'onTouched'
    });

    //handle submit
    const onSubmit = data => alert(JSON.stringify(data));

    return (
        <div className="w-full bg-gray-900 p-4 text-white">
            <h1 className="font-bold text-center text-2xl sm:text-3xl"><span className="text-primary">Contact</span> Us</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="p-4">
                    <div  className="mx-5 space-y-4">
                        <div>
                            <input
                                type="text"
                                placeholder="Name"
                                className={` w-3/4 sm:w-96 h-9 text-sm rounded-lg text-black ${errors.fullName &&
                                           "focus:border-red-500 focus:ring-red-500 border-red-500 "}`}
                                {...register("fullName",
                                 { required:{
                                    value:true,
                                    message: 'Full name is required'},

                                    minLength:{
                                        value:3,
                                        message:"Please enter your full name",
                                    },

                                    maxLength:{
                                        value:20,
                                        message:"Maximum allowed characters is 20",
                                    },

                                    pattern:{
                                        value:/[a-zA-Z]+/,
                                        message:"Please enter only alphabets",
                                    }
                                })}
                            />
                            <div>
                            {errors.fullName && <span className="text-red-500 text-xs">{errors.fullName.message}</span>}
                            </div>
                        </div>
                        <div>
                            <input
                                type="email"
                                placeholder="myid@gmail.com"
                                className={`w-3/4 sm:w-96 h-9 text-sm rounded-lg text-black ${errors.fullName &&
                                    "focus:border-red-500 focus:ring-red-500 border-red-500 "}`}
                                {...register("email",
                                 { required:{
                                    value:true,
                                    message: 'Email is required'},

                                    pattern:{
                                        value:/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
                                        message:"Please enter a valid email",
                                    }
                                })}
                            />
                            <div>
                            {errors.email && <span className="text-red-500 text-xs">{errors.email.message}</span>}
                            </div>
                        </div>
                        <div>
                            <textarea
                                placeholder="Message"
                                className={` w-3/4 sm:w-96 h-10 text-sm rounded-lg text-black ${errors.messages &&
                                    "focus:border-red-500 focus:ring-red-500 border-red-500 "}`}
                                {...register("messages",
                                { required:{
                                    value:true,
                                    message: 'Message is required'},

                                    minLength:{
                                        value:3,
                                        message:"Please enter a valid message",
                                    },

                                    maxLength:{
                                        value:200,
                                        message:"Maximum allowed characters is 200",
                                    },
                                })}
                            />
                            <div>
                            {errors.messages && <span className="text-red-500 text-xs">{errors.messages.message}</span>}
                            </div>
                        </div>
                        <div>
                            <input
                                type="submit"
                                value="Submit"
                                className="bg-primary rounded-lg p-2 cursor-pointer hover:outline hover:bg-transparent"
                            />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Contact;
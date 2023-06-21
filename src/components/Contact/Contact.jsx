import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { ClipLoader, BarLoader } from "react-spinners";

var value = "Sent";

const Contact = () => {
  const [beforeSubmit, fbeforeSubmit] = useState(0);
  const set = () => {
    setTimeout(() => {
      fbeforeSubmit(0);
    }, 10000);
  };
  //handle events
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });

  var response;
  //handle submit
  async function onSubmitForm(values) {
    fbeforeSubmit(1);
    console.log(values);

    let config = {
      method: "post",
      url: `${process.env.REACT_APP_BASE_URL}/sendmail/contactUs`,

      data: {
        name: values.name,
        emailId: values.email,
        message: values.message,
      },
    };

    try {
      response = await axios(config);

      console.log(response);
      if (response.data === "Failed to receive mail") {
        // alert("Failed to receive message");
        value = "Failed to receive message";
        fbeforeSubmit(2);
      } else {
        value = "Message sent";
        fbeforeSubmit(2);
        // alert("Message receieved");
      }
      set();
    } catch (err) {
      value = "Something went wrong";
      set();
      fbeforeSubmit(2);
      set();
      console.log(err);
    }
  }

  return (
    <div id="Contact" className=" w-full bg-transparent p-6 text-white">
      <h1 className="font-bold text-center text-2xl sm:text-3xl">
        <span className="text-primary">Contact</span> Us
      </h1>

      <form onSubmit={handleSubmit(onSubmitForm)}>
        <div className="p-4">
          <div className="mx-5 space-y-4">
            <div>
              <input
                name="name"
                type="text"
                placeholder="Name"
                className={` w-3/4 sm:w-96 h-9 text-sm rounded-lg text-black bg-gray-200 ${
                  errors.fullName &&
                  "focus:border-red-500 focus:ring-red-500 border-red-500 "
                }`}
                {...register("name", {
                  required: {
                    value: true,
                    message: "Full name is required",
                  },

                  minLength: {
                    value: 3,
                    message: "Please enter your full name",
                  },

                  maxLength: {
                    value: 20,
                    message: "Maximum allowed characters is 20",
                  },

                  pattern: {
                    value: /[a-zA-Z]+/,
                    message: "Please enter only alphabets",
                  },
                })}
              />
              <div>
                {errors.name && (
                  <span className="text-red-500 text-xs">
                    {errors.name.message}
                  </span>
                )}
              </div>
            </div>
            <div>
              <input
                name="emailId"
                type="email"
                placeholder="myid@gmail.com"
                className={`w-3/4 sm:w-96 h-9 text-sm rounded-lg text-black bg-gray-200 ${
                  errors.fullName &&
                  "focus:border-red-500 focus:ring-red-500 border-red-500 "
                }`}
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is required",
                  },

                  pattern: {
                    value: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
                    message: "Please enter a valid email",
                  },
                })}
              />
              <div>
                {errors.email && (
                  <span className="text-red-500 text-xs">
                    {errors.email.message}
                  </span>
                )}
              </div>
            </div>
            <div>
              <textarea
                // name="message"
                placeholder="Message"
                className={` w-3/4 sm:w-96 h-20 text-sm rounded-lg text-black bg-gray-200 ${
                  errors.messages &&
                  "focus:border-red-500 focus:ring-red-500 border-red-500 "
                }`}
                {...register("message", {
                  required: {
                    value: true,
                    message: "Message is required",
                  },

                  minLength: {
                    value: 3,
                    message: "Please enter a valid message",
                  },

                  maxLength: {
                    value: 200,
                    message: "Maximum allowed characters is 200",
                  },
                })}
              />
              <div>
                {errors.message && (
                  <span className="text-red-500 text-xs">
                    {errors.message.message}
                  </span>
                )}
              </div>
            </div>
            <div className="flex justify-center">
              {beforeSubmit === 0 && (
                <input
                  type="submit"
                  value="Submit"
                  className="bg-primary rounded-lg p-2 cursor-pointer hover:outline hover:bg-transparent"
                />
              )}
              {beforeSubmit === 1 && (
                <div className="flex justify-center rounded-lg">
                  <BarLoader
                    className="rounded-lg"
                    color="#6B60F1"
                    speedMultiplier={1}
                    height={38}
                  />
                </div>
              )}
              {beforeSubmit === 2 && (
                <div className="bg-primary rounded-lg p-2 text-center w-fit flex justify-center ">
                  {/* <div className="bg-primary rounded-lg p-2 text-center w-64 " > */}
                  {value}
                  {/* </div> */}
                </div>
              )}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;

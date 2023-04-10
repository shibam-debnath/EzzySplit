import { React, useRef } from "react";
import { NavLink } from "react-router-dom";
import { signup } from "../../firebase/firebase";
import axios from "axios";
import { useNavigate } from "react-router";

const SignUp = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const navigate = useNavigate();

  async function post() {
    try {
      axios
        .post("http://localhost:8000/user/adduser", {
          emailId: emailRef.current.value,
          name: "user",
        })
        .then((response) => {
          if (response.status === 201) {
            console.log("Successfully added the user");
          }
        });
    } catch (err) {
      console.log(err);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return alert("Passwords do not match");
    }
    try {
      await signup(emailRef.current.value, passwordRef.current.value);
    } catch (e) {
      alert(e.message);
      alert("Failed to create an account");
    }
    post();
    navigate("/login");
  }

  return (
    <div>
      <div className=" flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50 ">
        <div>
          <a href="/">
            <div className=" mt-10 text-4xl font-bold flex">
              <div className="text-black">Ezzy</div>
              <div className="text-primary">Split</div>
            </div>
          </a>
        </div>
        <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white sm:max-w-lg sm:rounded-lg shadow-2xl">
          <form onSubmit={handleSubmit}>
            <div className="mt-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Email
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="email"
                  name="email"
                  ref={emailRef}
                  required
                  className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Password
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="password"
                  name="password"
                  ref={passwordRef}
                  required
                  className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="password_confirmation"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Confirm Password
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="password"
                  name="password_confirmation"
                  ref={passwordConfirmRef}
                  required
                  className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
            </div>
            <div className="flex items-center mt-4">
              <button
                type="submit"
                className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-primary rounded-md hover:bg-lgPrimary focus:outline-none focus:bg-purple-600"
              >
                Register
              </button>
            </div>
          </form>
          <div className="mt-4 text-grey-600">
            Already have an account?{" "}
            <span>
              <NavLink className="text-primary hover:underline" to={"/login"}>
                Log in
              </NavLink>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

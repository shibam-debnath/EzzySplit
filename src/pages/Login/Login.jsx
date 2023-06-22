import { React, useRef, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import {
  auth,
  login,
  signInWithGoogle,
  sendPasswordReset,
} from "../../firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth, updateProfile } from "firebase/auth";

const Login = () => {
  const auth1 = getAuth();
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    if (loading) {
      return;
    }
    if (user && user.emailVerified === true) {
      console.log("banda logged in hein and we are searching using his email");
      console.log(user.email);
      getId(user.email);
    } else if (user && user.emailVerified === false) {
      alert("Verify email first");
    }
    // eslint-disable-next-line
  }, [user, loading]);

  const updateDisplayName = (newName) => {
    const user = auth1.currentUser;
    console.log(user);
    if (user) {
      updateProfile(user, {
        displayName: newName,
      })
        .then(() => {
          console.log("Display name updated successfully");
          var temp = newName.split("---");
          if (temp[1] === undefined) navigate("/dashboard/newGroup");
          else navigate("/dashboard/");
        })
        .catch((error) => {
          console.log(`Error updating display name: ${error}`);
        });
    }
  };

  const getId = async (emailId) => {
    try {
      await axios
        .get(
          `${process.env.REACT_APP_BASE_URL}/user/profile/emailId/${emailId}`,
          {
            responseType: "json",
          }
        )
        .then(function (response) {
          console.log(response.data[0]);
          const userId = response.data[0]._id;
          const groupId = response.data[0].groupid[0];
          const temp = userId + "---" + groupId;
          console.log(temp);
          updateDisplayName(temp);
          
          // if not in any froup redirect to create a new group
          // if (groupId === undefined) navigate("/dashboard/newGroup");
          // else navigate("/dashboard/");
        });
    } catch (err) {
      console.log(err);
    }
  };

  async function handleLoginSubmit(e) {
    e.preventDefault();
    try {
      await login(emailRef.current.value, passwordRef.current.value);
      console.log(user);
    } catch (e) {
      alert("Login unsuccessful");
    }
  }

  async function handleForgotPassword(e) {
    e.preventDefault();
    try {
      await sendPasswordReset(emailRef.current.value);
    } catch (e) {
      alert("Email sent unsuccessful");
    }
  }

  return (
    <div>
      <div className=" flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50">
        <div>
          <a href="/">
            <div className=" mt-10 text-4xl font-bold flex">
              <div className="text-black">Ezzy</div>
              <div className="text-primary">Split</div>
            </div>
          </a>
        </div>
        <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-2xl sm:max-w-lg sm:rounded-lg">
          {error && <h1>{error}</h1>}
          <form onSubmit={handleLoginSubmit}>
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
            <NavLink
              onClick={handleForgotPassword}
              className="text-xs text-primary hover:underline"
            >
              Forget Password?
            </NavLink>
            <div className="flex items-center mt-4">
              <button
                type="submit"
                disabled={loading}
                className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform hover:bg-lgPrimary rounded-md bg-primary focus:outline-none focus:bg-primary"
              >
                Log in
              </button>
            </div>
          </form>
          <div className="mt-4 text-grey-600">
            Don't have an account?{" "}
            <span>
              <NavLink className="text-primary hover:underline" to={"/signup"}>
                Register here
              </NavLink>
            </span>
          </div>
          <div className="flex items-center w-full my-4">
            <hr className="w-full" />
            <p className="px-3 ">OR</p>
            <hr className="w-full" />
          </div>
          <div className="my-6 space-y-2">
            <button
              aria-label="Login with Google"
              type="button"
              className="flex items-center justify-center w-full p-2 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:ring-violet-400"
            >
              <svg
                className="w-5 h-5 fill-current"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M30.0014 16.3109C30.0014 15.1598 29.9061 14.3198 29.6998 13.4487H16.2871V18.6442H24.1601C24.0014 19.9354 23.1442 21.8798 21.2394 23.1864L21.2127 23.3604L25.4536 26.58L25.7474 26.6087C28.4458 24.1665 30.0014 20.5731 30.0014 16.3109Z"
                  fill="#4285F4"
                />
                <path
                  d="M16.2863 29.9998C20.1434 29.9998 23.3814 28.7553 25.7466 26.6086L21.2386 23.1863C20.0323 24.0108 18.4132 24.5863 16.2863 24.5863C12.5086 24.5863 9.30225 22.1441 8.15929 18.7686L7.99176 18.7825L3.58208 22.127L3.52441 22.2841C5.87359 26.8574 10.699 29.9998 16.2863 29.9998Z"
                  fill="#34A853"
                />
                <path
                  d="M8.15964 18.769C7.85806 17.8979 7.68352 16.9645 7.68352 16.0001C7.68352 15.0356 7.85806 14.1023 8.14377 13.2312L8.13578 13.0456L3.67083 9.64746L3.52475 9.71556C2.55654 11.6134 2.00098 13.7445 2.00098 16.0001C2.00098 18.2556 2.55654 20.3867 3.52475 22.2845L8.15964 18.769Z"
                  fill="#FBBC05"
                />
                <path
                  d="M16.2864 7.4133C18.9689 7.4133 20.7784 8.54885 21.8102 9.4978L25.8419 5.64C23.3658 3.38445 20.1435 2 16.2864 2C10.699 2 5.8736 5.1422 3.52441 9.71549L8.14345 13.2311C9.30229 9.85555 12.5086 7.4133 16.2864 7.4133Z"
                  fill="#EB4335"
                />
              </svg>
              <p onClick={signInWithGoogle}>Login with Google</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

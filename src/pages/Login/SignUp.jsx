import { React, useRef, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { auth, signup } from "../../firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const SignUp = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  const navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);

  // redirect to dashboard if already logged in
  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) {
      console.log(user);
      navigate("/dashboard");
    }
    // eslint-disable-next-line
  }, [user]);

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return alert("Passwords do not match");
    }

    try {
      await signup(emailRef.current.value, passwordRef.current.value);
      // after signup redirect to dashboard
    } catch (e) {
      alert(e.message);
      alert("Failed to create an account");
    }
  }

  useEffect(() => {
    if (loading) return;
    if (user) navigate("/dashboard");
    // eslint-disable-next-line
  }, [user, loading]);

  return (
    <div>
      <div className=" flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50">
        <div>
          <a href="/">
            <h3 className=" mt-10 text-4xl font-bold text-purple-600">Logo</h3>
          </a>
        </div>
        <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-lg sm:rounded-lg">
          {error && <h1>{error}</h1>}
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
                disabled={loading}
                className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
              >
                Register
              </button>
            </div>
          </form>
          <div className="mt-4 text-grey-600">
            Already have an account?{" "}
            <span>
              <NavLink
                className="text-purple-600 hover:underline"
                to={"/login"}
              >
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
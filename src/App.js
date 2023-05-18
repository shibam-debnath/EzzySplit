import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

// css
import "./App.css";

// dependencies
import Lottie from "react-lottie";

// pages
import Home from "./pages/Home/Home";
import DashBoard from "./pages/DashBoard/DashBoard";
import LastGroup from "./pages/LastGroup/LastGroup";
import Login from "./pages/Login/Login";
import SignUp from "./pages/Login/SignUp";
import Error404 from "./pages/Error404/Error404";
import NewGroup from "./pages/NewGroup/NewGroup";
import AcceptInvitation from "./pages/AcceptInvitation/AcceptInvitation";
import Team from "./pages/team/Team";
// components
import Activity from "./components/DashBoardContent/Activity";
import DashBoardContent from "./components/DashBoardContent/DashBoardContent";
import FriendsCheck from "./components/DashBoardContent/FriendsCheck";

// imports
import loader from "./preloader-3.json";

// function that handles google sign in

function App() {
  const [isLoading, setIsLoading] = useState(true);
  // const currentUser = true;

  // const RequireAuth = ({ children }) => {
  //   return currentUser ? children : <Navigate to="/login" />;
  // };

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1500);
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <div className="preloader flex items-center m-auto w-screen h-screen">
          <Lottie
            options={{
              loop: true,
              autoplay: true,
              animationData: loader,
            }}
          />
        </div>
      ) : (
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/dashBoard" element={<DashBoard />}>
            <Route
              exact
              path="LastGroup"
              element={
                // <RequireAuth>
                <LastGroup />
                // </RequireAuth>
              }
            />
            <Route
              exact
              path="friends"
              element={
                // <RequireAuth>
                <FriendsCheck />
                // </RequireAuth>
              }
            />
            <Route
              exact
              path=""
              element={
                // <RequireAuth>
                <DashBoardContent />
                // </RequireAuth>
              }
            />
            <Route
              exact
              path="newGroup"
              element={
                // <RequireAuth>
                <NewGroup />
                // </RequireAuth>
              }
            />
            <Route
              exact
              path="activity"
              element={
                // <RequireAuth>
                <Activity />
                // </RequireAuth>
              }
            />
          </Route>
          <Route
            path="/acceptInvitation/:id"
            element={
              // <RequireAuth>
              <AcceptInvitation />
              // </RequireAuth>
            }
          />
          <Route path="*" element={<Error404 />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/team" element={<Team />} />
        </Routes>
      )}
    </div>
  );
}

export default App;

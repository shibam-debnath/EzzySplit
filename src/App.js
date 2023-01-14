import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import DashBoard from "./pages/DashBoard/DashBoard";
import LastGroup from "./pages/LastGroup/LastGroup";
// import Groups from "./components/DashBoardContent/Groups";
import DashBoardContent from "./components/DashBoardContent/DashBoardContent";
import Activity from "./components/DashBoardContent/Activity";
import FriendsCheck from "./components/DashBoardContent/FriendsCheck";
import Login from "./pages/Login/Login";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import initializeAuthentication from "./firebase/firebase.init";

initializeAuthentication();
const provider = new GoogleAuthProvider();

const handleGooglesignIn = () => {
  const auth = getAuth();

  signInWithPopup(auth, provider).then((result) => {
    const user = result.user;
    console.log(user);
  });
};

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/dashBoard" element={<DashBoard />}>
          {/* <Route path="/lastgroup" element={<LastGroup />} /> */}
          <Route exact path="LastGroup" element={<LastGroup />} />
          <Route exact path="friends" element={<FriendsCheck />} />
          <Route exact path="" element={<DashBoardContent />} />
          <Route exact path="activity" element={<Activity />} />
        </Route>
        <Route
          path="/Login"
          element={<Login handleGooglesignIn={handleGooglesignIn} />}
        />
      </Routes>
    </div>
  );
}

export default App;

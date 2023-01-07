import {
  BrowserRouter as Router,
  Route, Routes
} from "react-router-dom";
import "./App.css";
import DashBoard from "./pages/DashBoard/DashBoard";

import Home from "./pages/Home/Home";

import LastGroup from "./pages/LastGroup/LastGroup";
// import Groups from "./components/DashBoardContent/Groups";
import DashBoardContent from "./components/DashBoardContent/DashBoardContent"
import Activity from "./components/DashBoardContent/Activity";
import FriendsCheck from "./components/DashBoardContent/FriendsCheck";

import Login from "./pages/Login/Login";

function App() {

  return (
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="/dashBoard" element={<DashBoard />}>
          {/* <Route path="/lastgroup" element={<LastGroup />} /> */}
          <Route exact path="LastGroup" element={<LastGroup/>}/>
          <Route exact path="friends" element={<FriendsCheck/>}/>
          <Route exact path="" element={<DashBoardContent/>}/>
          <Route exact path="activity" element={<Activity/>}/>

        </Route>
        <Route
          path="/Login"
          element={<Login />}
        />
        </Routes>
      
  );
}
export default App;

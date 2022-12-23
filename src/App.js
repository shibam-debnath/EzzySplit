import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import DashBoard from "./pages/DashBoard/DashBoard";
// import Groups from "./components/DashBoardContent/Groups";
import DashBoardContent from "./components/DashBoardContent/DashBoardContent"
import Activity from "./components/DashBoardContent/Activity";
import FriendsCheck from "./components/DashBoardContent/FriendsCheck";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="/dashBoard" element={<DashBoard />}>
          {/* <Route exact path="groups" element={<Groups/>}/> */}
          <Route exact path="friends" element={<FriendsCheck/>}/>
          <Route exact path="" element={<DashBoardContent/>}/>
          <Route exact path="activity" element={<Activity/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;

import {
  BrowserRouter as Router,
  Route, Routes
} from "react-router-dom";
import "./App.css";
import DashBoard from "./pages/DashBoard/DashBoard";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";

function App() {

  return (
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/dashBoard" element={<DashBoard />} />
        <Route
          path="/Login"
          element={<Login />}
        />
        </Routes>
      
  );
}
export default App;

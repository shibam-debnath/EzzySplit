import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import DashBoard from "./pages/DashBoard/DashBoard";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/dashBoard" element={<DashBoard />} />
      </Routes>
    </div>
  );
}

export default App;

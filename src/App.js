import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import DashBoard from "./pages/DashBoard/DashBoard";
import LastGroup from "./pages/LastGroup/LastGroup";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/dashBoard" element={<DashBoard />} />
        <Route path="/lastgroup" element={<LastGroup />} />
      </Routes>
    </div>
  );
}

export default App;

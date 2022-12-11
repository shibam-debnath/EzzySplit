import "./App.css";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import DashBoard from "./pages/DashBoard/DashBoard";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/dashBoard" element={<DashBoard />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

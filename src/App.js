import "./App.css";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import DashBoard from "./pages/DashBoard/DashBoard";
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
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/dashBoard" element={<DashBoard />} />
        <Route
          path="/Login"
          element={<Login handleGooglesignIn={handleGooglesignIn} />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

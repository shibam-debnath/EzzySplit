import { initializeApp } from "firebase/app";
import firebaseconfig from "./firebase.config";

 const initializeAuthentication = () => {
  initializeApp(firebaseconfig);
};

export default initializeAuthentication;

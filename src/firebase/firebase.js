import { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
  sendEmailVerification,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAwjk_VQu_5VS5ziUjcsVC89xsl7eLSzxc",
  authDomain: "ezzysplit.firebaseapp.com",
  projectId: "ezzysplit",
  storageBucket: "ezzysplit.appspot.com",
  messagingSenderId: "1095977741541",
  appId: "1:1095977741541:web:3f756422ba02d9ee0c780c",
  measurementId: "G-XC55BMQ1FE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// exports
export const auth = getAuth(app);

export async function signup(email, password) {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    await sendEmailVerification(auth.currentUser);
    await signOut(auth);
    alert("Email sent ! verify first and then login");
  } catch (err) {
    console.error(err.message);
    alert(err.message);
  }
}

const googleProvider = new GoogleAuthProvider();
export const signInWithGoogle = async () => {
  try {
    await signInWithPopup(auth, googleProvider);
  } catch (err) {
    console.error(err.message);
    alert(err.message);
  }
};

export async function login(email, password) {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err.message);
    alert(err.message);
  }
}

export const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent ! Check your mail");
  } catch (err) {
    console.error(err.message);
    alert(err.message);
  }
};

export async function logout() {
  try {
    await signOut(auth);
  } catch (err) {
    console.error(err.message);
    alert(err.message);
  }
}

// custom hook
export function useAuth() {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged((auth, user) => {
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  return currentUser;
}

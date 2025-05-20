import React from "react";
import { AuthContext } from "./AuthContext";
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase/firebase.init";

const provider=new GoogleAuthProvider()


const AuthProvider = ({ children }) => {
const createUser=(email,password)=>{
  return createUserWithEmailAndPassword(auth,email,password)
}
const loginF=(email,password)=>{
  return signInWithEmailAndPassword(auth,email,password)
}
const googleLogin=()=>{
  return signInWithPopup(auth,provider)
}

  const userInfo = {
    createUser,
    loginF,
    googleLogin
  };

  return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default AuthProvider;

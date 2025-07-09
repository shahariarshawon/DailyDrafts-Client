import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase/firebase.config";
const AuthProvider = ({ children }) => {
  //loading state
  const [loading, setLoading] = useState(true);
  //user state
  const [user,setUser]=useState();
// user creation
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // login user
  const userLogin=(email,password)=>{
    setLoading(true);
    return signInWithEmailAndPassword(auth,email,password);
  }
  //auth state change
  useEffect(()=>{
const unSubscribe=onAuthStateChanged(auth, currentUser=>{
setUser(currentUser); 
console.log("user in the auth state changed",currentUser);
})
return()=>{
  unSubscribe();
}
  },[])
  const authInfo = {
    loading,
    setLoading,
    createUser,
    userLogin,
    user,
  };
  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;

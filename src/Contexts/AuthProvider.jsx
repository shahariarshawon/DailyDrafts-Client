import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from "../Firebase/firebase.config";
const AuthProvider = ({ children }) => {
  //google provider
  const googleProvider=new GoogleAuthProvider();
  //loading state
  const [loading, setLoading] = useState(true);
  //user state
  const [user,setUser]=useState();
// user creation with email
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //login user with google 
  const googleLogin=()=>{
    setLoading(true);
    return signInWithPopup(auth,googleProvider)
  }
  // login user with email
  const userLogin=(email,password)=>{
    setLoading(true);
    return signInWithEmailAndPassword(auth,email,password);
  }
  //auth state change
  useEffect(()=>{
const unSubscribe=onAuthStateChanged(auth, currentUser=>{
setUser(currentUser); 
setLoading(false);
console.log("user in the auth state changed",currentUser);
})
return()=>{
  unSubscribe();
}
  },[])
 //   update user icon by register
  const updateUser = (updatedData) => {
    return updateProfile(auth.currentUser, updatedData);
  };
  //user logout
  const userLogout=()=>{
    setLoading(true);
    return signOut(auth);
  }
  const authInfo = {
    loading,
    setLoading,
    createUser,
    userLogin,
    user,
    setUser,
    userLogout,
    googleLogin,
    updateUser,
  };
  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;

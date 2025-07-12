import React, { use, useEffect } from "react";
import { Navigate, useLocation } from "react-router";
import Loader from "../Components/Loader/Loader";
import { AuthContext } from "../Contexts/AuthContext";
import Swal from "sweetalert2";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = use(AuthContext);

   useEffect(() => {
    if (!loading && !user) {
      Swal.fire({
  position: "center",
  icon: "info",
  title: "You have to sign in to access this path",
  showConfirmButton: false,
  timer: 1500
});
    }
  }, [loading, user]);
  // console.log("render hoiche bhai");
  if (loading) {
    return <Loader></Loader>;
  }
  if (user) {
    return children;
  }
  return <Navigate to="/auth/login" state={{ from: location.pathname, needAuth: true }} replace />;

};

export default PrivateRoute;
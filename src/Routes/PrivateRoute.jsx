import React, { use } from "react";
import { Navigate, useLocation } from "react-router";
import Loader from "../Components/Loader/Loader";
import { AuthContext } from "../Contexts/AuthContext";
import Swal from "sweetalert2";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = use(AuthContext);

   
    
 
  if (loading) {
    return <Loader></Loader>;
  }
  if (user) {
    return children;
  }
  return <Navigate to="/auth/login" state={{ from: location, needAuth: true }} replace />;


};

export default PrivateRoute;
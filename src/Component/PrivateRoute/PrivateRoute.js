import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useFirebase from "../Hooks/useFirebase";

const PrivateRoute = ({ children, ...rest }) => {
  const { user, isLoading } = useFirebase();
  const location = useLocation();
  if (isLoading) return <span class=""> Loading...</span>;
  if (user.email) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }}></Navigate>;
};

export default PrivateRoute;

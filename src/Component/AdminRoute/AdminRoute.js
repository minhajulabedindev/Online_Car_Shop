import React from "react";
import { Navigate, useLocation } from "react-router";
import useAuth from "../Hooks/useAuth";

const AdminRoute = ({ children, ...rest }) => {
  const { user, admin, isLoading } = useAuth();
  console.log(admin, "this is the admin route");
  const location = useLocation();
  if (isLoading) {
    return <span class="visually-hidden">Loading...</span>;
  }
  if (admin === true) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }}></Navigate>;
};

export default AdminRoute;

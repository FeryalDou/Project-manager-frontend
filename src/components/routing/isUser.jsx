import React from "react";
import useAuth from "../../context/useAuth";
import { Navigate, Outlet } from "react-router-dom";

function IsUser() {
  const { isLoggedIn, isLoading, user } = useAuth();

  if (isLoading) {
    return <p>Loading :)</p>;
  }

  if (!isLoggedIn) {
    return <Navigate to={"/login"} />;
  }

  return <Outlet />;
}

export default IsUser;

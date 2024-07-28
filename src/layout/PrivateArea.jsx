import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export const PrivateArea = () => {
  const token = localStorage.getItem('token');

  return token ? (
    <Outlet />
  ) : (
    <Navigate to="/login" />
  );
};

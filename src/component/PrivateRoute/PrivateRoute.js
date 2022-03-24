import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/auth/authContext";

export function PrivateRoute({ children }) {
  const { token } = useAuth();
  return token ? children : <Navigate to="/login" replace />;
}

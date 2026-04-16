import React from "react";
import useAuth from "../hooks/useAuth";
import { Navigate } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <span className="loading loading-infinity loading-xl"></span>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default PrivateRoute;
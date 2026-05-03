import React from "react";
import useAuth from "../hooks/useAuth";
import useRole from "../hooks/useRole";
import Forbidden from "../pages/forbidden/Forbidden";

const AdminRoutes = ({children}) => {
  const { isLoading } = useAuth();
  const { role, roleLoading } = useRole();

  if (isLoading || roleLoading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <span className="loading loading-infinity loading-xl"></span>
      </div>
    );
  }

  if(role !== 'admin'){
    return <Forbidden></Forbidden>
  }    


  return children;
};

export default AdminRoutes;

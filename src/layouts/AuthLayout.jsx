import React from "react";
import { Outlet } from "react-router";
import authImage from "../assets/authImage.png";
import Logo from "../components/logo/Logo";

const AuthLayout = () => {
  return (
    <div>
        <div className="bg-[#F5F5F5] px-10 py-5">
            <Logo></Logo>
        </div>
      <div className="flex min-h-screen">
        {/* Left Side */}
        <div className="flex-1 bg-[#F5F5F5] flex items-center justify-center">
          <div className="max-w-md w-full ">
            <Outlet />
          </div>
        </div>

        {/* Right Side */}
        <div className="flex-1 bg-[#FAFDF0] flex items-center justify-center">
          <img src={authImage} alt="Auth Illustration" className="w-3/4" />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;

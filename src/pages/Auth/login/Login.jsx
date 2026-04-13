import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import { Link } from "react-router";

const Login = () => {
  const { signInUser } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSignIn = (data) => {
    signInUser(data.email, data.password)
      .then((res) => {
        console.log(res.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      {/* Heading */}
      <h1 className="text-4xl font-bold mb-2">Welcome Back</h1>
      <p className="text-gray-500 mb-6">Login with ZapShift</p>

      {/* Form */}
      <form onSubmit={handleSubmit(handleSignIn)} className="space-y-4">
        {/* Email */}
        <div>
          <label className="block mb-1 text-sm font-medium">Email</label>
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-lime-400"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">Email is required</p>
          )}
        </div>

        {/* Password */}
        <div>
          <label className="block mb-1 text-sm font-medium">Password</label>
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-lime-400"
            {...register("password", { required: true })}
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">Password is required</p>
          )}
        </div>

        {/* Forgot password */}
        <div className="text-sm text-gray-500">
          <a href="#" className="hover:underline">
            Forgot Password?
          </a>
        </div>

        {/* Login Button */}
        <button className="w-full bg-primary hover:bg-lime-500 text-black font-medium py-2 rounded-md">
          Login
        </button>
      </form>

      {/* Divider */}
      <div className="my-6 text-center text-gray-400">Or</div>

      {/* Google Login */}
      <button className="w-full border py-2 rounded-md flex items-center justify-center gap-2 hover:bg-gray-100">
        <img
          src="https://www.svgrepo.com/show/475656/google-color.svg"
          alt="google"
          className="w-5 h-5"
        />
        Login with Google
      </button>

      {/* Register */}
      <p className="mt-4 text-sm text-gray-500">
        Don’t have any account?{" "}
        <Link to='/register'><span className="text-primarycursor-pointer">Register</span></Link>
      </p>
    </div>
  );
};

export default Login;
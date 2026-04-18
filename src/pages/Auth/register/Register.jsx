import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router";
import SocialLogin from "../socialLogin/SocialLogin";
import axios from "axios";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { registerUser,updateUserProfile } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);

  const handleRegistration = (data) => {
    
    const profileImg = data.photo[0];
    registerUser(data.email, data.password)
      .then((res) => {
        // console.log(res.user)
        const formData = new FormData();
        formData.append('image', profileImg);
        const image_API_URL = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_Image_Host_API_Key}`

        axios.post(image_API_URL, formData)
        .then(res => {
          console.log(res.data.data.url);

          // Upadate user profile
          const userProfile = {
            displayName: data.name,
            photoURL : res.data.data.url

          }

          updateUserProfile(userProfile)
          .then()
          .catch(error => {
            console.log(error)
          })
        })

        navigate('/');
      })
      .catch((error) => {
        // console.log(error);
      });
  };
  return (
    <div>
      <h1 className="text-4xl font-bold">Create an Account</h1>
      <h3 className="text-2xl my-2">Register with ZapShift</h3>
      <form onSubmit={handleSubmit(handleRegistration)}>
        <fieldset className="fieldset">
          <label className="label">Name</label>
          <input
            type="text"
            className="input w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-lime-400"
            placeholder="Name"
            {...register("name", { required: true })}
          />
          {errors.name?.type === "required" && (
            <p className="text-red-500">Name is required</p>
          )}
          <label className="label">Photo</label>
          <input
            type="file"
            className="file-input w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-lime-400"
            placeholder="Photo"
            {...register("photo", { required: true })}
          />
          {errors.photo?.type === "required" && (
            <p className="text-red-500">Photo is required</p>
          )}
          <label className="label">Email</label>
          <input
            type="email"
            className="input w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-lime-400"
            placeholder="Email"
            {...register("email", { required: true })}
          />
          {errors.email?.type === "required" && (
            <p className="text-red-500">Email is required</p>
          )}
          <label className="label">Password</label>
          <input
            type="password"
            className="input w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-lime-400"
            placeholder="Password"
            {...register("password", {
              required: true,
              minLength: 8,
              pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d]).{8,}$/,
            })}
          />
          {errors.password?.type === "required" && (
            <p className="text-red-500">Password is required</p>
          )}
          {errors.password?.type === "minLength" && (
            <p className="text-red-500">Password must be atleast 8 character</p>
          )}
          {errors.password?.type === "pattern" && (
            <p className="text-red-500">
              Password must be at least one digit, one character, special
              character, upper-case, lower-case.
            </p>
          )}
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="w-full bg-primary hover:bg-lime-500 text-black font-medium py-2 rounded-md">
            SignUp
          </button>
        </fieldset>
      </form>
      <SocialLogin></SocialLogin>
      {/* Register */}
      <p className="mt-4 text-sm text-gray-500">
        Don’t have any account?{" "}
        <Link to="/login" className="text-primary cursor-pointer">
          Login
        </Link>
      </p>
    </div>
  );
};

export default Register;

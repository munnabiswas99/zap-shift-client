import React from "react";
import useAuth from "../../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const SocialLogin = () => {
  const { googleSignIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  // console.log("Social", location)

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((res) => {
        // console.log(res.user)

        const userInfo = {
          email: res.user.email,
          displayName: res.user.displayName,
          photoURL: res.user.photoURL,
        };
        axiosSecure.post("/users", userInfo).then((res) => {
          navigate(location.state || "/");
          console.log(res.data)
        });
      })
      .catch(() => {
        // console.log(error)
      });
  };
  return (
    <div>
      <div className="my-6 text-center text-gray-400">Or</div>

      {/* Google Login */}
      <button
        onClick={handleGoogleSignIn}
        className="w-full border py-2 rounded-md flex items-center justify-center gap-2 hover:bg-gray-100"
      >
        <img
          src="https://www.svgrepo.com/show/475656/google-color.svg"
          alt="google"
          className="w-5 h-5"
        />
        Login with Google
      </button>
    </div>
  );
};

export default SocialLogin;

import React from "react";
import useAuth from "../../../hooks/useAuth";

const SocialLogin = () => {
    const {googleSignIn} = useAuth();

    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(res => {
            console.log(res.user)
        })
        .catch(error => {
            console.log(error)
        })
    }
  return (
    <div>
      <div className="my-6 text-center text-gray-400">Or</div>

      {/* Google Login */}
      <button
      onClick={handleGoogleSignIn}
      className="w-full border py-2 rounded-md flex items-center justify-center gap-2 hover:bg-gray-100">
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

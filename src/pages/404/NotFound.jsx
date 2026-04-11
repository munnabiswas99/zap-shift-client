import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="my-10">
      <div className="mx-auto shadow-2xl p-10 text-center">
        <DotLottieReact
          src="/src/assets/lottiesFiles/404.lottie"
          loop
          autoplay
        />
        <Link to={"/"}>
          {" "}
          <button className="bg-primary p-2 rounded-xl font-bold">
            Go Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;

import Lottie from "lottie-react";
import forbiddenAnm from "../../assets/animations/forbidden403.json";

const Forbidden = () => {
  const LottieComponent = Lottie.default || Lottie;

  return (
    <div className="w-1/2 mx-auto p-10">
      <h1 className="text-4xl font-bold text-center my-10">Sorry, Your access is forbidden!</h1>
      <LottieComponent animationData={forbiddenAnm} />
    </div>
  );
};

export default Forbidden;
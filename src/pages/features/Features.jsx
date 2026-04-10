import React from "react";
import liveTracking from '../../assets/live-tracking.png';
import safeDelevery from "../../assets/safe-delivery.png";

const Features = () => {
  const features = [
    {
      id: 1,
      img: liveTracking,
      title: "Live Parcel Tracking",
      description:
        "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.",
    },
    {
      id: 2,
      img: safeDelevery,
      title: "100% Safe Delivery",
      description:
        "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
    },
    {
      id: 3,
      img: safeDelevery,
      title: "24/7 Call Center Support",
      description:
        "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
    },
  ];
  return (
    <>
      {features.map((feature) => (
        <div className="flex p-10 items-center gap-10 bg-base-100 my-4 shadow-2xl" key={feature.id}>
          <div className="">
            <img src={feature.img} alt="" />
          </div>
          <div>
            <h1 className="text-primnary font-bold text-2xl">
                {feature.title}
            </h1>
            <p>
                {feature.description}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Features;

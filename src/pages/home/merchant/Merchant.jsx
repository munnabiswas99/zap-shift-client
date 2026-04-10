import React from "react";
import marchantImg1 from "../../../assets/be-a-merchant-bg.png";
import marchantImg2 from "../../../assets/location-merchant.png";

const Merchant = () => {
  return (
    <div className="bg-secondary">
      <img src={marchantImg1} alt="" />
      <div className="flex">
        <div >
          <h1 className="font-bold text-3xl text-white">
            Merchant and Customer Satisfaction is Our First Priority
          </h1>
          <p>
            We offer the lowest delivery charge with the highest value along
            with 100% safety of your product. Pathao courier delivers your
            parcels in every corner of Bangladesh right on time.
          </p>
          <div className="flex gap-2">
            <button className="bg-primary rounded-2xl px-2">
              Become a Merchant
            </button>
            <button className="bg-primary rounded-2xl px-2">
              Become a Merchant
            </button>
          </div>
        </div>
        <div>
          <img src={marchantImg2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Merchant;

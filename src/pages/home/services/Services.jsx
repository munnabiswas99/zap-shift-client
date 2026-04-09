import React from "react";
import serviceImg from "../../../assets/service.png";
const Services = () => {
  const logisticsServices = [
    {
      id: 1,
      title: "Express & Standard Delivery",
      description:
        "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.",
    },
    {
      id: 2,
      title: "Nationwide Delivery",
      description:
        "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.",
    },
    {
      id: 3,
      title: "Fulfillment Solution",
      description:
        "We also offer customized service with inventory management support, online order processing, packaging, and after sales support.",
    },
    {
      id: 4,
      title: "Cash on Home Delivery",
      description:
        "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
    },
    {
      id: 5,
      title: "Corporate Service / Contract In Logistics",
      description:
        "Customized corporate services which includes warehouse and inventory management support.",
    },
    {
      id: 6,
      title: "Parcel Return",
      description:
        "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.",
    },
  ];
  return (
    <div className="bg-secondary mt-3 rounded-md">
      <div className="items-center text-center pt-20">
        <h1 className="font-bold text-4xl text-white">Our Services</h1>
        <p className="text-[#DADADA]">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to<br></br>business shipments — we deliver on
          time, every time.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-10 gap-6">
        {logisticsServices.map((service) => (
          <div
            className="card w-96 bg-base-100 card-lg shadow-sm"
            key={service.id}
          >
            <div className="card-body items-center text-center hover:-translate-y-1 hover:shadow-xl hover:bg-primary">
              <img className="bg-[#EEEDFC] rounded-full p-1" src={serviceImg} alt="" />
              <h2 className="card-title">{service.title}</h2>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;

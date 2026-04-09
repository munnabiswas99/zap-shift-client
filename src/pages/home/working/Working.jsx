import React from "react";
import { FaCarSide, FaDochub } from "react-icons/fa";
import { GiMoneyStack } from "react-icons/gi";
import { MdCorporateFare } from "react-icons/md";

const Working = () => {
  const services = [
    {
      id: 1,
      title: "Booking Pick & Drop",
      description:
        "From personal packages to business shipments — we deliver on time, every time.",
      icon: FaCarSide, // ✅ component
    },
    {
      id: 2,
      title: "Cash On Delivery",
      description:
        "Secure and reliable cash on delivery service for your customers with smooth transactions.",
      icon: GiMoneyStack,
    },
    {
      id: 3,
      title: "Delivery Hub",
      description:
        "Efficient hub-based logistics system ensuring fast and organized parcel distribution.",
      icon: FaDochub,
    },
    {
      id: 4,
      title: "Booking SME & Corporate",
      description:
        "Tailored logistics solutions for SMEs and corporate businesses with scalable delivery.",
      icon: MdCorporateFare,
    },
  ];

  return (
    <div>
      <h3 className="font-bold text-3xl py-4 text-secondary">How It Works?</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service) => {
          const Icon = service.icon;

          return (
            <div
              key={service.id}
              className="bg-gray-100 p-6 rounded-2xl hover:shadow-xl hover:-translate-y-1 transition duration-300"
            >
              {/* Icon */}
              <div className="mb-4">
                <Icon className="text-3xl" />
              </div>

              {/* Title */}
              <h3 className="font-bold text-lg mb-2 text-secondary">{service.title}</h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Working;

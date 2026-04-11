import React, { useState } from "react";

const About = () => {
  const tabs = ["Story", "Mission", "Success", "Team & Others"];
  const content = {
    Story: `We started with a simple promise — to make parcel delivery fast, reliable, and stress-free. Over the years, our commitment to real-time tracking, efficient logistics, and customer-first service has made us a trusted partner for thousands.`,

    Mission: `Our mission is to simplify logistics by providing fast, secure, and affordable delivery services while ensuring customer satisfaction at every step.`,

    Success: `We have successfully delivered thousands of parcels on time with a growing network of trusted partners and satisfied customers worldwide.`,

    "Team & Others": `Our team consists of passionate professionals dedicated to innovation, reliability, and excellent customer service in the logistics industry.`,
  };
  const [activeTab, setActiveTab] = useState("Story");

  return (
    <div className="p-10">
      <div className="space-y-5 my-5">
        <h1 className="font-bold text-4xl">About Us</h1>
        <p className="font-gray-500">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal<br></br>packages to business shipments — we deliver on
          time, every time.
        </p>
        <hr className="font-gray-500" />
      </div>
      <div className="mx-auto">
        {/* Tabs */}
        <div className="flex gap-6 pb-3">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-2 text-sm font-medium transition-all duration-200
              ${
                activeTab === tab
                  ? "text-lime-700 border-b-2 border-lime-600"
                  : "text-gray-500 hover:text-black"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content Box */}
        <div className="mt-6 space-y-4 text-gray-600 leading-relaxed">
          <p>{content[activeTab]}</p>
        </div>
      </div>
    </div>
  );
};

export default About;

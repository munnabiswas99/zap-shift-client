import React from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const ReviewCard = ({reviewData}) => {
      const {
    userName,
    review,
    ratings,
    user_photoURL,
  } = reviewData;
  return (
    <div>
      <div className="bg-gray-100 rounded-2xl p-6 space-y-5 hover:shadow-lg transition">
        {/* Quote Icon */}
        <FaQuoteLeft className="text-3xl text-gray-300" />

        {/* Review Text */}
        <p className="text-gray-600 leading-relaxed text-sm">{review}</p>

        {/* Divider */}
        <div className="border-t border-dashed border-gray-300"></div>

        {/* Bottom Section */}
        <div className="flex items-center gap-4">
          {/* User Image */}
          <img
            src={user_photoURL}
            alt={userName}
            className="w-12 h-12 rounded-full object-cover"
          />

          {/* Name + Role */}
          <div className="flex-1">
            <h3 className="font-bold text-secondary">{userName}</h3>
            <p className="text-sm text-gray-500">Customer</p>
          </div>

          {/* Ratings */}
          <div className="flex items-center gap-1 text-yellow-500">
            <FaStar />
            <span className="text-sm font-medium text-gray-700">{ratings}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;

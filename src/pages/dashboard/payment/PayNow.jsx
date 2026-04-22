import React from "react";
import { useParams } from "react-router";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const PayNow = () => {
  const { parcelId } = useParams();
  const axioxSecure = useAxiosSecure();

  const { data: parcel, isLoading } = useQuery({
    queryKey: ["parcels", parcelId],
    queryFn: async () => {
      const res = await axioxSecure.get(`/parcels/${parcelId}`);
      return res.data;
    },
  });

  const handlePayment = async () => {
    const paymentInfo = {
        parcelId: parcel._id,
        senderEmail: parcel.senderEmail,
        parcelName: parcel.parcelName,
        cost: parcel.cost
    }

    const res = await axioxSecure.post('/create-checkout-session', paymentInfo);

    console.log(res.data);
    window.location.href = res.data.url;
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <span className="loading loading-infinity loading-xl"></span>
      </div>
    );
  }
  return (
    <div>
      <h1>Pay the bill ${parcel.cost} for your parcel: {parcel.parcelName}</h1>
      <button onClick={handlePayment} className="btn bg-primary btn-primary m-2 text-black">Pay</button>
    </div>
  );
};

export default PayNow;

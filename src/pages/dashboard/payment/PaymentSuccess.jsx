import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const axiosSecure = useAxiosSecure();
  const [paymentInfo, setPaymentInfo] = useState({});

  // console.log(sessionId);

  useEffect(() => {
    if (sessionId) {
      axiosSecure
        .patch(`/payment-success?session_id=${sessionId}`)
        .then((res) => {
          console.log(res.data);
          setPaymentInfo({
            transactionId: res.data.transactionId,
            trakingId: res.data.trakingId,
          });
        });
    }
  }, [sessionId, axiosSecure]);
  return (
    <div>
      <h1 className="text-4xl font-semibold">
        Your payment has been successfull
      </h1>
      <p>Your transaction ID: {paymentInfo.transactionId}</p>
      <p>Your Traking ID: {paymentInfo.trakingId}</p>

    </div>
  );
};

export default PaymentSuccess;

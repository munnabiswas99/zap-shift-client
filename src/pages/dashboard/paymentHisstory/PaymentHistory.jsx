import React from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const PaymentHistory = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: payments = [] } = useQuery({
    queryKey: ["payments", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments?email=${user?.email}`);
      return res.data;
    },
    enabled: !!user?.email,
  });

  return (
    <div className="max-w-11/12 mx-auto px-4">
      <h2 className="text-xl md:text-2xl font-semibold mb-4">
        Payment History ({payments.length})
      </h2>

      {/* ✅ Desktop Table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="table table-zebra">
          <thead>
            <tr>
              <th>#</th>
              <th>Parcel Info</th>
              <th>Recipient</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment, index) => (
              <tr key={payment._id}>
                <th>{index + 1}</th>
                <td>{payment.parcelName}</td>
                <td className="break-all">{payment.customerEmail}</td>
                <td>
                  <span className="badge badge-success">
                    {payment.paymentStatus}
                  </span>
                </td>
                <td>
                  <button className="btn btn-sm btn-primary text-black">View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ✅ Mobile Card View */}
      <div className="grid grid-cols-1 gap-4 md:hidden">
        {payments.map((payment, index) => (
          <div
            key={payment._id}
            className="border rounded-xl p-4 shadow-sm space-y-2"
          >
            <p className="font-semibold">#{index + 1}</p>

            <p>
              <span className="font-medium">Parcel:</span>{" "}
              {payment.parcelName}
            </p>

            <p className="break-all">
              <span className="font-medium">Email:</span>{" "}
              {payment.customerEmail}
            </p>

            <p>
              <span className="font-medium">Status:</span>{" "}
              <span className="badge badge-success">
                {payment.paymentStatus}
              </span>
            </p>

            <button className="btn btn-primary text-black btn-sm w-full mt-2">
              View
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaymentHistory;
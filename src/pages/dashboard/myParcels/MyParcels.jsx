import React from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { MdEditSquare } from "react-icons/md";
import { RiDeleteBin6Fill } from "react-icons/ri";
import Swal from "sweetalert2";
import { Link } from "react-router";

const MyParcels = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: parcels = [], refetch } = useQuery({
    queryKey: ["myParcels", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels?.email=${user.email}`);
      return res.data;
    },
  });

  const handlePercelDelete = (parcelId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed)
        axiosSecure.delete(`/parcels/${parcelId}`).then((res) => {
          if (res.data.deletedCount) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your parcel has been deleted.",
              icon: "success",
            });
          }
        });
    });
  };
  return (
    <div>
      <h1 className="text-bold text-4xl">
        My all Parcels here {parcels.length}
      </h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Cost</th>
              <th>Payment Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {parcels.map((parcel, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>{parcel.parcelName}</td>
                <td>{parcel.cost}</td>
                <td>
                    {
                        parcel.paymentStatus === 'paid' ? <span className="bg-green-700">PAID</span> : <Link to={`/dashboard/payNow/${parcel._id}`}><button className="btn btn-sm bg-primary ">Pay Now</button></Link>
                    }
                </td>
                <td>
                  <button className="btn btn-square">
                    <FaMagnifyingGlass />
                  </button>
                  <button className="btn btn-square">
                    <MdEditSquare />
                  </button>
                  <button
                    onClick={() => handlePercelDelete(parcel._id)}
                    className="btn btn-square"
                  >
                    <RiDeleteBin6Fill />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyParcels;

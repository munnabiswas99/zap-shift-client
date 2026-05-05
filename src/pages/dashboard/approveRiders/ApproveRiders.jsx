import React from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

import { ImUserCheck } from "react-icons/im";
import { MdCancel } from "react-icons/md";
import { RiDeleteBin6Fill } from "react-icons/ri";
import Swal from "sweetalert2";
import { FaEye } from "react-icons/fa";

import { FcApproval, FcDisapprove } from "react-icons/fc";

const ApproveRiders = () => {
  const axiosSecure = useAxiosSecure();
  const { refetch, data: riders = [] } = useQuery({
    queryKey: ["riders", "pending"],
    queryFn: async () => {
      const res = await axiosSecure.get("/riders");
      return res.data;
    },
  });

  const handleUpdateStatus = (rider, status) => {
    const aproveInfo = { status: status, email: rider.email };

    axiosSecure.patch(`/riders/${rider._id}`, aproveInfo).then((res) => {
      if (res.data.modifiedCount) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: status === "approved" ? "success" : "error",
          title: `Rider has been ${status}`,
          showConfirmButton: false,
          timer: 2000,
        });
      }
    });
  };

  const handleApprove = (rider) => {
    handleUpdateStatus(rider, "approved");
  };
  const handleReject = (rider) => {
    handleUpdateStatus(rider, "rejected");
  };

  const deleteRider = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (!result.isConfirmed) return;

    try {
      const res = await axiosSecure.delete(`/riders/${id}`);

      if (res.data.deletedCount > 0) {
        await Swal.fire({
          title: "Deleted!",
          text: "Rider has been removed.",
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
        });

        refetch();
      }
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "Something went wrong while deleting.",
        icon: "error",
      });
    }
  };

  return (
    <div>
      <h1>Rider Applications: {riders.length}</h1>

      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Districts</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {riders.map((rider, index) => (
              <tr key={rider._id}>
                <th>{index + 1}</th>
                <td>{rider.name}</td>
                <td>{rider.email}</td>
                <td>{rider.district}</td>
                {rider.status === "approved" ? (
                  <td className="text-green-600">{rider.status}</td>
                ) : (
                  <td className="text-red-600">{rider.status}</td>
                )}
                <td>
                  <button className="btn tooltip" data-tip="View">
                    <FaEye />
                  </button>
                  <button
                    onClick={() => handleApprove(rider)}
                    className="btn tooltip"
                    data-tip="Approve"
                  >
                    <ImUserCheck />
                  </button>
                  <button
                    onClick={() => handleReject(rider)}
                    className="btn tooltip"
                    data-tip="Cancel"
                  >
                    <MdCancel />
                  </button>
                  <button
                    onClick={() => deleteRider(rider._id)}
                    className="btn tooltip"
                    data-tip="Delete"
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

export default ApproveRiders;

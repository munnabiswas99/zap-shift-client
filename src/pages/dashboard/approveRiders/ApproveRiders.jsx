import React from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

import { ImUserCheck } from "react-icons/im";
import { MdCancel } from "react-icons/md";
import { RiDeleteBin6Fill } from "react-icons/ri";

const ApproveRiders = () => {
  const axiosSecure = useAxiosSecure();
  const { data: riders = [] } = useQuery({
    queryKey: ["riders", "pending"],
    queryFn: async () => {
      const res = await axiosSecure.get("/riders");
      return res.data;
    },
  });
  return (
    <div>
      <h1>Rider Applications: {riders.length}</h1>

      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
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
                <th>{index+1}</th>
                <td>{rider.name}</td>
                <td>{rider.email}</td>
                <td>{rider.district}</td>
                <td>{rider.status}</td>
                <td>
                    <button className="btn tooltip" data-tip="Approve"><ImUserCheck /></button>
                    <button className="btn tooltip" data-tip="Cancel"><MdCancel /></button>
                    <button className="btn tooltip" data-tip="Delete"><RiDeleteBin6Fill /></button>
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

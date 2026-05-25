import React, { useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { TiUserAdd } from "react-icons/ti";
import { FaUserMinus } from "react-icons/fa6";
import Swal from "sweetalert2";

const UserManagement = () => {
  const axiosSecure = useAxiosSecure();
  const [searchText, setSearchText] = useState("");

  const { refetch, data: users = [] } = useQuery({
    queryKey: ["users", searchText],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users?searchText=${searchText}`);
      return res.data;
    },
  });

  const handleAdmin = (user, role) => {
    let adminInfo;

    if (role === "admin") {
      adminInfo = { role: "user" };
    } else {
      adminInfo = { role: "admin" };
    }

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed)
        axiosSecure.patch(`/users/${user._id}/role`, adminInfo).then((res) => {
          if (res.data.modifiedCount) {
            refetch();
            Swal.fire({
              title: "Submitted!",
              text: `${user.displayName}'s role changed to ${user.role}`,
              icon: "success",
            });
          }
        });
    });
  };

  return (
    <div>
      <h1 className="text-4xl font-bold">All Users: {users.length}</h1>
      <div className="overflow-x-auto">
        {/* Search User */}
        <label className="input">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input onChange={(e)=>setSearchText(e.target.value)} type="search" className="grow" placeholder="Search user" />
        </label>
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Admin Actions</th>
              <th>Other Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img src={user.photoURL} alt="Avatar" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{user.displayName}</div>
                    </div>
                  </div>
                </td>
                <td>{user.email}</td>
                <td>{user.role}</td>

                {user.role === "admin" ? (
                  <th>
                    <button
                      onClick={() => handleAdmin(user, user.role)}
                      className="btn tooltip bg-red-400"
                      data-tip="Remove Admin"
                    >
                      <FaUserMinus />
                    </button>
                  </th>
                ) : (
                  <th>
                    <button
                      onClick={() => handleAdmin(user, user.role)}
                      className="btn tooltip bg-green-400"
                      data-tip="Add Admin"
                    >
                      <TiUserAdd />
                    </button>
                  </th>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserManagement;

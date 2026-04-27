import React from "react";
import { useForm, useWatch } from "react-hook-form";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import { useLoaderData, useNavigate } from "react-router";
import Swal from "sweetalert2";

const Rider = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const navigate = useNavigate();

  const region = useWatch({ control, name: "region" });

  const handleSendParcel = (data) => {
    console.log(data);

    Swal.fire({
      title: "Agree with the cost?",
      text: `You will be charged taka!`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes!",
    }).then((result) => {
      if (result.isConfirmed)
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
    });
  };


  const serviceCenters = useLoaderData();

  const duplicateRegion = serviceCenters.map((c) => c.region);
  const regions = [...new Set(duplicateRegion)];
  //   console.log(regions);

  const districtByRegion = (region) => {
    const regionDistricts = serviceCenters.filter((c) => c.region === region);
    const districts = regionDistricts.map((d) => d.district);
    return districts;
  };


  return (
    <div>
      <h1 className="font-bold text-4xl">Be a rider</h1>
      <form onSubmit={handleSubmit(handleSendParcel)}>
        <hr className="text-gray-300 my-5" />

        {/* // Rider Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* // Rider Details */}
          <div className="space-y-2">
            <h3 className="text-2xl font-bold">Rider Details</h3>
            <fieldset className="fieldset">
              <label className="label font-semibold">Name</label>
              <input
                type="text"
                {...register("name")}
                className="input w-full"
                placeholder="Name"
                defaultValue={user?.displayName}
              />
            </fieldset>
            <fieldset className="fieldset">
              <label className="label font-semibold">Email</label>
              <input
                type="email"
                {...register("email")}
                className="input w-full"
                placeholder="Email"
                defaultValue={user?.email}
              />
            </fieldset>
            <fieldset className="fieldset">
              <label className="label font-semibold">Address</label>
              <input
                type="text"
                {...register("address")}
                className="input w-full"
                placeholder="Address"
              />
            </fieldset>
            <fieldset className="fieldset">
              <label className="label font-semibold">Phone No</label>
              <input
                type="tel"
                {...register("phone")}
                className="input w-full"
                placeholder="Phone No"
              />
            </fieldset>

            {/*Rider Region  */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Region</legend>
              <select
                {...register("region")}
                defaultValue="Pick a region"
                className="select w-full"
              >
                <option disabled={true}>Pick a region</option>
                {regions.map((region, index) => (
                  <option key={index} value={region}>
                    {region}
                  </option>
                ))}
              </select>
            </fieldset>

            {/*Rider District  */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend">District</legend>
              <select
                {...register("district")}
                defaultValue="Pick a District"
                className="select w-full"
              >
                <option disabled={true}>Pick a District</option>
                {districtByRegion(region).map((district, index) => (
                  <option key={index} value={district}>
                    {district}
                  </option>
                ))}
              </select>
            </fieldset>
            <fieldset className="fieldset w-full">
              <label className="label font-semibold">Pickup Instruction</label>

              <textarea
                {...register("pickupInstruction")}
                placeholder="Pickup Instruction"
                rows={4}
                className="w-full px-4 py-3 rounded-lg 
               bg-gray-100 border border-gray-200
               focus:outline-none focus:ring-2 focus:ring-lime-400 
               resize-none"
              ></textarea>
            </fieldset>
          </div>
        </div>
        <input
          type="submit"
          className="p-2 bg-primary"
          value="Proceed to Confirm Booking"
        />
      </form>
    </div>
  );
};

export default Rider;

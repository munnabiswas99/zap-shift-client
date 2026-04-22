import React from "react";
import { Controller, useForm, useWatch } from "react-hook-form";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";

const SendParcel = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const senderRegion = useWatch({ control, name: "senderRegion" });
  const receiverRegion = useWatch({ control, name: "receiverRegion" });

  const handleSendParcel = (data) => {
    console.log(data);
    const isDocument = data.parcelType === "document";
    const isSameDistrict = data.senderDistrict === data.receiverDistrict;
    const parcelWeight = parseFloat(data.parcelWeight);

    let cost = 0;

    if (isDocument) {
      cost = isSameDistrict ? 60 : 80;
    } else {
      if (parcelWeight <= 3) {
        cost = isSameDistrict ? 110 : 150;
      } else {
        const minCharge = isSameDistrict ? 110 : 150;
        const extraWeight = parcelWeight - 3;
        const extraCharge = isSameDistrict
          ? extraWeight * 40
          : extraWeight * 40 + 40;
        cost = minCharge + extraCharge;
      }
    }

    // console.log("cost: ", cost);
    data.cost = cost;

    Swal.fire({
      title: "Agree with the cost?",
      text: `You will be charged ${cost} taka!`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes!",
    }).then((result) => {
      if (result.isConfirmed)
        // Swal.fire({
        //   title: "Deleted!",
        //   text: "Your file has been deleted.",
        //   icon: "success",
        // });
        axiosSecure.post("/parcels", data).then((res) => {
          // console.log("Parcel data saved in DB.", res.data);
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
      <h1 className="text-5xl font-bold">Send A Parcel</h1>
      <p className="text-bold">Enter Your Parcel Details</p>
      <hr className="text-gray-300 my-5" />
      <form onSubmit={handleSubmit(handleSendParcel)}>
        {/* // Parcel Type Radio Button */}
        <div className="flex space-x-4 space-y-2">
          <label>
            <input
              {...register("parcelType")}
              type="radio"
              className="radio radio-success mr-2"
              defaultChecked
              value="document"
            />
            Document
          </label>
          <label>
            <input
              {...register("parcelType")}
              type="radio"
              className="radio radio-success mr-2"
              value="non-document"
            />
            Non-Document
          </label>
        </div>

        {/* // Parcel Name and Weight */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="">
            <p>Parcel Name</p>
            <input
              type="text"
              {...register("parcelName")}
              placeholder="Parcel Name"
              className="input input-neutral w-full"
            />
          </div>
          <div className="">
            <p>Parcel Weight (KG)</p>
            <input
              type="number"
              {...register("parcelWeight")}
              placeholder="Parcel Weight (KG)"
              className="input input-neutral w-full"
            />
          </div>
        </div>
        <hr className="text-gray-300 my-5" />

        {/* // Sender and receiver Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* // Sender Details */}
          <div className="space-y-2">
            <h3 className="text-2xl font-bold">Sender Details</h3>
            <fieldset className="fieldset">
              <label className="label font-semibold">Sender Name</label>
              <input
                type="text"
                {...register("senderName")}
                className="input w-full"
                placeholder="Sender Name"
                defaultValue={user?.displayName}
              />
            </fieldset>
            <fieldset className="fieldset">
              <label className="label font-semibold">Sender Email</label>
              <input
                type="email"
                {...register("senderEmail")}
                className="input w-full"
                placeholder="Sender Email"
                defaultValue={user?.email}
              />
            </fieldset>
            <fieldset className="fieldset">
              <label className="label font-semibold">Address</label>
              <input
                type="text"
                {...register("senderAddress")}
                className="input w-full"
                placeholder="Address"
              />
            </fieldset>
            <fieldset className="fieldset">
              <label className="label font-semibold">Sender Phone No</label>
              <input
                type="tel"
                {...register("senderPhone")}
                className="input w-full"
                placeholder="Sender Phone No"
              />
            </fieldset>

            {/*Sender Region  */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Region</legend>
              <select
                {...register("senderRegion")}
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

            {/*Sender District  */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend">District</legend>
              <select
                {...register("senderDistrict")}
                defaultValue="Pick a District"
                className="select w-full"
              >
                <option disabled={true}>Pick a District</option>
                {districtByRegion(senderRegion).map((district, index) => (
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

          {/* // Reciver Details */}
          <div className="space-y-2">
            <h3 className="text-2xl font-bold">Receiver Details</h3>
            <fieldset className="fieldset">
              <label className="label font-semibold">Receiver Name</label>
              <input
                type="text"
                {...register("receiverName")}
                className="input w-full"
                placeholder="Receiver Name"
              />
            </fieldset>
            <fieldset className="fieldset">
              <label className="label font-semibold">Receiver Email</label>
              <input
                type="email"
                {...register("receiverEmail")}
                className="input w-full"
                placeholder="Receiver Email"
              />
            </fieldset>
            <fieldset className="fieldset">
              <label className="label font-semibold">Address</label>
              <input
                type="text"
                {...register("receiverAddress")}
                className="input w-full"
                placeholder="Address"
              />
            </fieldset>
            <fieldset className="fieldset">
              <label className="label font-semibold">Receiver Phone No</label>
              <input
                type="tel"
                {...register("receiverPhone")}
                className="input w-full"
                placeholder="Receiver Phone No"
              />
            </fieldset>

            {/*Sender Region  */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Region</legend>
              <select
                {...register("receiverRegion")}
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

            {/*Sender District  */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend">District</legend>
              <select
                {...register("receiverDistrict")}
                defaultValue="Pick a District"
                className="select w-full"
              >
                <option disabled={true}>Pick a District</option>
                {districtByRegion(receiverRegion).map((district, index) => (
                  <option key={index} value={district}>
                    {district}
                  </option>
                ))}
              </select>
            </fieldset>

            <fieldset className="fieldset w-full">
              <label className="label font-semibold">
                Delivery Instruction
              </label>

              <textarea
                {...register("deliveryInstruction")}
                placeholder="Delivery Instruction"
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

export default SendParcel;

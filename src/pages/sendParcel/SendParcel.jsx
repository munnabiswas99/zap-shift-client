import React from "react";
import { useForm } from "react-hook-form";

const SendParcel = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleSendParcel = (data) => {
    console.log(data);
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
        <div className="flex gap-5">
          <div className="flex-1">
            <p>Parcel Name</p>
            <input
              type="text"
              placeholder="Parcel Name"
              className="input input-neutral w-full"
            />
          </div>
          <div className="flex-1">
            <p>Parcel Weight (KG)</p>
            <input
              type="text"
              placeholder="Parcel Weight (KG)"
              className="input input-neutral w-full"
            />
          </div>
        </div>
        <hr className="text-gray-300 my-5" />

        {/* // Sender and receiver Details */}
        <div>
          {/* // Sender Details */}
          <div>
            <h3 className="text-2xl font-bold">Sender Details</h3>
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input type="email" className="input" placeholder="Email" />
              <label className="label">Password</label>
              <input type="password" className="input" placeholder="Password" />
            </fieldset>
          </div>

          {/* // Reciver Details */}
          <div></div>
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

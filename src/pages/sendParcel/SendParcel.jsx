import React from "react";
import { Controller, useForm } from "react-hook-form";
import Select from "react-select";

const SendParcel = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const handleSendParcel = (data) => {
    console.log(data);
  };

  const districts = [
    "Dhaka",
    "Chattogram",
    "Cumilla",
    "Gazipur",
    "Narayanganj",
    "Rajshahi",
    "Khulna",
    "Barishal",
    "Sylhet",
    "Rangpur",
    "Mymensingh",
    "Bogra",
    "Jessore",
    "Noakhali",
    "Feni",
    "Cox's Bazar",
    "Tangail",
    "Pabna",
    "Kushtia",
    "Dinajpur",
    "Thakurgaon",
    "Chuadanga",
    "Meherpur",
    "Jhenaidah",
    "Magura",
    "Satkhira",
    "Bagerhat",
    "Pirojpur",
    "Jhalokathi",
    "Bhola",
    "Barguna",
    "Habiganj",
    "Moulvibazar",
    "Sunamganj",
    "Netrokona",
    "Sherpur",
    "Jamalpur",
    "Naogaon",
    "Natore",
    "Chapainawabganj",
    "Joypurhat",
    "Sirajganj",
    "Gaibandha",
    "Kurigram",
    "Lalmonirhat",
    "Nilphamari",
    "Panchagarh",
  ];

  // convert to react-select format
  const districtOptions = districts.map((d) => ({
    value: d,
    label: d,
  }));

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
            <fieldset className="fieldset">
              <label className="label font-semibold">District</label>

              <Controller
                name="senderDistrict"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <Select
                    options={districtOptions}
                    placeholder="Search & select district"
                    value={districtOptions.find(
                      (option) => option.value === field.value,
                    )}
                    onChange={(selected) => field.onChange(selected.value)}
                  />
                )}
              />

              {errors.senderDistrict && (
                <p className="text-red-500">District is required</p>
              )}
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
            <fieldset className="fieldset">
              <label className="label font-semibold">Receiver District</label>

              <Controller
                name="receiverDistrict"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <Select
                    options={districtOptions}
                    placeholder="Search & select district"
                    value={districtOptions.find(
                      (option) => option.value === field.value,
                    )}
                    onChange={(selected) => field.onChange(selected.value)}
                  />
                )}
              />

              {errors.receiverDistrict && (
                <p className="text-red-500">District is required</p>
              )}
            </fieldset>
            <fieldset className="fieldset w-full">
              <label className="label font-semibold">Delivery Instruction</label>

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

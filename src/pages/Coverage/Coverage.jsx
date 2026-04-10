import React, { useRef } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useLoaderData } from "react-router";

const Coverage = () => {
  const serviceCenters = useLoaderData();
  const position = [23.685, 90.3563];
  const mapRef = useRef(null)

  const handleSearch = (e) => {
    e.preventDefault();
    const loc = e.target.location.value;
    // console.log(loc)
    const district = serviceCenters.find(c => c.district.toLowerCase().includes(loc.toLowerCase()));

    if(district) {
        const coord = [district.latitude, district.longitude];
        mapRef.current.flyTo(coord, 14);
    }
  }
  return (
    <div className="p-20 bg-base-100 shadow-sm my-10">
      <div className="space-y-5 my-4">
        <h3 className="text-4xl font-bold">We are available in 64 districts</h3>
        <form action="" onSubmit={handleSearch}>
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
            <input type="search" className="grow" placeholder="Search" name="location"/>
          </label>
          <input type="submit" className="bg-primary px-3 py-1 rounded-xl ml-2 "/>
        </form>
        <hr className="text-gray-400 font-bold"/>
        <h3 className="font-bold text-3xl text-gray-700">We deliver almost all over Bangladesh</h3>
      </div>
      <MapContainer
        center={position}
        zoom={8}
        scrollWheelZoom={true}
        className="h-[400px] w-auto mx-auto"
        ref={mapRef}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {serviceCenters.map((center, index) => (
          <Marker key={index} position={[center.latitude, center.longitude]}>
            <Popup>
              {center.district} <br /> {center.covered_area.join(", ")}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
      ,
    </div>
  );
};

export default Coverage;

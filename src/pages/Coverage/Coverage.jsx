import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useLoaderData } from "react-router";

const Coverage = () => {
  const serviceCenters = useLoaderData();
  const position = [23.685, 90.3563];
  return (
    <div className="border h-[800px]">
      <MapContainer
        center={position}
        zoom={8}
        scrollWheelZoom={true}
        className="h-[800px]"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {serviceCenters.map((center, index) => (
          <Marker key={index} position={[center.latitude, center.longitude]}>
            <Popup>
              {center.district} <br /> {center.covered_area.join(', ')}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
      ,
    </div>
  );
};

export default Coverage;

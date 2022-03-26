import React from "react";

export default function LocationItem({ location, onClick }) {
  return (
    <div onClick={onClick} className="flex-col location-item">
      <span>{location.name}</span>
    </div>
  );
}

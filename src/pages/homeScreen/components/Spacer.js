import React from "react";

export default function Spacer({ size = 10, ...props }) {
  const dimensions = `${size.toString()}px`;

  return (
    <div props={props} style={{ width: dimensions, height: dimensions }}></div>
  );
}

import React from "react";

export default function Chip({
  color = "light",
  backgroundColor = "primary",
  label,
}) {
  return (
    <div
      className={`bg-${backgroundColor} p-1 px-2 fw-bold chip-status rounded-pill text-${color} w-100 text-center text-nowrap`}
    >
      {label?.toUpperCase()}
    </div>
  );
}

import * as React from "react";

export default function Lupa({
  fill = "#838591",
  width = "16",
  height = "16",
  ...rest
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="6.5" cy="6.5" r="5.75" stroke={fill} stroke-width="1.5" />
      <path
        d="M11 11L15 15"
        stroke={fill}
        stroke-width="1.5"
        stroke-linecap="round"
      />
    </svg>
  );
}

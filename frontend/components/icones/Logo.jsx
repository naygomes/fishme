import * as React from "react";

export default function Logo({
  fill = "#3B81F6",
  width = "48",
  height = "48",
  ...rest
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="24" cy="24" r="24" fill="#3751FF" />
      <path
        d="M29 24.5L12.5 34.4593L12.5 14.5407L29 24.5Z"
        fill="white"
        fillOpacity="0.7"
      />
      <path
        d="M20 15C20 14.4477 20.4477 14 21 14H27.4857C30.819 14 33.4 14.9143 35.2286 16.743C37.0762 18.5716 38 21.1475 38 24.4705C38 27.8132 37.0762 30.4087 35.2286 32.257C33.4 34.0857 30.819 35 27.4857 35H21C20.4477 35 20 34.5523 20 34V15Z"
        fill="url(#paint0_linear_8_1035)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_8_1035"
          x1="20"
          y1="14"
          x2="38"
          y2="35"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0.7" />
          <stop offset="1" stopColor="white" />
        </linearGradient>
      </defs>
    </svg>
  );
}

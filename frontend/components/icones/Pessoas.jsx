import * as React from "react";

export default function Pessoas({
  fill = "#838591",
  width = "16",
  height = "12",
  ...rest
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.4 5.20002C3.2825 5.20002 4 4.48252 4 3.60002C4 2.71752 3.2825 2.00002 2.4 2.00002C1.5175 2.00002 0.8 2.71752 0.8 3.60002C0.8 4.48252 1.5175 5.20002 2.4 5.20002ZM13.6 5.20002C14.4825 5.20002 15.2 4.48252 15.2 3.60002C15.2 2.71752 14.4825 2.00002 13.6 2.00002C12.7175 2.00002 12 2.71752 12 3.60002C12 4.48252 12.7175 5.20002 13.6 5.20002ZM14.4 6.00002H12.8C12.36 6.00002 11.9625 6.17753 11.6725 6.46502C12.68 7.01753 13.395 8.01503 13.55 9.20003H15.2C15.6425 9.20003 16 8.84253 16 8.40003V7.60003C16 6.71753 15.2825 6.00002 14.4 6.00002ZM8 6.00002C9.5475 6.00002 10.8 4.74752 10.8 3.20002C10.8 1.65252 9.5475 0.400024 8 0.400024C6.4525 0.400024 5.2 1.65252 5.2 3.20002C5.2 4.74752 6.4525 6.00002 8 6.00002ZM9.92 6.80002H9.7125C9.1925 7.05002 8.615 7.20003 8 7.20003C7.385 7.20003 6.81 7.05002 6.2875 6.80002H6.08C4.49 6.80002 3.2 8.09003 3.2 9.68003V10.4C3.2 11.0625 3.7375 11.6 4.4 11.6H11.6C12.2625 11.6 12.8 11.0625 12.8 10.4V9.68003C12.8 8.09003 11.51 6.80002 9.92 6.80002ZM4.3275 6.46502C4.0375 6.17753 3.64 6.00002 3.2 6.00002H1.6C0.7175 6.00002 0 6.71753 0 7.60003V8.40003C0 8.84253 0.3575 9.20003 0.8 9.20003H2.4475C2.605 8.01503 3.32 7.01753 4.3275 6.46502Z"
        fill={fill}
      />
    </svg>
  );
}

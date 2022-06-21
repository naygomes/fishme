import React from "react";

export default function Botao({
  label,
  color = "primary",
  typeButton = "",
  addClass = "",
  onClick,
}) {
  return (
    <button
      type="button"
      className={`btn btn${
        typeButton.toLowerCase() === "outline"
          ? "-" + typeButton.toLowerCase()
          : ""
      }-${color} ${addClass}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

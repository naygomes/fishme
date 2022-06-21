import React from "react";

export default function Input({
  htmlFor,
  label,
  required,
  type,
  id,
  placeholder,
}) {
  return (
    <>
      <label htmlFor={htmlFor} className="form-label">
        {label.toUpperCase()}
        <span className="text-danger fw-bold">{required ? "*" : ""}</span>
      </label>
      <input
        type={type}
        className="form-control"
        id={id}
        placeholder={placeholder}
      />
    </>
  );
}

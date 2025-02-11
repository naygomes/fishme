import React from "react";

export default function Input({
  htmlFor,
  label,
  required,
  type,
  id,
  placeholder,
  value,
  handleChange,
}) {
  return (
    <div className="d-flex flex-column">
      <label htmlFor={htmlFor} className="form-label">
        {label?.toUpperCase()}
        <span className="text-danger fw-bold">{required ? "*" : ""}</span>
      </label>
      <input
        onChange={handleChange}
        value={value}
        type={type}
        className="form-control"
        id={id}
        placeholder={placeholder}
      />
    </div>
  );
}

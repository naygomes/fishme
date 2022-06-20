import React from "react";
import { Lupa, Sino } from "./icones";

const Topbar = ({ children, name }) => {
  return (
    <div className="w-100 d-flex flex-row justify-content-between mb-5">
      <h4 className="page-title m-0">{children}</h4>
      <div className="h-auto d-flex align-items-center justify-content-between gap-4">
        <div className="h-100 px-4 icons-border d-flex align-items-center justify-content-between gap-3">
          <Lupa width="18" height="18" />
          <Sino width="18" height="18" />
        </div>
        <p className="m-0 user-name">{name}</p>
      </div>
    </div>
  );
};

export default Topbar;
